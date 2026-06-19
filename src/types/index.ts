export interface NavItem {
  label: string;
  path: string;
  isScroll?: boolean; // If we want to use smooth scrolling within the landing page
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  image: string;
  description: string;
  features: string[];
  transparency: {
    origin: string;
    harvested: string;
    processing: string;
  };
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface ThemeColors {
  primary: string;
  primaryHover: string;
  secondary: string;
  secondaryHover: string;
  accent: string;
  accentLight: string;
  background: {
    main: string;
    gradient: string;
    card: string;
    nav: string;
  };
  text: {
    primary: string;
    secondary: string;
    light: string;
  };
  border: string;
}

export interface CustomTheme {
  colors: ThemeColors;
  typography: {
    heading: string;
    body: string;
    fontSizes: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      display: string;
    };
  };
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    full: string;
  };
  shadows: {
    sm: string;
    md: string;
    lg: string;
    premium: string;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
  };
  breakpoints: {
    mobile: string;
    tablet: string;
    laptop: string;
    desktop: string;
    largeDesktop: string;
  };
}
