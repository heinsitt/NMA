import React from 'react';
import { useTilt } from '../hooks/useTilt';

interface SkillGroup {
  idx: string;
  title: string;
  sub: string;
  badges: string[];
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    idx: '01',
    title: 'Operating Systems',
    sub: 'Daily drivers & enterprise servers',
    badges: ['Linux (Ubuntu)', 'Linux (RHEL)', 'Windows Server'],
  },
  {
    idx: '02',
    title: 'Cloud & Virtualization',
    sub: 'Core engineering transition focus',
    badges: ['AWS', 'Azure', 'VMware ESXi', 'Proxmox'],
  },
  {
    idx: '03',
    title: 'Networking & Security',
    sub: 'Routed, hardened & monitored',
    badges: ['Cisco', 'MikroTik', 'Firewall', 'VPN', 'DNS', 'Active Directory'],
  },
  {
    idx: '04',
    title: 'Monitoring & Observability',
    sub: 'Full-stack infrastructure visibility',
    badges: ['Zabbix', 'Grafana', 'Prometheus', 'Veeam'],
  },
];

const SkillCard: React.FC<{ group: SkillGroup }> = ({ group }) => {
  const tilt = useTilt({ perspective: 900, maxAngle: 5, translateY: -4 });

  return (
    <div
      className="skill-matrix-card reveal"
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
    >
      <div className="skill-header">
        <h3>{group.title}</h3>
        <span className="skill-idx">{group.idx}</span>
      </div>
      <p className="skill-sub">{group.sub}</p>
      <div className="tech-chips">
        {group.badges.map((badge) => (
          <span className="tech-chip" key={badge}>
            {badge}
          </span>
        ))}
      </div>
    </div>
  );
};

export const Skills: React.FC = () => {
  return (
    <section id="skills">
      <div className="container">
        <div className="sec-header reveal">
          <div className="sec-kicker">02 / Skills & Tools</div>
          <h2 className="sec-title">
            The infrastructure stack <span className="highlight">I operate.</span>
          </h2>
          <p className="sec-sub">
            Battle-tested across production environments — from enterprise servers to cloud network edges.
          </p>
        </div>

        <div className="skills-grid">
          {SKILL_GROUPS.map((group) => (
            <SkillCard key={group.idx} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
};
