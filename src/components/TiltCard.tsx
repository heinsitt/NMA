import React, { useRef, useState } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
} from 'framer-motion';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  glowColor?: string;
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  maxTilt = 5,
  glowColor = 'rgba(34, 211, 238, 0.08)',
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Normalized cursor offsets from -0.5 to 0.5
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Percentage coordinates for subtle ambient spotlight
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);

  // Smooth spring physics for natural tactile response
  const springConfig = { stiffness: 260, damping: 24, mass: 0.6 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [maxTilt, -maxTilt]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-maxTilt, maxTilt]);

  const spotlight = useMotionTemplate`radial-gradient(380px circle at ${glareX}% ${glareY}%, ${glowColor}, transparent 75%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    mouseX.set(px - 0.5);
    mouseY.set(py - 0.5);
    glareX.set(px * 100);
    glareY.set(py * 100);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
    glareX.set(50);
    glareY.set(50);
  };

  return (
    <div style={{ perspective: '1200px' }} className={`h-full ${className}`}>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{ scale: 1.01 }}
        transition={{ scale: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } }}
        className="relative h-full will-change-transform"
      >
        {/* Subtle Interactive Spotlight Glare */}
        <motion.div
          aria-hidden="true"
          style={{ background: spotlight }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.25 }}
          className="pointer-events-none absolute inset-0 z-20 overflow-hidden"
        />
        {children}
      </motion.div>
    </div>
  );
};

export default TiltCard;
