import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[calc(100vh-130px)] flex flex-col justify-between pt-12 pb-8 overflow-hidden">
      {/* Halftone Ambient Glow / Background Silhouette */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[500px] opacity-15 pointer-events-none rounded-full bg-gradient-to-l from-white/20 via-white/5 to-transparent blur-3xl" />

      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 relative z-10 flex-1 flex flex-col justify-between">
        {/* Top Status Kicker */}
        <div className="flex items-center gap-2.5 font-mono text-[11px] sm:text-xs tracking-wider text-neutral-400 uppercase mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse" />
          <span className="text-white font-medium">[ 00 ]</span>
          <span className="text-neutral-600">·</span>
          <span>CURRENTLY SYSTEM ENGINEER AT BIM GROUP OF COMPANIES</span>
        </div>

        {/* Center Grid: Giant Headline & Floating Bio Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto">
          {/* Left Column: Giant Brutalist Typography */}
          <div className="lg:col-span-8 space-y-1">
            <h1 className="font-bebas tracking-tight leading-[0.88] select-none text-[clamp(4rem,10vw,9.5rem)]">
              <span className="block text-white">BUILDING</span>
              <span className="block text-stroke-white hover:text-white transition-colors duration-500">
                HIGH-AVAILABILITY
              </span>
              <span className="block text-white">INFRASTRUCTURE</span>
            </h1>

            {/* Target Crosshair */}
            <div className="pt-4 flex items-center gap-3">
              <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center">
                <span className="w-1.5 h-1.5 bg-white rounded-full" />
              </div>
              <div className="h-[1px] w-24 bg-white/10" />
            </div>
          </div>

          {/* Right Column: Bio Card with Actions */}
          <div className="lg:col-span-4 lg:pl-4">
            <div className="border border-white/15 bg-black/80 backdrop-blur-md p-6 sm:p-7 space-y-6 cross-corner shadow-2xl relative">
              <p className="text-neutral-300 text-xs sm:text-sm font-sans leading-relaxed">
                I architect and operate high-availability systems, cloud-native infrastructure, and automated networks that ensure 99.99% uptime. From on-premise hypervisors to cloud deployment.
              </p>

              <div className="flex flex-wrap gap-3 font-mono text-xs uppercase tracking-wider pt-2">
                <a
                  href="#projects"
                  className="px-4 py-3 border border-white/20 text-white hover:border-white hover:bg-white/5 transition-all text-center flex-1 sm:flex-none"
                >
                  SEE PROJECTS
                </a>
                <a
                  href="#contact"
                  className="px-5 py-3 bg-white text-black font-semibold hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 flex-1 sm:flex-none"
                >
                  <span>GET IN TOUCH</span>
                  <span className="text-sm">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Giant Name Marquee (Inspired by christendijoux.com) */}
        <div className="pt-12 select-none border-t border-white/10 mt-8">
          <div className="w-full overflow-hidden">
            <h2 className="font-syne font-extrabold uppercase tracking-tighter text-[clamp(2.75rem,8.2vw,8.5rem)] leading-none text-white whitespace-nowrap text-center opacity-95">
              NAING MOE AUNG
            </h2>
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono uppercase text-neutral-500 pt-3 tracking-widest">
            <span>SYSTEM ENGINEER & ASPIRING CLOUD ARCHITECT — 2026</span>
            <span className="hidden sm:inline">99.99% UPTIME MINDSET</span>
          </div>
        </div>
      </div>
    </section>
  );
};
