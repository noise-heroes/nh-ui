import React from 'react';
import { Box } from './box';
import { Text } from './text';
import { Stack, VStack, HStack } from './stack';
import { Grid, GridItem } from './grid';
import { Container, Section } from './container';
import { Flex, FlexItem, Spacer } from './flex';
import { NHButton } from './button';
import { NHCard, NHCardBody, NHCardHeader } from './card';

/**
 * Foundation Components Examples
 * 
 * This file demonstrates the usage of NH-UI foundation components
 * with various patterns and best practices.
 */

export const BoxExamples = () => (
  <Stack spacing={8}>
    <Text variant="headline">Box Component Examples</Text>
    
    {/* Basic Box */}
    <Box p={6} bg="neutral-100" rounded="lg">
      <Text>Basic box with padding and background</Text>
    </Box>
    
    {/* Box with effects */}
    <Box p={6} bg="orange-500" rounded="xl" shadow="lg" glow="orange">
      <Text color="inverse">Box with shadow and glow effect</Text>
    </Box>
    
    {/* Responsive Box */}
    <Box 
      p={{ base: 4, md: 8 }} 
      bg="teal-500" 
      rounded="2xl"
      w={{ base: 'full', md: '1/2' }}
    >
      <Text color="inverse">Responsive box</Text>
    </Box>
  </Stack>
);

export const TextExamples = () => (
  <Stack spacing={6}>
    <Text variant="headline">Text Component Examples</Text>
    
    {/* Text variants */}
    <VStack align="start" spacing={4}>
      <Text variant="display">Display Text</Text>
      <Text variant="headline">Headline Text</Text>
      <Text variant="title">Title Text</Text>
      <Text variant="subtitle">Subtitle Text</Text>
      <Text variant="body">Body Text</Text>
      <Text variant="label">Label Text</Text>
      <Text variant="caption">Caption Text</Text>
      <Text variant="code">Code Text</Text>
      <Text variant="brand">Brand Text</Text>
    </VStack>
    
    {/* Text with gradients */}
    <HStack spacing={4}>
      <Text variant="display" gradient="brand">
        Brand Gradient
      </Text>
      <Text variant="display" gradient="orangeFade" glow="orange">
        Orange Glow
      </Text>
      <Text variant="display" gradient="tealFade" glow="teal">
        Teal Glow
      </Text>
    </HStack>
    
    {/* Text colors */}
    <HStack spacing={4} wrap>
      <Text color="primary">Primary</Text>
      <Text color="secondary">Secondary</Text>
      <Text color="muted">Muted</Text>
      <Text color="success">Success</Text>
      <Text color="warning">Warning</Text>
      <Text color="error">Error</Text>
    </HStack>
  </Stack>
);

export const StackExamples = () => (
  <Stack spacing={8}>
    <Text variant="headline">Stack Component Examples</Text>
    
    {/* Vertical Stack */}
    <Box bg="neutral-100" p={6} rounded="lg">
      <VStack spacing={4} align="start">
        <Text variant="subtitle">Vertical Stack</Text>
        <Text>Item 1</Text>
        <Text>Item 2</Text>
        <Text>Item 3</Text>
      </VStack>
    </Box>
    
    {/* Horizontal Stack */}
    <Box bg="neutral-100" p={6} rounded="lg">
      <HStack spacing={6} align="center">
        <Text variant="subtitle">Horizontal Stack</Text>
        <NHButton size="sm">Button 1</NHButton>
        <NHButton size="sm" variant="secondary">Button 2</NHButton>
        <NHButton size="sm" variant="outline">Button 3</NHButton>
      </HStack>
    </Box>
    
    {/* Stack with dividers */}
    <Box bg="neutral-100" p={6} rounded="lg">
      <HStack spacing={4} divider dividerColor="neutral-300">
        <Text>Home</Text>
        <Text>About</Text>
        <Text>Services</Text>
        <Text>Contact</Text>
      </HStack>
    </Box>
  </Stack>
);

export const GridExamples = () => (
  <Stack spacing={8}>
    <Text variant="headline">Grid Component Examples</Text>
    
    {/* Basic Grid */}
    <Grid cols={3} gap={4}>
      {[1, 2, 3, 4, 5, 6].map(i => (
        <Box key={i} bg="orange-100" p={6} rounded="lg">
          <Text align="center">Item {i}</Text>
        </Box>
      ))}
    </Grid>
    
    {/* Responsive Grid */}
    <Grid cols={{ base: 1, sm: 2, md: 3, lg: 4 }} gap={{ base: 2, md: 4 }}>
      {[1, 2, 3, 4].map(i => (
        <Box key={i} bg="teal-100" p={6} rounded="lg">
          <Text align="center">Responsive {i}</Text>
        </Box>
      ))}
    </Grid>
    
    {/* Grid with spanning items */}
    <Grid cols={4} gap={4}>
      <GridItem colSpan={2} rowSpan={2}>
        <Box bg="orange-500" h="full" p={6} rounded="lg">
          <Text color="inverse">2x2 Item</Text>
        </Box>
      </GridItem>
      <GridItem colSpan={2}>
        <Box bg="teal-500" p={6} rounded="lg">
          <Text color="inverse">2x1 Item</Text>
        </Box>
      </GridItem>
      <GridItem>
        <Box bg="neutral-300" p={6} rounded="lg">
          <Text>1x1</Text>
        </Box>
      </GridItem>
      <GridItem>
        <Box bg="neutral-400" p={6} rounded="lg">
          <Text>1x1</Text>
        </Box>
      </GridItem>
    </Grid>
  </Stack>
);

