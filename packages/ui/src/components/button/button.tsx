"use client";

import { Button as HeroUIButton, ButtonProps as HeroUIButtonProps } from "@heroui/react";
import { forwardRef } from "react";

export interface NHButtonProps extends Omit<HeroUIButtonProps, 'color' | 'variant'> {
  /**
   * The button variant
   * @default "solid"
   */
  variant?: 'solid' | 'bordered' | 'light' | 'flat' | 'faded' | 'shadow' | 'ghost';
  /**
   * The button color theme
   * @default "primary"
   */
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'default';
  /**
   * Makes the button circular (for icon-only buttons)
   */
  isCircular?: boolean;
  /**
   * Makes the button pill-shaped
   */
  isPill?: boolean;
}

export const NHButton = forwardRef<HTMLButtonElement, NHButtonProps>(
  ({ 
    color = 'primary',
    variant = 'solid',
    isCircular,
    isPill,
    radius,
    className,
    ...props 
  }, ref) => {
    // Apply Noise Heroes design decisions
    let finalRadius = radius;
    if (isCircular && props.isIconOnly) {
      finalRadius = 'full';
    } else if (isPill) {
      finalRadius = 'full';
    }

    // Add custom classes
    const customClasses = [
      className,
      isPill && !props.isIconOnly ? 'px-6' : '',
    ].filter(Boolean).join(' ');

    return (
      <HeroUIButton
        ref={ref}
        color={color as any}
        variant={variant}
        radius={finalRadius}
        className={customClasses}
        {...props}
      />
    );
  }
);

NHButton.displayName = "NHButton";