"use client";

import React, { forwardRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { tv, type VariantProps } from "tailwind-variants";
import { clsx } from "clsx";
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  XCircleIcon,
  XMarkIcon,
  MegaphoneIcon,
} from "@heroicons/react/24/outline";
import { NHButton } from "../button";
import { IconWrapper } from "../utils/icon-wrapper";

const bannerVariants = tv({
  slots: {
    base: "relative w-full",
    wrapper: "px-4 py-3",
    container: "mx-auto max-w-7xl",
    content: "flex items-center justify-between gap-4",
    left: "flex items-center gap-3",
    icon: "flex-shrink-0 w-5 h-5",
    text: "flex-1 text-sm font-medium",
    actions: "flex items-center gap-2 flex-shrink-0",
    closeButton: "p-1 rounded-md hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer",
  },
  variants: {
    variant: {
      solid: {
        base: "border-b",
      },
      bordered: {
        base: "border-y",
        wrapper: "bg-transparent",
      },
      gradient: {
        base: "bg-gradient-to-r",
      },
    },
    color: {
      default: {
        base: "bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700",
        icon: "text-gray-600 dark:text-gray-400",
        text: "text-gray-900 dark:text-gray-100",
      },
      info: {
        base: "bg-blue-500 dark:bg-blue-600 border-blue-600 dark:border-blue-700",
        icon: "text-white",
        text: "text-white",
        closeButton: "hover:bg-white/20",
      },
      success: {
        base: "bg-green-500 dark:bg-green-600 border-green-600 dark:border-green-700",
        icon: "text-white",
        text: "text-white",
        closeButton: "hover:bg-white/20",
      },
      warning: {
        base: "bg-orange-500 dark:bg-orange-600 border-orange-600 dark:border-orange-700",
        icon: "text-white",
        text: "text-white",
        closeButton: "hover:bg-white/20",
      },
      error: {
        base: "bg-red-500 dark:bg-red-600 border-red-600 dark:border-red-700",
        icon: "text-white",
        text: "text-white",
        closeButton: "hover:bg-white/20",
      },
      announcement: {
        base: "bg-gradient-to-r from-orange-500 to-teal-500 border-transparent",
        icon: "text-white",
        text: "text-white",
        closeButton: "hover:bg-white/20",
      },
    },
    size: {
      sm: {
        wrapper: "py-2",
        text: "text-xs",
        icon: "w-4 h-4",
      },
      md: {
        wrapper: "py-3",
        text: "text-sm",
      },
      lg: {
        wrapper: "py-4",
        text: "text-base",
        icon: "w-6 h-6",
      },
    },
    isSticky: {
      true: {
        base: "sticky top-0 z-40",
      },
    },
  },
  compoundVariants: [
    {
      variant: "gradient",
      color: "info",
      class: {
        base: "bg-gradient-to-r from-blue-500 to-blue-600",
      },
    },
    {
      variant: "gradient",
      color: "success",
      class: {
        base: "bg-gradient-to-r from-green-500 to-green-600",
      },
    },
    {
      variant: "gradient",
      color: "warning",
      class: {
        base: "bg-gradient-to-r from-orange-500 to-orange-600",
      },
    },
    {
      variant: "gradient",
      color: "error",
      class: {
        base: "bg-gradient-to-r from-red-500 to-red-600",
      },
    },
    {
      variant: "bordered",
      color: "info",
      class: {
        base: "border-blue-200 dark:border-blue-700",
        text: "text-blue-700 dark:text-blue-300",
        icon: "text-blue-600 dark:text-blue-400",
      },
    },
    {
      variant: "bordered",
      color: "success",
      class: {
        base: "border-green-200 dark:border-green-700",
        text: "text-green-700 dark:text-green-300",
        icon: "text-green-600 dark:text-green-400",
      },
    },
    {
      variant: "bordered",
      color: "warning",
      class: {
        base: "border-orange-200 dark:border-orange-700",
        text: "text-orange-700 dark:text-orange-300",
        icon: "text-orange-600 dark:text-orange-400",
      },
    },
    {
      variant: "bordered",
      color: "error",
      class: {
        base: "border-red-200 dark:border-red-700",
        text: "text-red-700 dark:text-red-300",
        icon: "text-red-600 dark:text-red-400",
      },
    },
  ],
  defaultVariants: {
    variant: "solid",
    color: "default",
    size: "md",
  },
});

const iconMap = {
  default: InformationCircleIcon,
  info: InformationCircleIcon,
  success: CheckCircleIcon,
  warning: ExclamationTriangleIcon,
  error: XCircleIcon,
  announcement: MegaphoneIcon,
};

interface BannerAction {
  label: string;
  onClick: () => void;
  variant?: "solid" | "bordered" | "light" | "flat";
}

export interface NHBannerProps
  extends VariantProps<typeof bannerVariants> {
  icon?: React.ReactNode;
  isCloseable?: boolean;
  onClose?: () => void;
  actions?: BannerAction[];
  href?: string;
  linkText?: string;
  className?: string;
  children?: React.ReactNode;
}

export const NHBanner = forwardRef<HTMLDivElement, NHBannerProps>(
  (
    {
      className,
      variant,
      color = "default",
      size,
      isSticky,
      children,
      icon,
      isCloseable,
      onClose,
      actions,
      href,
      linkText = "Learn more"
    },
    ref
  ) => {
    const [isVisible, setIsVisible] = useState(true);
    const styles = bannerVariants({ variant, color, size, isSticky });

    const handleClose = () => {
      setIsVisible(false);
      setTimeout(() => {
        onClose?.();
      }, 200);
    };

    const Icon = icon || (color && iconMap[color]);

    return (
      <AnimatePresence>
        {isVisible && (
          <motion.div
            ref={ref}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={clsx(styles.base(), className)}
            role="banner"
          >
            <div className={styles.wrapper()}>
              <div className={styles.container()}>
                <div className={styles.content()}>
                  <div className={styles.left()}>
                    {Icon && (
                      <div className={styles.icon()}>
                        {typeof Icon === "function" ? <IconWrapper icon={Icon} /> : icon}
                      </div>
                    )}
                    <p className={styles.text()}>{children}</p>
                  </div>
                  
                  <div className={styles.actions()}>
                    {href && (
                      <a
                        href={href}
                        className={clsx(
                          "text-sm font-medium underline hover:no-underline",
                          variant === "bordered"
                            ? "text-current"
                            : "text-white"
                        )}
                      >
                        {linkText}
                      </a>
                    )}
                    {actions?.map((action, index) => (
                      <NHButton
                        key={index}
                        size="sm"
                        variant={action.variant || "flat"}
                        color={variant === "bordered" ? color as any : "default"}
                        onPress={action.onClick}
                        className={variant !== "bordered" ? "!text-white hover:!bg-white/20" : ""}
                      >
                        {action.label}
                      </NHButton>
                    ))}
                    {isCloseable && (
                      <button
                        type="button"
                        onClick={handleClose}
                        className={styles.closeButton()}
                        aria-label="Close banner"
                      >
                        <IconWrapper icon={XMarkIcon} className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }
);

NHBanner.displayName = "NHBanner";