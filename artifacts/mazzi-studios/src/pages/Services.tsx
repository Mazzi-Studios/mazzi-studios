import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import { Head } from '@/components/seo/Head';
import { FadeUp } from '@/components/animations/FadeUp';
import { servicesOverview as o } from '@/data/services';
import { SectionLabel, PrimaryButton, TierCard, ClosingCta, Testimonial } from '@/components/services/ServiceBlocks';

export default function Services() {
  return (
    <div className="w-full">
      <Head title={o.title} description={o.description} canonical={o.route} />

      <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 bg-[#080810] text-[#F5F0EB] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(235,37,113,0.08) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-5xl">
          <FadeUp>
            <SectionLabel>{o.hero.Eyebrow}</SectionLabel>
            <h1 className="text-[56px] md:text-[92px] font-['Bebas_Neue'] leading-[0.92] mb-6">{o.hero.H1}</h1>
            <p className="text-[18px] text-[#cfcfcf] mb-10 max-w-3xl leading-relaxed">{o.hero.Subhead}</p>
            <div className="flex flex-wrap gap-4">
              <PrimaryButton href="/contact" testId="button-hero-contact">Book a Strategy Call</PrimaryButton>
              <Link href="/work" data-testid="button-see-work" className="inline-flex justify-center border border-[#EB2571]/50 text-[#EB2571] px-8 py-4 font-bold uppercase tracking-widest text-[12px] hover:bg-[#EB2571]/10 transition-colors">
                See Our Work
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionLabel>How we're different</SectionLabel>
          <h2 className="text-[40px] md:text-[52px] font-['Bebas_Neue'] text-[#0A0A1A] leading-tight mb-12">How we're different</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {o.differences.map((d) => (
              <div key={d.heading} className="border-t-2 border-[#EB2571] pt-6">
                <h3 className="text-[24px] font-['Bebas_Neue'] text-[#0A0A1A] mb-3">{d.heading}</h3>
                <p className="text-[15px] text-gray-600 leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F9F9F9]">
        <div className="container mx-auto px-4 md:px-6">
          <SectionLabel>Services</SectionLabel>
          <h2 className="text-[40px] md:text-[52px] font-['Bebas_Neue'] text-[#0A0A1A] leading-tight mb-12">Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {o.cards.map((c, i) => (
              <div key={c.href} data-testid={`card-service-${i}`} className="bg-white p-8 border border-gray-200 hover:border-[#EB2571] transition-colors flex flex-col">
                <h3 className="text-[28px] font-['Bebas_Neue'] text-[#0A0A1A] leading-tight mb-2">{c.name}</h3>
                <p className="text-[15px] text-gray-600 leading-relaxed mb-6">{c.summary}</p>
                <p className="text-[14px] text-[#0A0A1A] border-l-2 border-[#2AC4EA] pl-4 mb-6">{c.proof}</p>
                <div className="mt-auto flex items-end justify-between gap-4 pt-4 border-t border-gray-100">
                  <div>
                    {c.price === 'See each service' ? (
                      <p className="text-[22px] font-['Bebas_Neue'] text-[#EB2571]">{c.price}</p>
                    ) : (
                      <>
                        <p className="text-[11px] uppercase tracking-widest text-gray-400">Starting at</p>
                        <p className="text-[26px] font-['Bebas_Neue'] text-[#EB2571] leading-none mt-1">{c.price}</p>
                      </>
                    )}
                  </div>
                  <Link href={c.href} data-testid={`link-service-${i}`} className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-widest text-[#0A0A1A] hover:text-[#EB2571] transition-colors shrink-0">
                    Learn more <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <SectionLabel>Strategy Sprints</SectionLabel>
          <h2 className="text-[40px] md:text-[52px] font-['Bebas_Neue'] text-[#0A0A1A] leading-tight mb-12">Strategy Sprints</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {o.sprints.map((s, i) => <TierCard key={s.name} tier={s} index={i} />)}
          </div>
          <p className="text-[17px] text-gray-600 mt-8">{o.sprintsNote}</p>
        </div>
      </section>

      <Testimonial quote={o.testimonial.quote} author={o.testimonial.author} role={o.testimonial.role} />
      <ClosingCta heading={o.closing.Heading} line={o.closing.Line} button={o.closing.Button} />
    </div>
  );
}
