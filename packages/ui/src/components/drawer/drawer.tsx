"use client";

import { ReactNode, forwardRef, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { cn } from "../../utils/cn";
import { Text } from "../text";
import { NHButton } from "../button";

export interface NHDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: ReactNode;
  position?: 'left' | 'right' | 'top' | 'bottom';
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  showCloseButton?: boolean;
  className?: string;
  overlayClassName?: string;
}

export const NHDrawer = forwardRef<HTMLDivElement, NHDrawerProps>(
  (
    { 
      isOpen, 
      onClose, 
      title, 
      description, 
      children, 
      position = 'right',
      size = 'md',
      showCloseButton = true,
      className,
      overlayClassName,
    }, 
    ref
  ) => {
    const sizeClasses = {
      sm: {
        left: 'max-w-sm',
        right: 'max-w-sm',
        top: 'max-h-96',
        bottom: 'max-h-96',
      },
      md: {
        left: 'max-w-md',
        right: 'max-w-md',
        top: 'max-h-[50vh]',
        bottom: 'max-h-[50vh]',
      },
      lg: {
        left: 'max-w-lg',
        right: 'max-w-lg',
        top: 'max-h-[70vh]',
        bottom: 'max-h-[70vh]',
      },
      xl: {
        left: 'max-w-xl',
        right: 'max-w-xl',
        top: 'max-h-[80vh]',
        bottom: 'max-h-[80vh]',
      },
      full: {
        left: 'max-w-full',
        right: 'max-w-full',
        top: 'max-h-full',
        bottom: 'max-h-full',
      },
    };

    const positionClasses = {
      left: 'inset-y-0 left-0',
      right: 'inset-y-0 right-0',
      top: 'inset-x-0 top-0',
      bottom: 'inset-x-0 bottom-0',
    };

    const slideTransition = {
      left: {
        enter: '-translate-x-full',
        enterTo: 'translate-x-0',
        leave: 'translate-x-0',
        leaveTo: '-translate-x-full',
      },
      right: {
        enter: 'translate-x-full',
        enterTo: 'translate-x-0',
        leave: 'translate-x-0',
        leaveTo: 'translate-x-full',
      },
      top: {
        enter: '-translate-y-full',
        enterTo: 'translate-y-0',
        leave: 'translate-y-0',
        leaveTo: '-translate-y-full',
      },
      bottom: {
        enter: 'translate-y-full',
        enterTo: 'translate-y-0',
        leave: 'translate-y-0',
        leaveTo: 'translate-y-full',
      },
    };

    const isHorizontal = position === 'left' || position === 'right';

    return (
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className={cn(
              "fixed inset-0 bg-black/50 backdrop-blur-sm",
              overlayClassName
            )} />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className={cn(
                "pointer-events-none fixed flex",
                positionClasses[position],
                isHorizontal ? 'max-w-full' : 'max-h-full'
              )}>
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-300"
                  enterFrom={slideTransition[position].enter}
                  enterTo={slideTransition[position].enterTo}
                  leave="transform transition ease-in-out duration-300"
                  leaveFrom={slideTransition[position].leave}
                  leaveTo={slideTransition[position].leaveTo}
                >
                  <Dialog.Panel 
                    ref={ref}
                    className={cn(
                      "pointer-events-auto relative w-full",
                      sizeClasses[size][position],
                      className
                    )}
                  >
                    <div className={cn(
                      "flex h-full flex-col bg-white dark:bg-black shadow-xl",
                      isHorizontal ? 'w-full' : 'h-full'
                    )}>
                      {/* Header */}
                      {(title || description || showCloseButton) && (
                        <div className="px-6 py-4 border-b border-default-200 dark:border-default-700">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              {title && (
                                <Dialog.Title>
                                  <Text variant="title">{title}</Text>
                                </Dialog.Title>
                              )}
                              {description && (
                                <Dialog.Description>
                                  <Text size="sm" color="muted" className="mt-1">
                                    {description}
                                  </Text>
                                </Dialog.Description>
                              )}
                            </div>
                            {showCloseButton && (
                              <NHButton
                                isIconOnly
                                variant="light"
                                size="sm"
                                onPress={onClose}
                                className="ml-4"
                              >
                                <XMarkIcon className="h-5 w-5" />
                              </NHButton>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Content */}
                      <div className="flex-1 overflow-y-auto p-6">
                        {children}
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    );
  }
);

NHDrawer.displayName = "NHDrawer";