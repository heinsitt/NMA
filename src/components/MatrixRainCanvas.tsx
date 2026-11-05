import React, { useEffect, useRef } from 'react';

interface MatrixRainCanvasProps {
  className?: string;
  opacity?: number;
}

export const MatrixRainCanvas: React.FC<MatrixRainCanvasProps> = ({
  className = 'absolute inset-0 pointer-events-none z-0',
  opacity = 0.28,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    // Characters for Matrix digital stream: binary, hex, sysadmin & cloud tokens
    const characters =
      '010101010123456789ABCDEFλ~*+::$<>_SSH#TCP/IP#AWS#NOC#99.99%#K8S#BASH#ZFS#VM#VPC#DNS#';
    const charArray = characters.split('');

    const fontSize = 14;
    let columns = Math.floor(width / fontSize);

    // Track vertical position of each falling column drop
    let drops: number[] = [];
    // Track drop speed and head variance
    let speeds: number[] = [];

    const initDrops = () => {
      columns = Math.floor(width / fontSize);
      drops = [];
      speeds = [];
      for (let i = 0; i < columns; i++) {
        // Stagger initial vertical drop positions randomly
        drops[i] = Math.floor(Math.random() * -60);
        speeds[i] = Math.random() * 0.5 + 0.75;
      }
    };

    initDrops();

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
      initDrops();
    };

    window.addEventListener('resize', handleResize);

    // Frame throttle for smooth terminal matrix pace
    let lastTime = 0;
    const fpsInterval = 1000 / 30; // 30 FPS matrix rain pace

    const render = (currentTime: number) => {
      animId = requestAnimationFrame(render);

      const elapsed = currentTime - lastTime;
      if (elapsed < fpsInterval) return;
      lastTime = currentTime - (elapsed % fpsInterval);

      // Dark translucent wash to create falling fade trails
      ctx.fillStyle = 'rgba(7, 11, 16, 0.12)';
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px 'JetBrains Mono', monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = charArray[Math.floor(Math.random() * charArray.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Glowing white head for lead character
        if (Math.random() > 0.85) {
          ctx.fillStyle = '#FFFFFF';
          ctx.shadowColor = '#22D3EE';
          ctx.shadowBlur = 8;
        } else if (i % 3 === 0) {
          // Electric Cyan drops
          ctx.fillStyle = '#22D3EE';
          ctx.shadowColor = '#22D3EE';
          ctx.shadowBlur = 4;
        } else if (i % 3 === 1) {
          // Emerald Teal drops
          ctx.fillStyle = '#2DD4BF';
          ctx.shadowColor = '#10B981';
          ctx.shadowBlur = 3;
        } else {
          // Deep Slate Matrix stream
          ctx.fillStyle = '#0E7490';
          ctx.shadowBlur = 0;
        }

        ctx.fillText(char, x, y);
        ctx.shadowBlur = 0;

        // Reset drop to top with randomized delay once it leaves the viewport
        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i] += speeds[i];
      }
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ opacity }}
      aria-hidden="true"
    />
  );
};
