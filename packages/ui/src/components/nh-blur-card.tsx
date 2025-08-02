"use client";

import { Card, CardProps } from "@heroui/react";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "../utils/cn";

export interface NHBlurCardProps extends Omit<CardProps, 'className'> {
  children: ReactNode;
  className?: string;
  blur?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
}

export function NHBlurCard({ 
  children, 
  className,
  blur = 'md',
  animated = true,
  ...props 
}: NHBlurCardProps) {
  const blurClasses = {
    xs: 'backdrop-blur-xs',
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg',
    xl: 'backdrop-blur-xl',
  };

  const blurCardClasses = cn(
    // Base blur effect
    blurClasses[blur],
    "bg-white/70 dark:bg-black/70",
    "border border-white/20 dark:border-white/10",
    "shadow-lg",
    // Hover state
    "hover:bg-white/80 dark:hover:bg-black/80",
    "hover:border-white/30 dark:hover:border-white/20",
    "hover:shadow-xl",
    // Transition
    "transition-all duration-300",
    className
  );

  if (!animated) {
    return (
      <Card className={blurCardClasses} {...props}>
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
      <Card className={blurCardClasses} {...props}>
        {children}
      </Card>
    </motion.div>
  );
}