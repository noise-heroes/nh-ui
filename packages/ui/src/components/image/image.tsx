"use client";

import { 
  Image as HeroUIImage, 
  ImageProps as HeroUIImageProps,
} from "@heroui/react";
import { forwardRef } from "react";

export interface NHImageProps extends HeroUIImageProps {
  /**
   * Whether the image should have a blur effect while loading
   */
  blurDataURL?: string;
}

export const NHImage = forwardRef<HTMLImageElement, NHImageProps>(
  ({ className, ...props }, ref) => {
    return (
      <HeroUIImage
        ref={ref}
        className={className}
        {...props}
      />
    );
  }
);

NHImage.displayName = "NHImage";