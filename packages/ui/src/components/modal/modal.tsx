"use client";

import React, { forwardRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { tv, type VariantProps } from "tailwind-variants";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { clsx } from "clsx";
import { IconWrapper } from "../utils/icon-wrapper";

const modalVariants = tv({
  slots: {
    wrapper: "fixed inset-0 z-50 flex items-center justify-center",
    backdrop: "fixed inset-0 bg-black/50 backdrop-blur-sm",
    base: "relative bg-white dark:bg-gray-900 rounded-lg shadow-2xl flex flex-col max-h-[90vh] mx-4",
    header: "flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700",
    title: "text-lg font-semibold text-gray-900 dark:text-gray-100",
    closeButton: "p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors",
    body: "flex-1 overflow-y-auto p-6",
    footer: "flex items-center justify-end gap-2 p-6 border-t border-gray-200 dark:border-gray-700",
  },
  variants: {
    size: {
      sm: {
        base: "max-w-sm w-full",
      },
      md: {
        base: "max-w-md w-full",
      },
      lg: {
        base: "max-w-lg w-full",
      },
      xl: {
        base: "max-w-xl w-full",
      },
      "2xl": {
        base: "max-w-2xl w-full",
      },
      "3xl": {
        base: "max-w-3xl w-full",
      },
      "4xl": {
        base: "max-w-4xl w-full",
      },
      "5xl": {
        base: "max-w-5xl w-full",
      },
      full: {
        base: "max-w-full w-full h-full max-h-full rounded-none",
        body: "p-8",
      },
    },
    placement: {
      center: {
        wrapper: "items-center justify-center",
      },
      top: {
        wrapper: "items-start justify-center pt-20",
      },
      bottom: {
        wrapper: "items-end justify-center pb-20",
      },
    },
    blur: {
      sm: {
        backdrop: "backdrop-blur-sm",
      },
      md: {
        backdrop: "backdrop-blur-md",
      },
      lg: {
        backdrop: "backdrop-blur-lg",
      },
      none: {
        backdrop: "backdrop-blur-none",
      },
    },
  },
  defaultVariants: {
    size: "md",
    placement: "center",
    blur: "sm",
  },
});

interface ModalContextValue {
  isOpen: boolean;
  onClose: () => void;
}

const ModalContext = React.createContext<ModalContextValue | undefined>(undefined);

export interface NHModalProps extends VariantProps<typeof modalVariants> {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  hideCloseButton?: boolean;
  isDismissable?: boolean;
  isKeyboardDismissDisabled?: boolean;
  className?: string;
  backdrop?: "transparent" | "opaque" | "blur";
  scrollBehavior?: "inside" | "outside";
  motionProps?: {
    initial?: any;
    animate?: any;
    exit?: any;
    transition?: any;
  };
}

export const NHModal: React.FC<NHModalProps> = ({
  isOpen,
  onClose,
  children,
  hideCloseButton = false,
  isDismissable = true,
  isKeyboardDismissDisabled = false,
  className,
  size,
  placement,
  blur,
  scrollBehavior = "inside",
  motionProps,
}) => {
  const [mounted, setMounted] = useState(false);
  const styles = modalVariants({ size, placement, blur });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isKeyboardDismissDisabled && isOpen) {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onClose();
        }
      };
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen, onClose, isKeyboardDismissDisabled]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <ModalContext.Provider value={{ isOpen, onClose }}>
          <div className={styles.wrapper()}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className={styles.backdrop()}
              onClick={isDismissable ? onClose : undefined}
            />
            <motion.div
              initial={motionProps?.initial || { opacity: 0, scale: 0.95, y: 10 }}
              animate={motionProps?.animate || { opacity: 1, scale: 1, y: 0 }}
              exit={motionProps?.exit || { opacity: 0, scale: 0.95, y: 10 }}
              transition={motionProps?.transition || {
                type: "spring",
                duration: 0.3,
                bounce: 0.3,
              }}
              className={clsx(styles.base(), className)}
              onClick={(e) => e.stopPropagation()}
            >
              {children}
            </motion.div>
          </div>
        </ModalContext.Provider>
      )}
    </AnimatePresence>,
    document.body
  );
};

NHModal.displayName = "NHModal";

// Modal Content (wrapper for semantic structure)
export interface NHModalContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const NHModalContent = forwardRef<HTMLDivElement, NHModalContentProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={clsx("flex flex-col h-full", className)} {...props}>
        {children}
      </div>
    );
  }
);

NHModalContent.displayName = "NHModalContent";

// Modal Header
export interface NHModalHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  onClose?: () => void;
  hideCloseButton?: boolean;
}

export const NHModalHeader = forwardRef<HTMLDivElement, NHModalHeaderProps>(
  ({ children, className, onClose, hideCloseButton, ...props }, ref) => {
    const context = React.useContext(ModalContext);
    const styles = modalVariants();
    const handleClose = onClose || context?.onClose;

    return (
      <div ref={ref} className={clsx(styles.header(), className)} {...props}>
        <h2 className={styles.title()}>{children}</h2>
        {!hideCloseButton && handleClose && (
          <button
            type="button"
            onClick={handleClose}
            className={styles.closeButton()}
            aria-label="Close modal"
          >
            <IconWrapper icon={XMarkIcon} className="w-5 h-5" />
          </button>
        )}
      </div>
    );
  }
);

NHModalHeader.displayName = "NHModalHeader";

// Modal Body
export interface NHModalBodyProps extends React.HTMLAttributes<HTMLDivElement> {}

export const NHModalBody = forwardRef<HTMLDivElement, NHModalBodyProps>(
  ({ children, className, ...props }, ref) => {
    const styles = modalVariants();
    return (
      <div ref={ref} className={clsx(styles.body(), className)} {...props}>
        {children}
      </div>
    );
  }
);

NHModalBody.displayName = "NHModalBody";

// Modal Footer
export interface NHModalFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export const NHModalFooter = forwardRef<HTMLDivElement, NHModalFooterProps>(
  ({ children, className, ...props }, ref) => {
    const styles = modalVariants();
    return (
      <div ref={ref} className={clsx(styles.footer(), className)} {...props}>
        {children}
      </div>
    );
  }
);

NHModalFooter.displayName = "NHModalFooter";