import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: 2;
`;

const StyledLeaf = styled(motion.svg)`
  position: absolute;
  fill: #4E7A53;
  opacity: 0.25;
`;

interface LeafData {
  id: number;
  size: number;
  startX: number;
  startY: number;
  duration: number;
  delay: number;
  swayX: number[];
  rotation: number[];
  scale: number;
}

export const LeafParticles: React.FC = () => {
  const [leaves, setLeaves] = useState<LeafData[]>([]);

  useEffect(() => {
    // Generate 10 leaves with random properties
    const newLeaves: LeafData[] = Array.from({ length: 10 }, (_, i) => {
      const size = Math.random() * 20 + 12; // 12px to 32px
      const startX = Math.random() * 100; // 0% to 100% width
      const startY = -10; // start just above screen
      const duration = Math.random() * 15 + 15; // 15s to 30s fall time
      const delay = Math.random() * 10; // random staggered start
      
      // Sway path: left-right shifting
      const swayAmount = Math.random() * 50 + 30; // 30px to 80px sway
      const swayX = [0, swayAmount, -swayAmount, swayAmount, 0];
      
      // Rotation cycles
      const rotation = [0, 90, 180, 270, 360];
      
      const scale = Math.random() * 0.6 + 0.4; // 0.4 to 1.0 scale

      return {
        id: i,
        size,
        startX,
        startY,
        duration,
        delay,
        swayX,
        rotation,
        scale,
      };
    });

    setLeaves(newLeaves);
  }, []);

  return (
    <Container>
      {leaves.map((leaf) => (
        <StyledLeaf
          key={leaf.id}
          width={leaf.size}
          height={leaf.size}
          viewBox="0 0 24 24"
          initial={{
            left: `${leaf.startX}%`,
            top: `${leaf.startY}%`,
            opacity: 0,
            scale: leaf.scale,
            rotate: 0,
          }}
          animate={{
            top: '110%', // fall past the screen bottom
            opacity: [0, 0.25, 0.25, 0], // fade-in near top, fade-out near bottom
            x: leaf.swayX,
            rotate: leaf.rotation,
          }}
          transition={{
            duration: leaf.duration,
            repeat: Infinity,
            ease: 'linear',
            delay: leaf.delay,
          }}
        >
          {/* Detailed leaf path */}
          <path d="M17,8C8,10 5.9,16.17 3.82,21.34L3.18,20.66C5.9,15.5 8,9 17,8M2,2C11.5,2 18.5,8 22,15C18.5,22 11.5,22 2,2Z" />
        </StyledLeaf>
      ))}
    </Container>
  );
};
