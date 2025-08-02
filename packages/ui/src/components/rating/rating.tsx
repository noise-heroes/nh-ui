"use client";

import { forwardRef, useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import { StarIcon as StarOutlineIcon } from "@heroicons/react/24/outline";
import { cn } from "../../utils/cn";

export interface NHRatingProps {
  /**
   * Current rating value
   */
  value?: number;
  
  /**
   * Default rating value
   */
  defaultValue?: number;
  
  /**
   * Callback when rating changes
   */
  onChange?: (value: number) => void;
  
  /**
   * Maximum rating value
   * @default 5
   */
  max?: number;
  
  /**
   * Whether to allow half ratings
   * @default false
   */
  allowHalf?: boolean;
  
  /**
   * Whether the rating is disabled
   */
  isDisabled?: boolean;
  
  /**
   * Whether the rating is read-only
   */
  isReadOnly?: boolean;
  
  /**
   * Size of the stars
   * @default "md"
   */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  
  /**
   * Color of the stars
   * @default "warning"
   */
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  
  /**
   * Custom filled icon
   */
  filledIcon?: React.ReactNode;
  
  /**
   * Custom empty icon
   */
  emptyIcon?: React.ReactNode;
  
  /**
   * Whether to show the rating value as text
   * @default false
   */
  showValue?: boolean;
  
  /**
   * Custom value formatter
   */
  valueFormatter?: (value: number) => string;
  
  /**
   * Whether stars have a subtle glow effect when hovered
   */
  hasGlow?: boolean;
  
  /**
   * Custom class name
   */
  className?: string;
}

export const NHRating = forwardRef<HTMLDivElement, NHRatingProps>(
  ({ 
    value,
    defaultValue = 0,
    onChange,
    max = 5,
    allowHalf = false,
    isDisabled,
    isReadOnly,
    size = 'md',
    color = 'warning',
    filledIcon,
    emptyIcon,
    showValue = false,
    valueFormatter,
    hasGlow,
    className,
  }, ref) => {
    const [rating, setRating] = useState(value ?? defaultValue);
    const [hoverRating, setHoverRating] = useState<number | null>(null);
    
    const effectiveRating = value ?? rating;
    const displayRating = hoverRating ?? effectiveRating;
    
    // Size classes
    const sizeClasses = {
      sm: 'w-4 h-4',
      md: 'w-5 h-5',
      lg: 'w-6 h-6',
      xl: 'w-8 h-8',
    };
    
    // Color classes
    const colorClasses = {
      default: 'text-default-500',
      primary: 'text-primary',
      secondary: 'text-secondary',
      success: 'text-success',
      warning: 'text-warning',
      danger: 'text-danger',
    };
    
    // Handle rating change
    const handleRatingChange = (newRating: number) => {
      if (isDisabled || isReadOnly) return;
      
      setRating(newRating);
      onChange?.(newRating);
    };
    
    // Handle mouse events
    const handleMouseEnter = (index: number, isHalf: boolean) => {
      if (isDisabled || isReadOnly) return;
      
      const newRating = allowHalf && isHalf ? index + 0.5 : index + 1;
      setHoverRating(newRating);
    };
    
    const handleMouseLeave = () => {
      setHoverRating(null);
    };
    
    // Handle click
    const handleClick = (index: number, isHalf: boolean) => {
      const newRating = allowHalf && isHalf ? index + 0.5 : index + 1;
      handleRatingChange(newRating);
    };
    
    // Format value for display
    const formatValue = (val: number) => {
      if (valueFormatter) return valueFormatter(val);
      return allowHalf ? val.toFixed(1) : val.toString();
    };
    
    // Render star
    const renderStar = (index: number) => {
      const filled = displayRating > index;
      const halfFilled = allowHalf && displayRating > index && displayRating < index + 1;
      
      const starClasses = cn(
        sizeClasses[size],
        colorClasses[color],
        "transition-all duration-200",
        !isDisabled && !isReadOnly && "cursor-pointer",
        !isDisabled && !isReadOnly && hasGlow && "hover:drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]",
        isDisabled && "opacity-50 cursor-not-allowed"
      );
      
      if (allowHalf) {
        return (
          <div key={index} className="relative">
            {/* Left half */}
            <div
              className="absolute inset-0 w-1/2 overflow-hidden"
              onMouseEnter={() => handleMouseEnter(index, true)}
              onClick={() => handleClick(index, true)}
            >
              {(halfFilled || (displayRating > index + 0.5)) ? 
                (filledIcon || <StarIcon className={starClasses} aria-hidden="true" />) :
                (emptyIcon || <StarOutlineIcon className={starClasses} aria-hidden="true" />)
              }
            </div>
            
            {/* Right half */}
            <div
              className="absolute inset-0 left-1/2 w-1/2 overflow-hidden"
              onMouseEnter={() => handleMouseEnter(index, false)}
              onClick={() => handleClick(index, false)}
            >
              <div className="-translate-x-1/2">
                {filled && !halfFilled ? 
                  (filledIcon || <StarIcon className={starClasses} aria-hidden="true" />) :
                  (emptyIcon || <StarOutlineIcon className={starClasses} aria-hidden="true" />)
                }
              </div>
            </div>
            
            {/* Full star for display */}
            <div className="opacity-0 pointer-events-none">
              <StarIcon className={sizeClasses[size]} aria-hidden="true" />
            </div>
          </div>
        );
      }
      
      return (
        <button
          key={index}
          type="button"
          disabled={isDisabled || isReadOnly}
          onMouseEnter={() => handleMouseEnter(index, false)}
          onClick={() => handleClick(index, false)}
          className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
        >
          {filled ? 
            (filledIcon || <StarIcon className={starClasses} aria-hidden="true" />) :
            (emptyIcon || <StarOutlineIcon className={starClasses} aria-hidden="true" />)
          }
        </button>
      );
    };
    
    return (
      <div
        ref={ref}
        className={cn("flex items-center gap-1", className)}
        onMouseLeave={handleMouseLeave}
      >
        {Array.from({ length: max }, (_, index) => renderStar(index))}
        
        {showValue && (
          <span className={cn(
            "ml-2 text-default-600",
            size === 'sm' && "text-sm",
            size === 'md' && "text-base",
            size === 'lg' && "text-lg",
            size === 'xl' && "text-xl"
          )}>
            {formatValue(effectiveRating)}
          </span>
        )}
      </div>
    );
  }
);

NHRating.displayName = "NHRating";