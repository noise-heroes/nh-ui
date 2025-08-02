"use client";

import React, { forwardRef, useState } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  XCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { clsx } from "clsx";

const alertVariants = tv({
  slots: {
    base: "relative flex gap-3 p-4 rounded-lg border backdrop-blur-sm transition-all duration-200",
    icon: "flex-shrink-0",
    iconSvg: "w-5 h-5",
    content: "flex-1 flex flex-col gap-1",
    title: "font-semibold text-sm",
    description: "text-sm",
    closeButton: "absolute top-3 right-3 p-1 rounded-md hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer",
  },
  variants: {
    variant: {
      solid: {
        base: "border-transparent",
      },
      bordered: {
        base: "bg-transparent backdrop-blur-none",
      },
      flat: {
        base: "border-transparent",
      },
      faded: {
        base: "",
      },
    },
    color: {
      default: {
        base: "",
        icon: "text-gray-500 dark:text-gray-400",
        title: "text-gray-900 dark:text-gray-100",
        description: "text-gray-600 dark:text-gray-400",
      },
      info: {
        base: "",
        icon: "text-blue-500",
        title: "text-blue-900 dark:text-blue-100",
        description: "text-blue-700 dark:text-blue-300",
      },
      success: {
        base: "",
        icon: "text-green-500",
        title: "text-green-900 dark:text-green-100",
        description: "text-green-700 dark:text-green-300",
      },
      warning: {
        base: "",
        icon: "text-orange-500",
        title: "text-orange-900 dark:text-orange-100",
        description: "text-orange-700 dark:text-orange-300",
      },
      error: {
        base: "",
        icon: "text-red-500",
        title: "text-red-900 dark:text-red-100",
        description: "text-red-700 dark:text-red-300",
      },
    },
    isCloseable: {
      true: {
        base: "pr-10",
      },
    },
  },
  compoundVariants: [
    // Solid variants
    {
      variant: "solid",
      color: "default",
      class: {
        base: "bg-gray-100 dark:bg-gray-800/50",
      },
    },
    {
      variant: "solid",
      color: "info",
      class: {
        base: "bg-blue-100 dark:bg-blue-900/30",
      },
    },
    {
      variant: "solid",
      color: "success",
      class: {
        base: "bg-green-100 dark:bg-green-900/30",
      },
    },
    {
      variant: "solid",
      color: "warning",
      class: {
        base: "bg-orange-100 dark:bg-orange-900/30",
      },
    },
    {
      variant: "solid",
      color: "error",
      class: {
        base: "bg-red-100 dark:bg-red-900/30",
      },
    },
    // Bordered variants
    {
      variant: "bordered",
      color: "default",
      class: {
        base: "border-gray-200 dark:border-gray-700",
      },
    },
    {
      variant: "bordered",
      color: "info",
      class: {
        base: "border-blue-200 dark:border-blue-700",
      },
    },
    {
      variant: "bordered",
      color: "success",
      class: {
        base: "border-green-200 dark:border-green-700",
      },
    },
    {
      variant: "bordered",
      color: "warning",
      class: {
        base: "border-orange-200 dark:border-orange-700",
      },
    },
    {
      variant: "bordered",
      color: "error",
      class: {
        base: "border-red-200 dark:border-red-700",
      },
    },
    // Flat variants
    {
      variant: "flat",
      color: "default",
      class: {
        base: "bg-gray-50 dark:bg-gray-900/50",
      },
    },
    {
      variant: "flat",
      color: "info",
      class: {
        base: "bg-blue-50 dark:bg-blue-900/20",
      },
    },
    {
      variant: "flat",
      color: "success",
      class: {
        base: "bg-green-50 dark:bg-green-900/20",
      },
    },
    {
      variant: "flat",
      color: "warning",
      class: {
        base: "bg-orange-50 dark:bg-orange-900/20",
      },
    },
    {
      variant: "flat",
      color: "error",
      class: {
        base: "bg-red-50 dark:bg-red-900/20",
      },
    },
    // Faded variants
    {
      variant: "faded",
      color: "default",
      class: {
        base: "bg-gray-100/50 dark:bg-gray-800/30 border-gray-200/50 dark:border-gray-700/50",
      },
    },
    {
      variant: "faded",
      color: "info",
      class: {
        base: "bg-blue-100/50 dark:bg-blue-900/20 border-blue-200/50 dark:border-blue-700/50",
      },
    },
    {
      variant: "faded",
      color: "success",
      class: {
        base: "bg-green-100/50 dark:bg-green-900/20 border-green-200/50 dark:border-green-700/50",
      },
    },
    {
      variant: "faded",
      color: "warning",
      class: {
        base: "bg-orange-100/50 dark:bg-orange-900/20 border-orange-200/50 dark:border-orange-700/50",
      },
    },
    {
      variant: "faded",
      color: "error",
      class: {
        base: "bg-red-100/50 dark:bg-red-900/20 border-red-200/50 dark:border-red-700/50",
      },
    },
  ],
  defaultVariants: {
    variant: "flat",
    color: "default",
  },
});


export interface NHAlertProps
  extends VariantProps<typeof alertVariants> {
  title?: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ReactNode;
  isCloseable?: boolean;
  onClose?: () => void;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}

export const NHAlert = forwardRef<HTMLDivElement, NHAlertProps>(
  (
    {
      className,
      variant,
      color = "default",
      title,
      description,
      icon,
      isCloseable,
      onClose,
      startContent,
      endContent,
      children
    },
    ref
  ) => {
    const [isVisible, setIsVisible] = useState(true);
    const styles = alertVariants({ variant, color, isCloseable });

    const handleClose = () => {
      setIsVisible(false);
      setTimeout(() => {
        onClose?.();
      }, 200);
    };

    const shouldShowIcon = icon || (!icon && color);
    
    const renderDefaultIcon = () => {
      if (!color) return null;
      
      const iconProps = { className: styles.iconSvg(), 'aria-hidden': true };
      
      switch(color) {
        case 'info':
          return React.createElement(InformationCircleIcon as any, iconProps);
        case 'success':
          return React.createElement(CheckCircleIcon as any, iconProps);
        case 'warning':
          return React.createElement(ExclamationTriangleIcon as any, iconProps);
        case 'error':
          return React.createElement(XCircleIcon as any, iconProps);
        default:
          return React.createElement(InformationCircleIcon as any, iconProps);
      }
    };

    return (
      <AnimatePresence>
        {isVisible && (
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={clsx(styles.base(), className)}
            role="alert"
          >
            {startContent}
            {shouldShowIcon && (
              <div className={styles.icon()}>
                {icon || renderDefaultIcon()}
              </div>
            )}
            <div className={styles.content()}>
              {title && <div className={styles.title()}>{title}</div>}
              {description && (
                <div className={styles.description()}>{description}</div>
              )}
              {children}
            </div>
            {endContent}
            {isCloseable && (
              <button
                type="button"
                onClick={handleClose}
                className={styles.closeButton()}
                aria-label="Close alert"
              >
                {React.createElement(XMarkIcon as any, { className: "w-4 h-4" })}
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    );
  }
);

NHAlert.displayName = "NHAlert";