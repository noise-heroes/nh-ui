"use client";

import { forwardRef, useState } from "react";
import { NHInput } from "../input";
import { CalendarIcon } from "@heroicons/react/24/outline";
import { cn } from "../../utils/cn";

export interface NHDatePickerProps {
  /**
   * The selected date value
   */
  value?: Date | null;
  
  /**
   * Callback when date changes
   */
  onChange?: (date: Date | null) => void;
  
  /**
   * The input label
   */
  label?: string;
  
  /**
   * The input placeholder
   */
  placeholder?: string;
  
  /**
   * Whether the input is disabled
   */
  isDisabled?: boolean;
  
  /**
   * Whether the input is read-only
   */
  isReadOnly?: boolean;
  
  /**
   * Whether the input is required
   */
  isRequired?: boolean;
  
  /**
   * The minimum selectable date
   */
  minDate?: Date;
  
  /**
   * The maximum selectable date
   */
  maxDate?: Date;
  
  /**
   * Date format string
   * @default "MM/DD/YYYY"
   */
  dateFormat?: string;
  
  /**
   * The input variant
   */
  variant?: 'flat' | 'bordered' | 'underlined' | 'faded';
  
  /**
   * The input color theme
   */
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  
  /**
   * The input radius
   */
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  
  /**
   * Whether the input has a subtle glow effect
   */
  hasGlow?: boolean;
  
  /**
   * Error message
   */
  errorMessage?: string;
  
  /**
   * Description text
   */
  description?: string;
  
  /**
   * Custom class name
   */
  className?: string;
}

export const NHDatePicker = forwardRef<HTMLInputElement, NHDatePickerProps>(
  ({ 
    value,
    onChange,
    label,
    placeholder = "Select date",
    isDisabled,
    isReadOnly,
    isRequired,
    minDate,
    maxDate,
    dateFormat = "MM/DD/YYYY",
    variant = 'bordered',
    color = 'default',
    radius = 'md',
    hasGlow,
    errorMessage,
    description,
    className,
  }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    
    // Format date for display
    const formatDate = (date: Date | null | undefined) => {
      if (!date) return '';
      
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const year = date.getFullYear();
      
      return dateFormat
        .replace('MM', month)
        .replace('DD', day)
        .replace('YYYY', String(year))
        .replace('YY', String(year).slice(-2));
    };
    
    // Parse date from input
    const parseDate = (input: string) => {
      // Simple date parsing - in production, use a proper date library
      const parts = input.split(/[\/\-\.]/);
      if (parts.length === 3) {
        const month = parseInt(parts[0], 10);
        const day = parseInt(parts[1], 10);
        const year = parseInt(parts[2], 10);
        
        if (!isNaN(month) && !isNaN(day) && !isNaN(year)) {
          const date = new Date(year < 100 ? 2000 + year : year, month - 1, day);
          
          // Validate date
          if (date.getMonth() === month - 1 && date.getDate() === day) {
            // Check min/max constraints
            if (minDate && date < minDate) return null;
            if (maxDate && date > maxDate) return null;
            
            return date;
          }
        }
      }
      return null;
    };
    
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;
      const parsed = parseDate(inputValue);
      onChange?.(parsed);
    };
    
    return (
      <div className={cn("relative", className)}>
        <NHInput
          ref={ref}
          label={label}
          placeholder={placeholder}
          value={formatDate(value)}
          onChange={handleInputChange}
          isDisabled={isDisabled}
          isReadOnly={isReadOnly}
          isRequired={isRequired}
          variant={variant}
          color={color}
          radius={radius}
          hasGlow={hasGlow}
          errorMessage={errorMessage}
          description={description}
          endContent={
            <CalendarIcon className="w-5 h-5 text-default-400 cursor-pointer hover:text-default-600 transition-colors" aria-hidden="true" />
          }
        />
        
        {/* Calendar popup would go here - for production, integrate with a proper calendar component */}
        {isOpen && (
          <div className="absolute top-full mt-2 z-50">
            {/* Calendar component */}
          </div>
        )}
      </div>
    );
  }
);

NHDatePicker.displayName = "NHDatePicker";