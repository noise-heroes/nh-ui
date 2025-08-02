"use client";

import { ReactNode, forwardRef } from "react";
import { cn } from "../../utils/cn";
import { Text } from "../text";

export interface NHListProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'bordered' | 'divided';
  spacing?: 'none' | 'sm' | 'md' | 'lg';
}

export const NHList = forwardRef<HTMLUListElement, NHListProps>(
  ({ children, className, variant = 'default', spacing = 'md' }, ref) => {
    const spacingClasses = {
      none: '',
      sm: 'space-y-2',
      md: 'space-y-4',
      lg: 'space-y-6',
    };

    const variantClasses = {
      default: '',
      bordered: 'border border-default-200 dark:border-default-700 rounded-lg p-4',
      divided: '[&>li]:border-b [&>li]:border-default-200 dark:[&>li]:border-default-700 [&>li:last-child]:border-0',
    };

    return (
      <ul
        ref={ref}
        className={cn(
          'list-none',
          spacingClasses[spacing],
          variantClasses[variant],
          className
        )}
      >
        {children}
      </ul>
    );
  }
);

NHList.displayName = "NHList";

export interface NHListItemProps {
  children?: ReactNode;
  className?: string;
  icon?: ReactNode;
  title?: string;
  description?: string;
  actions?: ReactNode;
}

export const NHListItem = forwardRef<HTMLLIElement, NHListItemProps>(
  ({ children, className, icon, title, description, actions }, ref) => {
    // Simple content
    if (!title && !description && !icon && !actions) {
      return (
        <li ref={ref} className={cn('', className)}>
          {children}
        </li>
      );
    }

    // Complex content
    return (
      <li ref={ref} className={cn('flex items-start gap-4 p-4', className)}>
        {icon && (
          <div className="flex-shrink-0 mt-1">
            {icon}
          </div>
        )}
        
        <div className="flex-1 min-w-0">
          {title && (
            <Text weight="semibold" className="mb-1">
              {title}
            </Text>
          )}
          {description && (
            <Text size="sm" color="muted" className="mb-2">
              {description}
            </Text>
          )}
          {children}
        </div>
        
        {actions && (
          <div className="flex-shrink-0">
            {actions}
          </div>
        )}
      </li>
    );
  }
);

NHListItem.displayName = "NHListItem";