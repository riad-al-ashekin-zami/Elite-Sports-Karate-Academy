import React from 'react';
import { Shield, Target, Award, Heart } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback.tsx';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#0B0B0B] border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-widest text-[#E11D2E] font-mono font-semibold mb-2">
            The Mission
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-wide">
            About The <span className="text-[#E11D2E]">Academy</span>
          </h2>
          <div className="w-16 h-1 bg-[#E11D2E] mt-3" />
        </div>

        {/* 2-Column Split: Copy on Left, Photo on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Mission Copy */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <p className="text-lg sm:text-xl text-neutral-200 font-medium leading-relaxed">
              Elite Sports Karate Academy was established with a clear, noble purpose: to build authentic sportsmanship and personal balance, far beyond mere physical exercise.
            </p>

            <p className="text-neutral-300 leading-relaxed">
              We teach practical self-defence skills within a positive, highly disciplined environment designed to nurture character, mental fortitude, and purpose — actively keeping youth focused on healthy pursuits and away from drugs.
            </p>

            <p className="text-neutral-300 leading-relaxed">
              Our long-term commitment is to develop and prepare world-class athletes capable of representing Bangladesh in international championships, bringing pride and honour to the nation.
            </p>

            {/* Core Mission Pillars based strictly on the mission facts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-neutral-800/80">
              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-neutral-900/60 border border-neutral-800">
                <Shield className="w-5 h-5 text-[#E11D2E] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">Practical Self-Defence</h3>
                  <p className="text-xs text-neutral-400 mt-0.5">Real-world safety, spatial awareness, and reflexive composure.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-neutral-900/60 border border-neutral-800">
                <Heart className="w-5 h-5 text-[#E11D2E] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">Positive Youth Environment</h3>
                  <p className="text-xs text-neutral-400 mt-0.5">Strong discipline that channels youth energy positively, away from drugs.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-neutral-900/60 border border-neutral-800">
                <Target className="w-5 h-5 text-[#E11D2E] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">Personal Balance</h3>
                  <p className="text-xs text-neutral-400 mt-0.5">Fostering true sportsmanship, humility, and mental clarity.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-neutral-900/60 border border-neutral-800">
                <Award className="w-5 h-5 text-[#E11D2E] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">Representing Bangladesh</h3>
                  <p className="text-xs text-neutral-400 mt-0.5">Preparing athletes for international championships to bring honour to the nation.</p>
                </div>
              </div>
            </div>

            {/* Dojo environment callout */}
            <div className="p-4 rounded-lg bg-[#E11D2E]/10 border border-[#E11D2E]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-[#E11D2E] font-semibold">
                  Dojo Feature
                </p>
                <p className="text-sm text-neutral-200 mt-0.5">
                  The dojo features a dedicated <span className="text-white font-semibold">red mat</span> training area, welcoming students of all ages, boys and girls.
                </p>
              </div>
              <span className="text-xs font-bengali text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded border border-amber-400/20 whitespace-nowrap">
                ছেলে ও মেয়ে উভয়ের জন্য
              </span>
            </div>
          </div>

          {/* Photo beside text */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <div className="rounded-xl overflow-hidden border border-neutral-800 shadow-2xl bg-neutral-900 group">
              <ImageWithFallback
                src="/images/dojo-training.jpg"
                alt="Punching drill during a class, led by the black-belt instructor"
                caption="Punching drill during a class, led by the black-belt instructor"
                aspectRatio="4/3"
                className="w-full h-80 sm:h-96 object-cover"
              />
            </div>
            <p className="text-xs text-neutral-400 text-center italic font-sans">
              "Punching drill during a class, led by the black-belt instructor"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
