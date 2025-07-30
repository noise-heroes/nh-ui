"use client";

import { Button, ButtonProps } from "@heroui/react";
import { motion } from "framer-motion";
import { animations, transitions } from "@/styles/animations";
import { ReactNode } from "react";

interface NHButtonProps extends ButtonProps {
  children: ReactNode;
  variant?: ButtonProps["variant"];
  color?: ButtonProps["color"];
  size?: ButtonProps["size"];
  animated?: boolean;
  glow?: boolean;
}

export function NHButton({ 
  children, 
  animated = true,
  glow = false,
  className = "",
  ...props 
}: NHButtonProps) {
  const MotionButton = motion(Button);
  
  if (!animated) {
    return (
      <Button className={className} {...props}>
        {children}
      </Button>
    );
  }
  
  return (
    <MotionButton
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={transitions.quick}
      className={`${className} ${glow ? 'nh-glow' : ''}`}
      {...props}
    >
      {children}
    </MotionButton>
  );
}