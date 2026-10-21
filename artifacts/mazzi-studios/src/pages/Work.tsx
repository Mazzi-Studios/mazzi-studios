import { useState } from 'react';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import { Head } from '@/components/seo/Head';
import { FadeUp, StaggerContainer, StaggerItem } from '@/components/animations/FadeUp';
import { BrandsWorkedWith } from '@/components/BrandsWorkedWith';
import { caseStudies, WORK_FILTERS, workTestimonials } from '@/data/caseStudies';

export default function Work() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered =
    activeFilter === 'All'
      ? caseStudies
      : caseStudies.filter((cs) => cs.tags.includes(activeFilter));

  return (
    <>
      <Head
        title="Our Work: Case Studies | Mazzi Studios"
        description="Real results for clinical research sites, MedSpas, life sciences and B2B brands: revenue, patients and pipeline traced to their source."
      />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        className="pt-36 pb-20 px-4"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}
      >
        <div className="container mx-auto max-w-6xl">
          <FadeUp>
            <p
              className="text-xs uppercase tracking-[0.22em] font-semibold mb-5"
              style={{ color: '#EB2571' }}
            >
              Portfolio
            </p>
            <h1
              className="font-['Bebas_Neue'] leading-none mb-6"
              style={{
                fontSize: 'clamp(64px, 10vw, 128px)',
                color: '#F5F0EB',
                letterSpacing: '0.02em',
              }}
            >
              Our Work
            </h1>
            <p
              className="text-lg max-w-2xl leading-relaxed"
              style={{ color: '#cfcfcf' }}
            >
              No vanity metrics and no borrowed numbers. Every result below comes from the client's own sales records, ad accounts, CRM or patient database. Where a project is still in motion, we say so. We keep client names off our case studies. The work and the numbers are real.
            </p>
          </FadeUp>

          {/* Filter bar */}
          <FadeUp delay={0.1}>
            <div className="flex flex-wrap gap-2 mt-12">
              {WORK_FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  aria-pressed={activeFilter === f}
                  className="text-[11px] uppercase tracking-widest font-semibold px-4 py-2 transition-all duration-200"
                  style={{
                    background:
                      activeFilter === f ? '#EB2571' : 'transparent',
                    color:
                      activeFilter === f ? '#fff' : '#cfcfcf',
                    border:
                      activeFilter === f
                        ? '1px solid #EB2571'
                        : '1px solid rgba(255,255,255,0.10)',
                  }}
                  onMouseEnter={(e) => {
                    if (activeFilter !== f) {
                      e.currentTarget.style.borderColor = 'rgba(235,37,113,0.40)';
                      e.currentTarget.style.color = '#F5F0EB';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeFilter !== f) {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)';
                      e.currentTarget.style.color = '#cfcfcf';
                    }
                  }}
                >
                  {f}
                </button>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Case study grid ──────────────────────────────────────────────── */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((cs) => (
              <StaggerItem key={cs.slug}>
                <Link href={`/work/${cs.slug}`}>
                  <article
                    className="group flex flex-col h-full cursor-pointer transition-all duration-300"
                    style={{
                      background: '#0F0F1C',
                      border: '1px solid rgba(235,37,113,0.12)',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor =
                        'rgba(235,37,113,0.40)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor =
                        'rgba(235,37,113,0.12)';
                    }}
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                      <img
                        src={cs.heroImage}
                        alt={cs.heroImageAlt}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Overlay gradient */}
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            'linear-gradient(to top, rgba(8,8,16,0.75) 0%, transparent 60%)',
                        }}
                      />
                      {/* Industry badge */}
                      <span
                        className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1"
                        style={{ background: '#EB2571', color: '#fff' }}
                      >
                        {cs.industry}
                      </span>
                    </div>

                    {/* Body */}
                    <div className="flex flex-col flex-1 p-6">
                      <p
                        className="text-[11px] uppercase tracking-[0.18em] font-semibold mb-2"
                        style={{ color: '#2AC4EA' }}
                      >
                        {cs.location}
                      </p>
                      <h2
                        className="font-['Bebas_Neue'] text-3xl leading-tight mb-3 break-words transition-colors duration-200 group-hover:text-[#EB2571]"
                        style={{ color: '#F5F0EB' }}
                      >
                        {cs.client}
                      </h2>
                      <p
                        className="text-sm leading-relaxed mb-5 flex-1"
                        style={{ color: '#cfcfcf' }}
                      >
                        {cs.overview}
                      </p>

                      {/* Result stats strip */}
                      <div
                        className="grid grid-cols-2 gap-px mb-5"
                        style={{ border: '1px solid rgba(255,255,255,0.07)' }}
                      >
                        {cs.heroMetrics.map((r) => (
                          <div
                            key={r.label}
                            className="p-3 min-w-0"
                            style={{ background: 'rgba(8,8,16,0.6)' }}
                          >
                            <p
                              className="font-['Bebas_Neue'] text-2xl leading-none mb-0.5"
                              style={{ color: '#EB2571' }}
                            >
                              {r.value}
                            </p>
                            <p
                              className="text-[10px] uppercase tracking-wide leading-tight break-words"
                              style={{ color: '#cfcfcf' }}
                            >
                              {r.label}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Service tags */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {cs.services.map((s) => (
                          <span
                            key={s}
                            className="text-[10px] uppercase tracking-wide px-2.5 py-1 font-medium"
                            style={{
                              background: 'rgba(42,196,234,0.08)',
                              color: '#2AC4EA',
                              border: '1px solid rgba(42,196,234,0.20)',
                            }}
                          >
                            {s}
                          </span>
                        ))}
                      </div>

                      {/* CTA row */}
                      <div
                        className="flex items-center gap-2 text-[11px] uppercase tracking-widest font-bold transition-colors duration-200 group-hover:text-[#EB2571]"
                        style={{ color: '#F5F0EB' }}
                      >
                        View Case Study
                        <ArrowRight
                          size={13}
                          className="transition-transform duration-200 group-hover:translate-x-1"
                        />
                      </div>
                    </div>
                  </article>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Empty state */}
          {filtered.length === 0 && (
            <FadeUp>
              <div className="text-center py-24">
                <p className="text-[#cfcfcf] text-lg">
                  No case studies match that filter yet.
                </p>
              </div>
            </FadeUp>
          )}
        </div>
      </section>

      {/* Brands We've Worked With */}
      <BrandsWorkedWith />

      {/* What Clients Say */}
      <section className="py-24 px-4 bg-[#0D0D1A] border-t border-white/5" data-work-testimonials>
        <div className="container mx-auto max-w-5xl">
          <FadeUp className="text-center mb-16 flex flex-col items-center">
            <div className="w-12 h-[1px] bg-[#EB2571]/40 mb-6"></div>
            <h2 className="text-[36px] md:text-[48px] font-bold text-[#F5F0EB] tracking-tight">What Clients Say</h2>
          </FadeUp>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {workTestimonials.map((t) => (
              <StaggerItem key={t.author}>
                <div className="bg-[#0F0F1C] border border-[#EB2571]/15 p-8 flex flex-col h-full">
                  <div aria-hidden="true" className="text-[#EB2571] text-4xl leading-none mb-4">“</div>
                  <p className="text-[#cfcfcf] italic mb-8 flex-1 leading-relaxed">{t.quote}</p>
                  <footer className="mt-auto border-t border-white/5 pt-6">
                    <h4 className="font-semibold text-[#F5F0EB] text-[15px]">{t.author}</h4>
                    <p className="text-[12px] uppercase tracking-widest text-[#cfcfcf]">{t.role}</p>
                  </footer>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Bottom CTA ───────────────────────────────────────────────────── */}
      <section
        className="py-24 px-4"
        style={{
          background: '#0D0D1A',
          borderTop: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <FadeUp>
          <div className="container mx-auto max-w-3xl text-center">
            <p
              className="text-xs uppercase tracking-[0.22em] font-semibold mb-4"
              style={{ color: '#EB2571' }}
            >
              Ready to Be Next?
            </p>
            <h2
              className="font-['Bebas_Neue'] leading-none mb-6"
              style={{
                fontSize: 'clamp(42px, 6vw, 72px)',
                color: '#F5F0EB',
              }}
            >
              Let's Build Your
              <br />
              <span style={{ color: '#EB2571' }}>Case Study.</span>
            </h2>
            <p className="mb-10 text-base leading-relaxed" style={{ color: '#cfcfcf' }}>
              Whether you're a healthcare practice losing ground to PE-backed competitors
              or a B2B company struggling to build pipeline. We've solved it before.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 text-white text-[12px] font-bold uppercase tracking-widest px-8 py-4 transition-opacity hover:opacity-85"
              style={{ background: '#EB2571', borderRadius: 0 }}
            >
              Book a Strategy Call
              <ArrowRight size={14} />
            </Link>
          </div>
        </FadeUp>
      </section>
    </>
  );
}
