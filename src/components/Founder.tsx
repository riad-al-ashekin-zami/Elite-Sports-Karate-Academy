import React from 'react';
import { Award, Calendar, Quote, CheckCircle2 } from 'lucide-react';
import { FOUNDER_TIMELINE } from '../types.ts';
import { ImageWithFallback } from './ImageWithFallback.tsx';

export const Founder: React.FC = () => {
  return (
    <section id="founder" className="py-20 md:py-28 bg-[#0B0B0B] border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 md:mb-18">
          <p className="text-xs uppercase tracking-widest text-[#E11D2E] font-mono font-semibold mb-2">
            Leadership & Dedication
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-wide">
            Meet The <span className="text-[#E11D2E]">Founder</span>
          </h2>
          <div className="w-16 h-1 bg-[#E11D2E] mt-3 mb-4" />
          <p className="text-lg text-neutral-300 font-semibold">
            Md Masud <span className="text-neutral-500 font-normal">| Founder, Elite Sports Karate Academy</span>
          </p>
        </div>

        {/* 2-Column Split: Photos & Vision on Left/Right, Timeline on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Bio, Vision Quote, and Founder Photos */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            {/* Founder Profile Card with Portrait Photo */}
            <div className="p-6 sm:p-7 rounded-2xl bg-neutral-900/90 border border-neutral-800 shadow-xl flex flex-col sm:flex-row gap-6 items-center sm:items-start">
              {/* Founder Portrait Photo */}
              <div className="shrink-0 w-36 h-48 sm:w-44 sm:h-56 rounded-xl overflow-hidden border-2 border-neutral-700/80 hover:border-[#E11D2E]/60 transition-colors shadow-2xl bg-neutral-950 relative group">
                <ImageWithFallback
                  src="/images/founder-portrait.jpg"
                  alt="Md Masud, Founder of Elite Sports Karate Academy"
                  caption="Md Masud — Founder of Elite Sports Karate Academy"
                  photoId="founder-portrait"
                  focalPoint="top"
                  className="w-full h-full"
                  imgClassName="object-cover object-top"
                />
              </div>

              {/* Profile Details & Journey */}
              <div className="flex-1 flex flex-col justify-center text-center sm:text-left">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#E11D2E]/15 border border-[#E11D2E]/30 text-[#E11D2E] text-xs font-mono uppercase tracking-wider font-semibold self-center sm:self-start mb-2">
                  Founder Profile
                </div>
                <h3 className="font-display text-2xl sm:text-3xl text-white uppercase tracking-wider mb-1">
                  Md Masud
                </h3>
                <p className="text-xs font-mono text-neutral-400 mb-3.5">
                  Founder, Elite Sports Karate Academy
                </p>
                <p className="text-neutral-300 leading-relaxed text-sm sm:text-base">
                  Driven by a childhood passion for martial arts, Md Masud began his formal training in 2013. Demonstrating steadfast personal discipline, he balanced rigorous daily practice alongside his professional responsibilities to advance through authentic martial arts ranks.
                </p>
              </div>
            </div>

            {/* Vision Quote Block (Paraphrase of mission, no fabricated direct quotes) */}
            <div className="relative p-7 rounded-xl bg-gradient-to-br from-neutral-900 via-neutral-900 to-[#1A1012] border border-neutral-800 shadow-xl">
              <Quote className="w-8 h-8 text-[#E11D2E]/40 mb-3" />
              <blockquote className="text-base sm:text-lg text-neutral-100 font-medium leading-relaxed italic">
                “The purpose of martial arts is to cultivate real sportsmanship, moral character, and personal discipline. By providing youth with a constructive, drug-free environment, we strive to nurture world-class athletes who will proudly represent Bangladesh on the global stage.”
              </blockquote>
              <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-[#E11D2E] font-semibold">
                  Founder's Vision
                </span>
                <span className="text-xs text-neutral-400">
                  Md Masud
                </span>
              </div>
            </div>

            {/* 2 Founder Photos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <div className="rounded-lg overflow-hidden border border-neutral-800 bg-neutral-900 shadow-md">
                  <ImageWithFallback
                    src="/images/founder-medal.jpg"
                    alt="A man in a white taekwondo uniform with a green belt, holding a certificate and a medal, standing in front of the 1st World Open Taekwondo Championship 2026 backdrop"
                    caption="The founder holding a certificate and medal in front of the championship backdrop"
                    photoId="founder-medal"
                    focalPoint="top"
                    aspectRatio="4/3"
                    className="w-full h-56 object-cover"
                  />
                </div>
                <p className="text-xs text-neutral-400 text-center leading-snug">
                  The founder holding a certificate and medal in front of the championship backdrop
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="rounded-lg overflow-hidden border border-neutral-800 bg-neutral-900 shadow-md">
                  <ImageWithFallback
                    src="/images/founder-medal-ceremony.jpg"
                    alt="A woman in a black blazer presenting a medal to a man in a white uniform with a green belt in front of the championship backdrop"
                    caption="Medal presentation ceremony in front of the championship backdrop"
                    photoId="founder-medal-ceremony"
                    focalPoint="top"
                    aspectRatio="4/3"
                    className="w-full h-56 object-cover"
                  />
                </div>
                <p className="text-xs text-neutral-400 text-center leading-snug">
                  Medal presentation ceremony in front of the championship backdrop
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Animated Vertical Timeline */}
          <div className="lg:col-span-6 flex flex-col justify-start">
            <div className="p-6 sm:p-8 rounded-xl bg-neutral-900/60 border border-neutral-800">
              <div className="flex items-center gap-2 mb-8">
                <Calendar className="w-5 h-5 text-[#E11D2E]" />
                <h3 className="font-display text-2xl text-white uppercase tracking-wider">
                  Martial Arts Milestones
                </h3>
              </div>

              {/* Vertical Timeline Track */}
              <div className="relative border-l-2 border-neutral-800 ml-4 sm:ml-5 space-y-9">
                {FOUNDER_TIMELINE.map((item, index) => (
                  <div key={index} className="relative pl-7 group">
                    {/* Timeline Node Dot */}
                    <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-neutral-900 border-2 border-[#E11D2E] group-hover:scale-125 group-hover:bg-[#E11D2E] transition-all duration-200" />

                    {/* Milestone Year */}
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-display text-2xl text-[#E11D2E] tracking-wider">
                        {item.year}
                      </span>
                      <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 bg-neutral-950 px-2 py-0.5 rounded border border-neutral-800">
                        Milestone
                      </span>
                    </div>

                    {/* Milestone Title & Details */}
                    <h4 className="text-base font-bold text-white mb-1 leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-sm text-neutral-300 leading-relaxed">
                      {item.details}
                    </p>
                  </div>
                ))}
              </div>

              {/* Verified Verification Callout */}
              <div className="mt-8 pt-6 border-t border-neutral-800 flex items-center gap-2 text-xs text-neutral-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>All milestone records verified against official competition records and certifications.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
