import React from 'react';
import { useTilt } from '../hooks/useTilt';

export const Experience: React.FC = () => {
  const cardTilt = useTilt({ perspective: 900, maxAngle: 5, translateY: 0 });

  return (
    <section id="experience">
      <div className="container">
        <div className="sec-header reveal">
          <div className="sec-kicker">03 / Experience</div>
          <h2 className="sec-title">
            Where I've kept <span className="highlight">the lights on.</span>
          </h2>
          <p className="sec-sub">
            Real-world operations maintaining mission-critical network availability and rapid incident resolution.
          </p>
        </div>

        <div className="timeline-track">
          <div className="timeline-entry reveal">
            <div
              className="timeline-card"
              onMouseMove={cardTilt.onMouseMove}
              onMouseLeave={cardTilt.onMouseLeave}
            >
              <div className="timeline-top">
                <h3>Former NOC Engineer</h3>
                <span className="timeline-period">BIM Group of Companies</span>
              </div>
              <div className="timeline-role">Network Operations Center (NOC Engineer)</div>

              <div className="company-badge">
                <img
                  src="/media/bim-logo.jpg"
                  alt="BIM Group of Companies logo"
                  referrerPolicy="no-referrer"
                />
                <span>BIM Group of Companies</span>
              </div>

              <ul className="timeline-list">
                <li>
                  Monitored enterprise network infrastructure, active server health, and service availability.
                </li>
                <li>
                  Handled rigorous incident response, troubleshooting, and escalation protocols for seamless system uptime.
                </li>
                <li>
                  Managed core network routing, DNS configurations, proactive alerting, and SLA telemetry reporting.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
