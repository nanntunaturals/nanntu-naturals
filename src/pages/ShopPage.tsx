import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ShoppingCart, ShieldCheck, Leaf } from 'lucide-react';
import { useCart } from '../context/CartContext';
import type { Product } from '../types';
import { WhyChooseSection } from '../components/sections/WhyChooseSection';

const ShopContainer = styled.div`
  min-height: 100vh;
  padding: 8rem 5% 5rem 5%;
  max-width: 1280px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 6rem 5% 4rem 5%;
  }

  @media (max-width: 480px) {
    padding: 5rem 4% 3rem 4%;
  }
`;

const TopBanner = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
  margin-bottom: 4rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const BannerLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const BannerLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
`;

const BannerTitle = styled.h1`
  font-family: ${({ theme }) => theme.typography.heading};
  font-size: 2.75rem;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.text.primary};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 3.5rem;
  }
`;

const BannerSubtitle = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.md};
  line-height: 1.6;
  max-width: 480px;
`;

const BannerRight = styled.div`
  position: relative;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  overflow: hidden;
  height: 320px;
  box-shadow: ${({ theme }) => theme.shadows.lg};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 400px;
  }
`;

const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const MainShowcaseCard = styled(motion.div)`
  background-color: #FFFDF9;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: 2.5rem;
  box-shadow: ${({ theme }) => theme.shadows.premium};
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  position: relative;
  overflow: hidden;
  margin-bottom: 5rem;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    grid-template-columns: 0.9fr 1.1fr;
  }
`;

const ProductImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FFFDF9;
`;

const ProductImage = styled(motion.img)`
  max-height: 480px;
  width: auto;
  max-width: 100%;
  object-fit: contain;
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
`;

const ProductTitle = styled.h2`
  font-family: ${({ theme }) => theme.typography.heading};
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.text.primary};
`;

const FeaturesRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding-bottom: 1.25rem;
`;

const FeatureBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.secondary};

  svg {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const SectionLabel = styled.h4`
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 0.75rem;
`;

const SizeGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

interface SizeOptionProps {
  $selected: boolean;
}

const SizeOption = styled.label<SizeOptionProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  border: 1px solid ${({ $selected, theme }) => ($selected ? theme.colors.primary : theme.colors.border)};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ $selected }) => ($selected ? 'rgba(30, 70, 32, 0.02)' : '#FFF')};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const SizeLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const RadioCircle = styled.div<{ $selected: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid ${({ $selected, theme }) => ($selected ? theme.colors.primary : theme.colors.border)};
  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.secondary};
    display: ${({ $selected }) => ($selected ? 'block' : 'none')};
  }
`;

const SizeName = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
`;

const PriceWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`;

const StrikePrice = styled.span`
  text-decoration: line-through;
  color: #A09489;
  font-size: 0.95rem;
`;

const ActivePrice = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondary};
`;

const QuantityRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-top: 0.5rem;
`;

const QtyContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: #FFF;
  overflow: hidden;
`;

const QtyButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.secondary};
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(46, 30, 18, 0.05);
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const QtyInput = styled.span`
  font-weight: 600;
  padding: 0 1rem;
  min-width: 30px;
  text-align: center;
`;

const AddToCartBtn = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text.light};
  font-weight: 600;
  padding: 1rem 2rem;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: background-color 0.2s ease;
  font-size: 1rem;
  width: 100%;
  margin-top: 0.5rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryHover};
  }
`;

// Trust Bar at the bottom of the card
const TrustBar = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding-top: 2.5rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const TrustItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

const TrustIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: rgba(78, 122, 83, 0.08);
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const TrustText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const TrustTitle = styled.h5`
  font-family: ${({ theme }) => theme.typography.body};
  font-size: 0.85rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.primary};
`;

const TrustDesc = styled.p`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.4;
`;

// Bottom Ribbon Bar
const BottomRibbon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding-top: 2rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 0.875rem;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    text-align: left;
  }
`;

const RibbonLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  
  span {
    font-family: ${({ theme }) => theme.typography.heading};
    font-style: italic;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const RibbonCenter = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const RibbonRight = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  img {
    height: 32px;
    width: auto;
  }
`;

// Vector Icons
const FarmerHatIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M2 12 Q12 9, 22 12" />
    <path d="M6 12 Q12 4, 18 12" />
    <circle cx="12" cy="16" r="2" />
  </svg>
);


const LeafDoubleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1 9.2A7 7 0 0 1 11 20z" />
    <path d="M19 2c-2.26 4.33-5.27 7.14-8 10" />
  </svg>
);

const SearchGlassIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

const BeeIconMini = () => (
  <svg width="18" height="18" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
    <ellipse cx="16" cy="18" rx="8" ry="6" fill="#D59621" />
    <path d="M16 14 C12 6, 8 8, 12 14 Z" fill="rgba(240, 245, 255, 0.8)" />
    <path d="M16 14 C20 6, 24 8, 20 14 Z" fill="rgba(240, 245, 255, 0.8)" />
    <circle cx="23" cy="18" r="4.5" fill="#2E1E12" />
  </svg>
);

export const ShopPage: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState<'250g' | '500g' | '1kg'>('250g');
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleQtyChange = (type: 'inc' | 'dec') => {
    if (type === 'dec') {
      setQuantity((q) => (q > 1 ? q - 1 : 1));
    } else {
      setQuantity((q) => q + 1);
    }
  };

  const currentPrice = selectedSize === '250g' ? 300 : selectedSize === '500g' ? 600 : 1200;

  const handleAddToCart = () => {
    const productItem: Product = {
      id: `forest-honey-${selectedSize}`,
      name: `Forest Honey (${selectedSize})`,
      category: 'Honey',
      price: currentPrice,
      rating: 4.9,
      image: '/assets/images/shop_product_honey.png',
      description: '100% natural, raw forest honey sourced sustainably from wild combs.',
      features: ['100% Natural', 'No Added Sugar', 'Farmer-Owned'],
      transparency: {
        origin: 'Western Ghats Deciduous Forests',
        harvested: 'Late Spring, Wild combs extraction',
        processing: 'Coarse filtered, unheated, raw.'
      }
    };

    addToCart(productItem, quantity);
    alert(`Added ${quantity} x Forest Honey (${selectedSize}) to your basket!`);
  };

  return (
    <ShopContainer>
      {/* Top Banner */}
      <TopBanner>
        <BannerLeft>
          <BannerLabel>
            <Leaf size={16} fill="currentColor" />
            <span>Our Products</span>
          </BannerLabel>
          <BannerTitle>Our Products</BannerTitle>
          <BannerSubtitle>
            Pure, natural and transparently sourced products, crafted with care.
          </BannerSubtitle>
        </BannerLeft>

        <BannerRight>
          <BannerImage 
            src="/assets/images/shop_banner_honey.png" 
            alt="Honey jar on rustic wooden table with dipper and white flowers" 
          />
        </BannerRight>
      </TopBanner>

      {/* Main Showcase Card */}
      <MainShowcaseCard
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 50, damping: 15 }}
      >
        <ProductGrid>
          {/* Left Column: Image */}
          <ProductImageContainer>
            <ProductImage
              src="/assets/images/shop_product_honey.png"
              alt="Forest Honey Jar"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />
          </ProductImageContainer>

          {/* Right Column: Size/Qty selections */}
          <ProductDetails>
            <div>
              <ProductTitle>Forest Honey</ProductTitle>
              <FeaturesRow style={{ marginTop: '0.75rem' }}>
                <FeatureBadge>
                  <Leaf size={16} fill="currentColor" />
                  <span>100% Natural</span>
                </FeatureBadge>
                <FeatureBadge>
                  <Leaf size={16} fill="currentColor" />
                  <span>No Added Sugar</span>
                </FeatureBadge>
                <FeatureBadge>
                  <FarmerHatIcon />
                  <span>Farmer-Owned</span>
                </FeatureBadge>
              </FeaturesRow>
            </div>

            {/* Select Size Option Grid */}
            <div>
              <SectionLabel>Select Size</SectionLabel>
              <SizeGrid>
                <SizeOption 
                  $selected={selectedSize === '250g'} 
                  onClick={() => setSelectedSize('250g')}
                >
                  <SizeLeft>
                    <RadioCircle $selected={selectedSize === '250g'} />
                    <SizeName>250g</SizeName>
                  </SizeLeft>
                  <PriceWrapper>
                    <StrikePrice>₹500</StrikePrice>
                    <ActivePrice>₹300</ActivePrice>
                  </PriceWrapper>
                </SizeOption>

                <SizeOption 
                  $selected={selectedSize === '500g'} 
                  onClick={() => setSelectedSize('500g')}
                >
                  <SizeLeft>
                    <RadioCircle $selected={selectedSize === '500g'} />
                    <SizeName>500g</SizeName>
                  </SizeLeft>
                  <PriceWrapper>
                    <StrikePrice>₹1000</StrikePrice>
                    <ActivePrice>₹600</ActivePrice>
                  </PriceWrapper>
                </SizeOption>

                <SizeOption 
                  $selected={selectedSize === '1kg'} 
                  onClick={() => setSelectedSize('1kg')}
                >
                  <SizeLeft>
                    <RadioCircle $selected={selectedSize === '1kg'} />
                    <SizeName>1kg</SizeName>
                  </SizeLeft>
                  <PriceWrapper>
                    <StrikePrice>₹2000</StrikePrice>
                    <ActivePrice>₹1200</ActivePrice>
                  </PriceWrapper>
                </SizeOption>
              </SizeGrid>
            </div>

            {/* Quantity */}
            <QuantityRow>
              <SectionLabel style={{ margin: 0 }}>Quantity</SectionLabel>
              <QtyContainer>
                <QtyButton onClick={() => handleQtyChange('dec')}>-</QtyButton>
                <QtyInput>{quantity}</QtyInput>
                <QtyButton onClick={() => handleQtyChange('inc')}>+</QtyButton>
              </QtyContainer>
            </QuantityRow>

            {/* Add to Cart Button */}
            <AddToCartBtn
              onClick={handleAddToCart}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ShoppingCart size={18} />
              Add to Cart
            </AddToCartBtn>
          </ProductDetails>
        </ProductGrid>

        {/* Bottom Trust Row inside Card */}
        <TrustBar>
          <TrustItem>
            <TrustIcon>
              <ShieldCheck size={24} />
            </TrustIcon>
            <TrustText>
              <TrustTitle>100% Natural</TrustTitle>
              <TrustDesc>No additives or chemicals</TrustDesc>
            </TrustText>
          </TrustItem>

          <TrustItem>
            <TrustIcon>
              <LeafDoubleIcon />
            </TrustIcon>
            <TrustText>
              <TrustTitle>Ethically Sourced</TrustTitle>
              <TrustDesc>From trusted forests and beekeepers</TrustDesc>
            </TrustText>
          </TrustItem>

          <TrustItem>
            <TrustIcon>
              <SearchGlassIcon />
            </TrustIcon>
            <TrustText>
              <TrustTitle>Transparent Process</TrustTitle>
              <TrustDesc>From harvesting to bottling, we are open</TrustDesc>
            </TrustText>
          </TrustItem>

          <TrustItem>
            <TrustIcon>
              <FarmerHatIcon />
            </TrustIcon>
            <TrustText>
              <TrustTitle>Farmer Owned</TrustTitle>
              <TrustDesc>Supporting farmers and rural communities</TrustDesc>
            </TrustText>
          </TrustItem>
        </TrustBar>
      </MainShowcaseCard>

      <WhyChooseSection />

      {/* Bottom Ribbon */}
      <BottomRibbon>
        <RibbonLeft>
          <Leaf size={16} style={{ color: '#1E4620' }} />
          Rooted in farming. <span>Committed to purity.</span>
        </RibbonLeft>

        <RibbonCenter>
          <BeeIconMini />
          <span>Thank you for supporting a farmer-owned business.</span>
        </RibbonCenter>

        <RibbonRight>
          {/* Subtle decoration vector */}
          <span style={{ fontSize: '0.8rem', opacity: 0.5 }}>✿ Nanntu Honey Co.</span>
        </RibbonRight>
      </BottomRibbon>
    </ShopContainer>
  );
};
