import { createServer } from 'node:http';
import { createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import portfolioRedirects from '../src/data/portfolioRedirects.json' with { type: 'json' };

const publicDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../dist/public');
const port = Number(process.env.PORT);
const basePath = (process.env.BASE_PATH ?? '/').replace(/\/$/, '');
if (!Number.isInteger(port) || port <= 0) {
  throw new Error('A valid PORT environment variable is required.');
}
await stat(path.join(publicDir, 'index.html'));

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.pdf': 'application/pdf',
};

const findFile = async (file) => {
  try {
    const info = await stat(file);
    return info.isFile() ? { file, info } : null;
  } catch (error) {
    if (error.code === 'ENOENT' || error.code === 'ENOTDIR') return null;
    throw error;
  }
};

const server = createServer(async (req, res) => {
  try {
    if (req.method !== 'GET' && req.method !== 'HEAD') {
      res.writeHead(405, { Allow: 'GET, HEAD' });
      res.end('Method not allowed');
      return;
    }
    const url = new URL(req.url ?? '/', 'http://localhost');
    let pathname;
    try {
      pathname = decodeURIComponent(url.pathname);
    } catch {
      res.writeHead(400);
      res.end('Invalid URL');
      return;
    }
    if (basePath && !pathname.startsWith(`${basePath}/`) && pathname !== basePath) {
      res.writeHead(404);
      res.end('Not found');
      return;
    }
    const relative = pathname.slice(basePath.length);
    const route = relative.replace(/\/$/, '') || '/';
    const target = portfolioRedirects[route];
    if (target) {
      res.writeHead(301, {
        Location: `${basePath}${target}${url.search}`,
        'Cache-Control': 'public, max-age=3600',
      });
      res.end();
      return;
    }

    const resolved = path.resolve(publicDir, `.${relative || '/'}`);
    if (
      pathname.includes('\0') ||
      (resolved !== publicDir && !resolved.startsWith(`${publicDir}${path.sep}`))
    ) {
      res.writeHead(400);
      res.end('Invalid path');
      return;
    }
    const found = await findFile(resolved) ?? await findFile(path.join(resolved, 'index.html'));
    const page = found ?? await findFile(path.join(publicDir, '404.html'));
    if (!page) {
      res.writeHead(404);
      res.end('Not found');
      return;
    }

    const etag = `"${page.info.size.toString(16)}-${Math.floor(page.info.mtimeMs).toString(16)}"`;
    const headers = {
      'Content-Type': mimeTypes[path.extname(page.file)] ?? 'application/octet-stream',
      'Cache-Control': found && relative.startsWith('/assets/')
        ? 'public, max-age=31536000, immutable'
        : 'public, max-age=0, must-revalidate',
      'X-Content-Type-Options': 'nosniff',
      ETag: etag,
    };
    if (found && req.headers['if-none-match'] === etag) {
      res.writeHead(304, headers);
      res.end();
      return;
    }
    res.writeHead(found ? 200 : 404, { ...headers, 'Content-Length': page.info.size });
    if (req.method === 'HEAD') {
      res.end();
    } else {
      const stream = createReadStream(page.file);
      stream.on('error', (error) => res.destroy(error));
      stream.pipe(res);
    }
  } catch (error) {
    console.error('Unable to serve request', error);
    if (!res.headersSent) res.writeHead(500);
    res.end('Unable to serve request');
  }
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Mazzi Studios serving pre-rendered pages on port ${port}`);
});
for (const signal of ['SIGINT', 'SIGTERM']) {
  process.once(signal, () => server.close(() => process.exit(0)));
}
