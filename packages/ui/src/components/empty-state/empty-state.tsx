"use client";

import React, { forwardRef } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { clsx } from "clsx";
import { NHButton } from "../button";
import { IconWrapper } from "../utils/icon-wrapper";
import {
  DocumentTextIcon,
  FolderIcon,
  MagnifyingGlassIcon,
  InboxIcon,
  PhotoIcon,
  UserGroupIcon,
  CalendarIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

const emptyStateVariants = tv({
  slots: {
    base: "flex flex-col items-center justify-center text-center",
    iconWrapper: "mb-4",
    icon: "mx-auto text-gray-400 dark:text-gray-600",
    content: "space-y-2",
    title: "text-lg font-semibold text-gray-900 dark:text-gray-100",
    description: "text-sm text-gray-600 dark:text-gray-400 max-w-sm",
    actions: "mt-6 flex flex-col sm:flex-row gap-3",
  },
  variants: {
    size: {
      sm: {
        base: "py-8",
        icon: "w-10 h-10",
        title: "text-base",
        description: "text-xs",
      },
      md: {
        base: "py-12",
        icon: "w-12 h-12",
        title: "text-lg",
        description: "text-sm",
      },
      lg: {
        base: "py-16",
        icon: "w-16 h-16",
        title: "text-xl",
        description: "text-base",
      },
    },
    variant: {
      default: {},
      bordered: {
        base: "border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg",
      },
      subtle: {
        base: "bg-gray-50 dark:bg-gray-900/50 rounded-lg",
      },
    },
  },
  defaultVariants: {
    size: "md",
    variant: "default",
  },
});

const iconMap = {
  default: InboxIcon,
  search: MagnifyingGlassIcon,
  document: DocumentTextIcon,
  folder: FolderIcon,
  image: PhotoIcon,
  users: UserGroupIcon,
  calendar: CalendarIcon,
  chart: ChartBarIcon,
};

export interface EmptyStateAction {
  label: string;
  onClick: () => void;
  variant?: "solid" | "bordered" | "light" | "flat";
  color?: "primary" | "secondary" | "default";
}

export interface NHEmptyStateProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof emptyStateVariants> {
  title: string;
  description?: string;
  icon?: React.ReactNode | keyof typeof iconMap;
  actions?: EmptyStateAction[];
  image?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
}

export const NHEmptyState = forwardRef<HTMLDivElement, NHEmptyStateProps>(
  (
    {
      className,
      size,
      variant,
      title,
      description,
      icon = "default",
      actions,
      image,
      ...props
    },
    ref
  ) => {
    const styles = emptyStateVariants({ size, variant });

    const renderIcon = () => {
      if (React.isValidElement(icon)) {
        return icon;
      }

      if (typeof icon === "string" && icon in iconMap) {
        const Icon = iconMap[icon as keyof typeof iconMap];
        return <IconWrapper icon={Icon} className={styles.icon()} />;
      }

      return <IconWrapper icon={InboxIcon} className={styles.icon()} />;
    };

    return (
      <div
        ref={ref}
        className={clsx(styles.base(), className)}
        role="status"
        aria-label="Empty state"
        {...props}
      >
        {image ? (
          <div className={styles.iconWrapper()}>
            <img
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="mx-auto"
            />
          </div>
        ) : (
          <div className={styles.iconWrapper()}>{renderIcon()}</div>
        )}

        <div className={styles.content()}>
          <h3 className={styles.title()}>{title}</h3>
          {description && (
            <p className={styles.description()}>{description}</p>
          )}
        </div>

        {actions && actions.length > 0 && (
          <div className={styles.actions()}>
            {actions.map((action, index) => (
              <NHButton
                key={index}
                variant={action.variant || (index === 0 ? "solid" : "flat")}
                color={action.color || (index === 0 ? "primary" : "default")}
                onPress={action.onClick}
              >
                {action.label}
              </NHButton>
            ))}
          </div>
        )}
      </div>
    );
  }
);

NHEmptyState.displayName = "NHEmptyState";