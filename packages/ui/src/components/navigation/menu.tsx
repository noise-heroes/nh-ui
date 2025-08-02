"use client";

import React, { forwardRef } from "react";
import { Menu as HeadlessMenu, Transition } from "@headlessui/react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "../../utils/cn";
import { Fragment } from "react";

const menuVariants = tv({
  slots: {
    trigger: "inline-flex items-center justify-center rounded-md transition-colors duration-200",
    content: "absolute right-0 mt-2 origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50",
    item: "group flex w-full items-center rounded-md px-3 py-2 text-sm transition-colors duration-200",
    label: "ml-3",
    icon: "mr-3 flex-shrink-0",
    divider: "my-1 h-px",
    section: "py-1",
    sectionTitle: "px-3 py-2 text-xs font-semibold uppercase tracking-wider",
  },
  variants: {
    variant: {
      default: {
        trigger: "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100",
        content: "bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700",
        item: "text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-100",
        divider: "bg-gray-200 dark:bg-gray-700",
        sectionTitle: "text-gray-500 dark:text-gray-400",
      },
      solid: {
        trigger: "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700",
        content: "bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700",
        item: "text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-100",
        divider: "bg-gray-200 dark:bg-gray-700",
        sectionTitle: "text-gray-500 dark:text-gray-400",
      },
    },
    size: {
      sm: {
        trigger: "px-2.5 py-1.5 text-sm",
        content: "w-48",
        item: "px-2 py-1.5 text-xs",
        icon: "h-4 w-4",
      },
      md: {
        trigger: "px-3 py-2 text-base",
        content: "w-56",
        item: "px-3 py-2 text-sm",
        icon: "h-5 w-5",
      },
      lg: {
        trigger: "px-4 py-2.5 text-lg",
        content: "w-64",
        item: "px-4 py-2.5 text-base",
        icon: "h-6 w-6",
      },
    },
    isActive: {
      true: {},
    },
    isDisabled: {
      true: {
        item: "opacity-50 cursor-not-allowed",
      },
    },
    isDestructive: {
      true: {
        item: "text-red-600 hover:bg-red-50 hover:text-red-700 dark:text-red-400 dark:hover:bg-red-900/20 dark:hover:text-red-300",
      },
    },
  },
  compoundVariants: [
    {
      variant: "default",
      isActive: true,
      class: {
        item: "bg-orange-50 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400",
      },
    },
  ],
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

export interface MenuItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  href?: string;
  isActive?: boolean;
  isDisabled?: boolean;
  isDestructive?: boolean;
}

export interface MenuSection {
  id: string;
  title?: string;
  items: MenuItem[];
}

export interface NHMenuProps extends VariantProps<typeof menuVariants> {
  trigger: React.ReactNode;
  sections?: MenuSection[];
  items?: MenuItem[];
  align?: "left" | "right";
  className?: string;
  contentClassName?: string;
  onItemClick?: (item: MenuItem) => void;
}

export const NHMenu = forwardRef<HTMLDivElement, NHMenuProps>(
  (
    {
      trigger,
      sections,
      items,
      align = "right",
      className,
      contentClassName,
      variant,
      size,
      onItemClick,
    },
    ref
  ) => {
    const styles = menuVariants({ variant, size });

    const handleItemClick = (item: MenuItem) => {
      if (item.isDisabled) return;
      item.onClick?.();
      onItemClick?.(item);
    };

    const renderMenuItem = (item: MenuItem) => {
      const itemStyles = menuVariants({
        variant,
        size,
        isActive: item.isActive,
        isDisabled: item.isDisabled,
        isDestructive: item.isDestructive,
      });

      const content = (
        <>
          {item.icon && <span className={styles.icon()}>{item.icon}</span>}
          <span className={styles.label()}>{item.label}</span>
        </>
      );

      return (
        <HeadlessMenu.Item key={item.id} disabled={item.isDisabled}>
          {({ active }) =>
            item.href ? (
              <a
                href={item.href}
                className={cn(
                  itemStyles.item(),
                  active && !item.isActive && "bg-gray-100 dark:bg-gray-800"
                )}
                onClick={() => handleItemClick(item)}
              >
                {content}
              </a>
            ) : (
              <button
                type="button"
                className={cn(
                  itemStyles.item(),
                  active && !item.isActive && "bg-gray-100 dark:bg-gray-800"
                )}
                onClick={() => handleItemClick(item)}
              >
                {content}
              </button>
            )
          }
        </HeadlessMenu.Item>
      );
    };

    const menuSections = sections || (items ? [{ id: "default", items }] : []);

    return (
      <HeadlessMenu as="div" className={cn("relative inline-block text-left", className)} ref={ref}>
        <HeadlessMenu.Button className={styles.trigger()}>
          {trigger}
        </HeadlessMenu.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <HeadlessMenu.Items
            className={cn(
              styles.content(),
              align === "left" && "left-0",
              align === "right" && "right-0",
              contentClassName
            )}
          >
            {menuSections.map((section, sectionIndex) => (
              <div key={section.id}>
                {sectionIndex > 0 && <div className={styles.divider()} />}
                <div className={styles.section()}>
                  {section.title && (
                    <div className={styles.sectionTitle()}>{section.title}</div>
                  )}
                  {section.items.map(renderMenuItem)}
                </div>
              </div>
            ))}
          </HeadlessMenu.Items>
        </Transition>
      </HeadlessMenu>
    );
  }
);

NHMenu.displayName = "NHMenu";