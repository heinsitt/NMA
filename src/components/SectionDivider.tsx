import React from 'react';
import { motion } from 'framer-motion';

interface SectionDividerProps {
  index?: string;
  label?: string;
  reverse?: boolean;
  delay?: number;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({
  index,
  label,
  reverse = false,
  delay = 0,
}) => {
  return (
    <div className="relative w-full overflow-hidden select-none z-20 py-1">
      {/* 1. Base Hairline Track with Soft Edge Vignettes */}
      <div className="relative w-full h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent">
        {/* Primary Animated Traveling Photon Beam */}
        <motion.div
          initial={{ x: reverse ? '110vw' : '-30vw' }}
          animate={{ x: reverse ? '-30vw' : '110vw' }}
          transition={{
            duration: 6.5,
            repeat: Infinity,
            ease: 'linear',
            delay: delay,
          }}
          className="absolute top-0 -translate-y-1/2 h-[2px] w-44 sm:w-80 bg-gradient-to-r from-transparent via-cyan-400 to-transparent blur-[0.6px] shadow-[0_0_14px_rgba(34,211,238,0.8)]"
        />

        {/* Secondary Delicate Counter-Flow Data Stream */}
        <motion.div
          initial={{ x: reverse ? '-20vw' : '110vw' }}
          animate={{ x: reverse ? '110vw' : '-20vw' }}
          transition={{
            duration: 9.5,
            repeat: Infinity,
            ease: 'linear',
            delay: delay + 1.8,
          }}
          className="absolute top-0 -translate-y-1/2 h-[1px] w-28 sm:w-48 bg-gradient-to-r from-transparent via-teal-300/70 to-transparent blur-[0.3px]"
        />
      </div>

      {/* 2. Center Telemetry HUD Marker */}
      {label && (
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative -mt-[11px] flex items-center justify-between pointer-events-none">
          {/* Left Circuit Node */}
          <div className="hidden lg:flex items-center gap-2 font-mono text-[9px] text-neutral-600 tracking-widest uppercase">
            <span className="text-neutral-500">+</span>
            <span>BUS.TX_RX</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/60 inline-block animate-pulse" />
          </div>

          {/* Center Micro Badge */}
          <div className="mx-auto flex items-center gap-2.5 px-3 py-0.5 border border-white/10 bg-[#06080d]/90 backdrop-blur-md font-mono text-[9.5px] uppercase tracking-wider text-neutral-400 shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee] animate-pulse" />
            {index && <span className="text-white font-semibold">{index}</span>}
            {index && <span className="text-neutral-600">/</span>}
            <span className="text-neutral-300 font-medium">{label}</span>
          </div>

          {/* Right Circuit Node */}
          <div className="hidden lg:flex items-center gap-2 font-mono text-[9px] text-neutral-600 tracking-widest uppercase">
            <span>ISOLATED_SEGMENT</span>
            <span className="text-neutral-500">+</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SectionDivider;
