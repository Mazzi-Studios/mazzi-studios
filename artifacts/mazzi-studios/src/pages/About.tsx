import { Head } from '@/components/seo/Head';
import { FadeUp } from '@/components/animations/FadeUp';
import { Link } from 'wouter';
import { Activity, Bot, Target, TrendingUp, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <div className="w-full bg-[#080810]">
      <Head
        title="About Mazzi Studios | 25+ Years of Marketing Leadership"
        description="Meet the senior marketers behind Mazzi Studios and learn how 25+ years of healthcare, B2B, strategy, and technology experience drives client growth."
      />

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 bg-[#080810] text-[#F5F0EB] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" 
          style={{ background: 'radial-gradient(circle, rgba(235,37,113,0.08) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <FadeUp>
            <h1 className="text-[64px] md:text-[96px] font-['Bebas_Neue'] font-normal tracking-tight leading-[0.9] mb-6 text-[#F5F0EB]">
              WE'RE THE MARKETING LEADERS <br/>
              <span style={{ color: '#EB2571' }}>YOUR BUSINESS DESERVES.</span>
            </h1>
            <p className="text-[17px] text-[#cfcfcf] max-w-2xl mx-auto leading-relaxed font-sans">
              South Florida's AI-powered marketing agency. 25+ years of experience. Built for healthcare, B2B, and companies ready to scale.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-[#080810] border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <div className="flex flex-col mb-8">
                <span className="text-[11px] uppercase tracking-[0.12em] text-[#EB2571]/80 mb-2 font-sans">
                  OUR STORY
                </span>
                <div className="w-12 h-[1px] bg-[#EB2571]/40"></div>
              </div>
              <h2 className="text-[36px] md:text-[48px] font-bold text-[#F5F0EB] tracking-tight mb-6">Experience Meets Innovation</h2>
              <div className="text-[17px] text-[#cfcfcf] leading-relaxed flex flex-col gap-6">
                <p>
                  Mazzi Studios was founded with one belief: that great marketing strategy shouldn't be reserved for Fortune 500 companies. With over 25 years of experience in the trenches of marketing leadership, we've evolved from a traditional boutique consultancy into an AI-powered fractional leadership model. We saw that mid-market companies were forced to choose between hiring an expensive full-time CMO or managing a disconnected web of tactical agencies. We offer a better way.
                </p>
                <p>
                  Rooted in South Florida with a national reach, we specialize in healthcare and B2B technology: industries where compliance, complexity, and trust are paramount.
                </p>
              </div>
            </FadeUp>
            
            <FadeUp delay={0.2}>
              <div className="bg-[#0F0F1C] border border-[#EB2571]/15 p-8 flex flex-col relative h-full">
                <div className="mb-10 border-b border-white/5 pb-8 flex items-baseline gap-4">
                  <div className="text-[72px] font-['Bebas_Neue'] text-[#EB2571] leading-none">25+</div>
                  <div className="text-[13px] uppercase tracking-widest text-[#cfcfcf]">Years Experience</div>
                </div>
                
                <div className="grid grid-cols-2 gap-y-10 gap-x-6">
                  <div>
                    <div className="text-[32px] font-['Bebas_Neue'] text-[#F5F0EB] leading-none mb-2">500+</div>
                    <div className="text-[12px] text-[#cfcfcf] uppercase tracking-widest">Healthcare Campaigns</div>
                  </div>
                  <div>
                    <div className="text-[32px] font-['Bebas_Neue'] text-[#F5F0EB] leading-none mb-2">100+</div>
                    <div className="text-[12px] text-[#cfcfcf] uppercase tracking-widest">AI Workflows Built</div>
                  </div>
                  <div>
                    <div className="text-[32px] font-['Bebas_Neue'] text-[#F5F0EB] leading-none mb-2">$50M+</div>
                    <div className="text-[12px] text-[#cfcfcf] uppercase tracking-widest">Revenue Influenced</div>
                  </div>
                  <div>
                    <div className="text-[32px] font-['Bebas_Neue'] text-[#F5F0EB] leading-none mb-2">95%</div>
                    <div className="text-[12px] text-[#cfcfcf] uppercase tracking-widest">Client Retention</div>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-24 bg-[#0D0D1A] border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <FadeUp className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
            <span className="text-[11px] uppercase tracking-[0.12em] text-[#EB2571]/80 mb-3 font-sans">
              DIFFERENTIATORS
            </span>
            <div className="w-12 h-[1px] bg-[#EB2571]/40 mb-6"></div>
            <h2 className="text-[36px] md:text-[48px] font-bold text-[#F5F0EB] tracking-tight">What Sets Us Apart</h2>
          </FadeUp>
          
          <div className="grid md:grid-cols-3 gap-8">
            <FadeUp delay={0.1}>
              <div className="bg-[#0F0F1C] border border-[#EB2571]/15 border-t-2 border-t-[#2AC4EA] p-8 flex flex-col h-full hover:border-[#EB2571]/40 transition-colors">
                <Bot className="text-[#2AC4EA] mb-6" size={32} />
                <h4 className="text-[20px] font-semibold text-[#F5F0EB] mb-4">AI-Native Approach</h4>
                <p className="text-[16px] text-[#cfcfcf] leading-relaxed flex-1">
                  We don't bolt AI on as an afterthought. Every engagement includes an AI automation assessment and implementation where it drives actual ROI.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="bg-[#0F0F1C] border border-[#EB2571]/15 border-t-2 border-t-[#EB2571] p-8 flex flex-col h-full hover:border-[#EB2571]/40 transition-colors">
                <Activity className="text-[#EB2571] mb-6" size={32} />
                <h4 className="text-[20px] font-semibold text-[#F5F0EB] mb-4">Healthcare Expertise</h4>
                <p className="text-[16px] text-[#cfcfcf] leading-relaxed flex-1">
                  HIPAA-compliant campaigns, medical-legal review processes, and a deep understanding of patient and HCP audiences.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.3}>
              <div className="bg-[#0F0F1C] border border-[#EB2571]/15 border-t-2 border-t-[#2AC4EA] p-8 flex flex-col h-full hover:border-[#EB2571]/40 transition-colors">
                <ShieldCheck className="text-[#2AC4EA] mb-6" size={32} />
                <h4 className="text-[20px] font-semibold text-[#F5F0EB] mb-4">Strategic Ownership</h4>
                <p className="text-[16px] text-[#cfcfcf] leading-relaxed flex-1">
                  We sit on your side of the table. We manage agencies, align marketing with revenue ops, and own outcomes. Not just activities.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Expertise Grid */}
      <section className="py-24 bg-[#080810] border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <FadeUp className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
            <span className="text-[11px] uppercase tracking-[0.12em] text-[#EB2571]/80 mb-3 font-sans">
              FOCUS AREAS
            </span>
            <div className="w-12 h-[1px] bg-[#EB2571]/40 mb-6"></div>
            <h2 className="text-[36px] md:text-[48px] font-bold text-[#F5F0EB] tracking-tight">Expertise</h2>
          </FadeUp>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <FadeUp delay={0.1}>
              <div className="bg-[#0F0F1C] border border-[#EB2571]/15 p-8 flex flex-col h-full hover:border-[#EB2571]/40 transition-colors">
                <h4 className="font-semibold text-[#F5F0EB] text-[20px] mb-3">C-Suite Strategy</h4>
                <p className="text-[#cfcfcf] text-[16px] leading-relaxed">Executive-level thinking aligned with your business goals.</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="bg-[#0F0F1C] border border-[#EB2571]/15 p-8 flex flex-col h-full hover:border-[#EB2571]/40 transition-colors">
                <h4 className="font-semibold text-[#F5F0EB] text-[20px] mb-3">Healthcare Focus</h4>
                <p className="text-[#cfcfcf] text-[16px] leading-relaxed">HIPAA-compliant strategies for complex medical markets.</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.3}>
              <div className="bg-[#0F0F1C] border border-[#EB2571]/15 p-8 flex flex-col h-full hover:border-[#EB2571]/40 transition-colors">
                <h4 className="font-semibold text-[#F5F0EB] text-[20px] mb-3">AI-Native</h4>
                <p className="text-[#cfcfcf] text-[16px] leading-relaxed">Custom n8n workflows that automate routine operations.</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.4}>
              <div className="bg-[#0F0F1C] border border-[#EB2571]/15 p-8 flex flex-col h-full hover:border-[#EB2571]/40 transition-colors">
                <h4 className="font-semibold text-[#F5F0EB] text-[20px] mb-3">Measurable ROI</h4>
                <p className="text-[#cfcfcf] text-[16px] leading-relaxed">We track revenue influenced, not vanity metrics.</p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#0D0D1A] border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <FadeUp className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
            <span className="text-[11px] uppercase tracking-[0.12em] text-[#EB2571]/80 mb-3 font-sans">
              HOW WE WORK
            </span>
            <div className="w-12 h-[1px] bg-[#EB2571]/40 mb-6"></div>
            <h2 className="text-[36px] md:text-[48px] font-bold text-[#F5F0EB] tracking-tight">Values</h2>
          </FadeUp>
          
          <div className="flex flex-col gap-4 max-w-3xl mx-auto">
            <FadeUp delay={0.1}>
              <div className="bg-[#0F0F1C] border border-[#EB2571]/15 p-8 flex items-center gap-6">
                <CheckCircle2 className="text-[#EB2571] shrink-0" size={24} />
                <span className="text-[20px] font-semibold text-[#F5F0EB]">Radical Transparency</span>
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="bg-[#0F0F1C] border border-[#EB2571]/15 p-8 flex items-center gap-6">
                <CheckCircle2 className="text-[#2AC4EA] shrink-0" size={24} />
                <span className="text-[20px] font-semibold text-[#F5F0EB]">Strategic Ownership</span>
              </div>
            </FadeUp>
            <FadeUp delay={0.3}>
              <div className="bg-[#0F0F1C] border border-[#EB2571]/15 p-8 flex items-center gap-6">
                <CheckCircle2 className="text-[#EB2571] shrink-0" size={24} />
                <span className="text-[20px] font-semibold text-[#F5F0EB]">Results Over Activity</span>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#EB2571] text-center">
        <div className="container mx-auto px-4">
          <FadeUp>
            <h2 className="text-[56px] md:text-[72px] font-['Bebas_Neue'] text-[#F5F0EB] mb-8 leading-[1.1] tracking-tight">LET'S BUILD SOMETHING GREAT TOGETHER.</h2>
            <Link 
              href="/contact"
              className="inline-block bg-[#F5F0EB] text-[#EB2571] px-10 py-5 font-bold uppercase tracking-widest text-sm hover:opacity-90 transition-opacity"
            >
              Work With Us
            </Link>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}