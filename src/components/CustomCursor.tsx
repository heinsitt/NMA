import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!window.matchMedia('(hover: hover)').matches) return;

    let x = 0;
    let y = 0;
    let rx = 0;
    let ry = 0;
    let animId: number;

    const handleMouseMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const loop = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      }

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);

    const handleMouseEnterInteractive = () => setIsHovering(true);
    const handleMouseLeaveInteractive = () => setIsHovering(false);

    const interactives = document.querySelectorAll(
      'a, button, .tech-chip, .skill-matrix-card, .contact-card-btn, .timeline-card, .project-preview-card, .edu-card'
    );
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnterInteractive);
      el.addEventListener('mouseleave', handleMouseLeaveInteractive);
    });

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnterInteractive);
        el.removeEventListener('mouseleave', handleMouseLeaveInteractive);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={dotRef} aria-hidden="true" />
      <div
        className={`cursor-ring ${isHovering ? 'hovering' : ''}`}
        ref={ringRef}
        aria-hidden="true"
      />
    </>
  );
};
