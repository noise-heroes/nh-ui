"use client";

import { 
  NHButton, 
  NHCard, 
  NHCardBody,
  NHCardHeader,
  NHChip,
  NHDivider,
  NHLink,
  NHTab,
  NHTabs,
  NHCode,
  NHSpacer,
  SparklesIcon,
  SwatchIcon,
  CubeIcon,
  CodeBracketIcon,
  BookOpenIcon,
  PaintBrushIcon,
  Square3Stack3DIcon,
  Squares2X2Icon,
  BeakerIcon,
  ArrowDownTrayIcon,
} from "@nh-ui/ui";
import { useState } from "react";

export default function HomePage() {
  const [selected, setSelected] = useState("overview");

  return (
    <>
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 text-center relative z-10">
        <h1 className="text-6xl font-bold mb-4">
          Noise Heroes
          <span className="nh-gradient-text">
            {" "}Human Interface
          </span>
        </h1>
        <h2 className="text-3xl font-semibold mb-6 text-default-700">
          Design Guidelines
        </h2>
        
        <p className="text-xl text-default-600 mb-8 max-w-2xl mx-auto">
          Comprehensive design system and component library for building exceptional Noise Heroes applications
        </p>
        
        <div className="flex gap-4 justify-center">
          <NHButton color="primary" size="lg" startContent={<BookOpenIcon className="h-5 w-5" />}>
            Read Guidelines
          </NHButton>
          <NHButton variant="bordered" size="lg" startContent={<CubeIcon className="h-5 w-5" />}>
            Browse Components
          </NHButton>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-6 py-16 relative z-10">
        <NHTabs 
          aria-label="Documentation sections" 
          selectedKey={selected}
          onSelectionChange={(key) => setSelected(key as string)}
          color="primary"
          variant="underlined"
          classNames={{
            tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",
            cursor: "w-full bg-primary",
            tab: "max-w-fit px-0 h-12",
          }}
        >
          <NHTab
            key="overview"
            title={
              <div className="flex items-center space-x-2">
                <BookOpenIcon className="h-5 w-5" />
                <span>Overview</span>
              </div>
            }
          >
            <div className="grid gap-6 mt-6 md:grid-cols-2">
              <NHCard>
                <NHCardHeader>
                  <h3 className="text-xl font-semibold">Design Philosophy</h3>
                </NHCardHeader>
                <NHCardBody>
                  <p className="text-default-600 mb-4">
                    The Noise Heroes design system is built on principles of boldness, modernity, and accessibility. 
                    Every component is crafted to deliver exceptional user experiences.
                  </p>
                  <NHLink href="/principles" color="primary">
                    <NHButton color="primary" variant="flat">
                      Explore Design Principles
                    </NHButton>
                  </NHLink>
                </NHCardBody>
              </NHCard>

              <NHCard>
                <NHCardHeader>
                  <h3 className="text-xl font-semibold">Getting Started</h3>
                </NHCardHeader>
                <NHCardBody>
                  <p className="text-default-600 mb-4">
                    Start building with our comprehensive component library. From installation to your first component, 
                    we'll guide you through the process.
                  </p>
                  <NHLink href="/getting-started" color="primary">
                    <NHButton color="primary" variant="flat">
                      Quick Start Guide
                    </NHButton>
                  </NHLink>
                </NHCardBody>
              </NHCard>
            </div>
          </NHTab>
          
          <NHTab
            key="foundations"
            title={
              <div className="flex items-center space-x-2">
                <Square3Stack3DIcon className="h-5 w-5" />
                <span>Foundations</span>
              </div>
            }
          >
            <div className="grid gap-6 mt-6 md:grid-cols-3">
              <NHCard>
                <NHCardHeader>
                  <h3 className="text-lg font-semibold">Design Tokens</h3>
                </NHCardHeader>
                <NHCardBody>
                  <p className="text-default-600 mb-4">
                    Core values that define our visual language: colors, typography, spacing, and more.
                  </p>
                  <NHLink href="/foundation" color="primary" size="sm">
                    View Tokens →
                  </NHLink>
                </NHCardBody>
              </NHCard>

              <NHCard>
                <NHCardHeader>
                  <h3 className="text-lg font-semibold">Color System</h3>
                </NHCardHeader>
                <NHCardBody>
                  <p className="text-default-600 mb-4">
                    Semantic color palette designed for clarity, accessibility, and brand expression.
                  </p>
                  <NHLink href="/colors" color="primary" size="sm">
                    Explore Colors →
                  </NHLink>
                </NHCardBody>
              </NHCard>

              <NHCard>
                <NHCardHeader>
                  <h3 className="text-lg font-semibold">Typography</h3>
                </NHCardHeader>
                <NHCardBody>
                  <p className="text-default-600 mb-4">
                    Type scale and guidelines for consistent, readable text across all platforms.
                  </p>
                  <NHLink href="/typography" color="primary" size="sm">
                    Type Guidelines →
                  </NHLink>
                </NHCardBody>
              </NHCard>
            </div>
          </NHTab>
          
          <NHTab
            key="layout"
            title={
              <div className="flex items-center space-x-2">
                <Squares2X2Icon className="h-5 w-5" />
                <span>Layout</span>
              </div>
            }
          >
            <NHCard className="mt-6">
              <NHCardHeader>
                <h3 className="text-xl font-semibold">Layout System</h3>
              </NHCardHeader>
              <NHCardBody>
                <p className="text-default-600 mb-6">
                  Build responsive, consistent layouts using our grid system, spacing scale, and layout patterns.
                </p>
                <div className="grid gap-4 md:grid-cols-3">
                  <div>
                    <h4 className="font-semibold mb-2">Grid System</h4>
                    <p className="text-sm text-default-600 mb-2">
                      12-column responsive grid with flexible breakpoints
                    </p>
                    <NHCode size="sm">@media (min-width: 768px)</NHCode>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Spacing Scale</h4>
                    <p className="text-sm text-default-600 mb-2">
                      8-point spacing system for consistent rhythm
                    </p>
                    <NHCode size="sm">spacing: 8px * n</NHCode>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Responsive Design</h4>
                    <p className="text-sm text-default-600 mb-2">
                      Mobile-first approach with 5 breakpoints
                    </p>
                    <NHCode size="sm">sm, md, lg, xl, 2xl</NHCode>
                  </div>
                </div>
              </NHCardBody>
            </NHCard>
          </NHTab>
          
          <NHTab
            key="components"
            title={
              <div className="flex items-center space-x-2">
                <CubeIcon className="h-5 w-5" />
                <span>Components</span>
              </div>
            }
          >
            <div className="grid gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3">
              <NHCard>
                <NHCardHeader>
                  <h3 className="text-lg font-semibold">Foundation</h3>
                </NHCardHeader>
                <NHCardBody>
                  <p className="text-sm text-default-600 mb-3">
                    Core building blocks for layouts
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <NHChip size="sm" variant="flat">Container</NHChip>
                    <NHChip size="sm" variant="flat">Grid</NHChip>
                    <NHChip size="sm" variant="flat">Stack</NHChip>
                    <NHChip size="sm" variant="flat">Box</NHChip>
                  </div>
                </NHCardBody>
              </NHCard>

              <NHCard>
                <NHCardHeader>
                  <h3 className="text-lg font-semibold">Navigation</h3>
                </NHCardHeader>
                <NHCardBody>
                  <p className="text-sm text-default-600 mb-3">
                    Guide users through your app
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <NHChip size="sm" variant="flat">Navbar</NHChip>
                    <NHChip size="sm" variant="flat">Sidebar</NHChip>
                    <NHChip size="sm" variant="flat">Breadcrumbs</NHChip>
                    <NHChip size="sm" variant="flat">Tabs</NHChip>
                  </div>
                </NHCardBody>
              </NHCard>

              <NHCard>
                <NHCardHeader>
                  <h3 className="text-lg font-semibold">Inputs</h3>
                </NHCardHeader>
                <NHCardBody>
                  <p className="text-sm text-default-600 mb-3">
                    Form controls and data entry
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <NHChip size="sm" variant="flat">Input</NHChip>
                    <NHChip size="sm" variant="flat">Select</NHChip>
                    <NHChip size="sm" variant="flat">Checkbox</NHChip>
                    <NHChip size="sm" variant="flat">Switch</NHChip>
                  </div>
                </NHCardBody>
              </NHCard>

              <NHCard>
                <NHCardHeader>
                  <h3 className="text-lg font-semibold">Feedback</h3>
                </NHCardHeader>
                <NHCardBody>
                  <p className="text-sm text-default-600 mb-3">
                    Communicate state and status
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <NHChip size="sm" variant="flat">Alert</NHChip>
                    <NHChip size="sm" variant="flat">Toast</NHChip>
                    <NHChip size="sm" variant="flat">Modal</NHChip>
                    <NHChip size="sm" variant="flat">Progress</NHChip>
                  </div>
                </NHCardBody>
              </NHCard>

              <NHCard>
                <NHCardHeader>
                  <h3 className="text-lg font-semibold">Data Display</h3>
                </NHCardHeader>
                <NHCardBody>
                  <p className="text-sm text-default-600 mb-3">
                    Present information effectively
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <NHChip size="sm" variant="flat">Table</NHChip>
                    <NHChip size="sm" variant="flat">List</NHChip>
                    <NHChip size="sm" variant="flat">Card</NHChip>
                    <NHChip size="sm" variant="flat">Stats</NHChip>
                  </div>
                </NHCardBody>
              </NHCard>

              <NHCard>
                <NHCardHeader>
                  <h3 className="text-lg font-semibold">Utilities</h3>
                </NHCardHeader>
                <NHCardBody>
                  <p className="text-sm text-default-600 mb-3">
                    Enhance user interactions
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <NHChip size="sm" variant="flat">Tooltip</NHChip>
                    <NHChip size="sm" variant="flat">Popover</NHChip>
                    <NHChip size="sm" variant="flat">Drawer</NHChip>
                    <NHChip size="sm" variant="flat">Skeleton</NHChip>
                  </div>
                </NHCardBody>
              </NHCard>
            </div>
          </NHTab>
          
          <NHTab
            key="patterns"
            title={
              <div className="flex items-center space-x-2">
                <BeakerIcon className="h-5 w-5" />
                <span>Patterns</span>
              </div>
            }
          >
            <div className="grid gap-6 mt-6 md:grid-cols-2">
              <NHCard>
                <NHCardHeader>
                  <h3 className="text-xl font-semibold">Common Patterns</h3>
                </NHCardHeader>
                <NHCardBody>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="text-primary">•</span>
                      <NHLink href="/patterns/forms" size="sm">Form Validation & Error Handling</NHLink>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">•</span>
                      <NHLink href="/patterns/data-tables" size="sm">Data Tables & Lists</NHLink>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">•</span>
                      <NHLink href="/patterns/search" size="sm">Search & Filtering</NHLink>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">•</span>
                      <NHLink href="/patterns/authentication" size="sm">Authentication Flows</NHLink>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">•</span>
                      <NHLink href="/patterns/dashboards" size="sm">Dashboard Layouts</NHLink>
                    </li>
                  </ul>
                </NHCardBody>
              </NHCard>

              <NHCard>
                <NHCardHeader>
                  <h3 className="text-xl font-semibold">Mobile Patterns</h3>
                </NHCardHeader>
                <NHCardBody>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="text-secondary">•</span>
                      <NHLink href="/patterns/mobile-navigation" size="sm">Mobile Navigation</NHLink>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-secondary">•</span>
                      <NHLink href="/patterns/touch-gestures" size="sm">Touch Gestures</NHLink>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-secondary">•</span>
                      <NHLink href="/patterns/responsive-forms" size="sm">Responsive Forms</NHLink>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-secondary">•</span>
                      <NHLink href="/patterns/mobile-modals" size="sm">Mobile Modals & Sheets</NHLink>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-secondary">•</span>
                      <NHLink href="/patterns/offline" size="sm">Offline States</NHLink>
                    </li>
                  </ul>
                </NHCardBody>
              </NHCard>
            </div>
          </NHTab>
          
          <NHTab
            key="resources"
            title={
              <div className="flex items-center space-x-2">
                <ArrowDownTrayIcon className="h-5 w-5" />
                <span>Resources</span>
              </div>
            }
          >
            <div className="grid gap-6 mt-6 md:grid-cols-3">
              <NHCard>
                <NHCardHeader>
                  <h3 className="text-lg font-semibold">Design Files</h3>
                </NHCardHeader>
                <NHCardBody>
                  <p className="text-default-600 mb-4">
                    Figma libraries with all components and design tokens
                  </p>
                  <NHButton color="primary" variant="flat" size="sm" startContent={<ArrowDownTrayIcon className="h-4 w-4" />}>
                    Download Figma Kit
                  </NHButton>
                </NHCardBody>
              </NHCard>

              <NHCard>
                <NHCardHeader>
                  <h3 className="text-lg font-semibold">Icon Library</h3>
                </NHCardHeader>
                <NHCardBody>
                  <p className="text-default-600 mb-4">
                    Complete icon set optimized for our design system
                  </p>
                  <NHButton color="primary" variant="flat" size="sm" startContent={<ArrowDownTrayIcon className="h-4 w-4" />}>
                    Browse Icons
                  </NHButton>
                </NHCardBody>
              </NHCard>

              <NHCard>
                <NHCardHeader>
                  <h3 className="text-lg font-semibold">Code Templates</h3>
                </NHCardHeader>
                <NHCardBody>
                  <p className="text-default-600 mb-4">
                    Starter templates and code snippets for common patterns
                  </p>
                  <NHButton color="primary" variant="flat" size="sm" startContent={<CodeBracketIcon className="h-4 w-4" />}>
                    View Templates
                  </NHButton>
                </NHCardBody>
              </NHCard>
            </div>
          </NHTab>
        </NHTabs>
      </section>

      {/* Quick Start Section */}
      <section className="container mx-auto px-6 py-16 border-t">
        <h2 className="text-2xl font-bold mb-8">Quick Installation</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold mb-3">Install the package</h3>
            <NHCode className="block p-4 bg-default-100 rounded-lg">
              npm install @nh-ui/ui @heroui/react framer-motion
            </NHCode>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Use components</h3>
            <NHCode className="block p-4 bg-default-100 rounded-lg">
              {`import { NHButton } from "@nh-ui/ui"

<NHButton color="primary">
  Get Started
</NHButton>`}
            </NHCode>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-default-600 text-sm">
              Noise Heroes Human Interface Design Guidelines • Version 2.0
            </p>
            <div className="flex gap-4">
              <NHLink href="https://github.com/noise-heroes/nh-ui" isExternal size="sm">
                GitHub
              </NHLink>
              <NHLink href="/changelog" size="sm">
                Changelog
              </NHLink>
              <NHLink href="/support" size="sm">
                Support
              </NHLink>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}