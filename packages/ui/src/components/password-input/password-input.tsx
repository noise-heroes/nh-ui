"use client";

import { forwardRef, useState } from "react";
import { NHInput, NHInputProps } from "../input";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { cn } from "../../utils/cn";

export interface NHPasswordInputProps extends Omit<NHInputProps, 'type' | 'endContent'> {
  /**
   * Whether to show password strength indicator
   * @default false
   */
  showStrength?: boolean;
  
  /**
   * Custom password strength calculation function
   */
  calculateStrength?: (password: string) => number;
  
  /**
   * Whether to show password visibility toggle
   * @default true
   */
  showToggle?: boolean;
  
  /**
   * Custom show password icon
   */
  showIcon?: React.ReactNode;
  
  /**
   * Custom hide password icon
   */
  hideIcon?: React.ReactNode;
  
  /**
   * Password requirements to display
   */
  requirements?: string[];
}

const defaultCalculateStrength = (password: string): number => {
  let strength = 0;
  
  if (password.length >= 8) strength += 25;
  if (password.length >= 12) strength += 10;
  if (/[a-z]/.test(password)) strength += 15;
  if (/[A-Z]/.test(password)) strength += 15;
  if (/[0-9]/.test(password)) strength += 15;
  if (/[^A-Za-z0-9]/.test(password)) strength += 20;
  
  return Math.min(strength, 100);
};

export const NHPasswordInput = forwardRef<HTMLInputElement, NHPasswordInputProps>(
  ({ 
    value,
    defaultValue,
    onChange,
    showStrength = false,
    calculateStrength = defaultCalculateStrength,
    showToggle = true,
    showIcon,
    hideIcon,
    requirements,
    placeholder = "Enter password",
    description,
    className,
    ...props 
  }, ref) => {
    const [isVisible, setIsVisible] = useState(false);
    const [passwordValue, setPasswordValue] = useState(value || defaultValue || '');
    
    // Calculate password strength
    const strength = showStrength ? calculateStrength(passwordValue as string) : 0;
    
    // Determine strength color and label
    const getStrengthInfo = () => {
      if (strength < 30) return { color: 'bg-danger', label: 'Weak' };
      if (strength < 60) return { color: 'bg-warning', label: 'Fair' };
      if (strength < 80) return { color: 'bg-success-500', label: 'Good' };
      return { color: 'bg-success', label: 'Strong' };
    };
    
    const strengthInfo = getStrengthInfo();
    
    // Handle input change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setPasswordValue(e.target.value);
      onChange?.(e);
    };
    
    // Toggle password visibility
    const toggleVisibility = () => setIsVisible(!isVisible);
    
    // Enhanced description with strength indicator
    const enhancedDescription = showStrength && passwordValue ? (
      <div className="space-y-2">
        {description && <div>{description}</div>}
        
        <div className="space-y-1">
          <div className="flex justify-between items-center">
            <span className="text-xs text-default-400">Password strength</span>
            <span className={cn(
              "text-xs font-medium",
              strength < 30 ? "text-danger" : 
              strength < 60 ? "text-warning" : 
              "text-success"
            )}>
              {strengthInfo.label}
            </span>
          </div>
          
          <div className="h-2 bg-default-200 rounded-full overflow-hidden">
            <div
              className={cn(
                "h-full transition-all duration-300",
                strengthInfo.color
              )}
              style={{ width: `${strength}%` }}
            />
          </div>
        </div>
        
        {requirements && (
          <ul className="text-xs text-default-400 space-y-0.5">
            {requirements.map((req, index) => (
              <li key={index} className="flex items-center gap-1">
                <span className="text-default-300">•</span>
                {req}
              </li>
            ))}
          </ul>
        )}
      </div>
    ) : description;
    
    return (
      <NHInput
        ref={ref}
        type={isVisible ? "text" : "password"}
        value={passwordValue}
        onChange={handleChange}
        placeholder={placeholder}
        description={enhancedDescription}
        className={className}
        endContent={
          showToggle && (
            <button
              type="button"
              onClick={toggleVisibility}
              className="p-1 hover:bg-default-200 rounded transition-colors"
              aria-label={isVisible ? "Hide password" : "Show password"}
            >
              {isVisible ? 
                (hideIcon || <EyeSlashIcon className="w-5 h-5 text-default-400" aria-hidden="true" />) :
                (showIcon || <EyeIcon className="w-5 h-5 text-default-400" aria-hidden="true" />)
              }
            </button>
          )
        }
        {...props}
      />
    );
  }
);

NHPasswordInput.displayName = "NHPasswordInput";