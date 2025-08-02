"use client";

import React, { forwardRef } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "../../utils/cn";
import { motion } from "framer-motion";
// Framework-agnostic navigation - consumers can wrap with Next.js Link if needed

const navVariants = tv({
  slots: {
    base: "w-full",
    list: "flex",
    item: "relative",
    link: "flex items-center gap-2 transition-all duration-200",
    indicator: "absolute inset-0 rounded-md",
    icon: "flex-shrink-0",
    badge: "ml-auto text-xs font-medium px-2 py-0.5 rounded-full",
  },
  variants: {
    variant: {
      default: {
        list: "gap-1",
        link: "px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-gray-100 dark:hover:bg-gray-800",
        indicator: "bg-gray-100 dark:bg-gray-800",
      },
      pills: {
        list: "gap-2 p-1 bg-gray-100 dark:bg-gray-800 rounded-lg",
        link: "px-4 py-2 rounded-md text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100",
        indicator: "bg-white dark:bg-gray-900 shadow-sm",
      },
      underline: {
        list: "gap-6 border-b border-gray-200 dark:border-gray-700",
        link: "px-1 pb-3 text-gray-600 hover:text-gray-900 border-b-2 border-transparent dark:text-gray-400 dark:hover:text-gray-100",
        indicator: "border-b-2 border-orange-500",
      },
      sidebar: {
        list: "flex-col gap-1",
        link: "px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-gray-100 dark:hover:bg-gray-800",
        indicator: "bg-orange-50 dark:bg-orange-900/20",
      },
    },
    size: {
      sm: {
        link: "text-sm",
        icon: "w-4 h-4",
        badge: "text-xs",
      },
      md: {
        link: "text-base",
        icon: "w-5 h-5",
        badge: "text-sm",
      },
      lg: {
        link: "text-lg",
        icon: "w-6 h-6",
        badge: "text-base",
      },
    },
    isActive: {
      true: {},
    },
  },
  compoundVariants: [
    {
      variant: "default",
      isActive: true,
      class: {
        link: "text-orange-600 font-medium dark:text-orange-400",
      },
    },
    {
      variant: "pills",
      isActive: true,
      class: {
        link: "text-gray-900 font-medium dark:text-gray-100",
      },
    },
    {
      variant: "underline",
      isActive: true,
      class: {
        link: "text-orange-600 font-medium border-orange-500 dark:text-orange-400",
      },
    },
    {
      variant: "sidebar",
      isActive: true,
      class: {
        link: "text-orange-600 font-medium bg-orange-50 dark:text-orange-400 dark:bg-orange-900/20",
      },
    },
  ],
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

export interface NavItem {
  id: string;
  label: string;
  href?: string;
  icon?: React.ReactNode;
  badge?: string | number;
  badgeColor?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
  onClick?: () => void;
  isActive?: boolean;
  isDisabled?: boolean;
}

export interface NHNavProps extends VariantProps<typeof navVariants> {
  items: NavItem[];
  activeId?: string;
  onItemClick?: (item: NavItem) => void;
  className?: string;
  orientation?: "horizontal" | "vertical";
  showIndicator?: boolean;
}

export const NHNav = forwardRef<HTMLElement, NHNavProps>(
  (
    {
      items,
      activeId,
      onItemClick,
      className,
      variant,
      size,
      orientation = "horizontal",
      showIndicator = true,
      ...props
    },
    ref
  ) => {
    const styles = navVariants({ variant, size });
    const isVertical = orientation === "vertical" || variant === "sidebar";

    const badgeColors = {
      default: "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300",
      primary: "bg-orange-100 text-orange-700 dark:bg-orange-900/50 dark:text-orange-300",
      secondary: "bg-teal-100 text-teal-700 dark:bg-teal-900/50 dark:text-teal-300",
      success: "bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300",
      warning: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-300",
      danger: "bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300",
    };

    const handleClick = (item: NavItem) => {
      if (item.isDisabled) return;
      item.onClick?.();
      onItemClick?.(item);
    };

    return (
      <nav
        ref={ref}
        className={cn(styles.base(), className)}
        aria-label="Navigation"
        {...props}
      >
        <ul
          className={cn(
            styles.list(),
            isVertical && "flex-col"
          )}
          role="list"
        >
          {items.map((item) => {
            const isActive = item.isActive ?? activeId === item.id;
            const itemStyles = navVariants({ variant, size, isActive });

            const content = (
              <>
                {item.icon && (
                  <span className={styles.icon()}>{item.icon}</span>
                )}
                <span>{item.label}</span>
                {item.badge !== undefined && (
                  <span
                    className={cn(
                      styles.badge(),
                      badgeColors[item.badgeColor || "default"]
                    )}
                  >
                    {item.badge}
                  </span>
                )}
              </>
            );

            const linkContent = (
              <span
                className={cn(
                  itemStyles.link(),
                  item.isDisabled && "opacity-50 cursor-not-allowed"
                )}
                onClick={() => handleClick(item)}
                role={item.href ? undefined : "button"}
                tabIndex={item.isDisabled ? -1 : 0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleClick(item);
                  }
                }}
              >
                {content}
              </span>
            );

            return (
              <li key={item.id} className={styles.item()}>
                {showIndicator && isActive && variant === "pills" && (
                  <motion.div
                    layoutId={`nav-indicator-${variant}`}
                    className={styles.indicator()}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                )}
                {linkContent}
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
);

NHNav.displayName = "NHNav";