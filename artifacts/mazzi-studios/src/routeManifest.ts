import { posts } from '@/data/posts';
import { caseStudies } from '@/data/caseStudies';

export interface PrerenderRoute {
  path: string;
  index: boolean;
  changefreq: 'weekly' | 'monthly' | 'yearly';
  priority: number;
  lastmod?: string;
}

const staticRoutes: PrerenderRoute[] = [
  { path: '/', index: true, changefreq: 'weekly', priority: 1 },
  { path: '/about', index: true, changefreq: 'monthly', priority: 0.7 },
  { path: '/services', index: true, changefreq: 'monthly', priority: 0.9 },
  { path: '/fractional-cmo', index: true, changefreq: 'monthly', priority: 0.9 },
  { path: '/ai-automation', index: true, changefreq: 'monthly', priority: 0.9 },
  { path: '/contact', index: true, changefreq: 'yearly', priority: 0.8 },
  { path: '/work', index: true, changefreq: 'monthly', priority: 0.8 },
  { path: '/blog', index: true, changefreq: 'weekly', priority: 0.8 },
  { path: '/tools', index: true, changefreq: 'monthly', priority: 0.8 },
  { path: '/marketing-budget-calculator', index: true, changefreq: 'monthly', priority: 0.7 },
  { path: '/utm-builder', index: true, changefreq: 'monthly', priority: 0.7 },
  { path: '/playbook', index: true, changefreq: 'monthly', priority: 0.8 },
  { path: '/thank-you', index: false, changefreq: 'yearly', priority: 0 },
];

export const prerenderRoutes: PrerenderRoute[] = [
  ...staticRoutes,
  ...caseStudies.map((caseStudy) => ({
    path: `/work/${caseStudy.slug}`,
    index: true,
    changefreq: 'monthly' as const,
    priority: 0.7,
  })),
  ...posts.map((post) => ({
    path: `/blog/${post.slug}`,
    index: true,
    changefreq: 'monthly' as const,
    priority: 0.6,
    lastmod: post.dateISO,
  })),
];