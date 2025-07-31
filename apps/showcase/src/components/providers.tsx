"use client";

import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider 
      attribute="class" 
      defaultTheme="light" 
      enableSystem
      storageKey="nh-ui-theme"
    >
      <HeroUIProvider>
        {children}
      </HeroUIProvider>
    </NextThemesProvider>
  );
}