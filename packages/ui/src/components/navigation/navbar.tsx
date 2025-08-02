"use client";

import React, { forwardRef } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "../../utils/cn";
import { motion } from "framer-motion";

const navbarVariants = tv({
  slots: {
    base: "w-full transition-all duration-300",
    wrapper: "flex items-center justify-between",
    brand: "flex items-center gap-3",
    brandLogo: "flex-shrink-0",
    brandText: "font-semibold text-lg",
    content: "flex items-center gap-4",
    start: "flex items-center gap-4",
    center: "flex items-center gap-4",
    end: "flex items-center gap-4",
    item: "transition-colors duration-200",
    menuToggle: "lg:hidden",
  },
  variants: {
    variant: {
      default: {
        base: "bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700",
        brandText: "text-gray-900 dark:text-gray-100",
        item: "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100",
      },
      sticky: {
        base: "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 sticky top-0 z-40",
        brandText: "text-gray-900 dark:text-gray-100",
        item: "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100",
      },
      floating: {
        base: "fixed top-4 left-4 right-4 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 z-40",
        brandText: "text-gray-900 dark:text-gray-100",
        item: "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100",
      },
      transparent: {
        base: "bg-transparent",
        brandText: "text-gray-900 dark:text-gray-100",
        item: "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100",
      },
    },
    height: {
      sm: { wrapper: "h-14 px-4" },
      md: { wrapper: "h-16 px-6" },
      lg: { wrapper: "h-20 px-8" },
    },
    isBlurred: {
      true: { base: "backdrop-blur-md" },
    },
    isBordered: {
      true: { base: "border-b border-gray-200 dark:border-gray-700" },
    },
    isSticky: {
      true: { base: "sticky top-0 z-40" },
    },
    maxWidth: {
      sm: { wrapper: "max-w-screen-sm mx-auto" },
      md: { wrapper: "max-w-screen-md mx-auto" },
      lg: { wrapper: "max-w-screen-lg mx-auto" },
      xl: { wrapper: "max-w-screen-xl mx-auto" },
      "2xl": { wrapper: "max-w-screen-2xl mx-auto" },
      full: { wrapper: "w-full" },
    },
  },
  defaultVariants: {
    variant: "default",
    height: "md",
    maxWidth: "2xl",
  },
});

export interface NHNavbarProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "children">,
    VariantProps<typeof navbarVariants> {
  brand?: React.ReactNode;
  brandLogo?: React.ReactNode;
  brandText?: string;
  brandHref?: string;
  startContent?: React.ReactNode;
  centerContent?: React.ReactNode;
  endContent?: React.ReactNode;
  menuToggle?: React.ReactNode;
  onBrandClick?: () => void;
  shouldHideOnScroll?: boolean;
}

export const NHNavbar = forwardRef<HTMLElement, NHNavbarProps>(
  (
    {
      brand,
      brandLogo,
      brandText,
      brandHref,
      startContent,
      centerContent,
      endContent,
      menuToggle,
      onBrandClick,
      shouldHideOnScroll = false,
      className,
      variant,
      height,
      isBlurred,
      isBordered,
      isSticky,
      maxWidth,
      ...props
    },
    ref
  ) => {
    const [isHidden, setIsHidden] = React.useState(false);
    const [lastScrollY, setLastScrollY] = React.useState(0);
    
    const styles = navbarVariants({
      variant,
      height,
      isBlurred,
      isBordered,
      isSticky,
      maxWidth,
    });

    React.useEffect(() => {
      if (!shouldHideOnScroll) return;

      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        setIsHidden(currentScrollY > lastScrollY && currentScrollY > 100);
        setLastScrollY(currentScrollY);
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }, [shouldHideOnScroll, lastScrollY]);

    const brandContent = brand || (
      <>
        {brandLogo && <div className={styles.brandLogo()}>{brandLogo}</div>}
        {brandText && <span className={styles.brandText()}>{brandText}</span>}
      </>
    );

    return (
      <motion.nav
        ref={ref}
        className={cn(styles.base(), className)}
        animate={{
          y: shouldHideOnScroll && isHidden ? -100 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className={styles.wrapper()}>
          {/* Brand */}
          {(brand || brandLogo || brandText) && (
            <div className={styles.start()}>
              {brandHref ? (
                <a
                  href={brandHref}
                  className={styles.brand()}
                  onClick={onBrandClick}
                >
                  {brandContent}
                </a>
              ) : (
                <div
                  className={cn(styles.brand(), onBrandClick && "cursor-pointer")}
                  onClick={onBrandClick}
                  role={onBrandClick ? "button" : undefined}
                  tabIndex={onBrandClick ? 0 : undefined}
                >
                  {brandContent}
                </div>
              )}
              {startContent && (
                <div className="flex items-center gap-4">{startContent}</div>
              )}
            </div>
          )}

          {/* Center content */}
          {centerContent && (
            <div className={styles.center()}>{centerContent}</div>
          )}

          {/* End content */}
          <div className={styles.end()}>
            {endContent}
            {menuToggle && (
              <div className={styles.menuToggle()}>{menuToggle}</div>
            )}
          </div>
        </div>
      </motion.nav>
    );
  }
);

NHNavbar.displayName = "NHNavbar";