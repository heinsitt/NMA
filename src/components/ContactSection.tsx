import React, { useState } from 'react';
import { Mail, Check, Copy, ArrowUpRight, MapPin, Globe, ShieldCheck } from 'lucide-react';
import { MotionReveal } from './MotionReveal';
import { MatrixRainCanvas } from './MatrixRainCanvas';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const emailAddress = 'naingmoeaung51@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#070b10] overflow-hidden">
      {/* Background Matrix Rain Digital Stream Animation */}
      <MatrixRainCanvas opacity={0.3} />

      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <MotionReveal className="mb-16">
          <div className="flex items-center gap-2.5 font-mono text-[11px] sm:text-xs tracking-wider text-neutral-400 uppercase mb-4">
            <span className="text-neutral-600">|</span>
            <span className="text-white font-medium">[ 06 / 06 ]</span>
            <span className="text-neutral-600">·</span>
            <span className="text-cyan-400">CONNECT & COLLABORATE</span>
          </div>

          <h2 className="font-bebas text-[clamp(3.5rem,8vw,7.5rem)] leading-[0.9] tracking-tight text-white select-none">
            START A CONVERSATION
          </h2>

          <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mt-4 font-sans leading-relaxed">
            Open to System Engineering, Cloud Infrastructure, and DevOps opportunities.
            Feel free to reach out directly via email or LinkedIn.
          </p>
        </MotionReveal>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Communication Card */}
          <MotionReveal className="lg:col-span-7" delay={0.1}>
            <div className="border border-white/15 bg-black/80 backdrop-blur-md p-6 sm:p-10 cross-corner shadow-2xl space-y-8">
            <div>
              <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest block mb-2">
                PRIMARY EMAIL INBOX
              </span>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 border border-white/10 bg-white/5">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-md bg-white/10 flex items-center justify-center text-white flex-shrink-0">
                    <Mail size={18} />
                  </div>
                  <span className="text-white font-mono text-sm sm:text-base font-semibold truncate">
                    {emailAddress}
                  </span>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="px-4 py-2 border border-white/20 hover:border-white hover:bg-white/10 text-white font-mono text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check size={14} className="text-emerald-400" />
                        <span className="text-emerald-400">COPIED!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        <span>COPY EMAIL</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${emailAddress}`}
                    className="px-4 py-2 bg-white text-black font-mono text-xs font-semibold uppercase tracking-wider hover:bg-neutral-200 transition-all flex items-center gap-1.5"
                  >
                    <span>SEND</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </div>

            {/* Social / Professional Profiles */}
            <div className="pt-6 border-t border-white/10 space-y-4">
              <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest block">
                PROFESSIONAL NETWORKS
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="border border-white/10 bg-white/5 hover:bg-white/10 p-4 flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src="/media/linkedin.png"
                      alt="LinkedIn"
                      className="w-7 h-7 object-contain"
                    />
                    <div>
                      <div className="text-white font-semibold text-sm">LinkedIn</div>
                      <div className="text-[11px] font-mono text-neutral-400">Naing Moe Aung</div>
                    </div>
                  </div>
                  <ArrowUpRight size={16} className="text-neutral-500 group-hover:text-white transition-colors" />
                </a>

                <div className="border border-white/10 bg-white/5 p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-mono text-xs font-bold">
                      24/7
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">Availability</div>
                      <div className="text-[11px] font-mono text-emerald-400">Open to Roles</div>
                    </div>
                  </div>
                  <ShieldCheck size={16} className="text-emerald-400" />
                </div>
              </div>
            </div>
          </div>
        </MotionReveal>

        {/* Right Column: Location & Operational Specification */}
        <MotionReveal className="lg:col-span-5" delay={0.2}>
          <div className="border border-white/15 bg-black/90 p-6 sm:p-8 cross-corner shadow-2xl space-y-6 font-mono text-xs uppercase tracking-wider">
            <div className="text-neutral-500 text-[11px] pb-2 border-b border-white/10 font-bold">
              ENGINEERING DISPATCH SPECIFICATION
            </div>

            <div className="space-y-4 divide-y divide-white/5">
              <div className="flex justify-between items-baseline pt-2">
                <span className="text-neutral-500">LOCATION</span>
                <span className="text-white font-medium text-right flex items-center gap-1.5">
                  <MapPin size={12} className="text-cyan-400" />
                  <span>YANGON, MYANMAR</span>
                </span>
              </div>

              <div className="flex justify-between items-baseline pt-3">
                <span className="text-neutral-500">TIMEZONE</span>
                <span className="text-white font-medium text-right">UTC+6:30 (ASIA/YANGON)</span>
              </div>

              <div className="flex justify-between items-baseline pt-3">
                <span className="text-neutral-500">TARGET ROLES</span>
                <span className="text-white font-medium text-right">SYSTEM / CLOUD / NOC ENGINEER</span>
              </div>

              <div className="flex justify-between items-baseline pt-3">
                <span className="text-neutral-500">CORE FOCUS</span>
                <span className="text-cyan-400 font-medium text-right">AWS · AZURE · LINUX · TERRAFORM</span>
              </div>

              <div className="flex justify-between items-baseline pt-3">
                <span className="text-neutral-500">LANGUAGES</span>
                <span className="text-white font-medium text-right">ENGLISH · BURMESE</span>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10">
              <a
                href="#top"
                className="w-full py-3 border border-white/20 text-white hover:bg-white hover:text-black font-semibold uppercase tracking-wider text-center block transition-all"
              >
                BACK TO TOP ↑
              </a>
            </div>
          </div>
        </MotionReveal>
      </div>
    </div>
  </section>
);
};
