import { Link } from 'wouter';
import { Head } from '@/components/seo/Head';
import { FadeUp } from '@/components/animations/FadeUp';
import { CheckCircle, ArrowRight, BookOpen } from 'lucide-react';

export default function ThankYou() {
  return (
    <div className="w-full min-h-screen bg-[#080810] flex flex-col">
      <Head
        title="Check Your Inbox | Mazzi Studios"
        description="Your free AEO/GEO guide is on its way. Check your inbox for an email from Mazzi Studios."
        robots="noindex, nofollow"
      />

      <div className="flex-1 flex items-center justify-center px-4 py-32">
        <div className="max-w-xl w-full text-center">
          <FadeUp>
            <div className="flex justify-center mb-8">
              <div className="flex items-center justify-center rounded-full bg-green-500/15 border border-green-500/30"
                style={{ width: 72, height: 72 }}>
                <CheckCircle size={36} className="text-green-400" />
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.08}>
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] mb-4" style={{ color: '#EB2571' }}>
              You're in
            </p>
            <h1 className="font-['Bebas_Neue'] font-normal text-[#F5F0EB] mb-4 leading-tight"
              style={{ fontSize: 'clamp(42px, 7vw, 72px)' }}>
              CHECK YOUR INBOX.
            </h1>
          </FadeUp>

          <FadeUp delay={0.14}>
            <p className="text-[17px] leading-relaxed mb-3" style={{ color: '#cfcfcf' }}>
              An email from Mazzi Studios is on its way with your free guide attached.
            </p>
            <p className="text-[15px] mb-10" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Don't see it? Check your junk or spam folder. It may have landed there.
            </p>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="bg-[#0F0F1C] border border-[#EB2571]/15 p-7 mb-8 text-left">
              <div className="flex items-start gap-4">
                <BookOpen size={22} className="text-[#EB2571] mt-1 shrink-0" />
                <div>
                  <p className="font-bold text-[#F5F0EB] text-[15px] mb-1">Ready for the full system?</p>
                  <p className="text-[14px] leading-relaxed mb-4" style={{ color: '#cfcfcf' }}>
                    The 90-Day GEO/AEO Playbook is the step-by-step system: 24 AI prompts, citation audit templates, review response templates, and a GSC Page 2 Sprint. One-time purchase, instant download.
                  </p>
                  <Link href="/playbook#playbook"
                    className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-[12px] transition-opacity hover:opacity-75"
                    style={{ color: '#EB2571' }}>
                    See the Full Playbook ($197) <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.26}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/"
                className="font-bold uppercase tracking-widest text-[12px] px-8 py-4 transition-opacity hover:opacity-85 text-white"
                style={{ background: '#EB2571', borderRadius: 0 }}>
                Back to Mazzi Studios
              </Link>
              <Link href="/blog"
                className="font-bold uppercase tracking-widest text-[12px] px-8 py-4 transition-colors"
                style={{ border: '1px solid rgba(235,37,113,0.35)', color: '#EB2571', borderRadius: 0 }}>
                Read the Blog
              </Link>
            </div>
          </FadeUp>
        </div>
      </div>
    </div>
  );
}
