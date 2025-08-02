"use client";

import React from "react";
import {
  NHModal,
  NHModalContent,
  NHModalHeader,
  NHModalBody,
  NHModalFooter,
} from "../modal";
import { NHButton } from "../button";
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import { tv } from "tailwind-variants";
import { IconWrapper } from "../utils/icon-wrapper";

const dialogVariants = tv({
  slots: {
    icon: "mx-auto flex h-12 w-12 items-center justify-center rounded-full",
    title: "text-center",
    description: "text-center text-gray-600 dark:text-gray-400",
  },
  variants: {
    type: {
      default: {
        icon: "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400",
      },
      info: {
        icon: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
      },
      success: {
        icon: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
      },
      warning: {
        icon: "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400",
      },
      error: {
        icon: "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400",
      },
    },
  },
  defaultVariants: {
    type: "default",
  },
});

const iconMap = {
  default: InformationCircleIcon,
  info: InformationCircleIcon,
  success: CheckCircleIcon,
  warning: ExclamationTriangleIcon,
  error: XCircleIcon,
};

export interface NHDialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  type?: "default" | "info" | "success" | "warning" | "error";
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm?: () => void | Promise<void>;
  confirmButtonColor?: "primary" | "secondary" | "success" | "warning" | "danger";
  isLoading?: boolean;
  isDismissable?: boolean;
  hideCloseButton?: boolean;
  showIcon?: boolean;
}

export const NHDialog: React.FC<NHDialogProps> = ({
  isOpen,
  onClose,
  title,
  description,
  type = "default",
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  onConfirm,
  confirmButtonColor,
  isLoading = false,
  isDismissable = true,
  hideCloseButton = true,
  showIcon = true,
}) => {
  const styles = dialogVariants({ type });
  const Icon = iconMap[type];

  const getButtonColor = () => {
    if (confirmButtonColor) return confirmButtonColor;
    switch (type) {
      case "error":
        return "danger";
      case "warning":
        return "warning";
      case "success":
        return "success";
      default:
        return "primary";
    }
  };

  const handleConfirm = async () => {
    if (onConfirm) {
      await onConfirm();
    }
    onClose();
  };

  return (
    <NHModal
      isOpen={isOpen}
      onClose={onClose}
      size="sm"
      isDismissable={isDismissable && !isLoading}
      hideCloseButton={hideCloseButton}
    >
      <NHModalContent>
        <NHModalBody className="text-center pt-8">
          {showIcon && (
            <div className={styles.icon()}>
              <IconWrapper icon={Icon} className="h-6 w-6" />
            </div>
          )}
          <div className="mt-4 space-y-2">
            <h3 className={styles.title()}>{title}</h3>
            {description && (
              <p className={styles.description()}>{description}</p>
            )}
          </div>
        </NHModalBody>
        <NHModalFooter className="justify-center pb-8">
          <NHButton
            variant="flat"
            color="default"
            onPress={onClose}
            isDisabled={isLoading}
          >
            {cancelLabel}
          </NHButton>
          <NHButton
            color={getButtonColor()}
            onPress={handleConfirm}
            isLoading={isLoading}
          >
            {confirmLabel}
          </NHButton>
        </NHModalFooter>
      </NHModalContent>
    </NHModal>
  );
};

NHDialog.displayName = "NHDialog";