import React from 'react';
import { Server, ShieldCheck, Radio, CheckCircle2, Building2, ArrowUpRight } from 'lucide-react';
import { MotionReveal } from './MotionReveal';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="relative py-24 sm:py-32 bg-[#060606] overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <MotionReveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2.5 font-mono text-[11px] sm:text-xs tracking-wider text-neutral-400 uppercase mb-4">
              <span className="text-neutral-600">|</span>
              <span className="text-white font-medium">[ 05 / 06 ]</span>
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
          {/* Card 1: System Engineer (Current Role) — BIM Group of Companies */}
          <MotionReveal delay={0.1}>
            <div className="border border-white/15 bg-[#0a0f16]/90 backdrop-blur-md p-6 sm:p-8 flex flex-col justify-between cross-corner shadow-2xl relative group hover:border-cyan-400/50 transition-all duration-300 h-full">
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent group-hover:via-cyan-400 transition-all" />

              <div>
                {/* Card Header */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-white rounded-md p-2 flex items-center justify-center shadow-md border border-white/20">
                      <img
                        src="/media/bim-logo.jpg"
                        alt="BIM Group of Companies"
                        className="h-10 w-auto object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                        <span>System Engineer</span>
                        <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse" />
                      </h3>
                      <div className="text-xs font-mono text-cyan-400 mt-0.5 font-medium">
                        BIM Group of Companies · Enterprise Systems & Cloud
                      </div>
                    </div>
                  </div>

                  <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 whitespace-nowrap">
                    CURRENT ROLE · PRESENT
                  </span>
                </div>

                {/* Role Description Summary */}
                <p className="font-sans text-xs sm:text-sm text-neutral-300 mb-4 leading-relaxed">
                  Promoted internally from NOC Engineer to System Engineer within BIM Group of Companies, leading enterprise server infrastructure, hypervisor clusters, and cloud integration.
                </p>

                {/* Responsibilities list */}
                <ul className="space-y-3 font-sans text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
                  <li className="flex items-start gap-2.5">
                    <span className="text-cyan-400 font-mono font-bold mt-0.5">›</span>
                    <span>
                      Engineer, cluster, and operate Type-1 enterprise hypervisors including <span className="text-white font-medium">VMware vSphere, Proxmox VE, Microsoft Hyper-V</span>, and <span className="text-white font-medium">Nutanix HCI</span> with high-availability failover.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-cyan-400 font-mono font-bold mt-0.5">›</span>
                    <span>
                      Administer corporate Active Directory Domain Services (AD DS), DNS, DHCP, Group Policies (GPO), and enterprise perimeter network security for multi-branch environments.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-cyan-400 font-mono font-bold mt-0.5">›</span>
                    <span>
                      Architect enterprise disaster recovery and immutable backup pipelines utilizing <span className="text-white font-medium">Veeam Backup & Replication</span> with rapid RTO/RPO recovery targets.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-cyan-400 font-mono font-bold mt-0.5">›</span>
                    <span>
                      Deploy full-stack observability with <span className="text-white font-medium">Zabbix and Grafana</span>, configuring proactive server telemetry, bandwidth thresholds, and automated incident escalation.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Bottom Badges */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] text-neutral-400">
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2 py-0.5 bg-white/5 border border-white/10 text-neutral-300">VMware</span>
                  <span className="px-2 py-0.5 bg-white/5 border border-white/10 text-neutral-300">Proxmox</span>
                  <span className="px-2 py-0.5 bg-white/5 border border-white/10 text-neutral-300">Hyper-V</span>
                  <span className="px-2 py-0.5 bg-white/5 border border-white/10 text-neutral-300">Nutanix</span>
                  <span className="px-2 py-0.5 bg-white/5 border border-white/10 text-neutral-300">Veeam</span>
                </div>
                <span className="text-neutral-500 uppercase tracking-wider">YANGON, MYANMAR</span>
              </div>
            </div>
          </MotionReveal>

          {/* Card 2: NOC Engineer (Previous Role) — BIM Group of Companies (Deployed to WaveMoney Site) */}
          <MotionReveal delay={0.2}>
            <div className="border border-white/15 bg-[#0a0f16]/90 backdrop-blur-md p-6 sm:p-8 flex flex-col justify-between cross-corner shadow-2xl relative group hover:border-amber-400/50 transition-all duration-300 h-full">
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent group-hover:via-amber-400 transition-all" />

              <div>
                {/* Card Header with BIM Logo */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-white rounded-md p-2 flex items-center justify-center shadow-md border border-white/20">
                      <img
                        src="/media/bim-logo.jpg"
                        alt="BIM Group of Companies"
                        className="h-10 w-auto object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                        <span>NOC Engineer</span>
                        <span className="text-xs px-2 py-0.5 font-mono text-amber-300 bg-amber-950/60 border border-amber-500/30 font-normal">
                          WaveMoney Site
                        </span>
                      </h3>
                      <div className="text-xs font-mono text-amber-400 mt-0.5 font-medium">
                        BIM Group of Companies · Deployed at WaveMoney
                      </div>
                    </div>
                  </div>

                  <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 bg-amber-950/60 border border-amber-500/30 text-amber-300 whitespace-nowrap">
                    ON-SITE DEPLOYMENT
                  </span>
                </div>

                {/* Role Description Summary */}
                <p className="font-sans text-xs sm:text-sm text-neutral-300 mb-4 leading-relaxed">
                  Deployed on-site by <span className="text-white font-medium">BIM Group of Companies</span> to <span className="text-white font-medium">WaveMoney (Digital Financial Services)</span> as dedicated NOC Engineer managing 24/7 financial network backbones.
                </p>

                {/* Responsibilities list */}
                <ul className="space-y-3 font-sans text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
                  <li className="flex items-start gap-2.5">
                    <span className="text-amber-400 font-mono font-bold mt-0.5">›</span>
                    <span>
                      Monitored nationwide fintech payment transactions, network tunnels, and critical banking integration endpoints with 24/7 continuous telemetry health checks.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-amber-400 font-mono font-bold mt-0.5">›</span>
                    <span>
                      Executed rigorous Level-1/Level-2 incident triage, diagnosing packet drops, latency anomalies, VPN tunnel drops, and API gateway timeouts to uphold strict 99.99% SLAs.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-amber-400 font-mono font-bold mt-0.5">›</span>
                    <span>
                      Liaised directly between BIM infrastructure teams, WaveMoney financial system architects, and telco carriers during high-priority escalations and scheduled maintenance.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-amber-400 font-mono font-bold mt-0.5">›</span>
                    <span>
                      Demonstrated operational excellence and deep systems troubleshooting, leading to an internal transition and promotion to <span className="text-cyan-300 font-medium">System Engineer</span> at BIM Group of Companies.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Bottom Badges */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] text-neutral-400">
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2 py-0.5 bg-white/5 border border-white/10 text-neutral-300">WaveMoney Client Site</span>
                  <span className="px-2 py-0.5 bg-white/5 border border-white/10 text-neutral-300">24/7 NOC Telemetry</span>
                  <span className="px-2 py-0.5 bg-white/5 border border-white/10 text-neutral-300">SLA 99.99%</span>
                  <span className="px-2 py-0.5 bg-white/5 border border-white/10 text-neutral-300">Incident Triage</span>
                </div>
                <span className="text-neutral-500 uppercase tracking-wider">WAVEMONEY SITE</span>
              </div>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
};
