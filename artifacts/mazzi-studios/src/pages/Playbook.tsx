import { useState, useRef } from 'react';
import { Link, useLocation } from 'wouter';
import { Head } from '@/components/seo/Head';
import { FadeUp } from '@/components/animations/FadeUp';
import { Check, ArrowRight, Download, BookOpen, Zap, Search, MessageSquare, BarChart3, FileText, Shield } from 'lucide-react';
import { PlaybookBg } from '@/components/PlaybookBg';

// ── Types ────────────────────────────────────────────────────────────────────
declare const window: Window & { gtag?: (...args: unknown[]) => void };

// ── Stat card ────────────────────────────────────────────────────────────────
function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="bg-white border-l-4 p-6 rounded-sm" style={{ borderLeftColor: '#EB2571' }}>
      <span className="block font-['Bebas_Neue'] text-[2.2rem] leading-none mb-2" style={{ color: '#080810' }}>{number}</span>
      <span className="block text-[13px] leading-snug" style={{ color: '#555' }}>{label}</span>
    </div>
  );
}

// ── Feature card (paid) ───────────────────────────────────────────────────────
function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="border border-white/10 p-5 rounded-sm" style={{ background: 'rgba(255,255,255,0.05)' }}>
      <p className="font-bold text-[#F5F0EB] text-[14px] mb-2">{title}</p>
      <p className="text-[13px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.58)' }}>{desc}</p>
    </div>
  );
}

// ── Checklist item ────────────────────────────────────────────────────────────
function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-[15px] leading-relaxed mb-4" style={{ color: '#222' }}>
      <span className="mt-[2px] shrink-0 flex items-center justify-center rounded-full bg-[#16a34a] text-white" style={{ width: 22, height: 22 }}>
        <Check size={13} strokeWidth={3} />
      </span>
      <span>{children}</span>
    </li>
  );
}

