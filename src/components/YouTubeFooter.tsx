import React from 'react';
import { Globe, ShieldCheck } from 'lucide-react';

export const YouTubeFooter: React.FC = () => {
  return (
    <footer className="yt-footer">
      <div className="container yt-footer-inner">
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <span>© 2026 <b>Naing Moe Aung</b>. All rights reserved.</span>
          <span style={{ color: '#444' }}>|</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#aaaaaa' }}>
            <Globe size={14} />
            <span>Region: Myanmar (MM)</span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#aaaaaa' }}>
          <ShieldCheck size={14} color="#ff4d4d" />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px' }}>
            Engineered for 24/7 Cloud Availability & Uptime
          </span>
        </div>
      </div>
    </footer>
  );
};
