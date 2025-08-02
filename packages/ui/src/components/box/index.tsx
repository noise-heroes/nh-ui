import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '../../utils/cn';

/**
 * Box component - The fundamental building block of NH-UI
 * 
 * A polymorphic container component that provides all styling props
 * similar to Apple's SwiftUI VStack/HStack philosophy
 * 
 * @example
 * ```tsx
 * // Basic usage
 * <Box p={4} bg="orange-500" rounded="lg">
 *   Content
 * </Box>
 * 
 * // With responsive props
 * <Box
 *   p={{ base: 2, sm: 4, md: 6 }}
 *   display={{ base: 'block', lg: 'flex' }}
 * >
 *   Responsive content
 * </Box>
 * 
 * // As different element
 * <Box as="section" className="hero-section">
 *   <Box as="h1">Title</Box>
 * </Box>
 * ```
 */

const box = tv({
  base: 'box',
  variants: {
    // Display variants
    display: {
      block: 'block',
      inline: 'inline',
      'inline-block': 'inline-block',
      flex: 'flex',
      'inline-flex': 'inline-flex',
      grid: 'grid',
      'inline-grid': 'inline-grid',
      none: 'hidden',
    },
    
    // Position variants
    position: {
      static: 'static',
      relative: 'relative',
      absolute: 'absolute',
      fixed: 'fixed',
      sticky: 'sticky',
    },
    
    // Overflow variants
    overflow: {
      visible: 'overflow-visible',
      hidden: 'overflow-hidden',
      scroll: 'overflow-scroll',
      auto: 'overflow-auto',
      'x-auto': 'overflow-x-auto',
      'y-auto': 'overflow-y-auto',
    },
    
    // Text alignment
    textAlign: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
      justify: 'text-justify',
    },
  },
});

// Spacing scale matching Tailwind
const spacingScale = {
  0: '0',
  px: '1px',
  0.5: '0.125rem',
  1: '0.25rem',
  1.5: '0.375rem',
  2: '0.5rem',
  2.5: '0.625rem',
  3: '0.75rem',
  3.5: '0.875rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  7: '1.75rem',
  8: '2rem',
  9: '2.25rem',
  10: '2.5rem',
  12: '3rem',
  14: '3.5rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
  28: '7rem',
  32: '8rem',
  36: '9rem',
  40: '10rem',
  44: '11rem',
  48: '12rem',
  52: '13rem',
  56: '14rem',
  60: '15rem',
  64: '16rem',
  72: '18rem',
  80: '20rem',
  96: '24rem',
};

// Size scale for width/height
const sizeScale = {
  ...spacingScale,
  auto: 'auto',
  '1/2': '50%',
  '1/3': '33.333333%',
  '2/3': '66.666667%',
  '1/4': '25%',
  '2/4': '50%',
  '3/4': '75%',
  '1/5': '20%',
  '2/5': '40%',
  '3/5': '60%',
  '4/5': '80%',
  full: '100%',
  screen: '100vh',
  min: 'min-content',
  max: 'max-content',
  fit: 'fit-content',
};

export interface BoxProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof box> {
  /** The element type to render */
  as?: React.ElementType;
  
  // Spacing props
  /** Padding - accepts spacing scale values */
  p?: keyof typeof spacingScale | { base?: keyof typeof spacingScale; sm?: keyof typeof spacingScale; md?: keyof typeof spacingScale; lg?: keyof typeof spacingScale; xl?: keyof typeof spacingScale };
  /** Padding top */
  pt?: keyof typeof spacingScale;
  /** Padding right */
  pr?: keyof typeof spacingScale;
  /** Padding bottom */
  pb?: keyof typeof spacingScale;
  /** Padding left */
  pl?: keyof typeof spacingScale;
  /** Padding horizontal */
  px?: keyof typeof spacingScale;
  /** Padding vertical */
  py?: keyof typeof spacingScale;
  
  /** Margin - accepts spacing scale values */
  m?: keyof typeof spacingScale | { base?: keyof typeof spacingScale; sm?: keyof typeof spacingScale; md?: keyof typeof spacingScale; lg?: keyof typeof spacingScale; xl?: keyof typeof spacingScale };
  /** Margin top */
  mt?: keyof typeof spacingScale;
  /** Margin right */
  mr?: keyof typeof spacingScale;
  /** Margin bottom */
  mb?: keyof typeof spacingScale;
  /** Margin left */
  ml?: keyof typeof spacingScale;
  /** Margin horizontal */
  mx?: keyof typeof spacingScale;
  /** Margin vertical */
  my?: keyof typeof spacingScale;
  
  // Size props
  /** Width */
  w?: keyof typeof sizeScale;
  /** Height */
  h?: keyof typeof sizeScale;
  /** Min width */
  minW?: keyof typeof sizeScale;
  /** Max width */
  maxW?: keyof typeof sizeScale;
  /** Min height */
  minH?: keyof typeof sizeScale;
  /** Max height */
  maxH?: keyof typeof sizeScale;
  
