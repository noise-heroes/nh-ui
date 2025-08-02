"use client";

import { ReactNode, forwardRef } from "react";
import { cn } from "../../utils/cn";
import { Text } from "../text";
import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/24/outline";

export interface NHStatProps {
  label: string;
  value: string | number;
  description?: string;
  trend?: {
    value: number;
    direction: 'up' | 'down';
    label?: string;
  };
  icon?: ReactNode;
  className?: string;
  variant?: 'default' | 'card' | 'minimal';
}

export const NHStat = forwardRef<HTMLDivElement, NHStatProps>(
  ({ label, value, description, trend, icon, className, variant = 'default' }, ref) => {
    const variantClasses = {
      default: 'p-6 bg-default-50 dark:bg-default-100 rounded-lg',
      card: 'p-6 bg-white dark:bg-black border border-default-200 dark:border-default-700 rounded-lg shadow-sm',
      minimal: '',
    };

    const trendColor = trend?.direction === 'up' ? 'text-success' : 'text-danger';
    const TrendIcon = trend?.direction === 'up' ? ArrowUpIcon : ArrowDownIcon;

    return (
      <div
        ref={ref}
        className={cn(
          variantClasses[variant],
          className
        )}
      >
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <Text size="sm" color="muted" className="mb-1">
              {label}
            </Text>
            
            <Text variant="headline" className="mb-2">
              {value}
            </Text>
            
            {description && (
              <Text size="xs" color="muted">
                {description}
              </Text>
            )}
            
            {trend && (
              <div className={cn('flex items-center gap-1 mt-2', trendColor)}>
                <TrendIcon className="h-4 w-4" />
                <Text size="xs" weight="semibold">
                  {trend.value}%
                </Text>
                {trend.label && (
                  <Text size="xs" color="muted">
                    {trend.label}
                  </Text>
                )}
              </div>
            )}
          </div>
          
          {icon && (
            <div className="flex-shrink-0 ml-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                {icon}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
);

NHStat.displayName = "NHStat";

export interface NHStatGroupProps {
  children: ReactNode;
  className?: string;
  cols?: {
    base?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
}

export const NHStatGroup = forwardRef<HTMLDivElement, NHStatGroupProps>(
  ({ children, className, cols = { base: 1, md: 2, lg: 4 } }, ref) => {
    const gridCols = Object.entries(cols)
      .map(([breakpoint, count]) => {
        if (breakpoint === 'base') return `grid-cols-${count}`;
        return `${breakpoint}:grid-cols-${count}`;
      })
      .join(' ');

    return (
      <div
        ref={ref}
        className={cn(
          'grid gap-4',
          gridCols,
          className
        )}
      >
        {children}
      </div>
    );
  }
);

NHStatGroup.displayName = "NHStatGroup";