import React, { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight, Terminal, Shield } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('top');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionIds = ['contact', 'experience', 'education', 'tools', 'about', 'top'];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', label: 'ABOUT', num: '01' },
    { id: 'tools', label: 'TECH STACK', num: '02' },
    { id: 'education', label: 'EDUCATION & CERTS', num: '03' },
    { id: 'experience', label: 'EXPERIENCE', num: '04' },
    { id: 'contact', label: 'CONTACT', num: '05' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 font-mono text-xs ${
        scrolled
          ? 'bg-[#06080c]/90 backdrop-blur-md border-b border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.8)]'
          : 'bg-[#06080c]/60 backdrop-blur-sm border-b border-white/5'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
        {/* Brand Left: High-Craft Monogram & Title */}
        <a
          href="#top"
          className="flex items-center gap-3 text-white group select-none transition-opacity hover:opacity-90"
        >
          <div className="w-8 h-8 rounded-none border border-cyan-500/30 bg-cyan-950/40 flex items-center justify-center font-bold text-cyan-400 group-hover:border-cyan-400 transition-colors shadow-[0_0_12px_rgba(34,211,238,0.15)]">
            <Terminal size={15} />
          </div>

          <div className="flex flex-col">
            <div className="font-semibold text-sm tracking-widest text-white uppercase flex items-center gap-1.5">
              <span>NAING MOE AUNG</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse" />
            </div>
            <span className="text-[10px] text-neutral-400 tracking-wider">
              SYSTEM & CLOUD INFRASTRUCTURE
            </span>
          </div>
        </a>

        {/* Center Nav Links (No useless NMA button, clean modern pill list) */}
        <nav className="hidden lg:flex items-center gap-1.5 p-1 border border-white/10 bg-black/40 rounded-full backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`px-3.5 py-1.5 rounded-full transition-all duration-200 flex items-center gap-1.5 tracking-wider ${
                  isActive
                    ? 'bg-white text-black font-semibold shadow-sm'
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <span
                  className={`text-[9.5px] font-mono ${
                    isActive ? 'text-neutral-700' : 'text-neutral-600'
                  }`}
                >
                  {link.num}
                </span>
                <span>{link.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Right Actions: Availability Badge & High-Contrast CTA */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 border border-white/10 bg-white/5 text-neutral-300 text-[11px] tracking-wider">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>YANGON UTC+6:30</span>
          </div>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-white text-black font-semibold uppercase tracking-wider hover:bg-neutral-200 transition-all text-xs"
          >
            <span>GET IN TOUCH</span>
            <ArrowUpRight size={14} />
          </a>

          <button
            type="button"
            className="lg:hidden border border-white/20 p-2 text-white hover:bg-white/10 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown with Enhanced Styling */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/10 bg-[#070b10] px-6 py-6 space-y-3 font-mono text-xs tracking-wider shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-2.5 px-3 border border-white/5 hover:border-cyan-500/30 hover:bg-cyan-950/20 text-neutral-300 hover:text-white transition-all"
            >
              <span>{link.label}</span>
              <span className="text-neutral-600 text-[10px]">{link.num}</span>
            </a>
          ))}

          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 bg-white text-black font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 text-center transition-all"
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
