import React from 'react';
import { Flame, Dumbbell, ShieldAlert, Brain, Users2 } from 'lucide-react';

export const WhyTrain: React.FC = () => {
  const cards = [
    {
      title: 'Karate Training',
      bengali: 'কারাতে প্রশিক্ষণ',
      desc: 'Authentic martial arts fundamentals, form discipline, and technical striking precision.',
      icon: <Flame className="w-7 h-7 text-[#E11D2E]" />,
    },
    {
      title: 'Physical Fitness',
      bengali: 'শারীরিক সুস্থতা',
      desc: 'Complete full-body conditioning building stamina, flexibility, balance, and athletic agility.',
      icon: <Dumbbell className="w-7 h-7 text-[#E11D2E]" />,
    },
    {
      title: 'Self Defence',
      bengali: 'আত্মরক্ষা',
      desc: 'Practical, real-world personal defence techniques and proactive situational awareness.',
      icon: <ShieldAlert className="w-7 h-7 text-[#E11D2E]" />,
    },
    {
      title: 'Mental Strength & Confidence',
      bengali: 'মানসিক শক্তি ও আত্মবিশ্বাস',
      desc: 'Developing sharp focus, self-discipline, resilience, and personal composure under pressure.',
      icon: <Brain className="w-7 h-7 text-[#E11D2E]" />,
    },
    {
      title: 'All Age Groups',
      bengali: 'সকল বয়সের জন্য',
      desc: 'Structured, safe, and progressive karate instruction for children, teens, and adults — boys and girls.',
      icon: <Users2 className="w-7 h-7 text-[#E11D2E]" />,
    },
  ];

  return (
    <section id="why-train" className="py-20 md:py-28 bg-[#0E0E0E] border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <p className="text-xs uppercase tracking-widest text-[#E11D2E] font-mono font-semibold mb-2">
            Pillars of Excellence
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-wide">
            Why Train <span className="text-[#E11D2E]">With Us</span>
          </h2>
          <div className="w-16 h-1 bg-[#E11D2E] mx-auto mt-3 mb-4" />
          <p className="text-neutral-400 text-sm sm:text-base">
            Guided by the core principles highlighted on our academy banner:
          </p>
        </div>

        {/* 5 Icon Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.slice(0, 3).map((item, index) => (
            <div
              key={index}
              className="p-7 rounded-xl bg-neutral-900/90 border border-neutral-800 hover:border-neutral-700 transition-all duration-200 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="p-3 w-fit rounded-lg bg-neutral-800/80 border border-neutral-700/60 mb-5 group-hover:bg-[#E11D2E]/10 group-hover:border-[#E11D2E]/30 transition-colors">
                  {item.icon}
                </div>
                <h3 className="font-display text-xl sm:text-2xl text-white uppercase tracking-wider mb-1">
                  {item.title}
                </h3>
                <p className="text-xs font-bengali text-neutral-400 mb-3">
                  {item.bengali}
                </p>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}

          {/* Bottom 2 Cards (Centered on large screens) */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto w-full">
            {cards.slice(3, 5).map((item, index) => (
              <div
                key={index + 3}
                className="p-7 rounded-xl bg-neutral-900/90 border border-neutral-800 hover:border-neutral-700 transition-all duration-200 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="p-3 w-fit rounded-lg bg-neutral-800/80 border border-neutral-700/60 mb-5 group-hover:bg-[#E11D2E]/10 group-hover:border-[#E11D2E]/30 transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl text-white uppercase tracking-wider mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs font-bengali text-neutral-400 mb-3">
                    {item.bengali}
                  </p>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
