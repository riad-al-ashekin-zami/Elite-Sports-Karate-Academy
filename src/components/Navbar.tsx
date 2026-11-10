import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { CONTACT_INFO } from '../types.ts';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Founder', href: '#founder' },
    { label: 'Why Train', href: '#why-train' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0B0B]/95 backdrop-blur-md border-b border-neutral-800/80 shadow-lg shadow-black/40 py-3'
          : 'bg-gradient-to-b from-[#0B0B0B]/90 via-[#0B0B0B]/60 to-transparent py-4 md:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#"
            className="flex items-baseline gap-2 group whitespace-nowrap shrink-0 text-decoration-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E11D2E]"
            aria-label="Elite Sports Karate Academy - Home"
          >
            <span className="font-display text-2xl sm:text-3xl tracking-wider text-white uppercase group-hover:text-neutral-200 transition-colors">
              ELITE SPORTS
            </span>
            <span className="font-display text-sm sm:text-base tracking-widest text-[#E11D2E] uppercase font-semibold">
              Karate Academy
            </span>
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav
            className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-300"
            aria-label="Primary Navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap shrink-0 hover:text-white transition-colors relative py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E11D2E] rounded"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Mobile Menu Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded text-xs sm:text-sm font-bold tracking-wider uppercase text-white bg-[#E11D2E] hover:bg-[#C51624] active:scale-95 transition-all shadow-md shadow-[#E11D2E]/20 whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <Phone className="w-3.5 h-3.5 fill-current" />
              <span>Call Now</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded text-neutral-300 hover:text-white hover:bg-neutral-800/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E11D2E]"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B0B0B]/98 border-b border-neutral-800 px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="px-3 py-2.5 rounded text-base font-medium text-neutral-200 hover:text-white hover:bg-neutral-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-neutral-800 flex flex-col gap-2">
              <a
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 py-3 rounded text-sm font-bold uppercase tracking-wider text-white bg-[#E11D2E] hover:bg-[#C51624] transition-colors"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call {CONTACT_INFO.phone}</span>
              </a>
              <p className="text-xs text-neutral-400 text-center pt-1 font-bengali">
                মোহাম্মদপুর, ঢাকা • ভর্তি চলছে
              </p>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
