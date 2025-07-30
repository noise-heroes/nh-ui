import Link from "next/link"
import { 
  Button,
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle,
  Badge,
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@nh-ui/ui"
import { ThemeToggle } from "@/components/theme-toggle"
import { 
  Palette, 
  Type, 
  Layout, 
  Zap, 
  Shield, 
  Sparkles 
} from "lucide-react"

export default function ShowcasePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="flex items-center space-x-2">
            <Sparkles className="h-6 w-6 text-nh-blue" />
            <span className="font-bold text-xl">NH-UI</span>
            <Badge variant="secondary" className="ml-2">v0.1.0</Badge>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-6">
              <Link href="#colors" className="text-sm font-medium hover:text-primary">
                Colors
              </Link>
              <Link href="#typography" className="text-sm font-medium hover:text-primary">
                Typography
              </Link>
              <Link href="#components" className="text-sm font-medium hover:text-primary">
                Components
              </Link>
              <Link href="#patterns" className="text-sm font-medium hover:text-primary">
                Patterns
              </Link>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Noise Heroes
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--nh-blue))] to-[hsl(var(--nh-purple))]">
              Design System
            </span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl">
            A beautiful, accessible, and customizable design system for building amazing music and creative applications.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="gap-2">
              <Layout className="h-4 w-4" />
              View Components
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Zap className="h-4 w-4" />
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container px-4 py-16 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5" />
                Beautiful Design
              </CardTitle>
              <CardDescription>
                Carefully crafted with attention to detail and aesthetics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Our design system features a modern color palette, smooth animations, and consistent styling across all components.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Accessible
              </CardTitle>
              <CardDescription>
                Built with accessibility in mind from the ground up
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                All components follow WCAG guidelines, support keyboard navigation, and work seamlessly with screen readers.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Type className="h-5 w-5" />
                Type Safe
              </CardTitle>
              <CardDescription>
                Full TypeScript support for confident development
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Every component is fully typed, providing excellent IDE support and catching errors before runtime.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Color Palette Section */}
      <section id="colors" className="container px-4 py-16 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight">Color Palette</h2>
        <p className="mt-2 text-muted-foreground">
          The Noise Heroes color system is designed to be vibrant yet accessible
        </p>
        
        <div className="mt-8 grid gap-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Card className="overflow-hidden">
              <div className="h-32 bg-[hsl(var(--nh-blue))]" />
              <CardHeader>
                <CardTitle>NH Blue</CardTitle>
                <CardDescription>Primary brand color</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="overflow-hidden">
              <div className="h-32 bg-[hsl(var(--nh-purple))]" />
              <CardHeader>
                <CardTitle>NH Purple</CardTitle>
                <CardDescription>Secondary brand color</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="overflow-hidden">
              <div className="h-32 bg-[hsl(var(--nh-teal))]" />
              <CardHeader>
                <CardTitle>NH Teal</CardTitle>
                <CardDescription>Accent color</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Typography Section */}
      <section id="typography" className="container px-4 py-16 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight">Typography</h2>
        <p className="mt-2 text-muted-foreground">
          Clean, readable typography that scales beautifully
        </p>
        
        <div className="mt-8 space-y-8">
          <div>
            <h1 className="text-4xl font-bold">Heading 1</h1>
            <p className="text-muted-foreground">font-bold text-4xl</p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold">Heading 2</h2>
            <p className="text-muted-foreground">font-semibold text-3xl</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Heading 3</h3>
            <p className="text-muted-foreground">font-semibold text-2xl</p>
          </div>
          <div>
            <p className="text-base">Body text - This is how regular paragraph text appears in the system.</p>
            <p className="text-muted-foreground">text-base</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Small text - Used for captions and secondary information.</p>
            <p className="text-muted-foreground">text-sm text-muted-foreground</p>
          </div>
        </div>
      </section>

      {/* Components Preview */}
      <section id="components" className="container px-4 py-16 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight">Components</h2>
        <p className="mt-2 text-muted-foreground">
          A preview of our component library
        </p>
        
        <Tabs defaultValue="buttons" className="mt-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="buttons">Buttons</TabsTrigger>
            <TabsTrigger value="cards">Cards</TabsTrigger>
            <TabsTrigger value="forms">Forms</TabsTrigger>
            <TabsTrigger value="feedback">Feedback</TabsTrigger>
          </TabsList>
          
          <TabsContent value="buttons" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Button Variants</CardTitle>
                <CardDescription>
                  Different button styles for various use cases
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-4">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="cards" className="mt-6">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Simple Card</CardTitle>
                  <CardDescription>A basic card component</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Cards are used to group related content and actions.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Interactive Card</CardTitle>
                  <CardDescription>With hover effects</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    This card has interactive hover states.
                  </p>
                  <Button className="mt-4" size="sm">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="forms" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Form Elements</CardTitle>
                <CardDescription>
                  Coming soon - Input fields, selects, and more
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Form components are being developed and will be available soon.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="feedback" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Feedback Components</CardTitle>
                <CardDescription>
                  Alerts, toasts, and notifications
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="outline">Outline</Badge>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose md:text-left">
              Built by{" "}
              <a
                href="https://noiseheroes.com"
                target="_blank"
                rel="noreferrer"
                className="font-medium underline underline-offset-4"
              >
                Noise Heroes
              </a>
              . The source code is available on{" "}
              <a
                href="https://github.com/noise-heroes/nh-ui"
                target="_blank"
                rel="noreferrer"
                className="font-medium underline underline-offset-4"
              >
                GitHub
              </a>
              .
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}