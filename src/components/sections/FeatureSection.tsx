import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SectionWrapper = styled.section`
  padding: 2rem 5% 5rem 5%;
  position: relative;
  z-index: 10;
`;

const Container = styled(motion.div)`
  max-width: 1280px;
  margin: 0 auto;
  background-color: rgba(252, 250, 245, 0.9);
  backdrop-filter: blur(10px);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  padding: 2rem;
  
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    border-radius: ${({ theme }) => theme.borderRadius.xl};
    padding: 2.5rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    grid-template-columns: repeat(4, 1fr);
    border-radius: 50px; /* Pillow shape matching reference */
    padding: 2.25rem 3.5rem;
    gap: 1.5rem;
  }
`;

const FeatureCard = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  position: relative;
  padding: 0.5rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    /* Vertical divider styling between items */
    &:not(:last-child)::after {
      content: '';
      position: absolute;
      right: -0.75rem;
      top: 15%;
      height: 70%;
      width: 1px;
      background-color: ${({ theme }) => theme.colors.border};
      opacity: 0.7;
    }
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.accentLight};
  color: ${({ theme }) => theme.colors.primary};
  flex-shrink: 0;
  transition: transform 0.3s ease, background-color 0.3s ease;

  ${FeatureCard}:hover & {
    transform: scale(1.08) rotate(5deg);
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text.light};
  }
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const Title = styled.h3`
  font-family: ${({ theme }) => theme.typography.body};
  font-size: 0.95rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  transition: color 0.2s ease;

  ${FeatureCard}:hover & {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const Description = styled.p`
  font-size: 0.78rem;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

// Recreating identical SVGs to the reference image
const LeafIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1 9.2A7 7 0 0 1 11 20z" />
    <path d="M19 2c-2.26 4.33-5.27 7.14-8 10" />
    <path d="M8.5 14.5c-1.5-1.5-2.5 0-3.5-1" />
  </svg>
);

const HandPlantIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 22h20" />
    <path d="M12 18V9" />
    <path d="M12 9c-1.5-2.5-4-2.5-5.5 0 1.5 2.5 4 2.5 5.5 0z" />
    <path d="M12 9c1.5-2.5 4-2.5 5.5 0-1.5 2.5-4 2.5-5.5 0z" />
    <path d="M7 14c-1-1.5-2-1.5-3 0 1 1.5 2 1.5 3 0z" />
    <path d="M17 14c1-1.5 2-1.5 3 0-1 1.5-2 1.5-3 0z" />
    <path d="M12 14c-1 2-2 3-3.5 3.5" />
    <path d="M12 14c1 2 2 3 3.5 3.5" />
  </svg>
);

const ShieldCheckIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 11 2 2 4-4" />
  </svg>
);

const FarmerIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    {/* Hat */}
    <path d="M2 10 Q12 7, 22 10" />
    <path d="M6 10 Q12 2, 18 10" fill="none" />
    {/* Head & Neck */}
    <circle cx="12" cy="14" r="3" />
    <path d="M12 17v2" />
    {/* Shoulders / Overalls */}
    <path d="M5 22v-2a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v2" />
    <path d="M9 17v5" />
    <path d="M15 17v5" />
  </svg>
);

const featuresData = [
  {
    id: 'natural',
    title: '100% Natural',
    description: 'No additives. No chemicals. Just pure goodness.',
    Icon: LeafIcon,
  },
  {
    id: 'sourced',
    title: 'Naturally Sourced',
    description: 'Sourced directly from trusted farms with care.',
    Icon: HandPlantIcon,
  },
  {
    id: 'process',
    title: 'Transparent Process',
    description: 'From harvesting to packaging, we keep it 100% transparent.',
    Icon: ShieldCheckIcon,
  },
  {
    id: 'owned',
    title: 'Farmer Owned',
    description: 'Proudly farmer-owned, community focused.',
    Icon: FarmerIcon,
  },
];

// Framer motion variants
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 70,
      damping: 15,
      staggerChildren: 0.1,
      delayChildren: 0.4,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export const FeatureSection: React.FC = () => {
  return (
    <SectionWrapper>
      <Container
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
      >
        {featuresData.map(({ id, title, description, Icon }) => (
          <FeatureCard
            key={id}
            variants={cardVariants}
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <IconWrapper>
              <Icon />
            </IconWrapper>
            <TextBlock>
              <Title>{title}</Title>
              <Description>{description}</Description>
            </TextBlock>
          </FeatureCard>
        ))}
      </Container>
    </SectionWrapper>
  );
};
