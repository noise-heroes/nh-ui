"use client";

import React, { forwardRef, useEffect } from "react";
import { motion } from "framer-motion";
import { tv } from "tailwind-variants";
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  XCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { clsx } from "clsx";
import { IconWrapper } from "../utils/icon-wrapper";
import type { NHToastProps } from "./types";

const toastVariants = tv({
  slots: {
    base: "relative flex items-start gap-3 p-4 rounded-lg shadow-lg backdrop-blur-sm border min-w-[300px] max-w-[500px]",
    icon: "flex-shrink-0 w-5 h-5 mt-0.5",
    content: "flex-1 flex flex-col gap-1",
    title: "font-semibold text-sm",
    description: "text-sm",
    action: "ml-auto flex-shrink-0",
    actionButton: "text-sm font-medium hover:underline",
    closeButton: "flex-shrink-0 p-1 rounded-md hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer ml-2",
  },
  variants: {
    variant: {
      default: {
        base: "bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700",
        icon: "text-gray-500 dark:text-gray-400",
        title: "text-gray-900 dark:text-gray-100",
        description: "text-gray-600 dark:text-gray-400",
        actionButton: "text-gray-900 dark:text-gray-100",
      },
      success: {
        base: "bg-green-50 dark:bg-green-950/50 border-green-200 dark:border-green-800",
        icon: "text-green-600 dark:text-green-400",
        title: "text-green-900 dark:text-green-100",
        description: "text-green-700 dark:text-green-300",
        actionButton: "text-green-900 dark:text-green-100",
      },
      error: {
        base: "bg-red-50 dark:bg-red-950/50 border-red-200 dark:border-red-800",
        icon: "text-red-600 dark:text-red-400",
        title: "text-red-900 dark:text-red-100",
        description: "text-red-700 dark:text-red-300",
        actionButton: "text-red-900 dark:text-red-100",
      },
      warning: {
        base: "bg-orange-50 dark:bg-orange-950/50 border-orange-200 dark:border-orange-800",
        icon: "text-orange-600 dark:text-orange-400",
        title: "text-orange-900 dark:text-orange-100",
        description: "text-orange-700 dark:text-orange-300",
        actionButton: "text-orange-900 dark:text-orange-100",
      },
      info: {
        base: "bg-blue-50 dark:bg-blue-950/50 border-blue-200 dark:border-blue-800",
        icon: "text-blue-600 dark:text-blue-400",
        title: "text-blue-900 dark:text-blue-100",
        description: "text-blue-700 dark:text-blue-300",
        actionButton: "text-blue-900 dark:text-blue-100",
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const iconMap = {
  default: InformationCircleIcon,
  info: InformationCircleIcon,
  success: CheckCircleIcon,
  warning: ExclamationTriangleIcon,
  error: XCircleIcon,
};

const positionClasses = {
  top: "top-4 left-1/2 -translate-x-1/2",
  bottom: "bottom-4 left-1/2 -translate-x-1/2",
  "top-left": "top-4 left-4",
  "top-right": "top-4 right-4",
  "bottom-left": "bottom-4 left-4",
  "bottom-right": "bottom-4 right-4",
};

const getAnimationProps = (position?: string) => {
  const isTop = position?.includes("top");
  const isLeft = position?.includes("left");
  const isRight = position?.includes("right");
  const isCenter = !isLeft && !isRight;

  return {
    initial: {
      opacity: 0,
      y: isTop ? -20 : 20,
      x: isCenter ? 0 : isLeft ? -20 : 20,
      scale: 0.95,
    },
    animate: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
    },
    exit: {
      opacity: 0,
      y: isTop ? -20 : 20,
      x: isCenter ? 0 : isLeft ? -20 : 20,
      scale: 0.95,
    },
  };
};

export const NHToast = forwardRef<HTMLDivElement, NHToastProps>(
  (
    {
      id,
      title,
      description,
      variant = "default",
      duration = 5000,
      action,
      onClose,
      position = "bottom-right",
    },
    ref
  ) => {
    const styles = toastVariants({ variant });
    const Icon = iconMap[variant];
    const animationProps = getAnimationProps(position);

    useEffect(() => {
      if (duration && duration > 0) {
        const timer = setTimeout(() => {
          onClose();
        }, duration);
        return () => clearTimeout(timer);
      }
    }, [duration, onClose]);

    return (
      <motion.div
        ref={ref}
        layout
        {...animationProps}
        transition={{
          type: "spring",
          stiffness: 350,
          damping: 25,
        }}
        className={clsx(styles.base(), "fixed", positionClasses[position])}
        role="alert"
      >
        {Icon && (
          <div className={styles.icon()}>
            <IconWrapper icon={Icon} />
          </div>
        )}
        <div className={styles.content()}>
          {title && <div className={styles.title()}>{title}</div>}
          {description && (
            <div className={styles.description()}>{description}</div>
          )}
        </div>
        {action && (
          <div className={styles.action()}>
            <button
              type="button"
              onClick={action.onClick}
              className={styles.actionButton()}
            >
              {action.label}
            </button>
          </div>
        )}
        <button
          type="button"
          onClick={onClose}
          className={styles.closeButton()}
          aria-label="Close toast"
        >
          <IconWrapper icon={XMarkIcon} className="w-4 h-4" />
        </button>
      </motion.div>
    );
  }
);

NHToast.displayName = "NHToast";