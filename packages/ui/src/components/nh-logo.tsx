"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface NHLogoProps {
  className?: string;
}

export function NHLogoFromFile({ className = "h-8 w-auto" }: NHLogoProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className={className} />;
  }

  return (
    <img 
      src={resolvedTheme === 'dark' ? "/NH-logo-white.svg" : "/NH-logo-black.svg"} 
      alt="Noise Heroes" 
      className={className}
    />
  );
}