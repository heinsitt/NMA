import React, { useState } from 'react';
import {
  AwsIcon,
  LinuxIcon,
  ProxmoxIcon,
  DatadogIcon,
  RockyLinuxIcon,
  UbuntuIcon,
  ZabbixIcon,
  VmwareIcon,
  CiscoIcon,
  DockerIcon,
  TerraformIcon,
  GrafanaIcon,
} from './TechIcons';
import { MotionReveal } from './MotionReveal';

interface ToolItem {
  id: string;
  name: string;
  category: string;
  tag: string;
  description: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  color: string;
  accentBg: string;
}

const PRIMARY_TOOLS: ToolItem[] = [
  {
    id: 'aws',
    name: 'Amazon Web Services',
    category: 'Cloud Infrastructure',
    tag: 'AWS EC2 · VPC · S3 · IAM',
    description: 'VPC network architecture, EC2 compute clustering, IAM least-privilege security, and multi-tier cloud deployments.',
    icon: AwsIcon,
    color: '#FF9900',
    accentBg: 'rgba(255, 153, 0, 0.08)',
  },
  {
    id: 'linux',
    name: 'Linux',
    category: 'Enterprise Operating Systems',
    tag: 'Kernel · Bash · Systemd · SELinux',
    description: 'Deep kernel configuration, automated Bash shell scripting, systemd service management, and hardening.',
    icon: LinuxIcon,
    color: '#FACC15',
    accentBg: 'rgba(250, 204, 21, 0.08)',
  },
  {
    id: 'proxmox',
    name: 'Proxmox VE',
    category: 'Type-1 Hypervisor',
    tag: 'KVM · LXC · ZFS Storage · HA',
    description: 'Clustered enterprise hypervisor nodes, ZFS software raid storage pools, and zero-downtime VM live migration.',
    icon: ProxmoxIcon,
    color: '#E57000',
    accentBg: 'rgba(229, 112, 0, 0.08)',
  },
  {
    id: 'datadog',
    name: 'Datadog',
    category: 'APM & Cloud Observability',
    tag: 'Telemetry · APM · Synthetic Checks',
    description: 'Real-time telemetry agents, custom metrics, synthetic latency probes, and mission-critical anomaly alerting.',
    icon: DatadogIcon,
    color: '#7C3AED',
    accentBg: 'rgba(124, 58, 237, 0.08)',
  },
  {
    id: 'rockylinux',
    name: 'Rocky Linux',
    category: 'Enterprise Linux Distro',
    tag: 'RHEL Binary 1:1 Compatible',
    description: 'Production RHEL-grade server workloads, firewalld, package management, and hardened enterprise hosting.',
    icon: RockyLinuxIcon,
    color: '#10B981',
    accentBg: 'rgba(16, 185, 129, 0.08)',
  },
  {
    id: 'ubuntu',
    name: 'Ubuntu',
    category: 'Server OS & Cloud Nodes',
    tag: 'Ubuntu Server LTS · Cloud-Init',
    description: 'Long Term Support deployment, automated cloud-init provisioning, Docker daemon hosting, and networking.',
    icon: UbuntuIcon,
    color: '#E95420',
    accentBg: 'rgba(233, 84, 32, 0.08)',
  },
  {
    id: 'zabbix',
    name: 'Zabbix',
    category: 'Enterprise Network Monitoring',
    tag: 'SNMP · Active Agents · SLA Triggers',
    description: 'Distributed 24/7 infrastructure polling via SNMP, agent health metrics, and automated escalation triggers.',
    icon: ZabbixIcon,
    color: '#EF4444',
    accentBg: 'rgba(239, 68, 68, 0.08)',
  },
  {
    id: 'vmware',
    name: 'VMware',
    category: 'Enterprise Virtualization',
    tag: 'ESXi · vCenter · vSwitch',
    description: 'Bare-metal ESXi hypervisor engineering, vCenter clustering, distributed virtual switches, and snapshot retention.',
    icon: VmwareIcon,
    color: '#0284C7',
    accentBg: 'rgba(2, 132, 199, 0.08)',
  },
];

