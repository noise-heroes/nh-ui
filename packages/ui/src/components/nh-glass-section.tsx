"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "../utils/cn";

interface NHGlassSectionProps {
  children: ReactNode;
  className?: string;
  blur?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  overlay?: boolean;
  animated?: boolean;
}

export function NHGlassSection({ 
  children, 
  className,
  blur = 'lg',
  overlay = false,
  animated = true,
}: NHGlassSectionProps) {
  const blurClasses = {
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg',
    xl: 'backdrop-blur-xl',
    '2xl': 'backdrop-blur-2xl',
  };

  const sectionClasses = cn(
    // Base glass effect
    blurClasses[blur],
    overlay 
      ? "bg-white/30 dark:bg-black/30" 
      : "bg-white/50 dark:bg-black/50",
    "border border-white/10 dark:border-white/5",
    // Optional shadow
    !overlay && "shadow-glass-lg",
    // Padding
    "p-8 md:p-12 lg:p-16",
    // Border radius
    "rounded-2xl",
    className
  );

  if (!animated) {
    return (
      <section className={sectionClasses}>
        {children}
      </section>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={sectionClasses}
    >
      {children}
    </motion.section>
  );
}