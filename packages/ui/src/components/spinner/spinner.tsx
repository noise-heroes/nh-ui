"use client";

import React, { forwardRef } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { clsx } from "clsx";

const spinnerVariants = tv({
  slots: {
    base: "inline-flex flex-col items-center gap-2",
    wrapper: "relative",
    spinner: "animate-spin",
    label: "text-sm",
  },
  variants: {
    size: {
      sm: {
        wrapper: "w-4 h-4",
        label: "text-xs",
      },
      md: {
        wrapper: "w-6 h-6",
      },
      lg: {
        wrapper: "w-8 h-8",
      },
      xl: {
        wrapper: "w-10 h-10",
      },
    },
    color: {
      default: {
        spinner: "text-gray-600 dark:text-gray-400",
        label: "text-gray-600 dark:text-gray-400",
      },
      primary: {
        spinner: "text-orange-500 dark:text-orange-400",
        label: "text-orange-600 dark:text-orange-400",
      },
      secondary: {
        spinner: "text-teal-500 dark:text-teal-400",
        label: "text-teal-600 dark:text-teal-400",
      },
      success: {
        spinner: "text-green-500 dark:text-green-400",
        label: "text-green-600 dark:text-green-400",
      },
      warning: {
        spinner: "text-yellow-500 dark:text-yellow-400",
        label: "text-yellow-600 dark:text-yellow-400",
      },
      danger: {
        spinner: "text-red-500 dark:text-red-400",
        label: "text-red-600 dark:text-red-400",
      },
      white: {
        spinner: "text-white",
        label: "text-white",
      },
    },
    variant: {
      default: {},
      dots: {},
      pulse: {},
      bars: {},
    },
  },
  defaultVariants: {
    size: "md",
    color: "primary",
    variant: "default",
  },
});

export interface NHSpinnerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "color">,
    VariantProps<typeof spinnerVariants> {
  label?: React.ReactNode;
}

const DefaultSpinner = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
);

const DotsSpinner = ({ className }: { className?: string }) => (
  <div className={clsx("flex space-x-1", className)}>
    {[0, 1, 2].map((i) => (
      <div
        key={i}
        className="w-2 h-2 bg-current rounded-full animate-bounce"
        style={{
          animationDelay: `${i * 0.1}s`,
          animationDuration: "0.6s",
        }}
      />
    ))}
  </div>
);

const PulseSpinner = ({ className }: { className?: string }) => (
  <div className={clsx("relative", className)}>
    <div className="absolute inset-0 rounded-full bg-current opacity-75 animate-ping" />
    <div className="relative rounded-full bg-current" />
  </div>
);

const BarsSpinner = ({ className }: { className?: string }) => (
  <div className={clsx("flex space-x-1", className)}>
    {[0, 1, 2, 3].map((i) => (
      <div
        key={i}
        className="w-1 bg-current animate-pulse"
        style={{
          height: "100%",
          animationDelay: `${i * 0.15}s`,
          animationDuration: "0.6s",
        }}
      />
    ))}
  </div>
);

export const NHSpinner = forwardRef<HTMLDivElement, NHSpinnerProps>(
  ({ className, size, color, variant, label, ...props }, ref) => {
    const styles = spinnerVariants({ size, color, variant });

    const renderSpinner = () => {
      switch (variant) {
        case "dots":
          return <DotsSpinner className={styles.spinner()} />;
        case "pulse":
          return <PulseSpinner className={styles.spinner()} />;
        case "bars":
          return <BarsSpinner className={styles.spinner()} />;
        default:
          return <DefaultSpinner className={styles.spinner()} />;
      }
    };

    return (
      <div
        ref={ref}
        className={clsx(styles.base(), className)}
        role="status"
        aria-label={typeof label === "string" ? label : "Loading"}
        {...props}
      >
        <div className={styles.wrapper()}>{renderSpinner()}</div>
        {label && <span className={styles.label()}>{label}</span>}
        <span className="sr-only">Loading...</span>
      </div>
    );
  }
);

NHSpinner.displayName = "NHSpinner";