  // Background props
  /** Background color */
  bg?: string;
  /** Background gradient */
  bgGradient?: 'brand' | 'orangeFade' | 'tealFade' | 'blackToOrange' | 'blackToTeal' | 'whiteToOrange' | 'whiteToTeal';
  
  // Border props
  /** Border radius */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';
  /** Border width */
  border?: 0 | 1 | 2 | 4 | 8;
  /** Border color */
  borderColor?: string;
  
  // Effect props
  /** Box shadow */
  shadow?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'orange' | 'teal' | 'none';
  /** Glow effect */
  glow?: 'orange' | 'teal' | 'white';
  /** Neon effect */
  neon?: 'orange' | 'teal' | 'white';
  
  // Other props
  /** Z-index */
  zIndex?: 0 | 10 | 20 | 30 | 40 | 50;
  /** Opacity */
  opacity?: 0 | 5 | 10 | 20 | 25 | 30 | 40 | 50 | 60 | 70 | 75 | 80 | 90 | 95 | 100;
}

export const Box = React.forwardRef<HTMLElement, BoxProps>(
  ({ 
    as: Component = 'div',
    className,
    display,
    position,
    overflow,
    textAlign,
    
    // Spacing
    p, pt, pr, pb, pl, px, py,
    m, mt, mr, mb, ml, mx, my,
    
    // Size
    w, h, minW, maxW, minH, maxH,
    
    // Background
    bg, bgGradient,
    
    // Border
    rounded, border, borderColor,
    
    // Effects
    shadow, glow, neon,
    
    // Other
    zIndex, opacity,
    
    children,
    ...props 
  }, ref) => {
    const classes = [];
    
    // Handle responsive padding
    if (p && typeof p === 'object') {
      if (p.base) classes.push(`p-${p.base}`);
      if (p.sm) classes.push(`sm:p-${p.sm}`);
      if (p.md) classes.push(`md:p-${p.md}`);
      if (p.lg) classes.push(`lg:p-${p.lg}`);
      if (p.xl) classes.push(`xl:p-${p.xl}`);
    } else if (p) {
      classes.push(`p-${p}`);
    }
    
    // Handle individual padding
    if (pt) classes.push(`pt-${pt}`);
    if (pr) classes.push(`pr-${pr}`);
    if (pb) classes.push(`pb-${pb}`);
    if (pl) classes.push(`pl-${pl}`);
    if (px) classes.push(`px-${px}`);
    if (py) classes.push(`py-${py}`);
    
    // Handle responsive margin
    if (m && typeof m === 'object') {
      if (m.base) classes.push(`m-${m.base}`);
      if (m.sm) classes.push(`sm:m-${m.sm}`);
      if (m.md) classes.push(`md:m-${m.md}`);
      if (m.lg) classes.push(`lg:m-${m.lg}`);
      if (m.xl) classes.push(`xl:m-${m.xl}`);
    } else if (m) {
      classes.push(`m-${m}`);
    }
    
    // Handle individual margin
    if (mt) classes.push(`mt-${mt}`);
    if (mr) classes.push(`mr-${mr}`);
    if (mb) classes.push(`mb-${mb}`);
    if (ml) classes.push(`ml-${ml}`);
    if (mx) classes.push(`mx-${mx}`);
    if (my) classes.push(`my-${my}`);
    
    // Handle size
    if (w) classes.push(`w-${w}`);
    if (h) classes.push(`h-${h}`);
    if (minW) classes.push(`min-w-${minW}`);
    if (maxW) classes.push(`max-w-${maxW}`);
    if (minH) classes.push(`min-h-${minH}`);
    if (maxH) classes.push(`max-h-${maxH}`);
    
    // Handle background
    if (bg) classes.push(`bg-${bg}`);
    if (bgGradient) classes.push(`bg-gradient-to-br from-${bgGradient}`);
    
    // Handle border
    if (rounded) classes.push(`rounded${rounded === 'none' ? '' : `-${rounded}`}`);
    if (border) classes.push(`border-${border}`);
    if (borderColor) classes.push(`border-${borderColor}`);
    
    // Handle effects
    if (shadow) classes.push(`shadow-${shadow}`);
    if (glow) classes.push(`shadow-glow-${glow}`);
    if (neon) classes.push(`shadow-neon-${neon}`);
    
    // Handle other props
    if (zIndex) classes.push(`z-${zIndex}`);
    if (opacity) classes.push(`opacity-${opacity}`);
    
    return (
      <Component
        ref={ref}
        className={cn(
          box({ display, position, overflow, textAlign }),
          ...classes,
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Box.displayName = 'Box';

export default Box;