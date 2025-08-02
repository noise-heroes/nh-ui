"use client";

import { forwardRef, ReactNode } from "react";
import { cn } from "../../utils/cn";
import { useFormContext } from "../form/form";

export interface NHFormFieldProps {
  /**
   * Field label
   */
  label?: string;
  
  /**
   * Whether the field is required
   */
  isRequired?: boolean;
  
  /**
   * Helper text shown below the field
   */
  helperText?: string;
  
  /**
   * Error message
   */
  errorMessage?: string;
  
  /**
   * Success message
   */
  successMessage?: string;
  
  /**
   * Whether the field is disabled
   */
  isDisabled?: boolean;
  
  /**
   * Field name for form submission
   */
  name?: string;
  
  /**
   * Label placement
   * @default "top"
   */
  labelPlacement?: 'top' | 'left';
  
  /**
   * Custom label width (for horizontal layout)
   */
  labelWidth?: string;
  
  /**
   * Field content
   */
  children: ReactNode;
  
  /**
   * Custom class name
   */
  className?: string;
}

export const NHFormField = forwardRef<HTMLDivElement, NHFormFieldProps>(
  ({ 
    label,
    isRequired,
    helperText,
    errorMessage,
    successMessage,
    isDisabled,
    name,
    labelPlacement = 'top',
    labelWidth = '200px',
    children,
    className,
  }, ref) => {
    const formContext = useFormContext();
    const layout = formContext.layout || 'vertical';
    const effectiveLabelPlacement = layout === 'horizontal' ? 'left' : labelPlacement;
    
    // Determine if field is disabled from form context
    const fieldDisabled = isDisabled || formContext.isDisabled;
    
    return (
      <div
        ref={ref}
        className={cn(
          effectiveLabelPlacement === 'left' && "flex items-start gap-4",
          className
        )}
      >
        {label && (
          <label
            htmlFor={name}
            className={cn(
              "text-sm font-medium text-default-700 transition-colors",
              effectiveLabelPlacement === 'top' && "block mb-2",
              effectiveLabelPlacement === 'left' && "flex-shrink-0 pt-2",
              fieldDisabled && "opacity-50",
              errorMessage && "text-danger"
            )}
            style={effectiveLabelPlacement === 'left' ? { width: labelWidth } : undefined}
          >
            {label}
            {isRequired && (
              <span className="text-danger ml-1">*</span>
            )}
          </label>
        )}
        
        <div className="flex-1">
          {children}
          
          {/* Messages */}
          {errorMessage && (
            <p className="mt-1.5 text-sm text-danger animate-in fade-in slide-in-from-top-1">
              {errorMessage}
            </p>
          )}
          
          {successMessage && !errorMessage && (
            <p className="mt-1.5 text-sm text-success animate-in fade-in slide-in-from-top-1">
              {successMessage}
            </p>
          )}
          
          {helperText && !errorMessage && !successMessage && (
            <p className="mt-1.5 text-sm text-default-400">
              {helperText}
            </p>
          )}
        </div>
      </div>
    );
  }
);

NHFormField.displayName = "NHFormField";