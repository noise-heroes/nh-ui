"use client";

import { Button, ButtonProps, Tooltip } from "@heroui/react";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "../utils/cn";

interface NHIconButtonProps extends Omit<ButtonProps, 'isIconOnly'> {
  children: ReactNode;
  tooltip?: string;
  circle?: boolean;
  spin?: boolean;
  pulse?: boolean;
}

export function NHIconButton({ 
  children, 
  tooltip,
  circle = true,
  spin = false,
  pulse = false,
  className = "",
  size = "md",
  ...props 
}: NHIconButtonProps) {
  const buttonClasses = cn(
    circle && "!rounded-full",
    className
  );

  const iconButton = (
    <motion.div
      whileHover={{ 
        scale: 1.15,
        rotate: spin ? 360 : 15 
      }}
      whileTap={{ scale: 0.9 }}
      animate={pulse ? {
        scale: [1, 1.05, 1],
      } : {}}
      transition={pulse ? {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      } : {
        duration: 0.2,
        ease: "easeOut"
      }}
      className="inline-block"
    >
      <Button
        className={buttonClasses}
        isIconOnly
        size={size}
        {...props}
      >
        {children}
      </Button>
    </motion.div>
  );

  if (tooltip) {
    return (
      <Tooltip content={tooltip} placement="top">
        {iconButton}
      </Tooltip>
    );
  }

  return iconButton;
}