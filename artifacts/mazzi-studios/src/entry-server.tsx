import { renderToString } from 'react-dom/server';
import App from './App';
import {
  HeadCollector,
  SITE_URL,
  normalizeCanonical,
  type HeadProps,
} from './components/seo/Head';
import { prerenderRoutes } from './routeManifest';

const escapeHtml = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');

const renderHead = (head: HeadProps, path: string) => {
  const description = head.description ?? '';
  const canonical = normalizeCanonical(head.canonical ?? `${SITE_URL}${path}`);
  const image = new URL(head.ogImage ?? '/brand-assets/mazzi-og.jpg', SITE_URL).toString();
  const robots = head.robots ?? 'index, follow';
  const schemas = head.jsonLd
    ? (Array.isArray(head.jsonLd) ? head.jsonLd : [head.jsonLd])
    : [];

  return [
    `<title>${escapeHtml(head.title)}</title>`,
    `<meta name="description" content="${escapeHtml(description)}" />`,
    `<meta name="robots" content="${escapeHtml(robots)}" />`,
    `<link rel="canonical" href="${escapeHtml(canonical)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="Mazzi Studios" />`,
    `<meta property="og:title" content="${escapeHtml(head.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(description)}" />`,
    `<meta property="og:image" content="${escapeHtml(image)}" />`,
    `<meta property="og:url" content="${escapeHtml(canonical)}" />`,
    `<meta property="og:locale" content="en_US" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtml(head.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(description)}" />`,
    `<meta name="twitter:image" content="${escapeHtml(image)}" />`,
    ...schemas.map(
      (schema) =>
        `<script type="application/ld+json" data-mazzi-schema>${JSON.stringify(schema).replaceAll('<', '\\u003c')}</script>`,
    ),
  ].join('\n    ');
};

export function render(path: string) {
  let collectedHead: HeadProps = {
    title: 'Mazzi Studios',
    description: 'AI-powered marketing leadership for healthcare and B2B companies.',
  };

  const html = renderToString(
    <HeadCollector onHead={(head) => { collectedHead = head; }}>
      <App initialPath={path} />
    </HeadCollector>,
  );

  return {
    html,
    head: renderHead(collectedHead, path),
  };
}

export { prerenderRoutes, SITE_URL };