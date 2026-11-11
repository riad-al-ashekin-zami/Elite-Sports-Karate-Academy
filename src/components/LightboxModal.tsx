import React from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { useLightbox } from '../context/LightboxContext.tsx';

export const LightboxModal: React.FC = () => {
  const { isOpen, activePhoto, closeLightbox, nextPhoto, prevPhoto, currentIndex, totalPhotos } =
    useLightbox();

  if (!isOpen || !activePhoto) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-3 sm:p-6 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label={activePhoto.caption}
      onClick={(e) => {
        // Close if clicked directly on the outer backdrop
        if (e.target === e.currentTarget) closeLightbox();
      }}
    >
      {/* Top Controls Bar */}
      <div className="w-full max-w-6xl mx-auto flex items-center justify-between gap-4 py-2 px-1 z-10 shrink-0">
        <div className="flex items-center gap-2.5">
          <span className="text-xs font-mono uppercase tracking-widest text-[#E11D2E] bg-neutral-900/90 border border-neutral-800 px-3 py-1 rounded-full font-semibold">
            {activePhoto.category}
          </span>
          <span className="text-xs font-mono text-neutral-400">
            Photo {currentIndex + 1} of {totalPhotos}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={closeLightbox}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-900/90 text-neutral-300 hover:text-white border border-neutral-700/80 hover:bg-neutral-800 transition-colors text-xs font-medium cursor-pointer"
            aria-label="Close Fullscreen View"
          >
            <X className="w-4 h-4" />
            <span className="hidden sm:inline">Close</span>
          </button>
        </div>
      </div>

      {/* Main Image Stage with Nav Arrows */}
      <div className="relative flex-1 flex items-center justify-center w-full max-w-6xl mx-auto my-auto overflow-hidden py-2">
        {/* Previous Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            prevPhoto();
          }}
          className="absolute left-1 sm:left-4 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3.5 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-white border border-neutral-700/80 shadow-xl transition-all hover:scale-105 active:scale-95 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E11D2E]"
          aria-label="Previous Photo"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* The Full Image - Centered and Cleanly Sized */}
        <div
          className="relative max-h-[68vh] sm:max-h-[72vh] max-w-full flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={activePhoto.src}
            alt={activePhoto.alt}
            referrerPolicy="no-referrer"
            className="max-h-[68vh] sm:max-h-[72vh] max-w-[92vw] md:max-w-4xl w-auto h-auto object-contain rounded-lg shadow-2xl border border-neutral-800/80 select-none"
          />
        </div>

        {/* Next Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            nextPhoto();
          }}
          className="absolute right-1 sm:right-4 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3.5 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-white border border-neutral-700/80 shadow-xl transition-all hover:scale-105 active:scale-95 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E11D2E]"
          aria-label="Next Photo"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Bottom Full Caption Strip - Centered horizontally, never squashed */}
      <div className="w-full max-w-3xl mx-auto text-center shrink-0 pt-2 pb-1 z-10">
        <div className="bg-neutral-900/90 border border-neutral-800 px-5 py-3 rounded-xl shadow-lg backdrop-blur-sm">
          <p className="text-sm sm:text-base text-neutral-100 font-medium leading-relaxed">
            {activePhoto.caption}
          </p>
          <p className="text-[11px] font-mono text-neutral-500 mt-1 hidden sm:block">
            Use ← and → keys to browse • Esc to close
          </p>
        </div>
      </div>
    </div>
  );
};
