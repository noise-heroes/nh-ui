"use client";

import React, { forwardRef, useState, useRef, KeyboardEvent } from "react";
import { cn } from "../../utils/cn";

export interface NHPinInputProps {
  /**
   * Number of input fields
   * @default 4
   */
  length?: number;
  
  /**
   * The pin value
   */
  value?: string;
  
  /**
   * Callback when pin changes
   */
  onChange?: (value: string) => void;
  
  /**
   * Callback when pin is complete
   */
  onComplete?: (value: string) => void;
  
  /**
   * Whether the input is disabled
   */
  isDisabled?: boolean;
  
  /**
   * Whether to mask the input (for passwords)
   * @default false
   */
  isMasked?: boolean;
  
  /**
   * Input type
   * @default "numeric"
   */
  type?: 'numeric' | 'alphanumeric';
  
  /**
   * The input variant
   * @default "bordered"
   */
  variant?: 'flat' | 'bordered' | 'underlined' | 'faded';
  
  /**
   * The input color theme
   * @default "default"
   */
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  
  /**
   * The input radius
   * @default "md"
   */
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  
  /**
   * Size of input fields
   * @default "md"
   */
  size?: 'sm' | 'md' | 'lg';
  
  /**
   * Whether inputs have a subtle glow effect when focused
   */
  hasGlow?: boolean;
  
  /**
   * Error state
   */
  isInvalid?: boolean;
  
  /**
   * Auto focus on first input
   * @default true
   */
  autoFocus?: boolean;
  
  /**
   * Custom class name
   */
  className?: string;
}

export const NHPinInput = forwardRef<HTMLDivElement, NHPinInputProps>(
  ({ 
    length = 4,
    value = '',
    onChange,
    onComplete,
    isDisabled,
    isMasked = false,
    type = 'numeric',
    variant = 'bordered',
    color = 'default',
    radius = 'md',
    size = 'md',
    hasGlow,
    isInvalid,
    autoFocus = true,
    className,
  }, ref) => {
    const [pinValues, setPinValues] = useState<string[]>(
      value ? value.split('').slice(0, length) : Array(length).fill('')
    );
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
    
    // Update pin values when value prop changes
    React.useEffect(() => {
      if (value !== undefined) {
        setPinValues(value.split('').slice(0, length).concat(Array(length).fill('')).slice(0, length));
      }
    }, [value, length]);
    
    // Handle input change
    const handleChange = (index: number, newValue: string) => {
      if (isDisabled) return;
      
      // Validate input based on type
      if (type === 'numeric' && !/^\d*$/.test(newValue)) return;
      if (type === 'alphanumeric' && !/^[a-zA-Z0-9]*$/.test(newValue)) return;
      
      const lastChar = newValue.slice(-1);
      const newPinValues = [...pinValues];
      newPinValues[index] = lastChar;
      
      setPinValues(newPinValues);
      const completePin = newPinValues.join('');
      onChange?.(completePin);
      
      // Move to next input if value is entered
      if (lastChar && index < length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
      
      // Check if pin is complete
      if (newPinValues.every(v => v !== '') && newPinValues.length === length) {
        onComplete?.(completePin);
      }
    };
    
    // Handle key down
    const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
      if (isDisabled) return;
      
      // Handle backspace
      if (e.key === 'Backspace' && !pinValues[index] && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
      
      // Handle arrow keys
      if (e.key === 'ArrowLeft' && index > 0) {
        e.preventDefault();
        inputRefs.current[index - 1]?.focus();
      }
      if (e.key === 'ArrowRight' && index < length - 1) {
        e.preventDefault();
        inputRefs.current[index + 1]?.focus();
      }
    };
    
    // Handle paste
    const handlePaste = (e: React.ClipboardEvent) => {
      if (isDisabled) return;
      
      e.preventDefault();
      const pastedData = e.clipboardData.getData('text/plain').slice(0, length);
      
      // Validate pasted data
      if (type === 'numeric' && !/^\d*$/.test(pastedData)) return;
      if (type === 'alphanumeric' && !/^[a-zA-Z0-9]*$/.test(pastedData)) return;
      
      const newPinValues = pastedData.split('').concat(Array(length).fill('')).slice(0, length);
      setPinValues(newPinValues);
      
      const completePin = newPinValues.join('');
      onChange?.(completePin);
      
      // Focus last filled input or last input
      const lastFilledIndex = newPinValues.findLastIndex(v => v !== '');
      const focusIndex = lastFilledIndex < length - 1 ? lastFilledIndex + 1 : length - 1;
      inputRefs.current[focusIndex]?.focus();
      
      // Check if pin is complete
      if (newPinValues.every(v => v !== '') && newPinValues.length === length) {
        onComplete?.(completePin);
      }
    };
    
    // Size classes
    const sizeClasses = {
      sm: 'w-10 h-10 text-sm',
      md: 'w-12 h-12 text-base',
      lg: 'w-14 h-14 text-lg',
    };
    
    // Base input classes
    const baseInputClasses = cn(
      "text-center font-medium transition-all duration-200",
      "focus:outline-none focus:ring-2 focus:ring-offset-2",
      sizeClasses[size],
      {
        'bg-default-100': variant === 'flat',
        'border-2': variant === 'bordered',
        'border-b-2 border-t-0 border-x-0 rounded-none': variant === 'underlined',
        'bg-default-100/50': variant === 'faded',
      },
      {
        'rounded-none': radius === 'none',
        'rounded-small': radius === 'sm',
        'rounded-medium': radius === 'md',
        'rounded-large': radius === 'lg',
        'rounded-full': radius === 'full',
      },
      {
        'border-default-300 focus:border-primary': !isInvalid && variant === 'bordered',
        'border-danger focus:border-danger': isInvalid,
        'focus:ring-primary': !isInvalid && color === 'primary',
        'focus:ring-danger': isInvalid,
      },
      hasGlow && "focus:shadow-[0_0_20px_rgba(251,146,60,0.3)]",
      isDisabled && "opacity-50 cursor-not-allowed"
    );
    
    return (
      <div
        ref={ref}
        className={cn("flex gap-2", className)}
      >
        {Array.from({ length }, (_, index) => (
          <input
            key={index}
            ref={el => {
              if (el) inputRefs.current[index] = el;
            }}
            type="text"
            inputMode={type === 'numeric' ? 'numeric' : 'text'}
            value={isMasked && pinValues[index] ? '•' : pinValues[index]}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onPaste={index === 0 ? handlePaste : undefined}
            disabled={isDisabled}
            autoFocus={autoFocus && index === 0}
            maxLength={1}
            className={baseInputClasses}
          />
        ))}
      </div>
    );
  }
);

NHPinInput.displayName = "NHPinInput";