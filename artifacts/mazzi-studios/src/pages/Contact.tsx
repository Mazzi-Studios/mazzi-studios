import { Head } from '@/components/seo/Head';
import { FadeUp } from '@/components/animations/FadeUp';
import { CalendlyEmbed } from '@/components/CalendlyEmbed';
import { ContactForm } from '@/components/ContactForm';
import { Mail, MapPin, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="w-full bg-[#080810]">
      <Head
        title="Contact Mazzi Studios | Book a Free Strategy Call"
        description="Book a free 30-minute strategy call with Mazzi Studios to discuss your growth goals, marketing challenges, and best next steps."
      />

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 bg-[#080810] text-[#F5F0EB] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" 
          style={{ background: 'radial-gradient(circle, rgba(235,37,113,0.08) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <FadeUp>
            <h1 className="text-[64px] md:text-[96px] font-['Bebas_Neue'] font-normal tracking-tight leading-[0.9] mb-6 text-[#F5F0EB]">
              LET'S START A <br/>
              <span style={{ color: '#EB2571' }}>CONVERSATION.</span>
            </h1>
            <p className="text-[17px] text-[#cfcfcf] max-w-2xl mx-auto leading-relaxed font-sans">
              Book a free 30-minute strategy call. No pitch, just value.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-[#0D0D1A] border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-5 gap-10 max-w-6xl mx-auto items-start">
            
            {/* Booking Column */}
            <FadeUp className="lg:col-span-3">
              <div className="bg-[#0F0F1C] border border-[#EB2571]/15">
                <div className="p-6 md:p-8 pb-2 md:pb-2">
                  <span className="text-[11px] uppercase tracking-[0.12em] text-[#EB2571] font-sans">BOOK YOUR CALL</span>
                  <h2 className="text-[36px] md:text-[48px] font-bold text-[#F5F0EB] tracking-tight mt-3 mb-3">Choose a Time</h2>
                  <p className="text-[#cfcfcf] font-sans leading-relaxed">
                    Select a time for a free 30-minute strategy conversation.
                  </p>
                </div>
                <CalendlyEmbed />
              </div>
            </FadeUp>

            {/* Email & Info Column */}
            <div className="lg:col-span-2">
              <FadeUp delay={0.1} className="mb-10">
                <div className="bg-[#0F0F1C] border border-[#EB2571]/15 p-8">
                  <Mail size={28} className="text-[#EB2571] mb-6" />
                  <h3 className="text-[26px] text-[#F5F0EB] mb-3">Prefer to Write?</h3>
                  <p className="text-[#cfcfcf] font-sans leading-relaxed mb-6">
                    Have a question or an introduction? Send Ricardo a message and we’ll get back to you.
                  </p>
                  <ContactForm />
                  <p className="mt-6 text-[#cfcfcf] font-sans text-sm">
                    Or email directly: <a href="mailto:ricardo@mazzistudios.com" className="text-[#EB2571] hover:underline">ricardo@mazzistudios.com</a>
                  </p>
                </div>
              </FadeUp>

              <FadeUp delay={0.2}>
                <div className="flex flex-col gap-0 border border-[#EB2571]/15 bg-[#0F0F1C]">
                  <div className="flex items-center gap-4 p-6 border-b border-[#EB2571]/15">
                    <Mail size={20} className="text-[#EB2571] shrink-0" />
                    <div>
                      <h4 className="text-[11px] font-bold text-[#cfcfcf] uppercase tracking-widest mb-1">Email</h4>
                      <a href="mailto:ricardo@mazzistudios.com" className="text-[15px] font-medium text-[#F5F0EB] hover:text-[#EB2571]">ricardo@mazzistudios.com</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-6 border-b border-[#EB2571]/15">
                    <MapPin size={20} className="text-[#2AC4EA] shrink-0" />
                    <div>
                      <h4 className="text-[11px] font-bold text-[#cfcfcf] uppercase tracking-widest mb-1">Location</h4>
                      <span className="text-[15px] font-medium text-[#F5F0EB]">South Florida (Remote)</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-6">
                    <Linkedin size={20} className="text-[#EB2571] shrink-0" />
                    <div>
                      <h4 className="text-[11px] font-bold text-[#cfcfcf] uppercase tracking-widest mb-1">LinkedIn</h4>
                      <a href="https://linkedin.com/company/mazzistudios" target="_blank" rel="noopener noreferrer" className="text-[15px] font-medium text-[#F5F0EB] hover:text-[#EB2571]">/company/mazzistudios</a>
                    </div>
                  </div>
                </div>
              </FadeUp>
            </div>

          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-24 bg-[#080810] border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <FadeUp className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
            <span className="text-[11px] uppercase tracking-[0.12em] text-[#EB2571]/80 mb-3 font-sans">
              WHAT TO EXPECT
            </span>
            <div className="w-12 h-[1px] bg-[#EB2571]/40 mb-6"></div>
            <h2 className="text-[36px] md:text-[48px] font-bold text-[#F5F0EB] tracking-tight">The Process</h2>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <FadeUp delay={0.1}>
              <div className="bg-[#0F0F1C] p-8 border border-[#EB2571]/15 h-full text-center flex flex-col items-center">
                <div className="h-12 w-12 border border-[#EB2571]/40 flex items-center justify-center text-xl font-['Bebas_Neue'] text-[#EB2571] mb-6">
                  1
                </div>
                <h4 className="text-[20px] font-semibold text-[#F5F0EB] mb-4">Book Your Call</h4>
                <p className="text-[15px] text-[#cfcfcf] leading-relaxed">Schedule a free 30-minute strategy session.</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="bg-[#0F0F1C] p-8 border border-[#EB2571]/15 h-full text-center flex flex-col items-center">
                <div className="h-12 w-12 border border-[#EB2571]/40 flex items-center justify-center text-xl font-['Bebas_Neue'] text-[#EB2571] mb-6">
                  2
                </div>
                <h4 className="text-[20px] font-semibold text-[#F5F0EB] mb-4">We Prepare</h4>
                <p className="text-[15px] text-[#cfcfcf] leading-relaxed">We review your business, goals, and current marketing before the call.</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.3}>
              <div className="bg-[#0F0F1C] p-8 border border-[#EB2571]/15 h-full text-center flex flex-col items-center">
                <div className="h-12 w-12 border border-[#EB2571]/40 flex items-center justify-center text-xl font-['Bebas_Neue'] text-[#EB2571] mb-6">
                  3
                </div>
                <h4 className="text-[20px] font-semibold text-[#F5F0EB] mb-4">You Get Value</h4>
                <p className="text-[15px] text-[#cfcfcf] leading-relaxed">Leave with at least 3 actionable insights, guaranteed. No sales pressure.</p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </div>
  );
}