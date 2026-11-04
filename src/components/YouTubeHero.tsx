import React, { useEffect, useState } from 'react';
import {
  Play,
  Pause,
  Volume2,
  Maximize2,
  CheckCircle2,
  ThumbsUp,
  Share2,
  Bookmark,
  Bell,
  Clock,
  Radio,
} from 'lucide-react';

export const YouTubeHero: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [nameHtml, setNameHtml] = useState<string>('');
  const [roleText, setRoleText] = useState<string>('');
  const [uptime, setUptime] = useState<string>('00:00:00');
  const [completedLines, setCompletedLines] = useState<{ text: string; className: string }[]>([]);
  const [currentLineText, setCurrentLineText] = useState<string>('');
  const [currentLineClass, setCurrentLineClass] = useState<string>('');

  const terminalLines = [
    { t: '$ whoami', c: 'yt-term-prompt' },
    { t: 'naing_moe_aung :: system_engineer', c: 'yt-term-output' },
    { t: '$ systemctl status career', c: 'yt-term-prompt' },
    { t: '● career.service — active (running) since 2024', c: 'yt-term-success' },
    { t: '  next target: cloud_engineer [ OK ]', c: 'yt-term-muted' },
    { t: '$ sudo apt install aws-cli terraform', c: 'yt-term-prompt' },
    { t: 'Reading package lists... Done', c: 'yt-term-muted' },
    { t: 'Unpacking ambition... [████████████] 100%', c: 'yt-term-accent' },
    { t: '$ ping opportunity.cloud', c: 'yt-term-prompt' },
    { t: '64 bytes from opportunity.cloud: ttl=64 time=0.42ms — reachable', c: 'yt-term-output' },
  ];

  // Live session uptime
  useEffect(() => {
    const start = Date.now();
    const pad = (n: number) => String(n).padStart(2, '0');

    const interval = setInterval(() => {
      const s = Math.floor((Date.now() - start) / 1000);
      setUptime(`${pad(Math.floor(s / 3600))}:${pad(Math.floor(s / 60) % 60)}:${pad(s % 60)}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Title typewriter
  useEffect(() => {
    const fullName = 'Naing Moe Aung';
    const roleString = 'System Engineer | Aspiring Cloud Engineer';
    let nameIdx = 0;
    let roleIdx = 0;

    const typeName = () => {
      if (nameIdx < fullName.length) {
        nameIdx++;
        setNameHtml(fullName.slice(0, nameIdx));
        setTimeout(typeName, 65 + Math.random() * 20);
      } else {
        setNameHtml('Naing <span style="color:#ff4d4d">Moe</span> Aung');
        setTimeout(typeRole, 300);
      }
    };

    const typeRole = () => {
      if (roleIdx < roleString.length) {
        roleIdx++;
        setRoleText(roleString.slice(0, roleIdx));
        setTimeout(typeRole, 28 + Math.random() * 15);
      }
    };

    const timer = setTimeout(typeName, 200);
    return () => clearTimeout(timer);
  }, []);

  // Terminal streaming typewriter
  useEffect(() => {
    let lineIdx = 0;
    let charIdx = 0;
    let timer: ReturnType<typeof setTimeout>;

    const step = () => {
      if (!isPlaying) return;
      if (lineIdx >= terminalLines.length) return;

      const line = terminalLines[lineIdx];
      setCurrentLineClass(line.c);

      charIdx++;
      setCurrentLineText(line.t.slice(0, charIdx));

      if (charIdx >= line.t.length) {
        setCompletedLines((prev) => [...prev, { text: line.t, className: line.c }]);
        setCurrentLineText('');
        lineIdx++;
        charIdx = 0;
        timer = setTimeout(step, lineIdx < terminalLines.length ? 260 : 0);
      } else {
        timer = setTimeout(step, line.c === 'yt-term-prompt' ? 32 : 12);
      }
    };

    timer = setTimeout(step, 800);
    return () => clearTimeout(timer);
  }, [isPlaying]);

  return (
    <section id="hero" className="yt-hero-wrapper">
      <div className="container">
        {/* Creator Channel Header Banner Card */}
        <div className="yt-channel-card yt-reveal in">
          <div className="yt-channel-info">
            <div className="yt-channel-avatar">
              <img
                src="/media/profile.jpg"
                alt="Naing Moe Aung profile photo"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="yt-channel-meta">
              <h1>
                <span dangerouslySetInnerHTML={{ __html: nameHtml }} />
                <CheckCircle2 className="yt-verified-check" />
              </h1>
              <div className="yt-channel-handle">
                <span>@naingmoeaung</span>
                <span className="dot">·</span>
                <span>{roleText}</span>
                <span className="dot">·</span>
                <span>Yangon, Myanmar 🇲🇲</span>
              </div>
            </div>
          </div>

          <div className="yt-channel-badges">
            <div className="yt-live-beacon">
              <span className="yt-live-dot" />
              <span>LIVE INFRASTRUCTURE</span>
            </div>
            <a href="#contact" className="yt-subscribe-btn">
              <Bell size={15} />
              <span>Connect / Hire</span>
            </a>
          </div>
        </div>

        {/* 16:9 YouTube Featured Video Theater Player */}
        <div className="yt-player-frame yt-reveal in">
          {/* Top Bar of Video Player */}
          <div className="yt-player-topbar">
            <div className="yt-player-title">
              <Radio size={15} color="#ff0000" />
              <span>live_console: ~/status.log — zsh (Production Telemetry)</span>
            </div>
            <div className="yt-quality-badge">4K 60FPS HDR</div>
          </div>

          {/* Player Terminal Viewport */}
          <div className="yt-terminal-screen">
            {completedLines.map((line, idx) => (
              <div className="yt-term-row" key={idx}>
                <span className={line.className}>{line.text}</span>
              </div>
            ))}
            {currentLineText && (
              <div className="yt-term-row">
                <span className={currentLineClass}>{currentLineText}</span>
              </div>
            )}
          </div>

          {/* YouTube Video Scrub Bar & Controls */}
          <div className="yt-player-controls">
            <div className="yt-scrub-bar-container">
              <div className="yt-scrub-bar-progress" style={{ width: '74%' }} />
            </div>

            <div className="yt-controls-row">
              <div className="yt-controls-left">
                <button
                  className="yt-icon-btn"
                  onClick={() => setIsPlaying(!isPlaying)}
                  aria-label={isPlaying ? 'Pause Console Stream' : 'Play Console Stream'}
                >
                  {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                </button>
                <button className="yt-icon-btn" aria-label="Mute/Unmute">
                  <Volume2 size={18} />
                </button>
                <div className="yt-timestamp-display">
                  <span>{uptime}</span> / <span style={{ color: '#717171' }}>24/7 Uptime</span>
                </div>
              </div>

              <div className="yt-controls-right">
                <span>HD</span>
                <button className="yt-icon-btn" aria-label="Full Screen">
                  <Maximize2 size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Video Description & Interaction Bar */}
        <div className="yt-video-info-box yt-reveal in">
          <div className="yt-video-title-row">
            <div>
              <h2>System Engineer Transitioning to Cloud & Infrastructure Architecture [4K LIVE]</h2>
              <div className="yt-channel-handle" style={{ marginTop: '6px' }}>
                <span>15+ Technologies</span>
                <span className="dot">·</span>
                <span>24/7 High-Availability Mindset</span>
                <span className="dot">·</span>
                <span>Streamed live from Yangon</span>
              </div>
            </div>

            <div className="yt-interaction-buttons">
              <a href="#about" className="yt-action-pill">
                <ThumbsUp size={16} />
                <span>24/7 Mindset</span>
              </a>
              <a
                href="https://www.linkedin.com/in/naing-moe-aung-6a3b16329/"
                target="_blank"
                rel="noopener noreferrer"
                className="yt-action-pill"
              >
                <Share2 size={16} />
                <span>LinkedIn</span>
              </a>
              <a href="#contact" className="yt-action-pill">
                <Bookmark size={16} />
                <span>Get in Touch</span>
              </a>
            </div>
          </div>

          <div className="yt-video-description">
            <p>
              Proactive System Engineer with a strong foundation in Linux/Windows infrastructure,
              virtualization, and network security. Passionate about exploring cutting-edge technologies
              and continuously evolving systems for maximum uptime and security. Currently focusing on
              expanding deep expertise into Cloud Engineering and Cloud-Native Infrastructure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
