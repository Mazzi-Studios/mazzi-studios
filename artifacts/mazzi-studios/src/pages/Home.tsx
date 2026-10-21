import { Head } from '@/components/seo/Head';
import { FadeUp, StaggerContainer, StaggerItem } from '@/components/animations/FadeUp';
import { AnimatedCounter } from '@/components/animations/AnimatedCounter';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Bot, Target, Zap, Activity, Users, BarChart3, LineChart, Mail, FileText, Clock } from 'lucide-react';
import { Link } from 'wouter';
import { posts } from '@/data/posts';
import { HeroBg } from '@/components/HeroBg';

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const testimonials = [
  {
    quote:
      'It is a pleasure working with Mazzi Studios and they have become an extension of our marketing team. They have been very responsive to our needs and their services have been great! I would recommend them to anyone looking to build a website for their business!',
    author: 'Craig Neita',
    role: 'CEO, Vascular Simulations',
    initials: 'CN',
  },
  {
    quote:
      'I was referred to Ricardo by a friend to assist in the development of a website for my new business. He got the concept right out of the gate! He used vocabulary that I could understand and framed out the site in no time. The site is up and is amazing! He exceeded all my expectations even researching the most cost effective tool for email and social media campaigns.',
    author: 'Anne Rojas',
    role: 'President, Infinity Medical Education',
    initials: 'AR',
  },
  {
    quote:
      'Working with Mazzi Studios was a great experience. Ricardo and Marilyn captured the essence of Tone-y-Bands and their work had an immediate impact on our inbound marketing and social media strategy, lead acquisition, and e-commerce sales. Provided great design and tech support. They are passionate about their customer service level, highly creative, and produce stunning photography. A dynamic team with a positive can do attitude that you will love to work with them. Highly recommended!',
    author: 'Janice Haley',
    role: 'CEO, ToneyBands.com',
    initials: 'JH',
  },
];

