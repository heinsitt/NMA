import React, { useEffect, useRef, useState } from 'react';
import {
  GraduationCap,
  Award,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  FileCheck,
  Server,
  Cloud,
  CheckCircle2,
} from 'lucide-react';

export interface RealCredential {
  id: string;
  category: 'DEGREE' | 'CLOUD' | 'LINUX' | 'NETWORKING_VIRT';
  categoryLabel: string;
  title: string;
  subtitle: string;
  issuer: string;
  date: string;
  credentialId?: string;
  imageSrc: string;
  accentColor: string;
  tag: string;
  skills: string[];
  description: string;
}

export const CREDENTIAL_RECORDS: RealCredential[] = [
  {
    id: 'sunderland-bsc',
    category: 'DEGREE',
    categoryLabel: 'Academic Degree',
    title: 'Bachelor of Science (First Class Honours)',
    subtitle: 'Programme in Computer Science',
    issuer: 'University of Sunderland',
    date: 'March 2026',
    credentialId: '68362933-01-5RNT · SmartVerify+ QR',
    imageSrc: '/assets/aistudio/BechalorofComputerScience_3af7ab3a.png',
    accentColor: '#38BDF8',
    tag: 'FIRST CLASS HONOURS',
    skills: ['Computer Science', 'Distributed Systems', 'Software Engineering', 'System Kernels'],
    description:
      'Awarded First Class Honours in Computer Science by University of Sunderland. Comprehensive curriculum covering software systems architecture, operating systems theory, algorithmics, and distributed networks.',
  },
  {
    id: 'pearson-btec-hnd',
    category: 'DEGREE',
    categoryLabel: 'Higher National Diploma',
    title: 'Pearson BTEC Level 5 HND in Computing',
    subtitle: 'General Computing · Awarded With Merit',
    issuer: 'Pearson BTEC / Youth International College',
    date: 'June 2025',
    credentialId: 'Ofqual Regulated · QN 603/7596/6',
    imageSrc: '/assets/aistudio/lv5diploma_0480a640.png',
    accentColor: '#0EA5E9',
    tag: 'AWARDED WITH MERIT',
    skills: ['Network Architecture', 'Database Design', 'Systems Administration', 'Security Operations'],
    description:
      'UK Ofqual-regulated Level 5 Higher National Diploma in Computing with Merit. Thorough grounding in enterprise networking, system analysis, relational database engineering, and computing architectures.',
  },
  {
    id: 'aws-cloud-practitioner',
    category: 'CLOUD',
    categoryLabel: 'Cloud Architecture',
    title: 'AWS Certified Cloud Practitioner',
    subtitle: '56 Total Hours Deep Architecture Curriculum',
    issuer: 'Amazon Web Services (AWS) / Udemy',
    date: 'January 17, 2025',
    credentialId: 'UC-d55e85d7-3e23-4572-a978-da0adc03dedc',
    imageSrc: '/assets/aistudio/awscertifiedcloud_14bed4f8.png',
    accentColor: '#FF9900',
    tag: 'AWS CERTIFIED',
    skills: ['VPC Peering', 'EC2 Compute', 'IAM Governance', 'S3 & CloudFront'],
    description:
      'Completed comprehensive AWS cloud foundations covering multi-availability zone architectures, IAM least-privilege security policies, Elastic Load Balancing, RDS databases, and billing governance.',
  },
  {
    id: 'kodekloud-aws-100days',
    category: 'CLOUD',
    categoryLabel: 'Cloud Architecture',
    title: '100 Days of Cloud (AWS)',
    subtitle: 'Hands-on Multi-tier Infrastructure Engineering',
    issuer: 'KodeKloud',
    date: 'January 16, 2026',
    credentialId: 'KodeKloud Verified Completion',
    imageSrc: '/assets/aistudio/100daysofcloud-aws_45df65b0.png',
    accentColor: '#FF9900',
    tag: '100 DAYS OF CLOUD',
    skills: ['AWS VPC', 'Infrastructure Automation', 'EC2 & S3', 'CloudWatch'],
    description:
      'Intensive 100-day hands-on cloud challenge by Mumshad Mannambeth. Built enterprise AWS architectures, containerized environments, networking VPC routing tables, and automated disaster recovery workflows.',
  },
  {
    id: 'kodekloud-azure-100days',
    category: 'CLOUD',
    categoryLabel: 'Cloud Architecture',
    title: '100 Days of Cloud (Azure)',
    subtitle: 'Microsoft Azure Compute & Virtual Networking',
    issuer: 'KodeKloud',
    date: 'March 14, 2026',
    credentialId: 'KodeKloud Verified Completion',
    imageSrc: '/assets/aistudio/100daysofcloud-azure_568f0248.png',
    accentColor: '#0089D6',
    tag: 'AZURE CLOUD',
    skills: ['Azure VNet', 'Azure Resource Manager', 'Virtual Machines', 'Hybrid Cloud'],
    description:
      'Engineered Microsoft Azure environments including Virtual Networks (VNets), Network Security Groups (NSGs), Azure Virtual Machines, Storage Accounts, and hybrid cloud integration.',
  },
  {
    id: 'docker-level1',
    category: 'CLOUD',
    categoryLabel: 'DevOps & Containers',
    title: 'Docker — Level 1 Topic Completion',
    subtitle: 'Production Containerization & Orchestration',
    issuer: 'KodeKloud Engineer',
    date: 'December 2025 – May 2026',
    credentialId: 'F7c8a89e-Cda7-461c-8c91-00107b28c922',
    imageSrc: '/assets/aistudio/docker-lv1_1cf83985.png',
    accentColor: '#38BDF8',
    tag: 'KODEKLOUD ENGINEER',
    skills: ['Multi-Stage Dockerfiles', 'Container Isolation', 'Volume Mounts', 'Compose Stacks'],
    description:
      'Verified competency on KodeKloud Engineer platform: building optimized Docker images, managing isolated container networks, mounting persistent volumes, and running production Docker Compose stacks.',
  },
  {
    id: 'linux-foundation-lfs101',
    category: 'LINUX',
    categoryLabel: 'Operating Systems',
    title: 'Introduction to Linux (LFS101)',
    subtitle: 'The Linux Foundation Official Curriculum',
    issuer: 'The Linux Foundation',
    date: 'August 09, 2025',
    credentialId: 'LF-4pp7o9suvp',
    imageSrc: '/assets/aistudio/introoflinux_04b47e06.png',
    accentColor: '#10B981',
    tag: 'LINUX FOUNDATION',
    skills: ['Linux Kernel', 'Bash Automation', 'Filesystem Hierarchy', 'System Administration'],
    description:
      'Official Linux Foundation accreditation signed by VP of Education Timothy Serewicz. Mastery of low-level Linux fundamentals, process management, file permissions, shell piping, and CLI administration.',
  },
  {
    id: 'bnn-linux-special',
    category: 'LINUX',
    categoryLabel: 'Operating Systems',
    title: 'Enterprise Linux Special Class',
    subtitle: 'Debian, Ubuntu, Red Hat 9, Rocky Linux 9 & CentOS 9',
    issuer: 'BNN Tech',
    date: 'February 01, 2026',
    credentialId: 'BNN TECH Verified #2026-02',
    imageSrc: '/assets/aistudio/linuxspecialclass_8fb9d8f9.jpg',
    accentColor: '#22C55E',
    tag: 'ENTERPRISE LINUX',
    skills: ['Red Hat 9', 'Rocky Linux 9', 'SELinux Hardening', 'Systemd Services'],
    description:
      'In-depth enterprise Linux administration across Debian/Ubuntu and Red Hat 9 / Rocky Linux 9 ecosystems. Focused on system troubleshooting, LVM storage configuration, SELinux enforcement, and automated maintenance.',
  },
  {
    id: 'microsoft-server-admin',
    category: 'LINUX',
    categoryLabel: 'Enterprise Systems',
    title: 'Microsoft Server Administration',
    subtitle: 'MCSA Windows Server 2016 Infrastructure',
    issuer: 'CCNA VCE Training IT Solution Center',
    date: '2025 Completion',
    credentialId: 'CCNA VCE Center Verified',
    imageSrc: '/assets/aistudio/microsofrserver_f6d63fb2.png',
    accentColor: '#60A5FA',
    tag: 'WINDOWS SERVER',
    skills: ['Active Directory DS', 'DNS & DHCP Roles', 'Group Policy (GPO)', 'Hyper-V'],
    description:
      'Comprehensive Windows Server infrastructure: designing Active Directory forests, organizational units, Group Policy enforcement, federated access, DNS server zones, and enterprise user management.',
  },
  {
    id: 'engenius-ecnp',
    category: 'NETWORKING_VIRT',
    categoryLabel: 'Networking',
    title: 'EnGenius Certified Network Professional (ECNP)',
    subtitle: 'Enterprise Wireless & Switching Topologies',
    issuer: 'EnGenius Technologies',
    date: 'April 19, 2025',
    credentialId: '68038ebd7977f78b3104bf45',
    imageSrc: '/assets/aistudio/engeniusnetworkpro_04607545.png',
    accentColor: '#0284C7',
    tag: 'ECNP CERTIFIED',
    skills: ['L2/L3 Switching', 'VLAN Trunking', 'Cloud AP Controller', 'RF Site Survey'],
    description:
      'Certified by EnGenius Technologies VP of Global Branding Roger Liu. Rigorous assessment in enterprise network design, high-density wireless deployment, managed switch topologies, and cloud gateway security.',
  },
  {
    id: 'bim-vmware-admin',
    category: 'NETWORKING_VIRT',
    categoryLabel: 'Virtualization',
    title: 'VMware Administration (2 Months)',
    subtitle: 'Production ESXi Hypervisors & vCenter Server',
    issuer: 'BIM Trainings',
    date: 'June 28, 2025',
    credentialId: 'BIM-TRN-VMW-2025',
    imageSrc: '/assets/aistudio/vmwareadministration_3b6d11bd.png',
    accentColor: '#0095D3',
    tag: 'VMWARE SPHERE',
    skills: ['ESXi Clustering', 'vCenter Server', 'vSwitch Networking', 'Datastore HA'],
    description:
      'Intensive two-month datacenter virtualization program certified by BIM Trainings Principal Htun Win Naing. Deployed bare-metal VMware ESXi hypervisors, configured vCenter High Availability, and managed live migration.',
  },
  {
    id: 'virtuozzo-foundations',
    category: 'NETWORKING_VIRT',
    categoryLabel: 'Virtualization',
    title: 'Virtuozzo Foundations for Sales & Technology',
    subtitle: 'Hyperconverged Infrastructure & Cloud Virtualization',
    issuer: 'Virtuozzo Training Portal',
    date: 'July 01, 2026',
    credentialId: '35E8353-36E39F8-31199E3',
    imageSrc: '/assets/aistudio/virtuozzo_bf5d825e.jpg',
    accentColor: '#EF4444',
    tag: 'VIRTUOZZO PORTAL',
    skills: ['Hyperconverged Infra', 'Storage Virtualization', 'Container Virtualization', 'Private Cloud'],
    description:
      'Verified completion of Virtuozzo virtualization architecture, hyperconverged storage clusters, and next-generation cloud infrastructure deployments.',
  },
];

