"use client";

import { NHProvider, ThemeProvider as NextThemesProvider } from "@nh-ui/ui";

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