"use client";

import { Spacer as HeroUISpacer, SpacerProps as HeroUISpacerProps } from "@heroui/react";
import { forwardRef } from "react";

export interface NHSpacerProps extends HeroUISpacerProps {}

export const NHSpacer = forwardRef<HTMLDivElement, NHSpacerProps>(
  (props, ref) => {
    return <HeroUISpacer ref={ref} {...props} />;
  }
);

NHSpacer.displayName = "NHSpacer";