export interface CaseStudyResult {
  value: string;
  label: string;
  suffix?: string;
}

export interface CaseStudy {
  id: number;
  slug: string;
  client: string;
  industry: string;
  location: string;
  heroImage: string;
  overview: string;
  date: string;
  services: string[];
  tags: string[];
  challenge: string;
  approach: { heading: string; body: string }[];
  results: CaseStudyResult[];
  testimonial?: { quote: string; author: string; role: string };
  galleryImages?: string[];
}

export const WORK_FILTERS = ['All', 'Healthcare', 'MedSpa', 'B2B', 'SaaS', 'Digital Health', 'Life Sciences', 'Professional Services'];

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    slug: 'contours-medspa',
    client: 'Contours Medspa',
    industry: 'MedSpa',
    location: 'Franklin, TN',
    heroImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1600&q=85&auto=format&fit=crop',
    overview:
      'Mazzi Studios partnered with the Contours team to create a new streamlined digital experience that combines appointment setting, content, and a fresh brand look for their MedSpa located in Franklin, TN.',
    date: 'January 2025',
    services: ['Fractional CMO', 'PPC', 'Social Media Management', 'Web Design', 'Website Development'],
    tags: ['MedSpa', 'Healthcare'],
    challenge:
      'Contours Medspa had a loyal patient base but no scalable digital acquisition engine. Their existing site converted poorly on mobile, paid campaigns were running without attribution, and they had no content strategy to educate prospective patients on their red-light body contouring technology. They needed a partner who could own marketing end-to-end — not just run ads.',
    approach: [
      {
        heading: 'Full Brand + Web Overhaul',
        body: 'We rebuilt the Contours website from the ground up — mobile-first, conversion-optimized, and architected to integrate directly with their booking system. New photography direction, updated copy, and a faster stack reduced bounce rate immediately.',
      },
      {
        heading: 'Performance Media Strategy',
        body: 'We launched geo-targeted Meta and Google PPC campaigns with proper conversion tracking, A/B creative testing, and dedicated landing pages per treatment. Every dollar was attributed. ROAS clarity gave the team confidence to scale spend.',
      },
      {
        heading: 'Content & Social Engine',
        body: 'A monthly editorial calendar drove organic reach on Instagram and TikTok, featuring before/after education, patient spotlights, and procedure explainers. Engagement rate tripled within 60 days.',
      },
      {
        heading: 'Fractional CMO Oversight',
        body: 'Our Fractional CMO embedded with the Contours team weekly — owning vendor relationships, reporting dashboards, and strategic roadmap. Marketing stopped being reactive and became a predictable growth system.',
      },
    ],
    results: [
      { value: '312', label: 'Increase in organic traffic', suffix: '%' },
      { value: '4.8', label: 'Average ROAS on paid media', suffix: 'x' },
      { value: '67', label: 'Reduction in cost per booking', suffix: '%' },
      { value: '3', label: 'Months to profitability', suffix: '' },
    ],
    testimonial: {
      quote:
        "Mazzi Studios didn't just build us a website — they built us a marketing department. For the first time we actually understand where every new patient comes from.",
      author: 'Sarah K.',
      role: 'Owner, Contours Medspa',
    },
    galleryImages: [
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1200&q=80&auto=format&fit=crop',
    ],
  },
  {
    id: 2,
    slug: 'techscale-partners',
    client: 'TechScale Partners',
    industry: 'B2B SaaS',
    location: 'Miami, FL',
    heroImage: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&q=85&auto=format&fit=crop',
    overview:
      'TechScale Partners needed to go from product-led growth to enterprise sales — fast. We deployed AI-powered outbound sequences, rebuilt their ICP targeting, and stood up a demand generation engine that filled their pipeline in 90 days.',
    date: 'March 2025',
    services: ['Fractional CMO', 'AI Automation', 'Demand Generation', 'Content Strategy'],
    tags: ['B2B', 'SaaS'],
    challenge:
      'TechScale had built a powerful middleware platform but struggled to articulate its value to enterprise buyers. Their sales team was closing deals but pipeline was thin and inconsistent. Marketing existed in name only — there was no repeatable top-of-funnel engine, no nurture sequences, and no account-based targeting. The CRO gave marketing 90 days to show pipeline contribution.',
    approach: [
      {
        heading: 'ICP Redefinition & Segmentation',
        body: 'We audited their best 20 customers, identified the three highest-LTV segments, and built persona-specific messaging for each. Enterprise mid-market became the primary motion; SMB was deprioritized. Every channel aligned to one ICP.',
      },
      {
        heading: 'AI-Powered Outbound Engine',
        body: 'We deployed our AI SDR stack — automated intent signal monitoring, personalized outreach sequences at scale, and a lead scoring model that surfaced warm accounts to sales daily. Response rates ran 4× industry average.',
      },
      {
        heading: 'Content for Pipeline, Not Vanity',
        body: 'We produced a pillar content program targeting bottom-of-funnel search intent — comparison pages, ROI calculators, and integration guides. Each piece was built to capture mid-funnel buyers already in evaluation.',
      },
      {
        heading: 'Revenue Attribution Dashboard',
        body: 'We built a full-funnel attribution model in their CRM, connecting marketing touchpoints to closed revenue. The CRO finally had a marketing dashboard they trusted.',
      },
    ],
    results: [
      { value: '2.4', label: 'Pipeline generated in 90 days', suffix: 'M' },
      { value: '41', label: 'Qualified opportunities created', suffix: '' },
      { value: '18', label: 'Reduction in sales cycle length', suffix: '%' },
      { value: '6', label: 'Enterprise logos closed in Q2', suffix: '' },
    ],
    testimonial: {
      quote:
        "We went from a gut-feel marketing operation to a data-driven pipeline machine. Mazzi's AI outbound system alone generated more qualified meetings in 60 days than we had in the previous year.",
      author: 'Marcus T.',
      role: 'CRO, TechScale Partners',
    },
    galleryImages: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=80&auto=format&fit=crop',
    ],
  },
  {
    id: 3,
    slug: 'miami-orthopedics',
    client: 'Miami Orthopedics',
    industry: 'Healthcare',
    location: 'Miami, FL',
    heroImage: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1600&q=85&auto=format&fit=crop',
    overview:
      'A multi-location orthopedic group facing pressure from private equity-backed competitors. We rebuilt their digital presence, dominated local search across 4 markets, and created a content authority strategy that made them the region\'s most trusted orthopedic brand online.',
    date: 'May 2025',
    services: ['Fractional CMO', 'SEO', 'PPC', 'Content Strategy', 'Web Design'],
    tags: ['Healthcare', 'Professional Services'],
    challenge:
      'Miami Orthopedics had three locations, a stellar clinical reputation, and almost no digital visibility. Private equity-backed competitors were outspending them on paid search. Their website was a 2018-era WordPress site with thin content and no schema markup. Organic search drove almost no new patients, and their Google Business profiles were poorly managed. They needed to win the local search war on a reasonable budget.',
    approach: [
      {
        heading: 'Local SEO Dominance Play',
        body: 'We audited and rebuilt their Google Business Profiles for all 4 locations, implemented medical schema markup site-wide, and launched a 12-month local content program targeting every major condition and procedure with dedicated city + condition landing pages.',
      },
      {
        heading: 'Web Rebuild for E-E-A-T',
        body: "Google's Experience, Expertise, Authoritativeness, and Trustworthiness standards are existential for healthcare practices. We rebuilt the site with structured physician bios, condition authority pages, and a patient education hub that established clinical trust at scale.",
      },
      {
        heading: 'Defensive PPC Strategy',
        body: 'Rather than trying to outspend PE-backed competitors on broad terms, we identified lower-competition, higher-intent keywords and launched a precision PPC strategy. Cost per new patient acquisition dropped dramatically.',
      },
      {
        heading: 'Content Authority Program',
        body: 'We produced bi-weekly clinical content authored by their physicians — covering conditions, procedures, and patient FAQs. This drove backlinks, brand searches, and positioned their doctors as the region\'s go-to orthopedic authorities.',
      },
    ],
    results: [
      { value: '540', label: 'Increase in organic new patients', suffix: '%' },
      { value: '#1', label: 'Local pack ranking in 3 markets', suffix: '' },
      { value: '52', label: 'Reduction in PPC cost per lead', suffix: '%' },
      { value: '11', label: 'Months to top-3 for primary keywords', suffix: '' },
    ],
    testimonial: {
      quote:
        "We were invisible online and losing ground to the big PE groups. Mazzi flipped that entirely. We now dominate search in every market we operate in and it keeps compounding.",
      author: 'Dr. R. Mendes',
      role: 'Managing Partner, Miami Orthopedics',
    },
    galleryImages: [
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=1200&q=80&auto=format&fit=crop',
    ],
  },
  {
    id: 4,
    slug: 'carevive',
    client: 'Carevive',
    industry: 'Digital Health',
    location: 'National',
    heroImage: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1600&q=85&auto=format&fit=crop',
    overview:
      'Mazzi Studios partnered with Carevive (now Carevive by Health Catalyst) to create a new website and recurring marketing support with LinkedIn content and follower growth for their oncology patient experience platform.',
    date: 'May 2025',
    services: ['LinkedIn Marketing', 'Web Design', 'Website Development'],
    tags: ['Healthcare', 'Digital Health', 'B2B'],
    challenge:
      'Carevive builds clinical-trial-validated technologies that improve the treatment experience of patients with cancer and improve survival outcomes while lowering costs. Despite a powerful product and strong clinical evidence base, their digital presence did not reflect the sophistication of their platform or the gravity of their mission. Their website was outdated, their LinkedIn presence was minimal, and they lacked a consistent content voice to build trust with oncology health system buyers — a notoriously long-cycle, relationship-driven sales environment.',
    approach: [
      {
        heading: 'Website Redesign & Development',
        body: 'We rebuilt the Carevive website from the ground up — designed to speak to two distinct audiences simultaneously: oncology clinicians evaluating clinical efficacy and health system administrators evaluating ROI and implementation. Clean, authoritative design. Evidence-forward copy. Structured to convert enterprise inquiries.',
      },
      {
        heading: 'LinkedIn Authority Program',
        body: 'We developed and executed a monthly LinkedIn content calendar for Carevive — combining thought leadership from their clinical team, patient outcome data storytelling, conference presence amplification (ISPOR, ASCO, AONN, ASH, SABCS), and company culture content to build follower growth and organic engagement with health system decision-makers.',
      },
      {
        heading: 'Conference Content Amplification',
        body: 'Carevive presented data at major oncology conferences. We built a content workflow around each conference cycle — pre-event awareness posts, live coverage content, and post-event recaps that drove sustained engagement long after the conference floor closed.',
      },
      {
        heading: 'Enterprise Brand Positioning',
        body: 'We refined their messaging architecture to lead with outcomes — survival rates, cost reduction, patient experience scores — rather than features. This shift made every piece of content and every web page a direct answer to the questions health system buyers actually ask.',
      },
    ],
    results: [
      { value: '3.2', label: 'LinkedIn follower growth in 6 months', suffix: 'x' },
      { value: '5', label: 'Major conference cycles amplified', suffix: '' },
      { value: '280', label: 'Increase in website session duration', suffix: '%' },
      { value: '2', label: 'New health system partnerships influenced', suffix: '' },
    ],
    testimonial: {
      quote:
        'Mazzi Studios understood from day one that selling into oncology health systems requires a different kind of credibility. They built us a digital presence that earns trust before a single sales call.',
      author: 'Carevive Team',
      role: 'Carevive by Health Catalyst',
    },
    galleryImages: [
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1200&q=80&auto=format&fit=crop',
    ],
  },
  {
    id: 5,
    slug: 'purpose-life-sciences',
    client: 'Purpose Life Sciences',
    industry: 'Life Sciences',
    location: 'Global',
    heroImage: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1600&q=85&auto=format&fit=crop',
    overview:
      'Mazzi Studios partnered with the PLS team to create a new streamlined digital experience and recurring marketing support with LinkedIn content and follower growth for their Impact Research Organization redefining clinical trials globally.',
    date: 'March 2025',
    services: ['Fractional CMO', 'LinkedIn Marketing', 'Web Design', 'Website Development'],
    tags: ['Life Sciences', 'B2B', 'Healthcare'],
    challenge:
      'Purpose Life Sciences is an Impact Research Organization helping sponsors and partners redefine clinical trials with speed, adaptability, and global partnerships to evaluate life-saving therapeutics. Their vision — to design with purpose and deliver with purpose — was compelling internally but nearly invisible externally. Their website was dated and failed to communicate the sophistication of their adaptive trial methodology. LinkedIn, the primary channel for reaching biopharma sponsors and CRO decision-makers, was underutilized. PLS needed a digital presence that could open doors with the world\'s largest pharmaceutical sponsors.',
    approach: [
      {
        heading: 'Website Redesign & Development',
        body: 'We rebuilt the PLS website to lead with mission and methodology — putting their "design with purpose / deliver with purpose" framework front and center. The site was architected to speak to two audiences in parallel: biopharma sponsors evaluating clinical trial partners, and potential collaborators assessing scientific credibility. Clean, science-forward design with an emphasis on their global reach and adaptive trial capabilities.',
      },
      {
        heading: 'LinkedIn Authority & Follower Growth',
        body: 'We developed and executed a sustained LinkedIn content program for PLS — combining clinical trial thought leadership, team spotlights, regulatory insight posts, and conference presence content. The goal was to make PLS the go-to voice on adaptive and purpose-driven clinical research among the biopharma sponsor community.',
      },
      {
        heading: 'Fractional CMO Strategy',
        body: 'Our Fractional CMO embedded with the PLS leadership team to align marketing with their business development pipeline. We mapped content and digital touchpoints to the biopharma sponsor evaluation cycle — building a system where marketing activity directly supported partnership conversations already in flight.',
      },
      {
        heading: 'Brand Positioning for a Scientific Audience',
        body: 'Clinical trial buyers are among the most skeptical audiences on earth. We refined PLS\'s messaging to balance scientific rigor with accessible clarity — ensuring that their differentiation (speed, adaptability, global access) came through without losing the credibility that the biopharma world demands.',
      },
    ],
    results: [
      { value: '4.1', label: 'LinkedIn follower growth in engagement', suffix: 'x' },
      { value: '60', label: 'Increase in inbound sponsor inquiries', suffix: '%' },
      { value: '3', label: 'Major biopharma RFPs influenced by digital', suffix: '' },
      { value: '100', label: 'Website rebuilt in days, not months', suffix: '' },
    ],
    testimonial: {
      quote:
        'Mazzi Studios understood the nuance of selling into biopharma. They built us a presence that makes sponsors take us seriously before we ever get on a call.',
      author: 'PLS Leadership Team',
      role: 'Purpose Life Sciences',
    },
    galleryImages: [
      'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&q=80&auto=format&fit=crop',
    ],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
