import React from 'react';
import { Building2, CheckCircle2, Radio, Server } from 'lucide-react';

export const YouTubeExperience: React.FC = () => {
  return (
    <section id="experience" className="yt-section">
      <div className="container">
        <div className="yt-sec-header yt-reveal">
          <div className="yt-sec-title">
            <span className="red-badge">Broadcast 01</span>
            <h2>Career History & NOC Operations</h2>
          </div>
          <p className="yt-sec-sub">
            Verified production operations keeping mission-critical networks running 24/7 without downtime.
          </p>
        </div>

        <div className="yt-card yt-reveal" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap', marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div
                style={{
                  background: '#ffffff',
                  borderRadius: '12px',
                  padding: '8px 14px',
                  display: 'flex',
                  alignItems: 'center',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.4)',
                }}
              >
                <img
                  src="/media/bim-logo.jpg"
                  alt="BIM Group of Companies"
                  style={{ height: '38px', width: 'auto', display: 'block' }}
                  referrerPolicy="no-referrer"
                />
              </div>

              <div>
                <h3 style={{ fontSize: '19px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span>Former NOC Engineer</span>
                  <CheckCircle2 size={16} color="#3ea6ff" />
                </h3>
                <div style={{ color: '#aaaaaa', fontSize: '13px', marginTop: '2px' }}>
                  <span>BIM Group of Companies</span>
                  <span style={{ margin: '0 8px' }}>·</span>
                  <span>Network Operations Center</span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div className="yt-live-beacon" style={{ background: 'rgba(62, 166, 255, 0.1)', color: '#3ea6ff', borderColor: 'rgba(62, 166, 255, 0.3)' }}>
                <Server size={12} />
                <span>ENTERPRISE NOC</span>
              </div>
            </div>
          </div>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '18px' }}>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li style={{ color: '#d1d5db', fontSize: '14.5px', paddingLeft: '22px', position: 'relative', lineHeight: '1.6' }}>
                <span style={{ position: 'absolute', left: '0', color: '#ff0000', fontWeight: 700 }}>›</span>
                Monitored enterprise network infrastructure, active server health, and service availability across all business units.
              </li>
              <li style={{ color: '#d1d5db', fontSize: '14.5px', paddingLeft: '22px', position: 'relative', lineHeight: '1.6' }}>
                <span style={{ position: 'absolute', left: '0', color: '#ff0000', fontWeight: 700 }}>›</span>
                Executed structured incident response, network troubleshooting, and multi-tier escalation protocols for zero-downtime operations.
              </li>
              <li style={{ color: '#d1d5db', fontSize: '14.5px', paddingLeft: '22px', position: 'relative', lineHeight: '1.6' }}>
                <span style={{ position: 'absolute', left: '0', color: '#ff0000', fontWeight: 700 }}>›</span>
                Managed core network routing, DNS records, automated threshold alerting, and daily service level availability reporting.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
