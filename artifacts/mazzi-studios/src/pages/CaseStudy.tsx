import { useParams, Link } from 'wouter';
import { ArrowLeft, ArrowRight, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { Head } from '@/components/seo/Head';
import { FadeUp, StaggerContainer, StaggerItem } from '@/components/animations/FadeUp';
import { getCaseStudyBySlug, caseStudies } from '@/data/caseStudies';
import NotFound from '@/pages/NotFound';

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const cs = getCaseStudyBySlug(slug ?? '');

  if (!cs) return <NotFound />;

  // Adjacent case studies for prev/next
  const idx = caseStudies.findIndex((c) => c.slug === cs.slug);
  const prev = idx > 0 ? caseStudies[idx - 1] : null;
  const next = idx < caseStudies.length - 1 ? caseStudies[idx + 1] : null;

  return (
    <>
      <Head
        title={`${cs.client}: Case Study | Mazzi Studios`}
        description={cs.overview}
      />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ height: 'clamp(420px, 55vh, 640px)' }}>
        <img
          src={cs.heroImage}
          alt={cs.heroImageAlt}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(8,8,16,0.92) 0%, rgba(8,8,16,0.60) 50%, rgba(8,8,16,0.30) 100%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(8,8,16,1) 0%, transparent 40%)',
          }}
        />

        {/* Back link */}
        <div className="absolute top-0 left-0 right-0 pt-28 px-4 sm:px-6">
          <div className="container mx-auto max-w-6xl">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest font-semibold transition-colors duration-200"
              style={{ color: '#cfcfcf' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#F5F0EB')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#cfcfcf')}
            >
              <ArrowLeft size={13} />
              Our Work
            </Link>
          </div>
        </div>

        {/* Client name + meta */}
        <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 pb-10">
          <div className="container mx-auto max-w-6xl">
            <span
              className="inline-block text-[10px] font-bold uppercase tracking-widest px-3 py-1 mb-4"
              style={{ background: '#EB2571', color: '#fff' }}
            >
              {cs.industry}
            </span>
            <h1
              className="font-['Bebas_Neue'] leading-none mb-3"
              style={{
                fontSize: 'clamp(52px, 8vw, 100px)',
                color: '#F5F0EB',
                letterSpacing: '0.02em',
              }}
            >
              {cs.client}
            </h1>
            <div className="flex flex-wrap items-center gap-4">
              <span
                className="flex items-center gap-1.5 text-[12px] uppercase tracking-wider"
                style={{ color: '#cfcfcf' }}
              >
                <MapPin size={12} style={{ color: '#2AC4EA' }} />
                {cs.location}
              </span>
              <span
                className="flex items-center gap-1.5 text-[12px] uppercase tracking-wider"
                style={{ color: '#cfcfcf' }}
              >
                <Calendar size={12} style={{ color: '#2AC4EA' }} />
                {cs.date}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Results strip ────────────────────────────────────────────────── */}
      <section
        className="py-0 px-4"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 divide-x divide-y sm:divide-y-0"
            style={{ '--tw-divide-opacity': 1, borderTop: '1px solid rgba(255,255,255,0.06)' } as React.CSSProperties}
          >
            {cs.heroMetrics.map((r, i) => (
              <div key={i} className="px-6 py-8 min-w-0" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                <p
                  className="font-['Bebas_Neue'] leading-none mb-2 break-words"
                  style={{ fontSize: 'clamp(36px, 5vw, 56px)', color: '#EB2571' }}
                >
                  {r.value}
                </p>
                <p className="text-[11px] uppercase tracking-widest leading-snug break-words" style={{ color: '#cfcfcf' }}>
                  {r.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main content + sidebar ────────────────────────────────────────── */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-14">

            {/* ── Left: body ── */}
            <div>
              {/* Overview */}
              <FadeUp>
                <p
                  className="text-xl leading-relaxed mb-14"
                  style={{
                    color: '#F5F0EB',
                    borderLeft: '3px solid #EB2571',
                    paddingLeft: '1.25rem',
                  }}
                >
                  {cs.overview}
                </p>
                {cs.sponsorLine && (
                  <p className="text-xs -mt-10 mb-14" style={{ color: '#cfcfcf', paddingLeft: '1.25rem' }}>
                    {cs.sponsorLine}
                  </p>
                )}
              </FadeUp>

              {/* Stat tiles */}
              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14">
                {cs.results.map((r, i) => (
                  <StaggerItem key={i}>
                    <div className="p-6 h-full min-w-0" style={{ background: '#0F0F1C', border: '1px solid rgba(235,37,113,0.12)' }}>
                      <p className="font-['Bebas_Neue'] text-4xl leading-none mb-2 break-words" style={{ color: '#EB2571' }}>
                        {r.value}
                      </p>
                      <p className="text-[11px] uppercase tracking-widest leading-snug break-words" style={{ color: '#cfcfcf' }}>
                        {r.label}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              {/* Challenge */}
              <FadeUp>
                <h2
                  className="font-['Bebas_Neue'] text-4xl mb-4"
                  style={{ color: '#F5F0EB', letterSpacing: '0.04em' }}
                >
                  The Challenge
                </h2>
                <div
                  className="w-12 mb-6"
                  style={{ height: '2px', background: '#EB2571' }}
                />
                <p className="text-base leading-relaxed mb-14" style={{ color: '#cfcfcf' }}>
                  {cs.challenge}
                </p>
              </FadeUp>

              {/* Gallery image 1 */}
              {cs.galleryImages?.[0] && (
                <FadeUp>
                  <div className="mb-14 overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
                    <img
                      src={cs.galleryImages[0]}
                      alt={cs.galleryImageAlts?.[0] ?? ''}
                      loading="lazy"
                      className="w-full object-cover"
                      style={{ maxHeight: '420px' }}
                    />
                  </div>
                </FadeUp>
              )}

              {/* Approach */}
              <FadeUp>
                <h2
                  className="font-['Bebas_Neue'] text-4xl mb-4"
                  style={{ color: '#F5F0EB', letterSpacing: '0.04em' }}
                >
                  Our Approach
                </h2>
                <div
                  className="w-12 mb-8"
                  style={{ height: '2px', background: '#EB2571' }}
                />
              </FadeUp>

              <StaggerContainer className="space-y-6 mb-14">
                {cs.approach.map((step, i) => (
                  <StaggerItem key={i}>
                    <div
                      className="p-6"
                      style={{
                        background: '#0F0F1C',
                        border: '1px solid rgba(235,37,113,0.12)',
                      }}
                    >
                      <div className="flex items-start gap-4">
                        <span
                          className="font-['Bebas_Neue'] text-2xl shrink-0 mt-0.5"
                          style={{ color: '#EB2571' }}
                        >
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <div>
                          <h3
                            className="font-['Bebas_Neue'] text-xl mb-2 tracking-wider"
                            style={{ color: '#F5F0EB' }}
                          >
                            {step.heading}
                          </h3>
                          <p className="text-sm leading-relaxed" style={{ color: '#cfcfcf' }}>
                            {step.body}
                          </p>
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              {/* Gallery image 2 */}
              {cs.galleryImages?.[1] && (
                <FadeUp>
                  <div className="mb-14 overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
                    <img
                      src={cs.galleryImages[1]}
                      alt={cs.galleryImageAlts?.[1] ?? ''}
                      loading="lazy"
                      className="w-full object-cover"
                      style={{ maxHeight: '380px' }}
                    />
                  </div>
                </FadeUp>
              )}

            </div>

            {/* ── Right: sidebar ── */}
            <aside className="space-y-6 lg:pt-2">

              {/* Client info card */}
              <FadeUp>
                <div
                  className="p-6 sticky top-28"
                  style={{
                    background: '#0F0F1C',
                    border: '1px solid rgba(235,37,113,0.15)',
                  }}
                >
                  <p
                    className="text-[10px] uppercase tracking-widest font-semibold mb-5"
                    style={{ color: '#EB2571' }}
                  >
                    Project Details
                  </p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest mb-1" style={{ color: '#cfcfcf' }}>
                        Client
                      </p>
                      <p className="text-sm font-semibold" style={{ color: '#F5F0EB' }}>
                        {cs.client}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest mb-1" style={{ color: '#cfcfcf' }}>
                        Industry
                      </p>
                      <p className="text-sm font-semibold" style={{ color: '#F5F0EB' }}>
                        {cs.industry}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest mb-1" style={{ color: '#cfcfcf' }}>
                        Location
                      </p>
                      <p className="text-sm font-semibold" style={{ color: '#F5F0EB' }}>
                        {cs.location}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest mb-1" style={{ color: '#cfcfcf' }}>
                        Engagement Date
                      </p>
                      <p className="text-sm font-semibold" style={{ color: '#F5F0EB' }}>
                        {cs.date}
                      </p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="mb-6" style={{ height: '1px', background: 'rgba(255,255,255,0.07)' }} />

                  {/* Services */}
                  <p className="text-[10px] uppercase tracking-widest font-semibold mb-4" style={{ color: '#EB2571' }}>
                    Services Delivered
                  </p>
                  <ul className="space-y-2.5">
                    {cs.deliveredServices.map((s) => (
                      <li key={s} className="flex items-center gap-2.5">
                        <CheckCircle2 size={13} style={{ color: '#2AC4EA', flexShrink: 0 }} />
                        <span className="text-[13px]" style={{ color: '#F5F0EB' }}>
                          {s}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Divider */}
                  <div className="my-6" style={{ height: '1px', background: 'rgba(255,255,255,0.07)' }} />

                  {/* CTA */}
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 w-full text-white text-[11px] font-bold uppercase tracking-widest py-3.5 transition-opacity hover:opacity-85"
                    style={{ background: '#EB2571', borderRadius: 0 }}
                  >
                    Get Similar Results
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </FadeUp>
            </aside>
          </div>
        </div>
      </section>

      {/* ── Prev / Next navigation ────────────────────────────────────────── */}
      {(prev || next) && (
        <section
          className="px-4 py-0"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <div className="container mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2">
            {prev ? (
              <Link href={`/work/${prev.slug}`}>
                <div
                  className="group flex flex-col gap-1 px-0 py-8 pr-8 transition-opacity duration-200 hover:opacity-80"
                  style={{ borderRight: next ? '1px solid rgba(255,255,255,0.06)' : 'none' }}
                >
                  <span
                    className="flex items-center gap-2 text-[10px] uppercase tracking-widest mb-1"
                    style={{ color: '#cfcfcf' }}
                  >
                    <ArrowLeft size={11} /> Previous
                  </span>
                  <span
                    className="font-['Bebas_Neue'] text-2xl group-hover:text-[#EB2571] transition-colors"
                    style={{ color: '#F5F0EB' }}
                  >
                    {prev.client}
                  </span>
                  <span className="text-[11px]" style={{ color: '#cfcfcf' }}>
                    {prev.industry}
                  </span>
                </div>
              </Link>
            ) : (
              <div />
            )}
            {next && (
              <Link href={`/work/${next.slug}`}>
                <div className="group flex flex-col gap-1 px-8 py-8 text-right transition-opacity duration-200 hover:opacity-80">
                  <span
                    className="flex items-center justify-end gap-2 text-[10px] uppercase tracking-widest mb-1"
                    style={{ color: '#cfcfcf' }}
                  >
                    Next <ArrowRight size={11} />
                  </span>
                  <span
                    className="font-['Bebas_Neue'] text-2xl group-hover:text-[#EB2571] transition-colors"
                    style={{ color: '#F5F0EB' }}
                  >
                    {next.client}
                  </span>
                  <span className="text-[11px]" style={{ color: '#cfcfcf' }}>
                    {next.industry}
                  </span>
                </div>
              </Link>
            )}
          </div>
        </section>
      )}

      {/* ── Bottom CTA ────────────────────────────────────────────────────── */}
      <section
        className="py-24 px-4 text-center"
        style={{
          background: '#0D0D1A',
          borderTop: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <FadeUp>
          <p
            className="text-xs uppercase tracking-[0.22em] font-semibold mb-4"
            style={{ color: '#EB2571' }}
          >
            Ready?
          </p>
          <h2
            className="font-['Bebas_Neue'] leading-none mb-6"
            style={{ fontSize: 'clamp(40px, 6vw, 68px)', color: '#F5F0EB' }}
          >
            Let's Build Your Success Story
          </h2>
          <p className="mb-10 text-base max-w-xl mx-auto leading-relaxed" style={{ color: '#cfcfcf' }}>
            Book a free strategy call and we'll show you exactly how we'd approach your
            market, your competitors, and your goals.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 text-white text-[12px] font-bold uppercase tracking-widest px-8 py-4 transition-opacity hover:opacity-85"
            style={{ background: '#EB2571', borderRadius: 0 }}
          >
            Book a Strategy Call
            <ArrowRight size={14} />
          </Link>
        </FadeUp>
      </section>
    </>
  );
}
