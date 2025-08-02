# NH-UI Design Token System

## Overview

Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes. This document defines the complete token architecture for NH-UI.

## Token Architecture

### 1. Token Layers

```
┌─────────────────────────────────────┐
│         Component Tokens            │ <- Component-specific tokens
├─────────────────────────────────────┤
│         Semantic Tokens             │ <- Purpose-based tokens  
├─────────────────────────────────────┤
│          Core Tokens                │ <- Raw values
└─────────────────────────────────────┘
```

### 2. Token Categories

1. **Core Tokens**: Raw values (colors, sizes, etc.)
2. **Semantic Tokens**: Meaningful aliases (background, text, etc.)
3. **Component Tokens**: Component-specific values

## Color Tokens

### Core Color Palette

```typescript
const colors = {
  // Brand Colors
  brand: {
    orange: {
      50: '#FFF5F0',
      100: '#FFE5D9',
      200: '#FFC7AD',
      300: '#FFA380',
      400: '#FF7F54',
      500: '#FF5500', // Primary brand
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
      500: '#00D9B5', // Secondary brand
      600: '#00C3A3',
      700: '#00AD91',
      800: '#009980',
      900: '#00806B',
      950: '#004D40',
    },
  },
  
  // Neutral Scale
  neutral: {
    0: '#000000',    // Pure black
    50: '#0A0A0A',
    100: '#171717',
    150: '#1F1F1F',
    200: '#262626',
    300: '#404040',
    400: '#525252',
    500: '#737373',
    600: '#A3A3A3',
    700: '#D4D4D4',
    800: '#E5E5E5',
    900: '#F5F5F5',
    950: '#FAFAFA',
    1000: '#FFFFFF', // Pure white
  },
  
  // Functional Colors
  success: {
    50: '#F0FDF4',
    100: '#DCFCE7',
    200: '#BBF7D0',
    300: '#86EFAC',
    400: '#4ADE80',
    500: '#22C55E',
    600: '#16A34A',
    700: '#15803D',
    800: '#166534',
    900: '#14532D',
  },
  
  warning: {
    50: '#FFFBEB',
    100: '#FEF3C7',
    200: '#FDE68A',
    300: '#FCD34D',
    400: '#FBBF24',
    500: '#F59E0B',
    600: '#D97706',
    700: '#B45309',
    800: '#92400E',
    900: '#78350F',
  },
  
  danger: {
    50: '#FEF2F2',
    100: '#FEE2E2',
    200: '#FECACA',
    300: '#FCA5A5',
    400: '#F87171',
    500: '#EF4444',
    600: '#DC2626',
    700: '#B91C1C',
    800: '#991B1B',
    900: '#7F1D1D',
  },
  
  info: {
    50: '#EFF6FF',
    100: '#DBEAFE',
    200: '#BFDBFE',
    300: '#93C5FD',
    400: '#60A5FA',
    500: '#3B82F6',
    600: '#2563EB',
    700: '#1D4ED8',
    800: '#1E40AF',
    900: '#1E3A8A',
  },
};
```

### Semantic Color Tokens

```typescript
const semanticColors = {
  // Backgrounds
  background: {
    primary: {
      light: colors.neutral[1000],
      dark: colors.neutral[0],
    },
    secondary: {
      light: colors.neutral[950],
      dark: colors.neutral[50],
    },
    tertiary: {
      light: colors.neutral[900],
      dark: colors.neutral[100],
    },
    elevated: {
      light: colors.neutral[1000],
      dark: colors.neutral[150],
    },
    overlay: {
      light: 'rgba(0, 0, 0, 0.5)',
      dark: 'rgba(0, 0, 0, 0.7)',
    },
  },
  
  // Text
  text: {
    primary: {
      light: colors.neutral[0],
      dark: colors.neutral[1000],
    },
    secondary: {
      light: colors.neutral[500],
      dark: colors.neutral[400],
    },
    tertiary: {
      light: colors.neutral[400],
      dark: colors.neutral[500],
    },
    disabled: {
      light: colors.neutral[300],
      dark: colors.neutral[600],
    },
    inverse: {
      light: colors.neutral[1000],
      dark: colors.neutral[0],
    },
    brand: {
      light: colors.brand.orange[500],
      dark: colors.brand.orange[400],
    },
  },
  
  // Borders
  border: {
    default: {
      light: colors.neutral[200],
      dark: colors.neutral[800],
    },
    subtle: {
      light: colors.neutral[100],
      dark: colors.neutral[900],
    },
    strong: {
      light: colors.neutral[300],
      dark: colors.neutral[700],
    },
    focus: {
      light: colors.brand.orange[500],
      dark: colors.brand.orange[400],
    },
  },
  
  // Interactive States
  interactive: {
    primary: {
      default: colors.brand.orange[500],
      hover: colors.brand.orange[600],
      active: colors.brand.orange[700],
      disabled: colors.brand.orange[300],
    },
    secondary: {
      default: colors.brand.teal[500],
      hover: colors.brand.teal[600],
      active: colors.brand.teal[700],
      disabled: colors.brand.teal[300],
    },
  },
};
```

