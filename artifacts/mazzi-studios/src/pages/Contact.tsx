import { useState } from 'react';
import { Head } from '@/components/seo/Head';
import { FadeUp } from '@/components/animations/FadeUp';
import { Mail, MapPin, Linkedin, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

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
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            
            {/* Form Column */}
            <FadeUp>
              <div className="bg-[#0F0F1C] p-8 md:p-12 border border-[#EB2571]/15">
                
                {isSuccess ? (
                  <div className="text-center py-12 flex flex-col items-center justify-center">
                    <div className="h-16 w-16 border border-[#EB2571] text-[#EB2571] flex items-center justify-center mb-6">
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 className="text-[24px] font-bold text-[#F5F0EB] mb-4">Message Sent!</h3>
                    <p className="text-[#cfcfcf] mb-8 font-sans">Thanks for reaching out. We'll be in touch within 24 hours.</p>
                    <button 
                      onClick={() => setIsSuccess(false)} 
                      className="bg-transparent border border-[#EB2571]/35 text-[#EB2571] px-6 py-4 font-bold uppercase tracking-widest text-xs hover:bg-[#EB2571]/5 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <label htmlFor="name" className="text-[11px] font-bold text-[#F5F0EB] uppercase tracking-widest">Full Name *</label>
                        <input 
                          id="name" 
                          required 
                          placeholder="Jane Doe" 
                          className="w-full bg-[#080810] border border-[#EB2571]/20 text-[#F5F0EB] placeholder:text-[#cfcfcf] px-4 py-3 focus:outline-none focus:border-[#EB2571] font-sans text-sm" 
                        />
                      </div>
                      <div className="space-y-3">
                        <label htmlFor="email" className="text-[11px] font-bold text-[#F5F0EB] uppercase tracking-widest">Email Address *</label>
                        <input 
                          id="email" 
                          type="email" 
                          required 
                          placeholder="jane@company.com" 
                          className="w-full bg-[#080810] border border-[#EB2571]/20 text-[#F5F0EB] placeholder:text-[#cfcfcf] px-4 py-3 focus:outline-none focus:border-[#EB2571] font-sans text-sm" 
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <label htmlFor="company" className="text-[11px] font-bold text-[#F5F0EB] uppercase tracking-widest">Company</label>
                        <input 
                          id="company" 
                          placeholder="Acme Corp" 
                          className="w-full bg-[#080810] border border-[#EB2571]/20 text-[#F5F0EB] placeholder:text-[#cfcfcf] px-4 py-3 focus:outline-none focus:border-[#EB2571] font-sans text-sm" 
                        />
                      </div>
                      <div className="space-y-3">
                        <label htmlFor="phone" className="text-[11px] font-bold text-[#F5F0EB] uppercase tracking-widest">Phone (optional)</label>
                        <input 
                          id="phone" 
                          type="tel" 
                          placeholder="(555) 123-4567" 
                          className="w-full bg-[#080810] border border-[#EB2571]/20 text-[#F5F0EB] placeholder:text-[#cfcfcf] px-4 py-3 focus:outline-none focus:border-[#EB2571] font-sans text-sm" 
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label htmlFor="interest" className="text-[11px] font-bold text-[#F5F0EB] uppercase tracking-widest">Service Interest</label>
                      <select 
                        id="interest"
                        className="w-full bg-[#080810] border border-[#EB2571]/20 text-[#F5F0EB] px-4 py-3 focus:outline-none focus:border-[#EB2571] font-sans text-sm appearance-none"
                      >
                        <option value="cmo">Fractional CMO</option>
                        <option value="ai">AI Automation</option>
                        <option value="web">Website Development</option>
                        <option value="linkedin">LinkedIn Marketing</option>
                        <option value="ppc">PPC Management</option>
                        <option value="sprint">Strategy Sprint</option>
                        <option value="other">Other / Not Sure</option>
                      </select>
                    </div>

                    <div className="space-y-3">
                      <label htmlFor="message" className="text-[11px] font-bold text-[#F5F0EB] uppercase tracking-widest">Message *</label>
                      <textarea 
                        id="message" 
                        required 
                        placeholder="Tell us a bit about your current marketing challenges..." 
                        className="w-full min-h-[120px] bg-[#080810] border border-[#EB2571]/20 text-[#F5F0EB] placeholder:text-[#cfcfcf] px-4 py-3 focus:outline-none focus:border-[#EB2571] font-sans text-sm resize-y"
                      />
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting} 
                      className="w-full bg-[#EB2571] text-white px-6 py-4 font-bold uppercase tracking-widest text-xs hover:opacity-90 transition-opacity disabled:opacity-50 mt-4"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </FadeUp>

            {/* Booking & Info Column */}
            <div>
              <FadeUp delay={0.1} className="mb-10">
                <div className="bg-[#0F0F1C] border border-[#EB2571]/15 overflow-hidden flex flex-col items-center justify-center p-12 min-h-[300px]">
                  <p className="text-[16px] text-[#cfcfcf] font-sans mb-4">Loading calendar...</p>
                  <a href="https://calendly.com/mazzistudios" target="_blank" rel="noopener noreferrer" className="text-[#EB2571] font-bold uppercase tracking-widest text-[12px] hover:underline">
                    https://calendly.com/mazzistudios
                  </a>
                </div>
              </FadeUp>

              <FadeUp delay={0.2}>
                <div className="flex flex-col gap-0 border border-[#EB2571]/15 bg-[#0F0F1C]">
                  <div className="flex items-center gap-4 p-6 border-b border-[#EB2571]/15">
                    <Mail size={20} className="text-[#EB2571] shrink-0" />
                    <div>
                      <h4 className="text-[11px] font-bold text-[#cfcfcf] uppercase tracking-widest mb-1">Email</h4>
                      <a href="mailto:team@mazzistudios.com" className="text-[15px] font-medium text-[#F5F0EB] hover:text-[#EB2571]">team@mazzistudios.com</a>
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