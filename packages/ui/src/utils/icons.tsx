import React from 'react';

// Type-safe wrapper for HeroIcons to fix React 19 type issues
export function Icon({ icon: IconComponent, ...props }: { icon: any; [key: string]: any }) {
  return <IconComponent {...props} />;
}