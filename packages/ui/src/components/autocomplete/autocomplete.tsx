"use client";

import React, { forwardRef, useState, useRef, useEffect } from "react";
import { NHInput, NHInputProps } from "../input";
import { cn } from "../../utils/cn";
import { CheckIcon } from "@heroicons/react/24/outline";

export interface AutocompleteItem {
  value: string;
  label: string;
  description?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export interface NHAutocompleteProps extends Omit<NHInputProps, 'value' | 'onChange'> {
  /**
   * List of items to display
   */
  items: AutocompleteItem[];
  
  /**
   * Selected value
   */
  value?: string;
  
  /**
   * Default selected value
   */
  defaultValue?: string;
  
  /**
   * Callback when selection changes
   */
  onSelectionChange?: (value: string | null) => void;
  
  /**
   * Callback when input value changes
   */
  onInputChange?: (value: string) => void;
  
  /**
   * Filter function for items
   */
  filterFunction?: (item: AutocompleteItem, inputValue: string) => boolean;
  
  /**
   * Whether to allow custom values
   * @default false
   */
  allowCustomValue?: boolean;
  
  /**
   * Maximum number of items to show
   * @default 10
   */
  maxItems?: number;
  
  /**
   * Loading state
   */
  isLoading?: boolean;
  
  /**
   * Loading text
   */
  loadingText?: string;
  
  /**
   * Empty content text
   */
  emptyContent?: string;
  
  /**
   * Whether to show selected icon
   * @default true
   */
  showSelectedIcon?: boolean;
  
  /**
   * Dropdown placement
   * @default "bottom"
   */
  placement?: 'top' | 'bottom';
  
  /**
   * Whether to close on select
   * @default true
   */
  closeOnSelect?: boolean;
  
  /**
   * Custom item renderer
   */
  renderItem?: (item: AutocompleteItem, isSelected: boolean) => React.ReactNode;
}

const defaultFilter = (item: AutocompleteItem, inputValue: string) => {
  const searchValue = inputValue.toLowerCase();
  return item.label.toLowerCase().includes(searchValue) ||
         (item.description?.toLowerCase().includes(searchValue) ?? false);
};

export const NHAutocomplete = forwardRef<HTMLInputElement, NHAutocompleteProps>(
  ({ 
    items,
    value,
    defaultValue,
    onSelectionChange,
    onInputChange,
    filterFunction = defaultFilter,
    allowCustomValue = false,
    maxItems = 10,
    isLoading,
    loadingText = "Loading...",
    emptyContent = "No items found",
    showSelectedIcon = true,
    placement = 'bottom',
    closeOnSelect = true,
    renderItem,
    placeholder = "Search...",
    className,
    ...props 
  }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [selectedValue, setSelectedValue] = useState(value || defaultValue || '');
    const [highlightedIndex, setHighlightedIndex] = useState(-1);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    
    // Find selected item
    const selectedItem = items.find(item => item.value === selectedValue);
    
    // Filter items
    const filteredItems = items
      .filter(item => !item.disabled && filterFunction(item, inputValue))
      .slice(0, maxItems);
    
    // Update input value when selection changes
    useEffect(() => {
      if (selectedItem && !isOpen) {
        setInputValue(selectedItem.label);
      }
    }, [selectedItem, isOpen]);
    
    // Handle input change
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setInputValue(newValue);
      onInputChange?.(newValue);
      setIsOpen(true);
      setHighlightedIndex(-1);
      
      // Clear selection if input doesn't match
      if (selectedItem && selectedItem.label !== newValue) {
        setSelectedValue('');
        onSelectionChange?.(null);
      }
    };
    
    // Handle item selection
    const handleSelect = (item: AutocompleteItem) => {
      setSelectedValue(item.value);
      setInputValue(item.label);
      onSelectionChange?.(item.value);
      
      if (closeOnSelect) {
        setIsOpen(false);
      }
    };
    
    // Handle keyboard navigation
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (!isOpen && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
        setIsOpen(true);
        return;
      }
      
      if (!isOpen) return;
      
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setHighlightedIndex(prev => 
            prev < filteredItems.length - 1 ? prev + 1 : 0
          );
          break;
          
        case 'ArrowUp':
          e.preventDefault();
          setHighlightedIndex(prev => 
            prev > 0 ? prev - 1 : filteredItems.length - 1
          );
          break;
          
        case 'Enter':
          e.preventDefault();
          if (highlightedIndex >= 0 && highlightedIndex < filteredItems.length) {
            handleSelect(filteredItems[highlightedIndex]);
          } else if (allowCustomValue && inputValue) {
            onSelectionChange?.(inputValue);
            setIsOpen(false);
          }
          break;
          
        case 'Escape':
          e.preventDefault();
          setIsOpen(false);
          setHighlightedIndex(-1);
          break;
      }
    };
    
    // Handle click outside
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };
      
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
    
    // Default item renderer
    const defaultRenderItem = (item: AutocompleteItem, isSelected: boolean) => (
      <>
        {item.icon && (
          <span className="flex-shrink-0">{item.icon}</span>
        )}
        <div className="flex-1">
          <div className="font-medium">{item.label}</div>
          {item.description && (
            <div className="text-xs text-default-400">{item.description}</div>
          )}
        </div>
        {showSelectedIcon && isSelected && 
          React.createElement(CheckIcon as any, { className: "w-4 h-4 text-primary flex-shrink-0", 'aria-hidden': true })
        }
      </>
    );
    
    return (
      <div ref={wrapperRef} className={cn("relative", className)}>
        <NHInput
          ref={ref}
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsOpen(true)}
          placeholder={placeholder}
          {...props}
        />
        
        {/* Dropdown */}
        {isOpen && (
          <div
            ref={dropdownRef}
            className={cn(
              "absolute z-50 w-full mt-1 bg-content1 rounded-lg shadow-lg border border-default-200",
              "max-h-64 overflow-auto",
              placement === 'top' && "bottom-full mb-1 mt-0"
            )}
          >
            {isLoading ? (
              <div className="p-4 text-center text-default-400">
                {loadingText}
              </div>
            ) : filteredItems.length === 0 ? (
              <div className="p-4 text-center text-default-400">
                {emptyContent}
              </div>
            ) : (
              <ul className="py-1">
                {filteredItems.map((item, index) => {
                  const isSelected = item.value === selectedValue;
                  const isHighlighted = index === highlightedIndex;
                  
                  return (
                    <li key={item.value}>
                      <button
                        type="button"
                        className={cn(
                          "w-full px-3 py-2 text-left flex items-center gap-2",
                          "transition-colors duration-150",
                          "hover:bg-default-100",
                          isHighlighted && "bg-default-100",
                          isSelected && "text-primary"
                        )}
                        onClick={() => handleSelect(item)}
                        onMouseEnter={() => setHighlightedIndex(index)}
                      >
                        {renderItem ? renderItem(item, isSelected) : defaultRenderItem(item, isSelected)}
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        )}
      </div>
    );
  }
);

NHAutocomplete.displayName = "NHAutocomplete";