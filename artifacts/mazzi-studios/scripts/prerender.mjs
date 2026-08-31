import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { render, prerenderRoutes, SITE_URL } from '../dist/server/entry-server.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const publicDir = path.join(root, 'dist/public');
const template = await readFile(path.join(publicDir, 'index.html'), 'utf8');

const makeDocument = (routePath) => {
  const rendered = render(routePath);
  return template
    .replace('<!--app-head-->', rendered.head)
    .replace('<!--app-html-->', rendered.html);
};

for (const route of prerenderRoutes) {
  const outputFile =
    route.path === '/'
      ? path.join(publicDir, 'index.html')
      : path.join(publicDir, route.path.slice(1), 'index.html');
  await mkdir(path.dirname(outputFile), { recursive: true });
  await writeFile(outputFile, makeDocument(route.path));
}

await writeFile(path.join(publicDir, '404.html'), makeDocument('/__not-found'));

const escapeXml = (value) =>
  value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');

const sitemapEntries = prerenderRoutes
  .filter((route) => route.index)
  .map((route) => {
    const location = route.path === '/' ? `${SITE_URL}/` : `${SITE_URL}${route.path}`;
    return [
      '  <url>',
      `    <loc>${escapeXml(location)}</loc>`,
      route.lastmod ? `    <lastmod>${escapeXml(route.lastmod)}</lastmod>` : null,
      `    <changefreq>${route.changefreq}</changefreq>`,
      `    <priority>${route.priority.toFixed(1)}</priority>`,
      '  </url>',
    ].filter(Boolean).join('\n');
  })
  .join('\n');

await writeFile(
  path.join(publicDir, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapEntries}\n</urlset>\n`,
);

console.log(`Prerendered ${prerenderRoutes.length} routes plus 404.html`);