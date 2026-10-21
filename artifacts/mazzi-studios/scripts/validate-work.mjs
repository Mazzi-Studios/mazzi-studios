import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const output = path.join(root, 'dist/public');
const studies = JSON.parse(await readFile(path.join(root, 'src/data/caseStudyContent.json'), 'utf8'));
const redirectMap = JSON.parse(await readFile(path.join(root, 'src/data/portfolioRedirects.json'), 'utf8'));
const work = await readFile(path.join(output, 'work/index.html'), 'utf8');
const sitemap = await readFile(path.join(output, 'sitemap.xml'), 'utf8');
const text = (html) => html
  .replace(/<[^>]+>/g, ' ')
  .replace(/&amp;/g, '&').replace(/&#x27;|&#39;|&apos;/g, "'")
  .replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
  .replace(/\s+/g, ' ').trim();
const workText = text(work);

const order = [
  'peptide-brand', 'body-contouring-medspa', 'multi-study-research-site',
  'oncology-trial-network', 'parking-media-startup', 'pancreatic-cancer-awareness-campaign',
  'wallcovering-supplier', 'oncology-patient-experience-platform', 'clinical-research-organization',
];
assert.deepEqual(studies.map((study) => study.slug), order);
let lastPosition = -1;
for (const [index, study] of studies.entries()) {
  assert.equal(study.heroMetrics.length, 2);
  assert.equal(study.results.length, 4);
  const link = `href="/work/${study.slug}"`;
  const position = work.indexOf(link);
  assert(position > lastPosition, `${study.slug} is missing or out of order`);
  lastPosition = position;
  assert(workText.includes(study.overview), `${study.slug} card summary is missing`);
  for (const metric of study.heroMetrics) {
    assert(workText.includes(metric.value) && workText.includes(metric.label));
  }
  for (const service of study.services) assert(workText.includes(service));

  const html = await readFile(path.join(output, 'work', study.slug, 'index.html'), 'utf8');
  const pageText = text(html);
  for (const copy of [
    study.client, study.overview, study.challenge, study.date, study.location,
    ...study.heroMetrics.flatMap((metric) => [metric.value, metric.label]),
    ...study.results.flatMap((metric) => [metric.value, metric.label]),
    ...study.approach.flatMap((step) => [step.heading, step.body]),
    ...study.deliveredServices,
    ...(study.sponsorLine ? [study.sponsorLine] : []),
  ]) {
    assert(pageText.includes(copy), `${study.slug} is missing exact copy: ${copy}`);
  }
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1);
  assert(text(html.match(/<title>(.*?)<\/title>/s)[1]) === `${study.client}: Case Study | Mazzi Studios`);
  for (const attribute of ['name="description"', 'property="og:description"', 'name="twitter:description"']) {
    const content = html.match(new RegExp(`${attribute} content="([^"]*)"`))?.[1];
    assert(content && text(content) === study.overview, `${study.slug} has incorrect ${attribute}`);
  }
  assert(sitemap.includes(`/work/${study.slug}</loc>`));
  const navigation = [...html.matchAll(/href="\/work\/([^"]+)"/g)].map((match) => match[1]);
  assert.deepEqual(navigation, [
    ...(index > 0 ? [studies[index - 1].slug] : []),
    ...(index < studies.length - 1 ? [studies[index + 1].slug] : []),
  ]);
  assert.equal((html.match(/<img[^>]+src="\/portfolio-stock\//g) ?? []).length, 3);
  assert.equal((html.match(/alt="Stock photograph[^"]+"/g) ?? []).length, 3);
}
const expectedFilters = {
  Healthcare: ['body-contouring-medspa', 'multi-study-research-site', 'oncology-trial-network', 'pancreatic-cancer-awareness-campaign', 'oncology-patient-experience-platform'],
  'Clinical Research': ['multi-study-research-site', 'oncology-trial-network', 'clinical-research-organization'],
  'Life Sciences': ['pancreatic-cancer-awareness-campaign', 'clinical-research-organization'],
  MedSpa: ['body-contouring-medspa'],
  'E-commerce': ['peptide-brand'],
  B2B: ['parking-media-startup', 'wallcovering-supplier'],
};
for (const [filter, expected] of Object.entries(expectedFilters)) {
  assert.deepEqual(studies.filter((study) => study.tags.includes(filter)).map((study) => study.slug), expected);
  assert(workText.includes(filter));
}
assert(workText.includes("No vanity metrics and no borrowed numbers. Every result below comes from the client's own sales records, ad accounts, CRM or patient database. Where a project is still in motion, we say so."));
assert(workText.includes("We keep client names off our case studies. The work and the numbers are real."));
const description = 'Real results for clinical research sites, MedSpas, life sciences and B2B brands: revenue, patients and pipeline traced to their source.';
for (const attribute of ['name="description"', 'property="og:description"', 'name="twitter:description"']) {
  assert(work.includes(`${attribute} content="${description}"`));
}
assert(!work.includes('More Website Builds'));
assert(work.indexOf("Brands We&#x27;ve Worked With") < work.indexOf('What Clients Say'));
const logoSection = work.match(/<section[^>]*data-brand-logos[^>]*>[\s\S]*?<\/section>/)?.[0];
assert(logoSection, 'Missing brand logo section');
assert(!/<a\b/.test(logoSection), 'Brand logos must not link anywhere');
const brandFiles = [
  'start-center-for-cancer-research.png', 'precision-clinical-research.png', 'carevive.png',
  'purpose-life-sciences.svg', 'canopy-cancer-collective.png', 'contours.png', 'cingo.png',
  'atrium-wallcoverings.png', '3d-medsupply.png', 'infinity-medical-education.png', 'toneybands.png',
];
assert.deepEqual(
  [...logoSection.matchAll(/<img[^>]*src="\/brand-assets\/clients\/([^"]+)"/g)].map((match) => match[1]),
  brandFiles,
);
for (const file of brandFiles) await readFile(path.join(output, 'brand-assets', 'clients', file));
const clientNames = /START Center|startresearch|Contours|Cingo|Precision Clinical|Canopy|PanCAN|AbbVie|Atrium|Carevive|Health Catalyst|Purpose Life|Impact Research Organization|UC San Diego|Fred Hutch|Overlooked to Essential|Digesting the Evidence|Franklin/i;
const anonymousWork = work.replace(logoSection, '').replace(/<section[^>]*data-work-testimonials[^>]*>[\s\S]*?<\/section>/, '');
assert(!clientNames.test(anonymousWork), 'Client identity leaked outside allowed sections on /work');
for (const slug of order) {
  const html = await readFile(path.join(output, 'work', slug, 'index.html'), 'utf8');
  assert(!clientNames.test(html), `Client identity leaked on /work/${slug}`);
}
assert(work.indexOf('What Clients Say') < work.indexOf('Ready to Be Next?'));
for (const removed of Object.keys(redirectMap)) {
  assert(!sitemap.includes(removed));
  assert(!work.includes(removed));
}

const banned = /[\u2013\u2014]|&(?:mdash|ndash);|&#(?:8211|8212);|&#x201[34];|TechScale|Miami Orthopedics|312%|4\.8x|3\.2x|4\.1x/;
let filesChecked = 0;
async function scan(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) await scan(file);
    else if (/\.(?:html|js|css|xml|json|txt|svg)$/i.test(entry.name)) {
      assert(!banned.test(await readFile(file, 'utf8')), `Disallowed content in ${file}`);
      filesChecked++;
    }
  }
}
await scan(output);
console.log(`Portfolio validation passed: 9 cases, exact copy, order, filters, navigation, metadata, images, sitemap and ${filesChecked} built text files checked.`);
