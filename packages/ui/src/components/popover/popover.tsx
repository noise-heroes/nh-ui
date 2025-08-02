"use client";

import { 
  Popover as HeroUIPopover, 
  PopoverTrigger as HeroUIPopoverTrigger,
  PopoverContent as HeroUIPopoverContent,
  PopoverProps as HeroUIPopoverProps,
  PopoverContentProps as HeroUIPopoverContentProps,
} from "@heroui/react";
import { forwardRef } from "react";

export interface NHPopoverProps extends HeroUIPopoverProps {
  /**
   * Whether the popover should have a blur effect
   */
  isBlurred?: boolean;
}

export const NHPopover = HeroUIPopover;

export const NHPopoverTrigger = HeroUIPopoverTrigger;

export interface NHPopoverContentProps extends HeroUIPopoverContentProps {
  /**
   * Whether the popover content should have a blur effect
   */
  isBlurred?: boolean;
}

export const NHPopoverContent = ({ isBlurred, className, ...props }: NHPopoverContentProps) => {
  const blurClasses = isBlurred 
    ? 'backdrop-blur-md bg-white/90 dark:bg-black/90' 
    : '';
  
  return (
    <HeroUIPopoverContent
      className={`${blurClasses} ${className || ''}`}
      {...props}
    />
  );
};