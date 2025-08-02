"use client";

import { Textarea as HeroUITextarea, TextAreaProps as HeroUITextAreaProps } from "@heroui/react";
import { forwardRef } from "react";
import { cn } from "../../utils/cn";

export interface NHTextareaProps extends Omit<HeroUITextAreaProps, 'color' | 'variant' | 'radius'> {
  /**
   * The textarea variant
   * @default "bordered"
   */
  variant?: 'flat' | 'bordered' | 'underlined' | 'faded';
  
  /**
   * The textarea color theme
   * @default "default"
   */
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  
  /**
   * The textarea radius
   * @default "md"
   */
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  
  /**
   * Whether the textarea has a subtle glow effect
   */
  hasGlow?: boolean;
  
  /**
   * The glow color (uses color prop by default)
   */
  glowColor?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  
  /**
   * Whether to show character count
   */
  showCount?: boolean;
  
  /**
   * Maximum character length
   */
  maxLength?: number;
  
  /**
   * Whether the textarea auto-resizes based on content
   */
  autoResize?: boolean;
  
  /**
   * Minimum number of rows (when autoResize is true)
   */
  minRows?: number;
  
  /**
   * Maximum number of rows (when autoResize is true)
   */
  maxRows?: number;
}

export const NHTextarea = forwardRef<HTMLTextAreaElement, NHTextareaProps>(
  ({ 
    variant = 'bordered',
    color = 'default',
    radius = 'md',
    hasGlow,
    glowColor,
    showCount,
    maxLength,
    autoResize,
    minRows = 3,
    maxRows = 10,
    className,
    classNames,
    value,
    defaultValue,
    description,
    errorMessage,
    onChange,
    ...props 
  }, ref) => {
    // Calculate character count
    const currentValue = value || defaultValue || '';
    const charCount = typeof currentValue === 'string' ? currentValue.length : 0;
    
    // Determine glow effect
    const effectiveGlowColor = glowColor || (color !== 'default' ? color : 'primary');
    const glowClass = hasGlow ? {
      primary: 'data-[focus=true]:shadow-[0_0_20px_rgba(251,146,60,0.3)]',
      secondary: 'data-[focus=true]:shadow-[0_0_20px_rgba(45,212,191,0.3)]',
      success: 'data-[focus=true]:shadow-[0_0_20px_rgba(34,197,94,0.3)]',
      warning: 'data-[focus=true]:shadow-[0_0_20px_rgba(251,191,36,0.3)]',
      danger: 'data-[focus=true]:shadow-[0_0_20px_rgba(239,68,68,0.3)]',
    }[effectiveGlowColor] : '';
    
    // Enhanced description with character count
    const enhancedDescription = showCount && maxLength ? (
      <div className="flex justify-between items-center w-full">
        <span>{description}</span>
        <span className={cn(
          "text-xs",
          charCount > maxLength ? "text-danger" : "text-default-400"
        )}>
          {charCount}/{maxLength}
        </span>
      </div>
    ) : (description as React.ReactNode);
    
    // NH-specific enhancements
    const nhClassNames = {
      input: cn(
        "transition-all duration-200",
        "resize-none", // We control resize through props
        hasGlow && glowClass,
        classNames?.input
      ),
      inputWrapper: cn(
        "backdrop-blur-xl",
        variant === 'bordered' && "border-default-200 data-[hover=true]:border-default-400",
        classNames?.inputWrapper
      ),
      label: cn(
        "text-default-600",
        classNames?.label
      ),
      description: cn(
        "text-default-400",
        classNames?.description
      ),
      errorMessage: cn(
        "text-danger",
        classNames?.errorMessage
      ),
    };
    
    // Calculate rows based on content if autoResize is enabled
    let calculatedMinRows = minRows;
    if (autoResize && typeof currentValue === 'string') {
      const lineCount = currentValue.split('\n').length;
      calculatedMinRows = Math.min(Math.max(lineCount, minRows), maxRows);
    }
    
    return (
      <HeroUITextarea
        ref={ref}
        variant={variant}
        color={color as any}
        radius={radius}
        className={className}
        classNames={nhClassNames}
        value={value}
        defaultValue={defaultValue}
        description={enhancedDescription}
        errorMessage={errorMessage}
        maxLength={maxLength}
        minRows={calculatedMinRows}
        onChange={onChange}
        {...props}
      />
    );
  }
);

NHTextarea.displayName = "NHTextarea";