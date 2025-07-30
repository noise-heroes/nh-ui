"use client";

import { Button, ButtonProps } from "@heroui/react";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "../utils/cn";

interface NHButtonProps extends ButtonProps {
  children: ReactNode;
  variant?: ButtonProps["variant"];
  color?: ButtonProps["color"];
  size?: ButtonProps["size"];
  animated?: boolean;
  glow?: boolean;
  pill?: boolean;
  circle?: boolean;
}

export function NHButton({ 
  children, 
  animated = true,
  glow = false,
  pill = false,
  circle = false,
  className = "",
  isIconOnly,
  ...props 
}: NHButtonProps) {
  // Apply pill or circle styling
  const buttonClasses = cn(
    pill && "!rounded-full px-6",
    circle && "!rounded-full !aspect-square",
    glow && 'nh-glow',
    className
  );

  // Enhanced hover effects for icon buttons
  const hoverScale = isIconOnly || circle ? 1.1 : 1.05;
  const hoverRotate = circle ? 12 : 0;
  
  if (!animated) {
    return (
      <Button 
        className={buttonClasses} 
        isIconOnly={isIconOnly || circle}
        {...props}
      >
        {children}
      </Button>
    );
  }
  
  return (
    <motion.div
      whileHover={{ 
        scale: hoverScale,
        rotate: hoverRotate 
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="inline-block"
    >
      <Button
        className={buttonClasses}
        isIconOnly={isIconOnly || circle}
        {...props}
      >
        {children}
      </Button>
    </motion.div>
  );
}