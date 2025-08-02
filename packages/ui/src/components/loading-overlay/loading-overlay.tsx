"use client";

import React, { forwardRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { tv, type VariantProps } from "tailwind-variants";
import { clsx } from "clsx";
import { NHSpinner } from "../spinner";

const loadingOverlayVariants = tv({
  slots: {
    base: "fixed inset-0 z-50 flex items-center justify-center",
    backdrop: "absolute inset-0",
    content: "relative z-10 flex flex-col items-center gap-4 p-6 rounded-lg",
    label: "text-sm font-medium",
    description: "text-sm text-center max-w-sm",
  },
  variants: {
    variant: {
      default: {
        backdrop: "bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm",
        content: "",
        label: "text-gray-900 dark:text-gray-100",
        description: "text-gray-600 dark:text-gray-400",
      },
      dark: {
        backdrop: "bg-black/80 backdrop-blur-md",
        content: "bg-gray-900/90 border border-gray-700",
        label: "text-gray-100",
        description: "text-gray-400",
      },
      blur: {
        backdrop: "bg-white/60 dark:bg-gray-900/60 backdrop-blur-lg",
        content: "bg-white/90 dark:bg-gray-800/90 shadow-xl border border-gray-200 dark:border-gray-700",
        label: "text-gray-900 dark:text-gray-100",
        description: "text-gray-600 dark:text-gray-400",
      },
    },
    spinnerSize: {
      sm: {},
      md: {},
      lg: {},
      xl: {},
    },
  },
  defaultVariants: {
    variant: "default",
    spinnerSize: "lg",
  },
});

export interface NHLoadingOverlayProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "content">,
    VariantProps<typeof loadingOverlayVariants> {
  isOpen: boolean;
  label?: React.ReactNode;
  description?: React.ReactNode;
  spinnerColor?: "default" | "primary" | "secondary" | "success" | "warning" | "danger" | "white";
  disableAnimation?: boolean;
  disableBackdropClick?: boolean;
}

export const NHLoadingOverlay = forwardRef<HTMLDivElement, NHLoadingOverlayProps>(
  (
    {
      className,
      isOpen,
      variant,
      spinnerSize,
      label,
      description,
      spinnerColor = variant === "dark" ? "white" : "primary",
      disableAnimation = false,
      disableBackdropClick = true,
      ...props
    },
    ref
  ) => {
    const styles = loadingOverlayVariants({ variant, spinnerSize });

    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={ref}
            initial={disableAnimation ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={disableAnimation ? undefined : { opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={clsx(styles.base(), className)}
          >
            <div
              className={styles.backdrop()}
              onClick={disableBackdropClick ? undefined : () => {}}
            />
            <motion.div
              initial={disableAnimation ? false : { scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={disableAnimation ? undefined : { scale: 0.9, opacity: 0 }}
              transition={{
                type: "spring",
                duration: 0.3,
                bounce: 0.2,
              }}
              className={styles.content()}
            >
              <NHSpinner size={spinnerSize} color={spinnerColor} />
              {label && <div className={styles.label()}>{label}</div>}
              {description && (
                <div className={styles.description()}>{description}</div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }
);

NHLoadingOverlay.displayName = "NHLoadingOverlay";