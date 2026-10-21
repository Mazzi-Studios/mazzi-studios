import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, ChevronDown } from 'lucide-react';
import { serviceNavigation } from '@/data/services';

const serviceMenu = [{ name: 'All Services', href: '/services' }, ...serviceNavigation];
const serviceHrefs = serviceMenu.map((s) => s.href);

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
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<number | undefined>(undefined);
  const servicesActive = serviceHrefs.includes(location);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  }, [location]);

  useEffect(() => {
    if (!servicesOpen) return;
    const onDown = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) setServicesOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setServicesOpen(false); triggerRef.current?.focus(); }
    };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('mousedown', onDown); document.removeEventListener('keydown', onKey); };
  }, [servicesOpen]);

  const openMenu = () => { window.clearTimeout(closeTimer.current); setServicesOpen(true); };
  const scheduleClose = () => { window.clearTimeout(closeTimer.current); closeTimer.current = window.setTimeout(() => setServicesOpen(false), 150); };
  const focusItem = (dir: 1 | -1) => {
    const items = Array.from(dropdownRef.current?.querySelectorAll<HTMLAnchorElement>('[data-menu-item]') ?? []);
    const idx = items.indexOf(document.activeElement as HTMLAnchorElement);
    const next = idx === -1 ? (dir === 1 ? 0 : items.length - 1) : (idx + dir + items.length) % items.length;
    items[next]?.focus();
  };

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

        {/* Logo full color */}
        <Link href="/" className="z-50 shrink-0" aria-label="Mazzi Studios home">
          <img
            src="/brand-assets/mazzi-logo.png"
            alt="Mazzi Studios"
            className="h-7 sm:h-8 w-auto object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-8">
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={openMenu}
            onMouseLeave={scheduleClose}
            onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget as Node)) setServicesOpen(false); }}
            onKeyDown={(e) => {
              if (e.key === 'ArrowDown') { e.preventDefault(); setServicesOpen(true); requestAnimationFrame(() => focusItem(1)); }
              if (e.key === 'ArrowUp' && servicesOpen) { e.preventDefault(); focusItem(-1); }
            }}
          >
            <button
              ref={triggerRef}
              type="button"
              data-testid="button-nav-services"
              aria-haspopup="true"
              aria-expanded={servicesOpen}
              aria-controls="services-menu"
              onClick={(e) => {
                window.clearTimeout(closeTimer.current);
                setServicesOpen((open) => e.detail === 0 ? !open : true);
              }}
              className="flex items-center gap-1 text-[12px] uppercase tracking-wider font-semibold transition-colors duration-200 hover:text-[#EB2571]"
              style={{ color: servicesActive || servicesOpen ? '#EB2571' : '#111111' }}
            >
              Services
              <ChevronDown size={14} aria-hidden="true" className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            <div
              id="services-menu"
              className="absolute left-1/2 top-full pt-4 -translate-x-1/2"
              style={{ visibility: servicesOpen ? 'visible' : 'hidden', opacity: servicesOpen ? 1 : 0, transition: 'opacity 150ms' }}
            >
              <ul className="w-[300px] bg-white text-[#111111] py-2" style={{ border: '1px solid rgba(0,0,0,0.08)', borderTop: '2px solid #EB2571', boxShadow: '0 12px 32px rgba(8,8,16,0.12)' }}>
                {serviceMenu.map((item, i) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      data-menu-item
                      data-testid={`link-nav-service-${item.href.slice(1)}`}
                      tabIndex={servicesOpen ? 0 : -1}
                      onClick={() => setServicesOpen(false)}
                      className={`block px-5 py-3 text-[13px] font-semibold hover:bg-[#EB2571]/5 hover:text-[#EB2571] focus:bg-[#EB2571]/5 focus:text-[#EB2571] focus:outline-none transition-colors ${i === 0 ? 'uppercase tracking-wider text-[11px] border-b border-black/5 mb-1' : ''}`}
                      style={{ color: location === item.href ? '#EB2571' : undefined }}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {navLinks.filter((l) => l.name !== 'Services').map((link) => (
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
        aria-hidden={!mobileMenuOpen}
        inert={!mobileMenuOpen}
        style={{
          background: '#080810',
          opacity: mobileMenuOpen ? 1 : 0,
          pointerEvents: mobileMenuOpen ? 'all' : 'none',
          transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(-12px)',
        }}
      >
        {/* Top row logo + close */}
        <div className="flex shrink-0 items-center justify-between px-4 pt-4 pb-6" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
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
        <nav
          className="flex min-h-0 flex-col flex-1 justify-start px-6 py-4 gap-1 overflow-y-auto"
          onClick={(e) => {
            if ((e.target as Element).closest('a')) {
              setMobileMenuOpen(false);
              setMobileServicesOpen(false);
            }
          }}
        >
          {navLinks.map((link, i) => link.name === 'Services' ? (
            <div key="services" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <button
                type="button"
                data-testid="button-mobile-services"
                aria-expanded={mobileServicesOpen}
                aria-controls="mobile-services-list"
                onClick={() => setMobileServicesOpen((v) => !v)}
                className="w-full flex items-center justify-between py-4 text-[32px] font-['Bebas_Neue'] tracking-wide"
                style={{ color: servicesActive ? '#EB2571' : '#F5F0EB' }}
              >
                Services
                <ChevronDown size={24} aria-hidden="true" className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileServicesOpen && (
                <ul id="mobile-services-list" className="pb-4 pl-4 space-y-1">
                  {serviceMenu.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        data-testid={`link-mobile-service-${item.href.slice(1)}`}
                        className="block py-2 text-[15px] font-semibold"
                        style={{ color: location === item.href ? '#EB2571' : '#cfcfcf' }}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ) : (
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
        <div className="shrink-0 px-6 pb-10 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full text-center text-white text-[13px] font-bold uppercase tracking-widest py-4 transition-opacity hover:opacity-85"
            style={{ background: '#EB2571', borderRadius: 0 }}
          >
            Book a Strategy Call
          </Link>
          <p className="text-center text-[#cfcfcf] text-[11px] uppercase tracking-widest mt-4">
            Miami · National Reach
          </p>
        </div>
      </div>
    </header>
  );
}
