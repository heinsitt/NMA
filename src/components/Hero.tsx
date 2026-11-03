import React, { useEffect, useState } from 'react';
import { TerminalCard } from './TerminalCard';

export const Hero: React.FC = () => {
  const [nameHtml, setNameHtml] = useState<string>('');
  const [roleText, setRoleText] = useState<string>('');
  const [showNameCursor, setShowNameCursor] = useState<boolean>(true);
  const [showRoleCursor, setShowRoleCursor] = useState<boolean>(false);

  useEffect(() => {
    const fullName = 'Naing Moe Aung';
    const roleString = 'System Engineer | Aspiring Cloud Engineer';
    let nameIdx = 0;
    let roleIdx = 0;

    const typeNameStep = () => {
      if (nameIdx < fullName.length) {
        nameIdx++;
        setNameHtml(fullName.slice(0, nameIdx));
        setTimeout(typeNameStep, 70 + Math.random() * 25);
      } else {
        setNameHtml('Naing <span class="accent">Moe</span> Aung');
        setTimeout(() => {
          setShowRoleCursor(true);
          typeRoleStep();
        }, 300);
      }
    };

    const typeRoleStep = () => {
      if (roleIdx < roleString.length) {
        roleIdx++;
        setRoleText(roleString.slice(0, roleIdx));
        setTimeout(typeRoleStep, 30 + Math.random() * 20);
      } else {
        setTimeout(() => {
          setShowNameCursor(false);
          setShowRoleCursor(false);
        }, 2500);
      }
    };

    const timer = setTimeout(typeNameStep, 250);

    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="hero">
      <div className="container hero-grid">
        <div>
          <div className="hero-meta-kicker">
            <span className="dot" />
            <span>Open for Cloud & System Roles</span>
          </div>

          <h1>
            <span
              id="typedName"
              dangerouslySetInnerHTML={{ __html: nameHtml }}
            />
            <span
              className="type-cursor"
              id="nameCursor"
              style={{ opacity: showNameCursor ? 1 : 0 }}
            />
          </h1>

          <div className="hero-role">
            <span id="typedRole">{roleText}</span>
            <span
              className="type-cursor"
              id="roleCursor"
              style={{ opacity: showRoleCursor ? 1 : 0 }}
            />
          </div>

          <div className="hero-loc">// Hlaing, Yangon, Myanmar 🇲🇲</div>

          <p className="hero-bio">
            Proactive System Engineer with a strong foundation in Linux/Windows infrastructure,
            virtualization, and network security. Passionate about exploring cutting-edge technologies
            and continuously evolving systems for maximum uptime and security. Currently focusing on
            expanding deep expertise into Cloud Engineering and Cloud-Native Infrastructure.
          </p>

          <div className="hero-ctas">
            <a href="#contact" className="btn btn-primary">
              Contact Me
            </a>
            <a
              href="https://www.linkedin.com/in/naing-moe-aung-6a3b16329/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45z" />
              </svg>
              View LinkedIn
            </a>
          </div>

          <div className="hero-stats-row">
            <div className="stat-box">
              <b>24/7</b>
              <span>uptime mindset</span>
            </div>
            <div className="stat-box">
              <b>15+</b>
              <span>technologies</span>
            </div>
            <div className="stat-box">
              <b>Cloud</b>
              <span>next chapter</span>
            </div>
          </div>
        </div>

        <TerminalCard />
      </div>

      <div className="scroll-indicator">scroll</div>
    </header>
  );
};
