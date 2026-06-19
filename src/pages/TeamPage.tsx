import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Leaf, Shield, Heart, Eye } from 'lucide-react';

const PageWrapper = styled.div`
  min-height: 100vh;
  padding: 8rem 5% 5rem 5%;
  max-width: 1280px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 6rem 5% 4rem 5%;
  }

  @media (max-width: 480px) {
    padding: 5rem 4% 3rem 4%;
  }
`;

const DecorativeHoneyComb = styled.div`
  position: absolute;
  top: 15%;
  left: 2%;
  opacity: 0.85;
  pointer-events: none;
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: block;
  }
`;

const DecorativeBee = styled(motion.div)`
  position: absolute;
  top: 12%;
  right: 10%;
  pointer-events: none;
`;

const HeaderSection = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 4rem;
  z-index: 10;
  position: relative;
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.typography.heading};
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.text.primary};
`;

const AccentDivider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.secondary};
  margin: 0.25rem 0;

  &::before, &::after {
    content: '';
    width: 40px;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.border};
  }
`;

const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  max-width: 580px;
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  line-height: 1.5;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  margin-bottom: 5rem;
  z-index: 10;
  position: relative;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    max-width: 960px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const MemberCard = styled(motion.div)`
  background-color: #FCFAF5;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: 2.25rem;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 340px;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  background-color: #373A40;
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

const MemberImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
`;

const MemberName = styled.h2`
  font-family: ${({ theme }) => theme.typography.heading};
  font-size: 1.75rem;
  color: ${({ theme }) => theme.colors.text.primary};
`;

const MemberRole = styled.h3`
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: ${({ theme }) => theme.colors.secondary};
`;

const CardDivider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary};
  opacity: 0.4;
`;

const MemberBio = styled.div`
  font-size: 0.9rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text.secondary};
  max-width: 280px;
`;

// Vision Banner
const VisionBanner = styled(motion.div)`
  background-color: #FAF4EB;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 35px; /* Pill layout */
  padding: 2.5rem 3rem;
  box-shadow: ${({ theme }) => theme.shadows.md};
  
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  gap: 2rem;
  position: relative;
  overflow: hidden;
  margin-bottom: 5rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 100px 1fr 120px;
  }
`;

const VisionLeaves = styled.div`
  display: none;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    justify-content: center;
    color: #E6DCBA;
  }
`;

const VisionContent = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const VisionTitle = styled.h2`
  font-family: ${({ theme }) => theme.typography.heading};
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.text.primary};
`;

const VisionText = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  max-width: 480px;
  line-height: 1.6;
`;

const VisionJar = styled.div`
  display: none;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      height: 80px;
      width: auto;
      object-fit: contain;
    }
  }
`;

// Bottom Trust Ribbon
const TrustRibbon = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding-top: 2rem;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const TrustBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  font-size: 0.85rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.secondary};

  &:not(:last-child) {
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      border-right: 1px solid ${({ theme }) => theme.colors.border};
    }
  }

  svg {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

// Honeycomb SVG illustration
const HoneycombSvg = () => (
  <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Honey puddle */}
    <path d="M10 85 C 20 100, 80 105, 110 85 C 125 70, 95 62, 80 60 C 65 58, 40 64, 30 60 C 15 56, 2 70, 10 85 Z" fill="#F8C045" fillOpacity="0.4" />
    
    {/* Comb 1 */}
    <path d="M45 40 L60 31.5 L75 40 L75 57 L60 65.5 L45 57 Z" fill="#D59621" stroke="#FFFDF9" strokeWidth="1.5" />
    <path d="M50 43 L60 37 L70 43 L70 54 L60 60 L50 54 Z" fill="#EFA224" />
    
    {/* Comb 2 */}
    <path d="M72 55 L87 46.5 L102 55 L102 72 L87 80.5 L72 72 Z" fill="#C58514" stroke="#FFFDF9" strokeWidth="1.5" />
    <path d="M77 58 L87 52 L97 58 L97 69 L87 75 L77 69 Z" fill="#D59621" />

    {/* Comb 3 */}
    <path d="M18 55 L33 46.5 L48 55 L48 72 L33 80.5 L18 72 Z" fill="#D59621" stroke="#FFFDF9" strokeWidth="1.5" />
    <path d="M23 58 L33 52 L43 58 L43 69 L33 75 L23 69 Z" fill="#EFA224" />
    
    {/* Drop of honey */}
    <path d="M60 65 C60 65, 55 75, 55 78 C55 81, 60 84, 63 84 C66 84, 71 81, 71 78 C71 75, 66 65, 66 65 Z" fill="#E5941C" />
  </svg>
);

