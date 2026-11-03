import React, { useEffect, useRef, useState } from 'react';
import { useTilt } from '../hooks/useTilt';

export const Projects: React.FC = () => {
  const cardTilt = useTilt({ perspective: 900, maxAngle: 5, translateY: -4 });
  const sectionRef = useRef<HTMLElement | null>(null);
  const [typedTitle, setTypedTitle] = useState<string>('');
  const [showCursor, setShowCursor] = useState<boolean>(false);
  const hasTyped = useRef<boolean>(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTyped.current) {
            hasTyped.current = true;
            setShowCursor(true);
            const targetText = 'Cloud Architecture Labs in progress.';
            let i = 0;

            const step = () => {
              if (i < targetText.length) {
                i++;
                setTypedTitle(targetText.slice(0, i));
                setTimeout(step, 50 + Math.random() * 20);
              } else {
                setTimeout(() => setShowCursor(false), 2500);
              }
            };

            setTimeout(step, 120);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef}>
      <div className="container">
        <div className="sec-header reveal">
          <div className="sec-kicker">04 / Projects</div>
          <h2 className="sec-title">
            <span id="typedProjTitle">{typedTitle}</span>
            <span
              className="type-cursor"
              id="projCursor"
              style={{ opacity: showCursor ? 1 : 0 }}
            />
          </h2>
          <p className="sec-sub">
            Hands-on cloud-native infrastructure, automated provisioning pipelines, and telemetry setups.
          </p>
        </div>

        <div className="projects-container">
          <div
            className="project-preview-card reveal"
            onMouseMove={cardTilt.onMouseMove}
            onMouseLeave={cardTilt.onMouseLeave}
          >
            <div className="project-icon-box">⌘</div>
            <div>
              <span className="project-status-badge">[ LAB REPOSITORY UPLOADING SOON ]</span>
              <h3>Upcoming Cloud Architecture & IaC Labs</h3>
              <p>
                Currently setting up and documenting AWS and Azure multi-tier architectures, Terraform
                Infrastructure-as-Code pipelines, and automated monitoring dashboards with Prometheus
                and Grafana. Full repository links and architecture diagrams will be published soon.
              </p>
              <div className="project-chips">
                <span className="tech-chip">Terraform</span>
                <span className="tech-chip">AWS</span>
                <span className="tech-chip">Azure</span>
                <span className="tech-chip">IaC</span>
                <span className="tech-chip">Observability</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