## Typography Tokens

### Font Families

```typescript
const fonts = {
  // Primary fonts
  display: "'ABC Diatype Compressed', system-ui, -apple-system, sans-serif",
  body: "'Neue Haas Grotesk Display', system-ui, -apple-system, sans-serif",
  mono: "'SF Mono', 'Consolas', 'Monaco', monospace",
  
  // Fallback stacks
  sansSerif: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  serif: "'Georgia', 'Times New Roman', serif",
};
```

### Font Sizes

```typescript
const fontSizes = {
  // Base scale (rem values)
  '2xs': '0.625rem',  // 10px
  xs: '0.75rem',      // 12px
  sm: '0.875rem',     // 14px
  md: '1rem',         // 16px (base)
  lg: '1.125rem',     // 18px
  xl: '1.25rem',      // 20px
  '2xl': '1.5rem',    // 24px
  '3xl': '1.875rem',  // 30px
  '4xl': '2.25rem',   // 36px
  '5xl': '3rem',      // 48px
  '6xl': '3.75rem',   // 60px
  '7xl': '4.5rem',    // 72px
  '8xl': '6rem',      // 96px
  '9xl': '8rem',      // 128px
};
```

### Font Weights

```typescript
const fontWeights = {
  thin: 100,
  extraLight: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  black: 900,
};
```

### Line Heights

```typescript
const lineHeights = {
  none: 1,
  tight: 1.25,
  snug: 1.375,
  normal: 1.5,
  relaxed: 1.625,
  loose: 2,
  
  // Size-specific
  '2xs': '0.875rem',  // 14px
  xs: '1rem',         // 16px
  sm: '1.25rem',      // 20px
  md: '1.5rem',       // 24px
  lg: '1.75rem',      // 28px
  xl: '2rem',         // 32px
  '2xl': '2.25rem',   // 36px
  '3xl': '2.5rem',    // 40px
  '4xl': '3rem',      // 48px
  '5xl': '4rem',      // 64px
  '6xl': '4.5rem',    // 72px
  '7xl': '5.625rem',  // 90px
  '8xl': '7.5rem',    // 120px
  '9xl': '10rem',     // 160px
};
```

### Letter Spacing

```typescript
const letterSpacing = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em',
};
```

### Typography Compositions