const COMPLEMENTARY_TOOLS: ToolItem[] = [
  {
    id: 'cisco',
    name: 'Cisco Networking',
    category: 'Core Routing & Switching',
    tag: 'Catalyst · VLAN · OSPF · BGP',
    description: 'Enterprise L2/L3 topology design, trunking protocols, dynamic routing tables, and access control lists.',
    icon: CiscoIcon,
    color: '#0EA5E9',
    accentBg: 'rgba(14, 165, 233, 0.08)',
  },
  {
    id: 'docker',
    name: 'Docker',
    category: 'Containerization',
    tag: 'Compose · Registry · Isolation',
    description: 'Multi-stage Dockerfiles, isolated container networking, persistent volume management, and lightweight deployments.',
    icon: DockerIcon,
    color: '#38BDF8',
    accentBg: 'rgba(56, 189, 248, 0.08)',
  },
  {
    id: 'terraform',
    name: 'Terraform',
    category: 'Infrastructure as Code',
    tag: 'HCL · State Management · AWS/Azure',
    description: 'Declarative infrastructure as code, reusable modules, state locking, and multi-cloud automated provisioning.',
    icon: TerraformIcon,
    color: '#A855F7',
    accentBg: 'rgba(168, 85, 247, 0.08)',
  },
  {
    id: 'grafana',
    name: 'Grafana',
    category: 'Observability & Dashboards',
    tag: 'Prometheus · Live Dashboards',
    description: 'Interactive NOC executive dashboards, unified time-series queries, and real-time operational visibility.',
    icon: GrafanaIcon,
    color: '#F97316',
    accentBg: 'rgba(249, 115, 22, 0.08)',
  },
  // Seamless loop with the primary tools in reverse order
  ...PRIMARY_TOOLS.slice().reverse(),
];

