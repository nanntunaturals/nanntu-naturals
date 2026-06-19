import React from 'react';
import styled from 'styled-components';
import { Leaf, Shield, Heart, Sparkles } from 'lucide-react';

interface WhyChooseItem {
  title: string;
  description: string;
  Icon: React.ComponentType<{ size?: number }>; 
}

interface WhyChooseSectionProps {
  title?: string;
  subtitle?: string;
  items?: WhyChooseItem[];
}

const Section = styled.section`
  padding: 4rem 5% 5rem 5%;
  max-width: 1280px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 3.5rem 5% 4rem 5%;
  }

  @media (max-width: 480px) {
    padding: 3rem 4% 3rem 4%;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2.5rem;
  text-align: center;
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.typography.heading};
  font-size: 2.25rem;
  color: ${({ theme }) => theme.colors.text.primary};
`;

const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  max-width: 620px;
  margin: 0 auto;
  line-height: 1.7;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.background.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  align-items: center;
  text-align: center;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  transition: transform 0.25s ease;

  &:hover {
    transform: translateY(-6px);
  }
`;

const IconWrapper = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: #FBF7EF;
  color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const CardTitle = styled.h3`
  font-size: 1.05rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.primary};
`;

const CardDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const defaultItems: WhyChooseItem[] = [
  {
    title: 'Pure & Raw',
    description: 'Unprocessed honey in its purest form.',
    Icon: Leaf,
  },
  {
    title: 'Rich in Nutrients',
    description: 'Naturally packed with vitamins and minerals.',
    Icon: Sparkles,
  },
  {
    title: 'Boosts Immunity',
    description: 'Helps support a healthy and strong immune system.',
    Icon: Shield,
  },
  {
    title: 'Goodness You Can Trust',
    description: 'Every jar is a promise of purity and care.',
    Icon: Heart,
  },
];

export const WhyChooseSection: React.FC<WhyChooseSectionProps> = ({
  title = 'Why Choose Nanntu Honey?',
  subtitle = 'We bring you the goodness of nature with honesty and purity in every drop.',
  items = defaultItems,
}) => {
  return (
    <Section>
      <Header>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Header>

      <Grid>
        {items.map(({ title: itemTitle, description, Icon }, index) => (
          <Card key={`${itemTitle}-${index}`}>
            <IconWrapper>
              <Icon size={24} />
            </IconWrapper>
            <CardTitle>{itemTitle}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};
