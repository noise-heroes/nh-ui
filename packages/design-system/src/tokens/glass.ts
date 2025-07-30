/**
 * Glass Effects Design Tokens
 * Flat design meets glassmorphism - Noise Heroes signature style
 */

export const glassEffects = {
  // Backdrop filters for glass effect
  backdrop: {
    // Main glass blur for cards and sections
    blur: {
      xs: 'blur(4px)',
      sm: 'blur(8px)',
      md: 'blur(12px)',
      lg: 'blur(16px)',
      xl: 'blur(24px)',
      '2xl': 'blur(40px)',
    },
    // Saturation for vibrancy
    saturate: {
      low: 'saturate(100%)',
      medium: 'saturate(150%)',
      high: 'saturate(180%)',
    },
  },
  
  // Background colors with transparency for glass effect
  backgrounds: {
    // Light theme glass backgrounds
    light: {
      card: 'rgba(255, 255, 255, 0.7)',
      cardHover: 'rgba(255, 255, 255, 0.8)',
      section: 'rgba(255, 255, 255, 0.5)',
      overlay: 'rgba(255, 255, 255, 0.3)',
      subtle: 'rgba(255, 255, 255, 0.1)',
    },
    // Dark theme glass backgrounds
    dark: {
      card: 'rgba(10, 10, 10, 0.7)',
      cardHover: 'rgba(10, 10, 10, 0.8)',
      section: 'rgba(10, 10, 10, 0.5)',
      overlay: 'rgba(10, 10, 10, 0.3)',
      subtle: 'rgba(10, 10, 10, 0.1)',
    },
    // Brand colored glass (orange/teal)
    brand: {
      primary: 'rgba(255, 85, 0, 0.1)',
      primaryHover: 'rgba(255, 85, 0, 0.15)',
      secondary: 'rgba(0, 217, 181, 0.1)',
      secondaryHover: 'rgba(0, 217, 181, 0.15)',
    },
  },
  
  // Border styles for glass elements
  borders: {
    light: {
      default: '1px solid rgba(255, 255, 255, 0.2)',
      hover: '1px solid rgba(255, 255, 255, 0.3)',
      focus: '1px solid rgba(255, 85, 0, 0.5)',
    },
    dark: {
      default: '1px solid rgba(255, 255, 255, 0.1)',
      hover: '1px solid rgba(255, 255, 255, 0.2)',
      focus: '1px solid rgba(0, 217, 181, 0.5)',
    },
  },
  
  // Shadow effects for depth
  shadows: {
    // Soft shadows for glass elements
    glass: {
      sm: '0 2px 8px rgba(0, 0, 0, 0.04)',
      md: '0 4px 16px rgba(0, 0, 0, 0.08)',
      lg: '0 8px 32px rgba(0, 0, 0, 0.12)',
      xl: '0 16px 48px rgba(0, 0, 0, 0.16)',
    },
    // Colored shadows for brand elements
    brand: {
      primary: '0 4px 16px rgba(255, 85, 0, 0.2)',
      secondary: '0 4px 16px rgba(0, 217, 181, 0.2)',
    },
  },
} as const;

// Utility classes for glass effects
export const glassClasses = {
  // Base glass card
  card: `
    backdrop-blur-md 
    bg-white/70 dark:bg-black/70 
    border border-white/20 dark:border-white/10
    shadow-glass-md
  `,
  
  // Glass section/container
  section: `
    backdrop-blur-lg 
    bg-white/50 dark:bg-black/50 
    border border-white/10 dark:border-white/5
  `,
  
  // Subtle glass overlay
  overlay: `
    backdrop-blur-sm 
    bg-white/30 dark:bg-black/30
  `,
  
  // Interactive glass element
  interactive: `
    backdrop-blur-md 
    bg-white/70 dark:bg-black/70 
    border border-white/20 dark:border-white/10
    hover:bg-white/80 dark:hover:bg-black/80
    hover:border-white/30 dark:hover:border-white/20
    transition-all duration-200
  `,
} as const;