/**
 * Minimal Design Tokens
 * Circle-first, icon-focused, pill-shaped design system
 */

export const minimalDesign = {
  // Border radius for circular and pill shapes
  borderRadius: {
    // Pill shapes - perfect for buttons and inputs
    pill: '9999px',
    
    // Circle shapes - for icon buttons and avatars
    circle: '50%',
    
    // Subtle rounding for cards and containers
    soft: {
      sm: '12px',
      md: '16px',
      lg: '20px',
      xl: '24px',
    },
  },
  
  // Spacing for minimal design
  spacing: {
    // Icon button sizes
    iconButton: {
      sm: '32px',   // Small circular buttons
      md: '40px',   // Default size
      lg: '48px',   // Large buttons
      xl: '56px',   // Extra large
    },
    
    // Padding for pill buttons
    pillPadding: {
      sm: '8px 16px',
      md: '12px 24px',
      lg: '16px 32px',
      xl: '20px 40px',
    },
  },
  
  // Icon sizes
  iconSizes: {
    xs: '16px',
    sm: '20px',
    md: '24px',
    lg: '28px',
    xl: '32px',
  },
  
  // Hover effects
  hover: {
    // Scale for interactive elements
    scale: {
      subtle: 1.02,
      normal: 1.05,
      pronounced: 1.1,
    },
    
    // Rotation for playful interactions
    rotate: {
      subtle: '5deg',
      normal: '15deg',
      full: '360deg',
    },
  },
  
  // Transition timing
  transitions: {
    fast: '150ms ease-out',
    normal: '200ms ease-out',
    smooth: '300ms ease-out',
    slow: '500ms ease-out',
  },
} as const;

// Utility classes for minimal design
export const minimalClasses = {
  // Pill button base
  pillButton: `
    rounded-full
    px-6 py-3
    transition-all duration-200
    hover:scale-105
    active:scale-95
  `,
  
  // Circular icon button
  circleButton: `
    rounded-full
    aspect-square
    flex items-center justify-center
    transition-all duration-200
    hover:scale-110
    hover:rotate-12
    active:scale-95
  `,
  
  // Minimal card
  minimalCard: `
    rounded-2xl
    p-6
    transition-all duration-300
    hover:scale-[1.02]
  `,
  
  // Icon-first layout
  iconFirst: `
    flex items-center gap-2
    [&>svg]:shrink-0
  `,
} as const;