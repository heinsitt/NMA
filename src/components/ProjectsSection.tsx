import React, { useState, useEffect } from 'react';
import { Terminal, GitBranch, FolderGit2, Cpu, Clock, Layers, Sparkles, AlertCircle } from 'lucide-react';
import { MotionReveal } from './MotionReveal';

interface UpcomingProjectPlaceholder {
  id: string;
  category: string;
  title: string;
  techStack: string[];
  description: string;
  spec: string;
}

const UPCOMING_PROJECTS: UpcomingProjectPlaceholder[] = [
  {
    id: 'aws-enterprise-iac',
    category: 'CLOUD ARCHITECTURE & IAC',
    title: 'Enterprise Multi-Tier AWS VPC Architecture',
    techStack: ['AWS', 'Terraform', 'VPC', 'EC2', 'ALB', 'IAM'],
    description: 'Automated modular Infrastructure-as-Code provisioning for high-availability multi-AZ environments with private subnets, bastion hosts, and security group isolation.',
    spec: 'AWS CloudFormation / Terraform IaC',
  },
  {
    id: 'proxmox-ceph-cluster',
    category: 'VIRTUALIZATION & STORAGE',
    title: 'High-Availability Proxmox VE & Ceph Cluster',
    techStack: ['Proxmox VE', 'Ceph Storage', 'Debian', 'ZFS', 'VLANs'],
    description: 'Bare-metal virtualization cluster with shared Ceph storage pools, automated VM live migration, redundant 10GbE network bonding, and snapshot policies.',
    spec: 'Bare-Metal Hyperconverged Infra',
  },
  {
    id: 'datacenter-telemetry',
    category: 'OBSERVABILITY & MONITORING',
    title: 'Enterprise Monitoring & Incident Alerting Pipeline',
    techStack: ['Zabbix', 'Prometheus', 'Grafana', 'SNMP', 'Linux'],
    description: 'Full-stack infrastructure telemetry monitoring 100+ bare-metal nodes, network switches, and critical services with custom Prometheus exporters and proactive SLA alerting.',
    spec: '24/7 Telemetry & SNMP Traps',
  },
];

const TYPING_MESSAGES = [
  'project uploading coming soon...',
  'project uploading coming soon... Initializing cloud lab repositories...',
  'project uploading coming soon... Staging Terraform modules & diagrams...',
  'project uploading coming soon... Preparing documentation & case studies...',
];

