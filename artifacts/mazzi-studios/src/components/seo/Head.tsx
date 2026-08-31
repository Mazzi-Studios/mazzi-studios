import { createContext, useContext, useEffect, type ReactNode } from 'react';

export const SITE_URL = 'https://www.mazzistudios.com';
const DEFAULT_DESCRIPTION =
  'AI-powered Fractional CMO services, AI automation, and growth marketing for healthcare and B2B companies ready to scale.';

export interface HeadProps {
  title: string;
  description?: string;
  ogImage?: string;
  canonical?: string;
  jsonLd?: object | object[];
  robots?: string;
}

const HeadCollectorContext = createContext<((head: HeadProps) => void) | null>(null);

export function HeadCollector({
  onHead,
  children,
}: {
  onHead: (head: HeadProps) => void;
  children: ReactNode;
}) {
  return (
    <HeadCollectorContext.Provider value={onHead}>
      {children}
    </HeadCollectorContext.Provider>
  );
}

export function normalizeCanonical(canonical: string) {
  const url = new URL(canonical, SITE_URL);
  if (url.hostname === 'mazzistudios.com' || url.hostname === 'www.mazzistudios.com') {
    url.protocol = 'https:';
    url.hostname = 'www.mazzistudios.com';
    url.port = '';
  }
  url.search = '';
  url.hash = '';
  return url.toString().replace(/\/$/, url.pathname === '/' ? '/' : '');
}

export function Head({
  title,
  description = DEFAULT_DESCRIPTION,
  ogImage = '/brand-assets/mazzi-og.jpg',
  canonical,
  jsonLd,
  robots = 'index, follow',
}: HeadProps) {
  const collectHead = useContext(HeadCollectorContext);
  const resolvedCanonical = normalizeCanonical(
    canonical ?? (typeof window === 'undefined' ? SITE_URL : window.location.pathname),
  );
  const resolvedOgImage = new URL(ogImage, SITE_URL).toString();

  if (collectHead) {
    collectHead({
      title,
      description,
      ogImage,
      canonical,
      jsonLd,
      robots,
    });
  }

  useEffect(() => {
    document.title = title;

    const setMeta = (selector: string, attrKey: string, attrVal: string, contentVal: string) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attrKey, attrVal);
        document.head.appendChild(el);
      }
      el.setAttribute('content', contentVal);
    };

    setMeta('meta[name="description"]',        'name',     'description',       description);
    setMeta('meta[name="robots"]',             'name',     'robots',            robots);
    setMeta('meta[property="og:title"]',       'property', 'og:title',          title);
    setMeta('meta[property="og:description"]', 'property', 'og:description',    description);
    setMeta('meta[property="og:image"]',       'property', 'og:image',          resolvedOgImage);
    setMeta('meta[property="og:url"]',         'property', 'og:url',            resolvedCanonical);
    setMeta('meta[name="twitter:title"]',      'name',     'twitter:title',     title);
    setMeta('meta[name="twitter:description"]','name',     'twitter:description', description);
    setMeta('meta[name="twitter:image"]',      'name',     'twitter:image',     resolvedOgImage);

    // Canonical
    let canonicalEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute('href', resolvedCanonical);

    document.querySelectorAll('script[data-mazzi-schema]').forEach((el) => el.remove());
    if (jsonLd) {
      const schemas = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      schemas.forEach((schema) => {
        const script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        script.setAttribute('data-mazzi-schema', 'true');
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
      });
    }
  }, [title, description, resolvedOgImage, resolvedCanonical, jsonLd, robots]);

  return null;
}
