"use client";

import { Chip as HeroUIChip, ChipProps as HeroUIChipProps } from "@heroui/react";
import { forwardRef } from "react";

export interface NHChipProps extends Omit<HeroUIChipProps, 'color'> {
  /**
   * The chip color
   * @default "default"
   */
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'default';
}

export const NHChip = forwardRef<HTMLDivElement, NHChipProps>(
  ({ color = 'default', ...props }, ref) => {
    return (
      <HeroUIChip
        ref={ref}
        color={color as any}
        {...props}
      />
    );
  }
);

NHChip.displayName = "NHChip";