export const TechStackTools: React.FC = () => {
  const [selectedTool, setSelectedTool] = useState<ToolItem | null>(null);

  // Duplicating items to ensure infinite seamless loop without white gaps
  const row1Items = [...PRIMARY_TOOLS, ...PRIMARY_TOOLS];
  const row2Items = [...COMPLEMENTARY_TOOLS, ...COMPLEMENTARY_TOOLS];

  return (
    <section id="tools" className="relative py-24 sm:py-32 border-t border-white/10 bg-[#060606] overflow-hidden">
      {/* Background Subtle Gradient Lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <MotionReveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2.5 font-mono text-[11px] sm:text-xs tracking-wider text-neutral-400 uppercase mb-4">
              <span className="text-neutral-600">|</span>
              <span className="text-white font-medium">[ 02 / 06 ]</span>
              <span className="text-neutral-600">·</span>
              <span className="text-cyan-400">TECH STACK & TOOLS</span>
            </div>

            <h2 className="font-bebas text-[clamp(3.5rem,8vw,7.5rem)] leading-[0.9] tracking-tight text-white select-none">
              PRODUCTION STACK & TOOLS
            </h2>

            <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mt-4 font-sans leading-relaxed">
              Hands-on operational mastery across bare-metal hypervisors, enterprise Linux distributions,
              cloud platforms, network telemetry, and automated observability suites.
            </p>
          </div>

          {/* Uptime & Status Strip */}
          <div className="border border-white/10 bg-black/60 backdrop-blur-md p-4 sm:p-5 font-mono text-xs uppercase tracking-wider space-y-2 max-w-xs w-full self-start md:self-auto">
            <div className="flex items-center justify-between text-neutral-400">
              <span>ACTIVE TOOLSET</span>
              <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                VERIFIED
              </span>
            </div>
            <div className="flex justify-between text-[11px] text-neutral-500 pt-1 border-t border-white/10">
              <span>HOVER BEHAVIOR</span>
              <span className="text-white font-medium">PAUSES MARQUEE</span>
            </div>
            <div className="flex justify-between text-[11px] text-neutral-500">
              <span>DIRECTION</span>
              <span className="text-cyan-300">ALTERNATING ROWS</span>
            </div>
          </div>
        </MotionReveal>
      </div>

      {/* Marquee Row 1: Leftward Auto-Scroll */}
      <div className="w-full overflow-hidden py-3 group-marquee relative">
        {/* Left & Right Edge Vignette Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#060606] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#060606] to-transparent z-20 pointer-events-none" />

        <div className="animate-marquee-left flex items-center gap-4 sm:gap-6">
          {row1Items.map((tool, idx) => {
            const Icon = tool.icon;
            return (
              <div
                key={`row1-${tool.id}-${idx}`}
                onClick={() => setSelectedTool(tool)}
                className="group/card relative flex-shrink-0 w-[280px] sm:w-[320px] p-4 sm:p-5 rounded-none border border-white/10 bg-[#0b0f14]/80 backdrop-blur-md hover:border-white/40 hover:bg-[#111722] transition-all duration-300 cursor-pointer select-none cross-corner"
                style={{
                  boxShadow: '0 4px 20px rgba(0,0,0,0.6)',
                }}
              >
                {/* Glow accent line at top */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-40 group-hover/card:opacity-100 transition-opacity"
                  style={{ backgroundColor: tool.color }}
                />

                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center p-2 border border-white/10 group-hover/card:scale-105 transition-transform"
                    style={{ backgroundColor: tool.accentBg }}
                  >
                    <Icon className="w-8 h-8" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 truncate">
                      {tool.category}
                    </div>
                    <div className="text-white font-semibold text-base tracking-wide truncate group-hover/card:text-cyan-300 transition-colors">
                      {tool.name}
                    </div>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between font-mono text-[11px] text-neutral-400">
                  <span className="truncate">{tool.tag}</span>
                  <span className="text-neutral-600 group-hover/card:text-white transition-colors">
                    ↗
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Row Separator Track Label */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 my-4 flex items-center justify-between font-mono text-[10px] tracking-widest text-neutral-600 uppercase">
        <span className="flex items-center gap-2">
          <span className="w-1 h-1 bg-cyan-400 rounded-full" />
          ROW 01 · STREAM DIRECTION: ◄ LEFT
        </span>
        <span className="hidden sm:inline">INTERACTIVE PROFILES · CLICK TO INSPECT SPECS</span>
        <span className="flex items-center gap-2">
          ROW 02 · STREAM DIRECTION: RIGHT ►
          <span className="w-1 h-1 bg-amber-400 rounded-full" />
        </span>
      </div>

      {/* Marquee Row 2: Rightward Auto-Scroll (Alternating Direction) */}
      <div className="w-full overflow-hidden py-3 group-marquee relative">
        {/* Left & Right Edge Vignette Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#060606] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#060606] to-transparent z-20 pointer-events-none" />

        <div className="animate-marquee-right flex items-center gap-4 sm:gap-6">
          {row2Items.map((tool, idx) => {
            const Icon = tool.icon;
            return (
              <div
                key={`row2-${tool.id}-${idx}`}
                onClick={() => setSelectedTool(tool)}
                className="group/card relative flex-shrink-0 w-[280px] sm:w-[320px] p-4 sm:p-5 rounded-none border border-white/10 bg-[#0b0f14]/80 backdrop-blur-md hover:border-white/40 hover:bg-[#111722] transition-all duration-300 cursor-pointer select-none cross-corner"
                style={{
                  boxShadow: '0 4px 20px rgba(0,0,0,0.6)',
                }}
              >
                {/* Glow accent line at top */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-40 group-hover/card:opacity-100 transition-opacity"
                  style={{ backgroundColor: tool.color }}
                />

                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center p-2 border border-white/10 group-hover/card:scale-105 transition-transform"
                    style={{ backgroundColor: tool.accentBg }}
                  >
                    <Icon className="w-8 h-8" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 truncate">
                      {tool.category}
                    </div>
                    <div className="text-white font-semibold text-base tracking-wide truncate group-hover/card:text-cyan-300 transition-colors">
                      {tool.name}
                    </div>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between font-mono text-[11px] text-neutral-400">
                  <span className="truncate">{tool.tag}</span>
                  <span className="text-neutral-600 group-hover/card:text-white transition-colors">
                    ↗
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Tool Inspection Modal */}
      {selectedTool && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={() => setSelectedTool(null)}
        >
          <div
            className="border border-white/20 bg-[#0e141d] max-w-md w-full p-6 sm:p-8 space-y-6 cross-corner shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-xl p-2.5 border border-white/20 flex items-center justify-center"
                  style={{ backgroundColor: selectedTool.accentBg }}
                >
                  {React.createElement(selectedTool.icon, { className: 'w-10 h-10' })}
                </div>
                <div>
                  <div className="font-mono text-xs text-neutral-400 uppercase tracking-widest">
                    {selectedTool.category}
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {selectedTool.name}
                  </h3>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedTool(null)}
                className="text-neutral-400 hover:text-white font-mono text-xl p-1"
                aria-label="Close details"
              >
                ✕
              </button>
            </div>

            <div className="font-mono text-xs uppercase tracking-wider text-cyan-400 bg-cyan-950/40 border border-cyan-500/20 px-3 py-2">
              {selectedTool.tag}
            </div>

            <p className="text-neutral-300 text-sm leading-relaxed font-sans">
              {selectedTool.description}
            </p>

            <div className="border-t border-white/10 pt-4 flex items-center justify-between font-mono text-xs text-neutral-400">
              <span>PRODUCTION EXPERIENCE</span>
              <span className="text-emerald-400 font-semibold">VERIFIED HANDS-ON</span>
            </div>

            <button
              type="button"
              onClick={() => setSelectedTool(null)}
              className="w-full py-3 bg-white text-black font-semibold uppercase tracking-wider font-mono text-xs hover:bg-neutral-200 transition-colors"
            >
              CLOSE SPECIFICATION
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
