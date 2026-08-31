import { useState, useEffect, useCallback } from 'react';
import { Link } from 'wouter';
import { Head } from '@/components/seo/Head';
import { FadeUp } from '@/components/animations/FadeUp';
import {
  ArrowRight, Link2, Copy, Check, RotateCcw, Clock, ChevronDown, Info, ExternalLink,
} from 'lucide-react';

// ── Types ─────────────────────────────────────────────────────────────────────
interface UtmFields {
  baseUrl: string;
  source: string;
  medium: string;
  campaign: string;
  term: string;
  content: string;
}

interface HistoryItem {
  url: string;
  ts: number;
}

const EMPTY: UtmFields = { baseUrl: '', source: '', medium: '', campaign: '', term: '', content: '' };
const LS_KEY = 'mazzi_utm_history';

// ── Preset data ────────────────────────────────────────────────────────────────
const SOURCE_PRESETS = ['google', 'facebook', 'instagram', 'linkedin', 'twitter', 'email', 'newsletter', 'bing', 'youtube', 'tiktok', 'referral', 'direct'];
const MEDIUM_PRESETS = ['cpc', 'cpm', 'email', 'organic', 'social', 'display', 'video', 'affiliate', 'banner', 'ppc', 'paid_social', 'retargeting'];

const CAMPAIGN_PRESETS = [
  { label: 'Google Search',    fields: { source: 'google',    medium: 'cpc',        campaign: 'brand_search'     } },
  { label: 'Facebook Ads',     fields: { source: 'facebook',  medium: 'paid_social', campaign: 'fb_awareness'    } },
  { label: 'LinkedIn Ads',     fields: { source: 'linkedin',  medium: 'paid_social', campaign: 'linkedin_leads'  } },
  { label: 'Instagram Ads',    fields: { source: 'instagram', medium: 'paid_social', campaign: 'ig_story_ad'     } },
  { label: 'Email Newsletter', fields: { source: 'newsletter', medium: 'email',      campaign: 'monthly_digest'  } },
  { label: 'YouTube Pre-Roll', fields: { source: 'youtube',   medium: 'video',       campaign: 'yt_preroll'      } },
];

const FIELD_META: Record<keyof UtmFields, { label: string; required: boolean; placeholder: string; hint: string }> = {
  baseUrl:  { label: 'Website URL',    required: true,  placeholder: 'https://mazzistudios.com/services', hint: 'The full URL of the page you are sending traffic to.' },
  source:   { label: 'Campaign Source', required: true,  placeholder: 'google',              hint: 'Where the traffic originates: the publisher or platform. e.g. google, newsletter, linkedin' },
  medium:   { label: 'Campaign Medium', required: true,  placeholder: 'cpc',                 hint: 'The marketing channel. e.g. cpc, email, social, organic' },
  campaign: { label: 'Campaign Name',   required: true,  placeholder: 'spring_promo_2026',    hint: 'The specific campaign name or promotion. Use underscores instead of spaces.' },
  term:     { label: 'Campaign Term',   required: false, placeholder: 'fractional_cmo',       hint: 'Optional. The paid keyword. Primarily used for Google Ads search campaigns.' },
  content:  { label: 'Campaign Content', required: false, placeholder: 'hero_cta_button',    hint: 'Optional. Differentiates ads or links that point to the same URL. e.g. banner_a, sidebar_link' },
};

// ── Helpers ───────────────────────────────────────────────────────────────────
function buildUrl(f: UtmFields): string {
  if (!f.baseUrl || !f.source || !f.medium || !f.campaign) return '';
  try {
    const base = f.baseUrl.startsWith('http') ? f.baseUrl : `https://${f.baseUrl}`;
    const u = new URL(base);
    const clean = (v: string) => v.trim().toLowerCase().replace(/\s+/g, '_');
    u.searchParams.set('utm_source', clean(f.source));
    u.searchParams.set('utm_medium', clean(f.medium));
    u.searchParams.set('utm_campaign', clean(f.campaign));
    if (f.term.trim())    u.searchParams.set('utm_term', clean(f.term));
    if (f.content.trim()) u.searchParams.set('utm_content', clean(f.content));
    return u.toString();
  } catch {
    return '';
  }
}

