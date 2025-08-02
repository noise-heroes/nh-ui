"use client";

import { forwardRef, createContext, useContext, FormHTMLAttributes } from "react";
import { cn } from "../../utils/cn";

export interface NHFormProps extends FormHTMLAttributes<HTMLFormElement> {
  /**
   * Whether the form is in a loading state
   */
  isLoading?: boolean;
  
  /**
   * Whether the form is disabled
   */
  isDisabled?: boolean;
  
  /**
   * Form validation mode
   * @default "onSubmit"
   */
  validationMode?: 'onSubmit' | 'onChange' | 'onBlur';
  
  /**
   * Form layout
   * @default "vertical"
   */
  layout?: 'vertical' | 'horizontal' | 'inline';
  
  /**
   * Spacing between form fields
   * @default "md"
   */
  spacing?: 'sm' | 'md' | 'lg';
}

interface FormContextValue {
  isLoading?: boolean;
  isDisabled?: boolean;
  validationMode?: 'onSubmit' | 'onChange' | 'onBlur';
  layout?: 'vertical' | 'horizontal' | 'inline';
}

const FormContext = createContext<FormContextValue>({});

export const useFormContext = () => useContext(FormContext);

export const NHForm = forwardRef<HTMLFormElement, NHFormProps>(
  ({ 
    isLoading,
    isDisabled,
    validationMode = 'onSubmit',
    layout = 'vertical',
    spacing = 'md',
    className,
    children,
    ...props 
  }, ref) => {
    const spacingClasses = {
      sm: 'space-y-3',
      md: 'space-y-5',
      lg: 'space-y-7',
    };
    
    return (
      <FormContext.Provider value={{ isLoading, isDisabled, validationMode, layout }}>
        <form
          ref={ref}
          className={cn(
            layout === 'vertical' && spacingClasses[spacing],
            layout === 'horizontal' && 'space-y-4',
            layout === 'inline' && 'flex flex-wrap gap-4 items-end',
            className
          )}
          {...props}
        >
          {children}
        </form>
      </FormContext.Provider>
    );
  }
);

NHForm.displayName = "NHForm";