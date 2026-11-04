import React, { useState } from 'react';
import { CheckCircle2, MessageSquare, Send, Check } from 'lucide-react';

export const YouTubeContact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('naingmoeaung51@gmail.com').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    });
  };

  return (
    <section id="contact" className="yt-section" style={{ borderBottom: 'none' }}>
      <div className="container">
        <div className="yt-sec-header yt-reveal">
          <div className="yt-sec-title">
            <span className="red-badge">Community</span>
            <h2>Direct Communication & Contact Channels</h2>
          </div>
          <p className="yt-sec-sub">
            Available for System Engineer, NOC, and Cloud Infrastructure roles. Connect directly via email or LinkedIn.
          </p>
        </div>

        <div className="yt-community-box yt-reveal">
          <div className="yt-community-header">
            <div className="yt-channel-avatar" style={{ width: '48px', height: '48px' }}>
              <img
                src="/media/profile.jpg"
                alt="Naing Moe Aung"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <b style={{ color: '#f1f1f1', fontSize: '15px' }}>Naing Moe Aung</b>
                <CheckCircle2 size={15} color="#3ea6ff" />
                <span style={{ color: '#717171', fontSize: '12px' }}>· Pinned Community Post</span>
              </div>
              <span style={{ color: '#aaaaaa', fontSize: '12px' }}>Open for Cloud & System Roles</span>
            </div>
          </div>

          <p style={{ color: '#f1f1f1', fontSize: '15.5px', lineHeight: '1.7', marginBottom: '8px' }}>
            Whether it's an on-premise infrastructure needing stabilization, an enterprise network
            requiring security hardening, or a cloud migration requiring architectural planning —
            my inbox is always open. Let's engineer reliable, high-uptime systems together!
          </p>

          <div className="yt-community-actions-row">
            {/* Email Action */}
            <a
              href="mailto:naingmoeaung51@gmail.com"
              className="yt-channel-link-btn"
              onClick={handleCopyEmail}
            >
              <div className="yt-channel-icon-wrap">
                <img
                  src="/media/gmail.png"
                  alt="Gmail logo"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <small style={{ display: 'block', color: '#717171', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Direct Email
                </small>
                <b style={{ color: '#f1f1f1', fontSize: '14.5px' }}>naingmoeaung51@gmail.com</b>
              </div>
              <button
                className="yt-copy-chip"
                type="button"
                onClick={handleCopyEmail}
                style={{
                  background: copied ? '#2ba640' : undefined,
                  borderColor: copied ? '#2ba640' : undefined,
                  color: copied ? '#ffffff' : undefined,
                }}
              >
                {copied ? 'copied ✓' : 'copy'}
              </button>
            </a>

            {/* LinkedIn Action */}
            <a
              href="https://www.linkedin.com/in/naing-moe-aung-6a3b16329/"
              target="_blank"
              rel="noopener noreferrer"
              className="yt-channel-link-btn"
            >
              <div className="yt-channel-icon-wrap">
                <img
                  src="/media/linkedin.png"
                  alt="LinkedIn logo"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <small style={{ display: 'block', color: '#717171', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Professional Profile
                </small>
                <b style={{ color: '#f1f1f1', fontSize: '14.5px' }}>linkedin.com/in/naing-moe-aung</b>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
