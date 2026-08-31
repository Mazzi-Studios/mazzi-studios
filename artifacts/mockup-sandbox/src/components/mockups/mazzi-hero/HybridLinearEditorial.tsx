import React from "react";
import { ArrowRight, Circle, Zap, Brain, TrendingUp } from "lucide-react";

export function HybridLinearEditorial() {
  return (
    <div className="min-h-screen w-full bg-[#080810] text-[#F5F0EB] font-['Inter'] selection:bg-[#EB2571] selection:text-white overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#080810]/85 backdrop-blur-md border-b border-white/5 px-6 lg:px-12 py-4 flex items-center justify-between">
        <div className="flex items-center gap-1 cursor-pointer">
          <span className="font-['Playfair_Display'] italic font-normal text-xl tracking-wide text-[#F5F0EB]">mazzi</span>
          <span className="font-['Inter'] font-normal text-xl text-[#F5F0EB]">studios</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {["Home", "Services", "Fractional CMO", "AI Automation", "Blog"].map((item) => (
            <a key={item} href="#" className="text-[14px] text-[#94A3B8] hover:text-[#F5F0EB] transition-colors duration-200">
              {item}
            </a>
          ))}
        </div>

        <button className="bg-[#EB2571] text-white px-5 py-2.5 rounded-none font-semibold uppercase text-xs tracking-widest hover:brightness-110 transition-all duration-200 hidden sm:block">
          Book a Call
        </button>
      </nav>

      {/* Hero Section */}
      <section 
        className="relative pt-32 lg:pt-48 pb-20 lg:pb-32 px-6 lg:px-12 max-w-7xl mx-auto"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(235,37,113,0.07) 1px, transparent 1px)',
          backgroundSize: '28px 28px'
        }}
      >
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-0 relative">
          
          {/* Thin vertical line separating columns on desktop */}
          <div className="hidden lg:block absolute left-[60%] top-0 bottom-0 w-[1px] bg-white/5 z-0" />

          {/* Left Column (60%) */}
          <div className="w-full lg:w-[60%] lg:pr-16 relative z-10 flex flex-col justify-center">
            
            <div className="mb-8">
              <span className="font-['Inter'] text-[11px] uppercase tracking-[0.12em] text-[rgba(235,37,113,0.7)] font-semibold">
                AI-Powered Marketing Leadership
              </span>
            </div>

            {/* 1px horizontal rule in hot pink at 20% */}
            <div className="w-full h-[1px] bg-[#EB2571]/20 mb-8" />

            <h1 className="font-['Playfair_Display'] text-[48px] sm:text-[56px] lg:text-[68px] xl:text-[80px] font-bold text-[#F5F0EB] leading-[1.1] tracking-[-0.02em] mb-8">
              Marketing that moves<br />
              the needle —<br />
              <span className="text-[#EB2571]">measurably.</span>
            </h1>

            <p className="font-['Inter'] text-[16px] text-[#94A3B8] leading-[1.65] max-w-[480px] mb-12">
              Fractional CMO strategy, AI-powered automation, and growth marketing for healthcare and B2B companies scaling past the plateau.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#EB2571] text-white px-8 py-3.5 rounded-none font-semibold uppercase text-xs tracking-widest hover:brightness-110 transition-all duration-200">
                Book a Call
              </button>
              <button className="bg-transparent text-[#EB2571] border border-[#EB2571]/30 px-8 py-3.5 rounded-none font-semibold uppercase text-xs tracking-widest hover:bg-[#EB2571]/5 transition-all duration-200">
                View Services
              </button>
            </div>
          </div>

          {/* Right Column (40%) */}
          <div className="w-full lg:w-[40%] lg:pl-16 relative z-10 flex flex-col justify-center">
            <div className="bg-[#0F0F1C] border border-[#EB2571]/25 p-8 rounded-none hover:border-[#EB2571]/40 transition-colors duration-300 group">
              
              <div className="flex items-center gap-3 mb-6">
                <span className="font-['Inter'] text-[11px] uppercase tracking-[0.12em] text-[#94A3B8]">
                  Availability
                </span>
                <div className="flex items-center gap-2 px-2.5 py-1 bg-[#1A1A2E] border border-white/5">
                  <Circle className="w-2 h-2 fill-green-500 text-green-500 animate-pulse" />
                  <span className="text-xs text-green-400 font-medium">Accepting 2 clients for Q3 2026</span>
                </div>
              </div>

              <div className="w-full h-[1px] bg-white/5 mb-6" />

              <div className="flex flex-col gap-5 mb-6">
                <div className="flex justify-between items-center group/row cursor-default">
                  <span className="text-[#F5F0EB] text-sm group-hover/row:text-[#EB2571] transition-colors">Fractional CMO</span>
                  <span className="text-[#94A3B8] text-sm font-mono">$7,500/mo</span>
                </div>
                <div className="flex justify-between items-center group/row cursor-default">
                  <span className="text-[#F5F0EB] text-sm group-hover/row:text-[#2AC4EA] transition-colors">AI Automation</span>
                  <span className="text-[#94A3B8] text-sm font-mono">$5,000+</span>
                </div>
                <div className="flex justify-between items-center group/row cursor-default">
                  <span className="text-[#F5F0EB] text-sm group-hover/row:text-[#EB2571] transition-colors">Growth Marketing</span>
                  <span className="text-[#94A3B8] text-sm font-mono">$1,500/mo</span>
                </div>
              </div>

              <div className="w-full h-[1px] bg-white/5 mb-6" />

              <a href="#" className="inline-flex items-center gap-2 text-[#EB2571] text-sm font-semibold hover:text-[#EB2571]/80 transition-colors">
                Next strategy session <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal Stat Strip */}
      <section className="w-full bg-[#0D0D1A] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-white/5">
          
          <div className="flex-1 py-10 md:px-8 first:md:pl-0 flex flex-col items-center md:items-start">
            <span className="font-['Playfair_Display'] text-[40px] lg:text-[52px] font-bold text-[#F5F0EB] mb-2 leading-none">127%</span>
            <span className="font-['Inter'] text-[12px] uppercase tracking-wider text-[#94A3B8]">Average lead increase</span>
          </div>
          
          <div className="flex-1 py-10 md:px-8 flex flex-col items-center md:items-start">
            <span className="font-['Playfair_Display'] text-[40px] lg:text-[52px] font-bold text-[#F5F0EB] mb-2 leading-none">$50M+</span>
            <span className="font-['Inter'] text-[12px] uppercase tracking-wider text-[#94A3B8]">Revenue influenced</span>
          </div>
          
          <div className="flex-1 py-10 md:px-8 flex flex-col items-center md:items-start">
            <span className="font-['Playfair_Display'] text-[40px] lg:text-[52px] font-bold text-[#F5F0EB] mb-2 leading-none">200<span className="text-3xl text-[#94A3B8] font-normal font-['Inter'] ml-1">hrs</span></span>
            <span className="font-['Inter'] text-[12px] uppercase tracking-wider text-[#94A3B8]">Saved per month</span>
          </div>
          
          <div className="flex-1 py-10 md:px-8 last:md:pr-0 flex flex-col items-center md:items-start">
            <span className="font-['Playfair_Display'] text-[40px] lg:text-[52px] font-bold text-[#F5F0EB] mb-2 leading-none">95%</span>
            <span className="font-['Inter'] text-[12px] uppercase tracking-wider text-[#94A3B8]">Client retention</span>
          </div>

        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="font-['Inter'] text-[11px] uppercase tracking-[0.12em] text-[rgba(235,37,113,0.7)] font-semibold block mb-4">
            How We Help
          </span>
          <h2 className="font-['Playfair_Display'] text-[36px] lg:text-[48px] font-bold text-[#F5F0EB] leading-tight">
            Specialized growth systems<br />for scaling companies.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1 */}
          <div className="bg-[#0F0F1C] border border-[#EB2571]/15 border-t-[#EB2571] border-t-2 p-8 hover:border-[#EB2571]/40 hover:border-t-[#EB2571] transition-all duration-300 group flex flex-col">
            <Brain className="w-8 h-8 text-[#EB2571] mb-6 opacity-80" />
            <h3 className="font-['Playfair_Display'] text-[22px] font-semibold text-[#F5F0EB] mb-4">
              Fractional CMO
            </h3>
            <p className="font-['Inter'] text-[16px] text-[#94A3B8] leading-[1.65] mb-8 flex-grow">
              Executive-level marketing leadership to build your strategy, team, and systems without the full-time overhead.
            </p>
            <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
              <span className="text-[#94A3B8] text-sm font-mono">$7,500/mo</span>
              <a href="#" className="inline-flex items-center gap-2 text-[#EB2571] text-sm font-semibold hover:text-[#EB2571]/80 transition-colors">
                Learn more <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#0F0F1C] border border-[#EB2571]/15 border-t-[#2AC4EA] border-t-2 p-8 hover:border-[#2AC4EA]/40 hover:border-t-[#2AC4EA] transition-all duration-300 group flex flex-col relative overflow-hidden">
            {/* Subtle Cyan Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#2AC4EA]/5 blur-3xl rounded-full transition-opacity opacity-0 group-hover:opacity-100" />
            
            <Zap className="w-8 h-8 text-[#2AC4EA] mb-6 opacity-80" />
            <h3 className="font-['Playfair_Display'] text-[22px] font-semibold text-[#F5F0EB] mb-4">
              AI Automation
            </h3>
            <p className="font-['Inter'] text-[16px] text-[#94A3B8] leading-[1.65] mb-8 flex-grow">
              Custom AI workflows and agents that automate lead generation, qualification, and content scaling.
            </p>
            <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
              <span className="text-[#94A3B8] text-sm font-mono">$5,000+</span>
              <a href="#" className="inline-flex items-center gap-2 text-[#2AC4EA] text-sm font-semibold hover:text-[#2AC4EA]/80 transition-colors">
                Learn more <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#0F0F1C] border border-[#EB2571]/15 border-t-[#EB2571] border-t-2 p-8 hover:border-[#EB2571]/40 hover:border-t-[#EB2571] transition-all duration-300 group flex flex-col relative overflow-hidden">
             {/* Subtle Pink Glow */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-[#EB2571]/5 blur-3xl rounded-full transition-opacity opacity-0 group-hover:opacity-100" />

            <TrendingUp className="w-8 h-8 text-[#EB2571] mb-6 opacity-80" />
            <h3 className="font-['Playfair_Display'] text-[22px] font-semibold text-[#F5F0EB] mb-4">
              Growth Marketing
            </h3>
            <p className="font-['Inter'] text-[16px] text-[#94A3B8] leading-[1.65] mb-8 flex-grow">
              Performance campaigns, SEO, and conversion rate optimization designed for scalable revenue acquisition.
            </p>
            <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
              <span className="text-[#94A3B8] text-sm font-mono">$1,500/mo</span>
              <a href="#" className="inline-flex items-center gap-2 text-[#EB2571] text-sm font-semibold hover:text-[#EB2571]/80 transition-colors">
                Learn more <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Simple Footer just to complete the page nicely */}
      <footer className="py-12 border-t border-white/5 mt-auto">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-1 opacity-50">
            <span className="font-['Playfair_Display'] italic font-normal text-lg tracking-wide text-[#F5F0EB]">mazzi</span>
            <span className="font-['Inter'] font-normal text-lg text-[#F5F0EB]">studios</span>
          </div>
          <p className="text-[#94A3B8] text-sm">© {new Date().getFullYear()} Mazzi Studios. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
