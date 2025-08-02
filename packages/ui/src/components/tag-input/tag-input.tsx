"use client";

import React, { forwardRef, useState, KeyboardEvent, useRef } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { cn } from "../../utils/cn";

export interface NHTagInputProps {
  /**
   * Current tags
   */
  value?: string[];
  
  /**
   * Default tags
   */
  defaultValue?: string[];
  
  /**
   * Callback when tags change
   */
  onChange?: (tags: string[]) => void;
  
  /**
   * Placeholder text
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
   * Maximum number of tags
   */
  maxTags?: number;
  
  /**
   * Tag validation function
   */
  validate?: (tag: string) => boolean;
  
  /**
   * Characters that trigger tag creation
   * @default [',', 'Enter']
   */
  delimiters?: string[];
  
  /**
   * Whether to allow duplicates
   * @default false
   */
  allowDuplicates?: boolean;
  
  /**
   * The input variant
   * @default "bordered"
   */
  variant?: 'flat' | 'bordered' | 'faded';
  
  /**
   * The tag color theme
   * @default "primary"
   */
  tagColor?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  
  /**
   * The input radius
   * @default "md"
   */
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  
  /**
   * Size of the input and tags
   * @default "md"
   */
  size?: 'sm' | 'md' | 'lg';
  
  /**
   * Whether tags have a subtle glow effect
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
   * Label text
   */
  label?: string;
  
  /**
   * Custom class name
   */
  className?: string;
}

