"use client";

import React, { forwardRef } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { clsx } from "clsx";

const skeletonVariants = tv({
  base: "animate-pulse bg-gray-200 dark:bg-gray-700 rounded",
  variants: {
    variant: {
      default: "",
      text: "h-4 rounded",
      circular: "rounded-full",
      rectangular: "rounded-md",
      rounded: "rounded-lg",
    },
    animation: {
      pulse: "animate-pulse",
      wave: "animate-shimmer bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 bg-[length:200%_100%]",
      none: "animate-none",
    },
    width: {
      sm: "w-16",
      md: "w-32",
      lg: "w-48",
      xl: "w-64",
      full: "w-full",
    },
    height: {
      sm: "h-4",
      md: "h-6",
      lg: "h-8",
      xl: "h-10",
      full: "h-full",
    },
  },
  defaultVariants: {
    variant: "default",
    animation: "pulse",
  },
});

export interface NHSkeletonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof skeletonVariants> {
  isLoaded?: boolean;
  children?: React.ReactNode;
}

export const NHSkeleton = forwardRef<HTMLDivElement, NHSkeletonProps>(
  (
    {
      className,
      variant,
      animation,
      width,
      height,
      isLoaded = false,
      children,
      style,
      ...props
    },
    ref
  ) => {
    if (isLoaded && children) {
      return <>{children}</>;
    }

    const styles = skeletonVariants({ variant, animation, width, height });

    return (
      <div
        ref={ref}
        className={clsx(styles, className)}
        style={style}
        aria-hidden="true"
        {...props}
      />
    );
  }
);

NHSkeleton.displayName = "NHSkeleton";