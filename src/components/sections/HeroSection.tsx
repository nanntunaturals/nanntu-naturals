import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ShoppingBag, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroContainer = styled.section`
  min-height: 100vh;
  padding: 8rem 5% 4rem 5%;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
  z-index: 5;

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    grid-template-columns: 1.1fr 0.9fr;
  }
`;

const TextBlock = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const WelcomeLabel = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  letter-spacing: 0.5px;
`;

const MainHeading = styled(motion.h1)`
  font-family: ${({ theme }) => theme.typography.heading};
  font-size: 2.75rem;
  line-height: 1.15;
  color: ${({ theme }) => theme.colors.text.primary};

  span {
    color: ${({ theme }) => theme.colors.secondary};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 3.5rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    font-size: ${({ theme }) => theme.typography.fontSizes.display};
  }
`;

const DescriptionText = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 0.95rem;
  max-width: 520px;
  line-height: 1.7;
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
  margin-top: 1rem;
`;

const PrimaryButton = styled(motion(Link))`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text.light};
  padding: 0.9rem 2.25rem;
  font-weight: 600;
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryHover};
  }
`;

const SecondaryButton = styled(motion(Link))`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  border: 1.5px solid ${({ theme }) => theme.colors.text.primary};
  color: ${({ theme }) => theme.colors.text.primary};
  padding: 0.85rem 2.25rem;
  font-weight: 600;
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: transparent;
  transition: all 0.2s ease;

  &:hover {
    background-color: rgba(46, 30, 18, 0.04);
  }
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 480px;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.premium};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 580px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    height: 620px;
  }
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

// Soft fading gradient overlay to mimic the image's layout blending
const ImageMaskOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.background.main} 0%,
    rgba(253, 251, 247, 0.8) 5%,
    rgba(253, 251, 247, 0.3) 15%,
    transparent 35%
  );
  pointer-events: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    background: linear-gradient(
      to bottom,
      ${({ theme }) => theme.colors.background.main} 0%,
      rgba(253, 251, 247, 0.5) 10%,
      transparent 30%
    );
  }
`;

// Framer motion variants
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 20,
    },
  },
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.95, x: 50 },
  show: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export const HeroSection: React.FC = () => {
  return (
    <HeroContainer>
      <ContentWrapper>
        {/* Left Text Block */}
        <TextBlock
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          <WelcomeLabel variants={itemVariant}>
            <Leaf size={16} fill="currentColor" />
            <span>Welcome to Nanntu Naturals</span>
          </WelcomeLabel>

          <MainHeading variants={itemVariant}>
            From Our Farm<br />
            to <span>Your Family.</span>
          </MainHeading>

          <DescriptionText variants={itemVariant}>
            <p>
              I was born into a farming family where honesty, hard work, and respect for nature
              were part of everyday life.
            </p>
            <p>
              Through Nanntu, our mission is to provide the best service by delivering organically
              and naturally sourced products with complete transparency in every step of production.
            </p>
            <p>
              Our goal is simple - to keep our production transparent and earn your trust through
              purity, quality, and care.
            </p>
          </DescriptionText>

          <ButtonGroup variants={itemVariant}>
            <PrimaryButton
              to="/shop"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <ShoppingBag size={18} />
              Shop Now
            </PrimaryButton>
            <SecondaryButton
              to="/team"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Leaf size={18} />
              Learn More
            </SecondaryButton>
          </ButtonGroup>
        </TextBlock>

        {/* Right Portrait Image */}
        <ImageContainer
          variants={imageVariant}
          initial="hidden"
          animate="show"
        >
          <HeroImage
            src="/assets/images/banner1.png"
            alt="Nanntu Naturals founder standing on farm pathway with beehives in background"
          />
          <ImageMaskOverlay />
        </ImageContainer>
      </ContentWrapper>
    </HeroContainer>
  );
};
