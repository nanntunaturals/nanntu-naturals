import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

// Wing flap keyframes
const flap = keyframes`
  0%, 100% { transform: rotateX(0deg); }
  50% { transform: rotateX(75deg); }
`;

const BeeContainer = styled(motion.div)`
  position: absolute;
  pointer-events: none;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledBee = styled.svg`
  width: 32px;
  height: 32px;
  overflow: visible;

  .wing-left {
    transform-origin: 16px 14px;
    animation: ${flap} 0.08s infinite ease-in-out;
  }
  .wing-right {
    transform-origin: 16px 14px;
    animation: ${flap} 0.08s infinite ease-in-out alternate;
  }
`;

const TrackContainer = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
`;

interface BeeProps {
  delay?: number;
  duration?: number;
  path: { x: number[]; y: number[]; rotate: number[] };
  initialPos: { top: string; left: string };
  trackPathD?: string;
  trackWidth?: number;
  trackHeight?: number;
}

export const FloatingBee: React.FC<BeeProps> = ({
  delay = 0,
  duration = 8,
  path,
  initialPos,
  trackPathD,
  trackWidth = 200,
  trackHeight = 100,
}) => {
  return (
    <div style={{ position: 'absolute', top: initialPos.top, left: initialPos.left, width: trackWidth, height: trackHeight, pointerEvents: 'none' }}>
      {/* Dashed flight track */}
      {trackPathD && (
        <TrackContainer viewBox={`0 0 ${trackWidth} ${trackHeight}`}>
          <path
            d={trackPathD}
            fill="none"
            stroke="#D59621"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            opacity="0.4"
          />
        </TrackContainer>
      )}

      {/* The Bee */}
      <BeeContainer
        animate={{
          x: path.x,
          y: path.y,
          rotate: path.rotate,
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: delay,
        }}
        style={{ left: 0, top: 0 }}
      >
        <StyledBee viewBox="0 0 32 32">
          {/* Wings */}
          <path className="wing-left" d="M16 14 C12 6, 8 8, 12 14 Z" fill="rgba(240, 245, 255, 0.85)" stroke="#C6D3E3" strokeWidth="1" />
          <path className="wing-right" d="M16 14 C20 6, 24 8, 20 14 Z" fill="rgba(240, 245, 255, 0.85)" stroke="#C6D3E3" strokeWidth="1" />
          
          {/* Bee Body */}
          <ellipse cx="16" cy="18" rx="8" ry="6" fill="#D59621" stroke="#2E1E12" strokeWidth="1.5" />
          
          {/* Stripes */}
          <path d="M14 12.5 Q15 15, 14 23.5" stroke="#2E1E12" strokeWidth="1.5" fill="none" />
          <path d="M17 12.2 Q18 15, 17 23.8" stroke="#2E1E12" strokeWidth="1.5" fill="none" />
          
          {/* Head */}
          <circle cx="23" cy="18" r="4.5" fill="#2E1E12" />
          <circle cx="24.5" cy="16.5" r="1.2" fill="#FFFFFF" />
          
          {/* Stinger */}
          <path d="M8 18 L5 18 L8 17 Z" fill="#2E1E12" />
        </StyledBee>
      </BeeContainer>
    </div>
  );
};

export const FloatingBees: React.FC = () => {
  // Define flight paths and positions for 3 bees matching the reference image layout
  const bee1 = {
    // Bee near the 'Welcome' heading (flying left to right)
    initialPos: { top: '8%', left: '30%' },
    trackPathD: "M 10 75 Q 50 20, 100 80 T 170 30",
    path: {
      x: [10, 45, 95, 135, 165],
      y: [75, 28, 78, 55, 26],
      rotate: [-30, 20, -10, -35, -45],
    },
    duration: 10,
    width: 200,
    height: 100,
  };

  const bee2 = {
    // Bee on the right side near the farmer's head
    initialPos: { top: '22%', left: '85%' },
    trackPathD: "M 10 80 Q 30 10, 80 40 T 150 15",
    path: {
      x: [10, 35, 75, 115, 145],
      y: [80, 25, 42, 28, 12],
      rotate: [-40, 10, -20, -10, -30],
    },
    duration: 8,
    width: 180,
    height: 100,
  };

  const bee3 = {
    // Bee near the bottom left (feature section)
    initialPos: { top: '70%', left: '2%' },
    trackPathD: "M 10 20 Q 40 80, 80 30 T 140 60",
    path: {
      x: [10, 38, 78, 110, 138],
      y: [20, 75, 32, 45, 58],
      rotate: [40, -30, 20, 15, 30],
    },
    duration: 12,
    width: 160,
    height: 90,
  };

  return (
    <>
      <FloatingBee
        initialPos={bee1.initialPos}
        trackPathD={bee1.trackPathD}
        path={bee1.path}
        duration={bee1.duration}
        trackWidth={bee1.width}
        trackHeight={bee1.height}
      />
      <FloatingBee
        initialPos={bee2.initialPos}
        trackPathD={bee2.trackPathD}
        path={bee2.path}
        duration={bee2.duration}
        trackWidth={bee2.width}
        trackHeight={bee2.height}
        delay={1.5}
      />
      <FloatingBee
        initialPos={bee3.initialPos}
        trackPathD={bee3.trackPathD}
        path={bee3.path}
        duration={bee3.duration}
        trackWidth={bee3.width}
        trackHeight={bee3.height}
        delay={3}
      />
    </>
  );
};
