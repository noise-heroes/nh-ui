import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '../../utils/cn';
import { Box, type BoxProps } from '../box';

/**
 * Flex component - Flexible box layout with full control
 * 
 * A comprehensive flexbox component that provides all flex properties
 * with an intuitive API similar to CSS-in-JS libraries
 * 
 * @example
 * ```tsx
 * // Basic flex layout
 * <Flex align="center" justify="between">
 *   <Logo />
 *   <Navigation />
 * </Flex>
 * 
 * // Responsive flex
 * <Flex
 *   direction={{ base: 'column', md: 'row' }}
 *   gap={{ base: 2, md: 4 }}
 *   wrap
 * >
 *   <FlexItem grow>Main content</FlexItem>
 *   <FlexItem basis="300px">Sidebar</FlexItem>
 * </Flex>
 * 
 * // Center content
 * <Flex center minH="screen">
 *   <Text>Perfectly centered</Text>
 * </Flex>
 * ```
 */

const flex = tv({
  base: 'flex',
  variants: {
    // Direction
    direction: {
      row: 'flex-row',
      column: 'flex-col',
      'row-reverse': 'flex-row-reverse',
      'column-reverse': 'flex-col-reverse',
    },
    
    // Wrap
    wrap: {
      true: 'flex-wrap',
      false: 'flex-nowrap',
      reverse: 'flex-wrap-reverse',
    },
    
    // Align items
    align: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      stretch: 'items-stretch',
      baseline: 'items-baseline',
    },
    
    // Justify content
    justify: {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
      around: 'justify-around',
      evenly: 'justify-evenly',
    },
    
    // Inline
    inline: {
      true: 'inline-flex',
      false: 'flex',
    },
    
    // Center shorthand
    center: {
      true: 'items-center justify-center',
      false: '',
    },
  },
  defaultVariants: {
    direction: 'row',
    wrap: false,
    align: 'stretch',
    justify: 'start',
    inline: false,
    center: false,
  },
});

const flexItem = tv({
  base: '',
  variants: {
    // Flex grow
    grow: {
      true: 'flex-grow',
      false: 'flex-grow-0',
    },
    
    // Flex shrink
    shrink: {
      true: 'flex-shrink',
      false: 'flex-shrink-0',
    },
    
    // Align self
    alignSelf: {
      auto: 'self-auto',
      start: 'self-start',
      center: 'self-center',
      end: 'self-end',
      stretch: 'self-stretch',
      baseline: 'self-baseline',
    },
  },
  defaultVariants: {
    grow: false,
    shrink: true,
  },
});

// Gap scale
const gapScale = {
  0: '0',
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
};

// Flex basis values
const flexBasisScale = {
  0: '0',
  auto: 'auto',
  px: '1px',
  0.5: '0.125rem',
  1: '0.25rem',
  // ... (includes all spacing values)
  '1/2': '50%',
  '1/3': '33.333333%',
  '2/3': '66.666667%',
  '1/4': '25%',
  '2/4': '50%',
  '3/4': '75%',
  full: '100%',
};

type ResponsiveValue<T> = T | { base?: T; sm?: T; md?: T; lg?: T; xl?: T };

export interface FlexProps extends Omit<BoxProps, 'display'>, Omit<VariantProps<typeof flex>, 'direction'> {
  /** Gap between items */
  gap?: ResponsiveValue<keyof typeof gapScale>;
  
  /** Column gap */
  gapX?: ResponsiveValue<keyof typeof gapScale>;
  
  /** Row gap */
  gapY?: ResponsiveValue<keyof typeof gapScale>;
  
  /** Responsive direction */
  direction?: ResponsiveValue<'row' | 'column' | 'row-reverse' | 'column-reverse'>;
  
  /** Should flex take full width */
  fullWidth?: boolean;
  
  /** Should flex take full height */
  fullHeight?: boolean;
}

