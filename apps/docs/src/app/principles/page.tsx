"use client";

import {
  Container,
  Stack,
  Text,
  Grid,
  NHCard,
  NHCardBody,
  NHCardHeader,
  NHDivider,
  NHChip,
  Box,
  RocketLaunchIcon,
  SparklesIcon,
  ShieldCheckIcon,
  BoltIcon,
  EyeIcon,
  CubeTransparentIcon,
  HeartIcon,
  LightBulbIcon,
} from "@nh-ui/ui";

export default function PrinciplesPage() {
  return (
    <Container size="xl">
      <Stack spacing={12} className="py-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <Text variant="display" gradient="brand" className="mb-4">
            Design Principles
          </Text>
          <Text size="lg" color="muted" className="leading-relaxed">
            The Noise Heroes design system is built on a foundation of bold creativity, 
            technical excellence, and human-centered design. These principles guide 
            every decision we make.
          </Text>
        </div>

        {/* Core Principles */}
        <Grid cols={{ base: 1, md: 2 }} gap={8}>
          <NHCard>
            <NHCardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <RocketLaunchIcon className="h-6 w-6 text-primary" />
                </div>
                <Text variant="headline">Bold & Progressive</Text>
              </div>
            </NHCardHeader>
            <NHCardBody>
              <Stack spacing={4}>
                <Text color="muted">
                  We push boundaries and challenge conventions. Our design language 
                  embraces modern aesthetics while staying true to our creative roots.
                </Text>
                <ul className="space-y-2 text-sm text-default-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Use vibrant colors and dynamic gradients</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Embrace motion and interactive elements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Create experiences that inspire and delight</span>
                  </li>
                </ul>
              </Stack>
            </NHCardBody>
          </NHCard>

          <NHCard>
            <NHCardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-secondary/10 rounded-lg">
                  <SparklesIcon className="h-6 w-6 text-secondary" />
                </div>
                <Text variant="headline">Modern & Refined</Text>
              </div>
            </NHCardHeader>
            <NHCardBody>
              <Stack spacing={4}>
                <Text color="muted">
                  Clean interfaces with purposeful details. Every element serves a 
                  function while contributing to the overall aesthetic harmony.
                </Text>
                <ul className="space-y-2 text-sm text-default-600">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>Maintain visual hierarchy and clarity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>Use whitespace intentionally</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>Balance simplicity with sophistication</span>
                  </li>
                </ul>
              </Stack>
            </NHCardBody>
          </NHCard>

          <NHCard>
            <NHCardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-success/10 rounded-lg">
                  <ShieldCheckIcon className="h-6 w-6 text-success" />
                </div>
                <Text variant="headline">Accessible & Inclusive</Text>
              </div>
            </NHCardHeader>
            <NHCardBody>
              <Stack spacing={4}>
                <Text color="muted">
                  Design for everyone. Accessibility isn't an afterthought—it's 
                  fundamental to creating truly exceptional experiences.
                </Text>
                <ul className="space-y-2 text-sm text-default-600">
                  <li className="flex items-start gap-2">
                    <span className="text-success mt-1">•</span>
                    <span>Meet WCAG 2.1 AA standards minimum</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-success mt-1">•</span>
                    <span>Support keyboard navigation throughout</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-success mt-1">•</span>
                    <span>Provide clear feedback and error states</span>
                  </li>
                </ul>
              </Stack>
            </NHCardBody>
          </NHCard>

          <NHCard>
            <NHCardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-warning/10 rounded-lg">
                  <BoltIcon className="h-6 w-6 text-warning" />
                </div>
                <Text variant="headline">Fast & Performant</Text>
              </div>
            </NHCardHeader>
            <NHCardBody>
              <Stack spacing={4}>
                <Text color="muted">
                  Speed is a feature. Every interaction should feel instant and 
                  every animation should run at 60fps.
                </Text>
                <ul className="space-y-2 text-sm text-default-600">
                  <li className="flex items-start gap-2">
                    <span className="text-warning mt-1">•</span>
                    <span>Optimize for perceived performance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-warning mt-1">•</span>
                    <span>Use lazy loading and code splitting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-warning mt-1">•</span>
                    <span>Minimize bundle sizes and dependencies</span>
                  </li>
                </ul>
              </Stack>
            </NHCardBody>
          </NHCard>
        </Grid>

        <NHDivider />

        {/* Design Philosophy */}
        <div>
          <Text variant="headline" className="mb-8 text-center">
            Our Design Philosophy
          </Text>
          
          <Grid cols={{ base: 1, md: 3 }} gap={6}>
            <NHCard className="text-center">
              <NHCardBody>
                <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                  <EyeIcon className="h-8 w-8 text-primary" />
                </div>
                <Text variant="title" className="mb-2">Clarity</Text>
                <Text size="sm" color="muted">
                  Information should be immediately understandable. Remove ambiguity 
                  and guide users naturally through their journey.
                </Text>
              </NHCardBody>
            </NHCard>

            <NHCard className="text-center">
              <NHCardBody>
                <div className="p-3 bg-secondary/10 rounded-full w-fit mx-auto mb-4">
                  <CubeTransparentIcon className="h-8 w-8 text-secondary" />
                </div>
                <Text variant="title" className="mb-2">Consistency</Text>
                <Text size="sm" color="muted">
                  Patterns should be predictable. Users should never have to relearn 
                  interactions as they move through the experience.
                </Text>
              </NHCardBody>
            </NHCard>

            <NHCard className="text-center">
              <NHCardBody>
                <div className="p-3 bg-success/10 rounded-full w-fit mx-auto mb-4">
                  <HeartIcon className="h-8 w-8 text-success" />
                </div>
                <Text variant="title" className="mb-2">Delight</Text>
                <Text size="sm" color="muted">
                  Surprise users with thoughtful details. Small moments of joy 
                  create memorable experiences that users love.
                </Text>
              </NHCardBody>
            </NHCard>
          </Grid>
        </div>

        {/* Decision Framework */}
        <div className="bg-default-100 rounded-2xl p-8 md:p-12">
          <Stack spacing={6}>
            <div className="text-center">
              <LightBulbIcon className="h-12 w-12 text-warning mx-auto mb-4" />
              <Text variant="headline" className="mb-4">
                Decision Making Framework
              </Text>
              <Text color="muted" className="max-w-2xl mx-auto">
                When faced with design decisions, we follow this hierarchy to ensure 
                we're making choices that align with our values and user needs.
              </Text>
            </div>

            <Stack spacing={4} className="max-w-2xl mx-auto w-full">
              <div className="flex items-center gap-4">
                <NHChip color="danger" size="sm">1</NHChip>
                <div className="flex-1">
                  <Text weight="semibold">User Need</Text>
                  <Text size="sm" color="muted">Does this solve a real problem for our users?</Text>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <NHChip color="warning" size="sm">2</NHChip>
                <div className="flex-1">
                  <Text weight="semibold">Accessibility</Text>
                  <Text size="sm" color="muted">Can everyone use this effectively?</Text>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <NHChip color="primary" size="sm">3</NHChip>
                <div className="flex-1">
                  <Text weight="semibold">Performance</Text>
                  <Text size="sm" color="muted">Will this maintain our speed standards?</Text>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <NHChip color="secondary" size="sm">4</NHChip>
                <div className="flex-1">
                  <Text weight="semibold">Consistency</Text>
                  <Text size="sm" color="muted">Does this align with existing patterns?</Text>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <NHChip color="success" size="sm">5</NHChip>
                <div className="flex-1">
                  <Text weight="semibold">Delight</Text>
                  <Text size="sm" color="muted">Can we make this experience more enjoyable?</Text>
                </div>
              </div>
            </Stack>
          </Stack>
        </div>

        {/* Brand Personality */}
        <div>
          <Text variant="headline" className="mb-8 text-center">
            Brand Personality
          </Text>
          
          <Grid cols={{ base: 1, md: 2, lg: 4 }} gap={4}>
            <Box className="text-center p-6 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5">
              <Text variant="title" className="mb-2">Creative</Text>
              <Text size="sm" color="muted">
                Innovative and artistic in our approach
              </Text>
            </Box>

            <Box className="text-center p-6 rounded-xl bg-gradient-to-br from-secondary/10 to-secondary/5">
              <Text variant="title" className="mb-2">Professional</Text>
              <Text size="sm" color="muted">
                Reliable and trustworthy in execution
              </Text>
            </Box>

            <Box className="text-center p-6 rounded-xl bg-gradient-to-br from-success/10 to-success/5">
              <Text variant="title" className="mb-2">Passionate</Text>
              <Text size="sm" color="muted">
                Enthusiastic about music and technology
              </Text>
            </Box>

            <Box className="text-center p-6 rounded-xl bg-gradient-to-br from-warning/10 to-warning/5">
              <Text variant="title" className="mb-2">Empowering</Text>
              <Text size="sm" color="muted">
                Enabling creators to achieve their vision
              </Text>
            </Box>
          </Grid>
        </div>
      </Stack>
    </Container>
  );
}