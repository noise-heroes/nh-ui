import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '../../utils/cn';

/**
 * Text component - Typography system for NH-UI
 * 
 * A flexible text component with semantic HTML elements and
 * comprehensive styling options inspired by Apple's typography
 * 
 * @example
 * ```tsx
 * // Heading
 * <Text as="h1" variant="display" gradient="brand">
 *   Noise Heroes
 * </Text>
 * 
 * // Body text
 * <Text variant="body" color="neutral-600">
 *   Building the future of autonomous AI
 * </Text>
 * 
 * // With custom styling
 * <Text
 *   as="p"
 *   size="lg"
 *   weight="medium"
 *   leading="relaxed"
 *   tracking="wide"
 * >
 *   Custom styled text
 * </Text>
 * ```
 */

const text = tv({
  base: 'transition-colors',
  variants: {
    variant: {
      display: 'font-display text-6xl font-bold tracking-tight',
      headline: 'font-sans text-4xl font-bold tracking-tight',
      title: 'font-sans text-2xl font-semibold',
      subtitle: 'font-sans text-xl font-medium',
      body: 'font-sans text-base',
      label: 'font-sans text-sm font-medium',
      caption: 'font-sans text-xs',
      code: 'font-mono text-sm',
      brand: 'font-brand uppercase tracking-wider',
    },
    
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
      '6xl': 'text-6xl',
      '7xl': 'text-7xl',
      '8xl': 'text-8xl',
      '9xl': 'text-9xl',
    },
    
    weight: {
      thin: 'font-thin',
      extralight: 'font-extralight',
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
      extrabold: 'font-extrabold',
      black: 'font-black',
    },
    
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
      justify: 'text-justify',
    },
    
    leading: {
      none: 'leading-none',
      tight: 'leading-tight',
      snug: 'leading-snug',
      normal: 'leading-normal',
      relaxed: 'leading-relaxed',
      loose: 'leading-loose',
    },
    
    tracking: {
      tighter: 'tracking-tighter',
      tight: 'tracking-tight',
      normal: 'tracking-normal',
      wide: 'tracking-wide',
      wider: 'tracking-wider',
      widest: 'tracking-widest',
    },
    
    decoration: {
      none: 'no-underline',
      underline: 'underline',
      'line-through': 'line-through',
      overline: 'overline',
    },
    
    transform: {
      none: 'normal-case',
      uppercase: 'uppercase',
      lowercase: 'lowercase',
      capitalize: 'capitalize',
    },
    
    // Semantic color variants
    color: {
      default: 'text-neutral-900 dark:text-neutral-100',
      primary: 'text-orange-500 dark:text-orange-400',
      secondary: 'text-teal-500 dark:text-teal-400',
      muted: 'text-neutral-600 dark:text-neutral-400',
      inverse: 'text-neutral-100 dark:text-neutral-900',
      success: 'text-teal-600 dark:text-teal-400',
      warning: 'text-orange-600 dark:text-orange-400',
      error: 'text-red-600 dark:text-red-400',
    },
    
    // Text truncation
    truncate: {
      true: 'truncate',
      false: '',
    },
    
    // Line clamp
    clamp: {
      1: 'line-clamp-1',
      2: 'line-clamp-2',
      3: 'line-clamp-3',
      4: 'line-clamp-4',
      5: 'line-clamp-5',
      6: 'line-clamp-6',
    },
  },
  defaultVariants: {
    variant: 'body',
    color: 'default',
    truncate: false,
  },
});

export interface TextProps extends Omit<React.HTMLAttributes<HTMLElement>, 'color'>, VariantProps<typeof text> {
  /** The element type to render */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div' | 'label' | 'code' | 'pre';
  
  /** Apply gradient effect */
  gradient?: 'brand' | 'orangeFade' | 'tealFade' | 'blackToOrange' | 'blackToTeal' | 'whiteToOrange' | 'whiteToTeal';
  
  /** Glow effect for text */
  glow?: 'orange' | 'teal' | 'white';
  
  /** Custom color (overrides color variant) */
  customColor?: string;
  
  /** Font family override */
  font?: 'sans' | 'display' | 'brand' | 'mono';
  
  /** Selection color */
  selection?: 'orange' | 'teal' | 'default';
  
  /** Balance text for better line breaks */
  balance?: boolean;
  
  /** Pretty text wrapping */
  pretty?: boolean;
}

const fontMap = {
  sans: 'font-sans',
  display: 'font-display',
  brand: 'font-brand',
  mono: 'font-mono',
};

const selectionMap = {
  orange: 'selection:bg-orange-500/20 selection:text-orange-900 dark:selection:bg-orange-400/20 dark:selection:text-orange-100',
  teal: 'selection:bg-teal-500/20 selection:text-teal-900 dark:selection:bg-teal-400/20 dark:selection:text-teal-100',
  default: 'selection:bg-neutral-200 selection:text-neutral-900 dark:selection:bg-neutral-700 dark:selection:text-neutral-100',
};

export const Text = React.forwardRef<HTMLElement, TextProps>(
  ({ 
    as: Component = 'p',
    className,
    variant,
    size,
    weight,
    align,
    leading,
    tracking,
    decoration,
    transform,
    color,
    truncate,
    clamp,
    gradient,
    glow,
    customColor,
    font,
    selection = 'default',
    balance,
    pretty,
    style,
    children,
    ...props 
  }, ref) => {
    const classes = [];
    
    // Apply gradient if specified
    if (gradient) {
      classes.push('bg-clip-text text-transparent bg-gradient-to-br');
      
      // Map gradient names to actual gradient classes
      const gradientMap: Record<string, string> = {
        brand: 'from-orange-500 to-teal-500',
        orangeFade: 'from-orange-500 to-orange-300',
        tealFade: 'from-teal-500 to-teal-300',
        blackToOrange: 'from-neutral-900 to-orange-500',
        blackToTeal: 'from-neutral-900 to-teal-500',
        whiteToOrange: 'from-neutral-100 to-orange-500',
        whiteToTeal: 'from-neutral-100 to-teal-500',
      };
      
      if (gradientMap[gradient]) {
        classes.push(gradientMap[gradient]);
      }
    }
    
    // Apply glow effect
    if (glow) {
      const glowMap = {
        orange: 'drop-shadow-[0_0_20px_rgba(255,85,0,0.5)]',
        teal: 'drop-shadow-[0_0_20px_rgba(0,217,181,0.5)]',
        white: 'drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]',
      };
      classes.push(glowMap[glow]);
    }
    
    // Apply font family
    if (font) {
      classes.push(fontMap[font]);
    }
    
    // Apply text balance/pretty
    if (balance) classes.push('text-balance');
    if (pretty) classes.push('text-pretty');
    
    // Apply selection color
    classes.push(selectionMap[selection]);
    
    // Handle custom color
    const customStyle = customColor ? { ...style, color: customColor } : style;
    
    return (
      <Component
        ref={ref as any}
        className={cn(
          text({ 
            variant, 
            size, 
            weight, 
            align, 
            leading, 
            tracking, 
            decoration, 
            transform, 
            color: gradient ? undefined : color as any, 
            truncate, 
            clamp 
          }),
          ...classes,
          className
        )}
        style={customStyle}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Text.displayName = 'Text';

export default Text;