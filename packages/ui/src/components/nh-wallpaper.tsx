"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "../utils/cn";

interface NHWallpaperProps {
  variant?: 'subtle' | 'vibrant' | 'mesh' | 'aurora';
  animated?: boolean;
  className?: string;
}

export function NHWallpaper({ 
  variant = 'subtle',
  animated = true,
  className 
}: NHWallpaperProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = resolvedTheme === 'dark';

  const variants = {
    subtle: {
      light: (
        <>
          <div className="absolute inset-0 bg-white" />
          <div className="absolute inset-0 bg-gradient-to-br from-orange-100/80 via-transparent to-teal-100/80" />
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-orange-50/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-teal-50/40 to-transparent" />
        </>
      ),
      dark: (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-orange-950/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-teal-950/30 to-transparent" />
        </>
      ),
    },
    vibrant: {
      light: (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-white to-teal-100" />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-200/40 via-transparent to-teal-200/40" />
          {animated && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-orange-300/20 via-transparent to-teal-300/20"
              animate={{
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          )}
        </>
      ),
      dark: (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/40 via-transparent to-teal-900/40" />
          {animated && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-orange-800/20 via-transparent to-teal-800/20"
              animate={{
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          )}
        </>
      ),
    },
    mesh: {
      light: (
        <>
          <div className="absolute inset-0 bg-white" />
          <div 
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: `
                radial-gradient(at 20% 30%, rgba(255, 85, 0, 0.3) 0px, transparent 50%),
                radial-gradient(at 80% 70%, rgba(0, 217, 181, 0.3) 0px, transparent 50%),
                radial-gradient(at 50% 50%, rgba(255, 85, 0, 0.1) 0px, transparent 50%)
              `,
            }}
          />
          {animated && (
            <motion.div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 30% 40%, rgba(255, 85, 0, 0.2) 0px, transparent 40%)
                `,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          )}
        </>
      ),
      dark: (
        <>
          <div className="absolute inset-0 bg-black" />
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `
                radial-gradient(at 20% 30%, rgba(255, 85, 0, 0.2) 0px, transparent 50%),
                radial-gradient(at 80% 70%, rgba(0, 217, 181, 0.2) 0px, transparent 50%),
                radial-gradient(at 50% 50%, rgba(255, 85, 0, 0.05) 0px, transparent 50%)
              `,
            }}
          />
        </>
      ),
    },
    aurora: {
      light: (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-white via-orange-50/20 to-white" />
          {animated && (
            <>
              <motion.div
                className="absolute inset-0 opacity-30"
                style={{
                  background: 'linear-gradient(45deg, transparent, rgba(255, 85, 0, 0.3), transparent)',
                }}
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.div
                className="absolute inset-0 opacity-30"
                style={{
                  background: 'linear-gradient(-45deg, transparent, rgba(0, 217, 181, 0.3), transparent)',
                }}
                animate={{
                  x: ['100%', '-100%'],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </>
          )}
        </>
      ),
      dark: (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
          {animated && (
            <>
              <motion.div
                className="absolute inset-0 opacity-20"
                style={{
                  background: 'linear-gradient(45deg, transparent, rgba(255, 85, 0, 0.2), transparent)',
                }}
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.div
                className="absolute inset-0 opacity-20"
                style={{
                  background: 'linear-gradient(-45deg, transparent, rgba(0, 217, 181, 0.2), transparent)',
                }}
                animate={{
                  x: ['100%', '-100%'],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </>
          )}
        </>
      ),
    },
  };

  return (
    <div 
      className={cn(
        "fixed inset-0 z-0 overflow-hidden",
        className
      )}
    >
      {isDark ? variants[variant].dark : variants[variant].light}
      
      {/* Noise texture overlay for subtle grain effect */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}