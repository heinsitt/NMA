import React, { useState } from 'react';
import { useTilt } from '../hooks/useTilt';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);
  const emailTilt = useTilt({ perspective: 900, maxAngle: 5, translateY: 0 });
  const linkedInTilt = useTilt({ perspective: 900, maxAngle: 5, translateY: 0 });

  const handleCopyEmail = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText('naingmoeaung51@gmail.com').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    });
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="sec-header reveal">
          <div className="sec-kicker">06 / Contact</div>
          <h2 className="sec-title">
            Let's build <span className="highlight">reliable</span> infrastructure.
          </h2>
          <p className="sec-sub">
            Direct communication channels for engineering roles, technical collaboration, and cloud opportunities.
          </p>
        </div>

        <div className="contact-container reveal">
          <div className="contact-left">
            <h3>
              Open for <span className="highlight">Cloud & Systems</span> Roles
            </h3>
            <p>
              Whether it's an on-premise infrastructure needing modernization, an enterprise network
              requiring security hardening, or a cloud migration requiring architectural planning —
              my inbox is always open.
            </p>
          </div>

          <div className="contact-actions">
            <a
              href="mailto:naingmoeaung51@gmail.com"
              className="contact-card-btn"
              onMouseMove={emailTilt.onMouseMove}
              onMouseLeave={emailTilt.onMouseLeave}
            >
              <div className="contact-icon-box">
                <img
                  src="/media/gmail.png"
                  alt="Gmail logo"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="contact-text">
                <small>Direct Email</small>
                <b>naingmoeaung51@gmail.com</b>
              </div>
              <button
                className="copy-pill-btn"
                id="copyEmail"
                type="button"
                onClick={handleCopyEmail}
                style={{
                  color: copied ? 'var(--cyan)' : undefined,
                  borderColor: copied ? 'var(--border-cyan)' : undefined,
                }}
              >
                {copied ? 'copied ✓' : 'copy'}
              </button>
            </a>

            <a
              href="https://www.linkedin.com/in/naing-moe-aung-6a3b16329/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card-btn"
              onMouseMove={linkedInTilt.onMouseMove}
              onMouseLeave={linkedInTilt.onMouseLeave}
            >
              <div className="contact-icon-box">
                <img
                  src="/media/linkedin.png"
                  alt="LinkedIn logo"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="contact-text">
                <small>Professional Profile</small>
                <b>linkedin.com/in/naing-moe-aung</b>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
