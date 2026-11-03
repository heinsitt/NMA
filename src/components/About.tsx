import React from 'react';
import { useTilt } from '../hooks/useTilt';

export const About: React.FC = () => {
  const photoTilt = useTilt({ perspective: 900, maxAngle: 5, translateY: -4 });

  return (
    <section id="about">
      <div className="container">
        <div className="sec-header reveal">
          <div className="sec-kicker">01 / About</div>
          <h2 className="sec-title">
            Infrastructure-first engineer,<br />
            <span className="highlight">cloud-bound</span> by design.
          </h2>
          <p className="sec-sub">
            I build and operate reliable on-premise systems — and I'm now engineering that same discipline
            into cloud-native environments. From bare-metal hypervisors to IaC pipelines, I care about
            observability, security hardening, and infrastructure that never pages you at 3 AM.
          </p>
        </div>

        <div className="about-grid">
          <div
            className="about-card reveal"
            onMouseMove={photoTilt.onMouseMove}
            onMouseLeave={photoTilt.onMouseLeave}
          >
            <img
              src="/media/profile.jpg"
              alt="Naing Moe Aung — System Engineer"
              referrerPolicy="no-referrer"
            />
            <div className="about-badge">
              <span className="dot" />
              <span>Naing Moe Aung · Yangon</span>
            </div>
          </div>

          <div className="about-pillars">
            <div className="pillar-item reveal">
              <span className="pillar-tag">reliability</span>
              <p>
                Production systems monitored, backed up, and engineered for maximum uptime — because
                downtime is never an option.
              </p>
            </div>

            <div className="pillar-item reveal">
              <span className="pillar-tag">security</span>
              <p>
                Hardened networks, firewalls, and access control across Linux and Windows environments,
                from edge to core.
              </p>
            </div>

            <div className="pillar-item reveal">
              <span className="pillar-tag">evolution</span>
              <p>
                Now deepening into AWS, Azure, and Infrastructure-as-Code to take systems from the server
                room to the cloud.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
