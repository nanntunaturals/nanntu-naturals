import type { CustomTheme } from '../types';

export const themeConfig: CustomTheme = {
  colors: {
    primary: '#1E4620', // Forest Green
    primaryHover: '#132E15',
    secondary: '#D59621', // Honey Gold
    secondaryHover: '#B27C17',
    accent: '#4E7A53', // Soft Sage Green
    accentLight: '#EBF2EB',
    background: {
      main: '#FDFBF7',
      gradient: 'linear-gradient(135deg, #F9F3EA 0%, #FDFBF8 50%, #ffe4bf 100%)',
      card: '#FCFAF5',
      nav: 'rgba(253, 251, 247, 0.85)',
    },
    text: {
      primary: '#2E1E12', // Rich Earth Charcoal/Brown
      secondary: '#5C4E43', // Warm Medium Brown
      light: '#FAF6F0',
    },
    border: '#EADFCF', // Soft Warm Beige
  },
  typography: {
    heading: "'Playfair Display', 'Georgia', serif",
    body: "'Outfit', 'Inter', sans-serif",
    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.35rem',
      xxl: '2rem',
      display: '3.75rem', // Large screen display heading
    },
  },
  borderRadius: {
    sm: '6px',
    md: '12px',
    lg: '20px',
    xl: '32px',
    full: '9999px',
  },
  shadows: {
    sm: '0 2px 8px rgba(46, 30, 18, 0.04)',
    md: '0 4px 16px rgba(46, 30, 18, 0.08)',
    lg: '0 12px 32px rgba(46, 30, 18, 0.12)',
    premium: '0 20px 40px rgba(46, 30, 18, 0.06), 0 1px 3px rgba(46, 30, 18, 0.02)',
  },
  spacing: {
    xs: '0.25rem', // 4px
    sm: '0.5rem',  // 8px
    md: '1rem',   // 16px
    lg: '1.5rem',  // 24px
    xl: '2.5rem',  // 40px
    xxl: '4rem',   // 64px
  },
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    laptop: '1024px',
    desktop: '1200px',
    largeDesktop: '1440px',
  },
};