type FilterCategory = 'ALL' | 'DEGREE' | 'CLOUD' | 'LINUX' | 'NETWORKING_VIRT';

export const EducationCertifications: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [scrollRatio, setScrollRatio] = useState<number>(0);
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('ALL');
  const [inspectedCredential, setInspectedCredential] = useState<RealCredential | null>(null);

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const totalScrollableDistance = rect.height + windowHeight;
      const scrolled = windowHeight - rect.top;
      const progress = Math.min(Math.max(scrolled / totalScrollableDistance, 0), 1);

      setScrollRatio(progress);
    };

    const onScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Filter items based on active tab
  const displayedItems =
    activeFilter === 'ALL'
      ? CREDENTIAL_RECORDS
      : CREDENTIAL_RECORDS.filter((c) => c.category === activeFilter);

  // Compute horizontal scroll transform:
  // As user scrolls DOWN: progress goes from 0 -> 1
  // Cards smoothly slide horizontally from Left to Right!
  // At progress = 0: translateX is negative (positioned to the left)
  // At progress = 1: translateX slides positively to the right
  // When scrolling UP: progress decreases, moving smoothly from Right to Left!
  const translateXOffset = (scrollRatio - 0.5) * 620;

  const handleManualScroll = (direction: 'left' | 'right') => {
    if (!trackRef.current) return;
    const scrollAmount = direction === 'left' ? -420 : 420;
    trackRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <section
      id="education"
      ref={sectionRef}
      className="relative py-24 sm:py-32 border-t border-white/10 bg-[#080808] overflow-hidden"
    >
      {/* Ambient Visual Backlight */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-amber-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2.5 font-mono text-[11px] sm:text-xs tracking-wider text-neutral-400 uppercase mb-4">
              <span className="text-neutral-600">|</span>
              <span className="text-white font-medium">[ 03 / 05 ]</span>
              <span className="text-neutral-600">·</span>
              <span className="text-cyan-400">VERIFIED ACADEMIC & TECHNICAL ACCREDITATIONS</span>
            </div>

            <h2 className="font-bebas text-[clamp(3.2rem,8vw,7.5rem)] leading-[0.9] tracking-tight text-white select-none">
              EDUCATION & CERTIFICATIONS
            </h2>

            <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mt-4 font-sans leading-relaxed">
              Official university degrees and industry credentials verified in production systems,
              cloud engineering, and enterprise virtualization.
              <span className="text-neutral-300 font-medium block mt-1">
                ↓ Scroll down to slide cards from Left to Right · Scroll up to reverse from Right to Left.
              </span>
            </p>
          </div>

          {/* Dynamic Scroll HUD & Navigation Controls */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {/* Scroll Trajectory Indicator */}
            <div className="border border-white/15 bg-black/70 backdrop-blur-md px-5 py-3 font-mono text-xs uppercase tracking-wider space-y-1.5 min-w-[240px]">
              <div className="flex justify-between items-center text-neutral-400">
                <span>SCROLL TRAJECTORY</span>
                <span className="text-cyan-300 font-semibold tabular-nums">
                  {Math.round(scrollRatio * 100)}%
                </span>
              </div>
              <div className="w-full bg-white/10 h-1.5 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-cyan-400 via-teal-300 to-amber-400 h-full transition-all duration-75"
                  style={{ width: `${Math.round(scrollRatio * 100)}%` }}
                />
              </div>
              <div className="flex justify-between text-[10px] text-neutral-500 pt-0.5">
                <span>◄ LEFT (UP)</span>
                <span className="text-white font-medium">REVERSE ACTIVE</span>
                <span>RIGHT (DOWN) ►</span>
              </div>
            </div>

            {/* Manual Nudge Buttons */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => handleManualScroll('left')}
                className="w-11 h-11 border border-white/20 bg-black/80 hover:bg-white hover:text-black text-white flex items-center justify-center transition-all cursor-pointer"
                aria-label="Scroll cards left"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={() => handleManualScroll('right')}
                className="w-11 h-11 border border-white/20 bg-black/80 hover:bg-white hover:text-black text-white flex items-center justify-center transition-all cursor-pointer"
                aria-label="Scroll cards right"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Filter Chips Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-8 font-mono text-xs uppercase tracking-wider">
          <button
            type="button"
            onClick={() => setActiveFilter('ALL')}
            className={`px-3.5 py-1.5 border transition-all cursor-pointer ${
              activeFilter === 'ALL'
                ? 'bg-white text-black font-semibold border-white'
                : 'border-white/15 text-neutral-400 hover:text-white hover:border-white/30 bg-black/40'
            }`}
          >
            ALL ACCREDITATIONS ({CREDENTIAL_RECORDS.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('DEGREE')}
            className={`px-3.5 py-1.5 border transition-all cursor-pointer ${
              activeFilter === 'DEGREE'
                ? 'bg-white text-black font-semibold border-white'
                : 'border-white/15 text-neutral-400 hover:text-white hover:border-white/30 bg-black/40'
            }`}
          >
            DEGREES & DIPLOMAS (2)
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('CLOUD')}
            className={`px-3.5 py-1.5 border transition-all cursor-pointer ${
              activeFilter === 'CLOUD'
                ? 'bg-white text-black font-semibold border-white'
                : 'border-white/15 text-neutral-400 hover:text-white hover:border-white/30 bg-black/40'
            }`}
          >
            CLOUD & DEVOPS (4)
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('LINUX')}
            className={`px-3.5 py-1.5 border transition-all cursor-pointer ${
              activeFilter === 'LINUX'
                ? 'bg-white text-black font-semibold border-white'
                : 'border-white/15 text-neutral-400 hover:text-white hover:border-white/30 bg-black/40'
            }`}
          >
            LINUX & SYSTEMS (3)
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('NETWORKING_VIRT')}
            className={`px-3.5 py-1.5 border transition-all cursor-pointer ${
              activeFilter === 'NETWORKING_VIRT'
                ? 'bg-white text-black font-semibold border-white'
                : 'border-white/15 text-neutral-400 hover:text-white hover:border-white/30 bg-black/40'
            }`}
          >
            NETWORKING & VIRTUALIZATION (3)
          </button>
        </div>
      </div>

      {/* HORIZONTAL SLIDING CARD TRACK
          Driven by vertical scroll position:
          Smooth transform translateX moves from left to right as you scroll down */}
      <div
        ref={trackRef}
        className="w-full overflow-x-auto no-scrollbar py-6 cursor-grab active:cursor-grabbing select-none"
      >
        <div
          className="flex items-stretch gap-6 px-4 sm:px-8 w-max transition-transform duration-150 ease-out will-change-transform"
          style={{
            transform: `translateX(${translateXOffset}px)`,
          }}
        >
          {displayedItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative w-[350px] sm:w-[420px] flex-shrink-0 border border-white/15 bg-[#0d121a]/95 backdrop-blur-md p-6 sm:p-7 flex flex-col justify-between cross-corner shadow-2xl hover:border-white/50 transition-all duration-300"
              style={{
                boxShadow: '0 8px 32px rgba(0,0,0,0.7), inset 0 0 20px rgba(0,0,0,0.4)',
              }}
            >
              {/* Top Glowing Header Accent Bar */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px] opacity-70 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: item.accentColor }}
              />

              <div>
                {/* Category Badge & Serial */}
                <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-wider mb-4">
                  <span
                    className="px-2.5 py-1 font-semibold border"
                    style={{
                      color: item.accentColor,
                      borderColor: `${item.accentColor}40`,
                      backgroundColor: `${item.accentColor}10`,
                    }}
                  >
                    {item.tag}
                  </span>
                  <span className="text-neutral-500">
                    [ {String(index + 1).padStart(2, '0')} / {String(displayedItems.length).padStart(2, '0')} ]
                  </span>
                </div>

                {/* Header Title & Issuer */}
                <div className="space-y-1 mb-5">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug group-hover:text-cyan-200 transition-colors">
                    {item.title}
                  </h3>
                  <div className="font-mono text-xs text-neutral-400">
                    {item.subtitle}
                  </div>
                  <div className="text-xs text-cyan-400 font-mono pt-1 font-medium">
                    {item.issuer}
                  </div>
                </div>

                {/* Real Certificate Image Container with Preview Interaction */}
                <div
                  onClick={() => setInspectedCredential(item)}
                  className="relative aspect-[16/11] w-full rounded-none border border-white/20 bg-black overflow-hidden mb-5 group/image cursor-pointer shadow-lg"
                >
                  <img
                    src={item.imageSrc}
                    alt={`${item.title} — ${item.issuer}`}
                    className="w-full h-full object-contain p-1 filter contrast-105 group-hover/image:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* Hover Inspect Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/image:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-mono text-xs font-semibold uppercase tracking-wider backdrop-blur-[2px]">
                    <Maximize2 size={16} />
                    <span>EXPAND CERTIFICATE</span>
                  </div>

                  {/* Corner Verification Stamp */}
                  <div className="absolute top-2 right-2 px-2 py-0.5 bg-black/80 border border-white/20 font-mono text-[9px] text-emerald-400 uppercase tracking-widest flex items-center gap-1">
                    <CheckCircle2 size={10} />
                    <span>VERIFIED</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-neutral-300 text-xs sm:text-sm font-sans leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* Skills Cloud */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 bg-white/5 text-neutral-300 border border-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Metadata & Expand Action */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs">
                <span className="text-neutral-500 truncate max-w-[200px]">
                  {item.date}
                </span>
                <button
                  type="button"
                  onClick={() => setInspectedCredential(item)}
                  className="text-white hover:text-cyan-300 flex items-center gap-1.5 font-semibold transition-colors cursor-pointer"
                >
                  <span>VIEW CERT</span>
                  <Maximize2 size={12} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Track Summary Bar */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-neutral-500 uppercase tracking-wider">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span>REVERSE-DIRECTION SCROLL ENGINE ACTIVE · 60FPS SYNCHRONIZATION</span>
        </div>
        <div className="flex items-center gap-4">
          <span>TOTAL CREDENTIALS: {CREDENTIAL_RECORDS.length}</span>
          <span>·</span>
          <span>UNIVERSITY OF SUNDERLAND · PEARSON BTEC · LINUX FOUNDATION · AWS · KODEKLOUD</span>
        </div>
      </div>

      {/* High-Resolution Certificate Lightbox Modal */}
      {inspectedCredential && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl"
          onClick={() => setInspectedCredential(null)}
        >
          <div
            className="border border-white/20 bg-[#0a0f16] max-w-4xl w-full p-4 sm:p-7 space-y-4 cross-corner shadow-2xl relative max-h-[95vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-white/10 pb-4">
              <div>
                <span
                  className="font-mono text-xs uppercase tracking-widest px-2.5 py-0.5 border"
                  style={{
                    color: inspectedCredential.accentColor,
                    borderColor: `${inspectedCredential.accentColor}40`,
                    backgroundColor: `${inspectedCredential.accentColor}10`,
                  }}
                >
                  {inspectedCredential.tag}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-2">
                  {inspectedCredential.title}
                </h3>
                <div className="text-xs font-mono text-neutral-400 mt-1">
                  {inspectedCredential.issuer} · {inspectedCredential.date}
                </div>
              </div>

              <button
                type="button"
                onClick={() => setInspectedCredential(null)}
                className="text-neutral-400 hover:text-white font-mono text-2xl p-1.5 cursor-pointer"
                aria-label="Close certificate inspection"
              >
                <X size={22} />
              </button>
            </div>

            {/* High-Resolution Certificate Render */}
            <div className="w-full bg-black/90 border border-white/10 p-2 sm:p-3 overflow-hidden flex items-center justify-center">
              <img
                src={inspectedCredential.imageSrc}
                alt={inspectedCredential.title}
                className="max-h-[60vh] w-auto object-contain mx-auto shadow-2xl filter contrast-105"
              />
            </div>

            {/* Credential Specification Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs pt-2">
              <div className="border border-white/10 bg-white/5 p-3 space-y-1">
                <span className="text-neutral-500 text-[10px] uppercase block">
                  ISSUING AUTHORITY
                </span>
                <span className="text-white font-semibold block">
                  {inspectedCredential.issuer}
                </span>
                {inspectedCredential.credentialId && (
                  <span className="text-cyan-400 text-[11px] block truncate">
                    ID: {inspectedCredential.credentialId}
                  </span>
                )}
              </div>

              <div className="border border-white/10 bg-white/5 p-3 space-y-1">
                <span className="text-neutral-500 text-[10px] uppercase block">
                  ACCREDITATION STATUS
                </span>
                <span className="text-emerald-400 font-semibold block flex items-center gap-1.5">
                  <CheckCircle2 size={13} />
                  <span>OFFICIALLY VERIFIED & AWARDED</span>
                </span>
                <span className="text-neutral-400 text-[11px] block">
                  {inspectedCredential.date}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-neutral-300 text-sm leading-relaxed font-sans pt-1">
              {inspectedCredential.description}
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {inspectedCredential.skills.map((skill) => (
                <span
                  key={skill}
                  className="font-mono text-xs px-2.5 py-1 bg-white/5 border border-white/15 text-white"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Close Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setInspectedCredential(null)}
                className="w-full py-3 bg-white text-black font-semibold uppercase tracking-wider font-mono text-xs hover:bg-neutral-200 transition-colors cursor-pointer"
              >
                CLOSE CERTIFICATE VIEWER
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
