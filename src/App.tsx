import React from 'react';
import { DottedMatrixCanvas } from './components/DottedMatrixCanvas';
import { Navbar } from './components/Navbar';
import { SubHeaderBar } from './components/SubHeaderBar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { TechStackTools } from './components/TechStackTools';
import { EducationCertifications } from './components/EducationCertifications';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#060606] text-white selection:bg-white selection:text-black relative">
      {/* Interactive Dotted Matrix Background */}
      <DottedMatrixCanvas />

      {/* Navigation Bar & Info Ticker */}
      <Navbar />
      <SubHeaderBar />

      {/* Main Portfolio Sections */}
      <main className="relative z-10">
        {/* Hero Section */}
        <Hero />

        {/* 01: About Section */}
        <About />

        {/* 02: Tech Stack & Tools Section (Continuous alternating marquees) */}
        <TechStackTools />

        {/* 03: Education & Certifications Section (Scroll-driven pinned horizontal slide) */}
        <EducationCertifications />

        {/* 04: Experience & NOC Operations Section */}
        <ExperienceSection />

        {/* 05: Contact & Dispatch Section */}
        <ContactSection />
      </main>

      {/* Minimal Footer */}
      <footer className="border-t border-white/10 py-8 bg-[#050505] relative z-10 font-mono text-xs text-neutral-500">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 uppercase tracking-widest">
          <span>© 2026 NAING MOE AUNG · ALL RIGHTS RESERVED</span>
          <span>BIM GROUP OF COMPANIES • WAVEMONEY</span>
        </div>
      </footer>
    </div>
  );
};

export default App;
