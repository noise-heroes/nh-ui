"use client";

import React, { forwardRef } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "../../utils/cn";
import { ChevronRightIcon, HomeIcon } from "@heroicons/react/24/outline";
// Removed next/link import - will use anchor tag instead

const breadcrumbsVariants = tv({
  slots: {
    base: "flex items-center",
    list: "flex items-center",
    item: "flex items-center",
    link: "transition-colors duration-200",
    separator: "mx-2 text-gray-400 dark:text-gray-600",
    current: "font-medium",
    icon: "mr-1.5",
  },
  variants: {
    variant: {
      default: {
        link: "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100",
        current: "text-gray-900 dark:text-gray-100",
      },
      solid: {
        base: "px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-lg",
        link: "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100",
        current: "text-gray-900 dark:text-gray-100",
      },
      underline: {
        link: "text-gray-600 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-gray-100",
        current: "text-gray-900 dark:text-gray-100",
      },
    },
    size: {
      sm: {
        base: "text-sm",
        icon: "w-3.5 h-3.5",
        separator: "w-3.5 h-3.5",
      },
      md: {
        base: "text-base",
        icon: "w-4 h-4",
        separator: "w-4 h-4",
      },
      lg: {
        base: "text-lg",
        icon: "w-5 h-5",
        separator: "w-5 h-5",
      },
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

export interface BreadcrumbItem {
  id: string;
  label: string;
  href?: string;
  icon?: React.ReactNode;
  isCurrent?: boolean;
}

export interface NHBreadcrumbsProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "children">,
    VariantProps<typeof breadcrumbsVariants> {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
  showHome?: boolean;
  homeHref?: string;
  homeLabel?: string;
  maxItems?: number;
  itemsBeforeCollapse?: number;
  itemsAfterCollapse?: number;
  onItemClick?: (item: BreadcrumbItem) => void;
}

export const NHBreadcrumbs = forwardRef<HTMLElement, NHBreadcrumbsProps>(
  (
    {
      items,
      separator,
      showHome = true,
      homeHref = "/",
      homeLabel = "Home",
      maxItems,
      itemsBeforeCollapse = 1,
      itemsAfterCollapse = 2,
      onItemClick,
      className,
      variant,
      size,
      ...props
    },
    ref
  ) => {
    const styles = breadcrumbsVariants({ variant, size });

    // Add home item if needed
    const allItems = showHome
      ? [
          {
            id: "home",
            label: homeLabel,
            href: homeHref,
            icon: <HomeIcon className={styles.icon()} />,
          },
          ...items,
        ]
      : items;

    // Handle collapsing
    let displayItems: (BreadcrumbItem | { id: string; label: string; isEllipsis: boolean })[] = allItems;
    if (maxItems && allItems.length > maxItems) {
      const beforeItems = allItems.slice(0, itemsBeforeCollapse);
      const afterItems = allItems.slice(-itemsAfterCollapse);
      displayItems = [
        ...beforeItems,
        { id: "ellipsis", label: "...", isEllipsis: true },
        ...afterItems,
      ];
    }

    const handleClick = (item: BreadcrumbItem) => {
      if (item.isCurrent) return;
      onItemClick?.(item);
    };

    return (
      <nav
        ref={ref}
        aria-label="Breadcrumb"
        className={cn(styles.base(), className)}
        {...props}
      >
        <ol className={styles.list()}>
          {displayItems.map((item, index) => {
            const isLast = index === displayItems.length - 1;
            const isEllipsis = 'isEllipsis' in item && item.isEllipsis;
            const isCurrent = !isEllipsis && ((item as BreadcrumbItem).isCurrent ?? isLast);

            // Handle ellipsis
            if (isEllipsis) {
              return (
                <li key={item.id} className={styles.item()}>
                  <span className="text-gray-400 dark:text-gray-600 px-1">
                    •••
                  </span>
                  {!isLast && (
                    <span className={styles.separator()}>
                      {separator || <ChevronRightIcon />}
                    </span>
                  )}
                </li>
              );
            }

            const breadcrumbItem = item as BreadcrumbItem;
            const content = (
              <>
                {breadcrumbItem.icon}
                {breadcrumbItem.label}
              </>
            );

            return (
              <li key={item.id} className={styles.item()}>
                {isCurrent ? (
                  <span
                    className={cn(styles.link(), styles.current())}
                    aria-current="page"
                  >
                    {content}
                  </span>
                ) : breadcrumbItem.href ? (
                  <a
                    href={breadcrumbItem.href}
                    className={styles.link()}
                    onClick={() => handleClick(breadcrumbItem)}
                  >
                    {content}
                  </a>
                ) : (
                  <button
                    type="button"
                    className={styles.link()}
                    onClick={() => handleClick(breadcrumbItem)}
                  >
                    {content}
                  </button>
                )}
                {!isLast && (
                  <span className={styles.separator()}>
                    {separator || <ChevronRightIcon />}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    );
  }
);

NHBreadcrumbs.displayName = "NHBreadcrumbs";