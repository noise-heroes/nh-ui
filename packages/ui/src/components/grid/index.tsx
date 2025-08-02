import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '../../utils/cn';
import { Box, type BoxProps } from '../box';

/**
 * Grid component - Responsive grid layout system
 * 
 * A powerful grid system that provides both CSS Grid and traditional
 * column-based layouts with full responsive control
 * 
 * @example
 * ```tsx
 * // Basic grid
 * <Grid cols={3} gap={4}>
 *   <Card />
 *   <Card />
 *   <Card />
 * </Grid>
 * 
 * // Responsive grid
 * <Grid
 *   cols={{ base: 1, sm: 2, md: 3, lg: 4 }}
 *   gap={{ base: 2, md: 4 }}
 * >
 *   {items.map(item => <Card key={item.id} />)}
 * </Grid>
 * 
 * // Grid with custom areas
 * <Grid
 *   templateAreas={`
 *     "header header header"
 *     "sidebar main main"
 *     "footer footer footer"
 *   `}
 *   gap={4}
 * >
 *   <GridItem area="header"><Header /></GridItem>
 *   <GridItem area="sidebar"><Sidebar /></GridItem>
 *   <GridItem area="main"><Main /></GridItem>
 *   <GridItem area="footer"><Footer /></GridItem>
 * </Grid>
 * ```
 */

const grid = tv({
  base: 'grid',
  variants: {
    // Auto flow
    flow: {
      row: 'grid-flow-row',
      col: 'grid-flow-col',
      'row-dense': 'grid-flow-row-dense',
      'col-dense': 'grid-flow-col-dense',
    },
    
    // Auto columns
    autoCols: {
      auto: 'auto-cols-auto',
      min: 'auto-cols-min',
      max: 'auto-cols-max',
      fr: 'auto-cols-fr',
    },
    
    // Auto rows
    autoRows: {
      auto: 'auto-rows-auto',
      min: 'auto-rows-min',
      max: 'auto-rows-max',
      fr: 'auto-rows-fr',
    },
    
    // Align content
    alignContent: {
      start: 'content-start',
      center: 'content-center',
      end: 'content-end',
      between: 'content-between',
      around: 'content-around',
      evenly: 'content-evenly',
      stretch: 'content-stretch',
    },
    
    // Align items
    alignItems: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      stretch: 'items-stretch',
      baseline: 'items-baseline',
    },
    
    // Justify content
    justifyContent: {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
      around: 'justify-around',
      evenly: 'justify-evenly',
      stretch: 'justify-stretch',
    },
    
    // Justify items
    justifyItems: {
      start: 'justify-items-start',
      center: 'justify-items-center',
      end: 'justify-items-end',
      stretch: 'justify-items-stretch',
    },
  },
  defaultVariants: {
    flow: 'row',
    alignItems: 'stretch',
    justifyItems: 'stretch',
  },
});

