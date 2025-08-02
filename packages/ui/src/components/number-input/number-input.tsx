"use client";

import { forwardRef, useState } from "react";
import { NHInput, NHInputProps } from "../input";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { cn } from "../../utils/cn";

export interface NHNumberInputProps extends Omit<NHInputProps, 'type' | 'endContent'> {
  /**
   * The minimum value
   */
  min?: number;
  
  /**
   * The maximum value
   */
  max?: number;
  
  /**
   * The step increment/decrement value
   * @default 1
   */
  step?: number;
  
  /**
   * Number of decimal places
   * @default 0
   */
  precision?: number;
  
  /**
   * Whether to show stepper buttons
   * @default true
   */
  showSteppers?: boolean;
  
  /**
   * Whether to format the number with thousand separators
   * @default false
   */
  formatNumber?: boolean;
  
  /**
   * Custom format function
   */
  formatter?: (value: number) => string;
  
  /**
   * Custom parse function
   */
  parser?: (value: string) => number;
  
  /**
   * Stepper position
   * @default "right"
   */
  stepperPosition?: 'right' | 'split';
}

export const NHNumberInput = forwardRef<HTMLInputElement, NHNumberInputProps>(
  ({ 
    value,
    defaultValue,
    onChange,
    min,
    max,
    step = 1,
    precision = 0,
    showSteppers = true,
    formatNumber = false,
    formatter,
    parser,
    stepperPosition = 'right',
    placeholder = "0",
    className,
    isDisabled,
    ...props 
  }, ref) => {
    const [numberValue, setNumberValue] = useState<number>(
      typeof value === 'number' ? value : 
      typeof defaultValue === 'number' ? defaultValue : 0
    );
    
    // Format number for display
    const formatValue = (num: number): string => {
      if (formatter) return formatter(num);
      
      const formatted = num.toFixed(precision);
      
      if (formatNumber) {
        const parts = formatted.split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return parts.join('.');
      }
      
      return formatted;
    };
    
    // Parse input value
    const parseValue = (input: string): number => {
      if (parser) return parser(input);
      
      // Remove thousand separators
      const cleaned = input.replace(/,/g, '');
      const parsed = parseFloat(cleaned);
      
      return isNaN(parsed) ? 0 : parsed;
    };
    
    // Handle value change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;
      const parsed = parseValue(inputValue);
      
      if (!isNaN(parsed)) {
        setNumberValue(parsed);
        // Create synthetic event with number value
        const syntheticEvent = {
          ...e,
          target: { ...e.target, value: inputValue }
        };
        onChange?.(syntheticEvent);
      }
    };
    
    // Handle increment/decrement
    const handleStep = (direction: 'up' | 'down') => {
      if (isDisabled) return;
      
      let newValue = numberValue + (direction === 'up' ? step : -step);
      
      // Apply min/max constraints
      if (min !== undefined && newValue < min) newValue = min;
      if (max !== undefined && newValue > max) newValue = max;
      
      // Apply precision
      newValue = parseFloat(newValue.toFixed(precision));
      
      setNumberValue(newValue);
      
      // Create synthetic event
      const syntheticEvent = {
        target: { value: formatValue(newValue) },
        currentTarget: { value: formatValue(newValue) }
      } as React.ChangeEvent<HTMLInputElement>;
      
      onChange?.(syntheticEvent);
    };
    
    // Stepper buttons
    const stepperButtons = showSteppers && (
      <div className="flex flex-col -my-1 -mr-2">
        <button
          type="button"
          onClick={() => handleStep('up')}
          disabled={isDisabled || (max !== undefined && numberValue >= max)}
          className={cn(
            "px-2 py-0.5 hover:bg-default-200 transition-colors",
            "disabled:opacity-50 disabled:cursor-not-allowed"
          )}
        >
          <ChevronUpIcon className="w-3 h-3" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => handleStep('down')}
          disabled={isDisabled || (min !== undefined && numberValue <= min)}
          className={cn(
            "px-2 py-0.5 hover:bg-default-200 transition-colors",
            "disabled:opacity-50 disabled:cursor-not-allowed"
          )}
        >
          <ChevronDownIcon className="w-3 h-3" aria-hidden="true" />
        </button>
      </div>
    );
    
    // Split steppers
    const splitSteppers = showSteppers && stepperPosition === 'split' && {
      startContent: (
        <button
          type="button"
          onClick={() => handleStep('down')}
          disabled={isDisabled || (min !== undefined && numberValue <= min)}
          className={cn(
            "px-2 py-1 hover:bg-default-200 transition-colors rounded",
            "disabled:opacity-50 disabled:cursor-not-allowed"
          )}
        >
          <ChevronDownIcon className="w-4 h-4" aria-hidden="true" />
        </button>
      ),
      endContent: (
        <button
          type="button"
          onClick={() => handleStep('up')}
          disabled={isDisabled || (max !== undefined && numberValue >= max)}
          className={cn(
            "px-2 py-1 hover:bg-default-200 transition-colors rounded",
            "disabled:opacity-50 disabled:cursor-not-allowed"
          )}
        >
          <ChevronUpIcon className="w-4 h-4" aria-hidden="true" />
        </button>
      )
    };
    
    return (
      <NHInput
        ref={ref}
        type="text"
        inputMode="numeric"
        value={formatValue(numberValue)}
        onChange={handleChange}
        placeholder={placeholder}
        className={className}
        isDisabled={isDisabled}
        endContent={stepperPosition === 'right' ? stepperButtons : undefined}
        {...(stepperPosition === 'split' ? splitSteppers : {})}
        {...props}
      />
    );
  }
);

NHNumberInput.displayName = "NHNumberInput";