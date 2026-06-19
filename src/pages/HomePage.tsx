import React from 'react';
import styled from 'styled-components';
import { HeroSection } from '../components/sections/HeroSection';
import { FeatureSection } from '../components/sections/FeatureSection';
import { WhyChooseSection } from '../components/sections/WhyChooseSection';
import { FloatingBees } from '../components/common/FloatingBees';
import { LeafParticles } from '../components/common/LeafParticles';
import HoneySlider from '../components/sections/HoneySlider';

const PageWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding-top: 6rem;

  @media (max-width: 768px) {
    padding-top: 5rem;
  }

  @media (max-width: 480px) {
    padding-top: 4.5rem;
  }
`;

export const HomePage: React.FC = () => {
  return (
    <PageWrapper>
      {/* Dynamic natural animations */}
      <LeafParticles />
      <FloatingBees />

      {/* Main sections */}
      <HeroSection />
      {/* <HoneySlider /> */}
      <FeatureSection />
      <WhyChooseSection />
    </PageWrapper>
  );
};
