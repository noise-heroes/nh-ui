"use client";

import { Button, ButtonProps } from "@heroui/react";
import { motion } from "framer-motion";
// import { animations, transitions } from "@/styles/animations";
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
  if (!animated) {
    return (
      <Button className={className} {...props}>
        {children}
      </Button>
    );
  }
  
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="inline-block"
    >
      <Button
        className={`${className} ${glow ? 'nh-glow' : ''}`}
        {...props}
      >
        {children}
      </Button>
    </motion.div>
  );
}