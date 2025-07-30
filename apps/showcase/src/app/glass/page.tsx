"use client";

import dynamic from 'next/dynamic';
import { NHButton, NHWallpaper } from "@nh-ui/ui";

const NHGlassCard = dynamic(
  () => import("@nh-ui/ui").then(mod => ({ default: mod.NHGlassCard })),
  { ssr: false }
);

const NHGlassSection = dynamic(
  () => import("@nh-ui/ui").then(mod => ({ default: mod.NHGlassSection })),
  { ssr: false }
);
import {
  Card,
  CardBody,
  CardHeader,
  Input,
  Textarea,
  Button,
  Avatar,
  Chip,
  Progress,
  Divider,
} from "@heroui/react";
import { 
  MusicalNoteIcon,
  PlayIcon,
  HeartIcon,
  ShareIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

export default function GlassDesignPage() {
  return (
    <div className="min-h-screen">
      <NHWallpaper variant="mesh" animated />
      {/* Hero Section with Glass */}
      <NHGlassSection blur="xl" className="m-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <SparklesIcon className="h-8 w-8 text-orange-500" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-500 to-teal-500 bg-clip-text text-transparent">
              Glass Design System
            </h1>
            <SparklesIcon className="h-8 w-8 text-teal-500" />
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Flat design meets glassmorphism - The Noise Heroes visual language
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500">Glass</div>
              <p className="text-gray-600 dark:text-gray-400">Containers & Sections</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">+</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-500">Flat</div>
              <p className="text-gray-600 dark:text-gray-400">Content & Actions</p>
            </div>
          </div>
        </div>
      </NHGlassSection>

      {/* Component Examples */}
      <div className="max-w-7xl mx-auto p-8 space-y-8">
        {/* Music Player with Glass */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Glass Music Player</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <NHGlassCard blur="md">
              <CardBody className="space-y-4">
                <div className="flex items-center gap-4">
                  <Avatar
                    src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200"
                    className="w-20 h-20"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">Digital Waves</h3>
                    <p className="text-gray-600 dark:text-gray-400">Noise Heroes</p>
                    <div className="flex gap-2 mt-2">
                      <Chip size="sm" color="primary" variant="flat">Electronic</Chip>
                      <Chip size="sm" color="secondary" variant="flat">2024</Chip>
                    </div>
                  </div>
                </div>
                
                <Progress value={65} color="primary" />
                
                <div className="flex justify-center gap-4">
                  <Button isIconOnly variant="flat" size="lg">
                    <PlayIcon className="h-6 w-6" />
                  </Button>
                  <Button isIconOnly variant="flat" color="danger">
                    <HeartIcon className="h-5 w-5" />
                  </Button>
                  <Button isIconOnly variant="flat">
                    <ShareIcon className="h-5 w-5" />
                  </Button>
                </div>
              </CardBody>
            </NHGlassCard>

            <NHGlassCard blur="lg">
              <CardBody className="space-y-4">
                <h4 className="text-lg font-semibold">Glass Effects</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Backdrop Blur</span>
                    <code className="text-orange-500">12px</code>
                  </div>
                  <div className="flex justify-between">
                    <span>Background</span>
                    <code className="text-orange-500">rgba(255,255,255,0.7)</code>
                  </div>
                  <div className="flex justify-between">
                    <span>Border</span>
                    <code className="text-orange-500">rgba(255,255,255,0.2)</code>
                  </div>
                  <div className="flex justify-between">
                    <span>Shadow</span>
                    <code className="text-orange-500">0 4px 16px rgba(0,0,0,0.08)</code>
                  </div>
                </div>
              </CardBody>
            </NHGlassCard>
          </div>
        </div>

        {/* Form Example */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Glass Forms</h2>
          <NHGlassCard blur="md" className="max-w-2xl">
            <CardHeader>
              <h3 className="text-2xl font-semibold">Upload Your Track</h3>
            </CardHeader>
            <CardBody className="space-y-4">
              <Input
                label="Track Title"
                placeholder="Enter your track name"
                variant="flat"
                startContent={<MusicalNoteIcon className="h-4 w-4" />}
              />
              <Input
                label="Artist Name"
                placeholder="Your artist name"
                variant="flat"
              />
              <Textarea
                label="Description"
                placeholder="Tell us about your track..."
                variant="flat"
                minRows={3}
              />
              <div className="flex gap-4">
                <NHButton color="primary" className="flex-1">
                  Upload Track
                </NHButton>
                <NHButton variant="flat" className="flex-1">
                  Save Draft
                </NHButton>
              </div>
            </CardBody>
          </NHGlassCard>
        </div>

        {/* Blur Variations */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Blur Intensity</h2>
          <div className="grid md:grid-cols-5 gap-4">
            {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((blur) => (
              <NHGlassCard key={blur} blur={blur}>
                <CardBody className="text-center">
                  <div className="text-2xl font-bold mb-2">{blur.toUpperCase()}</div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    blur-{blur}
                  </p>
                </CardBody>
              </NHGlassCard>
            ))}
          </div>
        </div>

        {/* Design Principles */}
        <NHGlassSection blur="lg" className="space-y-6">
          <h2 className="text-3xl font-bold text-center">Design Principles</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center space-y-2">
              <div className="text-6xl">🫧</div>
              <h3 className="text-xl font-semibold">Glass Containers</h3>
              <p className="text-gray-600 dark:text-gray-400">
                All containers use frosted glass effects with backdrop blur
              </p>
            </div>
            
            <div className="text-center space-y-2">
              <div className="text-6xl">📐</div>
              <h3 className="text-xl font-semibold">Flat Content</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Content remains flat and clear for optimal readability
              </p>
            </div>
            
            <div className="text-center space-y-2">
              <div className="text-6xl">✨</div>
              <h3 className="text-xl font-semibold">Subtle Depth</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Depth through blur intensity, not traditional shadows
              </p>
            </div>
          </div>
        </NHGlassSection>

        {/* Code Example */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Implementation</h2>
          <NHGlassCard blur="sm">
            <CardBody>
              <pre className="text-sm overflow-x-auto">
                <code>{`// Glass Card Component
<NHGlassCard blur="md">
  <CardBody>
    <!-- Flat content here -->
    <h3 className="text-xl font-bold">Flat Heading</h3>
    <p className="text-gray-600">Clear, readable content</p>
    <Button color="primary" variant="flat">
      Flat Action
    </Button>
  </CardBody>
</NHGlassCard>`}</code>
              </pre>
            </CardBody>
          </NHGlassCard>
        </div>
      </div>
    </div>
  );
}