export default function Home() {

  return (
    <div className="w-full bg-[#080810]">
      <Head
        title="Fractional CMO & AI Marketing | Healthcare & B2B | Mazzi Studios"
        description="Mazzi Studios is Miami's AI-powered Fractional CMO agency. We deliver growth marketing, AI automation, and digital strategy for healthcare and B2B companies."
        canonical="https://www.mazzistudios.com/"
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': ['Organization', 'ProfessionalService'],
            name: 'Mazzi Studios',
            url: 'https://mazzistudios.com',
            logo: 'https://mazzistudios.com/brand-assets/mazzi-og.jpg',
            description: 'AI-powered Fractional CMO services, AI automation, and growth marketing for healthcare and B2B companies.',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Miami',
              addressRegion: 'FL',
              addressCountry: 'US',
            },
            areaServed: ['US'],
            knowsAbout: ['Fractional CMO', 'AI Marketing Automation', 'Healthcare Marketing', 'B2B Growth Marketing', 'SEO', 'Demand Generation'],
            sameAs: ['https://www.linkedin.com/company/mazzistudios'],
          },
          {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Mazzi Studios',
            url: 'https://mazzistudios.com',
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://mazzistudios.com/blog?q={search_term_string}',
              'query-input': 'required name=search_term_string',
            },
          },
        ]}
      />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] sm:min-h-[85vh] flex items-center bg-[#080810] text-[#F5F0EB] overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24">
        {/* SVG background — strategy/chess/tech/human */}
        <div className="absolute inset-0 pointer-events-none">
          <HeroBg />
        </div>

        {/* Subtle vignette overlay */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 40%, rgba(8,8,16,0.7) 100%)'
        }} />

        <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full">
          <StaggerContainer delayChildren={0.1} staggerChildren={0.12} className="max-w-4xl mx-auto text-center">

            {/* Label */}
            <StaggerItem>
              <div className="flex flex-col items-center mb-6 sm:mb-8">
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.15em] font-sans mb-2" style={{ color: 'rgba(235,37,113,0.8)' }}>
                  AI-Powered Fractional CMO · South Florida
                </span>
                <div className="w-10 h-[1px]" style={{ background: 'rgba(235,37,113,0.4)' }} />
              </div>
            </StaggerItem>

            {/* H1 */}
            <StaggerItem>
              <h1 className="font-['Bebas_Neue'] font-normal tracking-tight leading-[0.88] mb-6 sm:mb-8"
                style={{ fontSize: 'clamp(64px, 12vw, 128px)', color: '#F5F0EB' }}>
                AI-POWERED<br />
                MARKETING<br />
                <span style={{ color: '#EB2571' }}>LEADERSHIP.</span>
              </h1>
            </StaggerItem>

            {/* Subhead */}
            <StaggerItem>
              <p className="font-sans leading-relaxed mb-10 sm:mb-12 mx-auto max-w-2xl"
                style={{ fontSize: 'clamp(15px, 2vw, 18px)', color: '#cfcfcf' }}>
                Fractional CMO services, AI automation, and growth marketing for healthcare and B2B companies ready to scale.
              </p>
            </StaggerItem>

            {/* CTAs */}
            <StaggerItem>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto font-bold uppercase tracking-widest text-center transition-opacity hover:opacity-85 font-sans"
                  style={{ background: '#EB2571', color: '#fff', padding: '14px 32px', fontSize: 11, borderRadius: 0 }}
                >
                  Book Your Strategy Call
                </Link>
                <Link
                  href="/services"
                  className="w-full sm:w-auto font-bold uppercase tracking-widest text-center transition-colors hover:bg-[#EB2571]/5 font-sans"
                  style={{ border: '1px solid rgba(235,37,113,0.35)', color: '#EB2571', padding: '14px 32px', fontSize: 11, borderRadius: 0 }}
                >
                  See Our Services
                </Link>
              </div>
            </StaggerItem>

            {/* Trust strip */}
            <StaggerItem>
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-10 sm:mt-14">
                {['25+ Years Experience', 'Healthcare & B2B Specialists', '$50M+ Revenue Influenced'].map((item) => (
                  <span key={item} className="flex items-center gap-2 font-sans" style={{ fontSize: 11, color: '#cfcfcf', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    <span style={{ width: 4, height: 4, background: '#EB2571', display: 'inline-block', flexShrink: 0 }} />
                    {item}
                  </span>
                ))}
              </div>
            </StaggerItem>

          </StaggerContainer>
        </div>
      </section>

      {/* Stat Strip */}
      <section className="py-12 bg-[#0D0D1A] border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 divide-x divide-white/5">
            <div className="text-center px-4 flex flex-col items-center justify-center">
              <div className="text-5xl md:text-[56px] font-['Bebas_Neue'] text-[#F5F0EB] mb-1 leading-none">
                <AnimatedCounter end={127} suffix="%" />
              </div>
              <p className="text-[12px] text-[#cfcfcf] uppercase tracking-widest font-sans mt-2">Average Lead Increase</p>
            </div>
            <div className="text-center px-4 flex flex-col items-center justify-center">
              <div className="text-5xl md:text-[56px] font-['Bebas_Neue'] text-[#F5F0EB] mb-1 leading-none">
                <AnimatedCounter end={50} prefix="$" suffix="M+" />
              </div>
              <p className="text-[12px] text-[#cfcfcf] uppercase tracking-widest font-sans mt-2">Revenue Influenced</p>
            </div>
            <div className="text-center px-4 flex flex-col items-center justify-center">
              <div className="text-5xl md:text-[56px] font-['Bebas_Neue'] text-[#F5F0EB] mb-1 leading-none">
                <AnimatedCounter end={200} suffix="+" />
              </div>
              <p className="text-[12px] text-[#cfcfcf] uppercase tracking-widest font-sans mt-2">Hours Saved Monthly</p>
            </div>
            <div className="text-center px-4 flex flex-col items-center justify-center">
              <div className="text-5xl md:text-[56px] font-['Bebas_Neue'] text-[#F5F0EB] mb-1 leading-none">
                <AnimatedCounter end={95} suffix="%" />
              </div>
              <p className="text-[12px] text-[#cfcfcf] uppercase tracking-widest font-sans mt-2">Client Retention</p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="py-24 bg-[#080810]">
        <div className="container mx-auto px-4 md:px-6">
          <FadeUp className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
            <span className="text-[11px] uppercase tracking-[0.12em] text-[#EB2571]/80 mb-3 font-sans">
              HOW WE HELP
            </span>
            <div className="w-12 h-[1px] bg-[#EB2571]/40 mb-6"></div>
            <h2 className="text-[36px] md:text-[48px] font-bold text-[#F5F0EB] tracking-tight">Choose Your Path to Growth</h2>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-8">
            <FadeUp delay={0.1}>
              <div className="bg-[#0F0F1C] border border-[#EB2571]/15 border-t-2 border-t-[#EB2571] p-8 flex flex-col h-full hover:border-[#EB2571]/40 transition-colors">
                <Target size={32} className="text-[#EB2571] mb-6" />
                <h3 className="text-[20px] md:text-[24px] font-semibold text-[#F5F0EB] mb-4">Fractional CMO</h3>
                <p className="text-[16px] text-[#cfcfcf] mb-8 leading-relaxed flex-1">
                  Executive marketing leadership without the full-time cost. Strategy, team management, and growth acceleration.
                </p>
                <div className="flex flex-col gap-4 mt-auto border-t border-white/5 pt-4">
                  <Link href="/fractional-cmo" className="text-[#EB2571] font-bold uppercase tracking-widest text-[12px] hover:opacity-80 transition-opacity inline-flex items-center gap-2">
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="bg-[#0F0F1C] border border-[#EB2571]/15 border-t-2 border-t-[#2AC4EA] p-8 flex flex-col h-full hover:border-[#EB2571]/40 transition-colors relative">
                <div className="absolute top-0 right-0 p-4">
                  <span className="px-3 py-1 bg-[#2AC4EA]/10 text-[#2AC4EA] text-[10px] font-bold tracking-widest uppercase border border-[#2AC4EA]/20">Popular</span>
                </div>
                <Bot size={32} className="text-[#2AC4EA] mb-6" />
                <h3 className="text-[20px] md:text-[24px] font-semibold text-[#F5F0EB] mb-4">AI Automation</h3>
                <p className="text-[16px] text-[#cfcfcf] mb-8 leading-relaxed flex-1">
                  Workflows and Claude setups that take routine work off your team.
                </p>
                <div className="flex flex-col gap-4 mt-auto border-t border-white/5 pt-4">
                  <Link href="/ai-automation" className="text-[#2AC4EA] font-bold uppercase tracking-widest text-[12px] hover:opacity-80 transition-opacity inline-flex items-center gap-2">
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div className="bg-[#0F0F1C] border border-[#EB2571]/15 border-t-2 border-t-[#EB2571] p-8 flex flex-col h-full hover:border-[#EB2571]/40 transition-colors">
                <Zap size={32} className="text-[#EB2571] mb-6" />
                <h3 className="text-[20px] md:text-[24px] font-semibold text-[#F5F0EB] mb-4">Growth Services</h3>
                <p className="text-[16px] text-[#cfcfcf] mb-8 leading-relaxed flex-1">
                  Websites, LinkedIn marketing, PPC, and strategy sprints. Everything you need to grow.
                </p>
                <div className="flex flex-col gap-4 mt-auto border-t border-white/5 pt-4">
                  <Link href="/services" className="text-[#EB2571] font-bold uppercase tracking-widest text-[12px] hover:opacity-80 transition-opacity inline-flex items-center gap-2">
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Why Mazzi Studios */}
      <section className="py-24 bg-[#0D0D1A] border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <div className="flex flex-col mb-8">
                <span className="text-[11px] uppercase tracking-[0.12em] text-[#EB2571]/80 mb-2 font-sans">
                  OUR EXPERTISE
                </span>
                <div className="w-12 h-[1px] bg-[#EB2571]/40"></div>
              </div>
              <h2 className="text-[36px] md:text-[48px] font-bold text-[#F5F0EB] tracking-tight mb-6">Why Mazzi Studios</h2>
              <div className="text-[17px] text-[#cfcfcf] leading-relaxed mb-8 flex flex-col gap-4">
                <p>
                  We bring 25+ years of strategic marketing experience, combined with cutting-edge AI automation, to healthcare and B2B companies.
                </p>
                <p>
                  Most agencies execute tactics. We own the strategy. As your Fractional CMO, we sit on your side of the table, managing vendors, aligning marketing with revenue operations, and integrating AI workflows to do more with less.
                </p>
              </div>
              <Link 
                href="/about"
                className="inline-block bg-transparent border border-[#EB2571]/35 text-[#EB2571] px-6 py-4 font-bold uppercase tracking-widest text-xs text-center hover:bg-[#EB2571]/5 transition-colors"
              >
                Meet The Team
              </Link>
            </FadeUp>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <FadeUp delay={0.1}>
                <div className="bg-[#0F0F1C] border border-[#EB2571]/15 p-8 h-full">
                  <Target className="text-[#EB2571] mb-6" size={28} />
                  <h4 className="font-semibold text-[#F5F0EB] text-[20px] mb-3">C-Suite Strategy</h4>
                  <p className="text-[#cfcfcf] text-[16px] leading-relaxed">Executive-level thinking aligned with your business goals.</p>
                </div>
              </FadeUp>
              <FadeUp delay={0.2}>
                <div className="bg-[#0F0F1C] border border-[#EB2571]/15 p-8 h-full">
                  <Activity className="text-[#EB2571] mb-6" size={28} />
                  <h4 className="font-semibold text-[#F5F0EB] text-[20px] mb-3">Healthcare Focus</h4>
                  <p className="text-[#cfcfcf] text-[16px] leading-relaxed">HIPAA-compliant strategies for complex medical markets.</p>
                </div>
              </FadeUp>
              <FadeUp delay={0.3}>
                <div className="bg-[#0F0F1C] border border-[#EB2571]/15 p-8 h-full">
                  <Bot className="text-[#EB2571] mb-6" size={28} />
                  <h4 className="font-semibold text-[#F5F0EB] text-[20px] mb-3">AI-Native</h4>
                  <p className="text-[#cfcfcf] text-[16px] leading-relaxed">Custom n8n workflows that automate routine operations.</p>
                </div>
              </FadeUp>
              <FadeUp delay={0.4}>
                <div className="bg-[#0F0F1C] border border-[#EB2571]/15 p-8 h-full">
                  <BarChart3 className="text-[#EB2571] mb-6" size={28} />
                  <h4 className="font-semibold text-[#F5F0EB] text-[20px] mb-3">Measurable ROI</h4>
                  <p className="text-[#cfcfcf] text-[16px] leading-relaxed">We track revenue influenced, not just vanity metrics.</p>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* AI Spotlight */}
      <section className="py-24 bg-[#080810] relative">
        <div className="absolute inset-0 pointer-events-none" 
          style={{ background: 'radial-gradient(circle, rgba(235,37,113,0.08) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <FadeUp className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
            <span className="text-[11px] uppercase tracking-[0.12em] text-[#EB2571]/80 mb-3 font-sans">
              AI-POWERED GROWTH
            </span>
            <div className="w-12 h-[1px] bg-[#EB2571]/40 mb-6"></div>
            <h2 className="text-[36px] md:text-[48px] font-bold text-[#F5F0EB] tracking-tight mb-4">Agents That Work While You Sleep</h2>
            <p className="text-[17px] text-[#cfcfcf] leading-relaxed">Custom n8n workflows that automate your marketing operations 24/7.</p>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <FadeUp delay={0.1}>
              <div className="bg-[#0F0F1C] border border-[#EB2571]/15 border-l-2 border-l-[#2AC4EA] p-8 flex flex-col h-full">
                <h4 className="text-[20px] md:text-[24px] font-semibold text-[#F5F0EB] mb-4 flex items-center gap-3">
                  <Users className="text-[#2AC4EA]" size={24} />
                  Lead Generation Agent
                </h4>
                <p className="text-[#cfcfcf] leading-relaxed text-[16px]">Auto-scrapes prospects, enriches data, creates personalized outreach sequences, and books calls directly on your calendar.</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="bg-[#0F0F1C] border border-[#EB2571]/15 border-l-2 border-l-[#EB2571] p-8 flex flex-col h-full">
                <h4 className="text-[20px] md:text-[24px] font-semibold text-[#F5F0EB] mb-4 flex items-center gap-3">
                  <LineChart className="text-[#EB2571]" size={24} />
                  Analytics & Reporting Agent
                </h4>
                <p className="text-[#cfcfcf] leading-relaxed text-[16px]">Pulls data from all your platforms, analyzes performance, and delivers an executive summary to your inbox every Monday.</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.3}>
              <div className="bg-[#0F0F1C] border border-[#EB2571]/15 border-l-2 border-l-[#2AC4EA] p-8 flex flex-col h-full">
                <h4 className="text-[20px] md:text-[24px] font-semibold text-[#F5F0EB] mb-4 flex items-center gap-3">
                  <FileText className="text-[#2AC4EA]" size={24} />
                  Content Creation Agent
                </h4>
                <p className="text-[#cfcfcf] leading-relaxed text-[16px]">Generates SEO-optimized blog posts and social media content tailored to your brand voice, then schedules and publishes automatically.</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.4}>
              <div className="bg-[#0F0F1C] border border-[#EB2571]/15 border-l-2 border-l-[#EB2571] p-8 flex flex-col h-full">
                <h4 className="text-[20px] md:text-[24px] font-semibold text-[#F5F0EB] mb-4 flex items-center gap-3">
                  <Mail className="text-[#EB2571]" size={24} />
                  Inbox Triage Agent
                </h4>
                <p className="text-[#cfcfcf] leading-relaxed text-[16px]">Scans incoming emails, drafts suggested responses, flags priority contacts, and keeps your inbox clean.</p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#0D0D1A] overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <FadeUp className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
            <span className="text-[11px] uppercase tracking-[0.12em] text-[#EB2571]/80 mb-3 font-sans">
              TESTIMONIALS
            </span>
            <div className="w-12 h-[1px] bg-[#EB2571]/40 mb-6"></div>
            <h2 className="text-[36px] md:text-[48px] font-bold text-[#F5F0EB] tracking-tight">Trusted by Leaders</h2>
          </FadeUp>
          
          <FadeUp delay={0.1}>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-5xl mx-auto"
            >
              <CarouselContent>
                {testimonials.map((testimonial) => (
                  <CarouselItem key={testimonial.author} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-2 h-full">
                      <div className="bg-[#0F0F1C] border border-[#EB2571]/15 p-8 flex flex-col h-full">
                        <div aria-hidden="true" className="text-[#EB2571] text-4xl leading-none mb-4">“</div>
                        <p className="text-[#cfcfcf] italic mb-8 flex-1 leading-relaxed">{testimonial.quote}</p>
                        <footer className="flex items-center gap-4 mt-auto border-t border-white/5 pt-6">
                          <div
                            aria-hidden="true"
                            className="h-10 w-10 bg-[#EB2571] flex items-center justify-center text-white font-bold shrink-0 text-sm"
                          >
                            {testimonial.initials}
                          </div>
                          <div>
                            <h4 className="font-semibold text-[#F5F0EB] text-[15px]">{testimonial.author}</h4>
                            <p className="text-[12px] uppercase tracking-widest text-[#cfcfcf]">{testimonial.role}</p>
                          </div>
                        </footer>
                      </div>
                    </div>
                </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-4 mt-8">
                <CarouselPrevious className="static transform-none border border-[#EB2571]/35 bg-transparent hover:bg-[#EB2571]/10 text-[#F5F0EB] rounded-none" />
                <CarouselNext className="static transform-none border border-[#EB2571]/35 bg-transparent hover:bg-[#EB2571]/10 text-[#F5F0EB] rounded-none" />
              </div>
            </Carousel>
          </FadeUp>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-[#EB2571] text-center">
        <div className="container mx-auto px-4">
          <FadeUp>
            <h2 className="text-[56px] md:text-[72px] font-['Bebas_Neue'] text-[#F5F0EB] mb-4 leading-[1.1] tracking-tight">READY TO TRANSFORM YOUR MARKETING?</h2>
            <p className="text-lg md:text-[20px] text-white/90 mb-12 max-w-2xl mx-auto font-sans font-medium">
              Book a free 30-minute strategy call. No pitch, just value.
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-[#F5F0EB] text-[#EB2571] px-10 py-5 font-bold uppercase tracking-widest text-sm hover:opacity-90 transition-opacity"
            >
              Book Your Strategy Call
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* AEO Playbook Teaser */}
      <section className="py-24 bg-[#0D0D1A] border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 70% at 80% 50%, rgba(235,37,113,0.07) 0%, transparent 70%)' }} />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <FadeUp>
              <div className="flex flex-col mb-6">
                <span className="text-[11px] uppercase tracking-[0.14em] font-bold mb-2" style={{ color: 'rgba(235,37,113,0.8)' }}>
                  FREE DOWNLOAD
                </span>
                <div className="w-10 h-[2px]" style={{ background: 'rgba(235,37,113,0.6)' }} />
              </div>
              <h2 className="font-['Bebas_Neue'] font-normal text-[#F5F0EB] leading-[0.92] mb-6"
                style={{ fontSize: 'clamp(40px, 6vw, 72px)' }}>
                ARE YOU BEING<br />
                <span style={{ color: '#EB2571' }}>CITED BY AI?</span>
              </h2>
              <p className="text-[17px] leading-relaxed mb-8 max-w-lg" style={{ color: '#cfcfcf' }}>
                900M+ people ask ChatGPT questions every week. Most businesses are not showing up in the answers. Our free AEO/GEO guide explains why, and what to do about it.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link
                  href="/playbook"
                  className="font-bold uppercase tracking-widest text-center transition-opacity hover:opacity-85 font-sans text-white"
                  style={{ background: '#EB2571', padding: '14px 28px', fontSize: 11, borderRadius: 0 }}
                >
                  Get the Free Guide
                </Link>
                <Link
                  href="/playbook#playbook"
                  className="font-bold uppercase tracking-widest text-center transition-colors font-sans"
                  style={{ border: '1px solid rgba(235,37,113,0.35)', color: '#EB2571', padding: '14px 28px', fontSize: 11, borderRadius: 0 }}
                >
                  See the $197 Playbook
                </Link>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: '900M+', label: 'ChatGPT weekly active users' },
                  { num: '42%', label: 'of Google searches now show AI answers' },
                  { num: '58%', label: 'drop in click-through when AI Overviews appear' },
                  { num: '90 days', label: 'to go from invisible to consistently cited' },
                ].map((stat) => (
                  <div key={stat.num} className="bg-[#0F0F1C] border border-[#EB2571]/10 border-l-2 border-l-[#EB2571] p-5">
                    <span className="block font-['Bebas_Neue'] text-[2rem] leading-none mb-2 text-[#F5F0EB]">{stat.num}</span>
                    <span className="block text-[12px] leading-snug uppercase tracking-wide" style={{ color: '#cfcfcf' }}>{stat.label}</span>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-24 bg-[#080810]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-end mb-12 border-b border-white/5 pb-8">
            <FadeUp>
              <h2 className="text-[36px] md:text-[48px] font-bold text-[#F5F0EB] tracking-tight">Latest Insights</h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <Link href="/blog" className="text-[#EB2571] font-bold uppercase tracking-widest text-[12px] hover:opacity-80 transition-opacity hidden md:flex items-center gap-2">
                View All Posts <ArrowRight size={14} />
              </Link>
            </FadeUp>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {posts.slice(0, 3).map((post, i) => (
              <FadeUp key={post.id} delay={i * 0.1}>
                <Link href={`/blog/${post.slug}`} className="block h-full">
                  <article className="bg-[#0F0F1C] border border-[#EB2571]/15 hover:border-[#EB2571]/40 transition-colors group h-full flex flex-col cursor-pointer">
                    <div className="h-52 overflow-hidden bg-[#0F0F1C]">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 duration-500 opacity-80 group-hover:opacity-100 transition-all"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-7 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-[#EB2571] uppercase text-[10px] font-bold tracking-widest">{post.category}</span>
                        <span className="text-[#cfcfcf]">·</span>
                        <span className="flex items-center gap-1 text-[#cfcfcf] text-[11px] uppercase tracking-widest">
                          <Clock size={11} /> {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-[22px] leading-tight text-[#F5F0EB] mt-3 mb-3 font-['Bebas_Neue'] line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-[14px] text-[#cfcfcf] leading-relaxed mb-6 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                        <span className="text-[#cfcfcf] text-[12px]">{post.date}</span>
                        <span className="text-[#EB2571] font-bold uppercase text-[11px] inline-flex items-center gap-1 tracking-widest group-hover:opacity-80 transition-opacity">
                          Read Article <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              </FadeUp>
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
             <Link 
              href="/blog"
              className="inline-block bg-transparent border border-[#EB2571]/35 text-[#EB2571] px-6 py-4 font-bold uppercase tracking-widest text-xs text-center"
            >
              View All Posts
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}