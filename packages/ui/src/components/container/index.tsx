import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '../../utils/cn';
import { Box, type BoxProps } from '../box';

/**
 * Container component - Responsive container with max-widths
 * 
 * A responsive container that provides consistent max-widths and
 * padding across different screen sizes, similar to Apple's content containers
 * 
 * @example
 * ```tsx
 * // Default container
 * <Container>
 *   <Text>Centered content with responsive padding</Text>
 * </Container>
 * 
 * // Fluid container
 * <Container fluid>
 *   <Text>Full width content</Text>
 * </Container>
 * 
 * // Custom size container
 * <Container size="sm" center>
 *   <Text>Small centered container</Text>
 * </Container>
 * 
 * // With custom padding
 * <Container px={{ base: 4, md: 8 }}>
 *   <Grid>Content with custom padding</Grid>
 * </Container>
 * ```
 */

const container = tv({
  base: 'w-full',
  variants: {
    size: {
      sm: 'max-w-screen-sm',    // 640px
      md: 'max-w-screen-md',    // 768px
      lg: 'max-w-screen-lg',    // 1024px
      xl: 'max-w-screen-xl',    // 1280px
      '2xl': 'max-w-screen-2xl', // 1536px
      '3xl': 'max-w-[1800px]',   // 1800px
      '4xl': 'max-w-[2000px]',   // 2000px
      full: 'max-w-full',
      prose: 'max-w-prose',      // 65ch
    },
    
    center: {
      true: 'mx-auto',
      false: '',
    },
    
    fluid: {
      true: 'max-w-full',
      false: '',
    },
    
    // Padding presets
    paddingPreset: {
      none: '',
      sm: 'px-4 sm:px-6',
      md: 'px-4 sm:px-6 md:px-8',
      lg: 'px-4 sm:px-6 md:px-8 lg:px-12',
      xl: 'px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16',
    },
  },
  defaultVariants: {
    size: 'xl',
    center: true,
    fluid: false,
    paddingPreset: 'md',
  },
  compoundVariants: [
    // Fluid overrides size
    {
      fluid: true,
      className: 'max-w-full',
    },
  ],
});

export interface ContainerProps extends Omit<BoxProps, 'maxW'>, VariantProps<typeof container> {
  /** Apply gutter spacing on the sides */
  gutter?: boolean;
  
  /** Disable default responsive padding */
  noPadding?: boolean;
  
  /** Section variant for semantic HTML */
  as?: 'div' | 'section' | 'article' | 'main' | 'aside' | 'header' | 'footer';
}

export const Container = React.forwardRef<HTMLElement, ContainerProps>(
  ({ 
    className,
    size,
    center,
    fluid,
    paddingPreset,
    gutter = true,
    noPadding = false,
    as = 'div',
    px,
    py,
    p,
    children,
    ...props 
  }, ref) => {
    // Determine if custom padding is provided
    const hasCustomPadding = px !== undefined || py !== undefined || p !== undefined;
    
    // Only apply preset padding if no custom padding and noPadding is false
    const shouldApplyPresetPadding = !noPadding && !hasCustomPadding && gutter;
    
    return (
      <Box
        ref={ref}
        as={as}
        className={cn(
          container({ 
            size, 
            center, 
            fluid, 
            paddingPreset: shouldApplyPresetPadding ? paddingPreset : 'none' 
          }),
          className
        )}
        px={px}
        py={py}
        p={p}
        {...props}
      >
        {children}
      </Box>
    );
  }
);

Container.displayName = 'Container';

// Specialized container variants
export const Section = React.forwardRef<HTMLElement, ContainerProps>(
  (props, ref) => <Container ref={ref} as="section" py={20} {...props} />
);

Section.displayName = 'Section';

export const Article = React.forwardRef<HTMLElement, ContainerProps>(
  (props, ref) => <Container ref={ref} as="article" size="prose" {...props} />
);

Article.displayName = 'Article';

export const Main = React.forwardRef<HTMLElement, ContainerProps>(
  (props, ref) => <Container ref={ref} as="main" minH="screen" {...props} />
);

Main.displayName = 'Main';

export default Container;