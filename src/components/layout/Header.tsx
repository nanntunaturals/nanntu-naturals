import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { navigationConfig } from '../../config/navigationConfig';
import { useCart } from '../../context/CartContext';
import logoImg from '../../assets/logo1.png';

interface HeaderContainerProps {
  $scrolled: boolean;
}

const HeaderContainer = styled.header<HeaderContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  padding: ${({ $scrolled }) => ($scrolled ? '0.75rem 5%' : '1.5rem 5%')};
  background-color: ${({ $scrolled, theme }) => 
    $scrolled ? theme.colors.background.nav : 'transparent'};
  backdrop-filter: ${({ $scrolled }) => ($scrolled ? 'blur(12px)' : 'none')};
  border-bottom: 1px solid ${({ $scrolled, theme }) => 
    $scrolled ? theme.colors.border : 'transparent'};
  box-shadow: ${({ $scrolled, theme }) => 
    $scrolled ? theme.shadows.sm : 'none'};
`;

const NavWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const LogoImage = styled.img`
  height: 64px;
  width: auto;
  object-fit: contain;

  @media (max-width: 480px) {
    height: 48px;
  }
`;

const DesktopMenu = styled.nav`
  display: none;
  align-items: center;
  gap: 2.5rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
  }
`;

const MenuLink = styled(NavLink)`
  font-weight: 500;
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
  position: relative;
  padding: 0.5rem 0;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  &.active {
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: 600;
  }
`;

const ActiveIndicator = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.full};
`;

const RightControls = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`;

const CartButton = styled(Link)`
  position: relative;
  color: ${({ theme }) => theme.colors.secondary};
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease, color 0.2s ease;

  &:hover {
    transform: scale(1.08);
    color: ${({ theme }) => theme.colors.secondaryHover};
  }
`;

const CartBadge = styled(motion.span)`
  position: absolute;
  top: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text.light};
  font-family: ${({ theme }) => theme.typography.body};
  font-size: 0.7rem;
  font-weight: 700;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1.5px solid ${({ theme }) => theme.colors.background.main};
`;

const MobileMenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  color: ${({ theme }) => theme.colors.text.primary};
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

// Animated Mobile Drawer
const DrawerOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(46, 30, 18, 0.4);
  backdrop-filter: blur(4px);
  z-index: 1000;
`;

const DrawerContent = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 80%;
  max-width: 300px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background.main};
  background-image: ${({ theme }) => theme.colors.background.gradient};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  z-index: 1001;
`;

const DrawerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DrawerNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const DrawerLink = styled(NavLink)`
  font-size: ${({ theme }) => theme.typography.fontSizes.md};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.primary};
  padding: 0.5rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  &.active {
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: 600;
  }
`;

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close drawer when path changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <HeaderContainer $scrolled={scrolled}>
        <NavWrapper>
          <LogoContainer to="/" aria-label="Nanntu Naturals Home">
            <LogoImage src={logoImg} alt="Nanntu Naturals Logo" />
          </LogoContainer>

          {/* Desktop Menu */}
          <DesktopMenu>
            {navigationConfig.map((item) => (
              <MenuLink key={item.path} to={item.path}>
                {item.label}
                {location.pathname === item.path && (
                  <ActiveIndicator
                    layoutId="activeNavIndicator"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </MenuLink>
            ))}
          </DesktopMenu>

          {/* Right side controls */}
          <RightControls>
            <CartButton to="/cart" aria-label={`Shopping cart with ${cartCount} items`}>
              <ShoppingCart size={22} />
              <AnimatePresence>
                {cartCount > 0 && (
                  <CartBadge
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 25 }}
                  >
                    {cartCount}
                  </CartBadge>
                )}
              </AnimatePresence>
            </CartButton>

            <MobileMenuButton
              onClick={() => setIsOpen(true)}
              aria-expanded={isOpen}
              aria-label="Open navigation menu"
            >
              <Menu size={24} />
            </MobileMenuButton>
          </RightControls>
        </NavWrapper>
      </HeaderContainer>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <DrawerOverlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <DrawerContent
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.35, ease: 'easeOut' }}
            >
              <DrawerHeader>
                <span style={{ fontFamily: 'Playfair Display', fontWeight: 700, color: '#1E4620' }}>
                  Menu
                </span>
                <MobileMenuButton onClick={() => setIsOpen(false)} aria-label="Close menu">
                  <X size={24} />
                </MobileMenuButton>
              </DrawerHeader>

              <DrawerNav>
                {navigationConfig.map((item) => (
                  <DrawerLink key={item.path} to={item.path}>
                    {item.label}
                  </DrawerLink>
                ))}
              </DrawerNav>
            </DrawerContent>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
