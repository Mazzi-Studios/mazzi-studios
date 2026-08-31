import React from 'react';
import { ArrowRight, Brain, Zap, TrendingUp } from 'lucide-react';

export function NeoBrutalist() {
  return (
    <div className="min-h-screen bg-[#F9F9F7] text-[#0A0A0A] font-['Inter'] font-medium selection:bg-[#EB2571] selection:text-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-[#F9F9F7] border-b-4 border-[#0A0A0A]">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-[#EB2571] to-[#2AC4EA] border-2 border-[#0A0A0A] shadow-[2px_2px_0px_#0A0A0A] flex items-center justify-center">
            <span className="font-['Space_Grotesk'] font-bold text-white text-lg leading-none mt-0.5">M</span>
          </div>
          <span className="font-['Space_Grotesk'] text-2xl font-black uppercase tracking-tight">Mazzi Studios</span>
        </div>
        <div className="hidden md:flex items-center gap-8 font-bold uppercase tracking-wider text-sm">
          <a href="#" className="hover:text-[#EB2571] transition-colors">Services</a>
          <a href="#" className="hover:text-[#EB2571] transition-colors">Case Studies</a>
          <a href="#" className="hover:text-[#EB2571] transition-colors">About</a>
        </div>
        <button className="hidden md:flex items-center gap-2 bg-gradient-to-br from-[#EB2571] to-[#2AC4EA] text-white px-6 py-3 border-2 border-[#0A0A0A] shadow-[4px_4px_0px_#0A0A0A] font-['Space_Grotesk'] font-bold uppercase text-sm hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[6px_6px_0px_#0A0A0A] hover:from-[#2AC4EA] hover:to-[#EB2571] transition-all active:translate-y-0 active:translate-x-0 active:shadow-[0px_0px_0px_#0A0A0A]">
          Book A Call
          <ArrowRight className="w-4 h-4" strokeWidth={3} />
        </button>
      </nav>

      {/* Hero */}
      <section className="relative px-6 py-24 md:py-32 overflow-hidden border-b-4 border-[#0A0A0A]">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#0A0A0A 2px, transparent 2px)', backgroundSize: '32px 32px' }}></div>
        
        <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-start gap-8">
          <div className="inline-block bg-[#0A0A0A] text-white px-4 py-2 border-2 border-[#0A0A0A] shadow-[4px_4px_0px_#2AC4EA] font-bold uppercase text-sm tracking-widest mb-4">
            AI-Powered Fractional CMO
          </div>
          
          <h1 className="font-['Space_Grotesk'] text-6xl md:text-8xl lg:text-[110px] font-black leading-[0.9] tracking-tighter uppercase">
            Marketing That
            <br />
            <span className="inline-block bg-[#0A0A0A] text-[#F9F9F7] px-4 py-2 mt-4 border-4 border-[#0A0A0A] shadow-[8px_8px_0px_#EB2571] transform -rotate-1">
              Actually
            </span>
            <br />
            Moves the Needle
          </h1>
          
          <p className="text-xl md:text-2xl max-w-2xl font-semibold leading-relaxed border-l-4 border-[#EB2571] pl-6 mt-4">
            We architect high-velocity growth for B2B and healthcare brands using AI automation and relentless execution.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 mt-8">
            <button className="flex items-center justify-center gap-2 bg-gradient-to-br from-[#EB2571] to-[#2AC4EA] text-white px-8 py-5 border-4 border-[#0A0A0A] shadow-[6px_6px_0px_#0A0A0A] font-['Space_Grotesk'] font-bold uppercase text-lg hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[10px_10px_0px_#0A0A0A] hover:from-[#2AC4EA] hover:to-[#EB2571] transition-all active:translate-y-1 active:translate-x-1 active:shadow-[2px_2px_0px_#0A0A0A]">
              Book Strategy Call
              <ArrowRight className="w-6 h-6" strokeWidth={3} />
            </button>
            <button className="flex items-center justify-center gap-2 bg-[#F9F9F7] text-[#0A0A0A] px-8 py-5 border-4 border-[#0A0A0A] shadow-[6px_6px_0px_#0A0A0A] font-['Space_Grotesk'] font-bold uppercase text-lg hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[10px_10px_0px_#2AC4EA] transition-all active:translate-y-1 active:translate-x-1 active:shadow-[2px_2px_0px_#0A0A0A] hover:bg-[#0A0A0A] hover:text-[#F9F9F7]">
              See Our Services
            </button>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-[#0A0A0A] text-white border-b-4 border-[#0A0A0A]">
        <div className="grid grid-cols-2 lg:grid-cols-4 border-l-2 lg:border-l-0 border-[#0A0A0A]">
          {[
            { value: "127%", label: "Lead Increase" },
            { value: "$50M", label: "Revenue Influenced" },
            { value: "200+", label: "Hours Saved/mo" },
            { value: "95%", label: "Client Retention" }
          ].map((stat, i) => (
            <div key={i} className={`p-8 flex flex-col items-center justify-center text-center bg-[#0A0A0A] hover:bg-[#EB2571] transition-colors border-r-2 border-b-2 lg:border-b-0 border-[#0A0A0A] group ${i % 2 !== 0 ? 'border-r-0 lg:border-r-2' : ''}`}>
              <div className="font-['Space_Grotesk'] text-5xl md:text-6xl font-black mb-2 text-[#F9F9F7] group-hover:text-[#0A0A0A]">{stat.value}</div>
              <div className="font-bold uppercase tracking-widest text-sm text-gray-400 group-hover:text-[#0A0A0A]">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services/How We Help */}
      <section className="bg-[#0A0A0A] text-[#F9F9F7] py-24 px-6 border-b-4 border-[#0A0A0A]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <h2 className="font-['Space_Grotesk'] text-5xl md:text-7xl font-black uppercase leading-[0.9]">
              How We<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EB2571] to-[#2AC4EA]">
                Dominate
              </span>
            </h2>
            <p className="max-w-md text-lg font-medium text-gray-300">
              Stop paying agencies to learn your business. We install elite marketing leadership and autonomous growth systems from day one.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "Fractional CMO",
                price: "$7,500/mo",
                desc: "C-suite strategic leadership without the $250k salary. We architect the vision, manage the team, and own the results."
              },
              {
                icon: Zap,
                title: "AI Automation",
                price: "$5,000+",
                desc: "Replace bloated teams with autonomous agents. We build AI systems that prospect, qualify, and close 24/7."
              },
              {
                icon: TrendingUp,
                title: "Growth Marketing",
                price: "$1,500/mo",
                desc: "Relentless execution of high-converting campaigns. Copy, creative, media buying, and CRO that actually prints."
              }
            ].map((service, i) => (
              <div key={i} className="bg-[#F9F9F7] text-[#0A0A0A] border-4 border-[#0A0A0A] shadow-[8px_8px_0px_#0A0A0A] p-8 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[16px_16px_0px_#2AC4EA] transition-all flex flex-col h-full group">
                <div className="w-16 h-16 bg-[#0A0A0A] text-[#F9F9F7] border-2 border-[#0A0A0A] shadow-[4px_4px_0px_#EB2571] flex items-center justify-center mb-8 group-hover:scale-110 group-hover:shadow-[4px_4px_0px_#2AC4EA] transition-all">
                  <service.icon className="w-8 h-8" strokeWidth={2.5} />
                </div>
                <h3 className="font-['Space_Grotesk'] text-3xl font-black uppercase mb-2">{service.title}</h3>
                <div className="inline-block bg-[#EB2571] text-white px-3 py-1 border-2 border-[#0A0A0A] font-bold uppercase text-sm mb-6 self-start shadow-[2px_2px_0px_#0A0A0A] group-hover:bg-[#2AC4EA] transition-colors">
                  From {service.price}
                </div>
                <p className="font-medium text-lg flex-grow">
                  {service.desc}
                </p>
                <div className="mt-8 pt-6 border-t-4 border-[#0A0A0A]">
                  <button className="flex items-center justify-between w-full font-['Space_Grotesk'] font-bold uppercase text-lg group-hover:text-[#EB2571] transition-colors">
                    Explore
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" strokeWidth={3} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Footer minimal */}
      <footer className="bg-gradient-to-r from-[#EB2571] to-[#2AC4EA] py-12 px-6">
         <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="font-['Space_Grotesk'] text-4xl font-black uppercase text-[#0A0A0A] tracking-tighter">
             Mazzi Studios
           </div>
           <div className="font-bold uppercase text-[#0A0A0A] flex gap-6 text-sm">
             <a href="#" className="hover:text-white transition-colors hover:underline decoration-4 underline-offset-4">Twitter</a>
             <a href="#" className="hover:text-white transition-colors hover:underline decoration-4 underline-offset-4">LinkedIn</a>
             <a href="#" className="hover:text-white transition-colors hover:underline decoration-4 underline-offset-4">Contact</a>
           </div>
         </div>
      </footer>
    </div>
  );
}