const LeafDecorationSvg = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="currentColor">
    <path d="M10 50 C20 40, 35 38, 50 20 C40 35, 38 40, 10 50 Z" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M15 45 C20 32, 28 25, 42 24 C30 28, 25 35, 15 45 Z" strokeWidth="1" strokeLinecap="round" />
    <path d="M25 54 C32 46, 40 42, 54 38 C42 42, 38 48, 25 54 Z" strokeWidth="1" strokeLinecap="round" />
  </svg>
);

export const TeamPage: React.FC = () => {
  return (
    <PageWrapper>
      {/* Background Honeycomb */}
      <DecorativeHoneyComb>
        <HoneycombSvg />
      </DecorativeHoneyComb>

      {/* Background flying bee */}
      <DecorativeBee
        animate={{
          x: [0, 20, -10, 0],
          y: [0, -15, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <svg width="24" height="24" viewBox="0 0 32 32" fill="none" stroke="#D59621" strokeWidth="1.5">
          <ellipse cx="16" cy="18" rx="8" ry="6" fill="#D59621" />
          <path d="M16 14 C12 6, 8 8, 12 14 Z" fill="rgba(240, 245, 255, 0.8)" />
          <path d="M16 14 C20 6, 24 8, 20 14 Z" fill="rgba(240, 245, 255, 0.8)" />
        </svg>
      </DecorativeBee>

      {/* Header section */}
      <HeaderSection>
        <Title>Meet the Team</Title>
        <AccentDivider>
          <Leaf size={16} fill="currentColor" />
        </AccentDivider>
        <Subtitle>
          A small and passionate team working together to bring you the best of nature.
        </Subtitle>
      </HeaderSection>

      {/* Team profiles */}
      <TeamGrid>
        <MemberCard
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          whileHover={{ y: -5 }}
        >
          <ImageWrapper>
            <MemberImage 
              src="/assets/images/hero_farmer.png" 
              alt="Prasad Goudar, Founder & Managing Director" 
            />
          </ImageWrapper>
          <div>
            <MemberName>Prasad Goudar</MemberName>
            <MemberRole>Founder & Managing Director</MemberRole>
          </div>
          <CardDivider>
            <Leaf size={14} fill="currentColor" />
          </CardDivider>
          <MemberBio>
            Rooted in farming.<br />
            Driven by quality.
          </MemberBio>
        </MemberCard>

        <MemberCard
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.15 }}
          whileHover={{ y: -5 }}
        >
          <ImageWrapper>
            <MemberImage 
              src="/assets/images/team_ravi.png" 
              alt="Ravi D, Web Development & Technology Lead" 
            />
          </ImageWrapper>
          <div>
            <MemberName>Ravi D</MemberName>
            <MemberRole>Web Development & Technology Lead</MemberRole>
          </div>
          <CardDivider>
            <Leaf size={14} fill="currentColor" />
          </CardDivider>
          <MemberBio>
            Building and maintaining<br />
            Nanntu's digital experience.
          </MemberBio>
        </MemberCard>
      </TeamGrid>

      {/* Vision Banner */}
      <VisionBanner
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <VisionLeaves>
          <LeafDecorationSvg />
        </VisionLeaves>
        <VisionContent>
          <VisionTitle>Our Vision</VisionTitle>
          <AccentDivider style={{ margin: '0.2rem 0' }}>
            <Leaf size={12} fill="currentColor" />
          </AccentDivider>
          <VisionText>
            Bringing authentic, naturally sourced products to every home through trust, transparency, and quality.
          </VisionText>
        </VisionContent>
        <VisionJar>
          <img src="/assets/images/shop_product_honey.png" alt="Honey jar illustration" />
        </VisionJar>
      </VisionBanner>

      {/* Bottom Ribbon row */}
      <TrustRibbon>
        <TrustBadge>
          <Leaf size={16} fill="currentColor" />
          <span>100% Natural</span>
        </TrustBadge>
        <TrustBadge>
          <Shield size={16} />
          <span>Pure & Authentic</span>
        </TrustBadge>
        <TrustBadge>
          <Heart size={16} />
          <span>Ethical Sourcing</span>
        </TrustBadge>
        <TrustBadge>
          <Eye size={16} />
          <span>Sustainably Made</span>
        </TrustBadge>
      </TrustRibbon>
    </PageWrapper>
  );
};
export default TeamPage;
