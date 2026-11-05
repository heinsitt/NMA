import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[calc(100vh-130px)] flex flex-col justify-between pt-12 pb-8 overflow-hidden">
      {/* Halftone Ambient Glow / Background Silhouette */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[500px] opacity-15 pointer-events-none rounded-full bg-gradient-to-l from-white/20 via-white/5 to-transparent blur-3xl" />

      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 relative z-10 flex-1 flex flex-col justify-between">
        {/* Top Status Kicker */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2.5 font-mono text-[11px] sm:text-xs tracking-wider text-neutral-400 uppercase mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse" />
          <span className="text-white font-medium">[ 00 ]</span>
          <span className="text-neutral-600">·</span>
          <span>CURRENTLY SYSTEM ENGINEER AT BIM GROUP OF COMPANIES</span>
        </motion.div>

        {/* Center Grid: Giant Headline & Floating Bio Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto">
          {/* Left Column: Giant Brutalist Typography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 space-y-1"
          >
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
          </motion.div>

          {/* Right Column: Bio Card with Actions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 lg:pl-4"
          >
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
          </motion.div>
        </div>

        {/* Bottom Giant Name Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="pt-10 select-none border-t border-white/10 mt-8"
        >
          <div className="w-full flex items-center justify-center overflow-visible px-2 sm:px-4">
            <h2 className="font-syne font-extrabold uppercase tracking-tight text-[clamp(1.75rem,5.5vw,5.6rem)] leading-tight text-white whitespace-nowrap text-center opacity-95 hover:text-cyan-300 transition-colors duration-300">
              NAING MOE AUNG
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono uppercase text-neutral-500 pt-3 tracking-widest gap-2">
            <span>SYSTEM ENGINEER & ASPIRING CLOUD ARCHITECT — 2026</span>
            <span>99.99% UPTIME MINDSET</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
