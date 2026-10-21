import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const output = path.join(root, 'dist/public');
const { overview, pages } = JSON.parse(await readFile(path.join(root, 'src/data/serviceContent.json'), 'utf8'));
const studies = JSON.parse(await readFile(path.join(root, 'src/data/caseStudyContent.json'), 'utf8'));
const sitemap = await readFile(path.join(output, 'sitemap.xml'), 'utf8');
const decode = (value) => value
  .replace(/&amp;/g, '&').replace(/&#x27;|&#39;|&apos;/g, "'")
  .replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const text = (value) => decode(value.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
const prohibited = /[\u2013\u2014]|&(?:mdash|ndash);|&#(?:8211|8212);|&#x201[34];|200\+\s+hours(?:\s+saved)?\s+monthly|3x\s+more\s+leads|10x\s+content\s+output|24\/7\s+always\s+on|\$250K\s*-\s*\$400K\/year|dedicated success manager|custom fine[- ]tuning|team training (?:for |\()?5 users|M&A due diligence|board\/investor support|daily availability|multi-agent systems?|HIPAA-Compliant Ready|HIPAA-compliant workflows/gi;

for (const page of [overview, ...pages]) {
  const html = await readFile(path.join(output, page.route.slice(1), 'index.html'), 'utf8');
  const body = text(html);
  assert.equal(text(html.match(/<title>(.*?)<\/title>/s)[1]), page.title);
  for (const attribute of ['name="description"', 'property="og:description"', 'name="twitter:description"']) {
    assert.equal(decode(html.match(new RegExp(`${attribute} content="([^"]*)"`))[1]), page.description);
  }
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1);
  for (const copy of [page.hero.Eyebrow, page.hero.H1, page.hero.Subhead, page.closing.Heading, page.closing.Line].filter(Boolean)) {
    assert(body.includes(copy), `${page.route} is missing exact copy: ${copy}`);
  }
  assert(sitemap.includes(`${page.route}</loc>`));
  assert(body.includes('HIPAA-Aware Tracking'));
  for (const service of pages) {
    assert(html.includes(`href="${service.route}"`), `${page.route} is missing service navigation: ${service.route}`);
  }
  if (page === overview) {
    for (const card of overview.cards) {
      for (const copy of [card.name, card.summary, card.proof, card.price]) assert(body.includes(copy), `Overview missing: ${copy}`);
      assert(html.includes(`href="${card.href}"`));
    }
    for (const copy of [
      ...overview.differences.flatMap((item) => [item.heading, item.body]),
      ...overview.sprints.flatMap((tier) => [tier.name, tier.price, tier.details]),
      overview.sprintsNote, ...Object.values(overview.testimonial),
    ]) assert(body.includes(copy), `Overview missing: ${copy}`);
    continue;
  }
  assert(html.includes('id="pricing"') && html.includes('href="#pricing"'));
  assert.equal((html.match(/data-testid="link-case-study-/g) ?? []).length, 3);
  for (const proof of page.proof) {
    assert.equal(proof.caseStudy, studies.find((study) => proof.href === `/work/${study.slug}`)?.client);
    assert(body.includes(proof.value) && body.includes(proof.label));
    assert(html.includes(`href="${proof.href}"`));
    await readFile(path.join(output, proof.href.slice(1), 'index.html'), 'utf8');
  }
  for (const copy of [
    page.audience.intro, ...page.audience.items,
    ...page.included.flatMap((item) => [item.heading, item.body]),
    ...page.extras.flatMap((extra) => [extra.heading, extra.intro, ...extra.items]),
    ...page.process.flatMap((item) => [item.heading, item.body]),
    page.processNote, page.pricingNote, page.pricingLine,
    ...[...page.pricing, ...page.carePlans].flatMap((tier) => [tier.name, tier.price, tier.details]),
    ...page.faq.flatMap((faq) => [faq.question, faq.answer]),
  ].filter(Boolean)) {
    assert(body.includes(copy), `${page.route} is missing exact copy: ${copy}`);
  }
  const schemas = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((match) => JSON.parse(match[1]));
  const service = schemas.find((schema) => schema['@type'] === 'Service');
  assert(service, `${page.route} missing Service schema`);
  assert.equal(service.name, page.hero.Eyebrow);
  assert.equal(service.description, page.description);
  assert.equal(service.provider.name, 'Mazzi Studios');
  assert.equal(service.areaServed, 'United States');
  const faq = schemas.find((schema) => schema['@type'] === 'FAQPage');
  assert(faq, `${page.route} missing FAQPage schema`);
  assert.deepEqual(faq.mainEntity, page.faq.map((entry) => ({
    '@type': 'Question', name: entry.question,
    acceptedAnswer: { '@type': 'Answer', text: entry.answer },
  })));
}
let filesChecked = 0;
async function scan(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) await scan(file);
    else if (/\.(?:html|js|css|xml|json|txt|svg)$/i.test(entry.name)) {
      const content = await readFile(file, 'utf8');
      for (const value of [decode(content), text(content)]) {
        prohibited.lastIndex = 0;
        const match = prohibited.exec(value);
        assert(!match, `Prohibited phrase or character ${match?.[0]} in ${file}`);
      }
      assert(!/href="\/services#(?:web|linkedin|ppc|strategy)"/.test(content), `Old service anchor in ${file}`);
      filesChecked++;
    }
  }
}
await scan(output);
console.log(`Services validation passed: overview, 7 pages, exact copy/prices, proof links, schema, metadata, sitemap and ${filesChecked} built text files checked.`);
