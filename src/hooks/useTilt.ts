import { useCallback } from 'react';

interface TiltOptions {
  perspective?: number;
  maxAngle?: number;
  translateY?: number;
}

export function useTilt({ perspective = 900, maxAngle = 5, translateY = -4 }: TiltOptions = {}) {
  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const el = e.currentTarget;
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.transform = `perspective(${perspective}px) rotateY(${px * maxAngle}deg) rotateX(${-py * maxAngle}deg) translateY(${translateY}px)`;
    },
    [perspective, maxAngle, translateY]
  );

  const onMouseLeave = useCallback((e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.transform = '';
  }, []);

  return { onMouseMove, onMouseLeave };
}
