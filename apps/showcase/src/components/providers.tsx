"use client";

import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <HeroUIProvider>
      <NextThemesProvider 
        attribute="class" 
        defaultTheme="system" 
        enableSystem
        themes={["light", "dark"]}
      >
        {children}
      </NextThemesProvider>
    </HeroUIProvider>
  );
}