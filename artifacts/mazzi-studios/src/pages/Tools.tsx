import { Head } from '@/components/seo/Head';
import { FadeUp, StaggerContainer, StaggerItem } from '@/components/animations/FadeUp';
import { ExternalLink, Link2, Calculator, MessageSquare, BookOpen } from 'lucide-react';
import { ToolsBg } from '@/components/ToolsBg';

// ── Tool data ─────────────────────────────────────────────────────────────────
// TODO: Replace placeholder URLs with live tool URLs once available
const tools = [
  {
    id: 'utm',
    icon: Link2,
    label: 'Free Tool',
    name: 'UTM Builder',
    description:
      'Generate clean, consistent UTM parameters for every campaign in seconds. Stop guessing what drove a conversion. Tag every link and see exactly where your traffic originates in GA4.',
    cta: 'Launch UTM Builder',
    href: '/utm-builder',
    accentColor: '#EB2571',
    tag: 'Analytics',
  },
  {
    id: 'budget',
    icon: Calculator,
    label: 'Free Tool',
    name: 'Marketing Budget Calculator',
    description:
      'Input your revenue target, channel mix, and industry benchmarks and get a data-backed budget recommendation. Built for healthcare and B2B marketing teams planning quarterly or annual spend.',
    cta: 'Open Budget Calculator',
    href: '/marketing-budget-calculator',
    accentColor: '#2AC4EA',
    tag: 'Planning',
  },
  {
    id: 'chasq',
    icon: MessageSquare,
    label: 'Free Tool',
    name: 'Chasq: LinkedIn Comment Engine',
    description:
      'Generate thoughtful, on-brand LinkedIn comments in seconds. Chasq analyzes the post you are commenting on and produces responses that add value, reflect your voice, and build your presence without sounding like AI.',
    cta: 'Try Chasq',
    href: '#', // TODO: Replace with live Chasq URL
    accentColor: '#0A66C2',
    tag: 'LinkedIn',
  },
  {
    id: 'playbook',
    icon: BookOpen,
    label: '$197',
    name: '90-Day GEO/AEO Playbook',
    description:
      'The step-by-step system for getting your business cited in ChatGPT, Perplexity, and Google AI Mode. 24 AI prompts, citation audit templates, review response templates, hub-and-spoke content architecture, and a four-week GSC Page 2 Sprint.',
    cta: 'Get the Playbook',
    href: '/playbook',
    accentColor: '#EB2571',
    tag: 'SEO / AEO',
    featured: true,
  },
];

export default function Tools() {
  return (
    <div className="w-full bg-[#080810]">
      <Head
        title="Free Marketing Tools: UTM Builder, Budget Calculator & More | Mazzi Studios"
        description="Free marketing tools from Mazzi Studios: UTM Builder, Marketing Budget Calculator, Chasq LinkedIn Comment Engine, and the 90-Day GEO/AEO Playbook."
        canonical="https://mazzistudios.com/tools"
      />
      {/* ── HERO ── */}
      <section className="relative min-h-[78vh] flex items-center bg-[#080810] text-[#F5F0EB] overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24">
        {/* SVG background — tools motifs */}
        <div className="absolute inset-0 pointer-events-none">
          <ToolsBg />
        </div>
        {/* Vignette */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 40%, rgba(8,8,16,0.65) 100%)'
        }} />
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl relative z-10">
          <FadeUp>
            <div className="flex flex-col mb-6">
              <span className="text-[11px] uppercase tracking-[0.15em] font-bold mb-2" style={{ color: 'rgba(235,37,113,0.8)' }}>
                Free &amp; Premium Resources
              </span>
              <div className="w-10 h-[2px]" style={{ background: 'rgba(235,37,113,0.6)' }} />
            </div>
            <h1 className="font-['Bebas_Neue'] font-normal text-[#F5F0EB] leading-[0.88] mb-6"
              style={{ fontSize: 'clamp(64px, 11vw, 120px)' }}>
              MARKETING<br />
              <span style={{ color: '#EB2571' }}>TOOLS.</span>
            </h1>
            <p className="text-[17px] leading-relaxed max-w-2xl" style={{ color: '#cfcfcf' }}>
              Free utilities and paid resources built for healthcare and B2B marketers. No account required for the free tools. Open them and go.
            </p>
          </FadeUp>
        </div>
      </section>
      {/* ── TOOL CARDS ── */}
      <section className="pb-24 bg-[#080810]">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <StaggerContainer staggerChildren={0.1}>
            <div className="grid gap-6">
              {tools.map((tool) => {
                const Icon = tool.icon;
                return (
                  <StaggerItem key={tool.id}>
                    <div
                      className="relative flex flex-col sm:flex-row gap-6 p-8 border transition-colors duration-200"
                      style={{
                        background: tool.featured ? 'rgba(235,37,113,0.05)' : '#0F0F1C',
                        borderColor: tool.featured ? 'rgba(235,37,113,0.35)' : 'rgba(235,37,113,0.1)',
                        borderTopWidth: 2,
                        borderTopColor: tool.accentColor,
                      }}
                    >
                      {tool.featured && (
                        <div className="absolute top-4 right-4">
                          <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1"
                            style={{ background: 'rgba(235,37,113,0.15)', color: '#EB2571', border: '1px solid rgba(235,37,113,0.25)' }}>
                            Featured
                          </span>
                        </div>
                      )}

                      <div className="shrink-0">
                        <div className="flex items-center justify-center rounded"
                          style={{ width: 52, height: 52, background: `${tool.accentColor}15`, border: `1px solid ${tool.accentColor}25` }}>
                          <Icon size={24} style={{ color: tool.accentColor }} />
                        </div>
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-sm"
                            style={{ background: `${tool.accentColor}15`, color: tool.accentColor }}>
                            {tool.tag}
                          </span>
                          <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.35)' }}>
                            {tool.label}
                          </span>
                        </div>
                        <h2 className="text-[22px] md:text-[26px] font-['Bebas_Neue'] font-normal text-[#F5F0EB] mb-3 leading-tight">
                          {tool.name}
                        </h2>
                        <p className="text-[15px] leading-relaxed mb-6" style={{ color: '#cfcfcf' }}>
                          {tool.description}
                        </p>
                        <a
                          href={tool.href}
                          target={tool.href.startsWith('http') ? '_blank' : undefined}
                          rel={tool.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-[12px] text-white px-6 py-3 transition-opacity hover:opacity-85"
                          style={{ background: tool.accentColor, borderRadius: 0 }}
                        >
                          {tool.cta}
                          {tool.href.startsWith('http') ? <ExternalLink size={13} /> : null}
                        </a>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </div>
          </StaggerContainer>
        </div>
      </section>
      {/* ── BOTTOM CTA ── */}
      <section className="py-16 text-center" style={{ background: '#EB2571' }}>
        <div className="container mx-auto px-4">
          <FadeUp>
            <h2 className="font-['Bebas_Neue'] font-normal text-[#F5F0EB] mb-4 tracking-tight"
              style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}>
              NEED A FULL MARKETING STRATEGY?
            </h2>
            <p className="text-[16px] text-white/90 mb-8 max-w-xl mx-auto">
              The tools get you started. A Fractional CMO gets you there.
            </p>
            <a href="/contact"
              className="inline-block bg-[#F5F0EB] font-bold uppercase tracking-widest text-[12px] px-10 py-4 transition-opacity hover:opacity-90"
              style={{ color: '#EB2571', borderRadius: 0 }}>
              Book a Strategy Call
            </a>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
