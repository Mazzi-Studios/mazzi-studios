import content from './serviceContent.json';

export const servicesOverview = content.overview;
export const servicePages = content.pages;
export type ServicePageContent = (typeof servicePages)[number];
export const serviceNavigation = servicePages.map((page) => ({
  href: page.route,
  name: page.route === '/healthcare-marketing'
    ? 'Healthcare & Clinical Research Marketing'
    : page.hero.Eyebrow,
}));

export function serviceSchemas(page: ServicePageContent) {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: page.hero.Eyebrow,
      description: page.description,
      provider: { '@type': 'Organization', name: 'Mazzi Studios' },
      areaServed: 'United States',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: page.faq.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    },
  ];
}
