"use client";

import React, { Component, ErrorInfo, ReactNode } from "react";
import { NHEmptyState } from "../empty-state";
import { NHButton } from "../button";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { IconWrapper } from "../utils/icon-wrapper";

export interface ErrorFallbackProps {
  error: Error;
  resetError: () => void;
  errorInfo?: ErrorInfo | null;
}

const DefaultErrorFallback: React.FC<ErrorFallbackProps> = ({
  error,
  resetError,
  errorInfo,
}) => {
  const isDevelopment = process.env.NODE_ENV === "development";

  return (
    <div className="min-h-[400px] flex items-center justify-center p-4">
      <NHEmptyState
        icon={<IconWrapper icon={XCircleIcon} className="w-12 h-12 text-red-500" />}
        title="Something went wrong"
        description={
          isDevelopment
            ? error.message
            : "An unexpected error occurred. Please try again."
        }
        actions={[
          {
            label: "Try again",
            onClick: resetError,
            color: "primary",
          },
          {
            label: "Go home",
            onClick: () => (window.location.href = "/"),
            variant: "flat",
          },
        ]}
      />
      {isDevelopment && errorInfo && (
        <details className="mt-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg max-w-2xl mx-auto">
          <summary className="cursor-pointer font-medium text-gray-700 dark:text-gray-300">
            Error details
          </summary>
          <pre className="mt-2 text-xs text-gray-600 dark:text-gray-400 whitespace-pre-wrap overflow-auto">
            {errorInfo.componentStack}
          </pre>
        </details>
      )}
    </div>
  );
};

export interface NHErrorBoundaryProps {
  children: ReactNode;
  fallback?: React.ComponentType<ErrorFallbackProps>;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  resetKeys?: Array<string | number>;
  resetOnPropsChange?: boolean;
  isolate?: boolean;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class NHErrorBoundary extends Component<
  NHErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: NHErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error,
      errorInfo: null,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error caught by NHErrorBoundary:", error, errorInfo);
    
    this.setState({
      errorInfo,
    });

    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  componentDidUpdate(prevProps: NHErrorBoundaryProps) {
    const { resetKeys, resetOnPropsChange } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      // Reset on prop change if enabled
      if (resetOnPropsChange && prevProps.children !== this.props.children) {
        this.resetError();
        return;
      }

      // Reset on resetKeys change
      if (
        resetKeys &&
        prevProps.resetKeys &&
        resetKeys.some(
          (key, index) => key !== prevProps.resetKeys![index]
        )
      ) {
        this.resetError();
      }
    }
  }

  resetError = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  render() {
    const { hasError, error, errorInfo } = this.state;
    const { children, fallback: Fallback = DefaultErrorFallback, isolate } = this.props;

    if (hasError && error) {
      const errorBoundaryContent = (
        <Fallback
          error={error}
          resetError={this.resetError}
          errorInfo={errorInfo}
        />
      );

      if (isolate) {
        return (
          <div className="error-boundary-wrapper">
            {errorBoundaryContent}
          </div>
        );
      }

      return errorBoundaryContent;
    }

    return children;
  }
}