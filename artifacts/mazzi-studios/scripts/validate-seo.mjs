import { access, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { prerenderRoutes, SITE_URL } from '../dist/server/entry-server.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const publicDir = path.join(root, 'dist/public');
for (const route of prerenderRoutes) {
  const file = route.path === '/' ? 'index.html' : `${route.path.slice(1)}/index.html`;
  const html = await readFile(path.join(publicDir, file), 'utf8');
  for (const required of [
    '<title>',
    'name="description"',
    'rel="canonical"',
    'property="og:title"',
    'name="twitter:title"',
    '<h1',
  ]) {
    if (!html.includes(required)) {
      throw new Error(`${file} is missing ${required}`);
    }
  }
  if (html.includes('<div id="root"></div>')) {
    throw new Error(`${file} contains an empty app root`);
  }
  if (html.includes('—')) {
    throw new Error(`${file} contains a disallowed em dash`);
  }
  const expectedCanonical = route.path === '/' ? `${SITE_URL}/` : `${SITE_URL}${route.path}`;
  if (!html.includes(`rel="canonical" href="${expectedCanonical}"`)) {
    throw new Error(`${file} has a canonical URL that does not match ${expectedCanonical}`);
  }
  const expectedRobots = route.index ? 'index, follow' : 'noindex, nofollow';
  if (!html.includes(`name="robots" content="${expectedRobots}"`)) {
    throw new Error(`${file} must use robots="${expectedRobots}"`);
  }
}

const sitemap = await readFile(path.join(publicDir, 'sitemap.xml'), 'utf8');
if (sitemap.includes('/thank-you')) {
  throw new Error('sitemap.xml must not contain /thank-you');
}
for (const route of prerenderRoutes.filter((route) => route.index)) {
  const url = route.path === '/' ? `${SITE_URL}/` : `${SITE_URL}${route.path}`;
  if (!sitemap.includes(`<loc>${url}</loc>`)) {
    throw new Error(`sitemap.xml is missing ${url}`);
  }
}

const thankYou = await readFile(path.join(publicDir, 'thank-you/index.html'), 'utf8');
if (!thankYou.includes('noindex, nofollow')) {
  throw new Error('thank-you/index.html must be noindex, nofollow');
}

await access(path.join(publicDir, '404.html'));
console.log('SEO validation passed');