'use client';

import React from 'react';
import { 
  Box, 
  Text, 
  Stack, 
  VStack, 
  HStack, 
  Grid, 
  GridItem, 
  Container, 
  Section, 
  Flex, 
  FlexItem, 
  Spacer,
  NHButton,
  NHCard,
  NHCardBody,
  NHCardHeader
} from '@nh-ui/ui';

export default function FoundationPage() {
  return (
    <Container py={8}>
      <VStack spacing={12}>
        {/* Page Header */}
        <VStack spacing={4} align="center">
          <Text variant="display" gradient="brand">
            Foundation Components
          </Text>
          <Text variant="subtitle" color="muted" align="center">
            The building blocks of NH-UI - flexible, responsive, and beautiful
          </Text>
        </VStack>

        {/* Box Component */}
        <Section>
          <VStack spacing={6}>
            <Text variant="headline">Box Component</Text>
            <Text color="muted">
              The fundamental building block with all styling props
            </Text>
            
            <Grid cols={{ base: 1, md: 3 }} gap={4}>
              <Box p={6} bg="neutral-100" rounded="lg">
                <Text>Basic Box</Text>
              </Box>
              
              <Box p={6} bg="orange-500" rounded="xl" shadow="lg" glow="orange">
                <Text color="inverse">With Effects</Text>
              </Box>
              
              <Box 
                p={{ base: 4, md: 6 }} 
                bg="teal-500" 
                rounded="2xl"
                border={2}
                borderColor="teal-600"
              >
                <Text color="inverse">Responsive</Text>
              </Box>
            </Grid>
          </VStack>
        </Section>

        {/* Text Component */}
        <Section>
          <VStack spacing={6}>
            <Text variant="headline">Text Component</Text>
            <Text color="muted">
              Typography system with variants and effects
            </Text>
            
            <VStack align="start" spacing={3}>
              <Text variant="display">Display Text</Text>
              <Text variant="headline">Headline Text</Text>
              <Text variant="title">Title Text</Text>
              <Text variant="subtitle">Subtitle Text</Text>
              <Text variant="body">Body Text - Lorem ipsum dolor sit amet</Text>
              <Text variant="label">Label Text</Text>
              <Text variant="caption">Caption Text</Text>
              <Text variant="code">Code Text</Text>
              <Text variant="brand">Brand Text</Text>
            </VStack>
            
            <HStack spacing={6} wrap>
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
          </VStack>
        </Section>

        {/* Stack Component */}
        <Section>
          <VStack spacing={6}>
            <Text variant="headline">Stack Component</Text>
            <Text color="muted">
              Vertical and horizontal layouts with spacing
            </Text>
            
            <Grid cols={{ base: 1, md: 2 }} gap={6}>
              <Box bg="neutral-100" p={6} rounded="lg">
                <VStack spacing={4}>
                  <Text variant="subtitle">Vertical Stack</Text>
                  <Box bg="orange-200" p={3} rounded="md" w="full">
                    <Text align="center">Item 1</Text>
                  </Box>
                  <Box bg="teal-200" p={3} rounded="md" w="full">
                    <Text align="center">Item 2</Text>
                  </Box>
                  <Box bg="neutral-300" p={3} rounded="md" w="full">
                    <Text align="center">Item 3</Text>
                  </Box>
                </VStack>
              </Box>
              
              <Box bg="neutral-100" p={6} rounded="lg">
                <VStack spacing={4}>
                  <Text variant="subtitle">Horizontal Stack</Text>
                  <HStack spacing={4}>
                    <Box bg="orange-200" p={3} rounded="md" className="flex-1">
                      <Text align="center">1</Text>
                    </Box>
                    <Box bg="teal-200" p={3} rounded="md" className="flex-1">
                      <Text align="center">2</Text>
                    </Box>
                    <Box bg="orange-100" p={3} rounded="md" className="flex-1">
                      <Text align="center">3</Text>
                    </Box>
                  </HStack>
                </VStack>
              </Box>
            </Grid>
            
            <Box bg="neutral-100" p={6} rounded="lg" w="full">
              <VStack spacing={4}>
                <Text variant="subtitle">Stack with Dividers</Text>
                <HStack spacing={4} divider dividerColor="neutral-300">
                  <Text>Home</Text>
                  <Text>About</Text>
                  <Text>Services</Text>
                  <Text>Contact</Text>
                </HStack>
              </VStack>
            </Box>
          </VStack>
        </Section>

        {/* Grid Component */}
        <Section>
          <VStack spacing={6}>
            <Text variant="headline">Grid Component</Text>
            <Text color="muted">
              Responsive grid system with flexible layouts
            </Text>
            
            <VStack spacing={6} w="full">
              <Box>
                <Text variant="subtitle" className="mb-4">Basic Grid</Text>
                <Grid cols={4} gap={4}>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                    <Box key={i} bg="orange-100" p={4} rounded="lg">
                      <Text align="center">{i}</Text>
                    </Box>
                  ))}
                </Grid>
              </Box>
              
              <Box>
                <Text variant="subtitle" className="mb-4">Responsive Grid</Text>
                <Grid cols={{ base: 2, sm: 3, md: 4, lg: 6 }} gap={4}>
                  {[1, 2, 3, 4, 5, 6].map(i => (
                    <Box key={i} bg="teal-100" p={4} rounded="lg">
                      <Text align="center">{i}</Text>
                    </Box>
                  ))}
                </Grid>
              </Box>
              
              <Box>
                <Text variant="subtitle" className="mb-4">Grid with Spanning</Text>
                <Grid cols={4} gap={4}>
                  <GridItem colSpan={2} rowSpan={2}>
                    <Box bg="orange-500" h="full" p={6} rounded="lg">
                      <Text color="inverse">2x2</Text>
                    </Box>
                  </GridItem>
                  <GridItem colSpan={2}>
                    <Box bg="teal-500" p={6} rounded="lg">
                      <Text color="inverse">2x1</Text>
                    </Box>
                  </GridItem>
                  <Box bg="neutral-300" p={6} rounded="lg">
                    <Text>1x1</Text>
                  </Box>
                  <Box bg="neutral-400" p={6} rounded="lg">
                    <Text>1x1</Text>
                  </Box>
                </Grid>
              </Box>
            </VStack>
          </VStack>
        </Section>

        {/* Container Component */}
        <Section>
          <VStack spacing={6}>
            <Text variant="headline">Container Component</Text>
            <Text color="muted">
              Responsive containers with consistent max-widths
            </Text>
            
            <VStack spacing={4} w="full">
              <Container size="sm" bg="neutral-100" py={6} rounded="lg">
                <Text align="center">Small Container (640px)</Text>
              </Container>
              
              <Container size="md" bg="neutral-100" py={6} rounded="lg">
                <Text align="center">Medium Container (768px)</Text>
              </Container>
              
              <Container size="lg" bg="neutral-100" py={6} rounded="lg">
                <Text align="center">Large Container (1024px)</Text>
              </Container>
              
              <Container fluid bg="neutral-100" py={6} rounded="lg">
                <Text align="center">Fluid Container (Full Width)</Text>
              </Container>
            </VStack>
          </VStack>
        </Section>

        {/* Flex Component */}
        <Section>
          <VStack spacing={6}>
            <Text variant="headline">Flex Component</Text>
            <Text color="muted">
              Flexible box layout with full control
            </Text>
            
            <VStack spacing={6} w="full">
              <Box bg="neutral-100" p={6} rounded="lg">
                <VStack spacing={4}>
                  <Text variant="subtitle">Basic Flex</Text>
                  <Flex gap={4} align="center">
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
                </VStack>
              </Box>
              
              <Box bg="neutral-100" p={6} rounded="lg">
                <Flex align="center">
                  <Text variant="subtitle">With Spacer</Text>
                  <Spacer />
                  <HStack spacing={2}>
                    <NHButton size="sm" variant="flat">Login</NHButton>
                    <NHButton size="sm">Sign Up</NHButton>
                  </HStack>
                </Flex>
              </Box>
              
              <Flex center minH={48} bg="gradient-to-br from-orange-500 to-teal-500" rounded="xl">
                <Text variant="display" color="inverse">
                  Perfectly Centered
                </Text>
              </Flex>
              
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
            </VStack>
          </VStack>
        </Section>

        {/* Complex Example */}
        <Section>
          <VStack spacing={6}>
            <Text variant="headline">Complex Layout Example</Text>
            <Text color="muted">
              Combining foundation components for real-world layouts
            </Text>
            
            <Box bg="gradient-to-br from-orange-500 to-teal-500" rounded="2xl" p={8}>
              <VStack spacing={6} align="center">
                <Text variant="display" color="inverse">
                  Welcome to NH-UI
                </Text>
                <Text variant="subtitle" color="inverse" align="center">
                  Build beautiful, responsive interfaces with our foundation components
                </Text>
                <HStack spacing={4}>
                  <NHButton size="lg" variant="solid">Get Started</NHButton>
                  <NHButton size="lg" variant="bordered">Learn More</NHButton>
                </HStack>
              </VStack>
            </Box>
            
            <Grid cols={{ base: 1, md: 3 }} gap={6}>
              {['Flexible', 'Responsive', 'Beautiful'].map((feature, i) => (
                <NHCard key={i}>
                  <NHCardBody>
                    <VStack spacing={4}>
                      <Box 
                        w={12} 
                        h={12} 
                        bg={i === 0 ? 'orange-500' : i === 1 ? 'teal-500' : 'neutral-500'} 
                        rounded="lg" 
                      />
                      <Text variant="title">{feature}</Text>
                      <Text color="muted" align="center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </Text>
                    </VStack>
                  </NHCardBody>
                </NHCard>
              ))}
            </Grid>
          </VStack>
        </Section>
      </VStack>
    </Container>
  );
}