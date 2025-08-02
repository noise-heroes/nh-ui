"use client";

import { Radio as HeroUIRadio, RadioProps as HeroUIRadioProps, RadioGroup as HeroUIRadioGroup, RadioGroupProps as HeroUIRadioGroupProps } from "@heroui/react";
import { forwardRef } from "react";
import { cn } from "../../utils/cn";

export interface NHRadioProps extends Omit<HeroUIRadioProps, 'color'> {
  /**
   * The radio color theme
   * @default "primary"
   */
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  
  /**
   * Whether the radio has a subtle glow effect when selected
   */
  hasGlow?: boolean;
  
  /**
   * The glow color (uses color prop by default)
   */
  glowColor?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
}

export const NHRadio = forwardRef<HTMLInputElement, NHRadioProps>(
  ({ 
    color = 'primary',
    hasGlow,
    glowColor,
    className,
    classNames,
    ...props 
  }, ref) => {
    // Determine glow effect
    const effectiveGlowColor = glowColor || color;
    const glowClass = hasGlow ? {
      primary: 'data-[selected=true]:shadow-[0_0_15px_rgba(251,146,60,0.4)]',
      secondary: 'data-[selected=true]:shadow-[0_0_15px_rgba(45,212,191,0.4)]',
      success: 'data-[selected=true]:shadow-[0_0_15px_rgba(34,197,94,0.4)]',
      warning: 'data-[selected=true]:shadow-[0_0_15px_rgba(251,191,36,0.4)]',
      danger: 'data-[selected=true]:shadow-[0_0_15px_rgba(239,68,68,0.4)]',
      default: 'data-[selected=true]:shadow-[0_0_15px_rgba(156,163,175,0.4)]',
    }[effectiveGlowColor] : '';
    
    // NH-specific enhancements
    const nhClassNames = {
      base: cn(
        "transition-all duration-200",
        classNames?.base
      ),
      wrapper: cn(
        "transition-all duration-200",
        hasGlow && glowClass,
        classNames?.wrapper
      ),
      control: cn(
        "transition-all duration-200",
        classNames?.control
      ),
      labelWrapper: cn(
        classNames?.labelWrapper
      ),
      label: cn(
        "text-default-600 transition-colors duration-200",
        "data-[selected=true]:text-default-900",
        classNames?.label
      ),
      description: cn(
        "text-default-400 text-sm",
        classNames?.description
      ),
    };
    
    return (
      <HeroUIRadio
        ref={ref}
        color={color as any}
        className={className}
        classNames={nhClassNames}
        {...props}
      />
    );
  }
);

NHRadio.displayName = "NHRadio";

// Radio Group Component
export interface NHRadioGroupProps extends Omit<HeroUIRadioGroupProps, 'color'> {
  /**
   * The radio color theme for all radios in the group
   * @default "primary"
   */
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  
  /**
   * Whether all radios have a subtle glow effect when selected
   */
  hasGlow?: boolean;
  
  /**
   * The layout direction
   * @default "vertical"
   */
  orientation?: 'horizontal' | 'vertical';
  
  /**
   * Whether to show the radios in a card-like style
   */
  isCard?: boolean;
}

export const NHRadioGroup = forwardRef<HTMLDivElement, NHRadioGroupProps>(
  ({ 
    color = 'primary',
    hasGlow,
    orientation = 'vertical',
    isCard,
    className,
    classNames,
    ...props 
  }, ref) => {
    const nhClassNames = {
      base: cn(
        classNames?.base
      ),
      wrapper: cn(
        orientation === 'horizontal' ? "flex-row flex-wrap gap-4" : "flex-col gap-2",
        isCard && "gap-3",
        classNames?.wrapper
      ),
      label: cn(
        "text-default-700 font-medium mb-2",
        classNames?.label
      ),
      description: cn(
        "text-default-400 text-sm mt-1",
        classNames?.description
      ),
      errorMessage: cn(
        "text-danger text-sm mt-1",
        classNames?.errorMessage
      ),
    };
    
    return (
      <HeroUIRadioGroup
        ref={ref}
        color={color as any}
        orientation={orientation}
        className={className}
        classNames={nhClassNames}
        {...props}
      />
    );
  }
);

NHRadioGroup.displayName = "NHRadioGroup";