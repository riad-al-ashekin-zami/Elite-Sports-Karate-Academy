import React, { useState, useEffect } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, Sparkles, ArrowRight } from 'lucide-react';
import { GALLERY_PHOTOS, GalleryPhoto } from '../types.ts';
import { ImageWithFallback } from './ImageWithFallback.tsx';

export const Gallery: React.FC = () => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === 'Escape') setSelectedPhotoIndex(null);
      if (e.key === 'ArrowRight') {
        setSelectedPhotoIndex((prev) => (prev !== null ? (prev + 1) % GALLERY_PHOTOS.length : 0));
      }
      if (e.key === 'ArrowLeft') {
        setSelectedPhotoIndex((prev) =>
          prev !== null ? (prev - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length : 0
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex]);

  const activePhoto: GalleryPhoto | null =
    selectedPhotoIndex !== null ? GALLERY_PHOTOS[selectedPhotoIndex] : null;

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#0B0B0B] border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#E11D2E] font-mono font-semibold mb-2">
              Dojo Environment & Practice
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-wide">
              Our Dojo & <span className="text-[#E11D2E]">Students</span>
            </h2>
            <div className="w-16 h-1 bg-[#E11D2E] mt-3 mb-4" />
            <p className="text-neutral-400 text-sm sm:text-base max-w-xl">
              Authentic training sessions, belt disciplines, and martial arts practice for all ages.
            </p>
          </div>

          {/* Red Mat Dojo Highlight Callout */}
          <div className="p-4 rounded-xl bg-neutral-900/90 border border-neutral-800 flex items-center gap-3 self-start md:self-auto">
            <div className="w-4 h-4 rounded bg-[#E11D2E] shrink-0 shadow-sm shadow-[#E11D2E]/50" />
            <p className="text-xs text-neutral-300">
              <strong className="text-white font-medium">Dedicated Red Mat Dojo:</strong> All age groups, boys and girls.
            </p>
          </div>
        </div>

        {/* Gallery Grid: 5 Student Photos + 1 Academy Banner Promo Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_PHOTOS.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhotoIndex(index)}
              className="group cursor-pointer rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-black/50"
            >
              <div className="relative overflow-hidden aspect-[4/3] bg-neutral-950">
                <ImageWithFallback
                  src={photo.src}
                  alt={photo.alt}
                  caption={photo.caption}
                  aspectRatio="4/3"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Hover overlay with maximize icon */}
                <div className="absolute inset-0 bg-neutral-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center p-4">
                  <div className="p-3 rounded-full bg-neutral-900/90 border border-neutral-700 text-white shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Maximize2 className="w-5 h-5 text-[#E11D2E]" />
                  </div>
                </div>

                {/* Category tag */}
                <div className="absolute top-3 left-3">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-300 bg-neutral-950/80 px-2.5 py-1 rounded border border-neutral-800 backdrop-blur-sm">
                    {photo.category}
                  </span>
                </div>
              </div>

              {/* Exact Caption */}
              <div className="p-4 bg-neutral-900">
                <p className="text-xs sm:text-sm text-neutral-200 font-medium leading-snug line-clamp-2">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}

          {/* 6th Card: Academy Promotional Banner Card (academy-banner.jpg) */}
          <div className="rounded-xl overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-900 to-[#221013] border-2 border-[#E11D2E]/40 hover:border-[#E11D2E] transition-all duration-300 flex flex-col justify-between p-6 group">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-400 text-neutral-950 text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 fill-current" />
                  Admission Open
                </span>
                <span className="text-xs font-bengali text-amber-300">ভর্তি চলছে</span>
              </div>

              {/* Banner image slot */}
              <div className="rounded-lg overflow-hidden border border-neutral-800 bg-neutral-950 mb-4 aspect-[16/9]">
                <ImageWithFallback
                  src="/images/academy-banner.jpg"
                  alt="Elite Sports Karate Academy promotional banner - Train Hard. Be Stronger."
                  caption="Elite Sports Karate Academy Official Banner"
                  aspectRatio="16/9"
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="font-display text-2xl text-white uppercase tracking-wider mb-2">
                Join Our Next Batch
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-4">
                Structured training for children, teens, and adults. Experience the transformational discipline of authentic karate.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded bg-[#E11D2E] hover:bg-[#C51624] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md shadow-[#E11D2E]/20"
            >
              <span>Enroll / Inquire Now</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhotoIndex !== null && activePhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.caption}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setSelectedPhotoIndex(null)}
            className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-neutral-900/90 text-neutral-300 hover:text-white border border-neutral-700 hover:bg-neutral-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E11D2E]"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous button */}
          <button
            type="button"
            onClick={() =>
              setSelectedPhotoIndex((prev) =>
                prev !== null ? (prev - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length : 0
              )
            }
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-neutral-900/80 text-white border border-neutral-700 hover:bg-neutral-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E11D2E]"
            aria-label="Previous Photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            type="button"
            onClick={() =>
              setSelectedPhotoIndex((prev) => (prev !== null ? (prev + 1) % GALLERY_PHOTOS.length : 0))
            }
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-neutral-900/80 text-white border border-neutral-700 hover:bg-neutral-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E11D2E]"
            aria-label="Next Photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main Photo Container */}
          <div className="max-w-4xl w-full flex flex-col items-center max-h-[90vh]">
            <div className="relative rounded-lg overflow-hidden border border-neutral-800 bg-neutral-950 w-full max-h-[75vh] flex items-center justify-center">
              <img
                src={activePhoto.src}
                alt={activePhoto.alt}
                referrerPolicy="no-referrer"
                className="max-h-[75vh] max-w-full w-auto h-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              {/* Fallback if image not loaded */}
              <div className="p-12 text-center">
                <p className="text-neutral-400 font-mono text-xs uppercase tracking-widest mb-2">
                  Elite Sports Karate Academy Photo
                </p>
                <h3 className="text-xl font-bold text-white max-w-md mx-auto mb-2">
                  {activePhoto.caption}
                </h3>
              </div>
            </div>

            {/* Lightbox Caption Strip */}
            <div className="w-full mt-4 p-4 rounded-lg bg-neutral-900/90 border border-neutral-800 text-center">
              <p className="text-sm sm:text-base text-neutral-100 font-medium">
                {activePhoto.caption}
              </p>
              <div className="mt-1 text-xs text-neutral-400 font-mono">
                Photo {selectedPhotoIndex + 1} of {GALLERY_PHOTOS.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