const gridItem = tv({
  base: '',
  variants: {
    // Column span
    colSpan: {
      1: 'col-span-1',
      2: 'col-span-2',
      3: 'col-span-3',
      4: 'col-span-4',
      5: 'col-span-5',
      6: 'col-span-6',
      7: 'col-span-7',
      8: 'col-span-8',
      9: 'col-span-9',
      10: 'col-span-10',
      11: 'col-span-11',
      12: 'col-span-12',
      full: 'col-span-full',
    },
    
    // Row span
    rowSpan: {
      1: 'row-span-1',
      2: 'row-span-2',
      3: 'row-span-3',
      4: 'row-span-4',
      5: 'row-span-5',
      6: 'row-span-6',
      full: 'row-span-full',
    },
    
    // Column start
    colStart: {
      1: 'col-start-1',
      2: 'col-start-2',
      3: 'col-start-3',
      4: 'col-start-4',
      5: 'col-start-5',
      6: 'col-start-6',
      7: 'col-start-7',
      8: 'col-start-8',
      9: 'col-start-9',
      10: 'col-start-10',
      11: 'col-start-11',
      12: 'col-start-12',
      13: 'col-start-13',
      auto: 'col-start-auto',
    },
    
    // Column end
    colEnd: {
      1: 'col-end-1',
      2: 'col-end-2',
      3: 'col-end-3',
      4: 'col-end-4',
      5: 'col-end-5',
      6: 'col-end-6',
      7: 'col-end-7',
      8: 'col-end-8',
      9: 'col-end-9',
      10: 'col-end-10',
      11: 'col-end-11',
      12: 'col-end-12',
      13: 'col-end-13',
      auto: 'col-end-auto',
    },
    
    // Row start
    rowStart: {
      1: 'row-start-1',
      2: 'row-start-2',
      3: 'row-start-3',
      4: 'row-start-4',
      5: 'row-start-5',
      6: 'row-start-6',
      7: 'row-start-7',
      auto: 'row-start-auto',
    },
    
    // Row end
    rowEnd: {
      1: 'row-end-1',
      2: 'row-end-2',
      3: 'row-end-3',
      4: 'row-end-4',
      5: 'row-end-5',
      6: 'row-end-6',
      7: 'row-end-7',
      auto: 'row-end-auto',
    },
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
};

type ResponsiveValue<T> = T | { base?: T; sm?: T; md?: T; lg?: T; xl?: T };

export interface GridProps extends Omit<BoxProps, 'display'>, VariantProps<typeof grid> {
  /** Number of columns */
  cols?: ResponsiveValue<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'none'>;
  
  /** Number of rows */
  rows?: ResponsiveValue<1 | 2 | 3 | 4 | 5 | 6 | 'none'>;
  
  /** Gap between items */
  gap?: ResponsiveValue<keyof typeof gapScale>;
  
  /** Column gap */
  gapX?: ResponsiveValue<keyof typeof gapScale>;
  
  /** Row gap */
  gapY?: ResponsiveValue<keyof typeof gapScale>;
  
  /** Template columns (CSS Grid) */
  templateColumns?: string;
  
  /** Template rows (CSS Grid) */
  templateRows?: string;
  
  /** Template areas (CSS Grid) */
  templateAreas?: string;
  
  /** Should grid take full width */
  fullWidth?: boolean;
}

export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ 
    className,
    cols,
    rows,
    gap,
    gapX,
    gapY,
    flow,
    autoCols,
    autoRows,
    alignContent,
    alignItems,
    justifyContent,
    justifyItems,
    templateColumns,
    templateRows,
    templateAreas,
    fullWidth,
    children,
    style,
    ...props 
  }, ref) => {
    const classes = [];
    const customStyle: React.CSSProperties = { ...style };
    
    // Handle responsive columns
    if (cols) {
      if (typeof cols === 'object') {
        if (cols.base) classes.push(cols.base === 'none' ? 'grid-cols-none' : `grid-cols-${cols.base}`);
        if (cols.sm) classes.push(cols.sm === 'none' ? 'sm:grid-cols-none' : `sm:grid-cols-${cols.sm}`);
        if (cols.md) classes.push(cols.md === 'none' ? 'md:grid-cols-none' : `md:grid-cols-${cols.md}`);
        if (cols.lg) classes.push(cols.lg === 'none' ? 'lg:grid-cols-none' : `lg:grid-cols-${cols.lg}`);
        if (cols.xl) classes.push(cols.xl === 'none' ? 'xl:grid-cols-none' : `xl:grid-cols-${cols.xl}`);
      } else {
        classes.push(cols === 'none' ? 'grid-cols-none' : `grid-cols-${cols}`);
      }
    }
    
    // Handle responsive rows
    if (rows) {
      if (typeof rows === 'object') {
        if (rows.base) classes.push(rows.base === 'none' ? 'grid-rows-none' : `grid-rows-${rows.base}`);
        if (rows.sm) classes.push(rows.sm === 'none' ? 'sm:grid-rows-none' : `sm:grid-rows-${rows.sm}`);
        if (rows.md) classes.push(rows.md === 'none' ? 'md:grid-rows-none' : `md:grid-rows-${rows.md}`);
        if (rows.lg) classes.push(rows.lg === 'none' ? 'lg:grid-rows-none' : `lg:grid-rows-${rows.lg}`);
        if (rows.xl) classes.push(rows.xl === 'none' ? 'xl:grid-rows-none' : `xl:grid-rows-${rows.xl}`);
      } else {
        classes.push(rows === 'none' ? 'grid-rows-none' : `grid-rows-${rows}`);
      }
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
    
    // Handle CSS Grid template properties
    if (templateColumns) customStyle.gridTemplateColumns = templateColumns;
    if (templateRows) customStyle.gridTemplateRows = templateRows;
    if (templateAreas) customStyle.gridTemplateAreas = templateAreas;
    
    // Handle full width
    if (fullWidth) classes.push('w-full');
    
    return (
      <Box
        ref={ref}
        display="grid"
        className={cn(
          grid({ flow, autoCols, autoRows, alignContent, alignItems, justifyContent, justifyItems }),
          ...classes,
          className
        )}
        style={customStyle}
        {...props}
      >
        {children}
      </Box>
    );
  }
);

