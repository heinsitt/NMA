import React from 'react';
import { ShieldCheck, Server, Cloud, CheckCircle2 } from 'lucide-react';

export const YouTubeAbout: React.FC = () => {
  return (
    <section id="about" className="yt-section">
      <div className="container">
        <div className="yt-sec-header yt-reveal">
          <div className="yt-sec-title">
            <span className="red-badge">Chapter 01</span>
            <h2>About & Engineering Mindset</h2>
          </div>
          <p className="yt-sec-sub">
            Infrastructure-first engineer, cloud-bound by design. From bare-metal hypervisors to
            automated cloud pipelines.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 380px) 1fr', gap: '32px', alignItems: 'center' }}>
          {/* Creator Video Thumbnail Card */}
          <div className="yt-card yt-reveal">
            <div className="yt-card-thumb">
              <img
                src="/media/profile.jpg"
                alt="Naing Moe Aung"
                referrerPolicy="no-referrer"
              />
              <span className="yt-thumb-badge">4K · 100% UPTIME</span>
            </div>
            <div className="yt-card-body">
              <h3>Naing Moe Aung — Profile & Core Operations</h3>
              <div className="yt-card-author">
                <span>Yangon Infrastructure Hub</span>
                <CheckCircle2 size={13} color="#3ea6ff" />
              </div>
              <div className="yt-card-meta">
                <span>System Engineer</span>
                <span>·</span>
                <span>Active 2024–Present</span>
              </div>
            </div>
          </div>

          {/* Chapters Breakdown */}
          <div>
            <p style={{ color: '#f1f1f1', fontSize: '16px', lineHeight: '1.7', marginBottom: '20px' }}>
              I build and operate reliable on-premise systems — and I'm now engineering that same
              discipline into cloud-native environments. From enterprise virtualization to IaC
              pipelines, I care about continuous observability, security hardening, and resilient
              architectures that never page at 3 AM.
            </p>

            <div className="yt-chapters-grid">
              <div className="yt-chapter-card yt-reveal">
                <span className="yt-chapter-timestamp">00:00 · RELIABILITY</span>
                <h4>Production Reliability</h4>
                <p>
                  Production systems monitored, backed up, and engineered for maximum uptime — because
                  downtime is never an option.
                </p>
              </div>

              <div className="yt-chapter-card yt-reveal">
                <span className="yt-chapter-timestamp">01:30 · SECURITY</span>
                <h4>Hardened Security</h4>
                <p>
                  Hardened networks, firewalls, and access control across Linux and Windows
                  environments, from edge to core.
                </p>
              </div>

              <div className="yt-chapter-card yt-reveal">
                <span className="yt-chapter-timestamp">03:45 · EVOLUTION</span>
                <h4>Cloud-Native IaC</h4>
                <p>
                  Now deepening into AWS, Azure, and Infrastructure-as-Code to scale systems from the
                  server room to the cloud.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
