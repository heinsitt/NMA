import React, { useEffect, useState, useRef } from 'react';

interface TerminalLine {
  t: string;
  c: string;
}

const TERMINAL_LINES: TerminalLine[] = [
  { t: '$ whoami', c: 'cmd-prompt' },
  { t: 'naing_moe_aung :: system_engineer', c: 'cmd-output' },
  { t: '$ systemctl status career', c: 'cmd-prompt' },
  { t: '● career.service — active (running) since 2024', c: 'cmd-output' },
  { t: '  next target: cloud_engineer [ OK ]', c: 'cmd-subtle' },
  { t: '$ sudo apt install aws-cli terraform', c: 'cmd-prompt' },
  { t: 'Reading package lists... Done', c: 'cmd-subtle' },
  { t: 'Unpacking ambition... [████████████] 100%', c: 'cmd-accent' },
  { t: '$ ping opportunity.cloud', c: 'cmd-prompt' },
  { t: '64 bytes from opportunity.cloud: ttl=64 time=0.42ms — reachable', c: 'cmd-output' },
];

export const TerminalCard: React.FC = () => {
  const [completedLines, setCompletedLines] = useState<{ text: string; className: string }[]>([]);
  const [currentLineText, setCurrentLineText] = useState<string>('');
  const [currentLineClass, setCurrentLineClass] = useState<string>('');
  const [uptime, setUptime] = useState<string>('00:00:00');
  const cardRef = useRef<HTMLDivElement | null>(null);

  // Live session uptime counter
  useEffect(() => {
    const startTime = Date.now();
    const pad = (n: number) => String(n).padStart(2, '0');

    const interval = setInterval(() => {
      const totalSeconds = Math.floor((Date.now() - startTime) / 1000);
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;
      setUptime(`${pad(hours)}:${pad(minutes)}:${pad(seconds)}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // CLI typewriter simulation
  useEffect(() => {
    let lineIdx = 0;
    let charIdx = 0;
    let timer: ReturnType<typeof setTimeout>;

    const typeStep = () => {
      if (lineIdx >= TERMINAL_LINES.length) return;

      const line = TERMINAL_LINES[lineIdx];
      setCurrentLineClass(line.c);

      charIdx++;
      setCurrentLineText(line.t.slice(0, charIdx));

      if (charIdx >= line.t.length) {
        setCompletedLines((prev) => [...prev, { text: line.t, className: line.c }]);
        setCurrentLineText('');
        lineIdx++;
        charIdx = 0;
        timer = setTimeout(typeStep, lineIdx < TERMINAL_LINES.length ? 260 : 0);
      } else {
        timer = setTimeout(typeStep, line.c === 'cmd-prompt' ? 32 : 12);
      }
    };

    timer = setTimeout(typeStep, 800);

    return () => clearTimeout(timer);
  }, []);

  // Interactive 3D mouse perspective tilt
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!window.matchMedia('(hover: hover)').matches || !cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    cardRef.current.style.transform = `perspective(1000px) rotateY(${px * 6}deg) rotateX(${-py * 6}deg)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = '';
    }
  };

  return (
    <div
      className="terminal-window"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-label="System status terminal"
    >
      <div className="term-topbar">
        <div className="term-controls">
          <span className="term-dot close" />
          <span className="term-dot min" />
          <span className="term-dot max" />
        </div>
        <span className="term-path">nma@infra: ~/status — zsh</span>
      </div>

      <div className="term-content">
        {completedLines.map((line, idx) => (
          <div className="term-row" key={idx}>
            <span className={line.className}>{line.text}</span>
          </div>
        ))}
        {currentLineText && (
          <div className="term-row">
            <span className={currentLineClass}>{currentLineText}</span>
          </div>
        )}
      </div>

      <div className="term-statusbar">
        <span>
          stack: <b>linux · vmware · aws</b>
        </span>
        <span>
          uptime <b style={{ fontVariantNumeric: 'tabular-nums' }}>{uptime}</b>
        </span>
      </div>
    </div>
  );
};
