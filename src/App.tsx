import React from 'react';
import { DottedMatrixCanvas } from './components/DottedMatrixCanvas';
import { Navbar } from './components/Navbar';
import { SubHeaderBar } from './components/SubHeaderBar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { TechStackTools } from './components/TechStackTools';
import { EducationCertifications } from './components/EducationCertifications';

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
        <Hero />

        {/* 01: About Section */}
        <About />

        {/* 02: Tech Stack & Tools Section (Continuous alternating marquees) */}
        <TechStackTools />

        {/* 03: Education & Certifications Section (Scroll-driven bidirectional slide) */}
        <EducationCertifications />

        {/* Career & Labs Status Section */}
        <section id="projects" className="border-t border-white/10 py-16 bg-[#090909]">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 font-mono text-xs uppercase tracking-wider text-neutral-400">
            <div>
              <div className="flex items-center gap-2 text-white font-semibold text-sm mb-1">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>NOC & CLOUD INFRASTRUCTURE</span>
              </div>
              <span>BIM Group of Companies · WaveMoney Network Operations · AWS & Azure Labs</span>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="mailto:naingmoeaung51@gmail.com"
                className="px-5 py-3 bg-white text-black font-semibold hover:bg-neutral-200 transition-all flex items-center gap-2"
              >
                <span>CONTACT NAING MOE AUNG</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Minimal Footer */}
      <footer id="contact" className="border-t border-white/10 py-8 bg-[#050505] relative z-10 font-mono text-xs text-neutral-500">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 uppercase tracking-widest">
          <span>© 2026 NAING MOE AUNG · ALL RIGHTS RESERVED</span>
          <span>BIM GROUP OF COMPANIES • WAVEMONEY</span>
        </div>
      </footer>
    </div>
  );
};

export default App;