export const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
  ({ 
    className,
    direction = 'row',
    wrap,
    align,
    justify,
    inline,
    center,
    gap,
    gapX,
    gapY,
    fullWidth,
    fullHeight,
    children,
    ...props 
  }, ref) => {
    const classes = [];
    
    // Handle responsive direction
    if (typeof direction === 'object') {
      if (direction.base) classes.push(`flex-${direction.base === 'row' ? 'row' : direction.base === 'column' ? 'col' : direction.base.replace('row-', 'row-').replace('column-', 'col-')}`);
      if (direction.sm) classes.push(`sm:flex-${direction.sm === 'row' ? 'row' : direction.sm === 'column' ? 'col' : direction.sm.replace('row-', 'row-').replace('column-', 'col-')}`);
      if (direction.md) classes.push(`md:flex-${direction.md === 'row' ? 'row' : direction.md === 'column' ? 'col' : direction.md.replace('row-', 'row-').replace('column-', 'col-')}`);
      if (direction.lg) classes.push(`lg:flex-${direction.lg === 'row' ? 'row' : direction.lg === 'column' ? 'col' : direction.lg.replace('row-', 'row-').replace('column-', 'col-')}`);
      if (direction.xl) classes.push(`xl:flex-${direction.xl === 'row' ? 'row' : direction.xl === 'column' ? 'col' : direction.xl.replace('row-', 'row-').replace('column-', 'col-')}`);
    }
    
    // Handle responsive gap
    if (gap) {
      if (typeof gap === 'object') {
        if (gap.base) classes.push(`gap-${gap.base}`);
        if (gap.sm) classes.push(`sm:gap-${gap.sm}`);
        if (gap.md) classes.push(`md:gap-${gap.md}`);
        if (gap.lg) classes.push(`lg:gap-${gap.lg}`);
        if (gap.xl) classes.push(`xl:gap-${gap.xl}`);
      } else {
        classes.push(`gap-${gap}`);
      }
    }
    
    // Handle responsive column gap
    if (gapX) {
      if (typeof gapX === 'object') {
        if (gapX.base) classes.push(`gap-x-${gapX.base}`);
        if (gapX.sm) classes.push(`sm:gap-x-${gapX.sm}`);
        if (gapX.md) classes.push(`md:gap-x-${gapX.md}`);
        if (gapX.lg) classes.push(`lg:gap-x-${gapX.lg}`);
        if (gapX.xl) classes.push(`xl:gap-x-${gapX.xl}`);
      } else {
        classes.push(`gap-x-${gapX}`);
      }
    }
    
    // Handle responsive row gap
    if (gapY) {
      if (typeof gapY === 'object') {
        if (gapY.base) classes.push(`gap-y-${gapY.base}`);
        if (gapY.sm) classes.push(`sm:gap-y-${gapY.sm}`);
        if (gapY.md) classes.push(`md:gap-y-${gapY.md}`);
        if (gapY.lg) classes.push(`lg:gap-y-${gapY.lg}`);
        if (gapY.xl) classes.push(`xl:gap-y-${gapY.xl}`);
      } else {
        classes.push(`gap-y-${gapY}`);
      }
    }
    
    // Handle full width/height
    if (fullWidth) classes.push('w-full');
    if (fullHeight) classes.push('h-full');
    
    return (
      <Box
        ref={ref}
        display={inline ? 'inline-flex' : 'flex'}
        className={cn(
          flex({ 
            direction: typeof direction === 'string' ? direction : 'row', 
            wrap, 
            align, 
            justify, 
            inline, 
            center 
          }),
          ...classes,
          className
        )}
        {...props}
      >
        {children}
      </Box>
    );
  }
);

Flex.displayName = 'Flex';

export interface FlexItemProps extends BoxProps, VariantProps<typeof flexItem> {
  /** Flex basis */
  basis?: keyof typeof flexBasisScale | string;
  
  /** Flex value (shorthand for grow, shrink, basis) */
  flex?: string | number;
  
  /** Order */
  order?: number | 'first' | 'last' | 'none';
}

export const FlexItem = React.forwardRef<HTMLDivElement, FlexItemProps>(
  ({ 
    className,
    grow,
    shrink,
    alignSelf,
    basis,
    flex,
    order,
    style,
    ...props 
  }, ref) => {
    const classes = [];
    const customStyle: React.CSSProperties = { ...style };
    
    // Handle flex shorthand
    if (flex !== undefined) {
      customStyle.flex = flex;
    }
    
    // Handle basis
    if (basis) {
      if (basis in flexBasisScale) {
        const basisValue = flexBasisScale[basis as keyof typeof flexBasisScale];
        classes.push(`basis-${basis}`);
      } else {
        customStyle.flexBasis = basis;
      }
    }
    
    // Handle order
    if (order !== undefined) {
      if (order === 'first') {
        classes.push('order-first');
      } else if (order === 'last') {
        classes.push('order-last');
      } else if (order === 'none') {
        classes.push('order-none');
      } else if (typeof order === 'number') {
        classes.push(`order-${order}`);
      }
    }
    
    return (
      <Box
        ref={ref}
        className={cn(
          flexItem({ grow, shrink, alignSelf }),
          ...classes,
          className
        )}
        style={customStyle}
        {...props}
      />
    );
  }
);

FlexItem.displayName = 'FlexItem';

// Convenience component for spacers
export const Spacer = React.forwardRef<HTMLDivElement, BoxProps>(
  (props, ref) => <Box ref={ref} className="flex-1" {...props} />
);

Spacer.displayName = 'Spacer';

export default Flex;