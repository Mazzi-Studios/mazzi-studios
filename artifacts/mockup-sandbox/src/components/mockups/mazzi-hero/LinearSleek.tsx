import React from 'react';
import { Cpu, TrendingUp, Zap, ArrowRight, ChevronRight, Activity, Command } from 'lucide-react';

export function LinearSleek() {
  return (
    <div className="min-h-screen w-full bg-[#0D0D12] text-[#FAFAFA] font-['Inter'] selection:bg-[#EB2571] selection:text-white">
      {/* Background Dot Pattern */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)'
        }}
      />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0D0D12]/80 backdrop-blur-md border-b border-[rgba(255,255,255,0.06)]">
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Command className="w-5 h-5 text-white" />
            <span className="font-semibold text-[15px] tracking-tight">Mazzi Studios</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-[14px] text-[#94A3B8]">
            <a href="#" className="hover:text-[#FAFAFA] transition-colors">Services</a>
            <a href="#" className="hover:text-[#FAFAFA] transition-colors">Methodology</a>
            <a href="#" className="hover:text-[#FAFAFA] transition-colors">Results</a>
            <a href="#" className="hover:text-[#FAFAFA] transition-colors">About</a>
          </div>

          <button className="h-9 px-4 bg-gradient-to-br from-[#EB2571] to-[#2AC4EA] text-white text-[13px] font-medium flex items-center gap-2 hover:opacity-90 transition-opacity shadow-[0_1px_2px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.2)]">
            Book a Strategy Call
          </button>
        </div>
      </nav>

      <main className="relative z-10 pt-32 pb-24">
        {/* Hero Section */}
        <section className="max-w-[1200px] mx-auto px-6 pt-16 pb-20 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-none border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] mb-8">
            <span className="w-1.5 h-1.5 bg-[#EB2571] rounded-none animate-pulse"></span>
            <span className="text-[11px] font-semibold text-[#94A3B8] uppercase tracking-[0.1em]">AI-Powered Fractional CMO</span>
          </div>

          <h1 className="text-[58px] md:text-[64px] font-bold text-[#FAFAFA] leading-[1.1] tracking-[-0.02em] max-w-4xl mx-auto mb-6">
            The operating system for <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EB2571] to-[#2AC4EA]">your marketing team.</span>
          </h1>

          <p className="text-[17px] text-[#94A3B8] leading-[1.6] max-w-2xl mx-auto mb-10">
            Engineered for scale. We provide elite marketing leadership, AI-driven automation, and growth systems for Healthcare B2B & B2C companies in South Florida and beyond.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mb-20">
            <button className="h-11 px-6 bg-gradient-to-br from-[#EB2571] to-[#2AC4EA] text-white text-[14px] font-medium flex items-center gap-2 hover:opacity-90 transition-opacity shadow-[0_1px_2px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.2)]">
              Book a Strategy Call
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
            <button className="h-11 px-6 bg-transparent border border-[rgba(255,255,255,0.15)] text-[#94A3B8] text-[14px] font-medium flex items-center hover:bg-[rgba(255,255,255,0.03)] hover:text-white transition-all">
              View Services
            </button>
          </div>

          {/* Inline Stats Strip */}
          <div className="w-full max-w-4xl border border-[rgba(255,255,255,0.08)] bg-[#13131A] grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[rgba(255,255,255,0.08)]">
            <div className="flex flex-col items-center justify-center py-6">
              <span className="text-[28px] font-bold text-white tracking-tight mb-1">127%</span>
              <span className="text-[12px] text-[#94A3B8] font-medium">Lead Increase</span>
            </div>
            <div className="flex flex-col items-center justify-center py-6">
              <span className="text-[28px] font-bold text-white tracking-tight mb-1">$50M+</span>
              <span className="text-[12px] text-[#94A3B8] font-medium">Revenue Influenced</span>
            </div>
            <div className="flex flex-col items-center justify-center py-6">
              <span className="text-[28px] font-bold text-white tracking-tight mb-1">200+</span>
              <span className="text-[12px] text-[#94A3B8] font-medium">Hours Saved (AI)</span>
            </div>
            <div className="flex flex-col items-center justify-center py-6">
              <span className="text-[28px] font-bold text-white tracking-tight mb-1">95%</span>
              <span className="text-[12px] text-[#94A3B8] font-medium">Client Retention</span>
            </div>
          </div>
        </section>

        {/* How We Help Section */}
        <section className="max-w-[1200px] mx-auto px-6 py-24 border-t border-[rgba(255,255,255,0.06)]">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <span className="text-[11px] font-semibold text-[#EB2571] uppercase tracking-[0.1em] mb-3 block">Methodology</span>
              <h2 className="text-[32px] font-bold text-white tracking-[-0.02em]">Precision growth systems.</h2>
            </div>
            <a href="#" className="text-[14px] text-[#94A3B8] hover:text-white flex items-center gap-1 transition-colors group mt-4 md:mt-0">
              Explore all capabilities 
              <ChevronRight className="w-4 h-4 text-[rgba(255,255,255,0.2)] group-hover:text-white transition-colors" />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="group flex flex-col p-8 bg-[#13131A] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.2)] transition-colors focus-within:shadow-[0_0_0_1px_rgba(235,37,113,0.15)] relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Activity className="w-24 h-24 text-[#EB2571]" />
              </div>
              <div className="w-10 h-10 rounded-none bg-[rgba(235,37,113,0.1)] border border-[rgba(235,37,113,0.2)] flex items-center justify-center mb-6 text-[#EB2571]">
                <Activity className="w-5 h-5" />
              </div>
              <h3 className="text-[18px] font-semibold text-white mb-2 tracking-tight">Fractional CMO</h3>
              <p className="text-[14px] text-[#94A3B8] leading-[1.6] mb-6 flex-grow">
                Executive-level strategy and team leadership without the full-time overhead.
              </p>
              
              <div className="space-y-3 mb-8 pt-6 border-t border-[rgba(255,255,255,0.06)]">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#EB2571]" />
                  <span className="text-[13px] text-[#94A3B8]">C-Suite Strategy Alignment</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[rgba(255,255,255,0.2)]" />
                  <span className="text-[13px] text-[#94A3B8]">Team Hiring & Management</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[rgba(255,255,255,0.2)]" />
                  <span className="text-[13px] text-[#94A3B8]">Go-to-Market Execution</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-[rgba(255,255,255,0.06)] mt-auto">
                <div className="flex flex-col">
                  <span className="text-[11px] text-[#94A3B8] uppercase tracking-[0.05em] mb-1">Starting at</span>
                  <span className="text-[16px] font-semibold text-white">$7,500/mo</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group flex flex-col p-8 bg-[#13131A] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.2)] transition-colors focus-within:shadow-[0_0_0_1px_rgba(235,37,113,0.15)] relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Cpu className="w-24 h-24 text-[#EB2571]" />
              </div>
              <div className="w-10 h-10 rounded-none bg-[rgba(235,37,113,0.1)] border border-[rgba(235,37,113,0.2)] flex items-center justify-center mb-6 text-[#EB2571]">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-[18px] font-semibold text-white mb-2 tracking-tight">AI Automation</h3>
              <p className="text-[14px] text-[#94A3B8] leading-[1.6] mb-6 flex-grow">
                Custom AI workflows and agents designed to eliminate repetitive tasks and scale output.
              </p>
              
              <div className="space-y-3 mb-8 pt-6 border-t border-[rgba(255,255,255,0.06)]">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#EB2571]" />
                  <span className="text-[13px] text-[#94A3B8]">Custom LLM Integrations</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[rgba(255,255,255,0.2)]" />
                  <span className="text-[13px] text-[#94A3B8]">Automated Lead Nurturing</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[rgba(255,255,255,0.2)]" />
                  <span className="text-[13px] text-[#94A3B8]">Content Generation Pipelines</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-[rgba(255,255,255,0.06)] mt-auto">
                <div className="flex flex-col">
                  <span className="text-[11px] text-[#94A3B8] uppercase tracking-[0.05em] mb-1">Starting at</span>
                  <span className="text-[16px] font-semibold text-white">$5,000+</span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group flex flex-col p-8 bg-[#13131A] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.2)] transition-colors focus-within:shadow-[0_0_0_1px_rgba(235,37,113,0.15)] relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <TrendingUp className="w-24 h-24 text-[#EB2571]" />
              </div>
              <div className="w-10 h-10 rounded-none bg-[rgba(235,37,113,0.1)] border border-[rgba(235,37,113,0.2)] flex items-center justify-center mb-6 text-[#EB2571]">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-[18px] font-semibold text-white mb-2 tracking-tight">Growth Marketing</h3>
              <p className="text-[14px] text-[#94A3B8] leading-[1.6] mb-6 flex-grow">
                Data-driven campaigns across search, social, and email to acquire healthcare clients.
              </p>
              
              <div className="space-y-3 mb-8 pt-6 border-t border-[rgba(255,255,255,0.06)]">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#EB2571]" />
                  <span className="text-[13px] text-[#94A3B8]">Paid Search & Social</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[rgba(255,255,255,0.2)]" />
                  <span className="text-[13px] text-[#94A3B8]">Conversion Rate Optimization</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[rgba(255,255,255,0.2)]" />
                  <span className="text-[13px] text-[#94A3B8]">Analytics & Attribution</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-[rgba(255,255,255,0.06)] mt-auto">
                <div className="flex flex-col">
                  <span className="text-[11px] text-[#94A3B8] uppercase tracking-[0.05em] mb-1">Starting at</span>
                  <span className="text-[16px] font-semibold text-white">$1,500/mo</span>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>
    </div>
  );
}
