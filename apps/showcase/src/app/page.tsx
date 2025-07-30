"use client";

import { 
  Button, 
  Card, 
  CardBody, 
  CardFooter,
  CardHeader,
  Chip,
  Divider,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Tab,
  Tabs,
  Avatar,
  Badge,
  Progress,
  Snippet,
  Code,
  Spacer,
} from "@heroui/react";
import { 
  MoonIcon, 
  SunIcon,
  SparklesIcon,
  SwatchIcon,
  CubeIcon,
  CodeBracketIcon,
  RocketLaunchIcon,
  CommandLineIcon,
} from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import { useState } from "react";

export default function ShowcasePage() {
  const { theme, setTheme } = useTheme();
  const [selected, setSelected] = useState("colors");

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navbar isBordered>
        <NavbarBrand>
          <img 
            src="/NH-logo-RGB-hr.svg" 
            alt="Noise Heroes" 
            className="h-8 w-auto"
          />
          <Chip size="sm" variant="flat" color="secondary" className="ml-3">
            UI Kit v2.0
          </Chip>
        </NavbarBrand>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button
              isIconOnly
              variant="light"
              onPress={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <div className="flex justify-center mb-6">
          <Badge content="NEW" color="success" placement="top-right" shape="circle">
            <Avatar
              radius="full"
              size="lg"
              src="https://i.pravatar.cc/150?u=a04258114e29026702d"
              className="w-20 h-20"
            />
          </Badge>
        </div>
        
        <h1 className="text-7xl font-display font-bold mb-4 uppercase tracking-tight">
          Noise Heroes
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            {" "}UI Kit
          </span>
        </h1>
        
        <p className="text-xl text-default-600 mb-8 max-w-2xl mx-auto">
          A modern, accessible design system for building beautiful music and creative applications
        </p>
        
        <div className="flex gap-4 justify-center">
          <Button color="primary" size="lg" startContent={<RocketLaunchIcon className="h-5 w-5" />}>
            Get Started
          </Button>
          <Button variant="bordered" size="lg" startContent={<CodeBracketIcon className="h-5 w-5" />}>
            View Components
          </Button>
        </div>
      </section>

      {/* Progress Demo */}
      <section className="container mx-auto px-6 py-8">
        <Card className="max-w-2xl mx-auto">
          <CardBody>
            <p className="text-small text-default-500 mb-2">Loading awesomeness...</p>
            <Progress value={70} className="mb-4" color="primary" />
            <div className="flex gap-2">
              <Chip color="success" variant="flat" size="sm">Active</Chip>
              <Chip color="warning" variant="flat" size="sm">In Progress</Chip>
              <Chip color="danger" variant="flat" size="sm">Critical</Chip>
            </div>
          </CardBody>
        </Card>
      </section>

      {/* Component Showcase Tabs */}
      <section className="container mx-auto px-6 py-16">
        <Tabs 
          aria-label="Component showcase" 
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
          <Tab
            key="colors"
            title={
              <div className="flex items-center space-x-2">
                <SwatchIcon className="h-5 w-5" />
                <span>Colors</span>
              </div>
            }
          >
            <Card className="mt-6">
              <CardHeader>
                <h3 className="text-xl font-semibold">Color Palette</h3>
              </CardHeader>
              <CardBody>
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <div className="h-20 bg-primary rounded-lg"></div>
                    <p className="text-sm font-medium">Primary</p>
                    <Code size="sm">#3B82F6</Code>
                  </div>
                  <div className="space-y-2">
                    <div className="h-20 bg-secondary rounded-lg"></div>
                    <p className="text-sm font-medium">Secondary</p>
                    <Code size="sm">#A855F7</Code>
                  </div>
                  <div className="space-y-2">
                    <div className="h-20 bg-success rounded-lg"></div>
                    <p className="text-sm font-medium">Success</p>
                    <Code size="sm">#14B8A6</Code>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Tab>
          
          <Tab
            key="components"
            title={
              <div className="flex items-center space-x-2">
                <CubeIcon className="h-5 w-5" />
                <span>Components</span>
              </div>
            }
          >
            <div className="grid gap-6 mt-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <h3 className="text-lg font-semibold">Buttons</h3>
                </CardHeader>
                <CardBody className="gap-4">
                  <div className="flex flex-wrap gap-3">
                    <Button color="primary">Primary</Button>
                    <Button color="secondary">Secondary</Button>
                    <Button color="success">Success</Button>
                    <Button color="warning">Warning</Button>
                    <Button color="danger">Danger</Button>
                  </div>
                  <Divider />
                  <div className="flex flex-wrap gap-3">
                    <Button variant="solid">Solid</Button>
                    <Button variant="bordered">Bordered</Button>
                    <Button variant="light">Light</Button>
                    <Button variant="flat">Flat</Button>
                    <Button variant="faded">Faded</Button>
                    <Button variant="shadow">Shadow</Button>
                    <Button variant="ghost">Ghost</Button>
                  </div>
                </CardBody>
              </Card>

              <Card>
                <CardHeader>
                  <h3 className="text-lg font-semibold">Chips & Badges</h3>
                </CardHeader>
                <CardBody className="gap-4">
                  <div className="flex flex-wrap gap-2">
                    <Chip>Default</Chip>
                    <Chip color="primary">Primary</Chip>
                    <Chip color="secondary">Secondary</Chip>
                    <Chip color="success">Success</Chip>
                    <Chip color="warning">Warning</Chip>
                    <Chip color="danger">Danger</Chip>
                  </div>
                  <Divider />
                  <div className="flex gap-4">
                    <Badge content="5" color="primary">
                      <Avatar radius="md" src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
                    </Badge>
                    <Badge content="99+" color="danger">
                      <Avatar radius="md" src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
                    </Badge>
                  </div>
                </CardBody>
              </Card>
            </div>
          </Tab>
          
          <Tab
            key="code"
            title={
              <div className="flex items-center space-x-2">
                <CommandLineIcon className="h-5 w-5" />
                <span>Code</span>
              </div>
            }
          >
            <Card className="mt-6">
              <CardHeader>
                <h3 className="text-xl font-semibold">Quick Start</h3>
              </CardHeader>
              <CardBody className="gap-4">
                <p className="text-default-600">Install HeroUI in your project:</p>
                <Snippet symbol="$" variant="bordered">
                  npm install @heroui/react @heroicons/react framer-motion
                </Snippet>
                
                <Spacer y={2} />
                
                <p className="text-default-600">Import and use components:</p>
                <Snippet 
                  symbol="" 
                  variant="bordered"
                  classNames={{
                    pre: "font-mono text-sm"
                  }}
                >
                  {`import { Button } from "@heroui/react";

export default function App() {
  return (
    <Button color="primary">
      Click me
    </Button>
  );
}`}
                </Snippet>
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose NH-UI?</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="p-6">
            <CardBody>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <SparklesIcon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Modern Design</h3>
              </div>
              <p className="text-default-600">
                Beautiful components built with the latest design trends and best practices
              </p>
            </CardBody>
          </Card>

          <Card className="p-6">
            <CardBody>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-secondary/20 rounded-lg">
                  <CodeBracketIcon className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold">Developer Friendly</h3>
              </div>
              <p className="text-default-600">
                Type-safe components with excellent DX and comprehensive documentation
              </p>
            </CardBody>
          </Card>

          <Card className="p-6">
            <CardBody>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-success/20 rounded-lg">
                  <RocketLaunchIcon className="h-6 w-6 text-success" />
                </div>
                <h3 className="text-lg font-semibold">Production Ready</h3>
              </div>
              <p className="text-default-600">
                Battle-tested components used by thousands of developers worldwide
              </p>
            </CardBody>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-default-600 text-sm">
              Built with ❤️ by{" "}
              <Link href="https://noiseheroes.com" isExternal size="sm">
                Noise Heroes
              </Link>
            </p>
            <div className="flex gap-4">
              <Link href="https://github.com/noise-heroes/nh-ui" isExternal size="sm">
                GitHub
              </Link>
              <Link href="/docs" size="sm">
                Documentation
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}