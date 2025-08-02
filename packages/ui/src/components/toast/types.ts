export type ToastVariant = "default" | "success" | "error" | "warning" | "info";
export type ToastPosition = "top" | "bottom" | "top-left" | "top-right" | "bottom-left" | "bottom-right";

export interface Toast {
  id: string;
  title?: string;
  description?: string;
  variant?: ToastVariant;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export interface ToastOptions extends Omit<Toast, "id"> {
  position?: ToastPosition;
}

export interface NHToastProps extends Toast {
  onClose: () => void;
  position?: ToastPosition;
}