Grid.displayName = 'Grid';

export interface GridItemProps extends BoxProps, Omit<VariantProps<typeof gridItem>, 'colSpan' | 'rowSpan'> {
  /** Grid area name */
  area?: string;
  
  /** Responsive column span */
  colSpan?: ResponsiveValue<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'full'>;
  
  /** Responsive row span */
  rowSpan?: ResponsiveValue<1 | 2 | 3 | 4 | 5 | 6 | 'full'>;
}

export const GridItem = React.forwardRef<HTMLDivElement, GridItemProps>(
  ({ 
    className,
    area,
    colSpan,
    rowSpan,
    colStart,
    colEnd,
    rowStart,
    rowEnd,
    style,
    ...props 
  }, ref) => {
    const classes = [];
    const customStyle: React.CSSProperties = { ...style };
    
    // Handle grid area
    if (area) {
      customStyle.gridArea = area;
    }
    
    // Handle responsive column span
    if (colSpan) {
      if (typeof colSpan === 'object') {
        if (colSpan.base) classes.push(colSpan.base === 'full' ? 'col-span-full' : `col-span-${colSpan.base}`);
        if (colSpan.sm) classes.push(colSpan.sm === 'full' ? 'sm:col-span-full' : `sm:col-span-${colSpan.sm}`);
        if (colSpan.md) classes.push(colSpan.md === 'full' ? 'md:col-span-full' : `md:col-span-${colSpan.md}`);
        if (colSpan.lg) classes.push(colSpan.lg === 'full' ? 'lg:col-span-full' : `lg:col-span-${colSpan.lg}`);
        if (colSpan.xl) classes.push(colSpan.xl === 'full' ? 'xl:col-span-full' : `xl:col-span-${colSpan.xl}`);
      } else {
        classes.push(gridItem({ colSpan: colSpan as any }));
      }
    }
    
    // Handle responsive row span
    if (rowSpan) {
      if (typeof rowSpan === 'object') {
        if (rowSpan.base) classes.push(rowSpan.base === 'full' ? 'row-span-full' : `row-span-${rowSpan.base}`);
        if (rowSpan.sm) classes.push(rowSpan.sm === 'full' ? 'sm:row-span-full' : `sm:row-span-${rowSpan.sm}`);
        if (rowSpan.md) classes.push(rowSpan.md === 'full' ? 'md:row-span-full' : `md:row-span-${rowSpan.md}`);
        if (rowSpan.lg) classes.push(rowSpan.lg === 'full' ? 'lg:row-span-full' : `lg:row-span-${rowSpan.lg}`);
        if (rowSpan.xl) classes.push(rowSpan.xl === 'full' ? 'xl:row-span-full' : `xl:row-span-${rowSpan.xl}`);
      } else {
        classes.push(gridItem({ rowSpan: rowSpan as any }));
      }
    }
    
    return (
      <Box
        ref={ref}
        className={cn(
          gridItem({ colStart, colEnd, rowStart, rowEnd }),
          ...classes,
          className
        )}
        style={customStyle}
        {...props}
      />
    );
  }
);

GridItem.displayName = 'GridItem';

export default Grid;