function isValidUrl(s: string): boolean {
  try { new URL(s.startsWith('http') ? s : `https://${s}`); return true; } catch { return false; }
}

function loadHistory(): HistoryItem[] {
  try { return JSON.parse(localStorage.getItem(LS_KEY) ?? '[]'); } catch { return []; }
}
function saveHistory(items: HistoryItem[]) {
  try { localStorage.setItem(LS_KEY, JSON.stringify(items.slice(0, 10))); } catch { /* ignore */ }
}
function timeAgo(ts: number): string {
  const s = Math.floor((Date.now() - ts) / 1000);
  if (s < 60) return 'just now';
  if (s < 3600) return `${Math.floor(s / 60)}m ago`;
  if (s < 86400) return `${Math.floor(s / 3600)}h ago`;
  return `${Math.floor(s / 86400)}d ago`;
}

// ── Sub-components ─────────────────────────────────────────────────────────────

function Tooltip({ text }: { text: string }) {
  const [open, setOpen] = useState(false);
  return (
    <span className="relative inline-flex">
      <button
        type="button"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        className="ml-1 opacity-40 hover:opacity-100 transition-opacity"
      >
        <Info size={13} />
      </button>
      {open && (
        <span className="absolute left-6 bottom-0 z-50 w-64 text-[12px] leading-relaxed px-3 py-2 rounded shadow-xl"
          style={{ background: '#1a1a2e', color: '#cfcfcf', border: '1px solid rgba(255,255,255,0.1)' }}>
          {text}
        </span>
      )}
    </span>
  );
}

function PresetChips({ options, value, onSelect }: { options: string[]; value: string; onSelect: (v: string) => void }) {
  return (
    <div className="flex flex-wrap gap-1.5 mt-2">
      {options.map(o => (
        <button
          key={o}
          type="button"
          onClick={() => onSelect(o)}
          className="text-[11px] font-mono px-2 py-1 rounded transition-all"
          style={{
            background: value === o ? 'rgba(235,37,113,0.15)' : 'rgba(0,0,0,0.04)',
            color: value === o ? '#EB2571' : '#555',
            border: `1px solid ${value === o ? 'rgba(235,37,113,0.35)' : '#e5e7eb'}`,
          }}
        >
          {o}
        </button>
      ))}
    </div>
  );
}

