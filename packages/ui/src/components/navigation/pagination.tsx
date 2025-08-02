"use client";

import React, { forwardRef, useMemo } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "../../utils/cn";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from "@heroicons/react/24/outline";

const paginationVariants = tv({
  slots: {
    base: "flex items-center gap-1",
    item: "min-w-[40px] h-10 flex items-center justify-center rounded-md transition-all duration-200 cursor-pointer select-none",
    ellipsis: "px-2 text-gray-400 dark:text-gray-600",
    nav: "p-2",
  },
  variants: {
    variant: {
      default: {
        item: "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300",
        nav: "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400",
      },
      bordered: {
        item: "border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600",
        nav: "border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600",
      },
      solid: {
        base: "p-1 bg-gray-100 dark:bg-gray-800 rounded-lg",
        item: "hover:bg-gray-200 dark:hover:bg-gray-700",
        nav: "hover:bg-gray-200 dark:hover:bg-gray-700",
      },
    },
    size: {
      sm: {
        base: "text-sm",
        item: "min-w-[32px] h-8",
        nav: "p-1.5",
      },
      md: {
        base: "text-base",
        item: "min-w-[40px] h-10",
        nav: "p-2",
      },
      lg: {
        base: "text-lg",
        item: "min-w-[48px] h-12",
        nav: "p-2.5",
      },
    },
    isActive: {
      true: {},
    },
    isDisabled: {
      true: {
        item: "opacity-50 cursor-not-allowed hover:bg-transparent",
        nav: "opacity-50 cursor-not-allowed hover:bg-transparent",
      },
    },
  },
  compoundVariants: [
    {
      variant: "default",
      isActive: true,
      class: {
        item: "bg-orange-500 text-white hover:bg-orange-600 font-medium",
      },
    },
    {
      variant: "bordered",
      isActive: true,
      class: {
        item: "border-orange-500 bg-orange-500 text-white hover:bg-orange-600 hover:border-orange-600 font-medium",
      },
    },
    {
      variant: "solid",
      isActive: true,
      class: {
        item: "bg-orange-500 text-white hover:bg-orange-600 font-medium",
      },
    },
  ],
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

export interface NHPaginationProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "onChange">,
    VariantProps<typeof paginationVariants> {
  total: number;
  page: number;
  onChange?: (page: number) => void;
  siblings?: number;
  boundaries?: number;
  showControls?: boolean;
  showJumpControls?: boolean;
  loop?: boolean;
  isCompact?: boolean;
  renderItem?: (page: number) => React.ReactNode;
}

export const NHPagination = forwardRef<HTMLElement, NHPaginationProps>(
  (
    {
      total,
      page,
      onChange,
      siblings = 1,
      boundaries = 1,
      showControls = true,
      showJumpControls = false,
      loop = false,
      isCompact = false,
      renderItem,
      className,
      variant,
      size,
      ...props
    },
    ref
  ) => {
    const styles = paginationVariants({ variant, size });

    const range = useMemo(() => {
      const items: (number | string)[] = [];
      
      if (total <= 0) return items;

      // Always show first pages
      for (let i = 1; i <= Math.min(boundaries, total); i++) {
        items.push(i);
      }

      // Calculate range around current page
      const start = Math.max(
        boundaries + 1,
        Math.min(page - siblings, total - siblings * 2 - boundaries + 1)
      );
      const end = Math.min(
        total - boundaries,
        Math.max(page + siblings, siblings * 2 + boundaries)
      );

      // Add ellipsis if needed
      if (start > boundaries + 1) {
        items.push("start-ellipsis");
      }

      // Add pages around current
      for (let i = start; i <= end; i++) {
        if (i > boundaries && i <= total - boundaries) {
          items.push(i);
        }
      }

      // Add ellipsis if needed
      if (end < total - boundaries) {
        items.push("end-ellipsis");
      }

      // Always show last pages
      for (let i = Math.max(total - boundaries + 1, boundaries + 1); i <= total; i++) {
        if (i > boundaries) {
          items.push(i);
        }
      }

      return items;
    }, [total, page, siblings, boundaries]);

    const handlePageChange = (newPage: number) => {
      if (newPage < 1 || newPage > total) {
        if (!loop) return;
        newPage = newPage < 1 ? total : 1;
      }
      onChange?.(newPage);
    };

    if (isCompact) {
      return (
        <nav
          ref={ref}
          className={cn(styles.base(), className)}
          aria-label="Pagination"
          {...props}
        >
          {showControls && (
            <button
              type="button"
              className={cn(
                styles.nav(),
                paginationVariants({ variant, size, isDisabled: page === 1 && !loop }).nav()
              )}
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1 && !loop}
              aria-label="Previous page"
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </button>
          )}
          <span className="px-3 text-sm text-gray-600 dark:text-gray-400">
            Page {page} of {total}
          </span>
          {showControls && (
            <button
              type="button"
              className={cn(
                styles.nav(),
                paginationVariants({ variant, size, isDisabled: page === total && !loop }).nav()
              )}
              onClick={() => handlePageChange(page + 1)}
              disabled={page === total && !loop}
              aria-label="Next page"
            >
              <ChevronRightIcon className="w-5 h-5" />
            </button>
          )}
        </nav>
      );
    }

    return (
      <nav
        ref={ref}
        className={cn(styles.base(), className)}
        aria-label="Pagination"
        {...props}
      >
        {showJumpControls && (
          <button
            type="button"
            className={cn(
              styles.nav(),
              paginationVariants({ variant, size, isDisabled: page === 1 && !loop }).nav()
            )}
            onClick={() => handlePageChange(1)}
            disabled={page === 1 && !loop}
            aria-label="First page"
          >
            <ChevronDoubleLeftIcon className="w-5 h-5" />
          </button>
        )}
        {showControls && (
          <button
            type="button"
            className={cn(
              styles.nav(),
              paginationVariants({ variant, size, isDisabled: page === 1 && !loop }).nav()
            )}
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1 && !loop}
            aria-label="Previous page"
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </button>
        )}
        {range.map((item, index) => {
          if (typeof item === "string") {
            return (
              <span key={item} className={styles.ellipsis()}>
                •••
              </span>
            );
          }

          const isActive = item === page;
          const itemStyles = paginationVariants({ variant, size, isActive });

          return (
            <button
              key={item}
              type="button"
              className={itemStyles.item()}
              onClick={() => handlePageChange(item)}
              aria-label={`Go to page ${item}`}
              aria-current={isActive ? "page" : undefined}
            >
              {renderItem ? renderItem(item) : item}
            </button>
          );
        })}
        {showControls && (
          <button
            type="button"
            className={cn(
              styles.nav(),
              paginationVariants({ variant, size, isDisabled: page === total && !loop }).nav()
            )}
            onClick={() => handlePageChange(page + 1)}
            disabled={page === total && !loop}
            aria-label="Next page"
          >
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        )}
        {showJumpControls && (
          <button
            type="button"
            className={cn(
              styles.nav(),
              paginationVariants({ variant, size, isDisabled: page === total && !loop }).nav()
            )}
            onClick={() => handlePageChange(total)}
            disabled={page === total && !loop}
            aria-label="Last page"
          >
            <ChevronDoubleRightIcon className="w-5 h-5" />
          </button>
        )}
      </nav>
    );
  }
);

NHPagination.displayName = "NHPagination";