```typescript
const typography = {
  // Display styles (ABC Diatype)
  display: {
    '2xl': {
      fontFamily: fonts.display,
      fontSize: fontSizes['7xl'],
      fontWeight: fontWeights.bold,
      lineHeight: lineHeights['7xl'],
      letterSpacing: letterSpacing.tight,
    },
    xl: {
      fontFamily: fonts.display,
      fontSize: fontSizes['6xl'],
      fontWeight: fontWeights.bold,
      lineHeight: lineHeights['6xl'],
      letterSpacing: letterSpacing.tight,
    },
    lg: {
      fontFamily: fonts.display,
      fontSize: fontSizes['5xl'],
      fontWeight: fontWeights.bold,
      lineHeight: lineHeights['5xl'],
      letterSpacing: letterSpacing.tight,
    },
    md: {
      fontFamily: fonts.display,
      fontSize: fontSizes['4xl'],
      fontWeight: fontWeights.bold,
      lineHeight: lineHeights['4xl'],
      letterSpacing: letterSpacing.tight,
    },
    sm: {
      fontFamily: fonts.display,
      fontSize: fontSizes['3xl'],
      fontWeight: fontWeights.bold,
      lineHeight: lineHeights['3xl'],
      letterSpacing: letterSpacing.tight,
    },
  },
  
  // Heading styles (Neue Haas Grotesk)
  heading: {
    h1: {
      fontFamily: fonts.body,
      fontSize: fontSizes['5xl'],
      fontWeight: fontWeights.bold,
      lineHeight: lineHeights['5xl'],
    },
    h2: {
      fontFamily: fonts.body,
      fontSize: fontSizes['4xl'],
      fontWeight: fontWeights.bold,
      lineHeight: lineHeights['4xl'],
    },
    h3: {
      fontFamily: fonts.body,
      fontSize: fontSizes['3xl'],
      fontWeight: fontWeights.semiBold,
      lineHeight: lineHeights['3xl'],
    },
    h4: {
      fontFamily: fonts.body,
      fontSize: fontSizes['2xl'],
      fontWeight: fontWeights.semiBold,
      lineHeight: lineHeights['2xl'],
    },
    h5: {
      fontFamily: fonts.body,
      fontSize: fontSizes.xl,
      fontWeight: fontWeights.medium,
      lineHeight: lineHeights.xl,
    },
    h6: {
      fontFamily: fonts.body,
      fontSize: fontSizes.lg,
      fontWeight: fontWeights.medium,
      lineHeight: lineHeights.lg,
    },
  },
  
  // Body styles
  body: {
    lg: {
      fontFamily: fonts.body,
      fontSize: fontSizes.lg,
      fontWeight: fontWeights.normal,
      lineHeight: lineHeights.lg,
    },
    md: {
      fontFamily: fonts.body,
      fontSize: fontSizes.md,
      fontWeight: fontWeights.normal,
      lineHeight: lineHeights.md,
    },
    sm: {
      fontFamily: fonts.body,
      fontSize: fontSizes.sm,
      fontWeight: fontWeights.normal,
      lineHeight: lineHeights.sm,
    },
    xs: {
      fontFamily: fonts.body,
      fontSize: fontSizes.xs,
      fontWeight: fontWeights.normal,
      lineHeight: lineHeights.xs,
    },
  },
  
  // Special styles
  label: {
    fontFamily: fonts.body,
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.medium,
    lineHeight: lineHeights.sm,
    letterSpacing: letterSpacing.wide,
  },
  caption: {
    fontFamily: fonts.body,
    fontSize: fontSizes.xs,
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.xs,
  },
  overline: {
    fontFamily: fonts.body,
    fontSize: fontSizes.xs,
    fontWeight: fontWeights.semiBold,
    lineHeight: lineHeights.xs,
    letterSpacing: letterSpacing.widest,
    textTransform: 'uppercase',
  },
  code: {
    fontFamily: fonts.mono,
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.sm,
  },
};
```

## Spacing Tokens

### Base Scale

```typescript
const spacing = {
  0: '0',
  px: '1px',
  0.5: '0.125rem',    // 2px
  1: '0.25rem',       // 4px
  1.5: '0.375rem',    // 6px
  2: '0.5rem',        // 8px
  2.5: '0.625rem',    // 10px
  3: '0.75rem',       // 12px
  3.5: '0.875rem',    // 14px
  4: '1rem',          // 16px
  5: '1.25rem',       // 20px
  6: '1.5rem',        // 24px
  7: '1.75rem',       // 28px
  8: '2rem',          // 32px
  9: '2.25rem',       // 36px
  10: '2.5rem',       // 40px
  11: '2.75rem',      // 44px
  12: '3rem',         // 48px
  14: '3.5rem',       // 56px
  16: '4rem',         // 64px
  20: '5rem',         // 80px
  24: '6rem',         // 96px
  28: '7rem',         // 112px
  32: '8rem',         // 128px
  36: '9rem',         // 144px
  40: '10rem',        // 160px
  44: '11rem',        // 176px
  48: '12rem',        // 192px
  52: '13rem',        // 208px
  56: '14rem',        // 224px
  60: '15rem',        // 240px
  64: '16rem',        // 256px
  72: '18rem',        // 288px
  80: '20rem',        // 320px
  96: '24rem',        // 384px
};
```

