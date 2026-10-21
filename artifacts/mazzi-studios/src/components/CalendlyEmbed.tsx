import { useEffect, useRef, useState } from 'react';

const CALENDLY_URL = 'https://calendly.com/mazzistudios/30min';
const WIDGET_SCRIPT = 'https://assets.calendly.com/assets/external/widget.js';

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: { url: string; parentElement: HTMLElement }) => void;
    };
  }
}

export function CalendlyEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [unavailable, setUnavailable] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let active = true;
    const initialize = () => {
      if (!active || !window.Calendly) return;
      container.replaceChildren();
      window.Calendly.initInlineWidget({ url: CALENDLY_URL, parentElement: container });
    };
    const showFallback = () => {
      if (active) setUnavailable(true);
    };

    let script: HTMLScriptElement | null = null;
    if (window.Calendly) {
      initialize();
    } else {
      script = document.querySelector<HTMLScriptElement>(`script[src="${WIDGET_SCRIPT}"]`);
      if (!script) {
        script = document.createElement('script');
        script.src = WIDGET_SCRIPT;
        script.async = true;
        document.body.appendChild(script);
      }
      script.addEventListener('load', initialize);
      script.addEventListener('error', showFallback);
    }

    return () => {
      active = false;
      script?.removeEventListener('load', initialize);
      script?.removeEventListener('error', showFallback);
    };
  }, []);

  return (
    <div>
      {!unavailable && (
        <div
          ref={containerRef}
          role="region"
          aria-label="Book a call with Mazzi Studios"
          className="h-[780px] w-full md:h-[720px]"
        />
      )}
      {unavailable && (
        <p role="status" className="px-6 py-10 text-center text-[#cfcfcf] font-sans">
          The calendar could not load here. You can still book using the link below.
        </p>
      )}
      <div className="border-t border-white/10 px-6 py-5 text-center">
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#EB2571] font-bold uppercase tracking-widest text-[12px] hover:underline"
        >
          Open Calendly in a new tab
        </a>
      </div>
    </div>
  );
}