"use client";

import { forwardRef, useState } from "react";
import { NHInput } from "../input";
import { SwatchIcon } from "@heroicons/react/24/outline";
import { cn } from "../../utils/cn";

export interface NHColorPickerProps {
  /**
   * The selected color value
   */
  value?: string;
  
  /**
   * Callback when color changes
   */
  onChange?: (color: string) => void;
  
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
   * Predefined color swatches
   */
  swatches?: string[];
  
  /**
   * Color format
   * @default "hex"
   */
  format?: 'hex' | 'rgb' | 'hsl';
  
  /**
   * Whether to show alpha channel
   * @default false
   */
  showAlpha?: boolean;
  
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

const defaultSwatches = [
  '#FB923C', // Orange 400
  '#F97316', // Orange 500
  '#EA580C', // Orange 600
  '#2DD4BF', // Teal 400
  '#14B8A6', // Teal 500
  '#0D9488', // Teal 600
  '#F87171', // Red 400
  '#EF4444', // Red 500
  '#DC2626', // Red 600
  '#60A5FA', // Blue 400
  '#3B82F6', // Blue 500
  '#2563EB', // Blue 600
  '#A78BFA', // Purple 400
  '#8B5CF6', // Purple 500
  '#7C3AED', // Purple 600
  '#4ADE80', // Green 400
  '#22C55E', // Green 500
  '#16A34A', // Green 600
];

export const NHColorPicker = forwardRef<HTMLInputElement, NHColorPickerProps>(
  ({ 
    value = '#000000',
    onChange,
    label,
    placeholder = "Select color",
    isDisabled,
    isReadOnly,
    isRequired,
    swatches = defaultSwatches,
    format = 'hex',
    showAlpha = false,
    variant = 'bordered',
    color = 'default',
    radius = 'md',
    hasGlow,
    errorMessage,
    description,
    className,
  }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    
    // Validate hex color
    const isValidHex = (hex: string) => {
      return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{8})$/.test(hex);
    };
    
    // Handle input change
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;
      if (isValidHex(inputValue) || inputValue === '') {
        onChange?.(inputValue);
      }
    };
    
    // Handle swatch click
    const handleSwatchClick = (swatchColor: string) => {
      onChange?.(swatchColor);
      setIsOpen(false);
    };
    
    return (
      <div className={cn("relative", className)}>
        <NHInput
          ref={ref}
          label={label}
          placeholder={placeholder}
          value={value}
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
          startContent={
            <div 
              className="w-6 h-6 rounded-md border border-default-300 cursor-pointer"
              style={{ backgroundColor: value }}
              onClick={() => !isDisabled && !isReadOnly && setIsOpen(!isOpen)}
            />
          }
          endContent={
            <SwatchIcon 
              className="w-5 h-5 text-default-400 cursor-pointer hover:text-default-600 transition-colors" 
              onClick={() => !isDisabled && !isReadOnly && setIsOpen(!isOpen)}
              aria-hidden="true"
            />
          }
        />
        
        {/* Color picker popup */}
        {isOpen && !isDisabled && !isReadOnly && (
          <div className="absolute top-full mt-2 z-50 p-4 bg-content1 rounded-lg shadow-xl border border-default-200">
            {/* Swatches grid */}
            <div className="grid grid-cols-6 gap-2 mb-4">
              {swatches.map((swatch) => (
                <button
                  key={swatch}
                  className={cn(
                    "w-8 h-8 rounded-md border-2 transition-all",
                    value === swatch ? "border-primary scale-110" : "border-transparent hover:scale-105"
                  )}
                  style={{ backgroundColor: swatch }}
                  onClick={() => handleSwatchClick(swatch)}
                />
              ))}
            </div>
            
            {/* Additional color picker UI would go here */}
            <div className="text-xs text-default-500 text-center">
              Click a swatch or enter a hex value
            </div>
          </div>
        )}
      </div>
    );
  }
);

NHColorPicker.displayName = "NHColorPicker";