function FieldRow({
  fieldKey, value, onChange,
}: {
  fieldKey: keyof UtmFields;
  value: string;
  onChange: (k: keyof UtmFields, v: string) => void;
}) {
  const meta = FIELD_META[fieldKey];
  const isUrl = fieldKey === 'baseUrl';
  const hasError = isUrl && value.length > 3 && !isValidUrl(value);
  const showPresets = fieldKey === 'source' || fieldKey === 'medium';
  const presets = fieldKey === 'source' ? SOURCE_PRESETS : MEDIUM_PRESETS;

  return (
    <div className="mb-5">
      <label className="flex items-center text-[12px] font-bold uppercase tracking-widest mb-1.5" style={{ color: '#374151' }}>
        {meta.label}{meta.required && <span className="text-[#EB2571] ml-0.5">*</span>}
        <Tooltip text={meta.hint} />
      </label>
      <input
        type={isUrl ? 'url' : 'text'}
        value={value}
        onChange={e => onChange(fieldKey, e.target.value)}
        placeholder={meta.placeholder}
        className="w-full h-11 px-4 text-[14px] border rounded outline-none transition-all font-mono"
        style={{
          borderColor: hasError ? '#EF4444' : value ? '#EB2571' : '#e5e7eb',
          color: '#080810',
          background: '#fff',
          boxShadow: value && !hasError ? '0 0 0 3px rgba(235,37,113,0.08)' : undefined,
        }}
      />
      {hasError && <p className="text-[11px] text-red-500 mt-1">Enter a valid URL (e.g. https://example.com)</p>}
      {showPresets && <PresetChips options={presets} value={value} onSelect={v => onChange(fieldKey, v)} />}
    </div>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────────
export default function UtmBuilder() {
  const [fields, setFields] = useState<UtmFields>(EMPTY);
  const [copied, setCopied] = useState(false);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [showHistory, setShowHistory] = useState(false);

  useEffect(() => { setHistory(loadHistory()); }, []);

  const generatedUrl = buildUrl(fields);
  const isComplete = !!generatedUrl;

  const handleChange = useCallback((k: keyof UtmFields, v: string) => {
    setFields(prev => ({ ...prev, [k]: v }));
  }, []);

  const handlePreset = (preset: typeof CAMPAIGN_PRESETS[0]) => {
    setFields(prev => ({ ...prev, ...preset.fields }));
  };

  const handleCopy = async () => {
    if (!generatedUrl) return;
    try {
      await navigator.clipboard.writeText(generatedUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      // Save to history
      const entry: HistoryItem = { url: generatedUrl, ts: Date.now() };
      const updated = [entry, ...history.filter(h => h.url !== generatedUrl)];
      setHistory(updated);
      saveHistory(updated);
    } catch { /* ignore */ }
  };

  const handleReset = () => { setFields(EMPTY); };

  const handleHistoryLoad = (item: HistoryItem) => {
    try {
      const u = new URL(item.url);
      setFields({
        baseUrl: `${u.origin}${u.pathname}`,
        source:   u.searchParams.get('utm_source')   ?? '',
        medium:   u.searchParams.get('utm_medium')   ?? '',
        campaign: u.searchParams.get('utm_campaign') ?? '',
        term:     u.searchParams.get('utm_term')     ?? '',
        content:  u.searchParams.get('utm_content')  ?? '',
      });
      setShowHistory(false);
    } catch { /* ignore */ }
  };

  // Break URL into highlighted segments for display
  const urlSegments = (() => {
    if (!generatedUrl) return null;
    try {
      const u = new URL(generatedUrl);
      const base = `${u.origin}${u.pathname}`;
      const params = Array.from(u.searchParams.entries()).map(([k, v]) => ({ k, v }));
      return { base, params };
    } catch { return null; }
  })();

  return (
    <div className="w-full bg-[#080810]">
      <Head
        title="Free UTM Builder: Campaign URL Generator | Mazzi Studios"
        description="Build perfect UTM tracking URLs in seconds. Free UTM Builder from Mazzi Studios with live preview, campaign presets, and copy-to-clipboard. Track every campaign in GA4."
        canonical="https://mazzistudios.com/utm-builder"
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'UTM Campaign URL Builder',
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Web',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
            author: { '@type': 'Organization', name: 'Mazzi Studios', url: 'https://mazzistudios.com' },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What are UTM parameters?',
                acceptedAnswer: { '@type': 'Answer', text: 'UTM parameters are tags added to the end of a URL that tell Google Analytics (GA4) where your traffic came from. The five parameters are source, medium, campaign, term, and content.' },
              },
              {
                '@type': 'Question',
                name: 'What is utm_source?',
                acceptedAnswer: { '@type': 'Answer', text: 'utm_source identifies where the traffic originated — the publisher or platform, such as google, newsletter, or linkedin.' },
              },
              {
                '@type': 'Question',
                name: 'What is utm_medium?',
                acceptedAnswer: { '@type': 'Answer', text: 'utm_medium identifies the marketing channel, such as cpc, email, social, or organic.' },
              },
            ],
          },
        ]}
      />

      {/* ── HERO ── */}
      <section className="pt-32 pb-12 bg-[#080810] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(235,37,113,0.06) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl relative z-10">
          <FadeUp>
            <nav className="flex items-center gap-2 mb-8 text-[11px] uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.35)' }}>
              <Link href="/tools" className="hover:text-[#EB2571] transition-colors">Tools</Link>
              <span>/</span>
              <span style={{ color: '#cfcfcf' }}>UTM Builder</span>
            </nav>
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest px-3 py-1"
                style={{ background: 'rgba(235,37,113,0.12)', color: '#EB2571', border: '1px solid rgba(235,37,113,0.2)' }}>
                <Link2 size={12} /> Free Tool
              </span>
              <span className="text-[11px] font-bold uppercase tracking-widest px-3 py-1"
                style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.4)' }}>
                Analytics
              </span>
            </div>
            <h1 className="font-['Bebas_Neue'] font-normal text-[#F5F0EB] leading-[0.92] mb-5"
              style={{ fontSize: 'clamp(44px, 8vw, 80px)' }}>
              UTM CAMPAIGN<br />
              <span style={{ color: '#EB2571' }}>URL BUILDER.</span>
            </h1>
            <p className="text-[17px] leading-relaxed max-w-2xl" style={{ color: '#cfcfcf' }}>
              Stop guessing where your traffic comes from. Build clean, GA4-ready UTM URLs in seconds, with live preview, campaign presets, and one-click copy.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── BUILDER ── */}
      <section className="pb-16 bg-[#080810]">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <FadeUp delay={0.08}>
            <div className="grid lg:grid-cols-[1fr_420px] gap-6 items-start">

              {/* ── LEFT: Form ── */}
              <div className="bg-white rounded-xl shadow-2xl overflow-hidden">

                {/* Campaign presets */}
                <div className="px-7 pt-7 pb-5 border-b border-[#f0f0f0]">
                  <p className="text-[11px] font-bold uppercase tracking-widest mb-3" style={{ color: '#9ca3af' }}>
                    Quick-Fill Presets
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {CAMPAIGN_PRESETS.map(p => (
                      <button
                        key={p.label}
                        type="button"
                        onClick={() => handlePreset(p)}
                        className="text-[12px] font-semibold px-3 py-1.5 rounded-full border transition-all hover:border-[#EB2571] hover:text-[#EB2571]"
                        style={{ borderColor: '#e5e7eb', color: '#555' }}
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Form fields */}
                <div className="px-7 py-6">
                  <p className="text-[11px] font-bold uppercase tracking-widest mb-5" style={{ color: '#9ca3af' }}>
                    Campaign Details &nbsp;·&nbsp; Fields marked <span className="text-[#EB2571]">*</span> are required
                  </p>

                  <FieldRow fieldKey="baseUrl"  value={fields.baseUrl}  onChange={handleChange} />

                  <div className="grid sm:grid-cols-2 gap-x-4">
                    <FieldRow fieldKey="source"   value={fields.source}   onChange={handleChange} />
                    <FieldRow fieldKey="medium"   value={fields.medium}   onChange={handleChange} />
                  </div>

                  <FieldRow fieldKey="campaign" value={fields.campaign} onChange={handleChange} />

                  <div className="grid sm:grid-cols-2 gap-x-4">
                    <FieldRow fieldKey="term"     value={fields.term}     onChange={handleChange} />
                    <FieldRow fieldKey="content"  value={fields.content}  onChange={handleChange} />
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <button type="button" onClick={handleReset}
                      className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-widest px-4 py-2 border transition-colors"
                      style={{ borderColor: '#e5e7eb', color: '#9ca3af', borderRadius: 0 }}
                      onMouseEnter={e => { e.currentTarget.style.color = '#EB2571'; e.currentTarget.style.borderColor = '#EB2571'; }}
                      onMouseLeave={e => { e.currentTarget.style.color = '#9ca3af'; e.currentTarget.style.borderColor = '#e5e7eb'; }}>
                      <RotateCcw size={12} /> Reset
                    </button>

                    {history.length > 0 && (
                      <button type="button" onClick={() => setShowHistory(v => !v)}
                        className="inline-flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-widest px-4 py-2 border transition-colors"
                        style={{ borderColor: '#e5e7eb', color: '#9ca3af', borderRadius: 0 }}
                        onMouseEnter={e => { e.currentTarget.style.color = '#EB2571'; e.currentTarget.style.borderColor = '#EB2571'; }}
                        onMouseLeave={e => { e.currentTarget.style.color = '#9ca3af'; e.currentTarget.style.borderColor = '#e5e7eb'; }}>
                        <Clock size={12} /> History ({history.length})
                        <ChevronDown size={12} className={`transition-transform ${showHistory ? 'rotate-180' : ''}`} />
                      </button>
                    )}
                  </div>

                  {/* History dropdown */}
                  {showHistory && history.length > 0 && (
                    <div className="mt-3 border border-[#e5e7eb] rounded overflow-hidden">
                      {history.map((item, i) => (
                        <button key={i} type="button" onClick={() => handleHistoryLoad(item)}
                          className="w-full text-left px-4 py-3 text-[12px] font-mono border-b last:border-0 hover:bg-[#fef2f6] transition-colors truncate"
                          style={{ borderColor: '#f0f0f0', color: '#555' }}>
                          <span className="text-[10px] font-sans font-bold uppercase tracking-widest mr-2" style={{ color: '#9ca3af' }}>
                            {timeAgo(item.ts)}
                          </span>
                          {item.url}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* ── RIGHT: Live Preview ── */}
              <div className="flex flex-col gap-4 lg:sticky lg:top-24">

                {/* Generated URL card */}
                <div className="rounded-xl overflow-hidden shadow-xl"
                  style={{ background: isComplete ? '#080810' : '#0F0F1C', border: '1px solid rgba(235,37,113,0.15)' }}>
                  <div className="px-6 pt-5 pb-3 border-b border-white/5 flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: isComplete ? '#EB2571' : 'rgba(255,255,255,0.25)' }}>
                      {isComplete ? '✓ URL Ready' : 'Complete required fields'}
                    </span>
                    {isComplete && (
                      <a href={generatedUrl} target="_blank" rel="noopener noreferrer"
                        className="text-[11px] font-bold uppercase tracking-widest transition-opacity hover:opacity-70 flex items-center gap-1"
                        style={{ color: 'rgba(255,255,255,0.35)' }}>
                        Test <ExternalLink size={11} />
                      </a>
                    )}
                  </div>

                  <div className="px-6 py-5">
                    {urlSegments ? (
                      <div className="font-mono text-[12px] break-all leading-relaxed">
                        <span className="text-[#F5F0EB]">{urlSegments.base}</span>
                        {urlSegments.params.map(({ k, v }, i) => (
                          <span key={k}>
                            <span style={{ color: 'rgba(255,255,255,0.3)' }}>{i === 0 ? '?' : '&'}</span>
                            <span style={{ color: '#2AC4EA' }}>{k}</span>
                            <span style={{ color: 'rgba(255,255,255,0.3)' }}>=</span>
                            <span style={{ color: '#EB2571' }}>{v}</span>
                          </span>
                        ))}
                      </div>
                    ) : (
                      <p className="text-[13px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.25)' }}>
                        Your generated URL will appear here as you fill in the fields.
                      </p>
                    )}
                  </div>

                  {isComplete && (
                    <div className="px-6 pb-6">
                      <button onClick={handleCopy}
                        className="w-full flex items-center justify-center gap-2 font-bold uppercase tracking-widest text-[12px] py-3.5 transition-all"
                        style={{
                          background: copied ? '#16a34a' : '#EB2571',
                          color: '#fff',
                          borderRadius: 0,
                        }}>
                        {copied ? <><Check size={14} /> Copied!</> : <><Copy size={14} /> Copy URL</>}
                      </button>
                    </div>
                  )}
                </div>

                {/* Parameter reference */}
                <div className="rounded-xl p-5" style={{ background: '#0F0F1C', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <p className="text-[11px] font-bold uppercase tracking-widest mb-4" style={{ color: 'rgba(255,255,255,0.3)' }}>
                    Parameter Reference
                  </p>
                  <div className="flex flex-col gap-3">
                    {[
                      { param: 'utm_source',   color: '#EB2571', ex: 'google, newsletter',    req: true  },
                      { param: 'utm_medium',   color: '#2AC4EA', ex: 'cpc, email, social',    req: true  },
                      { param: 'utm_campaign', color: '#F59E0B', ex: 'spring_promo, q2_leads', req: true  },
                      { param: 'utm_term',     color: '#10B981', ex: 'fractional_cmo',         req: false },
                      { param: 'utm_content',  color: '#8B5CF6', ex: 'hero_btn, sidebar_ad',  req: false },
                    ].map(({ param, color, ex, req }) => (
                      <div key={param} className="flex items-start gap-3">
                        <span className="shrink-0 mt-0.5 w-1.5 h-1.5 rounded-full" style={{ background: color, marginTop: 5 }} />
                        <div>
                          <span className="font-mono text-[12px]" style={{ color }}>{param}</span>
                          {!req && <span className="ml-1 text-[10px]" style={{ color: 'rgba(255,255,255,0.25)' }}>optional</span>}
                          <p className="text-[11px] mt-0.5" style={{ color: 'rgba(255,255,255,0.35)' }}>{ex}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── WHY UTM TRACKING ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <FadeUp>
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] mb-3" style={{ color: '#EB2571' }}>Why It Matters</p>
            <div className="w-10 h-[2px] bg-[#EB2571] mb-6" />
            <h2 className="font-['Bebas_Neue'] font-normal text-[#080810] mb-5"
              style={{ fontSize: 'clamp(24px, 3.5vw, 38px)' }}>
              Know Exactly What Is Driving Your Traffic
            </h2>
            <p className="text-[16px] text-[#333] leading-relaxed mb-6">
              Without UTM parameters, Google Analytics groups most of your traffic under "Direct" or "(not provided)", leaving you guessing which campaigns, platforms, or emails actually move the needle. UTM tags give every link a passport, so GA4 can tell you precisely which source brought a visitor, which medium they used, and which campaign they clicked.
            </p>
            <p className="text-[16px] text-[#333] leading-relaxed mb-10">
              If you are running paid ads, sending email campaigns, posting on LinkedIn, or sharing links anywhere outside your website, you should be tagging every URL. It takes ten seconds. The insight it unlocks is permanent.
            </p>
          </FadeUp>

          <FadeUp delay={0.08}>
            <h2 className="font-['Bebas_Neue'] font-normal text-[#080810] mb-8"
              style={{ fontSize: 'clamp(24px, 3.5vw, 38px)' }}>
              FAQs
            </h2>
            <div className="flex flex-col gap-6">
              {[
                {
                  q: 'What are UTM parameters?',
                  a: 'UTM parameters are tags you add to the end of any URL. They tell GA4 where your traffic came from (source), how it arrived (medium), and which campaign sent it. The five parameters are source, medium, campaign, term, and content. Source, medium, and campaign are required for GA4 to categorize the session correctly.',
                },
                {
                  q: 'Do spaces in UTM values cause problems?',
                  a: 'Yes, spaces get encoded as %20 in some tools, which makes reports messy and inconsistent. This builder automatically converts any spaces to underscores so your GA4 data stays clean and consistent. It also lowercases all values so "Google" and "google" are not tracked as two separate sources.',
                },
                {
                  q: 'Can I use UTM parameters on any URL?',
                  a: 'Yes, as long as the destination page has GA4 (or another analytics tool) installed. UTM parameters are simply query string additions and any web server will accept them. The data is captured client-side by the tracking script when the page loads.',
                },
                {
                  q: 'When should I use utm_term and utm_content?',
                  a: 'utm_term is primarily for paid search. It captures the keyword that triggered the ad. utm_content is for A/B testing ads or links; if two different ads point to the same URL, use utm_content to tell them apart (e.g. hero_image vs sidebar_text). Both are optional for non-paid campaigns.',
                },
              ].map(({ q, a }) => (
                <div key={q} className="border-l-4 border-[#EB2571] pl-6 py-1">
                  <h3 className="font-semibold text-[#080810] text-[17px] mb-2 leading-snug">{q}</h3>
                  <p className="text-[15px] text-[#444] leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── MORE TOOLS ── */}
      <section className="py-16 bg-[#0D0D1A] border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <FadeUp>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] mb-2" style={{ color: '#EB2571' }}>More Free Tools</p>
                <p className="text-[#cfcfcf] text-[15px]">See all free tools and resources from Mazzi Studios.</p>
              </div>
              <Link href="/tools"
                className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-[12px] text-white px-7 py-4 transition-opacity hover:opacity-85 shrink-0"
                style={{ background: '#EB2571', borderRadius: 0 }}>
                View All Tools <ArrowRight size={13} />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 text-center" style={{ background: '#EB2571' }}>
        <div className="container mx-auto px-4">
          <FadeUp>
            <h2 className="font-['Bebas_Neue'] font-normal text-[#F5F0EB] mb-4 tracking-tight"
              style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}>
              NEED SOMEONE TO RUN THE CAMPAIGNS TOO?
            </h2>
            <p className="text-[16px] text-white/90 mb-8 max-w-xl mx-auto">
              Tagging links is the easy part. Strategy, execution, and ROI is what we do.
            </p>
            <Link href="/contact"
              className="inline-block bg-[#F5F0EB] font-bold uppercase tracking-widest text-[12px] px-10 py-4 transition-opacity hover:opacity-90"
              style={{ color: '#EB2571', borderRadius: 0 }}>
              Book a Strategy Call
            </Link>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
