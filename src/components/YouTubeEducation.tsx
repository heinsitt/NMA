import React from 'react';
import { GraduationCap, BookOpen, Award } from 'lucide-react';

export const YouTubeEducation: React.FC = () => {
  return (
    <section id="education" className="yt-section">
      <div className="container">
        <div className="yt-sec-header yt-reveal">
          <div className="yt-sec-title">
            <span className="red-badge">Foundations</span>
            <h2>Certified Degrees & Academic Lectures</h2>
          </div>
          <p className="yt-sec-sub">
            Theoretical computer science coupled with structured pedagogical research and clear technical documentation.
          </p>
        </div>

        <div className="yt-video-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
          {/* Card 1: B.C.Sc */}
          <div className="yt-card yt-reveal">
            <div
              className="yt-card-thumb"
              style={{
                background: 'linear-gradient(135deg, #1c1414 0%, #261616 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderBottom: '1px solid rgba(255,0,0,0.2)',
              }}
            >
              <div style={{ textAlign: 'center' }}>
                <GraduationCap size={44} color="#ff4d4d" style={{ margin: '0 auto 8px' }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#ff8888', letterSpacing: '1px' }}>
                  BACHELOR DEGREE
                </span>
              </div>
              <span className="yt-thumb-badge">B.C.Sc. · DEGREE</span>
            </div>

            <div className="yt-card-body">
              <h3>Bachelor of Computer Science (B.C.Sc.)</h3>
              <div className="yt-card-author">
                <span>Core Computer Science & Systems Theory</span>
              </div>
              <p style={{ color: '#aaaaaa', fontSize: '13.5px', lineHeight: '1.6', marginTop: '6px' }}>
                Foundational degree covering algorithmic analysis, data structures, operating system kernels,
                TCP/IP networking, and systems engineering — the theoretical backbone behind every production
                system I operate today.
              </p>
            </div>
          </div>

          {/* Card 2: B.Ed */}
          <div className="yt-card yt-reveal">
            <div
              className="yt-card-thumb"
              style={{
                background: 'linear-gradient(135deg, #141c26 0%, #162436 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderBottom: '1px solid rgba(62,166,255,0.2)',
              }}
            >
              <div style={{ textAlign: 'center' }}>
                <BookOpen size={44} color="#3ea6ff" style={{ margin: '0 auto 8px' }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#88c8ff', letterSpacing: '1px' }}>
                  BACHELOR DEGREE
                </span>
              </div>
              <span className="yt-thumb-badge">B.Ed. · DEGREE</span>
            </div>

            <div className="yt-card-body">
              <h3>Bachelor of Education — History (B.Ed)</h3>
              <div className="yt-card-author">
                <span>Analytical Research & Structured Knowledge Sharing</span>
              </div>
              <p style={{ color: '#aaaaaa', fontSize: '13.5px', lineHeight: '1.6', marginTop: '6px' }}>
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
