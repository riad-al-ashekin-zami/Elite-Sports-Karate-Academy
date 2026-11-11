import React from 'react';
import { Maximize2, Sparkles, ArrowRight } from 'lucide-react';
import { GALLERY_PHOTOS } from '../types.ts';
import { ImageWithFallback } from './ImageWithFallback.tsx';
import { useLightbox } from '../context/LightboxContext.tsx';

export const Gallery: React.FC = () => {
  const { openPhoto } = useLightbox();

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
              Authentic training sessions, belt disciplines, and martial arts practice for all ages. Click any photo to view in full screen.
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
          {GALLERY_PHOTOS.map((photo) => (
            <div
              key={photo.id}
              onClick={() => openPhoto(photo.id)}
              className="group cursor-pointer rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-black/50"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openPhoto(photo.id);
                }
              }}
              aria-label={`View full image: ${photo.caption}`}
            >
              <div className="relative overflow-hidden aspect-[4/3] bg-neutral-950">
                <ImageWithFallback
                  src={photo.src}
                  alt={photo.alt}
                  caption={photo.caption}
                  aspectRatio="4/3"
                  photoId={photo.id}
                  allowFullscreen={false} // Handled by outer card
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Hover overlay with maximize icon */}
                <div className="absolute inset-0 bg-neutral-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center p-4">
                  <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-neutral-900/90 border border-neutral-700 text-white text-xs font-semibold shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Maximize2 className="w-4 h-4 text-[#E11D2E]" />
                    <span>View Full Image</span>
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
              <div className="p-4 bg-neutral-900 border-t border-neutral-800/80 flex items-center justify-between gap-2">
                <p className="text-xs sm:text-sm text-neutral-200 font-medium leading-snug line-clamp-2">
                  {photo.caption}
                </p>
                <Maximize2 className="w-4 h-4 text-neutral-500 group-hover:text-[#E11D2E] shrink-0 transition-colors" />
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

              {/* Banner image slot (Clickable to view full) */}
              <div
                onClick={() => openPhoto('academy-banner')}
                className="rounded-lg overflow-hidden border border-neutral-800 bg-neutral-950 mb-4 aspect-[16/9] cursor-pointer relative group/banner"
                role="button"
                tabIndex={0}
                aria-label="View full banner"
              >
                <ImageWithFallback
                  src="/images/academy-banner.jpg"
                  alt="Elite Sports Karate Academy promotional banner - Train Hard. Be Stronger."
                  caption="Elite Sports Karate Academy Official Banner"
                  aspectRatio="16/9"
                  photoId="academy-banner"
                  allowFullscreen={false}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover/banner:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/banner:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-white bg-black/80 px-2.5 py-1 rounded-full border border-neutral-700">
                    <Maximize2 className="w-3 h-3 text-[#E11D2E]" />
                    View Full Banner
                  </span>
                </div>
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
    </section>
  );
};
