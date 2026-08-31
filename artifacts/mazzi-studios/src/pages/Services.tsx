import { Head } from '@/components/seo/Head';
import { FadeUp } from '@/components/animations/FadeUp';
import { Link } from 'wouter';
import { CheckCircle2, Globe, Linkedin, MousePointerClick, Zap, Cog } from 'lucide-react';

/* Reusable label above section headings */
function SectionLabel({ children, light = false }: { children: string; light?: boolean }) {
  return (
    <div className="mb-4">
      <span className={`text-[11px] uppercase tracking-[0.14em] font-bold ${light ? 'text-[#EB2571]' : 'text-[#EB2571]'}`}>
        {children}
      </span>
      <div className="w-10 h-[2px] bg-[#EB2571] mt-2" />
    </div>
  );
}

/* Card for dark-background sections */
function DarkCard({ children, featured = false, accentColor = '#EB2571' }: { children: React.ReactNode; featured?: boolean; accentColor?: string }) {
  return (
    <div
      className="bg-[#0F0F1C] p-8 flex flex-col h-full transition-colors relative"
      style={{
        border: featured ? `1px solid ${accentColor}` : '1px solid rgba(235,37,113,0.15)',
        borderTop: featured ? `3px solid ${accentColor}` : undefined,
      }}
    >
      {children}
    </div>
  );
}

/* Card for light-background sections */
function LightCard({ children, featured = false }: { children: React.ReactNode; featured?: boolean }) {
  return (
    <div
      className="bg-white p-8 flex flex-col h-full transition-shadow relative"
      style={{
        border: featured ? '2px solid #EB2571' : '1px solid #e5e5e5',
        boxShadow: featured ? '0 4px 24px rgba(235,37,113,0.12)' : '0 2px 12px rgba(0,0,0,0.04)',
      }}
    >
      {children}
    </div>
  );
}

/* Quote button — adapts to background */
function QuoteBtn({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/contact"
      className="mt-auto inline-flex justify-center w-full py-3 text-[11px] font-bold uppercase tracking-widest transition-colors"
      style={
        light
          ? { background: '#EB2571', color: '#fff' }
          : { border: '1px solid rgba(235,37,113,0.4)', color: '#EB2571' }
      }
      onMouseEnter={e => {
        if (!light) {
          (e.currentTarget as HTMLElement).style.background = 'rgba(235,37,113,0.08)';
        }
      }}
      onMouseLeave={e => {
        if (!light) {
          (e.currentTarget as HTMLElement).style.background = 'transparent';
        }
      }}
    >
      Get a Quote
    </Link>
  );
}

