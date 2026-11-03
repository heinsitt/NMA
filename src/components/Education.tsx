import React from 'react';
import { useTilt } from '../hooks/useTilt';

export const Education: React.FC = () => {
  const card1Tilt = useTilt({ perspective: 900, maxAngle: 5, translateY: -4 });
  const card2Tilt = useTilt({ perspective: 900, maxAngle: 5, translateY: -4 });

  return (
    <section id="education">
      <div className="container">
        <div className="sec-header reveal">
          <div className="sec-kicker">05 / Education</div>
          <h2 className="sec-title">
            Academic foundations in <span className="highlight">computer science</span> & pedagogy.
          </h2>
          <p className="sec-sub">
            Theoretical rigor combined with analytical research discipline and clear technical communication.
          </p>
        </div>

        <div className="edu-grid">
          <div
            className="edu-card reveal"
            onMouseMove={card1Tilt.onMouseMove}
            onMouseLeave={card1Tilt.onMouseLeave}
          >
            <div className="edu-icon-wrap">🎓</div>
            <div>
              <h3>Bachelor of Computer Science (B.C.Sc.)</h3>
              <div className="edu-meta">Core CS Foundations & Systems Theory</div>
              <p>
                Comprehensive curriculum covering algorithms, data structures, computer architecture,
                operating system kernels, networking protocols, and systems engineering — the foundational
                backbone behind every production environment I manage today.
              </p>
            </div>
          </div>

          <div
            className="edu-card reveal"
            onMouseMove={card2Tilt.onMouseMove}
            onMouseLeave={card2Tilt.onMouseLeave}
          >
            <div className="edu-icon-wrap">🏛️</div>
            <div>
              <h3>Bachelor of Education — History (B.Ed)</h3>
              <div className="edu-meta">Analytical Research & Knowledge Transfer</div>
              <p>
                Studies in historical methodology, analytical evaluation, and structured pedagogy —
                sharpening technical documentation, systematic root-cause investigation, and effective
                cross-functional knowledge sharing in engineering teams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
