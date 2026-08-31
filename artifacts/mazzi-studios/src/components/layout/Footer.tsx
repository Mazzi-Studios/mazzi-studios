import { Link } from 'wouter';
import { Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#080810] border-t border-[#EB2571]/15 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-16">
          
          {/* Brand Col */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="mb-2">
              <img
                src="/brand-assets/mazzi-logo.png"
                alt="Mazzi Studios"
                className="h-7 w-auto object-contain"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </Link>
            <p className="text-[#cfcfcf] text-[13px] uppercase tracking-widest leading-relaxed">
              AI-Powered Marketing Leadership for Healthcare and B2B.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a href="mailto:team@mazzistudios.com" className="text-[#cfcfcf] hover:text-[#EB2571] transition-colors">
                <Mail size={20} />
              </a>
              <div className="flex items-center gap-1 text-[#cfcfcf]">
                <MapPin size={18} />
                <span className="text-[13px] uppercase tracking-widest">Miami, FL</span>
              </div>
            </div>
          </div>

          {/* Services Col */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[#F5F0EB] font-semibold text-[13px] uppercase tracking-widest mb-2">Services</h4>
            <Link href="/fractional-cmo" className="text-[#cfcfcf] hover:text-[#F5F0EB] text-[13px] uppercase tracking-widest transition-colors">Fractional CMO</Link>
            <Link href="/ai-automation" className="text-[#cfcfcf] hover:text-[#F5F0EB] text-[13px] uppercase tracking-widest transition-colors">AI Automation</Link>
            <Link href="/services#web" className="text-[#cfcfcf] hover:text-[#F5F0EB] text-[13px] uppercase tracking-widest transition-colors">Websites & Dev</Link>
            <Link href="/services#linkedin" className="text-[#cfcfcf] hover:text-[#F5F0EB] text-[13px] uppercase tracking-widest transition-colors">LinkedIn Marketing</Link>
            <Link href="/services#ppc" className="text-[#cfcfcf] hover:text-[#F5F0EB] text-[13px] uppercase tracking-widest transition-colors">PPC Management</Link>
            <Link href="/services#strategy" className="text-[#cfcfcf] hover:text-[#F5F0EB] text-[13px] uppercase tracking-widest transition-colors">Strategy Sprints</Link>
          </div>

          {/* Company Col */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[#F5F0EB] font-semibold text-[13px] uppercase tracking-widest mb-2">Company</h4>
            <Link href="/about" className="text-[#cfcfcf] hover:text-[#F5F0EB] text-[13px] uppercase tracking-widest transition-colors">About Us</Link>
            <Link href="/work" className="text-[#cfcfcf] hover:text-[#F5F0EB] text-[13px] uppercase tracking-widest transition-colors">Our Work</Link>
            <Link href="/blog" className="text-[#cfcfcf] hover:text-[#F5F0EB] text-[13px] uppercase tracking-widest transition-colors">Insights & Blog</Link>
            <Link href="/tools" className="text-[#cfcfcf] hover:text-[#F5F0EB] text-[13px] uppercase tracking-widest transition-colors">Marketing Tools</Link>
            <Link href="/playbook" className="text-[#cfcfcf] hover:text-[#F5F0EB] text-[13px] uppercase tracking-widest transition-colors">AEO/GEO Playbook</Link>
            <Link href="/contact" className="text-[#cfcfcf] hover:text-[#F5F0EB] text-[13px] uppercase tracking-widest transition-colors">Contact</Link>
          </div>

          {/* Newsletter Col */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[#F5F0EB] font-semibold text-[13px] uppercase tracking-widest mb-2">Stay Updated</h4>
            <p className="text-[#cfcfcf] text-[13px] uppercase tracking-widest mb-2">
              Marketing and AI insights delivered monthly.
            </p>
            <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="bg-[#0F0F1C] border border-[#EB2571]/15 text-[#F5F0EB] px-4 py-3 text-[13px] uppercase tracking-widest focus:outline-none focus:border-[#EB2571] w-full"
                style={{ borderRadius: 0 }}
                required
              />
              <button 
                type="submit" 
                className="bg-[#EB2571] text-white px-6 py-3 font-bold uppercase tracking-widest text-xs border-0 hover:opacity-90 transition-opacity w-full text-left"
                style={{ borderRadius: 0 }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-[#EB2571]/15 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#cfcfcf] text-[13px] uppercase tracking-widest">
            © 2026 Mazzi Studios. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-[#cfcfcf] text-[13px] uppercase tracking-widest bg-[#0F0F1C] border border-[#EB2571]/15 px-3 py-1">AI-Powered</span>
            <span className="text-[#cfcfcf] text-[13px] uppercase tracking-widest bg-[#0F0F1C] border border-[#EB2571]/15 px-3 py-1">HIPAA-Compliant Ready</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
