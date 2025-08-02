"use client";

import { Slider as HeroUISlider, SliderProps as HeroUISliderProps } from "@heroui/react";
import { forwardRef } from "react";
import { cn } from "../../utils/cn";

export interface NHSliderProps extends Omit<HeroUISliderProps, 'color'> {
  /**
   * The slider color theme
   * @default "primary"
   */
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  
  /**
   * Whether the slider has a subtle glow effect
   */
  hasGlow?: boolean;
  
  /**
   * The glow color (uses color prop by default)
   */
  glowColor?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  
  /**
   * Whether to show value tooltip on hover/drag
   */
  showTooltip?: boolean;
  
  /**
   * Whether to show value label
   */
  showValueLabel?: boolean;
  
  /**
   * Custom format function for the value
   */
  formatValue?: (value: number) => string;
  
  /**
   * Whether to show fill indicators
   */
  showFillIndicators?: boolean;
  
  /**
   * Number of fill indicators
   */
  fillIndicatorCount?: number;
}

export const NHSlider = forwardRef<HTMLDivElement, NHSliderProps>(
  ({ 
    color = 'primary',
    hasGlow,
    glowColor,
    showTooltip = true,
    showValueLabel = true,
    formatValue,
    showFillIndicators,
    fillIndicatorCount = 5,
    className,
    classNames,
    ...props 
  }, ref) => {
    // Determine glow effect
    const effectiveGlowColor = glowColor || color;
    const glowClass = hasGlow ? {
      primary: 'shadow-[0_0_20px_rgba(251,146,60,0.3)]',
      secondary: 'shadow-[0_0_20px_rgba(45,212,191,0.3)]',
      success: 'shadow-[0_0_20px_rgba(34,197,94,0.3)]',
      warning: 'shadow-[0_0_20px_rgba(251,191,36,0.3)]',
      danger: 'shadow-[0_0_20px_rgba(239,68,68,0.3)]',
      default: 'shadow-[0_0_20px_rgba(156,163,175,0.3)]',
    }[effectiveGlowColor] : '';
    
    // NH-specific enhancements
    const nhClassNames = {
      base: cn(
        "transition-all duration-200",
        classNames?.base
      ),
      track: cn(
        "transition-all duration-200",
        "bg-default-300/50 backdrop-blur-sm",
        classNames?.track
      ),
      filler: cn(
        "transition-all duration-200",
        classNames?.filler
      ),
      thumb: cn(
        "transition-all duration-200",
        "shadow-md hover:shadow-lg",
        hasGlow && glowClass,
        "data-[dragging=true]:scale-110",
        classNames?.thumb
      ),
      step: cn(
        "transition-all duration-200",
        classNames?.step
      ),
      mark: cn(
        "text-default-400 text-xs",
        classNames?.mark
      ),
      value: cn(
        "text-default-700 font-medium",
        classNames?.value
      ),
      label: cn(
        "text-default-700",
        classNames?.label
      ),
    };
    
    return (
      <HeroUISlider
        ref={ref}
        color={color as any}
        className={className}
        classNames={nhClassNames}
        showTooltip={showTooltip}
        {...props}
      />
    );
  }
);

NHSlider.displayName = "NHSlider";