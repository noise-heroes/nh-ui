"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "../utils/cn";
import { NHIconButton } from "./nh-icon-button";

interface NavItem {
  icon: ReactNode;
  label?: string;
  active?: boolean;
  onClick?: () => void;
}

interface NHNavProps {
  items: NavItem[];
  orientation?: 'horizontal' | 'vertical';
  showLabels?: boolean;
  className?: string;
}

export function NHNav({ 
  items, 
  orientation = 'horizontal',
  showLabels = false,
  className
}: NHNavProps) {
  const navClasses = cn(
    "flex gap-2",
    orientation === 'vertical' ? 'flex-col' : 'flex-row',
    className
  );

  return (
    <nav className={navClasses}>
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            delay: index * 0.1,
            duration: 0.3,
            ease: "easeOut"
          }}
          className={cn(
            "flex items-center gap-2",
            orientation === 'vertical' && 'w-full'
          )}
        >
          <NHIconButton
            color={item.active ? "primary" : "default"}
            variant={item.active ? "solid" : "light"}
            onClick={item.onClick}
            tooltip={!showLabels ? item.label : undefined}
          >
            {item.icon}
          </NHIconButton>
          
          {showLabels && item.label && (
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 0.1 }}
              className={cn(
                "text-sm",
                item.active ? "font-semibold" : "text-default-500"
              )}
            >
              {item.label}
            </motion.span>
          )}
        </motion.div>
      ))}
    </nav>
  );
}