### Semantic Spacing

```typescript
const semanticSpacing = {
  // Layout spacing
  layout: {
    xs: spacing[2],   // 8px
    sm: spacing[4],   // 16px
    md: spacing[6],   // 24px
    lg: spacing[8],   // 32px
    xl: spacing[12],  // 48px
    '2xl': spacing[16], // 64px
  },
  
  // Component spacing
  component: {
    xs: spacing[1],   // 4px
    sm: spacing[2],   // 8px
    md: spacing[3],   // 12px
    lg: spacing[4],   // 16px
    xl: spacing[6],   // 24px
  },
  
  // Container padding
  container: {
    xs: spacing[4],   // 16px
    sm: spacing[6],   // 24px
    md: spacing[8],   // 32px
    lg: spacing[12],  // 48px
    xl: spacing[16],  // 64px
  },
  
  // Page margins
  page: {
    mobile: spacing[4],    // 16px
    tablet: spacing[6],    // 24px
    desktop: spacing[8],   // 32px
    wide: spacing[12],     // 48px
  },
};
```

## Sizing Tokens

### Component Sizes

```typescript
const sizes = {
  // Base sizes
  0: '0',
  px: '1px',
  0.5: '0.125rem',
  1: '0.25rem',
  // ... (same as spacing)
  
  // Semantic sizes
  components: {
    // Button heights
    button: {
      xs: '1.75rem',    // 28px
      sm: '2rem',       // 32px
      md: '2.5rem',     // 40px
      lg: '3rem',       // 48px
      xl: '3.5rem',     // 56px
    },
    
    // Input heights
    input: {
      xs: '1.75rem',    // 28px
      sm: '2rem',       // 32px
      md: '2.5rem',     // 40px
      lg: '3rem',       // 48px
      xl: '3.5rem',     // 56px
    },
    
    // Icon sizes
    icon: {
      xs: '0.75rem',    // 12px
      sm: '1rem',       // 16px
      md: '1.25rem',    // 20px
      lg: '1.5rem',     // 24px
      xl: '2rem',       // 32px
    },
    
    // Avatar sizes
    avatar: {
      xs: '1.5rem',     // 24px
      sm: '2rem',       // 32px
      md: '2.5rem',     // 40px
      lg: '3rem',       // 48px
      xl: '4rem',       // 64px
      '2xl': '5rem',    // 80px
    },
  },
  
  // Container widths
  container: {
    xs: '20rem',      // 320px
    sm: '24rem',      // 384px
    md: '28rem',      // 448px
    lg: '32rem',      // 512px
    xl: '36rem',      // 576px
    '2xl': '42rem',   // 672px
    '3xl': '48rem',   // 768px
    '4xl': '56rem',   // 896px
    '5xl': '64rem',   // 1024px
    '6xl': '72rem',   // 1152px
    '7xl': '80rem',   // 1280px
    full: '100%',
  },
};
```

## Border Tokens

### Border Widths

```typescript
const borderWidths = {
  0: '0',
  1: '1px',
  2: '2px',
  4: '4px',
  8: '8px',
};
```

### Border Radius

```typescript
const borderRadius = {
  none: '0',
  sm: '0.125rem',     // 2px
  base: '0.25rem',    // 4px
  md: '0.375rem',     // 6px
  lg: '0.5rem',       // 8px
  xl: '0.75rem',      // 12px
  '2xl': '1rem',      // 16px
  '3xl': '1.5rem',    // 24px
  full: '9999px',
  
  // Component-specific
  button: {
    xs: '0.25rem',    // 4px
    sm: '0.375rem',   // 6px
    md: '0.5rem',     // 8px
    lg: '0.75rem',    // 12px
    xl: '1rem',       // 16px
  },
  
  card: {
    sm: '0.5rem',     // 8px
    md: '0.75rem',    // 12px
    lg: '1rem',       // 16px
    xl: '1.5rem',     // 24px
  },
  
  input: {
    sm: '0.25rem',    // 4px
    md: '0.375rem',   // 6px
    lg: '0.5rem',     // 8px
  },
};
```

