"use client";

import {
  Container,
  Stack,
  Text,
  Grid,
  NHCard,
  NHCardBody,
  NHCardHeader,
  NHCode,
  NHChip,
  NHTabs,
  NHTab,
  NHButton,
  NHDivider,
  Box,
  RocketLaunchIcon,
  CommandLineIcon,
  DocumentDuplicateIcon,
  CubeIcon,
  CheckCircleIcon,
  ArrowRightIcon,
} from "@nh-ui/ui";
import { useState } from "react";

export default function GettingStartedPage() {
  const [selectedTab, setSelectedTab] = useState("npm");
  const [selectedFramework, setSelectedFramework] = useState("next");

  return (
    <Container size="xl">
      <Stack spacing={12} className="py-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <Text variant="display" gradient="brand" className="mb-4">
            Getting Started
          </Text>
          <Text size="lg" color="muted" className="leading-relaxed">
            Start building beautiful, accessible applications with the Noise Heroes 
            design system in minutes. Follow our step-by-step guide to get up and running.
          </Text>
        </div>

        {/* Quick Start */}
        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12">
          <Stack spacing={6}>
            <div className="flex items-center gap-3">
              <RocketLaunchIcon className="h-8 w-8 text-primary" />
              <Text variant="headline">Quick Start</Text>
            </div>
            
            <Text color="muted">
              Get a new project running with NH-UI in under 5 minutes. We'll set up 
              everything you need including components, themes, and authentication.
            </Text>

            <Grid cols={{ base: 1, md: 3 }} gap={4}>
              <div className="flex items-start gap-3">
                <NHChip color="primary" size="sm">1</NHChip>
                <div>
                  <Text weight="semibold" size="sm">Create Project</Text>
                  <Text size="xs" color="muted">Use our CLI to scaffold</Text>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <NHChip color="primary" size="sm">2</NHChip>
                <div>
                  <Text weight="semibold" size="sm">Install Dependencies</Text>
                  <Text size="xs" color="muted">Get all required packages</Text>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <NHChip color="primary" size="sm">3</NHChip>
                <div>
                  <Text weight="semibold" size="sm">Start Building</Text>
                  <Text size="xs" color="muted">Launch your dev server</Text>
                </div>
              </div>
            </Grid>

            <Box>
              <NHCode className="block p-4 bg-black/50 rounded-lg text-white">
                npx create-nh-app@latest my-app
              </NHCode>
            </Box>
          </Stack>
        </div>

        {/* Installation Steps */}
        <div>
          <Text variant="headline" className="mb-6">
            Manual Installation
          </Text>
          
          <Stack spacing={8}>
            {/* Step 1 */}
            <NHCard>
              <NHCardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <NHChip color="secondary">Step 1</NHChip>
                    <Text variant="title">Install NH-UI</Text>
                  </div>
                  <CommandLineIcon className="h-5 w-5 text-default-400" />
                </div>
              </NHCardHeader>
              <NHCardBody>
                <Stack spacing={4}>
                  <Text color="muted">
                    First, install the NH-UI package and its peer dependencies using your 
                    preferred package manager.
                  </Text>
                  
                  <NHTabs 
                    selectedKey={selectedTab}
                    onSelectionChange={(key) => setSelectedTab(key as string)}
                    aria-label="Package manager"
                  >
                    <NHTab key="npm" title="npm">
                      <Box className="mt-4">
                        <NHCode className="block p-4 bg-default-100 rounded-lg">
                          npm install @nh-ui/ui @heroui/react framer-motion
                        </NHCode>
                      </Box>
                    </NHTab>
                    <NHTab key="pnpm" title="pnpm">
                      <Box className="mt-4">
                        <NHCode className="block p-4 bg-default-100 rounded-lg">
                          pnpm add @nh-ui/ui @heroui/react framer-motion
                        </NHCode>
                      </Box>
                    </NHTab>
                    <NHTab key="yarn" title="yarn">
                      <Box className="mt-4">
                        <NHCode className="block p-4 bg-default-100 rounded-lg">
                          yarn add @nh-ui/ui @heroui/react framer-motion
                        </NHCode>
                      </Box>
                    </NHTab>
                  </NHTabs>
                </Stack>
              </NHCardBody>
            </NHCard>

            {/* Step 2 */}
            <NHCard>
              <NHCardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <NHChip color="secondary">Step 2</NHChip>
                    <Text variant="title">Setup Tailwind CSS</Text>
                  </div>
                  <DocumentDuplicateIcon className="h-5 w-5 text-default-400" />
                </div>
              </NHCardHeader>
              <NHCardBody>
                <Stack spacing={4}>
                  <Text color="muted">
                    Configure Tailwind CSS with the HeroUI plugin. Create or update your 
                    tailwind.config.js file:
                  </Text>
                  
                  <NHCode className="block p-4 bg-default-100 rounded-lg overflow-x-auto">
{`const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nh-ui/ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [heroui({
    themes: {
      light: {
        colors: {
          primary: {
            DEFAULT: "#FF5500",
            foreground: "#FFFFFF",
          },
          secondary: {
            DEFAULT: "#00D9B5",
            foreground: "#000000",
          },
        },
      },
      dark: {
        colors: {
          primary: {
            DEFAULT: "#FF5500",
            foreground: "#FFFFFF",
          },
          secondary: {
            DEFAULT: "#00D9B5",
            foreground: "#000000",
          },
        },
      },
    },
  })],
};`}
                  </NHCode>
                </Stack>
              </NHCardBody>
            </NHCard>

            {/* Step 3 */}
            <NHCard>
              <NHCardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <NHChip color="secondary">Step 3</NHChip>
                    <Text variant="title">Setup Provider</Text>
                  </div>
                  <CubeIcon className="h-5 w-5 text-default-400" />
                </div>
              </NHCardHeader>
              <NHCardBody>
                <Stack spacing={4}>
                  <Text color="muted">
                    Wrap your application with the NH Provider to enable theming and 
                    component functionality.
                  </Text>
                  
                  <NHTabs 
                    selectedKey={selectedFramework}
                    onSelectionChange={(key) => setSelectedFramework(key as string)}
                    aria-label="Framework"
                  >
                    <NHTab key="next" title="Next.js">
                      <Box className="mt-4">
                        <Text size="sm" color="muted" className="mb-3">
                          In your app/layout.tsx or pages/_app.tsx:
                        </Text>
                        <NHCode className="block p-4 bg-default-100 rounded-lg overflow-x-auto">
{`import { NHProvider } from "@nh-ui/ui";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NHProvider>
          {children}
        </NHProvider>
      </body>
    </html>
  );
}`}
                        </NHCode>
                      </Box>
                    </NHTab>
                    <NHTab key="react" title="React">
                      <Box className="mt-4">
                        <Text size="sm" color="muted" className="mb-3">
                          In your main.tsx or index.tsx:
                        </Text>
                        <NHCode className="block p-4 bg-default-100 rounded-lg overflow-x-auto">
{`import React from "react";
import ReactDOM from "react-dom/client";
import { NHProvider } from "@nh-ui/ui";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NHProvider>
      <App />
    </NHProvider>
  </React.StrictMode>
);`}
                        </NHCode>
                      </Box>
                    </NHTab>
                    <NHTab key="remix" title="Remix">
                      <Box className="mt-4">
                        <Text size="sm" color="muted" className="mb-3">
                          In your app/root.tsx:
                        </Text>
                        <NHCode className="block p-4 bg-default-100 rounded-lg overflow-x-auto">
{`import { NHProvider } from "@nh-ui/ui";

export default function App() {
  return (
    <html>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <NHProvider>
          <Outlet />
        </NHProvider>
        <Scripts />
      </body>
    </html>
  );
}`}
                        </NHCode>
                      </Box>
                    </NHTab>
                  </NHTabs>
                </Stack>
              </NHCardBody>
            </NHCard>

            {/* Step 4 */}
            <NHCard>
              <NHCardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <NHChip color="secondary">Step 4</NHChip>
                    <Text variant="title">Start Using Components</Text>
                  </div>
                  <CheckCircleIcon className="h-5 w-5 text-success" />
                </div>
              </NHCardHeader>
              <NHCardBody>
                <Stack spacing={4}>
                  <Text color="muted">
                    You're all set! Import and use any NH-UI component in your application.
                  </Text>
                  
                  <NHCode className="block p-4 bg-default-100 rounded-lg overflow-x-auto">
{`import { NHButton, NHCard, NHCardBody } from "@nh-ui/ui";

export default function MyComponent() {
  return (
    <NHCard>
      <NHCardBody>
        <NHButton color="primary">
          Hello NH-UI!
        </NHButton>
      </NHCardBody>
    </NHCard>
  );
}`}
                  </NHCode>
                </Stack>
              </NHCardBody>
            </NHCard>
          </Stack>
        </div>

        <NHDivider />

        {/* What's Included */}
        <div>
          <Text variant="headline" className="mb-6 text-center">
            What's Included
          </Text>
          
          <Grid cols={{ base: 1, md: 2, lg: 3 }} gap={6}>
            <NHCard>
              <NHCardBody>
                <Stack spacing={3}>
                  <Text variant="title">40+ Components</Text>
                  <Text size="sm" color="muted">
                    Production-ready components for every use case, from basic buttons 
                    to complex data tables.
                  </Text>
                </Stack>
              </NHCardBody>
            </NHCard>

            <NHCard>
              <NHCardBody>
                <Stack spacing={3}>
                  <Text variant="title">Design Tokens</Text>
                  <Text size="sm" color="muted">
                    Comprehensive color palette, typography scale, spacing system, 
                    and more.
                  </Text>
                </Stack>
              </NHCardBody>
            </NHCard>

            <NHCard>
              <NHCardBody>
                <Stack spacing={3}>
                  <Text variant="title">Dark Mode</Text>
                  <Text size="sm" color="muted">
                    Built-in dark mode support with automatic theme switching and 
                    persistence.
                  </Text>
                </Stack>
              </NHCardBody>
            </NHCard>

            <NHCard>
              <NHCardBody>
                <Stack spacing={3}>
                  <Text variant="title">TypeScript</Text>
                  <Text size="sm" color="muted">
                    Full TypeScript support with comprehensive type definitions 
                    and IntelliSense.
                  </Text>
                </Stack>
              </NHCardBody>
            </NHCard>

            <NHCard>
              <NHCardBody>
                <Stack spacing={3}>
                  <Text variant="title">Accessibility</Text>
                  <Text size="sm" color="muted">
                    WCAG 2.1 AA compliant components with keyboard navigation 
                    and screen reader support.
                  </Text>
                </Stack>
              </NHCardBody>
            </NHCard>

            <NHCard>
              <NHCardBody>
                <Stack spacing={3}>
                  <Text variant="title">Responsive</Text>
                  <Text size="sm" color="muted">
                    Mobile-first responsive design with 5 breakpoints and 
                    flexible layouts.
                  </Text>
                </Stack>
              </NHCardBody>
            </NHCard>
          </Grid>
        </div>

        {/* Next Steps */}
        <div className="bg-default-100 rounded-2xl p-8 md:p-12">
          <Stack spacing={6}>
            <Text variant="headline" className="text-center">
              Next Steps
            </Text>
            
            <Grid cols={{ base: 1, md: 2 }} gap={6} className="max-w-4xl mx-auto">
              <NHButton 
                color="primary" 
                size="lg" 
                className="justify-between"
                endContent={<ArrowRightIcon className="h-5 w-5" />}
              >
                Browse Components
              </NHButton>
              
              <NHButton 
                variant="bordered"
                size="lg" 
                className="justify-between"
                endContent={<ArrowRightIcon className="h-5 w-5" />}
              >
                Read Design Guidelines
              </NHButton>
              
              <NHButton 
                variant="bordered"
                size="lg" 
                className="justify-between"
                endContent={<ArrowRightIcon className="h-5 w-5" />}
              >
                View Examples
              </NHButton>
              
              <NHButton 
                variant="bordered"
                size="lg" 
                className="justify-between"
                endContent={<ArrowRightIcon className="h-5 w-5" />}
              >
                Join Community
              </NHButton>
            </Grid>
          </Stack>
        </div>
      </Stack>
    </Container>
  );
}