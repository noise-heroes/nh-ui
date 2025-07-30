// Noise Heroes Official Color System
// Based on official brand colors: #000, #FFF, #FF5500, #00D9B5

export const colors = {
  // Official Brand Colors
  brand: {
    black: '#000000',      // Pure Black
    white: '#FFFFFF',      // Pure White
    orange: '#FF5500',     // Noise Heroes Orange (Primary)
    teal: '#00D9B5',       // Noise Heroes Teal (Secondary)
  },
  
  // Extended Brand Palette (shades of official colors)
  orange: {
    50: '#FFF5F0',
    100: '#FFE5D9',
    200: '#FFC7AD',
    300: '#FFA380',
    400: '#FF7F54',
    500: '#FF5500',   // Official Orange
    600: '#E64D00',
    700: '#CC4400',
    800: '#B33C00',
    900: '#803300',
    950: '#4D1F00',
  },
  
  teal: {
    50: '#F0FFFC',
    100: '#D9FFF7',
    200: '#B3FFEF',
    300: '#80FFE5',
    400: '#4DFFDB',
    500: '#00D9B5',   // Official Teal
    600: '#00C3A3',
    700: '#00AD91',
    800: '#009980',
    900: '#00806B',
    950: '#004D40',
  },
  
  // Neutral Palette (Black to White)
  neutral: {
    0: '#000000',      // Pure Black
    50: '#0A0A0A',
    100: '#171717',
    200: '#262626',
    300: '#404040',
    400: '#525252',
    500: '#737373',
    600: '#A3A3A3',
    700: '#D4D4D4',
    800: '#E5E5E5',
    900: '#F5F5F5',
    950: '#FAFAFA',
    1000: '#FFFFFF',   // Pure White
  },
  
  // Functional Colors (using brand colors)
  functional: {
    primary: '#FF5500',    // Orange - Primary actions
    secondary: '#00D9B5',  // Teal - Secondary actions
    success: '#00D9B5',    // Teal - Success states
    warning: '#FF5500',    // Orange - Warning states
    danger: '#FF3333',     // Bright Red - Error states
    info: '#00D9B5',       // Teal - Information
  },
  
  // Gradients using official colors
  gradients: {
    brand: 'linear-gradient(135deg, #FF5500 0%, #00D9B5 100%)',
    orangeFade: 'linear-gradient(135deg, #FF5500 0%, #FF7F54 100%)',
    tealFade: 'linear-gradient(135deg, #00D9B5 0%, #4DFFDB 100%)',
    blackToOrange: 'linear-gradient(135deg, #000000 0%, #FF5500 100%)',
    blackToTeal: 'linear-gradient(135deg, #000000 0%, #00D9B5 100%)',
    whiteToOrange: 'linear-gradient(135deg, #FFFFFF 0%, #FF5500 100%)',
    whiteToTeal: 'linear-gradient(135deg, #FFFFFF 0%, #00D9B5 100%)',
  },
  
  // Overlays
  overlays: {
    light: 'rgba(255, 255, 255, 0.1)',
    medium: 'rgba(255, 255, 255, 0.2)',
    heavy: 'rgba(255, 255, 255, 0.3)',
    dark: 'rgba(0, 0, 0, 0.5)',
    darkMedium: 'rgba(0, 0, 0, 0.7)',
    darkHeavy: 'rgba(0, 0, 0, 0.9)',
  },
  
  // Shadows (using black with opacity)
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    orange: '0 10px 40px -10px rgba(255, 85, 0, 0.4)',
    teal: '0 10px 40px -10px rgba(0, 217, 181, 0.4)',
  },
  
  // Special Effects with brand colors
  effects: {
    glow: {
      orange: '0 0 20px rgba(255, 85, 0, 0.5)',
      teal: '0 0 20px rgba(0, 217, 181, 0.5)',
      white: '0 0 20px rgba(255, 255, 255, 0.5)',
    },
    neon: {
      orange: '0 0 40px rgba(255, 85, 0, 0.8), 0 0 80px rgba(255, 85, 0, 0.4)',
      teal: '0 0 40px rgba(0, 217, 181, 0.8), 0 0 80px rgba(0, 217, 181, 0.4)',
      white: '0 0 40px rgba(255, 255, 255, 0.8), 0 0 80px rgba(255, 255, 255, 0.4)',
    },
  },
};

// Dark mode color adjustments
export const darkColors = {
  brand: {
    orange: '#FF7F54',    // Lighter orange for dark mode
    teal: '#4DFFDB',      // Lighter teal for dark mode
  },
  
  functional: {
    primary: '#FF7F54',
    secondary: '#4DFFDB',
    success: '#4DFFDB',
    warning: '#FFA380',
    danger: '#FF6666',
    info: '#4DFFDB',
  },
};

// Semantic color mappings
export const semanticColors = {
  background: {
    light: colors.brand.white,
    dark: colors.brand.black,
  },
  
  foreground: {
    light: colors.brand.black,
    dark: colors.brand.white,
  },
  
  border: {
    light: colors.neutral[200],
    dark: colors.neutral[800],
    focus: colors.brand.orange,
    error: colors.functional.danger,
  },
};

// Export utility function to apply opacity
export const withOpacity = (color: string, opacity: number): string => {
  const hex = color.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};