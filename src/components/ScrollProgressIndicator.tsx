import React, { useEffect, useState } from 'react';

interface Waypoint {
  id: string;
  num: string;
  label: string;
  title: string;
}

const WAYPOINTS: Waypoint[] = [
  { id: 'about', num: '01', label: 'ABOUT', title: 'Background & Strengths' },
  { id: 'tools', num: '02', label: 'TECH STACK', title: 'Production Toolset' },
  { id: 'education', num: '03', label: 'EDUCATION', title: '12 Degrees & Certifications' },
  { id: 'projects', num: '04', label: 'PROJECTS', title: 'Cloud Architecture & Labs' },
  { id: 'experience', num: '05', label: 'EXPERIENCE', title: 'BIM & WaveMoney Operations' },
  { id: 'contact', num: '06', label: 'CONTACT', title: 'Connect & Inquiries' },
];

export const ScrollProgressIndicator: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('about');
  const [scrollPercent, setScrollPercent] = useState<number>(0);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate overall page scroll percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100)) : 0;
      setScrollPercent(Math.round(progress));

      // Determine active section based on vertical scroll offset
      const sectionIds = ['contact', 'experience', 'projects', 'education', 'tools', 'about'];
      let current = 'about';

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Triggers when section top is near upper third of viewport
          if (rect.top <= window.innerHeight * 0.45) {
            current = id;
            break;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside
      aria-label="Page section navigation"
      className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-end select-none pointer-events-auto"
    >
      {/* HUD Telemetry Header */}
      <div className="font-mono text-[9px] uppercase tracking-widest text-neutral-500 mb-3 flex items-center gap-1.5 pr-0.5">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_6px_#22d3ee]" />
        <span className="tabular-nums text-cyan-300 font-semibold">{scrollPercent}%</span>
      </div>

      {/* Main Waypoint Track */}
      <div className="relative py-2 flex flex-col items-end gap-5">
        {/* Subtle Background Guide Line */}
        <div className="absolute right-[5px] top-0 bottom-0 w-[1px] bg-white/10 pointer-events-none" />

        {/* Dynamic Glowing Progress Hairline */}
        <div
          className="absolute right-[5px] top-0 w-[1px] bg-gradient-to-b from-cyan-400 via-teal-300 to-cyan-500 pointer-events-none transition-all duration-75 shadow-[0_0_8px_rgba(34,211,238,0.6)]"
          style={{ height: `${scrollPercent}%` }}
        />

        {/* Waypoint Interactive Nodes */}
        {WAYPOINTS.map((wp) => {
          const isActive = activeSection === wp.id;
          const isHovered = hoveredId === wp.id;

          return (
            <div
              key={wp.id}
              className="relative flex items-center group cursor-pointer"
              onMouseEnter={() => setHoveredId(wp.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => handleScrollTo(wp.id)}
              data-cursor="pointer"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleScrollTo(wp.id);
                }
              }}
              aria-label={`Scroll to ${wp.label} section`}
              aria-current={isActive ? 'true' : 'false'}
            >
              {/* Flyout Obsidian Glass Tooltip (Visible on hover or active highlight) */}
              <div
                className={`absolute right-7 font-mono text-[10px] tracking-wider transition-all duration-200 pointer-events-none whitespace-nowrap flex items-center gap-2 border px-2.5 py-1 backdrop-blur-md shadow-2xl ${
                  isHovered
                    ? 'opacity-100 translate-x-0 border-cyan-400/50 bg-[#070c14]/95 text-white'
                    : isActive
                    ? 'opacity-80 translate-x-0 border-white/20 bg-black/80 text-neutral-300'
                    : 'opacity-0 translate-x-2 border-transparent bg-transparent pointer-events-none'
                }`}
              >
                <span className={`font-bold ${isActive ? 'text-cyan-400' : 'text-neutral-500'}`}>
                  {wp.num}
                </span>
                <span className="font-medium uppercase">{wp.label}</span>
                {isHovered && (
                  <span className="text-[9px] text-neutral-400 pl-1 border-l border-white/10 hidden lg:inline">
                    {wp.title}
                  </span>
                )}
              </div>

              {/* Waypoint Indicator Dash / Notch */}
              <div className="relative flex items-center justify-center p-1">
                <div
                  className={`transition-all duration-300 rounded-none ${
                    isActive
                      ? 'w-4 h-1.5 bg-cyan-300 shadow-[0_0_12px_#22d3ee]'
                      : isHovered
                      ? 'w-3 h-1 bg-white shadow-[0_0_6px_rgba(255,255,255,0.6)]'
                      : 'w-2 h-0.5 bg-neutral-600 group-hover:bg-neutral-400'
                  }`}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Axis Label */}
      <div className="font-mono text-[8px] uppercase tracking-widest text-neutral-600 mt-3 pr-0.5">
        <span>NAV</span>
      </div>
    </aside>
  );
};

export default ScrollProgressIndicator;
