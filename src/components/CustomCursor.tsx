import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  
  // Track positions
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafId = useRef<number | null>(null);

  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if the device has a mouse / fine pointer
    if (typeof window !== 'undefined') {
      const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
      if (!hasFinePointer) {
        setIsTouchDevice(true);
        return;
      }
    }

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      if (!isVisible) {
        setIsVisible(true);
      }

      // Check if hovering over clickable or interactive elements
      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable = Boolean(
          target.closest('a, button, input, textarea, select, [role="button"], [data-cursor="pointer"], .cursor-pointer, summary')
        );
        setIsHovered(isClickable);
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    // Smooth animation loop for trailing outer ring with lerp
    const render = () => {
      // Lerp ring towards mouse position
      const lerpFactor = 0.18;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * lerpFactor;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * lerpFactor;

      // Update dot position immediately (zero latency)
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0)`;
      }

      // Update ring position
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      rafId.current = requestAnimationFrame(render);
    };

    rafId.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [isVisible]);

  // Don't render on touch screens or mobile devices
  if (isTouchDevice) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-[99999] transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden="true"
    >
      {/* 1. High-Precision Instant Center Point */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 -ml-[3px] -mt-[3px] will-change-transform"
      >
        <div
          className={`rounded-full transition-transform duration-150 ${
            isClicking
              ? 'w-2 h-2 -ml-[1px] -mt-[1px] bg-white shadow-[0_0_12px_#ffffff]'
              : isHovered
              ? 'w-2 h-2 -ml-[1px] -mt-[1px] bg-cyan-300 shadow-[0_0_10px_#22d3ee]'
              : 'w-1.5 h-1.5 bg-cyan-400 shadow-[0_0_6px_#22d3ee]'
          }`}
        />
      </div>

      {/* 2. Precision Telemetry Reticle (Outer Trailing Ring & HUD Ticks) */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 will-change-transform"
      >
        <div
          className={`relative rounded-full transition-all duration-200 ease-out -translate-x-1/2 -translate-y-1/2 flex items-center justify-center ${
            isClicking
              ? 'w-7 h-7 border border-white bg-white/20 scale-95 shadow-[0_0_15px_rgba(255,255,255,0.4)]'
              : isHovered
              ? 'w-14 h-14 border border-cyan-300/80 bg-cyan-500/10 shadow-[0_0_20px_rgba(34,211,238,0.25)]'
              : 'w-9 h-9 border border-cyan-400/35 bg-cyan-950/5 shadow-[0_0_8px_rgba(34,211,238,0.1)]'
          }`}
        >
          {/* Cardinal Crosshair Ticks for Cloud Telemetry Aesthetic */}
          <span
            className={`absolute -top-1 w-0.5 h-1.5 transition-colors duration-150 ${
              isHovered ? 'bg-cyan-300' : 'bg-cyan-400/50'
            }`}
          />
          <span
            className={`absolute -bottom-1 w-0.5 h-1.5 transition-colors duration-150 ${
              isHovered ? 'bg-cyan-300' : 'bg-cyan-400/50'
            }`}
          />
          <span
            className={`absolute -left-1 w-1.5 h-0.5 transition-colors duration-150 ${
              isHovered ? 'bg-cyan-300' : 'bg-cyan-400/50'
            }`}
          />
          <span
            className={`absolute -right-1 w-1.5 h-0.5 transition-colors duration-150 ${
              isHovered ? 'bg-cyan-300' : 'bg-cyan-400/50'
            }`}
          />

          {/* Subtle Rotating Tech Bracket when hovering */}
          {isHovered && (
            <div className="absolute inset-[-4px] border border-cyan-400/20 rounded-full animate-spin [animation-duration:8s]" />
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomCursor;
