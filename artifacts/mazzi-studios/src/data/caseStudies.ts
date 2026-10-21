import approvedContent from './caseStudyContent.json';

export interface CaseStudyResult {
  value: string;
  label: string;
}

export interface CaseStudy {
  id: number;
  slug: string;
  client: string;
  industry: string;
  location: string;
  heroImage: string;
  heroImageAlt: string;
  overview: string;
  date: string;
  services: string[];
  deliveredServices: string[];
  tags: string[];
  challenge: string;
  approach: { heading: string; body: string }[];
  heroMetrics: CaseStudyResult[];
  results: CaseStudyResult[];
  galleryImages: string[];
  galleryImageAlts: string[];
  sponsorLine?: string;
}

export const WORK_FILTERS = [
  'All', 'Healthcare', 'Clinical Research', 'Life Sciences', 'MedSpa', 'E-commerce', 'B2B',
];

const asset = (name: string) => `${import.meta.env.BASE_URL}portfolio-stock/${name}.jpg`;

const researchImages = [
  { file: 'research-lab', alt: 'Stock photograph of a bright research laboratory with microscopes and analytical equipment' },
  { file: 'research-bench', alt: 'Stock photograph of scientific instruments arranged on a laboratory workbench' },
  { file: 'microscope', alt: 'Stock photograph of a microscope on a laboratory table' },
];

const stockImages: Record<string, { file: string; alt: string }[]> = {
  'peptide-brand': [
    { file: 'microscope', alt: 'Stock photograph of a microscope in a clean research setting' },
    { file: 'ecommerce-workspace', alt: 'Stock photograph of a laptop displaying business analytics on a glass table' },
    { file: 'ecommerce-orders', alt: 'Stock photograph of performance analytics displayed on a laptop screen' },
  ],
  'body-contouring-medspa': [
    { file: 'studio-lobby', alt: 'Stock photograph of a contemporary reception desk and lobby' },
    { file: 'spa-interior', alt: 'Stock photograph of a spa towel, lotion bottle, candle and flowers' },
    { file: 'studio-room', alt: 'Stock photograph of a modern wellness room with wood finishes' },
  ],
  'parking-media-startup': [
    { file: 'parking-columns', alt: 'Stock photograph of an empty parking garage with green concrete columns' },
    { file: 'parking-interior', alt: 'Stock photograph of a modern underground parking garage with parked cars' },
    { file: 'parking-structure', alt: 'Stock photograph of a concrete parking structure' },
  ],
  'wallcovering-supplier': [
    { file: 'textured-interior', alt: 'Stock photograph of a furnished interior with textured wall finishes' },
    { file: 'wall-texture', alt: 'Stock photograph of a light gray wall with a rough plaster texture' },
    { file: 'plaster-texture', alt: 'Stock photograph of a gray wall with a mottled plaster finish' },
  ],
};

export const caseStudies: CaseStudy[] = approvedContent.map((content) => {
  const images = stockImages[content.slug] ?? researchImages;
  return {
    ...content,
    heroImage: asset(images[0].file),
    heroImageAlt: images[0].alt,
    galleryImages: images.slice(1).map((image) => asset(image.file)),
    galleryImageAlts: images.slice(1).map((image) => image.alt),
  };
});

export const workTestimonials = [
  {
    quote: 'It is a pleasure working with Mazzi Studios and they have become an extension of our marketing team.',
    author: 'Craig Neita',
    role: 'CEO, Vascular Simulations',
  },
  {
    quote: 'He got the concept right out of the gate! He used vocabulary that I could understand and framed out the site in no time.',
    author: 'Anne Rojas',
    role: 'President, Infinity Medical Education',
  },
  {
    quote: 'Their work had an immediate impact on our inbound marketing and social media strategy, lead acquisition, and e-commerce sales.',
    author: 'Janice Haley',
    role: 'CEO, ToneyBands.com',
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}
