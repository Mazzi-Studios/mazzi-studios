import { Link } from 'wouter';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Head } from '@/components/seo/Head';
import { FadeUp } from '@/components/animations/FadeUp';
import { serviceSchemas, type ServicePageContent } from '@/data/services';
import { SectionLabel, PrimaryButton, TierCard, FaqList, ClosingCta, scrollToId } from '@/components/services/ServiceBlocks';

export default function ServicePage({ page }: { page: ServicePageContent }) {
  const isSeoAiSearch = page.route === '/seo-ai-search';
  const closing = page.closing as { Heading: string; Line?: string; Button: string };
  const extras = page.extras as { heading: string; intro: string; items: string[] }[];
  const pricingLinks = page.pricingLinks as { name: string; href: string }[];
  const carePlans = page.carePlans as { name: string; price: string; details: string; popular: boolean }[];

  return (
    <div className="w-full">
      <Head title={page.title} description={page.description} canonical={page.route} jsonLd={serviceSchemas(page)} />

      <section className="relative pt-40 pb-24 md:pt-48 md:pb-28 bg-[#080810] text-[#F5F0EB] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(235,37,113,0.08) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-5xl">
          <FadeUp>
            <SectionLabel>{isSeoAiSearch ? 'SEO & AI Search · Built on our 90-Day GEO/AEO Playbook' : page.hero.Eyebrow}</SectionLabel>
            <h1 className="text-[52px] md:text-[84px] font-['Bebas_Neue'] leading-[0.95] mb-6">{page.hero.H1}</h1>
            <p className="text-[18px] text-[#cfcfcf] mb-10 max-w-3xl leading-relaxed">{page.hero.Subhead}</p>
            <div className="flex flex-wrap gap-4">
              <PrimaryButton href="/contact" testId="button-hero-contact">Book a Strategy Call</PrimaryButton>
              <a
                href="#pricing"
                data-testid="button-see-pricing"
                onClick={(e) => { e.preventDefault(); scrollToId('pricing'); }}
                className="inline-flex justify-center border border-[#EB2571]/50 text-[#EB2571] px-8 py-4 font-bold uppercase tracking-widest text-[12px] hover:bg-[#EB2571]/10 transition-colors"
              >
                See Pricing
              </a>
            </div>
            {isSeoAiSearch && (
              <Link href="/playbook" className="inline-block mt-5 text-sm text-[#EB2571] underline underline-offset-4">
                Get the free playbook guide
              </Link>
            )}
          </FadeUp>
        </div>
      </section>

      <section className="bg-[#0F0F1C] border-t border-[#EB2571]/15">
        <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-3">
          {page.proof.map((p, i) => (
            <div key={i} data-testid={`proof-${i}`} className={`py-10 md:px-8 ${i > 0 ? 'border-t md:border-t-0 md:border-l border-[#EB2571]/15' : 'md:pl-0'}`}>
              <p className="text-[48px] md:text-[56px] font-['Bebas_Neue'] leading-none text-[#EB2571] mb-3">{p.value}</p>
              <p className="text-[15px] text-[#F5F0EB] leading-relaxed mb-4">{p.label}</p>
              <Link href={p.href} data-testid={`link-case-study-${i}`} className="inline-flex items-center gap-2 text-[12px] uppercase tracking-widest text-[#2AC4EA] hover:text-[#F5F0EB] transition-colors">
                See the case study <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-[1fr_1.4fr] gap-12">
          <FadeUp>
            <SectionLabel>Who it's for</SectionLabel>
            <h2 className="text-[40px] md:text-[52px] font-['Bebas_Neue'] text-[#0A0A1A] leading-tight">Who it's for</h2>
            {page.audience.intro && <p className="text-[17px] text-gray-600 mt-4 leading-relaxed">{page.audience.intro}</p>}
          </FadeUp>
          <ul className="space-y-5 self-center">
            {page.audience.items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[17px] text-gray-700">
                <CheckCircle2 className="text-[#EB2571] shrink-0 mt-1" size={18} aria-hidden="true" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-24 bg-[#F9F9F9]">
        <div className="container mx-auto px-4 md:px-6">
          <FadeUp className="mb-12">
            <SectionLabel>What's included</SectionLabel>
            <h2 className="text-[40px] md:text-[52px] font-['Bebas_Neue'] text-[#0A0A1A] leading-tight">What's included</h2>
          </FadeUp>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {page.included.map((c, i) => (
              <div key={c.heading} data-testid={`card-included-${i}`} className="bg-white p-8 border border-gray-200 hover:border-[#EB2571] transition-colors">
                <span className="text-[13px] font-bold text-[#EB2571] tracking-widest">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="text-[24px] font-['Bebas_Neue'] text-[#0A0A1A] mt-3 mb-3">{c.heading}</h3>
                <p className="text-[15px] text-gray-600 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {extras.map((x) => (
        <section key={x.heading} className="py-24 bg-[#080810] text-[#F5F0EB]">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <SectionLabel>{x.heading}</SectionLabel>
            <h2 className="text-[40px] md:text-[52px] font-['Bebas_Neue'] leading-tight mb-5">{x.heading}</h2>
            <p className="text-[18px] text-[#cfcfcf] leading-relaxed">{x.intro}</p>
            {x.items.length > 0 && (
              <ul className="mt-8 space-y-4">
                {x.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[16px] text-[#F5F0EB]">
                    <CheckCircle2 className="text-[#2AC4EA] shrink-0 mt-1" size={18} aria-hidden="true" /> {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      ))}

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeUp className="mb-12">
            <SectionLabel>How it works</SectionLabel>
            <h2 className="text-[40px] md:text-[52px] font-['Bebas_Neue'] text-[#0A0A1A] leading-tight">How it works</h2>
            {page.processNote && (
              <p className="text-[16px] text-gray-500 mt-2">
                {isSeoAiSearch ? (
                  <>(based on our <Link href="/playbook" className="underline underline-offset-4">90-Day GEO/AEO Playbook</Link>)</>
                ) : `(${page.processNote})`}
              </p>
            )}
          </FadeUp>
          <ol className={`grid gap-8 md:grid-cols-2 ${page.process.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-4'}`}>
            {page.process.map((s, i) => (
              <li key={s.heading} className="border-t-2 border-[#EB2571] pt-6">
                <span className="text-[56px] font-['Bebas_Neue'] leading-none text-[#EB2571]/30">{i + 1}</span>
                <h3 className="text-[22px] font-['Bebas_Neue'] text-[#0A0A1A] mt-2 mb-2">{s.heading}</h3>
                <p className="text-[15px] text-gray-600 leading-relaxed">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="pricing" className="py-24 bg-[#F9F9F9] scroll-mt-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12">
            <SectionLabel>Pricing</SectionLabel>
            <h2 className="text-[40px] md:text-[52px] font-['Bebas_Neue'] text-[#0A0A1A] leading-tight">Pricing</h2>
            {page.pricingNote && <p className="text-[16px] text-gray-500 mt-2">({page.pricingNote})</p>}
          </div>
          {isSeoAiSearch && (
            <p className="text-[16px] text-gray-600 mb-6">
              <Link href="/playbook" className="underline underline-offset-4">
                Prefer to run it yourself? Start with the free guide or get the full 90-Day GEO/AEO Playbook for $197.
              </Link>
            </p>
          )}
          {page.pricing.length > 0 && (
            <div className={`grid gap-6 md:grid-cols-2 ${page.pricing.length === 2 ? 'lg:grid-cols-2 max-w-4xl' : 'lg:grid-cols-3'}`}>
              {page.pricing.map((t, i) => <TierCard key={t.name} tier={t} index={i} />)}
            </div>
          )}
          {page.pricingLine && (
            <div className="bg-white border border-gray-200 p-8 md:p-10 max-w-4xl">
              <p className="text-[20px] text-[#0A0A1A] leading-relaxed mb-8">{page.pricingLine}</p>
              <div className="flex flex-wrap gap-3 mb-8">
                {pricingLinks.map((l) => (
                  <Link key={l.href} href={l.href} data-testid={`link-pricing-${l.href.slice(1)}`} className="inline-flex items-center gap-2 border border-[#EB2571]/40 text-[#EB2571] px-5 py-3 text-[12px] font-bold uppercase tracking-widest hover:bg-[#EB2571]/10 transition-colors">
                    {l.name} <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                ))}
              </div>
              <PrimaryButton href="/contact" testId="button-pricing-contact">Book a Strategy Call</PrimaryButton>
            </div>
          )}
          {carePlans.length > 0 && (
            <div className="mt-16">
              <h3 className="text-[32px] font-['Bebas_Neue'] text-[#0A0A1A] mb-6">Care Plans</h3>
              <div className="grid md:grid-cols-3 gap-5">
                {carePlans.map((t, i) => <TierCard key={t.name} tier={t} index={100 + i} compact />)}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="text-[40px] md:text-[52px] font-['Bebas_Neue'] text-[#0A0A1A] leading-tight mb-10">FAQ</h2>
          <FaqList items={page.faq} />
        </div>
      </section>

      <ClosingCta heading={closing.Heading} line={closing.Line} button={closing.Button} />
    </div>
  );
}
