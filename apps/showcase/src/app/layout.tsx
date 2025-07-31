import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/providers";
import { SiteHeader } from "@/components/site-header";
import { ThemeDebug } from "@/components/theme-debug";

export const metadata: Metadata = {
  title: "NH-UI Showcase - Noise Heroes Design System",
  description: "Interactive showcase of the Noise Heroes UI components and design system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const buildTime = process.env.NODE_ENV === 'production' ? new Date().toISOString() : 'development';
  
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="build-time" content={buildTime} />
        <meta name="ui-version" content="heroui-2.8.2" />
      </head>
      <body>
        <Providers>
          <div className="min-h-screen">
            <SiteHeader />
            {children}
          </div>
          {/* Version indicator for debugging */}
          <div className="fixed bottom-2 right-2 text-xs text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded opacity-50 hover:opacity-100 transition-opacity">
            HeroUI • {buildTime}
          </div>
          <ThemeDebug />
        </Providers>
      </body>
    </html>
  );
}