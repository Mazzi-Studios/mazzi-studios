import { Head } from '@/components/seo/Head';
import { FadeUp } from '@/components/animations/FadeUp';
import { AnimatedCounter } from '@/components/animations/AnimatedCounter';
import { Link } from 'wouter';
import { Clock, LineChart, Database, Mail, Target, CheckCircle2, Zap, Cog, ArrowRight, Bot, Users, FileText } from 'lucide-react';

export default function AIAutomation() {
  return (
    <div className="w-full bg-[#080810]">
      <Head
        title="AI Marketing Automation | Custom n8n Workflows | Mazzi Studios"
        description="Save time and scale marketing with custom AI and n8n workflows for lead generation, content, email triage, reporting, and analytics."
      />

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 bg-[#080810] text-[#F5F0EB] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" 
          style={{ background: 'radial-gradient(circle, rgba(235,37,113,0.08) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <FadeUp>
            <h1 className="text-[64px] md:text-[96px] font-normal tracking-tight leading-[0.9] mb-6 text-[#F5F0EB]">
              AI THAT ACTUALLY WORKS <br/>
              <span style={{ color: '#EB2571' }}>FOR YOUR MARKETING.</span>
            </h1>
            <p className="text-[17px] text-[#cfcfcf] mb-12 max-w-2xl mx-auto leading-relaxed">
              Save 200+ hours monthly with custom AI automation. n8n workflows for lead gen, content creation, email triage, and analytics.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/contact"
                className="w-full sm:w-auto bg-[#EB2571] text-white px-8 py-4 font-bold uppercase tracking-widest text-xs text-center hover:opacity-90 transition-opacity"
              >
                Let's Automate Your Marketing
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-[#0D0D1A] border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <FadeUp className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
            <span className="text-[11px] uppercase tracking-[0.12em] text-[#EB2571]/80 mb-3">
              THE PAIN
            </span>
            <div className="w-12 h-[1px] bg-[#EB2571]/40 mb-6"></div>
            <h2 className="text-[36px] md:text-[48px] font-bold text-[#F5F0EB] tracking-tight">The Cost of Manual Marketing</h2>
          </FadeUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FadeUp delay={0.1}>
              <div className="bg-[#0F0F1C] border border-[#EB2571]/15 p-8 flex flex-col h-full hover:border-[#EB2571]/40 transition-colors">
                <LineChart className="text-[#EB2571] mb-6" size={28} />
                <h3 className="text-[18px] font-semibold text-[#F5F0EB] mb-4 leading-snug">Manual reporting killing time</h3>
                <p className="text-[15px] text-[#cfcfcf] leading-relaxed flex-1">Hours wasted every week pulling data from 6 different platforms into a spreadsheet just to see if your campaigns are working.</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="bg-[#0F0F1C] border border-[#EB2571]/15 p-8 flex flex-col h-full hover:border-[#EB2571]/40 transition-colors">
                <Mail className="text-[#EB2571] mb-6" size={28} />
                <h3 className="text-[18px] font-semibold text-[#F5F0EB] mb-4 leading-snug">Email and inbox overload</h3>
                <p className="text-[15px] text-[#cfcfcf] leading-relaxed flex-1">Your inbox is a second job. Important leads get buried in noise, and follow-ups fall through the cracks.</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.3}>
              <div className="bg-[#0F0F1C] border border-[#EB2571]/15 p-8 flex flex-col h-full hover:border-[#EB2571]/40 transition-colors">
                <Database className="text-[#EB2571] mb-6" size={28} />
                <h3 className="text-[18px] font-semibold text-[#F5F0EB] mb-4 leading-snug">Content bottleneck</h3>
                <p className="text-[15px] text-[#cfcfcf] leading-relaxed flex-1">You know you need to publish consistently, but content creation takes too long and quality suffers when rushed.</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.4}>
              <div className="bg-[#0F0F1C] border border-[#EB2571]/15 p-8 flex flex-col h-full hover:border-[#EB2571]/40 transition-colors">
                <Clock className="text-[#EB2571] mb-6" size={28} />
                <h3 className="text-[18px] font-semibold text-[#F5F0EB] mb-4 leading-snug">Data entry nightmare</h3>
                <p className="text-[15px] text-[#cfcfcf] leading-relaxed flex-1">Your CRM is always out of date because nobody has the time or desire to manually update records.</p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* 4 AI Agents */}
      <section className="py-24 bg-[#080810] border-t border-white/5 relative">
        <div className="absolute inset-0 pointer-events-none" 
          style={{ background: 'radial-gradient(circle, rgba(235,37,113,0.08) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
          
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <FadeUp className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
            <span className="text-[11px] uppercase tracking-[0.12em] text-[#EB2571]/80 mb-3">
              THE SOLUTION
            </span>
            <div className="w-12 h-[1px] bg-[#EB2571]/40 mb-6"></div>
            <h2 className="text-[36px] md:text-[48px] font-bold text-[#F5F0EB] tracking-tight">Meet Your New Digital Team</h2>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <FadeUp delay={0.1}>
              <div className="bg-[#0F0F1C] border border-[#EB2571]/15 border-l-2 border-l-[#EB2571] p-8 h-full">
                <div className="flex items-start justify-between mb-6">
                  <h4 className="text-[24px] font-semibold text-[#F5F0EB]">Lead Generation Agent</h4>
                  <Target size={24} className="text-[#EB2571]" />
                </div>
                <p className="text-[16px] text-[#cfcfcf] leading-relaxed">
                  Auto-scrapes prospects, enriches data, creates personalized outreach sequences, and books calls directly on your calendar.
                </p>
              </div>
            </FadeUp>
            
            <FadeUp delay={0.2}>
              <div className="bg-[#0F0F1C] border border-[#EB2571]/15 border-l-2 border-l-[#2AC4EA] p-8 h-full">
                <div className="flex items-start justify-between mb-6">
                  <h4 className="text-[24px] font-semibold text-[#F5F0EB]">Content Creation Agent</h4>
                  <FileText size={24} className="text-[#2AC4EA]" />
                </div>
                <p className="text-[16px] text-[#cfcfcf] leading-relaxed">
                  Generates SEO-optimized blog posts and social content tailored to your brand voice, then schedules and publishes automatically.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div className="bg-[#0F0F1C] border border-[#EB2571]/15 border-l-2 border-l-[#EB2571] p-8 h-full">
                <div className="flex items-start justify-between mb-6">
                  <h4 className="text-[24px] font-semibold text-[#F5F0EB]">Email & Communications</h4>
                  <Mail size={24} className="text-[#EB2571]" />
                </div>
                <p className="text-[16px] text-[#cfcfcf] leading-relaxed">
                  Inbox triage, auto-responses, priority flagging, and keeps your inbox clean.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.4}>
              <div className="bg-[#0F0F1C] border border-[#EB2571]/15 border-l-2 border-l-[#2AC4EA] p-8 h-full">
                <div className="flex items-start justify-between mb-6">
                  <h4 className="text-[24px] font-semibold text-[#F5F0EB]">Analytics & Reporting</h4>
                  <LineChart size={24} className="text-[#2AC4EA]" />
                </div>
                <p className="text-[16px] text-[#cfcfcf] leading-relaxed">
                  Pulls data from all your platforms, analyzes performance, and delivers an executive summary every Monday.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Results Counters */}
      <section className="py-20 bg-[#0D0D1A] border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 divide-x divide-white/5">
            <div className="text-center px-4">
              <div className="text-[56px] font-['Bebas_Neue'] text-[#F5F0EB] mb-1 leading-none">
                <AnimatedCounter end={200} suffix="+" />
              </div>
              <p className="text-[12px] text-[#cfcfcf] uppercase tracking-widest mt-2">Hours Saved Monthly</p>
            </div>
            <div className="text-center px-4">
              <div className="text-[56px] font-['Bebas_Neue'] text-[#F5F0EB] mb-1 leading-none">
                <AnimatedCounter end={3} suffix="x" />
              </div>
              <p className="text-[12px] text-[#cfcfcf] uppercase tracking-widest mt-2">More Leads Generated</p>
            </div>
            <div className="text-center px-4">
              <div className="text-[56px] font-['Bebas_Neue'] text-[#F5F0EB] mb-1 leading-none">
                <AnimatedCounter end={10} suffix="x" />
              </div>
              <p className="text-[12px] text-[#cfcfcf] uppercase tracking-widest mt-2">Content Output</p>
            </div>
            <div className="text-center px-4">
              <div className="text-[56px] font-['Bebas_Neue'] text-[#F5F0EB] mb-1 leading-none">
                24/7
              </div>
              <p className="text-[12px] text-[#cfcfcf] uppercase tracking-widest mt-2">Always On</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-[#080810]">
        <div className="container mx-auto px-4 md:px-6">
          <FadeUp className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
            <span className="text-[11px] uppercase tracking-[0.12em] text-[#EB2571]/80 mb-3">
              OUR PROCESS
            </span>
            <div className="w-12 h-[1px] bg-[#EB2571]/40 mb-6"></div>
            <h2 className="text-[36px] md:text-[48px] font-bold text-[#F5F0EB] tracking-tight mb-4">How We Build Your System</h2>
          </FadeUp>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: "1", title: "Discovery", desc: "We map your current workflows and identify the highest-ROI automation opportunities." },
              { num: "2", title: "Design", desc: "Our team architects your custom n8n workflow system and AI agent logic." },
              { num: "3", title: "Build & Test", desc: "We build, test, and refine every workflow with real data before launch." },
              { num: "4", title: "Deploy & Train", desc: "Live deployment with team training and a 30-day hypercare period." }
            ].map((step, i) => (
              <FadeUp key={step.num} delay={i * 0.1}>
                <div className="bg-[#0F0F1C] border border-[#EB2571]/15 p-8 text-center h-full hover:border-[#EB2571]/40 transition-colors flex flex-col items-center">
                  <div className="h-16 w-16 bg-[#EB2571]/10 border border-[#EB2571]/30 flex items-center justify-center text-3xl font-['Bebas_Neue'] text-[#EB2571] mb-6">
                    {step.num}
                  </div>
                  <h4 className="text-[20px] font-semibold text-[#F5F0EB] mb-3">{step.title}</h4>
                  <p className="text-[15px] text-[#cfcfcf] leading-relaxed">{step.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-24 bg-[#0D0D1A] border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <FadeUp className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
            <span className="text-[11px] uppercase tracking-[0.12em] text-[#EB2571]/80 mb-3">
              TRANSPARENT PRICING
            </span>
            <div className="w-12 h-[1px] bg-[#EB2571]/40 mb-6"></div>
            <h2 className="text-[36px] md:text-[48px] font-bold text-[#F5F0EB] tracking-tight">Packages</h2>
          </FadeUp>

          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {/* Starter */}
            <FadeUp delay={0.1}>
              <div className="bg-[#0F0F1C] border border-[#EB2571]/15 p-8 flex flex-col h-full hover:border-[#EB2571]/40 transition-colors">
                <h3 className="text-[24px] font-semibold text-[#F5F0EB] mb-4">Starter Suite</h3>
                <p className="text-[13px] text-[#cfcfcf] uppercase tracking-widest mt-2 mb-8">2 weeks • 1-2 workflows</p>
                <ul className="space-y-4 mb-10 flex-1">
                  {["Discovery", "n8n build & test", "Tool integration", "30-min training", "Monthly monitoring"].map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-[#cfcfcf] text-[15px]">
                      <Zap className="text-[#2AC4EA] shrink-0 mt-0.5" size={18} /> <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="w-full bg-transparent border border-[#EB2571]/35 text-[#EB2571] px-6 py-4 font-bold uppercase tracking-widest text-xs text-center hover:bg-[#EB2571]/5 transition-colors">
                  Get a Quote
                </Link>
              </div>
            </FadeUp>

            {/* Growth */}
            <FadeUp delay={0.2}>
              <div className="bg-[#0F0F1C] border border-[#EB2571]/15 border-t-2 border-t-[#2AC4EA] p-8 flex flex-col h-full hover:border-[#EB2571]/40 transition-colors relative">
                <div className="absolute top-0 right-0 p-4">
                  <span className="px-3 py-1 bg-[#2AC4EA]/10 text-[#2AC4EA] text-[10px] font-bold tracking-widest uppercase border border-[#2AC4EA]/20">Featured</span>
                </div>
                <h3 className="text-[24px] font-semibold text-[#F5F0EB] mb-4">Growth Suite</h3>
                <p className="text-[13px] text-[#cfcfcf] uppercase tracking-widest mt-2 mb-8">4 weeks • 3-4 workflows</p>
                <ul className="space-y-4 mb-10 flex-1">
                  {["Everything in Starter", "Multi-agent system", "Advanced AI integration", "Custom dashboards", "60-min training", "Weekly check-ins"].map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-[#cfcfcf] text-[15px]">
                      <Zap className="text-[#2AC4EA] shrink-0 mt-0.5" size={18} /> <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="w-full bg-[#EB2571] text-white px-6 py-4 font-bold uppercase tracking-widest text-xs text-center hover:opacity-90 transition-opacity">
                  Get a Quote
                </Link>
              </div>
            </FadeUp>

            {/* Enterprise */}
            <FadeUp delay={0.3}>
              <div className="bg-[#0F0F1C] border border-[#EB2571]/15 p-8 flex flex-col h-full hover:border-[#EB2571]/40 transition-colors">
                <h3 className="text-[24px] font-semibold text-[#F5F0EB] mb-4">Enterprise Suite</h3>
                <p className="text-[13px] text-[#cfcfcf] uppercase tracking-widest mt-2 mb-8">6+ weeks • 5+ workflows</p>
                <ul className="space-y-4 mb-10 flex-1">
                  {["Everything in Growth", "Full ecosystem", "HIPAA-compliant workflows", "Custom fine-tuning", "Team training (5 users)", "Dedicated success manager"].map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-[#cfcfcf] text-[15px]">
                      <Zap className="text-[#2AC4EA] shrink-0 mt-0.5" size={18} /> <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="w-full bg-transparent border border-[#EB2571]/35 text-[#EB2571] px-6 py-4 font-bold uppercase tracking-widest text-xs text-center hover:bg-[#EB2571]/5 transition-colors">
                  Get a Quote
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#EB2571] text-center">
        <div className="container mx-auto px-4">
          <FadeUp>
            <h2 className="text-[56px] md:text-[72px] text-[#F5F0EB] mb-8 leading-[1.1] tracking-tight">STOP DOING ROBOT WORK</h2>
            <Link 
              href="/contact"
              className="inline-block bg-[#F5F0EB] text-[#EB2571] px-10 py-5 font-bold uppercase tracking-widest text-sm hover:opacity-90 transition-opacity"
            >
              Let's Automate Your Marketing
            </Link>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}