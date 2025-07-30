"use client";

import { useState } from "react";
import dynamic from 'next/dynamic';
import { NHWallpaper, NHButton, NHIconButton } from "@nh-ui/ui";

const NHGlassCard = dynamic(
  () => import("@nh-ui/ui").then(mod => ({ default: mod.NHGlassCard })),
  { ssr: false }
);
import { CardBody, CardHeader, RadioGroup, Radio, Switch } from "@heroui/react";
import { SparklesIcon } from "@heroicons/react/24/outline";

export default function WallpaperPage() {
  const [variant, setVariant] = useState<'subtle' | 'vibrant' | 'mesh' | 'aurora'>('subtle');
  const [animated, setAnimated] = useState(true);

  return (
    <div className="min-h-screen">
      <NHWallpaper variant={variant} animated={animated} />
      
      <div className="relative z-10 p-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Wallpaper Backgrounds</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Subtle gradients that enhance our glass effects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Controls */}
          <NHGlassCard blur="md">
            <CardHeader>
              <h2 className="text-2xl font-semibold">Wallpaper Controls</h2>
            </CardHeader>
            <CardBody className="space-y-6">
              <div>
                <h3 className="text-sm font-medium mb-3">Variant</h3>
                <RadioGroup value={variant} onValueChange={(value) => setVariant(value as any)}>
                  <Radio value="subtle">Subtle</Radio>
                  <Radio value="vibrant">Vibrant</Radio>
                  <Radio value="mesh">Mesh</Radio>
                  <Radio value="aurora">Aurora</Radio>
                </RadioGroup>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Animation</span>
                <Switch
                  checked={animated}
                  onValueChange={setAnimated}
                />
              </div>
            </CardBody>
          </NHGlassCard>

          {/* Description */}
          <NHGlassCard blur="md">
            <CardHeader>
              <h2 className="text-2xl font-semibold">Current: {variant}</h2>
            </CardHeader>
            <CardBody>
              {variant === 'subtle' && (
                <div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Minimal gradients with soft transitions between brand colors. 
                    Perfect for professional interfaces.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Orange to white to teal gradient</li>
                    <li>• Very subtle color transitions</li>
                    <li>• Minimal distraction</li>
                  </ul>
                </div>
              )}
              
              {variant === 'vibrant' && (
                <div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    More pronounced gradients with animated opacity shifts. 
                    Great for creative applications.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Stronger brand color presence</li>
                    <li>• Animated breathing effect</li>
                    <li>• Dynamic and energetic</li>
                  </ul>
                </div>
              )}
              
              {variant === 'mesh' && (
                <div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Gradient mesh with overlapping radial gradients. 
                    Creates depth and visual interest.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Multiple gradient layers</li>
                    <li>• Radial gradient intersections</li>
                    <li>• Subtle scaling animation</li>
                  </ul>
                </div>
              )}
              
              {variant === 'aurora' && (
                <div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Flowing aurora-like animations with diagonal gradients. 
                    Perfect for immersive experiences.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Continuous flow animation</li>
                    <li>• Diagonal gradient movement</li>
                    <li>• Northern lights inspired</li>
                  </ul>
                </div>
              )}
            </CardBody>
          </NHGlassCard>
        </div>

        {/* Example Content */}
        <div className="mt-12 space-y-8">
          <NHGlassCard blur="lg" className="max-w-2xl mx-auto">
            <CardBody className="text-center py-12">
              <NHIconButton color="primary" size="lg" className="mb-6" spin>
                <SparklesIcon className="h-8 w-8" />
              </NHIconButton>
              <h3 className="text-2xl font-bold mb-4">Glass on Gradient</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                See how our glass effects look on different wallpaper variants.
                The subtle gradients enhance the frosted glass appearance.
              </p>
              <div className="flex justify-center gap-3">
                <NHButton pill color="primary">
                  Primary Action
                </NHButton>
                <NHButton pill variant="bordered">
                  Secondary Action
                </NHButton>
              </div>
            </CardBody>
          </NHGlassCard>
        </div>
      </div>
    </div>
  );
}