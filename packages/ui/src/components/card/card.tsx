"use client";

import { 
  Card as HeroUICard, 
  CardProps as HeroUICardProps,
  CardBody as HeroUICardBody,
  CardHeader as HeroUICardHeader,
  CardFooter as HeroUICardFooter,
} from "@heroui/react";
import { forwardRef } from "react";

// Card component
export interface NHCardProps extends HeroUICardProps {
  /**
   * Whether the card should have a blur effect
   */
  isBlurred?: boolean;
}

export const NHCard = forwardRef<HTMLDivElement, NHCardProps>(
  ({ isBlurred, className, ...props }, ref) => {
    const blurClasses = isBlurred 
      ? 'backdrop-blur-md bg-white/70 dark:bg-black/70' 
      : '';
    
    return (
      <HeroUICard
        ref={ref}
        className={`${blurClasses} ${className || ''}`}
        {...props}
      />
    );
  }
);

NHCard.displayName = "NHCard";

// CardBody component
export interface NHCardBodyProps {
  children?: React.ReactNode;
  className?: string;
  [key: string]: any; // Allow other props to pass through
}

export const NHCardBody = forwardRef<HTMLDivElement, NHCardBodyProps>(
  ({ children, className, ...props }, ref) => {
    return <HeroUICardBody className={className} {...props}>{children}</HeroUICardBody>;
  }
);

NHCardBody.displayName = "NHCardBody";

// CardHeader component
export interface NHCardHeaderProps {
  children?: React.ReactNode;
  className?: string;
  [key: string]: any; // Allow other props to pass through
}

export const NHCardHeader = forwardRef<HTMLDivElement, NHCardHeaderProps>(
  ({ children, className, ...props }, ref) => {
    return <HeroUICardHeader className={className} {...props}>{children}</HeroUICardHeader>;
  }
);

NHCardHeader.displayName = "NHCardHeader";

// CardFooter component
export interface NHCardFooterProps {
  children?: React.ReactNode;
  className?: string;
  [key: string]: any; // Allow other props to pass through
}

export const NHCardFooter = forwardRef<HTMLDivElement, NHCardFooterProps>(
  ({ children, className, ...props }, ref) => {
    return <HeroUICardFooter className={className} {...props}>{children}</HeroUICardFooter>;
  }
);

NHCardFooter.displayName = "NHCardFooter";