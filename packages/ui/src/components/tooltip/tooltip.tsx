"use client";

import { 
  Tooltip as HeroUITooltip, 
  TooltipProps as HeroUITooltipProps,
} from "@heroui/react";
import { forwardRef } from "react";

export interface NHTooltipProps extends HeroUITooltipProps {
  /**
   * Whether the tooltip should have a blur effect
   */
  isBlurred?: boolean;
}

export const NHTooltip = forwardRef<HTMLDivElement, NHTooltipProps>(
  ({ isBlurred, className, classNames, ...props }, ref) => {
    const blurClasses = isBlurred 
      ? 'backdrop-blur-md bg-white/90 dark:bg-black/90' 
      : '';
    
    return (
      <HeroUITooltip
        ref={ref}
        className={`${blurClasses} ${className || ''}`}
        classNames={{
          ...classNames,
          content: `${blurClasses} ${classNames?.content || ''}`,
        }}
        {...props}
      />
    );
  }
);

NHTooltip.displayName = "NHTooltip";