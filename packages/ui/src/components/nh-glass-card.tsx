"use client";

import { Card, CardProps } from "@heroui/react";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "../utils/cn";

interface NHGlassCardProps extends Omit<CardProps, 'className'> {
  children: ReactNode;
  className?: string;
  blur?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
}

export function NHGlassCard({ 
  children, 
  className,
  blur = 'md',
  animated = true,
  ...props 
}: NHGlassCardProps) {
  const blurClasses = {
    xs: 'backdrop-blur-xs',
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg',
    xl: 'backdrop-blur-xl',
  };

  const glassClasses = cn(
    // Base glass effect
    blurClasses[blur],
    "bg-white/70 dark:bg-black/70",
    "border border-white/20 dark:border-white/10",
    "shadow-glass-md",
    // Hover state
    "hover:bg-white/80 dark:hover:bg-black/80",
    "hover:border-white/30 dark:hover:border-white/20",
    "hover:shadow-glass-lg",
    // Transition
    "transition-all duration-300",
    className
  );

  if (!animated) {
    return (
      <Card className={glassClasses} {...props}>
        {children}
      </Card>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Card className={glassClasses} {...props}>
        {children}
      </Card>
    </motion.div>
  );
}