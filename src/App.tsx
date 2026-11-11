/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { WhyTrain } from './components/WhyTrain.tsx';
import { Founder } from './components/Founder.tsx';
import { InternationalExperience } from './components/InternationalExperience.tsx';
import { Gallery } from './components/Gallery.tsx';
import { Contact } from './components/Contact.tsx';
import { Footer } from './components/Footer.tsx';
import { MobileCallBar } from './components/MobileCallBar.tsx';
import { LightboxProvider } from './context/LightboxContext.tsx';
import { LightboxModal } from './components/LightboxModal.tsx';

export default function App() {
  return (
    <LightboxProvider>
      <div className="min-h-screen bg-[#0B0B0B] text-white flex flex-col font-sans selection:bg-[#E11D2E] selection:text-white relative">
        {/* 1. NAVBAR */}
        <Navbar />

      <main className="flex-grow">
        {/* 2. HERO */}
        <Hero />

        {/* 3. ABOUT THE ACADEMY */}
        <About />

        {/* 4. WHY TRAIN WITH US */}
        <WhyTrain />

        {/* 5. MEET THE FOUNDER */}
        <Founder />

        {/* 6. INTERNATIONAL EXPERIENCE (World Open Taekwondo Championship 2026) */}
        <InternationalExperience />

        {/* 7. OUR DOJO & STUDENTS */}
        <Gallery />

        {/* 8. CONTACT / JOIN NOW */}
        <Contact />
      </main>

        {/* 9. FOOTER */}
        <Footer />

        {/* Mobile Floating Action: Call */}
        <MobileCallBar />

        {/* Global Fullscreen Lightbox Modal for all site photos */}
        <LightboxModal />
      </div>
    </LightboxProvider>
  );
}
