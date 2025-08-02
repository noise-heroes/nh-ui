import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '../../utils/cn';
import { Box, type BoxProps } from '../box';

/**
 * Stack component - Vertical and horizontal layout with consistent spacing
 * 
 * Inspired by SwiftUI's VStack and HStack, provides a simple way to
 * stack elements with consistent spacing and alignment
 * 
 * @example
 * ```tsx
 * // Vertical stack (default)
 * <Stack spacing={4} align="center">
 *   <Text>Item 1</Text>
 *   <Text>Item 2</Text>
 *   <Text>Item 3</Text>
 * </Stack>
 * 
 * // Horizontal stack
 * <Stack direction="row" spacing={6} justify="between">
 *   <Button>Cancel</Button>
 *   <Button variant="primary">Save</Button>
 * </Stack>
 * 
 * // Responsive stack
 * <Stack
 *   direction={{ base: 'column', md: 'row' }}
 *   spacing={{ base: 2, md: 4 }}
 * >
 *   <Card />
 *   <Card />
 * </Stack>
 * ```
 */

const stack = tv({
  base: 'flex',
  variants: {
    direction: {
      row: 'flex-row',
      column: 'flex-col',
      'row-reverse': 'flex-row-reverse',
      'column-reverse': 'flex-col-reverse',
    },
    
    align: {
      start: '',
      center: '',
      end: '',
      stretch: '',
      baseline: '',
    },
    
    justify: {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
      around: 'justify-around',
      evenly: 'justify-evenly',
    },
    
    wrap: {
      true: 'flex-wrap',
      false: 'flex-nowrap',
      reverse: 'flex-wrap-reverse',
    },
    
    // Divider styles
    divider: {
      true: '',
      false: '',
    },
  },
  defaultVariants: {
    direction: 'column',
    align: 'stretch',
    justify: 'start',
    wrap: false,
    divider: false,
  },
  compoundVariants: [
    // Align items based on direction
    {
      direction: ['row', 'row-reverse'],
      align: 'start',
      className: 'items-start',
    },
    {
      direction: ['row', 'row-reverse'],
      align: 'center',
      className: 'items-center',
    },
    {
      direction: ['row', 'row-reverse'],
      align: 'end',
      className: 'items-end',
    },
    {
      direction: ['row', 'row-reverse'],
      align: 'stretch',
      className: 'items-stretch',
    },
    {
      direction: ['row', 'row-reverse'],
      align: 'baseline',
      className: 'items-baseline',
    },
    {
      direction: ['column', 'column-reverse'],
      align: 'start',
      className: 'items-start',
    },
    {
      direction: ['column', 'column-reverse'],
      align: 'center',
      className: 'items-center',
    },
    {
      direction: ['column', 'column-reverse'],
      align: 'end',
      className: 'items-end',
    },
    {
      direction: ['column', 'column-reverse'],
      align: 'stretch',
      className: 'items-stretch',
    },
    {
      direction: ['column', 'column-reverse'],
      align: 'baseline',
      className: 'items-baseline',
    },
  ],
});

// Spacing scale
const spacingScale = {
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

type ResponsiveValue<T> = T | { base?: T; sm?: T; md?: T; lg?: T; xl?: T };

export interface StackProps extends Omit<BoxProps, 'display'>, Omit<VariantProps<typeof stack>, 'direction'> {
  /** Spacing between items */
  spacing?: ResponsiveValue<keyof typeof spacingScale>;
  
  /** Direction can be responsive */
  direction?: ResponsiveValue<'row' | 'column' | 'row-reverse' | 'column-reverse'>;
  
  /** Add dividers between items */
  divider?: boolean;
  
  /** Divider color */
  dividerColor?: string;
  
  /** Should stack take full width/height */
  fullWidth?: boolean;
  fullHeight?: boolean;
}

export const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  ({ 
    className,
    direction = 'column',
    align,
    justify,
    wrap,
    spacing,
    divider = false,
    dividerColor = 'neutral-200',
    fullWidth,
    fullHeight,
    children,
    ...props 
  }, ref) => {
    const classes = [];
    
    // Handle responsive direction
    let baseDirection: 'row' | 'column' | 'row-reverse' | 'column-reverse' = 'column';
    if (typeof direction === 'object') {
      if (direction.base) {
        baseDirection = direction.base;
        classes.push(`flex-${direction.base === 'row' ? 'row' : direction.base === 'column' ? 'col' : direction.base}`);
      }
      if (direction.sm) classes.push(`sm:flex-${direction.sm === 'row' ? 'row' : direction.sm === 'column' ? 'col' : direction.sm}`);
      if (direction.md) classes.push(`md:flex-${direction.md === 'row' ? 'row' : direction.md === 'column' ? 'col' : direction.md}`);
      if (direction.lg) classes.push(`lg:flex-${direction.lg === 'row' ? 'row' : direction.lg === 'column' ? 'col' : direction.lg}`);
      if (direction.xl) classes.push(`xl:flex-${direction.xl === 'row' ? 'row' : direction.xl === 'column' ? 'col' : direction.xl}`);
    } else {
      baseDirection = direction;
    }
    
    // Handle responsive spacing
    const isHorizontal = baseDirection === 'row' || baseDirection === 'row-reverse';
    if (spacing) {
      if (typeof spacing === 'object') {
        if (spacing.base) classes.push(isHorizontal ? `gap-x-${spacing.base}` : `gap-y-${spacing.base}`);
        if (spacing.sm) classes.push(isHorizontal ? `sm:gap-x-${spacing.sm}` : `sm:gap-y-${spacing.sm}`);
        if (spacing.md) classes.push(isHorizontal ? `md:gap-x-${spacing.md}` : `md:gap-y-${spacing.md}`);
        if (spacing.lg) classes.push(isHorizontal ? `lg:gap-x-${spacing.lg}` : `lg:gap-y-${spacing.lg}`);
        if (spacing.xl) classes.push(isHorizontal ? `xl:gap-x-${spacing.xl}` : `xl:gap-y-${spacing.xl}`);
      } else {
        classes.push(isHorizontal ? `gap-x-${spacing}` : `gap-y-${spacing}`);
      }
    }
    
    // Handle full width/height
    if (fullWidth) classes.push('w-full');
    if (fullHeight) classes.push('h-full');
    
    // Process children to add dividers
    const processedChildren = divider ? React.Children.toArray(children).reduce((acc: React.ReactNode[], child, index, array) => {
      acc.push(child);
      if (index < array.length - 1) {
        acc.push(
          <Box
            key={`divider-${index}`}
            className={cn(
              isHorizontal ? 'w-px h-full' : 'w-full h-px',
              `bg-${dividerColor} dark:bg-${dividerColor}`
            )}
          />
        );
      }
      return acc;
    }, []) : children;
    
    return (
      <Box
        ref={ref}
        display="flex"
        className={cn(
          stack({ 
            direction: typeof direction === 'string' ? direction : baseDirection, 
            align, 
            justify, 
            wrap, 
            divider 
          }),
          ...classes,
          className
        )}
        {...props}
      >
        {processedChildren}
      </Box>
    );
  }
);

Stack.displayName = 'Stack';

// Convenience components
export const VStack = React.forwardRef<HTMLDivElement, Omit<StackProps, 'direction'>>(
  (props, ref) => <Stack ref={ref} direction="column" {...props} />
);

VStack.displayName = 'VStack';

export const HStack = React.forwardRef<HTMLDivElement, Omit<StackProps, 'direction'>>(
  (props, ref) => <Stack ref={ref} direction="row" {...props} />
);

HStack.displayName = 'HStack';

export default Stack;