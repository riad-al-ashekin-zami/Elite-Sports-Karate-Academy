import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { CONTACT_INFO } from '../types.ts';

export const MobileCallBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show mobile call button after scrolling slightly down past initial hero CTA
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="md:hidden fixed bottom-4 right-4 z-40 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
      style={{ maxHeight: '10vh' }}
    >
      <a
        href={`tel:${CONTACT_INFO.phoneRaw}`}
        className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-[#E11D2E] text-white font-bold text-sm tracking-wider uppercase shadow-2xl shadow-black/80 hover:bg-[#C51624] active:scale-95 border-2 border-white/20 transition-all focus:outline-none focus-visible:ring-4 focus-visible:ring-red-400"
        aria-label={`Call Elite Sports Karate Academy at ${CONTACT_INFO.phone}`}
      >
        <Phone className="w-4 h-4 fill-current animate-pulse" />
        <span>Call Now</span>
      </a>
    </div>
  );
};