## Shadow Tokens

### Elevation Scale

```typescript
const shadows = {
  none: 'none',
  xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  
  // Brand shadows
  brand: {
    orange: {
      sm: '0 4px 14px 0 rgba(255, 85, 0, 0.15)',
      md: '0 10px 20px -5px rgba(255, 85, 0, 0.2)',
      lg: '0 20px 40px -10px rgba(255, 85, 0, 0.25)',
    },
    teal: {
      sm: '0 4px 14px 0 rgba(0, 217, 181, 0.15)',
      md: '0 10px 20px -5px rgba(0, 217, 181, 0.2)',
      lg: '0 20px 40px -10px rgba(0, 217, 181, 0.25)',
    },
  },
  
  // Special effects
  glow: {
    orange: '0 0 20px rgba(255, 85, 0, 0.4)',
    teal: '0 0 20px rgba(0, 217, 181, 0.4)',
    white: '0 0 20px rgba(255, 255, 255, 0.4)',
  },
  
  neon: {
    orange: '0 0 20px rgba(255, 85, 0, 0.6), 0 0 40px rgba(255, 85, 0, 0.4), 0 0 60px rgba(255, 85, 0, 0.2)',
    teal: '0 0 20px rgba(0, 217, 181, 0.6), 0 0 40px rgba(0, 217, 181, 0.4), 0 0 60px rgba(0, 217, 181, 0.2)',
  },
};
```

## Motion Tokens

### Duration

```typescript
const duration = {
  instant: '0ms',
  faster: '50ms',
  fast: '100ms',
  quick: '150ms',
  normal: '200ms',
  moderate: '300ms',
  slow: '400ms',
  slower: '600ms',
  slowest: '800ms',
};
```

### Easing

```typescript
const easing = {
  // Basic
  linear: 'linear',
  ease: 'ease',
  easeIn: 'ease-in',
  easeOut: 'ease-out',
  easeInOut: 'ease-in-out',
  
  // Custom curves
  easeInQuad: 'cubic-bezier(0.55, 0.085, 0.68, 0.53)',
  easeOutQuad: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  easeInOutQuad: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
  
  easeInCubic: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
  easeOutCubic: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  easeInOutCubic: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  
  easeInQuart: 'cubic-bezier(0.895, 0.03, 0.685, 0.22)',
  easeOutQuart: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
  easeInOutQuart: 'cubic-bezier(0.77, 0, 0.175, 1)',
  
  // Spring
  spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  springOut: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  
  // Smooth
  smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
  smoothIn: 'cubic-bezier(0.4, 0, 1, 1)',
  smoothOut: 'cubic-bezier(0, 0, 0.2, 1)',
};
```

### Animation Presets

```typescript
const animations = {
  // Fade
  fadeIn: {
    from: { opacity: 0 },
    to: { opacity: 1 },
    duration: duration.normal,
    easing: easing.smooth,
  },
  
  // Slide
  slideUp: {
    from: { transform: 'translateY(20px)', opacity: 0 },
    to: { transform: 'translateY(0)', opacity: 1 },
    duration: duration.moderate,
    easing: easing.smoothOut,
  },
  
  // Scale
  scaleIn: {
    from: { transform: 'scale(0.9)', opacity: 0 },
    to: { transform: 'scale(1)', opacity: 1 },
    duration: duration.normal,
    easing: easing.springOut,
  },
  
  // Pulse
  pulse: {
    '0%, 100%': { transform: 'scale(1)' },
    '50%': { transform: 'scale(1.05)' },
    duration: '2000ms',
    easing: easing.easeInOut,
    iteration: 'infinite',
  },
};
```

## Breakpoint Tokens

### Screen Sizes

```typescript
const breakpoints = {
  // Mobile first breakpoints
  xs: '0',          // 0px and up
  sm: '640px',      // Small devices
  md: '768px',      // Medium devices
  lg: '1024px',     // Large devices
  xl: '1280px',     // Extra large devices
  '2xl': '1536px',  // 2X large devices
  
  // Device-specific
  mobile: '0',
  mobileLg: '480px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1280px',
  ultraWide: '1920px',
};
```

