"use client";

import { forwardRef, useState, useRef } from "react";
import { cn } from "../../utils/cn";
import { CloudArrowUpIcon, DocumentIcon, XMarkIcon } from "@heroicons/react/24/outline";

export interface NHFileUploadProps {
  /**
   * Callback when files are selected
   */
  onChange?: (files: File[]) => void;
  
  /**
   * Accepted file types
   */
  accept?: string;
  
  /**
   * Whether multiple files can be selected
   */
  multiple?: boolean;
  
  /**
   * Maximum file size in bytes
   */
  maxSize?: number;
  
  /**
   * Maximum number of files (when multiple is true)
   */
  maxFiles?: number;
  
  /**
   * Whether the upload is disabled
   */
  isDisabled?: boolean;
  
  /**
   * The upload area variant
   * @default "bordered"
   */
  variant?: 'flat' | 'bordered' | 'faded';
  
  /**
   * The color theme
   * @default "default"
   */
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  
  /**
   * The border radius
   * @default "md"
   */
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  
  /**
   * Whether the upload area has a subtle glow effect on hover
   */
  hasGlow?: boolean;
  
  /**
   * Custom upload text
   */
  uploadText?: string;
  
  /**
   * Custom description text
   */
  description?: string;
  
  /**
   * Error message
   */
  errorMessage?: string;
  
  /**
   * Whether to show file preview
   */
  showPreview?: boolean;
  
  /**
   * Custom class name
   */
  className?: string;
}

export const NHFileUpload = forwardRef<HTMLDivElement, NHFileUploadProps>(
  ({ 
    onChange,
    accept,
    multiple = false,
    maxSize,
    maxFiles = 10,
    isDisabled,
    variant = 'bordered',
    color = 'default',
    radius = 'md',
    hasGlow,
    uploadText = "Click to upload or drag and drop",
    description,
    errorMessage,
    showPreview = true,
    className,
  }, ref) => {
    const [files, setFiles] = useState<File[]>([]);
    const [isDragging, setIsDragging] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    
    // Handle file selection
    const handleFiles = (newFiles: FileList | null) => {
      if (!newFiles || isDisabled) return;
      
      const fileArray = Array.from(newFiles);
      let validFiles = fileArray;
      let errorMsg = null;
      
      // Validate file size
      if (maxSize) {
        validFiles = validFiles.filter(file => {
          if (file.size > maxSize) {
            errorMsg = `File "${file.name}" exceeds maximum size of ${formatFileSize(maxSize)}`;
            return false;
          }
          return true;
        });
      }
      
      // Validate file count
      if (multiple && files.length + validFiles.length > maxFiles) {
        errorMsg = `Maximum ${maxFiles} files allowed`;
        validFiles = validFiles.slice(0, maxFiles - files.length);
      }
      
      const updatedFiles = multiple ? [...files, ...validFiles] : validFiles;
      setFiles(updatedFiles);
      setError(errorMsg);
      onChange?.(updatedFiles);
    };
    
    // Handle drag events
    const handleDragEnter = (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (!isDisabled) setIsDragging(true);
    };
    
    const handleDragLeave = (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);
    };
    
    const handleDragOver = (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
    };
    
    const handleDrop = (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);
      handleFiles(e.dataTransfer.files);
    };
    
    // Remove file
    const removeFile = (index: number) => {
      const updatedFiles = files.filter((_, i) => i !== index);
      setFiles(updatedFiles);
      onChange?.(updatedFiles);
    };
    
    // Format file size
    const formatFileSize = (bytes: number) => {
      if (bytes === 0) return '0 Bytes';
      const k = 1024;
      const sizes = ['Bytes', 'KB', 'MB', 'GB'];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };
    
    // Determine styles
    const baseStyles = cn(
      "relative p-8 transition-all duration-200 cursor-pointer",
      "flex flex-col items-center justify-center",
      {
        'bg-default-100': variant === 'flat',
        'border-2 border-dashed border-default-300': variant === 'bordered',
        'bg-default-100/50': variant === 'faded',
      },
      {
        'rounded-none': radius === 'none',
        'rounded-small': radius === 'sm',
        'rounded-medium': radius === 'md',
        'rounded-large': radius === 'lg',
        'rounded-full': radius === 'full',
      },
      isDragging && "border-primary bg-primary/10",
      isDisabled && "opacity-50 cursor-not-allowed",
      hasGlow && !isDisabled && "hover:shadow-[0_0_20px_rgba(251,146,60,0.2)]",
      className
    );
    
    return (
      <div ref={ref}>
        <div
          className={baseStyles}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onClick={() => !isDisabled && inputRef.current?.click()}
        >
          <input
            ref={inputRef}
            type="file"
            accept={accept}
            multiple={multiple}
            disabled={isDisabled}
            onChange={(e) => handleFiles(e.target.files)}
            className="hidden"
          />
          
          <CloudArrowUpIcon className={cn(
            "w-12 h-12 mb-4 transition-colors",
            isDragging ? "text-primary" : "text-default-400"
          )} aria-hidden="true" />
          
          <p className="text-default-700 font-medium mb-1">{uploadText}</p>
          
          {description && (
            <p className="text-default-400 text-sm">{description}</p>
          )}
          
          {accept && (
            <p className="text-default-400 text-xs mt-2">
              Accepted: {accept}
            </p>
          )}
          
          {maxSize && (
            <p className="text-default-400 text-xs">
              Max size: {formatFileSize(maxSize)}
            </p>
          )}
        </div>
        
        {/* Error message */}
        {(error || errorMessage) && (
          <p className="text-danger text-sm mt-2">{error || errorMessage}</p>
        )}
        
        {/* File preview */}
        {showPreview && files.length > 0 && (
          <div className="mt-4 space-y-2">
            {files.map((file, index) => (
              <div
                key={`${file.name}-${index}`}
                className="flex items-center justify-between p-3 bg-default-100 rounded-md"
              >
                <div className="flex items-center gap-3">
                  <DocumentIcon className="w-5 h-5 text-default-500" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-medium text-default-700">{file.name}</p>
                    <p className="text-xs text-default-400">{formatFileSize(file.size)}</p>
                  </div>
                </div>
                
                {!isDisabled && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removeFile(index);
                    }}
                    className="p-1 hover:bg-default-200 rounded transition-colors"
                  >
                    <XMarkIcon className="w-4 h-4 text-default-500" aria-hidden="true" />
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
);

NHFileUpload.displayName = "NHFileUpload";