export const ContainerExamples = () => (
  <Stack spacing={8}>
    <Text variant="headline">Container Component Examples</Text>
    
    {/* Default Container */}
    <Container bg="neutral-100" py={8} rounded="lg">
      <Text align="center">Default container with max-width and padding</Text>
    </Container>
    
    {/* Small Container */}
    <Container size="sm" bg="orange-100" py={8} rounded="lg">
      <Text align="center">Small container (max-width: 640px)</Text>
    </Container>
    
    {/* Fluid Container */}
    <Container fluid bg="teal-100" py={8}>
      <Text align="center">Fluid container (full width)</Text>
    </Container>
    
    {/* Section Container */}
    <Section bg="neutral-900">
      <Text variant="display" color="inverse" align="center">
        Section with vertical padding
      </Text>
    </Section>
  </Stack>
);

export const FlexExamples = () => (
  <Stack spacing={8}>
    <Text variant="headline">Flex Component Examples</Text>
    
    {/* Basic Flex */}
    <Flex gap={4} align="center" p={6} bg="neutral-100" rounded="lg">
      <Box bg="orange-500" p={4} rounded="md">
        <Text color="inverse">Item 1</Text>
      </Box>
      <Box bg="teal-500" p={4} rounded="md">
        <Text color="inverse">Item 2</Text>
      </Box>
      <Box bg="neutral-500" p={4} rounded="md">
        <Text color="inverse">Item 3</Text>
      </Box>
    </Flex>
    
    {/* Flex with spacer */}
    <Flex align="center" p={6} bg="neutral-100" rounded="lg">
      <Text variant="subtitle">Logo</Text>
      <Spacer />
      <HStack spacing={4}>
        <NHButton size="sm" variant="ghost">Login</NHButton>
        <NHButton size="sm">Sign Up</NHButton>
      </HStack>
    </Flex>
    
    {/* Centered content */}
    <Flex center minH="48" bg="gradient-to-br from-orange-500 to-teal-500" rounded="xl">
      <Text variant="display" color="inverse">
        Perfectly Centered
      </Text>
    </Flex>
    
    {/* Flex with grow items */}
    <Flex gap={4}>
      <FlexItem grow basis="0">
        <Box bg="orange-200" p={4} rounded="lg">
          <Text align="center">Grow</Text>
        </Box>
      </FlexItem>
      <FlexItem basis="200px">
        <Box bg="teal-200" p={4} rounded="lg">
          <Text align="center">Fixed 200px</Text>
        </Box>
      </FlexItem>
      <FlexItem grow basis="0">
        <Box bg="orange-200" p={4} rounded="lg">
          <Text align="center">Grow</Text>
        </Box>
      </FlexItem>
    </Flex>
  </Stack>
);

export const ComplexLayoutExample = () => (
  <Container>
    <VStack spacing={8}>
      <Text variant="display" align="center" gradient="brand">
        Complex Layout Example
      </Text>
      
      {/* Hero Section */}
      <Section bg="gradient-to-br from-orange-500 to-teal-500" rounded="2xl">
        <VStack spacing={6} align="center">
          <Text variant="display" color="inverse">
            Welcome to NH-UI
          </Text>
          <Text variant="subtitle" color="inverse" align="center" maxW="prose">
            Build beautiful, responsive interfaces with our foundation components
          </Text>
          <HStack spacing={4}>
            <NHButton size="lg" variant="solid">Get Started</NHButton>
            <NHButton size="lg" variant="outline">Learn More</NHButton>
          </HStack>
        </VStack>
      </Section>
      
      {/* Features Grid */}
      <Grid cols={{ base: 1, md: 3 }} gap={6}>
        {['Flexible', 'Responsive', 'Beautiful'].map((feature, i) => (
          <NHCard key={i}>
            <NHCardBody>
              <VStack spacing={4}>
                <Box w={12} h={12} bg={i === 0 ? 'orange-500' : i === 1 ? 'teal-500' : 'neutral-500'} rounded="lg" />
                <Text variant="title">{feature}</Text>
                <Text color="muted" align="center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
              </VStack>
            </NHCardBody>
          </NHCard>
        ))}
      </Grid>
      
      {/* Footer */}
      <Flex justify="between" align="center" pt={8} borderColor="neutral-200" border={0} className="border-t">
        <Text color="muted">© 2024 Noise Heroes</Text>
        <HStack spacing={4}>
          <Text color="muted">Privacy</Text>
          <Text color="muted">Terms</Text>
          <Text color="muted">Contact</Text>
        </HStack>
      </Flex>
    </VStack>
  </Container>
);

// Export all examples
export const FoundationExamples = {
  Box: BoxExamples,
  Text: TextExamples,
  Stack: StackExamples,
  Grid: GridExamples,
  Container: ContainerExamples,
  Flex: FlexExamples,
  ComplexLayout: ComplexLayoutExample,
};