import React from 'react';
import { ListVideo, Terminal, Cloud, Network, Activity } from 'lucide-react';

interface Playlist {
  id: string;
  title: string;
  count: string;
  icon: React.ReactNode;
  category: string;
  techs: string[];
}

const PLAYLISTS: Playlist[] = [
  {
    id: 'os',
    title: 'Operating Systems & Enterprise Servers',
    count: '3 items',
    icon: <Terminal size={18} color="#ff0000" />,
    category: 'Daily drivers & enterprise servers',
    techs: ['Linux (Ubuntu)', 'Linux (RHEL)', 'Windows Server'],
  },
  {
    id: 'cloud',
    title: 'Cloud Platforms & Hypervisors',
    count: '4 items',
    icon: <Cloud size={18} color="#3ea6ff" />,
    category: 'Core cloud engineering transition focus',
    techs: ['AWS', 'Azure', 'VMware ESXi', 'Proxmox'],
  },
  {
    id: 'network',
    title: 'Routing, Switching & Network Security',
    count: '6 items',
    icon: <Network size={18} color="#f59e0b" />,
    category: 'Routed, hardened & monitored perimeter',
    techs: ['Cisco', 'MikroTik', 'Firewall', 'VPN', 'DNS', 'Active Directory'],
  },
  {
    id: 'observability',
    title: 'Monitoring, Telemetry & Disaster Recovery',
    count: '4 items',
    icon: <Activity size={18} color="#2ba640" />,
    category: 'Full-stack infrastructure visibility & backup',
    techs: ['Zabbix', 'Grafana', 'Prometheus', 'Veeam'],
  },
];

export const YouTubeSkills: React.FC = () => {
  return (
    <section id="skills" className="yt-section">
      <div className="container">
        <div className="yt-sec-header yt-reveal">
          <div className="yt-sec-title">
            <span className="red-badge">Playlists</span>
            <h2>Technology Stacks & Tools</h2>
          </div>
          <p className="yt-sec-sub">
            Curated playlists of battle-tested infrastructure technologies operated across enterprise production environments.
          </p>
        </div>

        <div className="yt-video-grid">
          {PLAYLISTS.map((pl) => (
            <div className="yt-card yt-playlist-stack yt-reveal" key={pl.id}>
              <div
                className="yt-card-thumb"
                style={{
                  background: 'linear-gradient(135deg, #181818 0%, #242424 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div style={{ transform: 'scale(1.4)' }}>{pl.icon}</div>
                <div className="yt-playlist-badge">
                  <ListVideo size={13} />
                  <span>{pl.count}</span>
                </div>
              </div>

              <div className="yt-card-body">
                <h3>{pl.title}</h3>
                <div className="yt-card-author">
                  <span>{pl.category}</span>
                </div>

                <div className="yt-tags-cloud">
                  {pl.techs.map((tech) => (
                    <span className="yt-tech-tag" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
