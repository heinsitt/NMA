import React, { useEffect, useRef, useState } from 'react';
import { Bell, Radio, Sparkles } from 'lucide-react';

export const YouTubeProjects: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [typedTitle, setTypedTitle] = useState<string>('');
  const [isReminderSet, setIsReminderSet] = useState<boolean>(false);
  const hasTyped = useRef<boolean>(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTyped.current) {
            hasTyped.current = true;
            const targetText = 'Cloud Architecture Labs in progress — Live Premiere Soon.';
            let i = 0;

            const step = () => {
              if (i < targetText.length) {
                i++;
                setTypedTitle(targetText.slice(0, i));
                setTimeout(step, 45 + Math.random() * 20);
              }
            };

            setTimeout(step, 100);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="yt-section" ref={sectionRef}>
      <div className="container">
        <div className="yt-sec-header yt-reveal">
          <div className="yt-sec-title">
            <span className="red-badge">Upcoming Premiere</span>
            <h2>Cloud Architecture Labs & Projects</h2>
          </div>
          <p className="yt-sec-sub">
            Scheduled live premiere for upcoming Infrastructure-as-Code setups, multi-region deployments, and observability dashboards.
          </p>
        </div>

        <div className="yt-premiere-banner yt-reveal">
          <div>
            <div className="yt-premiere-label">
              <Radio size={14} />
              <span>PREMIERE · UPLOADING COMING SOON</span>
            </div>

            <h3 className="yt-premiere-title">
              <span>{typedTitle}</span>
              <span style={{ color: '#ff0000', animation: 'ytPulse 1s step-end infinite' }}>_</span>
            </h3>

            <p className="yt-premiere-desc">
              Currently setting up and documenting AWS/Azure enterprise architecture labs,
              Terraform IaC automated deployment templates, and real-time observability telemetry
              stacks. Full repository code and step-by-step documentation will premiere here shortly.
            </p>

            <div className="yt-tags-cloud" style={{ marginTop: '20px' }}>
              <span className="yt-tech-tag">Terraform</span>
              <span className="yt-tech-tag">AWS</span>
              <span className="yt-tech-tag">Azure</span>
              <span className="yt-tech-tag">IaC</span>
              <span className="yt-tech-tag">Observability</span>
            </div>
          </div>

          <div style={{ zIndex: 2 }}>
            <button
              onClick={() => setIsReminderSet(!isReminderSet)}
              className="yt-subscribe-btn"
              style={{
                background: isReminderSet ? '#212121' : '#ffffff',
                color: isReminderSet ? '#f1f1f1' : '#0f0f0f',
                border: isReminderSet ? '1px solid rgba(255,255,255,0.2)' : 'none',
                padding: '12px 22px',
                fontSize: '14px',
              }}
            >
              <Bell size={16} fill={isReminderSet ? '#ff0000' : 'none'} color={isReminderSet ? '#ff0000' : 'currentColor'} />
              <span>{isReminderSet ? 'Reminder Set ✓' : 'Set Reminder'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