// ── Form ──────────────────────────────────────────────────────────────────────
function LeadForm() {
  const [, navigate] = useLocation();
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    const data = {
      firstName: fd.get('firstName') as string,
      lastName: fd.get('lastName') as string,
      email: fd.get('email') as string,
      company: fd.get('company') as string,
    };

    // GA4 conversion event
    window.gtag?.('event', 'generate_lead', {
      event_category: 'AEO Playbook',
      event_label: 'Free Guide Download',
      value: 0,
      currency: 'USD',
      user_data: { email: data.email },
    });

    // TODO: Wire to ConvertKit / email delivery here
    // e.g. fetch('https://api.convertkit.com/v3/forms/YOUR_ID/subscribe', {...})
    console.log('Lead captured:', data);

    // Short delay to let GA4 fire, then redirect to thank-you
    setTimeout(() => navigate('/thank-you'), 400);
  }

  return (
    <div className="max-w-[540px] mx-auto bg-white border border-[#e5e7eb] rounded-lg p-10 shadow-lg">
      <h2 className="font-['Bebas_Neue'] text-[2rem] leading-tight mb-1" style={{ color: '#080810' }}>
        Get the free guide.
      </h2>
      <p className="text-[14px] mb-7" style={{ color: '#6b7280' }}>
        No immediate sales sequence. You get the guide, and if you decide the full playbook is worth it, you will know where to find it.
      </p>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-3 mb-3">
          <div className="flex flex-col gap-1">
            <label className="text-[12px] font-semibold tracking-wide uppercase" style={{ color: '#374151' }}>First Name</label>
            <input name="firstName" type="text" placeholder="Ricardo" required
              className="border border-[#e5e7eb] rounded px-3 py-2 text-[15px] outline-none focus:border-[#EB2571] transition-colors" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[12px] font-semibold tracking-wide uppercase" style={{ color: '#374151' }}>Last Name</label>
            <input name="lastName" type="text" placeholder="Mazzi" required
              className="border border-[#e5e7eb] rounded px-3 py-2 text-[15px] outline-none focus:border-[#EB2571] transition-colors" />
          </div>
        </div>
        <div className="flex flex-col gap-1 mb-3">
          <label className="text-[12px] font-semibold tracking-wide uppercase" style={{ color: '#374151' }}>Email Address</label>
          <input name="email" type="email" placeholder="you@yourcompany.com" required
            className="border border-[#e5e7eb] rounded px-3 py-2 text-[15px] outline-none focus:border-[#EB2571] transition-colors" />
        </div>
        <div className="flex flex-col gap-1 mb-6">
          <label className="text-[12px] font-semibold tracking-wide uppercase" style={{ color: '#374151' }}>Company Name</label>
          <input name="company" type="text" placeholder="Mazzi Studios" required
            className="border border-[#e5e7eb] rounded px-3 py-2 text-[15px] outline-none focus:border-[#EB2571] transition-colors" />
        </div>
        <button type="submit" disabled={loading}
          className="w-full font-bold uppercase tracking-widest text-[13px] text-white py-4 transition-opacity hover:opacity-85 disabled:opacity-60"
          style={{ background: '#EB2571', borderRadius: 0 }}>
          {loading ? 'Sending…' : 'Send Me the Free Guide'}
        </button>
        <p className="text-[12px] text-center mt-3" style={{ color: '#9ca3af' }}>
          No spam. One email with your guide. You will hear from us again only if you want to.
        </p>
      </form>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function Playbook() {
  return (
    <div className="w-full">
      <Head
        title="90-Day AEO/GEO Playbook + Free Guide | Mazzi Studios"
        description="Your customers are asking AI for recommendations. Most businesses are not showing up. Get our free AEO/GEO guide and the full 90-day playbook to get cited in ChatGPT, Perplexity, and Google AI Mode."
        canonical="https://mazzistudios.com/playbook"
      />

      {/* ── HERO ── */}
      <section className="relative min-h-[82vh] flex items-center bg-[#080810] text-[#F5F0EB] text-center overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="absolute inset-0 pointer-events-none">
          <PlaybookBg />
        </div>
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 40%, rgba(8,8,16,0.65) 100%)'
        }} />
        <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-4xl">
          <FadeUp>
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.14em] px-4 py-2 rounded-full mb-8"
              style={{ background: 'rgba(235,37,113,0.15)', color: '#EB2571', border: '1px solid rgba(235,37,113,0.25)' }}>
              Free Download
            </span>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h1 className="font-['Bebas_Neue'] font-normal leading-[0.9] tracking-tight mb-6"
              style={{ fontSize: 'clamp(52px, 9vw, 96px)' }}>
              YOUR CUSTOMERS<br />
              ARE ASKING AI.<br />
              <span style={{ color: '#EB2571' }}>MOST BUSINESSES ARE NOT SHOWING UP.</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.16}>
            <p className="text-[17px] leading-relaxed mb-10 mx-auto max-w-2xl" style={{ color: '#cfcfcf' }}>
              A plain-English guide to what changed in search, why most businesses are invisible to AI right now, and the three things that determine whether you get cited or completely skipped. Based on 18 months of client work and field research published on Mazzi Studios.
            </p>
          </FadeUp>
          <FadeUp delay={0.22}>
            <a href="#download"
              className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-[12px] text-white px-8 py-4 transition-opacity hover:opacity-85"
              style={{ background: '#EB2571', borderRadius: 0 }}>
              <Download size={15} /> Get the Free Guide Below
            </a>
          </FadeUp>
        </div>
      </section>

      {/* ── PROOF BAR ── */}
      <div className="py-4 border-y border-white/5" style={{ background: '#0D0D1A' }}>
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {[
              '18 months of client research and agency partner work',
              'Based on Ricardo Mazzi\'s field report published May 2026',
              'No fluff. No vague advice.',
            ].map((item) => (
              <span key={item} className="flex items-center gap-2 text-[12px] uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.55)' }}>
                <span className="rounded-full shrink-0" style={{ width: 6, height: 6, background: '#EB2571', display: 'inline-block' }} />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── PROBLEM SECTION — WHITE ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <FadeUp>
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] mb-3" style={{ color: '#EB2571' }}>What Changed</p>
            <div className="w-10 h-[2px] bg-[#EB2571] mb-6" />
            <h2 className="font-['Bebas_Neue'] font-normal text-[#080810] mb-5" style={{ fontSize: 'clamp(28px, 4vw, 42px)' }}>
              Search Did Not Evolve. It Split Into Two Completely Different Systems.
            </h2>
            <p className="text-[16px] text-[#333] leading-relaxed mb-5">
              Traditional search still exists. Ranking on page 1 of Google still matters. But a rapidly growing share of your potential customers are no longer clicking links. They are asking ChatGPT, Perplexity, Google AI Mode, or another AI assistant a question, reading the answer directly, and acting on it.
            </p>
            <p className="text-[16px] text-[#333] leading-relaxed">
              If your business is not cited in that answer, you are invisible to that customer for that query. It does not matter where you rank organically. AI citation and organic ranking are two different systems, with two different sets of rules.
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-10">
              <StatCard number="900M+" label="ChatGPT weekly active users as of February 2026, up from 400M a year earlier" />
              <StatCard number="42%" label="of all Google searches now trigger an AI Overview response" />
              <StatCard number="58%" label="reduction in click-through rates for top-ranking pages when AI Overviews appear" />
              <StatCard number="23 words" label="average AI query length vs. 3–4 words for a traditional Google search" />
            </div>
          </FadeUp>

          <FadeUp delay={0.15}>
            <blockquote className="border-l-4 border-[#080810] pl-6 py-2 my-8" style={{ background: '#f9f9f9' }}>
              <p className="italic text-[17px] text-[#080810] leading-relaxed mb-3">
                "Last year, I told our teams: assume there's no search. You have to have your businesses planned as if search is zero."
              </p>
              <cite className="text-[12px] not-italic" style={{ color: '#6b7280' }}>
                Roger Lynch, CEO of Condé Nast (Vogue, GQ, The New Yorker, Wired), May 2026
              </cite>
            </blockquote>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="text-[16px] text-[#333] leading-relaxed">
              There is no second page of ChatGPT. In most categories, only two or three brands are being consistently recommended by AI today. The businesses that figured this out early are capturing a category of traffic their competitors do not even know exists.
            </p>
          </FadeUp>
        </div>
      </section>

      <div className="h-[1px] bg-[#e5e7eb] max-w-3xl mx-auto" />

      {/* ── FROM THE FIELD — LIGHT GRAY ── */}
      <section className="py-20" style={{ background: '#f3f4f6' }}>
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <FadeUp>
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] mb-3" style={{ color: '#EB2571' }}>From the Field</p>
            <div className="w-10 h-[2px] bg-[#EB2571] mb-6" />
            <h2 className="font-['Bebas_Neue'] font-normal text-[#080810] mb-5" style={{ fontSize: 'clamp(24px, 3.5vw, 38px)' }}>
              This Started with a Cold Email to a Client in Franklin, Tennessee.
            </h2>
            <p className="text-[16px] text-[#333] leading-relaxed mb-6">
              In May 2026, Ricardo Mazzi published a 14-minute field report on Mazzi Studios documenting what was actually happening in search, backed by data from Semrush, Ahrefs, Whitespark, and peer-reviewed CTR studies. It resonated. Clients started asking how to act on it.
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="bg-white border border-[#e5e7eb] rounded p-7 mb-6">
              <p className="italic text-[15px] text-[#333] leading-relaxed mb-4">
                A med spa client received an unsolicited cold email from someone with a job title that did not exist 18 months earlier: "GEO Specialist | AI Visibility for Local Businesses." The pitch was simple. She had searched "best med spa in Franklin" on ChatGPT and Perplexity. Two competitors came up by name. The client's practice did not appear at all.
              </p>
              <p className="italic text-[15px] text-[#333] leading-relaxed mb-4">
                The practice owner forwarded the email with two words: "Can we fix this?"
              </p>
              <p className="italic text-[15px] text-[#333] leading-relaxed mb-4">
                That email summarizes what business owners and marketers face right now better than any 70-page report could.
              </p>
              <p className="text-[12px]" style={{ color: '#9ca3af' }}>
                From: "Is SEO Dead in 2026? What AEO and GEO Mean for Your Business" by Ricardo Mazzi, Mazzi Studios, May 2026
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.15}>
            <p className="text-[16px] text-[#333] leading-relaxed mb-6">
              The playbook came out of that. The research into what actually determines AI citation, what the patterns were across different market sizes and categories, and what the sequential steps looked like for going from invisible to consistently cited.
            </p>
            <a href="/blog/answer-engine-optimization-aeo-geo-2026"
              className="inline-flex items-center gap-2 font-bold text-[13px] uppercase tracking-widest transition-opacity hover:opacity-75"
              style={{ color: '#EB2571' }}>
              Read the Full Field Report <ArrowRight size={14} />
            </a>
          </FadeUp>
        </div>
      </section>

      <div className="h-[1px] bg-[#e5e7eb] max-w-3xl mx-auto" />

      {/* ── WHAT YOU GET — WHITE ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <FadeUp>
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] mb-3" style={{ color: '#EB2571' }}>What Is in the Free Guide</p>
            <div className="w-10 h-[2px] bg-[#EB2571] mb-6" />
            <h2 className="font-['Bebas_Neue'] font-normal text-[#080810] mb-3" style={{ fontSize: 'clamp(24px, 3.5vw, 38px)' }}>
              The Framework. Not a Sales Pitch.
            </h2>
            <p className="text-[16px] text-[#333] leading-relaxed mb-8">
              This is a real explanation of how AI citation works, what the three-layer framework looks like, and five specific things you can audit right now to understand where you stand. The full system is in the paid playbook. This is the map that shows you why the system exists and where you likely fit.
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <ul className="mt-2">
              <CheckItem>How AI systems decide who to cite: relevance, recency, and entity authority explained without the jargon</CheckItem>
              <CheckItem>The three-layer framework (Trust, Scale, Signal) with enough context to understand the logic, not just the labels</CheckItem>
              <CheckItem>Why most businesses have NAP inconsistencies they do not know about, and why that is the single most common suppression signal</CheckItem>
              <CheckItem>What review velocity is and why it predicts map pack position more reliably than star rating</CheckItem>
              <CheckItem>Case studies from Duolingo, Flo, and Calm: three completely different mechanisms, all working in 2026, and what each one means for your strategy</CheckItem>
              <CheckItem>Five self-audits you can run today with no paid tools, in under 30 minutes, that reveal exactly where you stand</CheckItem>
            </ul>
          </FadeUp>
        </div>
      </section>

      {/* ── FORM SECTION ── */}
      <section id="download" className="py-20" style={{ background: '#f3f4f6' }}>
        <div className="container mx-auto px-4 sm:px-6">
          <FadeUp>
            <LeadForm />
          </FadeUp>
        </div>
      </section>

      <div className="h-[1px] bg-[#e5e7eb]" />

      {/* ── PAID PLAYBOOK TEASER — DARK ── */}
      <section id="playbook" className="py-24 bg-[#080810]">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <FadeUp className="mb-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] mb-3" style={{ color: '#EB2571' }}>The Full System</p>
            <div className="w-10 h-[2px] bg-[#EB2571] mb-6" />
            <h2 className="font-['Bebas_Neue'] font-normal text-[#F5F0EB] mb-4" style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}>
              The 90-Day GEO/AEO Playbook
            </h2>
            <p className="text-[16px] leading-relaxed mb-4 max-w-2xl" style={{ color: '#cfcfcf' }}>
              The free guide explains the framework. The playbook is the system. 90 days, three layers, sequential steps with specific prompts, real templates, and checkpoints that tell you whether it is working.
            </p>
            <p className="text-[16px] leading-relaxed max-w-2xl" style={{ color: '#cfcfcf' }}>
              Written for business owners who want to execute it themselves, and for marketers and agency professionals who want to deliver it for clients. No filler. Specific tools, specific outputs, and the exact language used at each stage.
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              <FeatureCard title="24-Prompt AI Library" desc="On-page audits, backlink gap analysis, competitor review sentiment, GBP attribute audits, and more" />
              <FeatureCard title="Citation Audit System" desc="Exact process for auditing your visibility across ChatGPT, Perplexity, Google AI Mode, and Claude" />
              <FeatureCard title="Review Response Templates" desc="3 variations per star level (5-star through 1–2 star), 40–80 words each, service and city keywords natural" />
              <FeatureCard title="Hub and Spoke Architecture" desc="Content structure built for AI scannability with a full FAQ template system for every service" />
              <FeatureCard title="GSC Page 2 Sprint Protocol" desc="Four-week process for pushing keywords at positions 11–20 onto page 1 and into AI citation range" />
              <FeatureCard title="Entity Optimization Checklist" desc="JSON-LD schema, Crunchbase, LinkedIn Company Page, Wikidata, and professional association setup" />
            </div>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              {/* TODO: Replace href with live Stripe checkout URL */}
              <a href="#"
                className="inline-block font-bold uppercase tracking-widest text-[13px] text-white px-10 py-4 transition-opacity hover:opacity-85"
                style={{ background: '#EB2571', borderRadius: 0 }}>
                Get the Full Playbook ($197)
              </a>
              <span className="text-[13px]" style={{ color: 'rgba(255,255,255,0.45)' }}>
                One-time purchase · Instant download · No subscription
              </span>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── ABOUT — WHITE ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <FadeUp>
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] mb-3" style={{ color: '#EB2571' }}>About</p>
            <div className="w-10 h-[2px] bg-[#EB2571] mb-6" />
            <h2 className="font-['Bebas_Neue'] font-normal text-[#080810] mb-5" style={{ fontSize: 'clamp(24px, 3.5vw, 36px)' }}>
              Ricardo Mazzi &amp; Mazzi Studios
            </h2>
            <p className="text-[16px] text-[#333] leading-relaxed mb-4">
              Ricardo Mazzi is a marketing leader and founder of Mazzi Studios, a digital strategy consultancy working with businesses and marketing teams on the intersection of AI-era search visibility and direct revenue impact. He has held leadership positions in healthcare tech and digital marketing for over two decades.
            </p>
            <p className="text-[16px] text-[#333] leading-relaxed mb-4">
              The 90-Day GEO/AEO Playbook grew directly from client work following Google's AI Overviews launch in 2024. The observation that most businesses were optimizing for a version of search that no longer existed was the starting point. Ricardo documented the findings in a field report published on Mazzi Studios in May 2026, and built the playbook from what the data and client results actually showed.
            </p>
            <p className="text-[16px] text-[#333] leading-relaxed mb-8">
              The goal was never to write about it. The goal was to have a system that works. The writing came after the system was proven.{' '}
              <a href="/blog/answer-engine-optimization-aeo-geo-2026" className="font-semibold" style={{ color: '#EB2571' }}>
                Read the original research here.
              </a>
            </p>
            <Link href="/about"
              className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-[12px] transition-opacity hover:opacity-75"
              style={{ color: '#EB2571' }}>
              More About Mazzi Studios <ArrowRight size={13} />
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="py-16 text-center" style={{ background: '#EB2571' }}>
        <div className="container mx-auto px-4">
          <FadeUp>
            <h2 className="font-['Bebas_Neue'] font-normal text-[#F5F0EB] mb-4 tracking-tight" style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}>
              READY TO GET CITED BY AI?
            </h2>
            <p className="text-[16px] text-white/90 mb-8 max-w-xl mx-auto">
              Start with the free guide. No sales sequence, no fluff.
            </p>
            <a href="#download"
              className="inline-block bg-[#F5F0EB] font-bold uppercase tracking-widest text-[12px] px-10 py-4 transition-opacity hover:opacity-90"
              style={{ color: '#EB2571', borderRadius: 0 }}>
              Download the Free Guide
            </a>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
