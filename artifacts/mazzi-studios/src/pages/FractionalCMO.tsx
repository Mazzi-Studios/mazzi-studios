import { Head } from '@/components/seo/Head';
import { FadeUp } from '@/components/animations/FadeUp';
import { Link } from 'wouter';
import { CheckCircle2, TrendingUp, Users, Target, Activity, Bot, PieChart, ShieldCheck } from 'lucide-react';
import { useState } from 'react';

export default function FractionalCMO() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="w-full bg-[#080810]">
      <Head
        title="Fractional CMO Services | Executive Marketing Leadership | Mazzi Studios"
        description="Get senior marketing strategy, team leadership, and accountable growth execution without the cost or commitment of hiring a full-time CMO."
      />

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 bg-[#080810] text-[#F5F0EB] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" 
          style={{ background: 'radial-gradient(circle, rgba(235,37,113,0.08) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-5xl">
          <FadeUp>
            <h1 className="text-[64px] md:text-[96px] font-normal tracking-tight leading-[0.9] mb-6 text-[#F5F0EB]">
              EXECUTIVE MARKETING LEADERSHIP <br/>
              <span style={{ color: '#EB2571' }}>WITHOUT THE EXECUTIVE PRICE TAG.</span>
            </h1>
            <p className="text-[17px] text-[#cfcfcf] mb-12 max-w-2xl mx-auto leading-relaxed">
              Get C-suite marketing leadership without the full-time cost. Fractional CMO services tailored for your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/contact"
                className="w-full sm:w-auto bg-[#EB2571] text-white px-8 py-4 font-bold uppercase tracking-widest text-xs text-center hover:opacity-90 transition-opacity"
              >
                Schedule Free Consultation
              </Link>
              <a 
                href="#pricing"
                className="w-full sm:w-auto bg-transparent border border-[#EB2571]/35 text-[#EB2571] px-8 py-4 font-bold uppercase tracking-widest text-xs text-center hover:bg-[#EB2571]/10 transition-colors"
              >
                See Pricing
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-24 bg-[#0D0D1A] border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <FadeUp className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
            <span className="text-[11px] uppercase tracking-[0.12em] text-[#EB2571]/80 mb-3">
              THE PROBLEM
            </span>
            <div className="w-12 h-[1px] bg-[#EB2571]/40 mb-6"></div>
            <h2 className="text-[36px] md:text-[48px] font-bold text-[#F5F0EB] tracking-tight">Sound Familiar?</h2>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-8">
            <FadeUp delay={0.1}>
              <div className="bg-[#0F0F1C] border border-[#EB2571]/15 p-8 flex flex-col h-full hover:border-[#EB2571]/40 transition-colors">
                <Target size={32} className="text-[#EB2571] mb-6" />
                <h3 className="text-[20px] md:text-[24px] font-semibold text-[#F5F0EB] mb-4">Scattered marketing with no strategic owner</h3>
                <p className="text-[16px] text-[#cfcfcf] leading-relaxed flex-1">Multiple agencies executing random acts of marketing, no unified strategy, and nobody owning the big picture revenue goals.</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="bg-[#0F0F1C] border border-[#EB2571]/15 p-8 flex flex-col h-full hover:border-[#EB2571]/40 transition-colors">
                <TrendingUp size={32} className="text-[#EB2571] mb-6" />
                <h3 className="text-[20px] md:text-[24px] font-semibold text-[#F5F0EB] mb-4">Can't afford or justify a full-time CMO</h3>
                <p className="text-[16px] text-[#cfcfcf] leading-relaxed flex-1">A great CMO costs $250K-$400K/year in salary plus benefits and equity. A junior hire won't have the strategic chops you need.</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.3}>
              <div className="bg-[#0F0F1C] border border-[#EB2571]/15 p-8 flex flex-col h-full hover:border-[#EB2571]/40 transition-colors">
                <Users size={32} className="text-[#EB2571] mb-6" />
                <h3 className="text-[20px] md:text-[24px] font-semibold text-[#F5F0EB] mb-4">Agencies execute tactics, not strategy</h3>
                <p className="text-[16px] text-[#cfcfcf] leading-relaxed flex-1">Most agencies execute tactics (SEO, ads, social). They aren't looking at your unit economics, sales alignment, or overall business strategy.</p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 bg-[#080810] border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <div className="bg-[#0F0F1C] border border-[#EB2571]/15 p-8 md:p-12 h-full">
                <h3 className="font-bold text-[24px] text-[#F5F0EB] mb-8 border-b border-white/5 pb-4">What You Get</h3>
                <ul className="space-y-4">
                  {[
                    "Marketing strategy development and oversight",
                    "Team/agency management and accountability",
                    "Weekly strategy sessions",
                    "Monthly executive reporting",
                    "Channel strategy and budget allocation",
                    "Go-to-market planning",
                    "Brand strategy and positioning",
                    "Marketing technology stack optimization"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[#cfcfcf] text-[16px]">
                      <CheckCircle2 className="text-[#2AC4EA] shrink-0 mt-0.5" size={20} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
            
            <FadeUp delay={0.2}>
              <div className="flex flex-col mb-8">
                <span className="text-[11px] uppercase tracking-[0.12em] text-[#EB2571]/80 mb-2">
                  THE PLAYBOOK
                </span>
                <div className="w-12 h-[1px] bg-[#EB2571]/40"></div>
              </div>
              <h2 className="text-[36px] md:text-[48px] font-bold text-[#F5F0EB] tracking-tight mb-6">Strategic Ownership</h2>
              <div className="text-[17px] text-[#cfcfcf] leading-relaxed flex flex-col gap-6">
                <p>
                  We step into your organization as your senior marketing leader. We sit on your executive team, manage your existing internal staff or external agencies, and own the marketing number.
                </p>
                <p>
                  You get the strategic guidance you desperately need, paired with the modern operational efficiency that scales businesses in 2026. No fluff, no busywork, just results.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Responsibilities Grid */}
      <section className="py-24 bg-[#0D0D1A] border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <FadeUp className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
            <span className="text-[11px] uppercase tracking-[0.12em] text-[#EB2571]/80 mb-3">
              CORE CAPABILITIES
            </span>
            <div className="w-12 h-[1px] bg-[#EB2571]/40 mb-6"></div>
            <h2 className="text-[36px] md:text-[48px] font-bold text-[#F5F0EB] tracking-tight">Responsibilities</h2>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Target, label: "Strategy" },
              { icon: Users, label: "Team Leadership" },
              { icon: PieChart, label: "Analytics" },
              { icon: Activity, label: "Vendor Management" },
              { icon: TrendingUp, label: "Demand Gen" },
              { icon: ShieldCheck, label: "Brand" },
              { icon: Bot, label: "AI Integration" },
              { icon: CheckCircle2, label: "Budget" },
            ].map((Item, i) => (
              <FadeUp key={Item.label} delay={i * 0.05}>
                <div className="bg-[#0F0F1C] border border-[#EB2571]/15 p-8 rounded-none hover:border-[#EB2571]/40 transition-colors flex flex-col items-center text-center gap-4 h-full">
                  <Item.icon size={32} className="text-[#EB2571]" />
                  <span className="font-semibold text-[#F5F0EB] text-[18px]">{Item.label}</span>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-[#080810] border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <FadeUp className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
            <span className="text-[11px] uppercase tracking-[0.12em] text-[#EB2571]/80 mb-3">
              TRANSPARENT PRICING
            </span>
            <div className="w-12 h-[1px] bg-[#EB2571]/40 mb-6"></div>
            <h2 className="text-[36px] md:text-[48px] font-bold text-[#F5F0EB] tracking-tight">Packages</h2>
          </FadeUp>

          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {/* Starter */}
            <FadeUp delay={0.1}>
              <div className="bg-[#0F0F1C] border border-[#EB2571]/15 p-8 flex flex-col h-full hover:border-[#EB2571]/40 transition-colors">
                <h3 className="text-[24px] font-semibold text-[#F5F0EB] mb-2">Lite</h3>
                <p className="text-[13px] text-[#cfcfcf] uppercase tracking-widest mt-4 mb-8">~10 hrs/week • 6-mo min</p>
                <ul className="space-y-4 mb-10 flex-1">
                  {["Marketing strategy", "Team/agency management", "Weekly strategy sessions", "Monthly executive reporting", "Channel strategy & budget"].map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-[#cfcfcf] text-[15px]">
                      <CheckCircle2 className="text-[#EB2571] shrink-0 mt-0.5" size={18} /> <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="w-full bg-transparent border border-[#EB2571]/35 text-[#EB2571] px-6 py-4 font-bold uppercase tracking-widest text-xs text-center hover:bg-[#EB2571]/5 transition-colors">
                  Schedule a Call
                </Link>
              </div>
            </FadeUp>

            {/* Growth */}
            <FadeUp delay={0.2}>
              <div className="bg-[#0F0F1C] border border-[#EB2571]/15 border-t-2 border-t-[#EB2571] p-8 flex flex-col h-full hover:border-[#EB2571]/40 transition-colors relative">
                <div className="absolute top-0 right-0 p-4">
                  <span className="px-3 py-1 bg-[#EB2571]/10 text-[#EB2571] text-[10px] font-bold tracking-widest uppercase border border-[#EB2571]/20">Featured</span>
                </div>
                <h3 className="text-[24px] font-semibold text-[#F5F0EB] mb-2">Growth</h3>
                <p className="text-[13px] text-[#cfcfcf] uppercase tracking-widest mt-4 mb-8">~15 hrs/week • 6-mo min</p>
                <ul className="space-y-4 mb-10 flex-1">
                  {["Everything in Lite", "GTM planning", "Brand strategy", "Martech optimization", "Hiring guidance", "Board/investor support"].map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-[#cfcfcf] text-[15px]">
                      <CheckCircle2 className="text-[#EB2571] shrink-0 mt-0.5" size={18} /> <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="w-full bg-[#EB2571] text-white px-6 py-4 font-bold uppercase tracking-widest text-xs text-center hover:opacity-90 transition-opacity">
                  Schedule a Call
                </Link>
              </div>
            </FadeUp>

            {/* Full */}
            <FadeUp delay={0.3}>
              <div className="bg-[#0F0F1C] border border-[#EB2571]/15 p-8 flex flex-col h-full hover:border-[#EB2571]/40 transition-colors">
                <h3 className="text-[24px] font-semibold text-[#F5F0EB] mb-2">Full</h3>
                <p className="text-[13px] text-[#cfcfcf] uppercase tracking-widest mt-4 mb-8">~20 hrs/week • 12-mo min</p>
                <ul className="space-y-4 mb-10 flex-1">
                  {["Everything in Growth", "Full function ownership", "Revenue ops alignment", "Executive participation", "M&A due diligence", "Daily availability"].map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-[#cfcfcf] text-[15px]">
                      <CheckCircle2 className="text-[#EB2571] shrink-0 mt-0.5" size={18} /> <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="w-full bg-transparent border border-[#EB2571]/35 text-[#EB2571] px-6 py-4 font-bold uppercase tracking-widest text-xs text-center hover:bg-[#EB2571]/5 transition-colors">
                  Schedule a Call
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-24 bg-[#0D0D1A] border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <FadeUp className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
            <span className="text-[11px] uppercase tracking-[0.12em] text-[#EB2571]/80 mb-3">
              DOMAINS
            </span>
            <div className="w-12 h-[1px] bg-[#EB2571]/40 mb-6"></div>
            <h2 className="text-[36px] md:text-[48px] font-bold text-[#F5F0EB] tracking-tight">Industries</h2>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Healthcare B2B/B2C",
              "B2B Technology & SaaS",
              "Professional Services",
              "Funded Startups (Series A-C)",
            ].map((ind, i) => (
              <FadeUp key={ind} delay={i * 0.1}>
                <div className="bg-[#0F0F1C] border border-[#EB2571]/15 p-8 text-center h-full flex flex-col justify-center min-h-[160px]">
                  <h4 className="font-semibold text-[18px] text-[#F5F0EB] leading-tight">{ind}</h4>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#080810] border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <FadeUp className="text-center mb-16 flex flex-col items-center">
            <span className="text-[11px] uppercase tracking-[0.12em] text-[#EB2571]/80 mb-3">
              FAQ
            </span>
            <div className="w-12 h-[1px] bg-[#EB2571]/40 mb-6"></div>
            <h2 className="text-[36px] md:text-[48px] font-bold text-[#F5F0EB] tracking-tight">Frequently Asked Questions</h2>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="flex flex-col gap-4">
              {[
                {
                  q: "What is a Fractional CMO?",
                  a: "A senior marketing executive who works with your company part-time, providing C-suite level strategy without the full-time salary and benefits."
                },
                {
                  q: "How is this different from a marketing agency?",
                  a: "Agencies execute. A Fractional CMO owns the strategy, manages agencies, and aligns marketing with your business goals."
                },
                {
                  q: "What's the minimum commitment?",
                  a: "6 months for Lite and Growth packages, 12 months for Full. Strategy takes time to show results."
                },
                {
                  q: "Do you work with our existing team?",
                  a: "Yes. We integrate with your internal team and any existing agency or vendor relationships."
                },
                {
                  q: "What industries do you specialize in?",
                  a: "Healthcare B2B/B2C, B2B Technology, Professional Services, and funded startups."
                },
                {
                  q: "What results can we expect?",
                  a: "Clients typically see measurable pipeline growth within 90 days, with significant revenue impact by month six."
                }
              ].map((faq, i) => (
                <div key={i} className="bg-[#0F0F1C] border border-[#EB2571]/15">
                  <button 
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full text-left px-8 py-6 font-bold text-[#F5F0EB] text-[18px] flex justify-between items-center"
                  >
                    {faq.q}
                    <span className="text-[#EB2571] text-2xl font-normal leading-none ml-4">{openFaq === i ? '−' : '+'}</span>
                  </button>
                  {openFaq === i && (
                    <div className="px-8 pb-8 text-[#cfcfcf] text-[16px] leading-relaxed border-t border-white/5 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#EB2571] text-center">
        <div className="container mx-auto px-4">
          <FadeUp>
            <h2 className="text-[56px] md:text-[72px] text-[#F5F0EB] mb-8 leading-[1.1] tracking-tight">READY TO TRANSFORM YOUR MARKETING?</h2>
            <Link 
              href="/contact"
              className="inline-block bg-[#F5F0EB] text-[#EB2571] px-10 py-5 font-bold uppercase tracking-widest text-sm hover:opacity-90 transition-opacity"
            >
              Schedule Your Free Consultation
            </Link>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}