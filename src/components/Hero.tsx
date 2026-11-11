import React from 'react';
import { Phone, ExternalLink, Sparkles, ChevronDown, Maximize2 } from 'lucide-react';
import { CONTACT_INFO } from '../types.ts';
import { useLightbox } from '../context/LightboxContext.tsx';

export const Hero: React.FC = () => {
  const { openPhoto } = useLightbox();
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#0B0B0B]"
    >
      {/* Background with dojo group photo fallback and rich martial arts scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/dojo-group.jpg"
          alt="Academy members and students at the dojo"
          referrerPolicy="no-referrer"
          loading="eager"
          fetchPriority="high"
          className="w-full h-full object-cover object-center scale-105 filter brightness-45 contrast-105"
        />
        {/* Layered dark scrim for high contrast legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/85 to-[#0B0B0B]/60" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#0B0B0B]/50 to-[#0B0B0B]" />
        
        {/* Subtle red martial arts atmospheric glow */}
        <div className="absolute -top-32 right-1/4 w-96 h-96 bg-[#E11D2E]/15 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Decorative Japanese Kanji: 空手道 (Karate-do) */}
      <div
        className="absolute right-4 sm:right-12 top-1/2 -translate-y-1/2 z-0 pointer-events-none select-none text-neutral-800/40 font-serif text-7xl sm:text-9xl lg:text-[14rem] font-black tracking-widest flex flex-col items-center leading-none opacity-40 hover:opacity-50 transition-opacity"
        aria-hidden="true"
      >
        <span>空</span>
        <span>手</span>
        <span>道</span>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Yellow Admission Open Badge (Admission Open — ভর্তি চলছে) */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400 text-neutral-950 font-bold text-xs sm:text-sm tracking-wide shadow-lg shadow-amber-400/20 mb-6">
          <Sparkles className="w-4 h-4 fill-neutral-950 text-neutral-950" />
          <span>Admission Open — <span className="font-bengali font-semibold">ভর্তি চলছে</span></span>
        </div>

        {/* H1 Heading */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wider text-white uppercase leading-[0.95] mb-5 text-balance">
          Elite Sports <span className="text-[#E11D2E]">Karate Academy</span>
        </h1>

        {/* Banner Tagline & Sub-values */}
        <p className="text-lg sm:text-xl md:text-2xl font-bold tracking-wide text-neutral-200 mb-2 uppercase font-display">
          Train Hard. Be Stronger.
        </p>

        <p className="text-sm sm:text-base md:text-lg text-neutral-300 font-medium tracking-normal max-w-2xl mb-6">
          Discipline • Fitness • Self Defence • A Better You
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto mb-7">
          <a
            href={`tel:${CONTACT_INFO.phoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded bg-[#E11D2E] hover:bg-[#C51624] text-white font-bold text-sm tracking-wider uppercase transition-all shadow-lg shadow-[#E11D2E]/25 hover:shadow-xl hover:shadow-[#E11D2E]/40 active:scale-98"
          >
            <Phone className="w-4 h-4 fill-current" />
            <span>Call {CONTACT_INFO.phone}</span>
          </a>

          <a
            href={CONTACT_INFO.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded bg-neutral-900/90 hover:bg-neutral-800 text-white font-bold text-sm tracking-wider uppercase border border-neutral-700/80 hover:border-neutral-500 transition-all active:scale-98"
          >
            <ExternalLink className="w-4 h-4 text-[#E11D2E]" />
            <span>Join on Facebook</span>
          </a>
        </div>

        {/* Bilingual Note from Banner */}
        <div className="text-xs sm:text-sm text-neutral-400 font-medium flex flex-col sm:flex-row items-center gap-1 sm:gap-2 bg-neutral-950/60 px-4 py-2 rounded-lg border border-neutral-800/80 backdrop-blur-sm">
          <span>Karate training for all ages — boys and girls.</span>
          <span className="hidden sm:inline text-neutral-600">•</span>
          <span className="font-bengali text-neutral-300">
            সকল বয়সের জন্য কারাতে প্রশিক্ষণ — ছেলে ও মেয়ে উভয়ের জন্য।
          </span>
        </div>

        {/* Option to view background dojo group photo in full */}
        <button
          type="button"
          onClick={() => openPhoto('dojo-group')}
          className="mt-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-700/80 text-xs font-medium transition-colors cursor-pointer"
        >
          <Maximize2 className="w-3.5 h-3.5 text-[#E11D2E]" />
          <span>View Dojo Photo in Full Screen</span>
        </button>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-neutral-500 hover:text-white transition-colors"
        aria-label="Scroll to About section"
      >
        <span className="text-[11px] uppercase tracking-widest font-mono">Explore</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
};
