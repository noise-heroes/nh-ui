"use client";

import { NHProvider } from "@nh-ui/ui";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NHProvider>
      <NextThemesProvider 
        attribute="class" 
        defaultTheme="light"
      >
        {children}
      </NextThemesProvider>
    </NHProvider>
  );
}