### Media Queries

```typescript
const mediaQueries = {
  xs: `@media (min-width: ${breakpoints.xs})`,
  sm: `@media (min-width: ${breakpoints.sm})`,
  md: `@media (min-width: ${breakpoints.md})`,
  lg: `@media (min-width: ${breakpoints.lg})`,
  xl: `@media (min-width: ${breakpoints.xl})`,
  '2xl': `@media (min-width: ${breakpoints['2xl']})`,
  
  // Special queries
  motion: '@media (prefers-reduced-motion: no-preference)',
  reducedMotion: '@media (prefers-reduced-motion: reduce)',
  dark: '@media (prefers-color-scheme: dark)',
  light: '@media (prefers-color-scheme: light)',
  highContrast: '@media (prefers-contrast: high)',
  
  // Orientation
  portrait: '@media (orientation: portrait)',
  landscape: '@media (orientation: landscape)',
  
  // Hover capability
  hover: '@media (hover: hover)',
  touch: '@media (hover: none)',
};
```

## Z-Index Tokens

### Layer Scale

```typescript
const zIndex = {
  // Base layers
  hide: -1,
  base: 0,
  raised: 1,
  
  // Component layers
  dropdown: 10,
  sticky: 20,
  fixed: 30,
  overlay: 40,
  modal: 50,
  popover: 60,
  tooltip: 70,
  notification: 80,
  
  // Special
  max: 99999,
};
```

## Component Token Examples

### Button Tokens

```typescript
const buttonTokens = {
  // Sizes
  size: {
    xs: {
      height: sizes.components.button.xs,
      padding: `${spacing[1]} ${spacing[3]}`,
      fontSize: fontSizes.xs,
    },
    sm: {
      height: sizes.components.button.sm,
      padding: `${spacing[2]} ${spacing[4]}`,
      fontSize: fontSizes.sm,
    },
    md: {
      height: sizes.components.button.md,
      padding: `${spacing[2.5]} ${spacing[5]}`,
      fontSize: fontSizes.md,
    },
    lg: {
      height: sizes.components.button.lg,
      padding: `${spacing[3]} ${spacing[6]}`,
      fontSize: fontSizes.lg,
    },
  },
  
  // Variants
  variant: {
    solid: {
      background: 'var(--button-bg)',
      color: 'var(--button-text)',
      border: 'none',
    },
    outline: {
      background: 'transparent',
      color: 'var(--button-bg)',
      border: `${borderWidths[2]} solid var(--button-bg)`,
    },
    ghost: {
      background: 'transparent',
      color: 'var(--button-bg)',
      border: 'none',
    },
  },
};
```

## Token Usage

### CSS Variables

```css
:root {
  /* Colors */
  --nh-color-brand-orange: #FF5500;
  --nh-color-brand-teal: #00D9B5;
  
  /* Typography */
  --nh-font-display: 'ABC Diatype Compressed';
  --nh-font-body: 'Neue Haas Grotesk Display';
  
  /* Spacing */
  --nh-space-1: 0.25rem;
  --nh-space-2: 0.5rem;
  
  /* Motion */
  --nh-duration-normal: 200ms;
  --nh-easing-smooth: cubic-bezier(0.4, 0, 0.2, 1);
}
```

### JavaScript Usage

```typescript
import { colors, spacing, typography } from '@noiseheroes/ui/tokens';

const styles = {
  color: colors.brand.orange[500],
  padding: spacing[4],
  ...typography.heading.h1,
};
```

### Component Implementation

```typescript
const Button = styled.button<{ size: Size }>`
  height: ${props => sizes.components.button[props.size]};
  padding: ${props => buttonTokens.size[props.size].padding};
  font-size: ${props => buttonTokens.size[props.size].fontSize};
  
  transition: all ${duration.normal} ${easing.smooth};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${shadows.lg};
  }
`;
```

## Token Documentation

Every token should include:
1. **Name**: Clear, descriptive name
2. **Value**: The actual value
3. **Usage**: Where and how to use it
4. **Example**: Code example
5. **Notes**: Any special considerations

This token system provides a complete foundation for building consistent, scalable, and maintainable UI components in the NH-UI design system.