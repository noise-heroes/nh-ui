"use client";

import { forwardRef, useState } from "react";
import { NHInput } from "../input";
import { ClockIcon } from "@heroicons/react/24/outline";
import { IconWrapper } from "../utils/icon-wrapper";
import { cn } from "../../utils/cn";

export interface NHTimePickerProps {
  /**
   * The selected time value
   */
  value?: string | null;
  
  /**
   * Callback when time changes
   */
  onChange?: (time: string | null) => void;
  
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
   * Time format (12 or 24 hour)
   * @default "12"
   */
  hourFormat?: '12' | '24';
  
  /**
   * Minute step interval
   * @default 1
   */
  minuteStep?: number;
  
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

export const NHTimePicker = forwardRef<HTMLInputElement, NHTimePickerProps>(
  ({ 
    value,
    onChange,
    label,
    placeholder = "Select time",
    isDisabled,
    isReadOnly,
    isRequired,
    hourFormat = '12',
    minuteStep = 1,
    variant = 'bordered',
    color = 'default',
    radius = 'md',
    hasGlow,
    errorMessage,
    description,
    className,
  }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    
    // Format time for display
    const formatTime = (time: string | null | undefined) => {
      if (!time) return '';
      
      const [hours, minutes] = time.split(':').map(Number);
      
      if (hourFormat === '12') {
        const period = hours >= 12 ? 'PM' : 'AM';
        const displayHours = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours;
        return `${displayHours}:${String(minutes).padStart(2, '0')} ${period}`;
      }
      
      return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
    };
    
    // Parse time from input
    const parseTime = (input: string) => {
      const timeRegex12 = /^(\d{1,2}):(\d{2})\s*(AM|PM)$/i;
      const timeRegex24 = /^(\d{1,2}):(\d{2})$/;
      
      if (hourFormat === '12') {
        const match = input.match(timeRegex12);
        if (match) {
          let hours = parseInt(match[1], 10);
          const minutes = parseInt(match[2], 10);
          const period = match[3].toUpperCase();
          
          if (hours >= 1 && hours <= 12 && minutes >= 0 && minutes <= 59) {
            if (period === 'PM' && hours !== 12) hours += 12;
            if (period === 'AM' && hours === 12) hours = 0;
            
            return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
          }
        }
      } else {
        const match = input.match(timeRegex24);
        if (match) {
          const hours = parseInt(match[1], 10);
          const minutes = parseInt(match[2], 10);
          
          if (hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59) {
            return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
          }
        }
      }
      
      return null;
    };
    
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;
      const parsed = parseTime(inputValue);
      if (parsed !== null || inputValue === '') {
        onChange?.(parsed);
      }
    };
    
    return (
      <div className={cn("relative", className)}>
        <NHInput
          ref={ref}
          label={label}
          placeholder={placeholder}
          value={formatTime(value)}
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
            <IconWrapper icon={ClockIcon} className="w-5 h-5 text-default-400 cursor-pointer hover:text-default-600 transition-colors" aria-hidden="true" />
          }
        />
        
        {/* Time selector popup would go here - for production, integrate with a proper time selector */}
        {isOpen && (
          <div className="absolute top-full mt-2 z-50">
            {/* Time selector component */}
          </div>
        )}
      </div>
    );
  }
);

NHTimePicker.displayName = "NHTimePicker";