"use client";

import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import { tv, type VariantProps } from "tailwind-variants";
import { clsx } from "clsx";
import { NHAvatar } from "../index";
import { formatDistanceToNow } from "./utils";

const notificationVariants = tv({
  slots: {
    base: "flex gap-3 p-4 rounded-lg transition-all duration-200 cursor-pointer",
    avatar: "",
    content: "flex-1 min-w-0",
    header: "flex items-start justify-between gap-2",
    title: "font-medium text-sm text-gray-900 dark:text-gray-100",
    time: "text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap",
    description: "text-sm text-gray-600 dark:text-gray-400 mt-1",
    actions: "flex gap-2 mt-3",
    actionButton: "text-sm font-medium",
    dot: "absolute top-0 right-0 w-2 h-2 rounded-full",
  },
  variants: {
    variant: {
      default: {
        base: "hover:bg-gray-50 dark:hover:bg-gray-800/50",
      },
      elevated: {
        base: "bg-white dark:bg-gray-900 shadow-sm hover:shadow-md border border-gray-200 dark:border-gray-700",
      },
    },
    isRead: {
      false: {
        base: "bg-blue-50/50 dark:bg-blue-900/10",
        title: "font-semibold",
        dot: "bg-blue-500",
      },
      true: {
        dot: "hidden",
      },
    },
    actionColor: {
      primary: {
        actionButton: "text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300",
      },
      secondary: {
        actionButton: "text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300",
      },
      default: {
        actionButton: "text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300",
      },
    },
  },
  defaultVariants: {
    variant: "default",
    isRead: false,
    actionColor: "primary",
  },
});

export interface NotificationAction {
  label: string;
  onClick: () => void;
  color?: "primary" | "secondary" | "default";
}

export interface NHNotificationProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title">,
    VariantProps<typeof notificationVariants> {
  avatar?: {
    src?: string;
    name?: string;
    fallback?: string;
  };
  title: React.ReactNode;
  description?: React.ReactNode;
  time?: Date | string;
  actions?: NotificationAction[];
  showDot?: boolean;
  onRead?: () => void;
}

export const NHNotification = forwardRef<HTMLDivElement, NHNotificationProps>(
  (
    {
      className,
      variant,
      isRead,
      avatar,
      title,
      description,
      time,
      actions,
      showDot = true,
      onRead,
      onClick,
      actionColor,
      ...props
    },
    ref
  ) => {
    const styles = notificationVariants({ variant, isRead, actionColor });
    
    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!isRead && onRead) {
        onRead();
      }
      onClick?.(e);
    };

    const formattedTime = time
      ? typeof time === "string"
        ? time
        : formatDistanceToNow(time, { addSuffix: true })
      : null;

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
        className={clsx(styles.base(), className)}
        onClick={handleClick}
        role="article"
        aria-label="Notification"
      >
        {avatar && (
          <NHAvatar
            src={avatar.src}
            name={avatar.name}
            fallback={avatar.fallback}
            size="sm"
            className={styles.avatar()}
          />
        )}
        
        <div className={styles.content()}>
          <div className={styles.header()}>
            <h3 className={styles.title()}>{title}</h3>
            <div className="flex items-center gap-2">
              {formattedTime && (
                <time className={styles.time()}>{formattedTime}</time>
              )}
              {showDot && !isRead && <span className={styles.dot()} />}
            </div>
          </div>
          
          {description && (
            <p className={styles.description()}>{description}</p>
          )}
          
          {actions && actions.length > 0 && (
            <div className={styles.actions()}>
              {actions.map((action, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    action.onClick();
                  }}
                  className={notificationVariants({ actionColor: action.color || actionColor }).actionButton()}
                >
                  {action.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    );
  }
);

NHNotification.displayName = "NHNotification";