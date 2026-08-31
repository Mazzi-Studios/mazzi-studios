import { useState, useCallback } from 'react';
import { Link } from 'wouter';
import { Head } from '@/components/seo/Head';
import { FadeUp } from '@/components/animations/FadeUp';
import { ArrowRight, Calculator, Plus, Trash2, AlertCircle, CheckCircle2 } from 'lucide-react';

// ── Types ─────────────────────────────────────────────────────────────────────
interface Channel {
  id: string;
  name: string;
  pct: number;       // 0–100
  color: string;
  locked: boolean;   // if true, pct is fixed and others adjust around it
}

// ── Palette for channel colours ───────────────────────────────────────────────
const PALETTE = [
  '#EB2571', '#2AC4EA', '#F59E0B', '#10B981', '#8B5CF6',
  '#EF4444', '#06B6D4', '#84CC16', '#F97316', '#EC4899',
];

const DEFAULT_CHANNELS: Channel[] = [
  { id: '1', name: 'Social Media',       pct: 30, color: PALETTE[0], locked: false },
  { id: '2', name: 'Email Marketing',    pct: 20, color: PALETTE[1], locked: false },
  { id: '3', name: 'Content Creation',   pct: 20, color: PALETTE[2], locked: false },
  { id: '4', name: 'Paid Advertising',   pct: 15, color: PALETTE[3], locked: false },
  { id: '5', name: 'Events & Sponsorships', pct: 10, color: PALETTE[4], locked: false },
  { id: '6', name: 'Other',              pct:  5, color: PALETTE[5], locked: false },
];

let idCounter = 100;
function uid() { return String(++idCounter); }

// ── Helpers ───────────────────────────────────────────────────────────────────
function fmt(n: number): string {
  return n.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
}
function totalPct(channels: Channel[]) {
  return Math.round(channels.reduce((s, c) => s + c.pct, 0));
}

// ── Sub-components ────────────────────────────────────────────────────────────
function BudgetInput({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div className="flex items-center gap-0 max-w-sm">
      <span className="flex items-center justify-center h-12 w-12 text-[15px] font-bold shrink-0"
        style={{ background: '#EB2571', color: '#fff' }}>$</span>
      <input
        type="number"
        value={value}
        min={0}
        onChange={e => onChange(e.target.value)}
        placeholder="50000"
        className="h-12 flex-1 px-4 text-[16px] font-semibold outline-none border-y border-r"
        style={{ borderColor: '#e5e7eb', color: '#080810', background: '#fff' }}
      />
    </div>
  );
}

function AllocationBar({ channels }: { channels: Channel[] }) {
  const total = channels.reduce((s, c) => s + c.pct, 0);
  if (total === 0) return null;
  return (
    <div className="flex w-full h-4 rounded-full overflow-hidden mt-1">
      {channels.map(c => (
        <div
          key={c.id}
          title={`${c.name}: ${c.pct}%`}
          style={{ width: `${(c.pct / total) * 100}%`, background: c.color, transition: 'width 0.25s ease' }}
        />
      ))}
    </div>
  );
}