export default function Services() {
  const jumpTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="w-full">
      <Head
        title="Marketing Services & Pricing | Websites, AI, PPC | Mazzi Studios"
        description="Explore Fractional CMO leadership, AI automation, websites, PPC, LinkedIn marketing, and strategy sprints built for healthcare and B2B growth."
      />

      {/* ── Hero ── dark */}
      <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 bg-[#080810] text-[#F5F0EB] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(235,37,113,0.08) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <FadeUp>
            <h1 className="text-[64px] md:text-[96px] font-['Bebas_Neue'] leading-[0.9] mb-6 text-[#F5F0EB]">
              MARKETING SERVICES &<br />
              <span className="text-[#EB2571]">STRATEGY.</span>
            </h1>
            <p className="text-[17px] text-[#cfcfcf] mb-12 max-w-2xl mx-auto leading-relaxed">
              Executive marketing leadership and AI automation for B2B and Healthcare.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { label: 'Fractional CMO', id: 'cmo' },
                { label: 'AI Automation', id: 'ai' },
                { label: 'Websites', id: 'web' },
                { label: 'LinkedIn', id: 'linkedin' },
                { label: 'PPC', id: 'ppc' },
                { label: 'Strategy', id: 'strategy' },
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => jumpTo(item.id)}
                  className="bg-transparent border border-[#EB2571]/35 text-[#EB2571] px-5 py-3 font-bold uppercase tracking-widest text-[11px] hover:bg-[#EB2571]/10 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Fractional CMO ── WHITE */}
      <section id="cmo" className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <FadeUp className="mb-16">
            <SectionLabel>Fractional CMO</SectionLabel>
            <h2 className="text-[40px] md:text-[52px] font-['Bebas_Neue'] text-[#0A0A1A] mt-3 leading-tight">
              Executive Marketing Leadership
            </h2>
            <p className="text-[17px] text-gray-500 mt-3 max-w-2xl">
              Executive marketing leadership and strategy without the full-time cost.
            </p>
          </FadeUp>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Lite',
                sub: '~10 hrs/week · 6-mo min',
                items: ['Marketing strategy', 'Team/agency management', 'Weekly strategy sessions', 'Monthly executive reporting', 'Channel strategy & budget'],
                featured: false,
              },
              {
                name: 'Growth',
                sub: '~15 hrs/week · 6-mo min',
                items: ['Everything in Lite', 'GTM planning', 'Brand strategy', 'Martech optimization', 'Hiring guidance', 'Board/investor support'],
                featured: true,
              },
              {
                name: 'Full',
                sub: '~20 hrs/week · 12-mo min',
                items: ['Everything in Growth', 'Full function ownership', 'Revenue ops alignment', 'Executive participation', 'M&A due diligence', 'Daily availability'],
                featured: false,
              },
            ].map((tier, i) => (
              <FadeUp key={tier.name} delay={i * 0.1}>
                <LightCard featured={tier.featured}>
                  {tier.featured && (
                    <span className="absolute top-4 right-4 px-3 py-1 bg-[#EB2571] text-white text-[10px] font-bold tracking-widest uppercase">
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-[28px] font-['Bebas_Neue'] text-[#0A0A1A] mb-1">{tier.name}</h3>
                  <p className="text-[12px] text-gray-400 uppercase tracking-widest mb-8">{tier.sub}</p>
                  <ul className="space-y-4 mb-10 flex-1">
                    {tier.items.map((f, j) => (
                      <li key={j} className="flex items-start gap-3 text-gray-600 text-[15px]">
                        <CheckCircle2 className="text-[#EB2571] shrink-0 mt-0.5" size={17} /> {f}
                      </li>
                    ))}
                  </ul>
                  <QuoteBtn light={tier.featured} />
                </LightCard>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI Automation ── DARK */}
      <section id="ai" className="py-24 bg-[#080810]">
        <div className="container mx-auto px-4 md:px-6">
          <FadeUp className="mb-16">
            <SectionLabel>AI Automation</SectionLabel>
            <h2 className="text-[40px] md:text-[52px] font-['Bebas_Neue'] text-[#F5F0EB] mt-3 leading-tight">
              AI Marketing Automation
            </h2>
            <p className="text-[17px] text-[#cfcfcf] mt-3 max-w-2xl">
              Custom n8n workflows that save your team hundreds of hours.
            </p>
          </FadeUp>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Starter Suite',
                sub: '2 weeks · 1–2 workflows',
                items: ['Discovery', 'n8n build & test', 'Tool integration', '30-min training', 'Monthly monitoring'],
                featured: false,
              },
              {
                name: 'Growth Suite',
                sub: '4 weeks · 3–4 workflows',
                items: ['Everything in Starter', 'Multi-agent system', 'Advanced AI integration', 'Custom dashboards', '60-min training', 'Weekly check-ins'],
                featured: true,
              },
              {
                name: 'Enterprise Suite',
                sub: '6+ weeks · 5+ workflows',
                items: ['Everything in Growth', 'Full ecosystem', 'HIPAA-compliant workflows', 'Custom fine-tuning', 'Team training (5 users)', 'Dedicated success manager'],
                featured: false,
              },
            ].map((tier, i) => (
              <FadeUp key={tier.name} delay={i * 0.1}>
                <DarkCard featured={tier.featured} accentColor="#2AC4EA">
                  {tier.featured && (
                    <span className="absolute top-4 right-4 px-3 py-1 bg-[#2AC4EA]/10 text-[#2AC4EA] text-[10px] font-bold tracking-widest uppercase border border-[#2AC4EA]/20">
                      Featured
                    </span>
                  )}
                  <h3 className="text-[26px] font-['Bebas_Neue'] text-[#F5F0EB] mb-1">{tier.name}</h3>
                  <p className="text-[12px] text-[#cfcfcf] uppercase tracking-widest mb-8">{tier.sub}</p>
                  <ul className="space-y-4 mb-10 flex-1">
                    {tier.items.map((f, j) => (
                      <li key={j} className="flex items-start gap-3 text-[#cfcfcf] text-[15px]">
                        <Zap className="text-[#2AC4EA] shrink-0 mt-0.5" size={17} /> {f}
                      </li>
                    ))}
                  </ul>
                  <QuoteBtn />
                </DarkCard>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Websites ── WHITE */}
      <section id="web" className="py-24 bg-[#F9F9F9]">
        <div className="container mx-auto px-4 md:px-6">
          <FadeUp className="mb-16">
            <SectionLabel>Websites</SectionLabel>
            <div className="flex items-center gap-3 mt-3">
              <Globe className="text-[#EB2571]" size={32} />
              <h2 className="text-[40px] md:text-[52px] font-['Bebas_Neue'] text-[#0A0A1A] leading-tight">
                Website Development
              </h2>
            </div>
            <p className="text-[17px] text-gray-500 mt-3 max-w-2xl">
              High-performance sites engineered for conversion and SEO.
            </p>
          </FadeUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              { title: 'Starter Site', time: '2 wks · 5 pages' },
              { title: 'Business Site', time: '3–4 wks · 10 pages' },
              { title: 'Growth Site', time: '4–6 wks · 20 pages + LP' },
              { title: 'E-Commerce Store', time: '4–5 wks · Shopify/Woo · 50 products' },
              { title: 'High-Converting LP', time: '5–7 days' },
              { title: 'Website Refresh', time: '2–3 wks · home + 5 pages' },
            ].map((pkg, i) => (
              <FadeUp key={pkg.title} delay={i * 0.07}>
                <div className="bg-white p-8 border border-gray-200 hover:border-[#EB2571] hover:shadow-md transition-all h-full flex flex-col items-start">
                  <h4 className="text-[#0A0A1A] text-[20px] font-['Bebas_Neue'] mb-1">{pkg.title}</h4>
                  <p className="text-[12px] text-gray-400 uppercase tracking-widest mb-6">{pkg.time}</p>
                  <QuoteBtn light />
                </div>
              </FadeUp>
            ))}
          </div>

          <h3 className="text-[32px] font-['Bebas_Neue'] text-[#0A0A1A] mb-8 text-center">Care Plans</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { name: 'Essential', desc: 'Updates, backups, uptime monitoring, 30-min support', featured: false },
              { name: 'Growth', desc: 'Essential + SEO monitoring, security, 1-hr support', featured: true },
              { name: 'Premium', desc: 'Growth + content updates, conversion tracking, priority support', featured: false },
            ].map((plan) => (
              <div
                key={plan.name}
                className="bg-white p-8 text-center flex flex-col transition-shadow"
                style={{
                  border: plan.featured ? '2px solid #EB2571' : '1px solid #e5e5e5',
                  boxShadow: plan.featured ? '0 4px 24px rgba(235,37,113,0.1)' : '0 2px 8px rgba(0,0,0,0.04)',
                }}
              >
                <h4
                  className="text-[22px] font-['Bebas_Neue'] mb-4"
                  style={{ color: plan.featured ? '#EB2571' : '#0A0A1A' }}
                >
                  {plan.name}
                </h4>
                <p className="text-[15px] text-gray-500 leading-relaxed mb-8 flex-1">{plan.desc}</p>
                <Link
                  href="/contact"
                  className="inline-flex justify-center w-full py-3 text-[11px] font-bold uppercase tracking-widest transition-colors"
                  style={plan.featured
                    ? { background: '#EB2571', color: '#fff' }
                    : { border: '1px solid rgba(235,37,113,0.4)', color: '#EB2571' }
                  }
                >
                  Enquire
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LinkedIn ── DARK */}
      <section id="linkedin" className="py-24 bg-[#0D0D1A]">
        <div className="container mx-auto px-4 md:px-6">
          <FadeUp className="mb-16">
            <SectionLabel>LinkedIn</SectionLabel>
            <div className="flex items-center gap-3 mt-3">
              <Linkedin className="text-[#2AC4EA]" size={32} />
              <h2 className="text-[40px] md:text-[52px] font-['Bebas_Neue'] text-[#F5F0EB] leading-tight">
                LinkedIn Marketing
              </h2>
            </div>
            <p className="text-[17px] text-[#cfcfcf] mt-3 max-w-2xl">
              B2B audience building and executive ghostwriting.
            </p>
          </FadeUp>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Starter', sub: '3-mo min', featured: false,
                items: ['8 posts/mo', 'Profile optimization', 'Content calendar'],
              },
              {
                name: 'Authority Builder', sub: '6-mo min', featured: true,
                items: ['12 posts + 2 carousels', 'Engagement management', 'Connection strategy'],
              },
              {
                name: 'Executive', sub: '6-mo min', featured: false,
                items: ['20 posts', 'Ghostwritten articles', 'Outbound lead gen + newsletter'],
              },
            ].map((tier, i) => (
              <FadeUp key={tier.name} delay={i * 0.1}>
                <DarkCard featured={tier.featured} accentColor="#2AC4EA">
                  <h3 className="text-[26px] font-['Bebas_Neue'] text-[#F5F0EB] mb-1">{tier.name}</h3>
                  <p className="text-[12px] text-[#cfcfcf] uppercase tracking-widest mb-8">{tier.sub}</p>
                  <ul className="space-y-4 mb-8 flex-1">
                    {tier.items.map((f, j) => (
                      <li key={j} className="flex items-start gap-3 text-[#cfcfcf] text-[15px]">
                        <CheckCircle2 className="text-[#2AC4EA] shrink-0 mt-0.5" size={17} /> {f}
                      </li>
                    ))}
                  </ul>
                  <QuoteBtn />
                </DarkCard>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── PPC + Strategy ── WHITE */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* PPC */}
            <div id="ppc">
              <FadeUp className="mb-10">
                <SectionLabel>PPC</SectionLabel>
                <div className="flex items-center gap-3 mt-3">
                  <MousePointerClick className="text-[#EB2571]" size={28} />
                  <h2 className="text-[36px] md:text-[44px] font-['Bebas_Neue'] text-[#0A0A1A] leading-tight">
                    PPC Management
                  </h2>
                </div>
              </FadeUp>
              <div className="space-y-5">
                {[
                  { name: 'Starter', sub: 'Ad spend up to $5K', desc: 'One platform (Google or Meta), bi-weekly optimization, monthly reporting.', featured: false },
                  { name: 'Growth', sub: 'Ad spend $5K–$15K', desc: 'Google + Meta, retargeting setup, A/B testing, bi-weekly reporting.', featured: true },
                  { name: 'Scale', sub: 'Ad spend $15K+', desc: 'Full-funnel (Google+Meta+LinkedIn), CRO recommendations, weekly optimization.', featured: false },
                ].map((tier, i) => (
                  <FadeUp key={tier.name} delay={i * 0.1}>
                    <div
                      className="p-7 bg-white flex flex-col transition-shadow"
                      style={{
                        border: tier.featured ? '2px solid #EB2571' : '1px solid #e5e5e5',
                        boxShadow: tier.featured ? '0 4px 20px rgba(235,37,113,0.1)' : '0 2px 8px rgba(0,0,0,0.04)',
                      }}
                    >
                      <h4 className="text-[22px] font-['Bebas_Neue'] mb-1" style={{ color: tier.featured ? '#EB2571' : '#0A0A1A' }}>{tier.name}</h4>
                      <p className="text-[12px] text-gray-400 uppercase tracking-widest mb-3">{tier.sub}</p>
                      <p className="text-[15px] text-gray-500 leading-relaxed mb-6">{tier.desc}</p>
                      <QuoteBtn light={tier.featured} />
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>

            {/* Strategy */}
            <div id="strategy">
              <FadeUp className="mb-10">
                <SectionLabel>Strategy</SectionLabel>
                <div className="flex items-center gap-3 mt-3">
                  <Cog className="text-[#EB2571]" size={28} />
                  <h2 className="text-[36px] md:text-[44px] font-['Bebas_Neue'] text-[#0A0A1A] leading-tight">
                    Strategy Sprints
                  </h2>
                </div>
              </FadeUp>
              <div className="space-y-5">
                {[
                  {
                    name: 'Marketing Diagnostic', sub: '2 weeks delivery',
                    items: ['Full audit & competitive analysis', '90-day action plan & presentation'],
                  },
                  {
                    name: 'Go-to-Market Sprint', sub: '4–6 weeks delivery',
                    items: ['Market analysis & ICP development', 'Positioning & messaging framework', 'Launch timeline & budget mapping'],
                  },
                ].map((sprint, i) => (
                  <FadeUp key={sprint.name} delay={i * 0.1}>
                    <div className="p-7 bg-white border border-gray-200 hover:border-[#EB2571] hover:shadow-md transition-all flex flex-col">
                      <h4 className="text-[22px] font-['Bebas_Neue'] text-[#0A0A1A] mb-1">{sprint.name}</h4>
                      <p className="text-[12px] text-gray-400 uppercase tracking-widest mb-5">{sprint.sub}</p>
                      <ul className="space-y-3 mb-7 flex-1">
                        {sprint.items.map((f, j) => (
                          <li key={j} className="flex items-start gap-3 text-gray-600 text-[15px]">
                            <CheckCircle2 size={17} className="mt-0.5 text-[#EB2571] shrink-0" /> {f}
                          </li>
                        ))}
                      </ul>
                      <QuoteBtn light />
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── PINK */}
      <section className="py-24 bg-[#EB2571] text-center">
        <div className="container mx-auto px-4">
          <FadeUp>
            <h2 className="text-[52px] md:text-[68px] font-['Bebas_Neue'] text-white mb-4 leading-tight">
              LET'S DISCUSS YOUR NEEDS
            </h2>
            <p className="text-[18px] text-white/85 mb-12 max-w-2xl mx-auto">
              Not sure which service fits your current stage? Let's figure it out together.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-[#EB2571] px-10 py-5 font-bold uppercase tracking-widest text-sm hover:opacity-90 transition-opacity"
            >
              Book Your Free Consultation
            </Link>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
