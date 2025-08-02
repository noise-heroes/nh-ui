"use client";

import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import { tv, type VariantProps } from "tailwind-variants";
import { clsx } from "clsx";

const progressVariants = tv({
  slots: {
    base: "flex flex-col gap-2 w-full",
    labelWrapper: "flex justify-between items-center",
    label: "text-sm font-medium",
    value: "text-sm text-gray-500 dark:text-gray-400",
    track: "relative w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700",
    indicator: "h-full rounded-full transition-all duration-500 ease-out",
    stripes: "absolute inset-0 bg-stripes animate-stripes",
  },
  variants: {
    size: {
      sm: {
        track: "h-1",
        label: "text-xs",
        value: "text-xs",
      },
      md: {
        track: "h-2",
      },
      lg: {
        track: "h-3",
      },
    },
    color: {
      default: {
        indicator: "bg-gray-600 dark:bg-gray-400",
      },
      primary: {
        indicator: "bg-orange-500 dark:bg-orange-400",
      },
      secondary: {
        indicator: "bg-teal-500 dark:bg-teal-400",
      },
      success: {
        indicator: "bg-green-500 dark:bg-green-400",
      },
      warning: {
        indicator: "bg-yellow-500 dark:bg-yellow-400",
      },
      danger: {
        indicator: "bg-red-500 dark:bg-red-400",
      },
    },
    variant: {
      default: {},
      striped: {
        indicator: "bg-gradient-to-r from-transparent via-white/20 to-transparent",
      },
    },
    isIndeterminate: {
      true: {
        indicator: "animate-progress-indeterminate",
      },
    },
  },
  defaultVariants: {
    size: "md",
    color: "primary",
    variant: "default",
  },
});

export interface NHProgressProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "color">,
    VariantProps<typeof progressVariants> {
  value?: number;
  maxValue?: number;
  label?: React.ReactNode;
  valueLabel?: React.ReactNode;
  showValueLabel?: boolean;
  formatOptions?: Intl.NumberFormatOptions;
  isStriped?: boolean;
  isAnimated?: boolean;
}

export const NHProgress = forwardRef<HTMLDivElement, NHProgressProps>(
  (
    {
      className,
      value = 0,
      maxValue = 100,
      label,
      valueLabel,
      showValueLabel = false,
      formatOptions = { style: "percent" },
      size,
      color,
      variant,
      isIndeterminate,
      isStriped,
      isAnimated = true,
      ...props
    },
    ref
  ) => {
    const percentage = isIndeterminate ? 50 : Math.min(100, (value / maxValue) * 100);
    const styles = progressVariants({ size, color, variant, isIndeterminate });

    const formattedValue = React.useMemo(() => {
      if (valueLabel) return valueLabel;
      if (!showValueLabel) return null;

      if (formatOptions.style === "percent") {
        return `${Math.round(percentage)}%`;
      }

      return new Intl.NumberFormat(undefined, formatOptions).format(value);
    }, [value, percentage, valueLabel, showValueLabel, formatOptions]);

    return (
      <div ref={ref} className={clsx(styles.base(), className)} {...props}>
        {(label || formattedValue) && (
          <div className={styles.labelWrapper()}>
            {label && <span className={styles.label()}>{label}</span>}
            {formattedValue && (
              <span className={styles.value()}>{formattedValue}</span>
            )}
          </div>
        )}
        <div
          className={styles.track()}
          role="progressbar"
          aria-valuenow={isIndeterminate ? undefined : value}
          aria-valuemin={0}
          aria-valuemax={maxValue}
          aria-label={typeof label === "string" ? label : "Progress"}
        >
          <motion.div
            className={clsx(
              styles.indicator(),
              isStriped && "bg-gradient-to-r from-transparent via-white/20 to-transparent bg-[length:20px_20px]"
            )}
            initial={isAnimated ? { width: 0 } : false}
            animate={{ width: `${percentage}%` }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
          >
            {isStriped && isAnimated && (
              <div className={styles.stripes()} />
            )}
          </motion.div>
        </div>
      </div>
    );
  }
);

NHProgress.displayName = "NHProgress";