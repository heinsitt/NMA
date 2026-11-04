import React from 'react';
import { DottedMatrixCanvas } from './components/DottedMatrixCanvas';
import { Navbar } from './components/Navbar';
import { SubHeaderBar } from './components/SubHeaderBar';
import { Hero } from './components/Hero';
import { About } from './components/About';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#060606] text-white selection:bg-white selection:text-black relative">
      {/* Interactive Dotted Matrix Background */}
      <DottedMatrixCanvas />

      {/* Session 1: Navigation Bar & Info Ticker */}
      <Navbar />
      <SubHeaderBar />

      {/* Session 1: Hero Section */}
      <main className="relative z-10">
        <Hero />

        {/* Session 2: About Section */}
        <About />

        {/* Next Sessions Preview Banner */}
        <section id="projects" className="border-t border-white/10 py-16 bg-[#090909]">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 font-mono text-xs uppercase tracking-wider text-neutral-400">
            <div>
              <div className="flex items-center gap-2 text-white font-semibold text-sm mb-1">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>SESSION 1 & 2 COMPLETED</span>
              </div>
              <span>Ready for Session 3 (Skills & Tools) and Session 4 (Experience & WaveMoney NOC Timeline)</span>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="mailto:naingmoeaung51@gmail.com"
                className="px-5 py-3 bg-white text-black font-semibold hover:bg-neutral-200 transition-all"
              >
                CONTACT NAING MOE AUNG →
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
