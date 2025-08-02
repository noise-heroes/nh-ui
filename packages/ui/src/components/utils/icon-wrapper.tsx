import React from "react";

interface IconWrapperProps {
  icon: React.ComponentType<any>;
  className?: string;
  [key: string]: any;
}

// Utility component to wrap Heroicons with proper typing
export const IconWrapper: React.FC<IconWrapperProps> = ({ icon: Icon, className, ...props }) => {
  return React.createElement(Icon, { className, ...props });
};