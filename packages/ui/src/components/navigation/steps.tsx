"use client";

import React, { forwardRef } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "../../utils/cn";
import { CheckIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const stepsVariants = tv({
  slots: {
    base: "w-full",
    list: "flex",
    item: "flex items-center flex-1",
    stepWrapper: "flex items-center",
    step: "relative flex items-center justify-center rounded-full transition-all duration-300",
    stepNumber: "font-medium",
    stepIcon: "",
    content: "ml-4",
    title: "font-medium",
    description: "text-sm mt-1",
    connector: "flex-1 h-[2px] mx-4",
  },
  variants: {
    variant: {
      default: {
        step: "border-2",
        connector: "bg-gray-200 dark:bg-gray-700",
        title: "text-gray-900 dark:text-gray-100",
        description: "text-gray-600 dark:text-gray-400",
      },
      solid: {
        step: "",
        connector: "bg-gray-200 dark:bg-gray-700",
        title: "text-gray-900 dark:text-gray-100",
        description: "text-gray-600 dark:text-gray-400",
      },
    },
    size: {
      sm: {
        step: "w-8 h-8 text-xs",
        stepIcon: "w-4 h-4",
        title: "text-sm",
        description: "text-xs",
      },
      md: {
        step: "w-10 h-10 text-sm",
        stepIcon: "w-5 h-5",
        title: "text-base",
        description: "text-sm",
      },
      lg: {
        step: "w-12 h-12 text-base",
        stepIcon: "w-6 h-6",
        title: "text-lg",
        description: "text-base",
      },
    },
    orientation: {
      horizontal: {
        list: "flex-row",
      },
      vertical: {
        list: "flex-col",
        item: "flex-col items-start",
        stepWrapper: "flex-col",
        content: "ml-0 mt-2 mb-8",
        connector: "hidden",
      },
    },
    status: {
      waiting: {},
      active: {},
      completed: {},
    },
  },
  compoundVariants: [
    // Default variant states
    {
      variant: "default",
      status: "waiting",
      class: {
        step: "border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400",
      },
    },
    {
      variant: "default",
      status: "active",
      class: {
        step: "border-orange-500 text-orange-600 dark:text-orange-400 shadow-[0_0_0_4px_rgba(251,146,60,0.1)]",
        title: "text-orange-600 dark:text-orange-400",
      },
    },
    {
      variant: "default",
      status: "completed",
      class: {
        step: "border-orange-500 bg-orange-500 text-white",
        connector: "bg-orange-500",
      },
    },
    // Solid variant states
    {
      variant: "solid",
      status: "waiting",
      class: {
        step: "bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400",
      },
    },
    {
      variant: "solid",
      status: "active",
      class: {
        step: "bg-orange-500 text-white shadow-[0_0_20px_rgba(251,146,60,0.4)]",
        title: "text-orange-600 dark:text-orange-400",
      },
    },
    {
      variant: "solid",
      status: "completed",
      class: {
        step: "bg-orange-500 text-white",
        connector: "bg-orange-500",
      },
    },
  ],
  defaultVariants: {
    variant: "default",
    size: "md",
    orientation: "horizontal",
  },
});

export interface Step {
  id: string;
  title: string;
  description?: string;
  icon?: React.ReactNode;
  status?: "waiting" | "active" | "completed";
}

export interface NHStepsProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "children">,
    Omit<VariantProps<typeof stepsVariants>, "status"> {
  steps: Step[];
  currentStep?: number;
  onStepClick?: (step: Step, index: number) => void;
  showConnector?: boolean;
  showStepNumber?: boolean;
  clickable?: boolean;
}

export const NHSteps = forwardRef<HTMLElement, NHStepsProps>(
  (
    {
      steps,
      currentStep = 0,
      onStepClick,
      showConnector = true,
      showStepNumber = true,
      clickable = true,
      className,
      variant,
      size,
      orientation,
      ...props
    },
    ref
  ) => {
    const getStepStatus = (index: number): "waiting" | "active" | "completed" => {
      if (index < currentStep) return "completed";
      if (index === currentStep) return "active";
      return "waiting";
    };

    const handleStepClick = (step: Step, index: number) => {
      if (!clickable || step.status === "waiting") return;
      onStepClick?.(step, index);
    };

    const baseStyles = stepsVariants({ variant, size, orientation });

    return (
      <nav
        ref={ref}
        className={cn(baseStyles.base(), className)}
        aria-label="Progress"
        {...props}
      >
        <ol className={baseStyles.list()}>
          {steps.map((step, index) => {
            const status = step.status || getStepStatus(index);
            const styles = stepsVariants({ variant, size, orientation, status });
            const isLast = index === steps.length - 1;
            const isClickable = clickable && status !== "waiting";

            return (
              <li key={step.id} className={styles.item()}>
                <div className={styles.stepWrapper()}>
                  <div
                    className={cn(
                      styles.step(),
                      isClickable && "cursor-pointer hover:scale-110"
                    )}
                    onClick={() => handleStepClick(step, index)}
                    role={isClickable ? "button" : undefined}
                    tabIndex={isClickable ? 0 : undefined}
                    aria-current={status === "active" ? "step" : undefined}
                    onKeyDown={(e) => {
                      if (isClickable && (e.key === "Enter" || e.key === " ")) {
                        e.preventDefault();
                        handleStepClick(step, index);
                      }
                    }}
                  >
                    {status === "completed" ? (
                      <CheckIcon className={styles.stepIcon()} />
                    ) : step.icon ? (
                      <span className={styles.stepIcon()}>{step.icon}</span>
                    ) : showStepNumber ? (
                      <span className={styles.stepNumber()}>{index + 1}</span>
                    ) : null}
                  </div>
                  
                  {orientation !== "vertical" && (
                    <div className={styles.content()}>
                      <div className={styles.title()}>{step.title}</div>
                      {step.description && (
                        <div className={styles.description()}>{step.description}</div>
                      )}
                    </div>
                  )}
                </div>

                {orientation === "vertical" && (
                  <div className={styles.content()}>
                    <div className={styles.title()}>{step.title}</div>
                    {step.description && (
                      <div className={styles.description()}>{step.description}</div>
                    )}
                  </div>
                )}

                {showConnector && !isLast && orientation === "horizontal" && (
                  <motion.div
                    className={styles.connector()}
                    initial={false}
                    animate={{
                      scaleX: status === "completed" ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    style={{ transformOrigin: "left" }}
                  />
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    );
  }
);

NHSteps.displayName = "NHSteps";