function ChannelRow({
  channel, budget, onPctChange, onNameChange, onDelete, isOnly,
}: {
  channel: Channel;
  budget: number;
  onPctChange: (id: string, pct: number) => void;
  onNameChange: (id: string, name: string) => void;
  onDelete: (id: string) => void;
  isOnly: boolean;
}) {
  const dollars = budget > 0 ? (channel.pct / 100) * budget : 0;

  return (
    <div className="grid items-center gap-3 py-4 border-b border-[#f0f0f0]"
      style={{ gridTemplateColumns: '1fr 120px 110px 36px' }}>

      {/* Name + color dot */}
      <div className="flex items-center gap-3 min-w-0">
        <span className="w-3 h-3 rounded-full shrink-0" style={{ background: channel.color }} />
        <input
          type="text"
          value={channel.name}
          onChange={e => onNameChange(channel.id, e.target.value)}
          className="text-[14px] font-medium text-[#080810] bg-transparent outline-none border-b border-transparent focus:border-[#EB2571] transition-colors w-full truncate"
          maxLength={40}
        />
      </div>

      {/* Percentage */}
      <div className="flex items-center gap-1">
        <input
          type="number"
          value={channel.pct}
          min={0}
          max={100}
          step={1}
          onChange={e => onPctChange(channel.id, Math.min(100, Math.max(0, Number(e.target.value))))}
          className="w-16 h-9 text-center text-[14px] font-semibold border rounded outline-none focus:border-[#EB2571] transition-colors"
          style={{ borderColor: '#e5e7eb', color: '#080810' }}
        />
        <span className="text-[13px]" style={{ color: '#9ca3af' }}>%</span>
      </div>

      {/* Dollar amount */}
      <div className="text-right">
        <span className="text-[14px] font-semibold" style={{ color: '#080810' }}>
          {budget > 0 ? `$${fmt(dollars)}` : '-'}
        </span>
      </div>

      {/* Delete */}
      <button
        onClick={() => onDelete(channel.id)}
        disabled={isOnly}
        className="flex items-center justify-center h-8 w-8 rounded transition-colors disabled:opacity-20"
        style={{ color: '#9ca3af' }}
        onMouseEnter={e => !isOnly && (e.currentTarget.style.color = '#EB2571')}
        onMouseLeave={e => (e.currentTarget.style.color = '#9ca3af')}
        title="Remove channel"
      >
        <Trash2 size={15} />
      </button>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function MarketingBudgetCalculator() {
  const [rawBudget, setRawBudget] = useState('50000');
  const [channels, setChannels] = useState<Channel[]>(DEFAULT_CHANNELS);

  const budget = parseFloat(rawBudget.replace(/,/g, '')) || 0;
  const total = totalPct(channels);
  const remaining = 100 - total;
  const isValid = total === 100 && budget > 0;
  const budgetError = budget <= 0 && rawBudget !== '';

  const handlePctChange = useCallback((id: string, pct: number) => {
    setChannels(prev => prev.map(c => c.id === id ? { ...c, pct } : c));
  }, []);

  const handleNameChange = useCallback((id: string, name: string) => {
    setChannels(prev => prev.map(c => c.id === id ? { ...c, name } : c));
  }, []);

  const handleDelete = useCallback((id: string) => {
    setChannels(prev => prev.length > 1 ? prev.filter(c => c.id !== id) : prev);
  }, []);

  const handleAddChannel = () => {
    const usedColors = new Set(channels.map(c => c.color));
    const color = PALETTE.find(p => !usedColors.has(p)) ?? PALETTE[channels.length % PALETTE.length];
    setChannels(prev => [...prev, { id: uid(), name: 'New Channel', pct: 0, color, locked: false }]);
  };

  const handleReset = () => {
    setChannels(DEFAULT_CHANNELS);
    setRawBudget('50000');
  };

  const handleDistribute = () => {
    // Evenly distribute 100% across all channels
    const base = Math.floor(100 / channels.length);
    const remainder = 100 - base * channels.length;
    setChannels(prev => prev.map((c, i) => ({ ...c, pct: base + (i === 0 ? remainder : 0) })));
  };

  return (
    <div className="w-full bg-[#080810]">
      <Head
        title="Marketing Budget Calculator: Free Tool | Mazzi Studios"
        description="Plan smarter with Mazzi Studios' free Marketing Budget Calculator. Allocate your budget across channels like social media, PPC, email, and content in seconds."
        canonical="https://mazzistudios.com/marketing-budget-calculator"
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'How does this tool help with marketing budget planning?',
                acceptedAnswer: { '@type': 'Answer', text: 'Enter your total budget, then adjust the percentage for each marketing channel. The calculator instantly shows how many dollars go to each channel and flags if your allocations don\'t add up to 100%.' },
              },
              {
                '@type': 'Question',
                name: 'What if I enter a negative budget or zero?',
                acceptedAnswer: { '@type': 'Answer', text: 'The tool will show an error and prompt you to enter a valid positive budget before the dollar breakdowns appear.' },
              },
              {
                '@type': 'Question',
                name: 'Can I customize the channel allocations?',
                acceptedAnswer: { '@type': 'Answer', text: 'Yes. You can rename any channel, adjust its percentage, add new channels, or remove ones you don\'t use. The visual allocation bar updates in real time.' },
              },
            ],
          },
          {
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'Marketing Budget Calculator',
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Web',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
            author: { '@type': 'Organization', name: 'Mazzi Studios', url: 'https://mazzistudios.com' },
          },
        ]}
      />

      {/* ── HERO ── */}
      <section className="pt-32 pb-12 bg-[#080810] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(235,37,113,0.06) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl relative z-10">
          <FadeUp>
            <nav className="flex items-center gap-2 mb-8 text-[11px] uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.35)' }}>
              <Link href="/tools" className="hover:text-[#EB2571] transition-colors">Tools</Link>
              <span>/</span>
              <span style={{ color: '#cfcfcf' }}>Marketing Budget Calculator</span>
            </nav>

            <div className="flex items-center gap-3 mb-5">
              <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest px-3 py-1"
                style={{ background: 'rgba(235,37,113,0.12)', color: '#EB2571', border: '1px solid rgba(235,37,113,0.2)' }}>
                <Calculator size={12} /> Free Tool
              </span>
              <span className="text-[11px] font-bold uppercase tracking-widest px-3 py-1"
                style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.4)' }}>
                Planning
              </span>
            </div>

            <h1 className="font-['Bebas_Neue'] font-normal text-[#F5F0EB] leading-[0.92] mb-5"
              style={{ fontSize: 'clamp(44px, 8vw, 80px)' }}>
              MARKETING BUDGET<br />
              <span style={{ color: '#EB2571' }}>CALCULATOR.</span>
            </h1>
            <p className="text-[17px] leading-relaxed max-w-2xl" style={{ color: '#cfcfcf' }}>
              Enter your total budget, adjust channel allocations, and instantly see how every dollar splits across your marketing mix. Add or remove channels to match your strategy.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── CALCULATOR ── */}
      <section className="pb-16 bg-[#080810]">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <FadeUp delay={0.08}>
            <div className="bg-white rounded-xl overflow-hidden shadow-2xl">

              {/* Top bar */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-8 py-6 border-b border-[#f0f0f0]">
                <div>
                  <p className="text-[12px] font-bold uppercase tracking-widest mb-2" style={{ color: '#EB2571' }}>Total Marketing Budget</p>
                  <BudgetInput value={rawBudget} onChange={setRawBudget} />
                  {budgetError && (
                    <p className="flex items-center gap-1 text-[12px] mt-2 text-red-500">
                      <AlertCircle size={13} /> Please enter a valid positive budget.
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  <button onClick={handleDistribute}
                    className="text-[11px] font-bold uppercase tracking-widest px-4 py-2 border transition-colors"
                    style={{ borderColor: '#e5e7eb', color: '#555' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = '#EB2571'; e.currentTarget.style.color = '#EB2571'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.color = '#555'; }}>
                    Distribute Evenly
                  </button>
                  <button onClick={handleReset}
                    className="text-[11px] font-bold uppercase tracking-widest px-4 py-2 border transition-colors"
                    style={{ borderColor: '#e5e7eb', color: '#555' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = '#EB2571'; e.currentTarget.style.color = '#EB2571'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.color = '#555'; }}>
                    Reset
                  </button>
                </div>
              </div>

              {/* Allocation bar */}
              <div className="px-8 pt-5 pb-3">
                <AllocationBar channels={channels} />
                <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3">
                  {channels.map(c => (
                    <span key={c.id} className="flex items-center gap-1.5 text-[11px]" style={{ color: '#555' }}>
                      <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: c.color }} />
                      {c.name || 'Unnamed'} {c.pct}%
                    </span>
                  ))}
                </div>
              </div>

              {/* Validation badge */}
              <div className="px-8 pb-2 pt-1">
                {isValid ? (
                  <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-green-600">
                    <CheckCircle2 size={14} /> Allocations are balanced. Ready to plan.
                  </span>
                ) : total > 100 ? (
                  <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-red-500">
                    <AlertCircle size={14} /> Over by {total - 100}%. Reduce some channels.
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold" style={{ color: '#F59E0B' }}>
                    <AlertCircle size={14} /> {remaining}% unallocated. Total must reach 100%.
                  </span>
                )}
              </div>

              {/* Table header */}
              <div className="grid px-8 pt-3 pb-1 text-[11px] font-bold uppercase tracking-widest"
                style={{ gridTemplateColumns: '1fr 120px 110px 36px', color: '#9ca3af' }}>
                <span>Channel</span>
                <span>Allocation</span>
                <span className="text-right">Amount</span>
                <span />
              </div>

              {/* Rows */}
              <div className="px-8">
                {channels.map(ch => (
                  <ChannelRow
                    key={ch.id}
                    channel={ch}
                    budget={budget}
                    onPctChange={handlePctChange}
                    onNameChange={handleNameChange}
                    onDelete={handleDelete}
                    isOnly={channels.length === 1}
                  />
                ))}
              </div>

              {/* Add channel + totals */}
              <div className="px-8 pt-4 pb-6">
                <button onClick={handleAddChannel}
                  className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-widest transition-colors mb-6"
                  style={{ color: '#EB2571' }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '0.75')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>
                  <Plus size={14} /> Add Channel
                </button>

                {/* Summary row */}
                <div className="border-t-2 border-[#080810] pt-4 grid"
                  style={{ gridTemplateColumns: '1fr 120px 110px 36px' }}>
                  <span className="text-[14px] font-bold" style={{ color: '#080810' }}>Total</span>
                  <span className="text-[14px] font-bold" style={{ color: total === 100 ? '#080810' : '#EB2571' }}>
                    {total}%
                  </span>
                  <span className="text-right text-[14px] font-bold" style={{ color: '#080810' }}>
                    {budget > 0 ? `$${fmt(budget)}` : '-'}
                  </span>
                  <span />
                </div>
              </div>

              {/* Breakdown summary cards */}
              {isValid && (
                <div className="border-t border-[#f0f0f0] px-8 py-6">
                  <p className="text-[11px] font-bold uppercase tracking-widest mb-4" style={{ color: '#9ca3af' }}>Budget Breakdown</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                    {channels.map(c => (
                      <div key={c.id} className="rounded-lg p-4" style={{ background: '#f9f9f9', borderLeft: `3px solid ${c.color}` }}>
                        <span className="block text-[11px] uppercase tracking-wide mb-1 truncate" style={{ color: '#9ca3af' }}>{c.name}</span>
                        <span className="block font-['Bebas_Neue'] text-[1.5rem] leading-none" style={{ color: '#080810' }}>
                          ${fmt((c.pct / 100) * budget)}
                        </span>
                        <span className="text-[11px]" style={{ color: c.color }}>{c.pct}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── EDITORIAL CONTENT — WHITE ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <FadeUp>
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] mb-3" style={{ color: '#EB2571' }}>Why It Matters</p>
            <div className="w-10 h-[2px] bg-[#EB2571] mb-6" />
            <h2 className="font-['Bebas_Neue'] font-normal text-[#080810] mb-5"
              style={{ fontSize: 'clamp(24px, 3.5vw, 38px)' }}>
              Plan Smarter with a Marketing Budget Calculator
            </h2>
            <p className="text-[16px] text-[#333] leading-relaxed mb-10">
              For small and medium-sized businesses, every dollar counts, especially when it comes to marketing. Crafting a solid plan for your advertising spend can feel overwhelming, but it doesn't have to be. With the right tools, you can break down your funds across channels like social media, paid ads, and content creation without second-guessing yourself. A well-designed budget allocation tool helps you visualize where your money goes, ensuring you're investing in the areas that drive results.
            </p>
          </FadeUp>

          <FadeUp delay={0.08}>
            <h2 className="font-['Bebas_Neue'] font-normal text-[#080810] mb-5"
              style={{ fontSize: 'clamp(24px, 3.5vw, 38px)' }}>
              Why Budget Planning Matters
            </h2>
            <p className="text-[16px] text-[#333] leading-relaxed mb-10">
              Marketing isn't just about spending; it's about spending wisely. Without a clear strategy, you might overspend on underperforming channels or miss opportunities in others. That's where a digital planner for your marketing funds comes in handy. It lets you experiment with different allocations, like bumping up email campaigns or trimming event costs, before committing. Plus, seeing the numbers in both percentages and dollars offers clarity that spreadsheets often lack. If you're ready to streamline your approach and boost ROI, start with a tool that simplifies the process. Your business deserves that kind of precision.
            </p>
          </FadeUp>

          <FadeUp delay={0.12}>
            <h2 className="font-['Bebas_Neue'] font-normal text-[#080810] mb-8"
              style={{ fontSize: 'clamp(24px, 3.5vw, 38px)' }}>
              FAQs
            </h2>
            <div className="flex flex-col gap-6">
              {[
                {
                  q: 'How does this tool help with marketing budget planning?',
                  a: "Enter your total budget, then adjust the percentage for each marketing channel. The calculator instantly shows how many dollars go to each channel and flags if your allocations don't add up to 100%. Think of it as a quick way to see where your money's going before you spend a dime.",
                },
                {
                  q: 'What if I enter a negative budget or zero?',
                  a: "The tool will show a validation error and prompt you to enter a valid positive budget. Dollar amounts won't appear until a valid budget is entered, so you're always working with realistic numbers.",
                },
                {
                  q: 'Can I customize the channel allocations?',
                  a: "Absolutely. You can rename any channel, adjust its percentage, add new channels, or remove ones you don't use. Hit \"Distribute Evenly\" to split 100% equally across all channels as a starting point.",
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
              NEED A FULL MARKETING STRATEGY?
            </h2>
            <p className="text-[16px] text-white/90 mb-8 max-w-xl mx-auto">
              A budget calculator gets you started. A Fractional CMO gets you there.
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
