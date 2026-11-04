import React, { useState } from 'react';

export const Navbar: React.FC = () => {
  const [lang, setLang] = useState<'EN' | 'MM'>('EN');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#060606]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 h-16 flex items-center justify-between font-mono text-xs tracking-wider">
        {/* Brand Left */}
        <a
          href="#top"
          className="text-white hover:text-neutral-300 font-semibold tracking-widest text-sm flex items-center gap-1.5 uppercase"
        >
          <span>NAING.MOE.AUNG</span>
        </a>

        {/* Center Nav Links & Emblem */}
        <nav className="hidden md:flex items-center gap-8 text-neutral-400">
          <a
            href="#about"
            className="hover:text-white transition-colors flex items-center gap-1.5 group"
          >
            <span className="text-[10px] text-neutral-600 group-hover:text-neutral-400">01</span>
            <span className="font-semibold text-white">ABOUT</span>
          </a>

          <a
            href="#experience"
            className="hover:text-white transition-colors flex items-center gap-1.5 group"
          >
            <span className="text-[10px] text-neutral-600 group-hover:text-neutral-400">02</span>
            <span>EXPERIENCE</span>
          </a>

          {/* Center Framed Emblem */}
          <div className="border border-white/20 px-2.5 py-1 text-white font-bold tracking-widest text-xs bg-white/5">
            NMA
          </div>

          <a
            href="#projects"
            className="hover:text-white transition-colors flex items-center gap-1.5 group"
          >
            <span className="text-[10px] text-neutral-600 group-hover:text-neutral-400">03</span>
            <span>LABS</span>
          </a>

          <a
            href="#contact"
            className="hover:text-white transition-colors flex items-center gap-1.5 group"
          >
            <span className="text-[10px] text-neutral-600 group-hover:text-neutral-400">04</span>
            <span>CONTACT</span>
          </a>
        </nav>

        {/* Language Switcher & Mobile Trigger */}
        <div className="flex items-center gap-4">
          <div className="flex items-center border border-white/15 text-[11px] overflow-hidden">
            <button
              type="button"
              onClick={() => setLang('MM')}
              className={`px-2.5 py-1 transition-colors ${
                lang === 'MM'
                  ? 'bg-white text-black font-semibold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              MM
            </button>
            <span className="w-[1px] h-3 bg-white/10" />
            <button
              type="button"
              onClick={() => setLang('EN')}
              className={`px-2.5 py-1 transition-colors ${
                lang === 'EN'
                  ? 'bg-white text-black font-semibold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              EN
            </button>
          </div>

          <button
            type="button"
            className="md:hidden border border-white/20 p-2 text-white hover:bg-white/10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? '✕' : '≡'}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#080808] px-6 py-6 space-y-4 font-mono text-xs tracking-wider">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-white border-b border-white/5"
          >
            01 ABOUT
          </a>
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-neutral-300 border-b border-white/5"
          >
            02 EXPERIENCE
          </a>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-neutral-300 border-b border-white/5"
          >
            03 LABS & PROJECTS
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-neutral-300"
          >
            04 CONTACT
          </a>
        </div>
      )}
    </header>
  );
};
