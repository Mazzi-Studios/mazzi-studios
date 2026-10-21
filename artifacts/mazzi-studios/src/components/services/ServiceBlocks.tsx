import type { ReactNode } from 'react';
import { Link } from 'wouter';
import { ChevronDown } from 'lucide-react';

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="mb-4">
      <span className="text-[11px] uppercase tracking-[0.14em] font-bold text-[#EB2571]">{children}</span>
      <div className="w-10 h-[2px] bg-[#EB2571] mt-2" />
    </div>
  );
}

export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const header = document.querySelector('header');
  const offset = (header?.getBoundingClientRect().height ?? 72) + 16;
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
  history.replaceState(null, '', `#${id}`);
}

export function PrimaryButton({ href, children, testId }: { href: string; children: ReactNode; testId?: string }) {
  return (
    <Link href={href} data-testid={testId} className="inline-flex justify-center bg-[#EB2571] text-white px-8 py-4 font-bold uppercase tracking-widest text-[12px] hover:opacity-90 transition-opacity">
      {children}
    </Link>
  );
}

export interface Tier { name: string; price: string; details: string; popular: boolean }

export function TierCard({ tier, compact = false, index }: { tier: Tier; compact?: boolean; index: number }) {
  return (
    <div
      data-testid={`card-tier-${index}`}
      className="bg-white flex flex-col h-full relative"
      style={{
        padding: compact ? '24px' : '32px',
        border: tier.popular ? '2px solid #EB2571' : '1px solid #e5e5e5',
        boxShadow: tier.popular ? '0 4px 24px rgba(235,37,113,0.12)' : '0 2px 12px rgba(0,0,0,0.04)',
      }}
    >
      {tier.popular && (
        <span className="absolute top-4 right-4 px-3 py-1 bg-[#EB2571] text-white text-[10px] font-bold tracking-widest uppercase">Most Popular</span>
      )}
      <h3 className={`${compact ? 'text-[22px]' : 'text-[26px]'} font-['Bebas_Neue'] text-[#0A0A1A] mb-2 pr-24`}>{tier.name}</h3>
      <p className={`${compact ? 'text-[32px]' : 'text-[44px]'} font-['Bebas_Neue'] leading-none text-[#EB2571] mb-5`}>{tier.price}</p>
      <p className="text-[15px] text-gray-600 leading-relaxed mb-8 flex-1">{tier.details}</p>
      <Link
        href="/contact"
        data-testid={`button-tier-contact-${index}`}
        className="inline-flex justify-center w-full py-3 text-[11px] font-bold uppercase tracking-widest transition-opacity hover:opacity-85"
        style={tier.popular ? { background: '#EB2571', color: '#fff' } : { border: '1px solid rgba(235,37,113,0.4)', color: '#EB2571' }}
      >
        Book a Strategy Call
      </Link>
    </div>
  );
}

export function FaqList({ items }: { items: { question: string; answer: string }[] }) {
  return (
    <div className="divide-y divide-gray-200 border-y border-gray-200">
      {items.map((f, i) => (
        <details key={f.question} className="group" data-testid={`faq-item-${i}`}>
          <summary className="flex items-center justify-between gap-6 py-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#EB2571]">
            <h3 className="text-[18px] font-semibold text-[#0A0A1A]">{f.question}</h3>
            <ChevronDown size={20} className="text-[#EB2571] shrink-0 transition-transform group-open:rotate-180" aria-hidden="true" />
          </summary>
          <p className="pb-6 text-[16px] text-gray-600 leading-relaxed max-w-3xl">{f.answer}</p>
        </details>
      ))}
    </div>
  );
}

export function ClosingCta({ heading, line, button }: { heading: string; line?: string; button: string }) {
  return (
    <section className="py-24 bg-[#EB2571] text-center">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-[44px] md:text-[64px] font-['Bebas_Neue'] text-white mb-4 leading-tight">{heading}</h2>
        {line && <p className="text-[18px] text-white/90 mb-10 max-w-2xl mx-auto">{line}</p>}
        <Link href="/contact" data-testid="button-closing-cta" className={`inline-block bg-white text-[#EB2571] px-10 py-5 font-bold uppercase tracking-widest text-sm hover:opacity-90 transition-opacity ${line ? '' : 'mt-6'}`}>
          {button}
        </Link>
      </div>
    </section>
  );
}

export function Testimonial({ quote, author, role }: { quote: string; author: string; role: string }) {
  return (
    <section className="py-24 bg-[#080810]">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
        <figure>
          <blockquote className="text-[26px] md:text-[34px] leading-snug text-[#F5F0EB]">"{quote}"</blockquote>
          <figcaption className="mt-8 text-[13px] uppercase tracking-widest text-[#cfcfcf]">
            <span className="text-[#EB2571] font-bold">{author}</span>, {role}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
