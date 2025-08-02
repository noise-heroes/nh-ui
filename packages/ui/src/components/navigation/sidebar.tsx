"use client";

import React, { forwardRef, useState } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "../../utils/cn";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

const sidebarVariants = tv({
  slots: {
    base: "flex flex-col h-full",
    header: "px-4 py-3 border-b border-gray-200 dark:border-gray-700",
    content: "flex-1 overflow-y-auto py-2",
    footer: "px-4 py-3 border-t border-gray-200 dark:border-gray-700",
    section: "mb-6",
    sectionTitle: "px-4 py-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400",
    item: "relative",
    itemContent: "flex items-center gap-3 px-4 py-2 rounded-md transition-all duration-200 cursor-pointer",
    itemIcon: "flex-shrink-0",
    itemLabel: "flex-1",
    itemBadge: "text-xs font-medium px-2 py-0.5 rounded-full",
    itemArrow: "transition-transform duration-200",
    subItems: "mt-1 ml-4 pl-4 border-l border-gray-200 dark:border-gray-700",
  },
  variants: {
    variant: {
      default: {
        base: "bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700",
        itemContent: "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300",
      },
      elevated: {
        base: "bg-white dark:bg-gray-900 shadow-lg",
        itemContent: "hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300",
      },
      flat: {
        base: "bg-gray-50 dark:bg-gray-950",
        itemContent: "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300",
      },
    },
    width: {
      xs: { base: "w-48" },
      sm: { base: "w-56" },
      md: { base: "w-64" },
      lg: { base: "w-72" },
      xl: { base: "w-80" },
    },
    isCollapsed: {
      true: {
        base: "w-16",
        itemLabel: "hidden",
        itemBadge: "hidden",
        sectionTitle: "hidden",
        itemArrow: "hidden",
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
        itemContent: "bg-orange-50 text-orange-600 font-medium dark:bg-orange-900/20 dark:text-orange-400",
      },
    },
    {
      variant: "elevated",
      isActive: true,
      class: {
        itemContent: "bg-orange-50 text-orange-600 font-medium dark:bg-orange-900/20 dark:text-orange-400",
      },
    },
    {
      variant: "flat",
      isActive: true,
      class: {
        itemContent: "bg-orange-100 text-orange-600 font-medium dark:bg-orange-900/30 dark:text-orange-400",
      },
    },
  ],
  defaultVariants: {
    variant: "default",
    width: "md",
  },
});

export interface SidebarItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  badge?: string | number;
  badgeColor?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
  href?: string;
  onClick?: () => void;
  isActive?: boolean;
  isDisabled?: boolean;
  subItems?: SidebarItem[];
}

export interface SidebarSection {
  id: string;
  title?: string;
  items: SidebarItem[];
}

export interface NHSidebarProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "children">,
    VariantProps<typeof sidebarVariants> {
  sections: SidebarSection[];
  activeId?: string;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  onItemClick?: (item: SidebarItem) => void;
  defaultExpanded?: string[];
  allowMultipleExpanded?: boolean;
}

export const NHSidebar = forwardRef<HTMLElement, NHSidebarProps>(
  (
    {
      sections,
      activeId,
      header,
      footer,
      onItemClick,
      defaultExpanded = [],
      allowMultipleExpanded = true,
      className,
      variant,
      width,
      isCollapsed,
      ...props
    },
    ref
  ) => {
    const [expandedItems, setExpandedItems] = useState<string[]>(defaultExpanded);
    const styles = sidebarVariants({ variant, width, isCollapsed });

    const badgeColors = {
      default: "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300",
      primary: "bg-orange-100 text-orange-700 dark:bg-orange-900/50 dark:text-orange-300",
      secondary: "bg-teal-100 text-teal-700 dark:bg-teal-900/50 dark:text-teal-300",
      success: "bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300",
      warning: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-300",
      danger: "bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300",
    };

    const toggleExpanded = (itemId: string) => {
      if (isCollapsed) return;
      
      setExpandedItems((prev) => {
        const isExpanded = prev.includes(itemId);
        if (isExpanded) {
          return prev.filter((id) => id !== itemId);
        } else {
          return allowMultipleExpanded ? [...prev, itemId] : [itemId];
        }
      });
    };

    const handleItemClick = (item: SidebarItem) => {
      if (item.isDisabled) return;
      
      if (item.subItems && item.subItems.length > 0) {
        toggleExpanded(item.id);
      } else {
        item.onClick?.();
        onItemClick?.(item);
      }
    };

    const renderItem = (item: SidebarItem, level = 0) => {
      const isActive = item.isActive ?? activeId === item.id;
      const hasSubItems = item.subItems && item.subItems.length > 0;
      const isExpanded = expandedItems.includes(item.id);
      const itemStyles = sidebarVariants({ variant, width, isCollapsed, isActive });

      return (
        <div key={item.id} className={styles.item()}>
          <div
            className={cn(
              itemStyles.itemContent(),
              item.isDisabled && "opacity-50 cursor-not-allowed",
              level > 0 && "py-1.5 text-sm"
            )}
            onClick={() => handleItemClick(item)}
            role="button"
            tabIndex={item.isDisabled ? -1 : 0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleItemClick(item);
              }
            }}
          >
            {item.icon && (
              <span className={cn(styles.itemIcon(), level > 0 && "w-4 h-4")}>
                {item.icon}
              </span>
            )}
            <span className={styles.itemLabel()}>{item.label}</span>
            {item.badge !== undefined && !isCollapsed && (
              <span
                className={cn(
                  styles.itemBadge(),
                  badgeColors[item.badgeColor || "default"]
                )}
              >
                {item.badge}
              </span>
            )}
            {hasSubItems && !isCollapsed && (
              <span className={cn(styles.itemArrow(), isExpanded && "rotate-90")}>
                <ChevronRightIcon className="w-4 h-4" />
              </span>
            )}
          </div>
          
          {hasSubItems && !isCollapsed && (
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className={styles.subItems()}
                >
                  {item.subItems!.map((subItem) => renderItem(subItem, level + 1))}
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </div>
      );
    };

    return (
      <aside
        ref={ref}
        className={cn(styles.base(), className)}
        {...props}
      >
        {header && <div className={styles.header()}>{header}</div>}
        
        <div className={styles.content()}>
          {sections.map((section) => (
            <div key={section.id} className={styles.section()}>
              {section.title && !isCollapsed && (
                <h3 className={styles.sectionTitle()}>{section.title}</h3>
              )}
              {section.items.map((item) => renderItem(item))}
            </div>
          ))}
        </div>
        
        {footer && <div className={styles.footer()}>{footer}</div>}
      </aside>
    );
  }
);

NHSidebar.displayName = "NHSidebar";