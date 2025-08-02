"use client";

import { Select as HeroUISelect, SelectProps as HeroUISelectProps, SelectItem } from "@heroui/react";
import { forwardRef } from "react";
import { cn } from "../../utils/cn";

export interface NHSelectProps extends Omit<HeroUISelectProps, 'color' | 'variant' | 'radius'> {
  /**
   * The select variant
   * @default "bordered"
   */
  variant?: 'flat' | 'bordered' | 'underlined' | 'faded';
  
  /**
   * The select color theme
   * @default "default"
   */
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  
  /**
   * The select radius
   * @default "md"
   */
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  
  /**
   * Whether the select has a subtle glow effect
   */
  hasGlow?: boolean;
  
  /**
   * The glow color (uses color prop by default)
   */
  glowColor?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  
  /**
   * Whether to show search input in dropdown
   */
  isSearchable?: boolean;
  
  /**
   * Whether to show clear button when value is selected
   */
  isClearable?: boolean;
  
  /**
   * Custom empty content message
   */
  emptyContent?: string;
}

export const NHSelect = forwardRef<HTMLSelectElement, NHSelectProps>(
  ({ 
    variant = 'bordered',
    color = 'default',
    radius = 'md',
    hasGlow,
    glowColor,
    isSearchable = false,
    isClearable = true,
    emptyContent = "No options found",
    className,
    classNames,
    ...props 
  }, ref) => {
    // Determine glow effect
    const effectiveGlowColor = glowColor || (color !== 'default' ? color : 'primary');
    const glowClass = hasGlow ? {
      primary: 'data-[focus=true]:shadow-[0_0_20px_rgba(251,146,60,0.3)]',
      secondary: 'data-[focus=true]:shadow-[0_0_20px_rgba(45,212,191,0.3)]',
      success: 'data-[focus=true]:shadow-[0_0_20px_rgba(34,197,94,0.3)]',
      warning: 'data-[focus=true]:shadow-[0_0_20px_rgba(251,191,36,0.3)]',
      danger: 'data-[focus=true]:shadow-[0_0_20px_rgba(239,68,68,0.3)]',
    }[effectiveGlowColor] : '';
    
    // NH-specific enhancements
    const nhClassNames = {
      trigger: cn(
        "transition-all duration-200",
        hasGlow && glowClass,
        classNames?.trigger
      ),
      base: cn(
        classNames?.base
      ),
      label: cn(
        "text-default-600",
        classNames?.label
      ),
      value: cn(
        "text-foreground",
        classNames?.value
      ),
      listbox: cn(
        "backdrop-blur-xl bg-content1/90",
        classNames?.listbox
      ),
      popoverContent: cn(
        "backdrop-blur-xl bg-content1/90",
        classNames?.popoverContent
      ),
      description: cn(
        "text-default-400",
        classNames?.description
      ),
      errorMessage: cn(
        "text-danger",
        classNames?.errorMessage
      ),
    };
    
    return (
      <HeroUISelect
        ref={ref}
        variant={variant}
        color={color as any}
        radius={radius}
        className={className}
        classNames={nhClassNames}
        listboxProps={{
          emptyContent,
        }}
        {...props}
      />
    );
  }
);

NHSelect.displayName = "NHSelect";

// Export SelectItem for convenience
export { SelectItem as NHSelectItem };