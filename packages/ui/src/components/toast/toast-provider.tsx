"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";
import { AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import { NHToast } from "./toast";
import type { Toast, ToastOptions, ToastPosition } from "./types";

interface ToastContextType {
  toasts: Toast[];
  addToast: (options: ToastOptions) => string;
  removeToast: (id: string) => void;
  position: ToastPosition;
  setPosition: (position: ToastPosition) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

let toastCount = 0;

export interface ToastProviderProps {
  children: ReactNode;
  position?: ToastPosition;
}

export function ToastProvider({
  children,
  position: defaultPosition = "bottom-right",
}: ToastProviderProps) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [position, setPosition] = useState<ToastPosition>(defaultPosition);
  const [mounted, setMounted] = useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const addToast = useCallback(
    (options: ToastOptions) => {
      const id = `toast-${toastCount++}`;
      const toast: Toast = {
        id,
        ...options,
      };
      setToasts((prev) => [...prev, toast]);
      return id;
    },
    []
  );

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider
      value={{ toasts, addToast, removeToast, position, setPosition }}
    >
      {children}
      {mounted &&
        createPortal(
          <div className="fixed inset-0 pointer-events-none z-50">
            <AnimatePresence mode="sync">
              {toasts.map((toast) => (
                <div key={toast.id} className="pointer-events-auto">
                  <NHToast
                    {...toast}
                    position={position}
                    onClose={() => removeToast(toast.id)}
                  />
                </div>
              ))}
            </AnimatePresence>
          </div>,
          document.body
        )}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }

  const { addToast, removeToast, position, setPosition } = context;

  const toast = useCallback(
    (options: ToastOptions) => {
      return addToast(options);
    },
    [addToast]
  );

  // Convenience methods
  const success = useCallback(
    (options: Omit<ToastOptions, "variant">) => {
      return addToast({ ...options, variant: "success" });
    },
    [addToast]
  );

  const error = useCallback(
    (options: Omit<ToastOptions, "variant">) => {
      return addToast({ ...options, variant: "error" });
    },
    [addToast]
  );

  const warning = useCallback(
    (options: Omit<ToastOptions, "variant">) => {
      return addToast({ ...options, variant: "warning" });
    },
    [addToast]
  );

  const info = useCallback(
    (options: Omit<ToastOptions, "variant">) => {
      return addToast({ ...options, variant: "info" });
    },
    [addToast]
  );

  return {
    toast,
    success,
    error,
    warning,
    info,
    dismiss: removeToast,
    position,
    setPosition,
  };
}