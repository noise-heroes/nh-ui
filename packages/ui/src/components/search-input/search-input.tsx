"use client";

import { forwardRef, useState } from "react";
import { NHInput, NHInputProps } from "../input";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { cn } from "../../utils/cn";

export interface NHSearchInputProps extends Omit<NHInputProps, 'type' | 'startContent' | 'endContent'> {
  /**
   * Callback when search is triggered
   */
  onSearch?: (value: string) => void;
  
  /**
   * Callback when clear button is clicked
   */
  onClear?: () => void;
  
  /**
   * Whether to show search icon
   * @default true
   */
  showSearchIcon?: boolean;
  
  /**
   * Whether to show clear button when there's value
   * @default true
   */
  showClearButton?: boolean;
  
  /**
   * Whether to trigger search on Enter key
   * @default true
   */
  searchOnEnter?: boolean;
  
  /**
   * Whether to trigger search on value change
   * @default false
   */
  searchOnChange?: boolean;
  
  /**
   * Debounce delay for search on change (in ms)
   * @default 500
   */
  debounceDelay?: number;
  
  /**
   * Custom search icon
   */
  searchIcon?: React.ReactNode;
  
  /**
   * Custom clear icon
   */
  clearIcon?: React.ReactNode;
}

export const NHSearchInput = forwardRef<HTMLInputElement, NHSearchInputProps>(
  ({ 
    value,
    defaultValue,
    onChange,
    onSearch,
    onClear,
    showSearchIcon = true,
    showClearButton = true,
    searchOnEnter = true,
    searchOnChange = false,
    debounceDelay = 500,
    searchIcon,
    clearIcon,
    placeholder = "Search...",
    className,
    ...props 
  }, ref) => {
    const [searchValue, setSearchValue] = useState(value || defaultValue || '');
    const [debounceTimer, setDebounceTimer] = useState<NodeJS.Timeout | null>(null);
    
    // Handle input change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setSearchValue(newValue);
      onChange?.(e);
      
      // Trigger search on change with debounce
      if (searchOnChange && onSearch) {
        if (debounceTimer) {
          clearTimeout(debounceTimer);
        }
        
        const timer = setTimeout(() => {
          onSearch(newValue);
        }, debounceDelay);
        
        setDebounceTimer(timer);
      }
    };
    
    // Handle key press
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && searchOnEnter && onSearch) {
        e.preventDefault();
        onSearch(searchValue as string);
      }
    };
    
    // Handle clear
    const handleClear = () => {
      setSearchValue('');
      onClear?.();
      
      // Create synthetic event for onChange
      const syntheticEvent = {
        target: { value: '' },
        currentTarget: { value: '' }
      } as React.ChangeEvent<HTMLInputElement>;
      
      onChange?.(syntheticEvent);
      
      if (searchOnChange && onSearch) {
        onSearch('');
      }
    };
    
    // Determine if clear button should be shown
    const shouldShowClear = showClearButton && searchValue && searchValue !== '';
    
    return (
      <NHInput
        ref={ref}
        type="search"
        value={searchValue}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        placeholder={placeholder}
        className={className}
        startContent={
          showSearchIcon && (
            searchIcon || <MagnifyingGlassIcon className="w-5 h-5 text-default-400" aria-hidden="true" />
          )
        }
        endContent={
          shouldShowClear && (
            <button
              type="button"
              onClick={handleClear}
              className="p-1 hover:bg-default-200 rounded transition-colors"
            >
              {clearIcon || <XMarkIcon className="w-4 h-4 text-default-400" aria-hidden="true" />}
            </button>
          )
        }
        {...props}
      />
    );
  }
);

NHSearchInput.displayName = "NHSearchInput";