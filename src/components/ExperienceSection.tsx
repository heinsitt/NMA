import React from 'react';
import { Server, ShieldCheck, Radio, CheckCircle2, Building2, ArrowUpRight } from 'lucide-react';
import { MotionReveal } from './MotionReveal';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="relative py-24 sm:py-32 border-t border-white/10 bg-[#060606] overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <MotionReveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2.5 font-mono text-[11px] sm:text-xs tracking-wider text-neutral-400 uppercase mb-4">
              <span className="text-neutral-600">|</span>
              <span className="text-white font-medium">[ 04 / 05 ]</span>
              <span className="text-neutral-600">·</span>
              <span className="text-cyan-400">PRODUCTION WORK EXPERIENCE</span>
            </div>

            <h2 className="font-bebas text-[clamp(3.2rem,8vw,7.5rem)] leading-[0.9] tracking-tight text-white select-none">
              CAREER & NOC OPERATIONS
            </h2>

            <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mt-4 font-sans leading-relaxed">
              Field-tested track record keeping enterprise infrastructures, hypervisor clusters, and financial service payment backbones operational 24/7 without downtime.
            </p>
          </div>

          <div className="border border-white/10 bg-black/60 backdrop-blur-md p-4 sm:p-5 font-mono text-xs uppercase tracking-wider space-y-2 max-w-xs w-full self-start md:self-auto">
            <div className="flex justify-between items-center text-neutral-400">
              <span>UPTIME TARGET</span>
              <span className="text-emerald-400 font-semibold">99.99% VERIFIED</span>
            </div>
            <div className="flex justify-between text-[11px] text-neutral-500 pt-1 border-t border-white/10">
              <span>SPECIALIZATION</span>
              <span className="text-white font-medium">NOC & CLOUD SYSTEMS</span>
            </div>
          </div>
        </MotionReveal>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: BIM Group of Companies */}
          <MotionReveal delay={0.1}>
            <div className="border border-white/15 bg-[#0a0f16]/90 backdrop-blur-md p-6 sm:p-8 flex flex-col justify-between cross-corner shadow-2xl relative group hover:border-cyan-400/50 transition-all duration-300 h-full">
            <div>
              {/* Card Header */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className="bg-white rounded-md p-2 flex items-center justify-center shadow-md">
                    <img
                      src="/media/bim-logo.jpg"
                      alt="BIM Group of Companies"
                      className="h-9 w-auto object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      System Engineer / NOC Engineer
                    </h3>
                    <div className="text-xs font-mono text-cyan-400 mt-0.5">
                      BIM Group of Companies
                    </div>
                  </div>
                </div>

                <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 bg-cyan-950/60 border border-cyan-500/30 text-cyan-300">
                  CURRENT / RECENT
                </span>
              </div>

              {/* Responsibilities list */}
              <ul className="space-y-3 font-sans text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
                <li className="flex items-start gap-2.5">
                  <span className="text-cyan-400 font-mono font-bold mt-0.5">›</span>
                  <span>
                    Manage and operate enterprise hypervisors (VMware vSphere, Proxmox VE) and high-availability clustered servers running Rocky Linux, Ubuntu Server, and Windows Server.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-cyan-400 font-mono font-bold mt-0.5">›</span>
                  <span>
                    Administer corporate Active Directory Domain Services (AD DS), DNS, DHCP, Group Policies (GPO), and enterprise network perimeter security.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-cyan-400 font-mono font-bold mt-0.5">›</span>
                  <span>
                    Deploy 24/7 automated observability via Zabbix and Grafana, monitoring bandwidth thresholds, CPU/memory spikes, and automated incident escalation runbooks.
                  </span>
                </li>
              </ul>
            </div>

            {/* Bottom Badges */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] text-neutral-400">
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2 py-0.5 bg-white/5 border border-white/10 text-neutral-300">VMware</span>
                <span className="px-2 py-0.5 bg-white/5 border border-white/10 text-neutral-300">Proxmox</span>
                <span className="px-2 py-0.5 bg-white/5 border border-white/10 text-neutral-300">Rocky Linux</span>
                <span className="px-2 py-0.5 bg-white/5 border border-white/10 text-neutral-300">Zabbix</span>
              </div>
              <span className="text-neutral-500">YANGON, MYANMAR</span>
            </div>
          </div>
        </MotionReveal>

        {/* Card 2: WaveMoney */}
        <MotionReveal delay={0.2}>
          <div className="border border-white/15 bg-[#0a0f16]/90 backdrop-blur-md p-6 sm:p-8 flex flex-col justify-between cross-corner shadow-2xl relative group hover:border-amber-400/50 transition-all duration-300 h-full">
            <div>
              {/* Card Header */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/30 flex items-center justify-center font-mono font-bold text-amber-400 text-lg">
                    WM
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      Former NOC Engineer
                    </h3>
                    <div className="text-xs font-mono text-amber-400 mt-0.5">
                      WaveMoney (Digital Financial Services)
                    </div>
                  </div>
                </div>

                <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 bg-amber-950/60 border border-amber-500/30 text-amber-300">
                  FINTECH NOC
                </span>
              </div>

              {/* Responsibilities list */}
              <ul className="space-y-3 font-sans text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
                <li className="flex items-start gap-2.5">
                  <span className="text-amber-400 font-mono font-bold mt-0.5">›</span>
                  <span>
                    Monitored nationwide fintech payment transactions, network tunnels, and banking integration endpoints with 24/7 real-time telemetry.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-amber-400 font-mono font-bold mt-0.5">›</span>
                  <span>
                    Executed rigorous Level-1/Level-2 incident management, triaging packet drops, latency anomalies, and API gateway timeouts to maintain stringent SLAs.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-amber-400 font-mono font-bold mt-0.5">›</span>
                  <span>
                    Coordinated with infrastructure architects, telco carriers, and software engineering teams during scheduled maintenance and critical production incidents.
                  </span>
                </li>
              </ul>
            </div>

            {/* Bottom Badges */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] text-neutral-400">
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2 py-0.5 bg-white/5 border border-white/10 text-neutral-300">NOC Operations</span>
                <span className="px-2 py-0.5 bg-white/5 border border-white/10 text-neutral-300">Incident Response</span>
                <span className="px-2 py-0.5 bg-white/5 border border-white/10 text-neutral-300">SLA Availability</span>
              </div>
              <span className="text-neutral-500">FINANCIAL NETWORK</span>
            </div>
          </div>
        </MotionReveal>
      </div>
      </div>
    </section>
  );
};
