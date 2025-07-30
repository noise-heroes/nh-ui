"use client";

import { Card, CardProps } from "@heroui/react";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "../utils/cn";

interface NHMinimalCardProps extends Omit<CardProps, 'className'> {
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
  hoverable?: boolean;
  compact?: boolean;
}

export function NHMinimalCard({ 
  children, 
  className,
  icon,
  hoverable = true,
  compact = false,
  ...props 
}: NHMinimalCardProps) {
  const cardClasses = cn(
    // Rounded corners for minimal aesthetic
    "rounded-2xl",
    // Minimal padding
    compact ? "p-4" : "p-6",
    // Hover effects
    hoverable && "hover:scale-[1.02] transition-all duration-300",
    // Remove default shadow for cleaner look
    "shadow-none border border-default-200",
    className
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Card className={cardClasses} {...props}>
        {icon && (
          <motion.div
            className="mb-4"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              {icon}
            </div>
          </motion.div>
        )}
        {children}
      </Card>
    </motion.div>
  );
}