// Noise Heroes Color System
// Primary color palette with semantic naming and accessibility considerations

export const colors = {
  // Brand Colors
  brand: {
    primary: '#3B82F6',    // Bright Blue - Main brand color
    secondary: '#A855F7',  // Purple - Accent color
    tertiary: '#14B8A6',   // Teal - Success/positive actions
  },
  
  // Neutral Palette (Based on Neue Haas aesthetic)
  neutral: {
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#E5E5E5',
    300: '#D4D4D4',
    400: '#A3A3A3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
    950: '#0A0A0A',
  },
  
  // Functional Colors
  functional: {
    success: '#14B8A6',    // Teal
    warning: '#F59E0B',    // Amber
    danger: '#EF4444',     // Red
    info: '#3B82F6',       // Blue (same as primary)
  },
  
  // Gradients
  gradients: {
    brand: 'linear-gradient(135deg, #3B82F6 0%, #A855F7 100%)',
    electric: 'linear-gradient(135deg, #A855F7 0%, #EC4899 100%)',
    ocean: 'linear-gradient(135deg, #3B82F6 0%, #14B8A6 100%)',
    sunset: 'linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)',
    dark: 'linear-gradient(135deg, #404040 0%, #171717 100%)',
  },
  
  // Overlays
  overlays: {
    light: 'rgba(255, 255, 255, 0.1)',
    medium: 'rgba(255, 255, 255, 0.2)',
    heavy: 'rgba(255, 255, 255, 0.3)',
    dark: 'rgba(0, 0, 0, 0.5)',
  },
  
  // Shadows (for elevation)
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  },
  
  // Special Effects
  effects: {
    glow: {
      primary: '0 0 20px rgba(59, 130, 246, 0.5)',
      secondary: '0 0 20px rgba(168, 85, 247, 0.5)',
      success: '0 0 20px rgba(20, 184, 166, 0.5)',
    },
    neon: {
      primary: '0 0 40px rgba(59, 130, 246, 0.8), 0 0 80px rgba(59, 130, 246, 0.4)',
      secondary: '0 0 40px rgba(168, 85, 247, 0.8), 0 0 80px rgba(168, 85, 247, 0.4)',
    },
  },
};

// Dark mode color adjustments
export const darkColors = {
  brand: {
    primary: '#60A5FA',    // Lighter blue for dark mode
    secondary: '#C084FC',  // Lighter purple for dark mode
    tertiary: '#2DD4BF',   // Lighter teal for dark mode
  },
  
  functional: {
    success: '#2DD4BF',
    warning: '#FCD34D',
    danger: '#F87171',
    info: '#60A5FA',
  },
};

// Semantic color mappings
export const semanticColors = {
  background: {
    default: 'white',
    secondary: colors.neutral[50],
    tertiary: colors.neutral[100],
  },
  
  foreground: {
    default: colors.neutral[900],
    secondary: colors.neutral[700],
    tertiary: colors.neutral[500],
  },
  
  border: {
    default: colors.neutral[200],
    focus: colors.brand.primary,
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