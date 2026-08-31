import React from 'react';
import { ArrowRight, MoveRight } from 'lucide-react';

export function EditorialPrint() {
  return (
    <div className="min-h-screen bg-white text-[#0F0F0F] font-['Inter'] selection:bg-[#EB2571] selection:text-white pb-8">
      {/* Top Border Rule */}
      <div className="w-full h-px bg-[#0F0F0F]"></div>
      
      {/* Navbar */}
      <nav className="w-full border-b border-[#0F0F0F] px-4 md:px-8 py-5 flex items-center justify-between bg-white sticky top-0 z-50">
        <div className="text-2xl md:text-3xl font-['Playfair_Display'] font-black tracking-tight flex items-center gap-2">
          <span>Mazzi</span>
          <span className="font-light italic text-[#808080]">Studios.</span>
        </div>
        <div className="hidden md:flex items-center gap-10 text-[13px] text-[#0F0F0F] font-semibold uppercase tracking-[0.1em]">
          <a href="#" className="hover:text-[#2AC4EA] transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-[#EB2571] hover:after:w-full after:transition-all">Services</a>
          <a href="#" className="hover:text-[#2AC4EA] transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-[#EB2571] hover:after:w-full after:transition-all">Methodology</a>
          <a href="#" className="hover:text-[#2AC4EA] transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-[#EB2571] hover:after:w-full after:transition-all">Thinking</a>
          <a href="#" className="hover:text-[#2AC4EA] transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-[#EB2571] hover:after:w-full after:transition-all">About</a>
        </div>
        <div>
          <button className="text-[11px] uppercase tracking-[0.2em] font-bold text-white bg-[linear-gradient(135deg,#EB2571_0%,#2AC4EA_100%)] px-6 py-3 hover:opacity-90 transition-opacity">
            Consultation
          </button>
        </div>
      </nav>

      <main className="max-w-[1400px] mx-auto px-4 md:px-8">
        {/* Hero Section */}
        <section className="py-16 md:py-24 border-b border-[#E5E5E5]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            
            <div className="lg:col-span-8 flex flex-col justify-start">
              <div className="flex items-center gap-4 mb-8">
                <span className="h-px w-12 bg-[#EB2571]"></span>
                <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#EB2571]">Edition 01</span>
                <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#808080]">Vol. 25</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-['Playfair_Display'] font-black leading-[1.05] tracking-tight mb-8">
                The marketing leadership your business has been missing.
              </h1>
              
              <p className="text-xl md:text-2xl font-['Playfair_Display'] italic text-[#3D3D3D] leading-relaxed max-w-3xl border-l-2 border-[#E5E5E5] pl-6 ml-2">
                Twenty-five years of strategy. Now AI-powered. We bring elite fractional CMO expertise to healthcare and B2B, engineered for the modern era.
              </p>
            </div>

            <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-[#E5E5E5] pt-8 lg:pt-0 lg:pl-8 flex flex-col justify-between">
              <div>
                <p className="text-base text-[#3D3D3D] leading-relaxed mb-8 font-['Inter']">
                  In an increasingly complex landscape, traditional marketing models are failing. Mazzi Studios combines human strategic brilliance with AI-driven execution to build revenue engines that scale.
                </p>
                <div className="flex flex-col gap-5">
                  <button className="w-full border border-[#0F0F0F] bg-transparent text-[#0F0F0F] px-6 py-4 text-[13px] uppercase tracking-[0.15em] font-bold hover:bg-[linear-gradient(135deg,#EB2571_0%,#2AC4EA_100%)] hover:border-transparent hover:text-white transition-all flex items-center justify-between group">
                    <span>Schedule a Consultation</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <a href="#" className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-wider text-[#EB2571] hover:text-[#2AC4EA] transition-colors mt-2">
                    Read our thinking <MoveRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
              
              <div className="mt-12 lg:mt-0 p-8 border border-[#E5E5E5] bg-white relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-[linear-gradient(135deg,#EB2571_0%,#2AC4EA_100%)]"></div>
                <span className="block text-[11px] uppercase tracking-[0.2em] font-bold text-[#808080] mb-3">Notice</span>
                <p className="text-[14px] text-[#0F0F0F] font-['Inter'] leading-relaxed font-medium">
                  Currently accepting two new partners for Q3 implementation. Priority given to South Florida healthcare organizations.
                </p>
              </div>
            </div>
            
          </div>
        </section>

        {/* Stats Strip */}
        <section className="border-b-4 border-[#0F0F0F] grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-[#E5E5E5]">
          <div className="py-10 lg:py-14 pr-8">
            <span className="block text-[11px] uppercase tracking-[0.2em] font-bold text-[#808080] mb-4">Performance</span>
            <div className="text-5xl md:text-6xl font-['Playfair_Display'] font-black text-[#0F0F0F] mb-3">127<span className="text-3xl text-[#EB2571]">%</span></div>
            <div className="text-sm font-medium text-[#3D3D3D] uppercase tracking-wide">Average lead increase</div>
          </div>
          <div className="py-10 lg:py-14 px-8">
            <span className="block text-[11px] uppercase tracking-[0.2em] font-bold text-[#808080] mb-4">Impact</span>
            <div className="text-5xl md:text-6xl font-['Playfair_Display'] font-black text-[#0F0F0F] mb-3"><span className="text-3xl text-[#EB2571]">$</span>50<span className="text-3xl text-[#EB2571]">M</span></div>
            <div className="text-sm font-medium text-[#3D3D3D] uppercase tracking-wide">Revenue influenced</div>
          </div>
          <div className="py-10 lg:py-14 px-8">
            <span className="block text-[11px] uppercase tracking-[0.2em] font-bold text-[#808080] mb-4">Efficiency</span>
            <div className="text-5xl md:text-6xl font-['Playfair_Display'] font-black text-[#0F0F0F] mb-3">200<span className="text-3xl text-[#EB2571]">+</span></div>
            <div className="text-sm font-medium text-[#3D3D3D] uppercase tracking-wide">Hours saved monthly</div>
          </div>
          <div className="py-10 lg:py-14 pl-8">
            <span className="block text-[11px] uppercase tracking-[0.2em] font-bold text-[#808080] mb-4">Trust</span>
            <div className="text-5xl md:text-6xl font-['Playfair_Display'] font-black text-[#0F0F0F] mb-3">95<span className="text-3xl text-[#EB2571]">%</span></div>
            <div className="text-sm font-medium text-[#3D3D3D] uppercase tracking-wide">Client retention rate</div>
          </div>
        </section>

        {/* How We Help */}
        <section className="py-20 md:py-32">
          <div className="flex items-end justify-between mb-16 border-b border-[#0F0F0F] pb-6">
            <div>
              <span className="block text-[11px] uppercase tracking-[0.25em] font-bold text-[#EB2571] mb-4">Our Services</span>
              <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] font-black">Capabilities & Offerings</h2>
            </div>
            <a href="#" className="hidden md:flex items-center gap-3 text-[12px] text-[#0F0F0F] uppercase tracking-[0.15em] font-bold hover:text-[#2AC4EA] transition-colors pb-2">
              View all services <MoveRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
            
            {/* Card 1 */}
            <div className="group cursor-pointer">
              <div className="h-1 w-full bg-[#0F0F0F] mb-8 group-hover:bg-[#2AC4EA] transition-colors"></div>
              <span className="block text-[11px] uppercase tracking-[0.2em] text-[#808080] font-bold mb-5">Tier I • Strategic</span>
              <h3 className="text-3xl font-['Playfair_Display'] font-bold mb-4 group-hover:text-[#EB2571] transition-colors">Fractional CMO</h3>
              <p className="text-base text-[#3D3D3D] mb-8 leading-relaxed">
                Executive-level marketing leadership without the full-time overhead. We integrate into your C-suite to direct strategy, build teams, and drive sustainable growth.
              </p>
              <div className="flex flex-col gap-2 border-t border-[#E5E5E5] pt-6">
                <span className="text-[13px] font-bold uppercase tracking-widest text-[#0F0F0F]">From $7,500 / mo</span>
                <span className="text-sm font-['Playfair_Display'] italic text-[#808080]">6-12 month engagement</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group cursor-pointer">
              <div className="h-1 w-full bg-[#0F0F0F] mb-8 group-hover:bg-[#2AC4EA] transition-colors"></div>
              <span className="block text-[11px] uppercase tracking-[0.2em] text-[#808080] font-bold mb-5">Tier II • Systemic</span>
              <h3 className="text-3xl font-['Playfair_Display'] font-bold mb-4 group-hover:text-[#EB2571] transition-colors">AI Automation</h3>
              <p className="text-base text-[#3D3D3D] mb-8 leading-relaxed">
                Implementation of bespoke AI workflows that reduce operational friction, automate outbound pipelines, and scale your content generation engine.
              </p>
              <div className="flex flex-col gap-2 border-t border-[#E5E5E5] pt-6">
                <span className="text-[13px] font-bold uppercase tracking-widest text-[#0F0F0F]">From $5,000</span>
                <span className="text-sm font-['Playfair_Display'] italic text-[#808080]">One-time setup & deployment</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group cursor-pointer">
              <div className="h-1 w-full bg-[#0F0F0F] mb-8 group-hover:bg-[#2AC4EA] transition-colors"></div>
              <span className="block text-[11px] uppercase tracking-[0.2em] text-[#808080] font-bold mb-5">Tier III • Tactical</span>
              <h3 className="text-3xl font-['Playfair_Display'] font-bold mb-4 group-hover:text-[#EB2571] transition-colors">Growth Marketing</h3>
              <p className="text-base text-[#3D3D3D] mb-8 leading-relaxed">
                Execution of high-leverage campaigns across paid media, SEO, and lifecycle marketing. Focused purely on pipeline generation and acquisition metrics.
              </p>
              <div className="flex flex-col gap-2 border-t border-[#E5E5E5] pt-6">
                <span className="text-[13px] font-bold uppercase tracking-widest text-[#0F0F0F]">From $1,500 / mo</span>
                <span className="text-sm font-['Playfair_Display'] italic text-[#808080]">Ongoing monthly retainer</span>
              </div>
            </div>

          </div>
        </section>
      </main>
      
      {/* Footer Rule */}
      <div className="w-full h-px bg-[#E5E5E5] mt-16 mb-6"></div>
      <footer className="text-center text-[11px] text-[#808080] uppercase tracking-[0.2em] font-bold">
        © {new Date().getFullYear()} Mazzi Studios. Printed in South Florida.
      </footer>
    </div>
  );
}
