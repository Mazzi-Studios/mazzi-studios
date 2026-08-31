import { useEffect, useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Services', href: '/services' },
  { name: 'Work', href: '/work' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Tools', href: '/tools' },
  { name: 'AEO Playbook', href: '/playbook' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: '#ffffff',
        borderBottom: '1px solid rgba(0,0,0,0.08)',
        padding: '12px 0',
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">

        {/* Logo — full color */}
        <Link href="/" className="z-50 shrink-0" aria-label="Mazzi Studios home">
          <img
            src="/brand-assets/mazzi-logo.png"
            alt="Mazzi Studios"
            className="h-7 sm:h-8 w-auto object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[12px] uppercase tracking-wider font-semibold transition-colors duration-200"
              style={{ color: location === link.href ? '#EB2571' : '#111111' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#EB2571')}
              onMouseLeave={e => (e.currentTarget.style.color = location === link.href ? '#EB2571' : '#111111')}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-white text-[11px] font-bold uppercase tracking-widest px-5 py-3 transition-opacity duration-200 hover:opacity-85 shrink-0"
            style={{ background: '#EB2571', borderRadius: 0 }}
          >
            Book a Call
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden z-50 p-2 -mr-2"
          style={{ color: '#111111' }}
          onClick={() => setMobileMenuOpen(v => !v)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? <X size={22} color="#ffffff" /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile full-screen overlay */}
      <div
        className="md:hidden fixed inset-0 flex flex-col transition-all duration-300"
        style={{
          background: '#080810',
          opacity: mobileMenuOpen ? 1 : 0,
          pointerEvents: mobileMenuOpen ? 'all' : 'none',
          transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(-12px)',
        }}
      >
        {/* Top row — logo + close */}
        <div className="flex items-center justify-between px-4 pt-4 pb-6" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <img
            src="/brand-assets/mazzi-logo.png"
            alt="Mazzi Studios"
            className="h-7 w-auto object-contain"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 text-[#cfcfcf]"
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col flex-1 justify-center px-6 gap-1">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-4 text-[32px] font-['Bebas_Neue'] tracking-wide transition-colors duration-150"
              style={{
                color: location === link.href ? '#EB2571' : '#F5F0EB',
                borderBottom: i < navLinks.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
              }}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Bottom CTA */}
        <div className="px-6 pb-10 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <Link
            href="/contact"
            className="block w-full text-center text-white text-[13px] font-bold uppercase tracking-widest py-4 transition-opacity hover:opacity-85"
            style={{ background: '#EB2571', borderRadius: 0 }}
          >
            Book Your Strategy Call
          </Link>
          <p className="text-center text-[#cfcfcf] text-[11px] uppercase tracking-widest mt-4">
            Miami · National Reach
          </p>
        </div>
      </div>
    </header>
  );
}
