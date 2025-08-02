"use client";

import { Checkbox as HeroUICheckbox, CheckboxProps as HeroUICheckboxProps, CheckboxGroup as HeroUICheckboxGroup, CheckboxGroupProps as HeroUICheckboxGroupProps } from "@heroui/react";
import { forwardRef } from "react";
import { cn } from "../../utils/cn";

export interface NHCheckboxProps extends Omit<HeroUICheckboxProps, 'color' | 'radius'> {
  /**
   * The checkbox color theme
   * @default "primary"
   */
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  
  /**
   * The checkbox radius
   * @default "sm"
   */
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  
  /**
   * Whether the checkbox has a subtle glow effect when checked
   */
  hasGlow?: boolean;
  
  /**
   * The glow color (uses color prop by default)
   */
  glowColor?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  
  /**
   * Whether to show an indeterminate state
   */
  isIndeterminate?: boolean;
}

export const NHCheckbox = forwardRef<HTMLInputElement, NHCheckboxProps>(
  ({ 
    color = 'primary',
    radius = 'sm',
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
      wrapper: cn(
        "transition-all duration-200",
        hasGlow && glowClass,
        classNames?.wrapper
      ),
      icon: cn(
        "transition-all duration-200",
        classNames?.icon
      ),
      label: cn(
        "text-default-600 transition-colors duration-200",
        "data-[selected=true]:text-default-900",
        classNames?.label
      ),
    };
    
    return (
      <HeroUICheckbox
        ref={ref}
        color={color as any}
        radius={radius}
        className={className}
        classNames={nhClassNames}
        {...props}
      />
    );
  }
);

NHCheckbox.displayName = "NHCheckbox";

// Checkbox Group Component
export interface NHCheckboxGroupProps extends Omit<HeroUICheckboxGroupProps, 'color'> {
  /**
   * The checkbox color theme for all checkboxes in the group
   * @default "primary"
   */
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  
  /**
   * The checkbox radius for all checkboxes in the group
   * @default "sm"
   */
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  
  /**
   * Whether all checkboxes have a subtle glow effect when checked
   */
  hasGlow?: boolean;
  
  /**
   * The layout direction
   * @default "vertical"
   */
  orientation?: 'horizontal' | 'vertical';
}

export const NHCheckboxGroup = forwardRef<HTMLDivElement, NHCheckboxGroupProps>(
  ({ 
    color = 'primary',
    radius = 'sm',
    hasGlow,
    orientation = 'vertical',
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
      <HeroUICheckboxGroup
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

NHCheckboxGroup.displayName = "NHCheckboxGroup";