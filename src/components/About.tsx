import React from 'react';
import { MotionReveal } from './MotionReveal';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#070707] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        <MotionReveal>
          {/* Section Kicker */}
          <div className="flex items-center gap-2.5 font-mono text-[11px] sm:text-xs tracking-wider text-neutral-400 uppercase mb-4">
            <span className="text-neutral-600">|</span>
            <span className="text-white font-medium">[ 01 / 06 ]</span>
            <span className="text-neutral-600">·</span>
            <span>ABOUT</span>
          </div>

          {/* Giant Section Headline */}
          <h2 className="font-bebas text-[clamp(3.5rem,8vw,7.5rem)] leading-[0.9] tracking-tight text-white mb-16 select-none">
            FROM NETWORKING TO CLOUD OPERATIONS
          </h2>
        </MotionReveal>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative */}
          <MotionReveal className="lg:col-span-7 space-y-8 font-sans" delay={0.1}>
            <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-neutral-100 leading-snug font-sans tracking-tight">
              System Engineer at <span className="text-white font-semibold">BIM Group of Companies</span>, I design, maintain, and automate mission-critical infrastructure end to end: enterprise Linux & Windows servers, virtualization clusters, and network security. Reliability is how I operate: an internal infrastructure deserves the same care as an award-winning product.
            </p>

            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              My expertise covers enterprise system administration, cloud infrastructure, networking (Cisco, MikroTik), Active Directory, VPNs, and automated monitoring (Zabbix, Prometheus, Grafana). Previously <span className="text-white font-medium">NOC Engineer at WaveMoney</span>, managing 24/7 mission-critical fintech network health checks, proactive incident response, and SLA availability.
            </p>

            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              Passionate about modern cloud engineering, I actively design and deploy AWS and Azure architectures, containerized environments, and Infrastructure-as-Code (Terraform) to bridge classical on-premise stability with cloud elasticity.
            </p>

            {/* Quick Core Strengths Bar */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-white/10 font-mono text-xs text-neutral-400">
              <div>
                <span className="text-white font-semibold block text-base font-bebas tracking-wide">
                  ENTERPRISE SYSTEMS
                </span>
                <span>Linux, RHEL, Windows Server</span>
              </div>
              <div>
                <span className="text-white font-semibold block text-base font-bebas tracking-wide">
                  NETWORKING & SEC
                </span>
                <span>Cisco, MikroTik, Firewalls</span>
              </div>
              <div>
                <span className="text-white font-semibold block text-base font-bebas tracking-wide">
                  CLOUD HORIZON
                </span>
                <span>AWS, Azure, Terraform</span>
              </div>
            </div>
          </MotionReveal>

          {/* Right Column: Photo + Technical Dossier Card */}
          <MotionReveal className="lg:col-span-5 space-y-8" delay={0.2}>
            {/* User Profile Photo with Crosshairs */}
            <div className="relative border border-white/15 bg-black p-3 cross-corner shadow-2xl">
              <div className="aspect-[3/4] w-full overflow-hidden bg-neutral-900 relative">
                <img
                  src="/media/profile.jpg"
                  alt="Naing Moe Aung — System Engineer"
                  className="w-full h-full object-cover object-center filter contrast-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-[10px] tracking-widest text-neutral-300 uppercase">
                  <span>NAING MOE AUNG</span>
                  <span>SYSTEM ENGINEER</span>
                </div>
              </div>
            </div>

            {/* Technical Specification Spec Sheet */}
            <div className="border border-white/15 bg-black/90 p-6 sm:p-7 cross-corner shadow-2xl font-mono text-xs uppercase tracking-wider space-y-4">
              <div className="text-neutral-500 text-[11px] pb-1 border-b border-white/10 font-bold">
                PROFILE SPECIFICATION
              </div>

              <div className="space-y-3 divide-y divide-white/5">
                <div className="flex justify-between items-baseline pt-2">
                  <span className="text-neutral-500">BASED IN</span>
                  <span className="text-white font-medium text-right">YANGON, MYANMAR</span>
                </div>

                <div className="flex justify-between items-baseline pt-2">
                  <span className="text-neutral-500">ROLE</span>
                  <span className="text-white font-medium text-right">SYSTEM ENGINEER</span>
                </div>

                <div className="flex justify-between items-baseline pt-2">
                  <span className="text-neutral-500">CURRENT AT</span>
                  <span className="text-white font-medium text-right">BIM GROUP OF COMPANIES</span>
                </div>

                <div className="flex justify-between items-baseline pt-2">
                  <span className="text-neutral-500">PREVIOUS</span>
                  <span className="text-white font-medium text-right">WAVEMONEY (NOC ENGINEER)</span>
                </div>

                <div className="flex justify-between items-baseline pt-2">
                  <span className="text-neutral-500">LATELY</span>
                  <span className="text-white font-medium text-right">AWS · AZURE · TERRAFORM IAC</span>
                </div>

                <div className="flex justify-between items-baseline pt-2">
                  <span className="text-neutral-500">FOCUS</span>
                  <span className="text-white font-medium text-right">LINUX • CLOUD • NETWORKING</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <a
                  href="#contact"
                  className="px-5 py-3 bg-white text-black font-semibold hover:bg-neutral-200 transition-all text-center flex-1 flex items-center justify-center gap-2"
                >
                  <span>VIEW RESUME</span>
                  <span className="text-sm">→</span>
                </a>
                <a
                  href="mailto:naingmoeaung51@gmail.com"
                  className="px-5 py-3 border border-white/20 text-white hover:border-white hover:bg-white/5 transition-all text-center flex-1 flex items-center justify-center gap-1.5"
                >
                  <span>DOWNLOAD CV</span>
                  <span className="text-xs">↓</span>
                </a>
              </div>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
};