export const NHTagInput = forwardRef<HTMLDivElement, NHTagInputProps>(
  ({ 
    value,
    defaultValue = [],
    onChange,
    placeholder = "Add tags...",
    isDisabled,
    isReadOnly,
    maxTags,
    validate,
    delimiters = [',', 'Enter'],
    allowDuplicates = false,
    variant = 'bordered',
    tagColor = 'primary',
    radius = 'md',
    size = 'md',
    hasGlow,
    errorMessage,
    description,
    label,
    className,
  }, ref) => {
    const [tags, setTags] = useState<string[]>(value || defaultValue);
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState<string | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    
    // Update tags when value prop changes
    React.useEffect(() => {
      if (value !== undefined) {
        setTags(value);
      }
    }, [value]);
    
    // Size classes
    const sizeClasses = {
      sm: {
        wrapper: 'min-h-[2rem] p-1.5 gap-1.5',
        tag: 'text-xs px-2 py-0.5',
        input: 'text-sm',
        icon: 'w-3 h-3',
      },
      md: {
        wrapper: 'min-h-[2.5rem] p-2 gap-2',
        tag: 'text-sm px-2.5 py-1',
        input: 'text-base',
        icon: 'w-3.5 h-3.5',
      },
      lg: {
        wrapper: 'min-h-[3rem] p-2.5 gap-2.5',
        tag: 'text-base px-3 py-1.5',
        input: 'text-lg',
        icon: 'w-4 h-4',
      },
    };
    
    // Tag color classes
    const tagColorClasses = {
      default: 'bg-default-200 text-default-700',
      primary: 'bg-primary/20 text-primary-700',
      secondary: 'bg-secondary/20 text-secondary-700',
      success: 'bg-success/20 text-success-700',
      warning: 'bg-warning/20 text-warning-700',
      danger: 'bg-danger/20 text-danger-700',
    };
    
    // Add tag
    const addTag = (tag: string) => {
      const trimmedTag = tag.trim();
      
      if (!trimmedTag) return;
      
      // Validate tag
      if (validate && !validate(trimmedTag)) {
        setError('Invalid tag');
        return;
      }
      
      // Check for duplicates
      if (!allowDuplicates && tags.includes(trimmedTag)) {
        setError('Tag already exists');
        return;
      }
      
      // Check max tags
      if (maxTags && tags.length >= maxTags) {
        setError(`Maximum ${maxTags} tags allowed`);
        return;
      }
      
      const newTags = [...tags, trimmedTag];
      setTags(newTags);
      onChange?.(newTags);
      setInputValue('');
      setError(null);
    };
    
    // Remove tag
    const removeTag = (index: number) => {
      if (isDisabled || isReadOnly) return;
      
      const newTags = tags.filter((_, i) => i !== index);
      setTags(newTags);
      onChange?.(newTags);
    };
    
    // Handle key down
    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      if (isDisabled || isReadOnly) return;
      
      // Handle delimiters
      if (delimiters.includes(e.key)) {
        e.preventDefault();
        addTag(inputValue);
      }
      
      // Handle backspace to remove last tag
      if (e.key === 'Backspace' && !inputValue && tags.length > 0) {
        removeTag(tags.length - 1);
      }
    };
    
    // Handle input change
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      
      // Check for delimiter characters in pasted/typed content
      const delimiterRegex = new RegExp(`[${delimiters.filter(d => d !== 'Enter').join('')}]`);
      if (delimiterRegex.test(value)) {
        const parts = value.split(delimiterRegex);
        parts.forEach((part, index) => {
          if (index === parts.length - 1) {
            setInputValue(part);
          } else if (part.trim()) {
            addTag(part);
          }
        });
      } else {
        setInputValue(value);
      }
      
      setError(null);
    };
    
    // Wrapper classes
    const wrapperClasses = cn(
      "flex flex-wrap items-center cursor-text transition-all duration-200",
      sizeClasses[size].wrapper,
      {
        'bg-default-100': variant === 'flat',
        'border-2 border-default-200': variant === 'bordered',
        'bg-default-100/50': variant === 'faded',
      },
      {
        'rounded-none': radius === 'none',
        'rounded-small': radius === 'sm',
        'rounded-medium': radius === 'md',
        'rounded-large': radius === 'lg',
        'rounded-full': radius === 'full',
      },
      hasGlow && "hover:shadow-[0_0_20px_rgba(251,146,60,0.15)]",
      isDisabled && "opacity-50 cursor-not-allowed",
      errorMessage && "border-danger",
      className
    );
    
    return (
      <div ref={ref}>
        {label && (
          <label className="block text-sm font-medium text-default-700 mb-2">
            {label}
          </label>
        )}
        
        <div
          className={wrapperClasses}
          onClick={() => inputRef.current?.focus()}
        >
          {/* Tags */}
          {tags.map((tag, index) => (
            <span
              key={`${tag}-${index}`}
              className={cn(
                "inline-flex items-center gap-1 rounded-full transition-all duration-200",
                sizeClasses[size].tag,
                tagColorClasses[tagColor],
                hasGlow && "hover:shadow-[0_0_10px_rgba(251,146,60,0.3)]"
              )}
            >
              {tag}
              {!isDisabled && !isReadOnly && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeTag(index);
                  }}
                  className="hover:bg-default-400/20 rounded-full p-0.5 transition-colors"
                >
                  <XMarkIcon className={sizeClasses[size].icon} aria-hidden="true" />
                </button>
              )}
            </span>
          ))}
          
          {/* Input */}
          {!isDisabled && !isReadOnly && (!maxTags || tags.length < maxTags) && (
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder={tags.length === 0 ? placeholder : ''}
              disabled={isDisabled}
              readOnly={isReadOnly}
              className={cn(
                "flex-1 min-w-[120px] bg-transparent outline-none",
                sizeClasses[size].input
              )}
            />
          )}
        </div>
        
        {/* Messages */}
        {(error || errorMessage) && (
          <p className="mt-1.5 text-sm text-danger">
            {error || errorMessage}
          </p>
        )}
        
        {description && !error && !errorMessage && (
          <p className="mt-1.5 text-sm text-default-400">
            {description}
          </p>
        )}
      </div>
    );
  }
);

NHTagInput.displayName = "NHTagInput";