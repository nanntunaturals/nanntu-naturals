import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text.light};
  padding: 5rem 5% 2rem 5%;
  position: relative;
  overflow: hidden;
  border-top: 2px solid ${({ theme }) => theme.colors.secondary};

  @media (max-width: 768px) {
    padding: 3.5rem 5% 2rem 5%;
  }

  @media (max-width: 480px) {
    padding: 2.75rem 4% 1.5rem 4%;
  }
`;

const FooterGrid = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 2fr 1fr 1.5fr;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    grid-template-columns: 2.5fr 1fr 1fr 2fr;
  }
`;

const FooterCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const BrandTitle = styled.h3`
  font-family: ${({ theme }) => theme.typography.heading};
  font-size: ${({ theme }) => theme.typography.fontSizes.xl};
  color: ${({ theme }) => theme.colors.text.light};
  margin-bottom: 0.5rem;
`;

const BrandDesc = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  color: rgba(250, 246, 240, 0.75);
  max-width: 320px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background-color: rgba(250, 246, 240, 0.1);
  color: ${({ theme }) => theme.colors.text.light};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.text.primary};
    transform: translateY(-3px);
  }
`;

const ColHeading = styled.h4`
  font-family: ${({ theme }) => theme.typography.body};
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 0.5rem;
`;

const LinkList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const FooterLink = styled(Link)`
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  color: rgba(250, 246, 240, 0.75);
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const ContactInfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  color: rgba(250, 246, 240, 0.75);
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
`;

const NewsletterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const InputGroup = styled.div`
  display: flex;
  border: 1px solid rgba(250, 246, 240, 0.2);
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: rgba(250, 246, 240, 0.05);
  overflow: hidden;
  transition: border-color 0.3s ease;

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const EmailInput = styled.input`
  flex: 1;
  padding: 0.75rem 1rem;
  color: ${({ theme }) => theme.colors.text.light};
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};

  &::placeholder {
    color: rgba(250, 246, 240, 0.4);
  }
`;

const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text.primary};
  padding: 0 1.25rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease, transform 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryHover};
    transform: scale(1.02);
  }
`;

const FooterBottom = styled.div`
  max-width: 1280px;
  margin: 4rem auto 0 auto;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(250, 246, 240, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  font-size: 0.8rem;
  color: rgba(250, 246, 240, 0.5);

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
  }
`;

export const Footer: React.FC = () => {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for subscribing to Nanntu Naturals! We will keep you updated with honey harvest schedules.');
  };

  return (
    <FooterContainer>
      <FooterGrid>
        <FooterCol>
          <BrandTitle>NANNTU NATURALS</BrandTitle>
          <BrandDesc>
            Dedicated to bringing raw, pure, and naturally sourced farm products directly to your family. 
            We stand by 100% transparency in every step of production.
          </BrandDesc>
          <SocialLinks>
            <SocialIcon href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook size={18} />
            </SocialIcon>
            <SocialIcon href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram size={18} />
            </SocialIcon>
            <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter size={18} />
            </SocialIcon>
          </SocialLinks>
        </FooterCol>

        <FooterCol>
          <ColHeading>Navigation</ColHeading>
          <LinkList>
            <li><FooterLink to="/">Home</FooterLink></li>
            <li><FooterLink to="/shop">Shop</FooterLink></li>
            <li><FooterLink to="/team">Our Team</FooterLink></li>
            <li><FooterLink to="/cart">Cart</FooterLink></li>
          </LinkList>
        </FooterCol>

        <FooterCol>
          <ColHeading>Support</ColHeading>
          <LinkList>
            <li><FooterLink to="/shop">Sourcing Map</FooterLink></li>
            <li><FooterLink to="/team">Farm Story</FooterLink></li>
            <li><FooterLink to="/cart">Checkout Help</FooterLink></li>
          </LinkList>
        </FooterCol>

        <FooterCol>
          <ColHeading>Contact & News</ColHeading>
          <ContactInfoList>
            <ContactItem>
              <MapPin size={18} style={{ color: '#D59621', flexShrink: 0 }} />
              <span>Nanntu Co-operative Farms, Mandya District, Karnataka, India</span>
            </ContactItem>
            <ContactItem>
              <Phone size={18} style={{ color: '#D59621', flexShrink: 0 }} />
              <span>+91 98765 43210</span>
            </ContactItem>
          </ContactInfoList>

          <NewsletterForm onSubmit={handleSubscribe}>
            <span style={{ fontSize: '0.85rem', color: 'rgba(250, 246, 240, 0.8)' }}>
              Subscribe for harvest alerts
            </span>
            <InputGroup>
              <EmailInput 
                type="email" 
                placeholder="Enter your email" 
                required 
                aria-label="Email for newsletter subscription"
              />
              <SubmitButton type="submit">
                <Mail size={16} />
              </SubmitButton>
            </InputGroup>
          </NewsletterForm>
        </FooterCol>
      </FooterGrid>

      <FooterBottom>
        <span>&copy; {new Date().getFullYear()} Nanntu Naturals. All rights reserved.</span>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <FooterLink to="/">Privacy Policy</FooterLink>
          <FooterLink to="/">Terms of Service</FooterLink>
        </div>
      </FooterBottom>
    </FooterContainer>
  );
};
