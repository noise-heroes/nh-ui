"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface NHLogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export function NHLogo({ className = "h-8 w-auto", width, height }: NHLogoProps) {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Use resolvedTheme to handle system theme preference
  const currentTheme = mounted ? (resolvedTheme || theme) : 'light';
  const fillColor = currentTheme === 'dark' ? '#FFFFFF' : '#000000';

  if (!mounted) {
    // Return a placeholder with the same dimensions to prevent layout shift
    return <div className={className} />;
  }

  return (
    <svg
      viewBox="0 0 200 50"
      className={className}
      width={width}
      height={height}
      fill={fillColor}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* NH Logo paths - simplified for example */}
      <path d="M10 10 L30 40 L30 10 L50 40 L50 10" strokeWidth="3" stroke={fillColor} fill="none" />
      <path d="M70 10 L70 40 L90 40 L90 10 L70 10 Z M80 20 L80 30" />
      <text x="10" y="48" fontSize="8" fill={fillColor} opacity="0.8">NOISE HEROES</text>
    </svg>
  );
}

// Alternative: Use the actual SVG file with dynamic filter
export function NHLogoFromFile({ className = "h-8 w-auto" }: NHLogoProps) {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className={className} />;
  }

  const currentTheme = resolvedTheme || theme;
  
  return (
    <div className={className} style={{ position: 'relative', display: 'inline-block' }}>
      <img 
        src="/NH-logo-RGB-hr.svg" 
        alt="Noise Heroes" 
        className={className}
        style={{
          filter: currentTheme === 'dark' ? 'invert(1) brightness(2)' : 'none',
          transition: 'filter 0.3s ease',
        }}
      />
    </div>
  );
}