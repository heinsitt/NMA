import React, { useState } from 'react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#060606]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 h-16 flex items-center justify-between font-mono text-xs tracking-wider">
        {/* Brand Left */}
        <a
          href="#top"
          className="text-white hover:text-neutral-300 font-semibold tracking-widest text-sm flex items-center gap-2 uppercase group"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform" />
          <span>NAING.MOE.AUNG</span>
        </a>

        {/* Center Nav Links & Emblem */}
        <nav className="hidden md:flex items-center gap-7 text-neutral-400">
          <a
            href="#about"
            className="hover:text-white transition-colors flex items-center gap-1.5 group"
          >
            <span className="text-[10px] text-neutral-600 group-hover:text-neutral-400">01</span>
            <span className="font-semibold text-white">ABOUT</span>
          </a>

          <a
            href="#tools"
            className="hover:text-white transition-colors flex items-center gap-1.5 group"
          >
            <span className="text-[10px] text-neutral-600 group-hover:text-neutral-400">02</span>
            <span>TECH STACK</span>
          </a>

          {/* Center Framed Emblem */}
          <div className="border border-white/20 px-2.5 py-1 text-white font-bold tracking-widest text-xs bg-white/5">
            NMA
          </div>

          <a
            href="#education"
            className="hover:text-white transition-colors flex items-center gap-1.5 group"
          >
            <span className="text-[10px] text-neutral-600 group-hover:text-neutral-400">03</span>
            <span>EDUCATION & CERTS</span>
          </a>

          <a
            href="#contact"
            className="hover:text-white transition-colors flex items-center gap-1.5 group"
          >
            <span className="text-[10px] text-neutral-600 group-hover:text-neutral-400">04</span>
            <span>CONTACT</span>
          </a>
        </nav>

        {/* Action Button & Mobile Trigger */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 border border-white/20 hover:border-white hover:bg-white/5 text-white transition-all uppercase tracking-wider text-[11px]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>CONNECT</span>
          </a>

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
            href="#tools"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-neutral-300 border-b border-white/5"
          >
            02 TECH STACK & TOOLS
          </a>
          <a
            href="#education"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-neutral-300 border-b border-white/5"
          >
            03 EDUCATION & CERTS
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
