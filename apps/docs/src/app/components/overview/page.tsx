"use client";

import {
  Container,
  Stack,
  Text,
  Grid,
  Box,
  NHCard,
  NHCardBody,
  NHCardHeader,
  NHButton,
  NHChip,
  NHLink,
  NHDivider,
} from "@nh-ui/ui";
import { useRouter } from "next/navigation";

const componentCategories = [
  {
    title: "Foundation",
    description: "Core layout and typography components",
    href: "/foundation",
    color: "orange",
    components: ["Box", "Text", "Stack", "Grid", "Container", "Flex"],
    count: 6,
  },
  {
    title: "Data Input",
    description: "Form controls and input components",
    href: "/inputs",
    color: "teal",
    components: ["Input", "Select", "Checkbox", "Radio", "Switch", "Slider"],
    count: 20,
  },
  {
    title: "Feedback",
    description: "Alerts, toasts, and loading states",
    href: "/feedback",
    color: "orange",
    components: ["Alert", "Toast", "Modal", "Skeleton", "Spinner", "Progress"],
    count: 12,
  },
  {
    title: "Navigation",
    description: "Navigation and wayfinding components",
    href: "/navigation",
    color: "teal",
    components: ["Navbar", "Tabs", "Breadcrumb", "Pagination", "Steps", "Menu"],
    count: 10,
  },
  {
    title: "Data Display",
    description: "Tables, lists, and data visualization",
    href: "/data-display",
    color: "orange",
    components: ["Table", "List", "Stat", "Badge", "Timeline", "Calendar"],
    count: 15,
  },
  {
    title: "Media",
    description: "Image, video, and audio components",
    href: "/media",
    color: "teal",
    components: ["Image", "Avatar", "Video", "Audio", "Gallery", "Carousel"],
    count: 8,
  },
  {
    title: "Overlay",
    description: "Modals, drawers, and tooltips",
    href: "/overlay",
    color: "orange",
    components: ["Modal", "Drawer", "Tooltip", "Popover", "Dialog", "Sheet"],
    count: 10,
  },
  {
    title: "Utility",
    description: "Helper components and utilities",
    href: "/utility",
    color: "teal",
    components: ["Portal", "FocusTrap", "ScrollArea", "Resizable", "Draggable"],
    count: 12,
  },
];

export default function ComponentsOverviewPage() {
  const router = useRouter();

  const totalComponents = componentCategories.reduce((sum, cat) => sum + cat.count, 0);

  return (
    <Container size="xl">
      <Stack spacing={12} className="py-12">
        <div className="text-center">
          <Text variant="display" gradient="brand" className="mb-4">
            NH-UI Components
          </Text>
          <Text size="lg" color="muted" className="mb-8">
            {totalComponents} components built with Apple-level attention to detail
          </Text>
          
          <Grid cols={{ base: 2, md: 4 }} gap={4} className="max-w-2xl mx-auto">
            <Box className="text-center">
              <Text variant="headline" className="text-orange-500">
                {totalComponents}
              </Text>
              <Text size="sm" color="muted">Components</Text>
            </Box>
            <Box className="text-center">
              <Text variant="headline" className="text-teal-500">
                100%
              </Text>
              <Text size="sm" color="muted">TypeScript</Text>
            </Box>
            <Box className="text-center">
              <Text variant="headline" className="text-orange-500">
                A11y
              </Text>
              <Text size="sm" color="muted">Accessible</Text>
            </Box>
            <Box className="text-center">
              <Text variant="headline" className="text-teal-500">
                RTL
              </Text>
              <Text size="sm" color="muted">Support</Text>
            </Box>
          </Grid>
        </div>

        <Grid cols={{ base: 1, md: 2, lg: 3 }} gap={6}>
          {componentCategories.map((category) => (
            <NHCard
              key={category.title}
              isPressable
              onPress={() => router.push(category.href)}
              className="hover:scale-105 transition-transform cursor-pointer"
            >
              <NHCardHeader>
                <div className="flex items-center justify-between">
                  <Text variant="title">{category.title}</Text>
                  <NHChip 
                    size="sm" 
                    color={category.color === "orange" ? "primary" : "secondary"}
                    variant="flat"
                  >
                    {category.count} components
                  </NHChip>
                </div>
              </NHCardHeader>
              <NHCardBody>
                <Stack spacing={4}>
                  <Text size="sm" color="muted">
                    {category.description}
                  </Text>
                  <div className="flex flex-wrap gap-2">
                    {category.components.map((comp) => (
                      <NHChip
                        key={comp}
                        size="sm"
                        variant="flat"
                        className="text-xs"
                      >
                        {comp}
                      </NHChip>
                    ))}
                  </div>
                  <NHLink
                    href={category.href}
                    color={category.color === "orange" ? "primary" : "secondary"}
                    size="sm"
                    className="inline-flex items-center gap-1"
                  >
                    Explore {category.title} →
                  </NHLink>
                </Stack>
              </NHCardBody>
            </NHCard>
          ))}
        </Grid>

        <NHDivider className="my-8" />

        <Stack spacing={8} className="text-center">
          <Text variant="headline">Built for Production</Text>
          <Grid cols={{ base: 1, md: 3 }} gap={6}>
            <NHCard>
              <NHCardBody>
                <Stack spacing={2}>
                  <Text variant="title" className="text-orange-500">🎨</Text>
                  <Text weight="semibold">Themeable</Text>
                  <Text size="sm" color="muted">
                    Full theme customization with CSS variables and design tokens
                  </Text>
                </Stack>
              </NHCardBody>
            </NHCard>

            <NHCard>
              <NHCardBody>
                <Stack spacing={2}>
                  <Text variant="title" className="text-teal-500">⚡</Text>
                  <Text weight="semibold">Performant</Text>
                  <Text size="sm" color="muted">
                    Optimized bundle size with tree-shaking and lazy loading
                  </Text>
                </Stack>
              </NHCardBody>
            </NHCard>

            <NHCard>
              <NHCardBody>
                <Stack spacing={2}>
                  <Text variant="title" className="text-orange-500">♿</Text>
                  <Text weight="semibold">Accessible</Text>
                  <Text size="sm" color="muted">
                    WCAG 2.1 compliant with full keyboard navigation
                  </Text>
                </Stack>
              </NHCardBody>
            </NHCard>
          </Grid>
        </Stack>

        <Box className="text-center">
          <NHButton
            size="lg"
            color="primary"
            onPress={() => router.push("/foundation")}
          >
            Get Started with Foundation Components
          </NHButton>
        </Box>
      </Stack>
    </Container>
  );
}