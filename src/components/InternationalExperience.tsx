import React from 'react';
import { Globe2, MapPin, Calendar, Building2, Trophy } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback.tsx';

export const InternationalExperience: React.FC = () => {
  return (
    <section id="international" className="py-20 md:py-28 bg-[#0E0E0E] border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-widest text-[#E11D2E] font-mono font-semibold mb-2">
            Global Competition
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-wide">
            International <span className="text-[#E11D2E]">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-[#E11D2E] mt-3 mb-4" />
          <p className="text-neutral-400 text-sm sm:text-base max-w-2xl">
            Representing sporting passion and competitive dedication on international tournament grounds.
          </p>
        </div>

        {/* Highlighted Event Card */}
        <div className="p-6 sm:p-8 md:p-10 rounded-2xl bg-gradient-to-br from-neutral-900 via-neutral-900 to-[#1F1214] border border-neutral-800 shadow-2xl mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-neutral-800/80">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#E11D2E]/20 text-[#E11D2E] text-xs font-mono font-semibold tracking-wider uppercase mb-3">
                <Globe2 className="w-3.5 h-3.5" />
                Verified Championship Entry
              </div>
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-white uppercase tracking-wider mb-2">
                1st World Open Taekwondo Championship 2026
              </h3>
              <p className="text-sm sm:text-base text-neutral-300 font-medium">
                Founder Md Masud competed at this premier international championship held in Hyderabad, India.
              </p>
            </div>

            <div className="shrink-0 p-4 rounded-xl bg-neutral-950/70 border border-neutral-800 text-center lg:text-right">
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest block">
                Official Event Dates
              </span>
              <span className="font-display text-xl text-white tracking-wider block mt-1">
                21 – 23 August 2026
              </span>
            </div>
          </div>

          {/* Verified Backdrop Event Metadata Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-[#E11D2E] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block">Dates</span>
                <span className="text-sm font-semibold text-neutral-200">21–23 August 2026</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Building2 className="w-5 h-5 text-[#E11D2E] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block">Organised By</span>
                <span className="text-sm font-semibold text-neutral-200 leading-snug">
                  Amical Sports Academy in association with J.R. International Taekwondo Academy
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#E11D2E] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block">Venue & Location</span>
                <span className="text-sm font-semibold text-neutral-200 leading-snug">
                  G.M.C. Balayogi Indoor Stadium, Gachibowli, Hyderabad, Telangana, India
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Trophy className="w-5 h-5 text-[#E11D2E] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block">Representation</span>
                <span className="text-sm font-semibold text-neutral-200">
                  Elite Sports Karate Academy Founder Participation
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Championship Photos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Photo 1: championship-plaque.jpg */}
          <div className="flex flex-col gap-2.5">
            <div className="rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-md group">
              <ImageWithFallback
                src="/images/championship-plaque.jpg"
                alt="A woman in a black blazer presenting a plaque to a man in a black vest in front of the championship backdrop"
                caption="Presentation of a plaque in front of the championship backdrop"
                focalPoint="top"
                aspectRatio="4/3"
                className="w-full h-64 object-cover"
              />
            </div>
            <p className="text-xs text-neutral-400 text-center leading-relaxed">
              Presentation of a plaque in front of the championship backdrop
            </p>
          </div>

          {/* Photo 2: championship-stage.jpg */}
          <div className="flex flex-col gap-2.5">
            <div className="rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-md group">
              <ImageWithFallback
                src="/images/championship-stage.jpg"
                alt="Large group photo on stage at the championship with many national flags on the backdrop"
                caption="Group gathering on stage at the championship with national flags on the backdrop"
                focalPoint="center"
                aspectRatio="4/3"
                className="w-full h-64 object-cover"
              />
            </div>
            <p className="text-xs text-neutral-400 text-center leading-relaxed">
              Group gathering on stage at the championship with national flags on the backdrop
            </p>
          </div>

          {/* Photo 3: founder-medal-ceremony.jpg */}
          <div className="flex flex-col gap-2.5">
            <div className="rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-md group">
              <ImageWithFallback
                src="/images/founder-medal-ceremony.jpg"
                alt="A woman in a black blazer handing a medal to a competitor in a white uniform with a green belt in front of the championship backdrop"
                caption="Medal presentation in front of the championship backdrop"
                focalPoint="top"
                aspectRatio="4/3"
                className="w-full h-64 object-cover"
              />
            </div>
            <p className="text-xs text-neutral-400 text-center leading-relaxed">
              Medal presentation in front of the championship backdrop
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
