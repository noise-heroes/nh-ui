# NH-UI Foundation Components

The foundation components are the building blocks of the NH-UI design system. They provide flexible, responsive, and composable primitives for building sophisticated user interfaces.

## Overview

Foundation components are inspired by Apple's SwiftUI approach - simple, intuitive APIs with powerful capabilities. Each component is:

- **Fully typed** with TypeScript
- **Responsive** with mobile-first design
- **Accessible** following WCAG guidelines
- **Themeable** with CSS variables and Tailwind
- **Performant** with optimized rendering

## Components

### Box

The fundamental building block with all styling props. Think of it as a more powerful `div`.

```tsx
import { Box } from '@nh-ui/ui';

// Basic usage
<Box p={4} bg="orange-500" rounded="lg">
  Content
</Box>

// Responsive props
<Box
  p={{ base: 2, sm: 4, md: 6 }}
  display={{ base: 'block', lg: 'flex' }}
>
  Responsive content
</Box>

// With effects
<Box
  p={6}
  bg="gradient-to-br from-orange-500 to-teal-500"
  rounded="xl"
  shadow="lg"
  glow="orange"
>
  Glowing gradient box
</Box>
```

### Text

Typography component with semantic HTML elements and comprehensive styling.

```tsx
import { Text } from '@nh-ui/ui';

// Variants
<Text variant="display">Display Text</Text>
<Text variant="headline">Headline Text</Text>
<Text variant="body">Body Text</Text>

// With gradient
<Text variant="display" gradient="brand">
  Brand Gradient
</Text>

// With effects
<Text variant="display" glow="orange">
  Glowing Text
</Text>
```

### Stack

Vertical and horizontal layouts with consistent spacing.

```tsx
import { Stack, VStack, HStack } from '@nh-ui/ui';

// Vertical stack
<VStack spacing={4} align="center">
  <Text>Item 1</Text>
  <Text>Item 2</Text>
</VStack>

// Horizontal stack
<HStack spacing={6} justify="between">
  <Button>Cancel</Button>
  <Button>Save</Button>
</HStack>

// With dividers
<HStack spacing={4} divider dividerColor="neutral-300">
  <Text>Home</Text>
  <Text>About</Text>
  <Text>Contact</Text>
</HStack>
```

### Grid

Powerful grid system for responsive layouts.

```tsx
import { Grid, GridItem } from '@nh-ui/ui';

// Basic grid
<Grid cols={3} gap={4}>
  <Card />
  <Card />
  <Card />
</Grid>

// Responsive grid
<Grid
  cols={{ base: 1, sm: 2, md: 3, lg: 4 }}
  gap={{ base: 2, md: 4 }}
>
  {items.map(item => <Card key={item.id} />)}
</Grid>

// With spanning items
<Grid cols={4} gap={4}>
  <GridItem colSpan={2} rowSpan={2}>
    <LargeCard />
  </GridItem>
  <SmallCard />
  <SmallCard />
</Grid>
```

### Container

Responsive container with consistent max-widths and padding.

```tsx
import { Container, Section } from '@nh-ui/ui';

// Default container
<Container>
  <Content />
</Container>

// Different sizes
<Container size="sm">Small content</Container>
<Container size="lg">Large content</Container>

// Fluid container
<Container fluid>
  Full width content
</Container>

// Section with vertical padding
<Section>
  <Heading />
  <Content />
</Section>
```

### Flex

Flexible box layout with full flexbox control.

```tsx
import { Flex, FlexItem, Spacer } from '@nh-ui/ui';

// Basic flex
<Flex align="center" justify="between">
  <Logo />
  <Navigation />
</Flex>

// With spacer
<Flex align="center">
  <Logo />
  <Spacer />
  <UserMenu />
</Flex>

// Center content
<Flex center minH="screen">
  <LoginForm />
</Flex>

// Flex items with grow
<Flex gap={4}>
  <FlexItem grow>Main content</FlexItem>
  <FlexItem basis="300px">Sidebar</FlexItem>
</Flex>
```

## Design Principles

### 1. **Composability**
Components are designed to work together seamlessly. You can nest any component within another.

### 2. **Responsive by Default**
Most props accept responsive values using the object syntax:
```tsx
<Box p={{ base: 2, sm: 4, md: 6, lg: 8 }}>
  Responsive padding
</Box>
```

### 3. **Consistent Spacing**
All components use the same spacing scale (0, 0.5, 1, 1.5, 2, ... 96) for predictable layouts.

### 4. **Type Safety**
Full TypeScript support with autocompletion for all props and values.

### 5. **Performance**
Components are optimized for performance with:
- Minimal re-renders
- Efficient class generation
- Tree-shaking support

## Common Patterns

### Card Layout
```tsx
<Box p={6} bg="white" rounded="xl" shadow="md">
  <VStack spacing={4}>
    <Text variant="title">Card Title</Text>
    <Text color="muted">Card description</Text>
    <Button>Action</Button>
  </VStack>
</Box>
```

### Hero Section
```tsx
<Section bg="gradient-to-br from-orange-500 to-teal-500">
  <Container>
    <VStack spacing={6} align="center" py={20}>
      <Text variant="display" color="inverse">
        Welcome to NH-UI
      </Text>
      <Text variant="subtitle" color="inverse">
        Build amazing interfaces
      </Text>
      <HStack spacing={4}>
        <Button size="lg">Get Started</Button>
        <Button size="lg" variant="outline">Learn More</Button>
      </HStack>
    </VStack>
  </Container>
</Section>
```

### Navigation Bar
```tsx
<Flex as="nav" p={4} align="center">
  <Logo />
  <Spacer />
  <HStack spacing={6}>
    <Link>Home</Link>
    <Link>About</Link>
    <Link>Contact</Link>
  </HStack>
</Flex>
```

### Feature Grid
```tsx
<Grid cols={{ base: 1, md: 3 }} gap={6}>
  {features.map(feature => (
    <VStack key={feature.id} spacing={4}>
      <Box w={12} h={12} bg="orange-500" rounded="lg" />
      <Text variant="title">{feature.title}</Text>
      <Text color="muted" align="center">
        {feature.description}
      </Text>
    </VStack>
  ))}
</Grid>
```

## Best Practices

1. **Use semantic components**: Choose the right component for the job (Container for layout, Text for typography, etc.)

2. **Leverage responsive props**: Design mobile-first and add responsive breakpoints as needed

3. **Consistent spacing**: Use the spacing scale rather than arbitrary values

4. **Accessibility first**: Always provide proper ARIA labels and semantic HTML

5. **Performance optimization**: Use CSS properties over JavaScript when possible

## Migration Guide

If you're coming from other UI libraries:

- **From Chakra UI**: Our API is similar but with NH-specific features
- **From Material-UI**: Components are more flexible and less opinionated
- **From Tailwind**: You get the same utility-first approach with component abstractions

## Future Enhancements

- [ ] Animation props with Framer Motion integration
- [ ] Advanced grid template areas
- [ ] Responsive aspect ratios
- [ ] Advanced theming with CSS variables
- [ ] Performance monitoring and optimization