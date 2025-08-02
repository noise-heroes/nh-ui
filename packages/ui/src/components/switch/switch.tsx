"use client";

import { Switch as HeroUISwitch, SwitchProps as HeroUISwitchProps } from "@heroui/react";
import { forwardRef } from "react";
import { cn } from "../../utils/cn";
import { CheckIcon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";

export interface NHSwitchProps extends Omit<HeroUISwitchProps, 'color'> {
  /**
   * The switch color theme
   * @default "primary"
   */
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  
  /**
   * Whether the switch has a subtle glow effect when checked
   */
  hasGlow?: boolean;
  
  /**
   * The glow color (uses color prop by default)
   */
  glowColor?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  
  /**
   * Whether to show icons inside the thumb
   */
  showIcons?: boolean;
  
  /**
   * Custom on icon
   */
  onIcon?: React.ReactNode;
  
  /**
   * Custom off icon
   */
  offIcon?: React.ReactNode;
}

export const NHSwitch = forwardRef<HTMLInputElement, NHSwitchProps>(
  ({ 
    color = 'primary',
    hasGlow,
    glowColor,
    showIcons,
    onIcon,
    offIcon,
    className,
    classNames,
    thumbIcon,
    ...props 
  }, ref) => {
    // Determine glow effect
    const effectiveGlowColor = glowColor || color;
    const glowClass = hasGlow ? {
      primary: 'data-[selected=true]:shadow-[0_0_20px_rgba(251,146,60,0.4)]',
      secondary: 'data-[selected=true]:shadow-[0_0_20px_rgba(45,212,191,0.4)]',
      success: 'data-[selected=true]:shadow-[0_0_20px_rgba(34,197,94,0.4)]',
      warning: 'data-[selected=true]:shadow-[0_0_20px_rgba(251,191,36,0.4)]',
      danger: 'data-[selected=true]:shadow-[0_0_20px_rgba(239,68,68,0.4)]',
      default: 'data-[selected=true]:shadow-[0_0_20px_rgba(156,163,175,0.4)]',
    }[effectiveGlowColor] : '';
    
    // Default icons if showIcons is true
    const defaultThumbIcon = showIcons ? (
      ({ isSelected }: { isSelected: boolean }) => isSelected ? 
        (onIcon || <CheckIcon className="w-3 h-3" aria-hidden="true" />) : 
        (offIcon || <XMarkIcon className="w-3 h-3" aria-hidden="true" />)
    ) : thumbIcon;
    
    // NH-specific enhancements
    const nhClassNames = {
      base: cn(
        "transition-all duration-200",
        classNames?.base
      ),
      wrapper: cn(
        "transition-all duration-300",
        hasGlow && glowClass,
        "data-[selected=true]:bg-opacity-90",
        classNames?.wrapper
      ),
      thumb: cn(
        "transition-all duration-300",
        "shadow-md",
        classNames?.thumb
      ),
      label: cn(
        "text-default-600 transition-colors duration-200",
        "data-[selected=true]:text-default-900",
        classNames?.label
      ),
    };
    
    return (
      <HeroUISwitch
        ref={ref}
        color={color as any}
        className={className}
        classNames={nhClassNames}
        thumbIcon={defaultThumbIcon}
        {...props}
      />
    );
  }
);

NHSwitch.displayName = "NHSwitch";