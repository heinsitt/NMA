import React, { useEffect, useRef, useState } from 'react';
import {
  Maximize2,
  X,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  ExternalLink,
  Layers,
  Sparkles,
} from 'lucide-react';

export interface RealCredential {
  id: string;
  orderNumber: number;
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

// All 12 verified credentials provided by Naing Moe Aung
export const ALL_CREDENTIALS: RealCredential[] = [
  {
    id: 'sunderland-bsc',
    orderNumber: 1,
    category: 'DEGREE',
    categoryLabel: 'Academic Degree',
    title: 'Bachelor of Science (First Class Honours)',
    subtitle: 'Degree Programme in Computer Science',
    issuer: 'University of Sunderland',
    date: 'March 2026',
    credentialId: '68362933-01-5RNT · SmartVerify+ QR',
    imageSrc: '/assets/aistudio/BechalorofComputerScience_3af7ab3a.png',
    accentColor: '#38BDF8',
    tag: 'FIRST CLASS HONOURS',
    skills: ['Computer Science', 'Distributed Systems', 'Software Engineering', 'System Kernels'],
    description:
      'Awarded First Class Honours in Computer Science by University of Sunderland. Comprehensive studies covering operating systems, algorithm design, software architecture, and distributed enterprise networks.',
  },
  {
    id: 'pearson-btec-hnd',
    orderNumber: 2,
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
    orderNumber: 3,
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
    orderNumber: 4,
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
    orderNumber: 5,
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
    orderNumber: 6,
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
    orderNumber: 7,
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
    orderNumber: 8,
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
    orderNumber: 9,
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
    orderNumber: 10,
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
    orderNumber: 11,
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
    orderNumber: 12,
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

export const EducationCertifications: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [inspectedCredential, setInspectedCredential] = useState<RealCredential | null>(null);
  const [maxTravelDistance, setMaxTravelDistance] = useState<number>(3600);

  // Measure track dimensions dynamically for pixel-perfect translation
  const updateMetrics = () => {
    if (!trackRef.current) return;
    const trackWidth = trackRef.current.scrollWidth;
    const viewportWidth = window.innerWidth;
    // The total distance needed to slide all cards across the screen
    const travel = Math.max(0, trackWidth - viewportWidth + 120);
    setMaxTravelDistance(travel);
  };

  useEffect(() => {
    updateMetrics();
    window.addEventListener('resize', updateMetrics);
    return () => window.removeEventListener('resize', updateMetrics);
  }, []);

  // Scroll listener tracking position through the pinned 320vh container
  useEffect(() => {
    let animFrame: number;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = rect.height - window.innerHeight;

      if (totalScrollable <= 0) return;

      // Scrolled distance inside the sticky container:
      // When rect.top is 0 (container hits top of screen): progress = 0
      // When rect.top is -totalScrollable (bottom of container reaches bottom of screen): progress = 1
      const scrolled = -rect.top;
      const progress = Math.min(Math.max(scrolled / totalScrollable, 0), 1);

      setScrollProgress(progress);
    };

    const onScroll = () => {
      cancelAnimationFrame(animFrame);
      animFrame = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  // Compute smooth horizontal translation:
  // When user scrolls DOWN vertically:
  // progress goes from 0 -> 1.
  // The cards smoothly slide horizontally from LEFT TO RIGHT!
  // When user scrolls back UP:
  // progress goes from 1 -> 0, reversing smoothly from RIGHT TO LEFT!
  // At progress = 1, all cards have appeared, and then scrolling continues down to next session!
  const currentTranslateX = -maxTravelDistance * (1 - scrollProgress) + 40 * scrollProgress;

  return (
    <section id="education" ref={containerRef} className="relative h-[340vh] bg-[#070b10]">
      {/* Sticky Full-Viewport Container that locks while cards slide horizontally */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between py-6 sm:py-8 bg-[#070b10] border-t border-white/10 z-20">
        {/* Subtle Ambient Backlighting */}
        <div className="absolute top-1/4 left-1/3 w-[550px] h-[550px] bg-cyan-600/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-amber-600/5 rounded-full blur-[140px] pointer-events-none" />

        {/* Section Top Header & HUD */}
        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 relative z-10 flex-shrink-0">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <div className="flex items-center gap-2.5 font-mono text-[11px] sm:text-xs tracking-wider text-neutral-400 uppercase mb-1">
                <span className="text-neutral-600">|</span>
                <span className="text-white font-medium">[ 03 / 05 ]</span>
                <span className="text-neutral-600">·</span>
                <span className="text-cyan-400">ACCREDITATIONS & CERTIFICATIONS</span>
              </div>

              <h2 className="font-bebas text-[clamp(2.5rem,5.5vw,4.8rem)] leading-[0.9] tracking-tight text-white select-none">
                EDUCATION & CERTIFICATIONS
              </h2>

              <p className="text-neutral-400 text-xs sm:text-sm font-sans mt-1">
                Scroll vertically to glide through all 12 verified degrees and certifications from Left to Right.
              </p>
            </div>

            {/* Scroll Progress Meter HUD */}
            <div className="flex items-center gap-4">
              <div className="border border-white/15 bg-black/80 px-4 py-2 font-mono text-xs uppercase tracking-wider space-y-1 min-w-[210px]">
                <div className="flex justify-between items-center text-neutral-400 text-[11px]">
                  <span>HORIZONTAL MOTION</span>
                  <span className="text-cyan-300 font-semibold tabular-nums">
                    {Math.round(scrollProgress * 100)}%
                  </span>
                </div>
                <div className="w-full bg-white/10 h-1 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-cyan-400 via-teal-300 to-amber-400 h-full transition-all duration-75"
                    style={{ width: `${Math.round(scrollProgress * 100)}%` }}
                  />
                </div>
                <div className="flex justify-between text-[10px] text-neutral-500">
                  <span>LEFT ◄ (UP)</span>
                  <span className="text-white">SLIDING</span>
                  <span>(DOWN) ► RIGHT</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* HORIZONTAL CARDS STREAM (Smooth 60fps Scroll-Driven Slide from Left to Right) */}
        <div className="w-full overflow-hidden my-auto py-2 relative flex-1 flex items-center">
          {/* Subtle edge vignette fades */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#070b10] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#070b10] to-transparent z-10 pointer-events-none" />

          <div
            ref={trackRef}
            className="flex items-stretch gap-6 px-6 sm:px-12 w-max will-change-transform transition-transform duration-100 ease-out select-none"
            style={{
              transform: `translateX(${currentTranslateX}px)`,
            }}
          >
            {/* Cards arranged in reverse order so that as track slides Left-to-Right,
                Degree 01 (University of Sunderland) starts on screen, followed by Pearson BTEC,
                AWS, KodeKloud, Docker, Linux Foundation, VMware, etc.! */}
            {[...ALL_CREDENTIALS].reverse().map((item) => (
              <div
                key={item.id}
                className="group relative w-[340px] sm:w-[400px] flex-shrink-0 border border-white/15 bg-[#0d121a]/95 backdrop-blur-md p-5 sm:p-6 flex flex-col justify-between cross-corner shadow-2xl hover:border-white/50 transition-all duration-300"
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
                  {/* Category Badge & Numeric Index */}
                  <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-wider mb-3">
                    <span
                      className="px-2.5 py-0.5 font-semibold border"
                      style={{
                        color: item.accentColor,
                        borderColor: `${item.accentColor}40`,
                        backgroundColor: `${item.accentColor}10`,
                      }}
                    >
                      {item.tag}
                    </span>
                    <span className="text-neutral-500 font-mono">
                      [ {String(item.orderNumber).padStart(2, '0')} / 12 ]
                    </span>
                  </div>

                  {/* Header Title & Issuer */}
                  <div className="space-y-0.5 mb-3">
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug group-hover:text-cyan-200 transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <div className="font-mono text-[11px] text-neutral-400 truncate">
                      {item.subtitle}
                    </div>
                    <div className="text-[11px] text-cyan-400 font-mono font-medium truncate">
                      {item.issuer}
                    </div>
                  </div>

                  {/* Real Certificate Image with Lightbox Zoom Trigger */}
                  <div
                    onClick={() => setInspectedCredential(item)}
                    className="relative aspect-[16/10] w-full rounded-none border border-white/20 bg-black overflow-hidden mb-3 group/image cursor-pointer shadow-lg"
                  >
                    <img
                      src={item.imageSrc}
                      alt={`${item.title} — ${item.issuer}`}
                      className="w-full h-full object-contain p-1 filter contrast-105 group-hover/image:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />

                    {/* Hover Inspect Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/image:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-mono text-xs font-semibold uppercase tracking-wider backdrop-blur-[2px]">
                      <Maximize2 size={15} />
                      <span>CLICK TO EXPAND</span>
                    </div>

                    {/* Corner Verification Badge */}
                    <div className="absolute top-2 right-2 px-1.5 py-0.5 bg-black/85 border border-white/20 font-mono text-[9px] text-emerald-400 uppercase tracking-widest flex items-center gap-1">
                      <CheckCircle2 size={10} />
                      <span>VERIFIED</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-neutral-300 text-xs font-sans leading-relaxed line-clamp-2 mb-3">
                    {item.description}
                  </p>

                  {/* Skills Cloud */}
                  <div className="flex flex-wrap gap-1 pt-2 border-t border-white/10">
                    {item.skills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="font-mono text-[9.5px] uppercase tracking-wider px-2 py-0.5 bg-white/5 text-neutral-300 border border-white/10 truncate"
                      >
                        {skill}
                      </span>
                    ))}
                    {item.skills.length > 3 && (
                      <span className="font-mono text-[9.5px] uppercase tracking-wider px-1.5 py-0.5 text-neutral-500">
                        +{item.skills.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom Metadata & View Action */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between font-mono text-[11px]">
                  <span className="text-neutral-500 truncate max-w-[180px]">
                    {item.date}
                  </span>
                  <button
                    type="button"
                    onClick={() => setInspectedCredential(item)}
                    className="text-white hover:text-cyan-300 flex items-center gap-1 font-semibold transition-colors cursor-pointer"
                  >
                    <span>INSPECT</span>
                    <Maximize2 size={11} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section Bottom Guidance Bar */}
        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 relative z-10 flex-shrink-0">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono text-xs text-neutral-500 uppercase tracking-wider border-t border-white/10 pt-3">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>
                {scrollProgress < 0.98
                  ? 'SCROLL DOWN TO REVEAL ALL CARDS FROM LEFT TO RIGHT'
                  : 'ALL 12 CARDS REVEALED — SCROLL DOWN TO ENTER EXPERIENCE SECTION ↓'}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-white font-medium">TOTAL 12 CREDENTIALS</span>
              <span>·</span>
              <span>DEGREES & INDUSTRY ACCREDITATIONS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Full High-Resolution Lightbox Modal */}
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
            <div className="w-full bg-black/95 border border-white/10 p-2 sm:p-3 overflow-hidden flex items-center justify-center">
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