export const ProjectsSection: React.FC = () => {
  const [currentText, setCurrentText] = useState('');
  const [messageIndex, setMessageIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  // Typewriter effect cycle
  useEffect(() => {
    const fullMessage = TYPING_MESSAGES[messageIndex];
    let typingSpeed = isDeleting ? 30 : 65;

    if (!isDeleting && charIndex === fullMessage.length) {
      // Pause at the end of typing before deleting
      const pauseTimeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2400);
      return () => clearTimeout(pauseTimeout);
    }

    if (isDeleting && charIndex === 0) {
      // Pause before typing next message
      setIsDeleting(false);
      setMessageIndex((prev) => (prev + 1) % TYPING_MESSAGES.length);
      return;
    }

    const timer = setTimeout(() => {
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
      setCurrentText(fullMessage.substring(0, charIndex + (isDeleting ? -1 : 1)));
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, messageIndex]);

  return (
    <section id="projects" className="relative py-24 sm:py-32 bg-[#05070a] overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-600/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-emerald-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <MotionReveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2.5 font-mono text-[11px] sm:text-xs tracking-wider text-neutral-400 uppercase mb-4">
              <span className="text-neutral-600">|</span>
              <span className="text-white font-medium">[ 04 / 06 ]</span>
              <span className="text-neutral-600">·</span>
              <span className="text-cyan-400">CLOUD LABS & INFRASTRUCTURE</span>
            </div>

            <h2 className="font-bebas text-[clamp(3.2rem,8vw,7.5rem)] leading-[0.9] tracking-tight text-white select-none">
              PROJECTS & ARCHITECTURE
            </h2>

            <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mt-4 font-sans leading-relaxed">
              Production engineering blueprints, Infrastructure-as-Code repositories, and bare-metal virtualization labs.
            </p>
          </div>

          {/* Status HUD Block */}
          <div className="border border-white/10 bg-black/60 backdrop-blur-md p-4 sm:p-5 font-mono text-xs uppercase tracking-wider space-y-2 max-w-xs w-full self-start md:self-auto">
            <div className="flex justify-between items-center text-neutral-400">
              <span>PIPELINE STATUS</span>
              <span className="text-cyan-400 font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping inline-block" />
                SYNCING
              </span>
            </div>
            <div className="flex justify-between text-[11px] text-neutral-500 pt-1 border-t border-white/10">
              <span>STAGE</span>
              <span className="text-emerald-300 font-medium">UPLOADING SOON</span>
            </div>
          </div>
        </MotionReveal>

        {/* Interactive Terminal Typing Banner */}
        <MotionReveal delay={0.1} className="mb-12">
          <div className="border border-cyan-500/30 bg-[#070b12] shadow-[0_0_40px_rgba(34,211,238,0.06)] relative overflow-hidden group">
            {/* Terminal Window Header Bar */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-white/10 bg-black/50 font-mono text-xs">
              <div className="flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-2 text-neutral-400 text-[11px] hidden sm:inline">
                  nma@cloud-deploy: ~/repositories/projects
                </span>
              </div>

              <div className="flex items-center gap-2 text-[10px] sm:text-[11px] tracking-wider uppercase text-cyan-400 font-semibold">
                <Terminal size={13} className="text-cyan-400" />
                <span>SHELL SESSION ACTIVE</span>
              </div>
            </div>

            {/* Terminal Content Body */}
            <div className="p-6 sm:p-8 font-mono text-xs sm:text-sm md:text-base space-y-3">
              <div className="text-neutral-500 flex items-center gap-2 text-xs">
                <span>[SYSTEM]</span>
                <span>Initializing project catalogue pipeline v2.4</span>
              </div>

              <div className="flex items-center gap-2 text-neutral-400">
                <span className="text-emerald-400 font-bold">$</span>
                <span className="text-neutral-300">git status --short</span>
              </div>

              {/* Real-time Typing Effect Display */}
              <div className="pt-2 pb-2">
                <div className="inline-flex items-center gap-2 bg-cyan-950/40 border border-cyan-500/30 px-3.5 py-2.5 text-cyan-300 font-mono text-sm sm:text-lg tracking-wide rounded-sm">
                  <span className="text-emerald-400 font-bold">&gt;</span>
                  <span className="text-white font-medium">{currentText}</span>
                  <span className="inline-block w-2 h-5 bg-cyan-400 animate-pulse ml-0.5" />
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-[11px] text-neutral-500 pt-2 border-t border-white/5">
                <span className="flex items-center gap-1.5">
                  <Clock size={12} className="text-cyan-400" />
                  <span>Release Cycle: Active Preparation</span>
                </span>
                <span className="text-neutral-700">|</span>
                <span className="flex items-center gap-1.5">
                  <GitBranch size={12} className="text-emerald-400" />
                  <span>Branch: main (staged)</span>
                </span>
                <span className="text-neutral-700 hidden sm:inline">|</span>
                <span className="hidden sm:flex items-center gap-1.5">
                  <Cpu size={12} className="text-amber-400" />
                  <span>Cloud Architecture · IaC · Linux Virtualization</span>
                </span>
              </div>
            </div>
          </div>
        </MotionReveal>

        {/* Forthcoming Project Preview Placeholders (Cards ready for data) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {UPCOMING_PROJECTS.map((project, index) => (
            <MotionReveal key={project.id} delay={0.15 + index * 0.08}>
              <div className="border border-white/10 bg-[#080d14]/80 backdrop-blur-md p-6 flex flex-col justify-between h-full relative group hover:border-cyan-500/40 hover:bg-[#0c131e] transition-all duration-300 cross-corner">
                {/* Glowing Top Accent */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent group-hover:via-cyan-400 transition-all" />

                <div>
                  {/* Category & Status Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4 font-mono text-[10px] tracking-wider uppercase">
                    <span className="text-cyan-400 font-semibold">{project.category}</span>
                    <span className="px-2 py-0.5 border border-amber-500/30 bg-amber-950/20 text-amber-300 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                      COMING SOON
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors mb-3">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                    {project.description}
                  </p>
                </div>

                {/* Footer: Tech Stack & Spec */}
                <div className="pt-4 border-t border-white/10 space-y-3 font-mono">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[10px] bg-white/5 border border-white/10 text-neutral-300 group-hover:border-cyan-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-neutral-500 pt-1">
                    <span className="flex items-center gap-1.5">
                      <FolderGit2 size={12} className="text-neutral-400" />
                      <span>{project.spec}</span>
                    </span>
                    <span className="text-cyan-400/80 text-[10px] uppercase tracking-wider">
                      UPLOADING
                    </span>
                  </div>
                </div>
              </div>
            </MotionReveal>
          ))}
        </div>

        {/* Bottom Announcement Note */}
        <MotionReveal delay={0.4} className="mt-8">
          <div className="border border-white/5 bg-black/40 px-5 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-neutral-400">
            <div className="flex items-center gap-2.5">
              <Sparkles size={14} className="text-cyan-400 flex-shrink-0" />
              <span>Full case studies, network diagrams, and GitHub repository links will be published shortly.</span>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-neutral-500 uppercase tracking-wider">
              <span>STATUS:</span>
              <span className="text-emerald-400 font-semibold">PROJECT UPLOADING COMING SOON</span>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
};

export default ProjectsSection;
