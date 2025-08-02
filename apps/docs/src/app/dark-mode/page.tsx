"use client";

import { NHCard, NHCardBody, NHCardHeader, NHButton, NHChip, NHAvatar, NHProgress } from "@nh-ui/ui";
import { useTheme } from "next-themes";
import { 
  MoonIcon, 
  SunIcon,
  SparklesIcon,
  BoltIcon,
  BeakerIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

export default function DarkModePage() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen p-8 max-w-7xl mx-auto">
      <div className="mb-12">
        <h1 className="text-5xl font-bold mb-4">Dark Mode Design</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Enhanced dark mode with glass morphism, neon effects, and smooth transitions
        </p>
        <div className="mt-6">
          <NHButton
            color="primary"
            variant="flat"
            onPress={() => setTheme(theme === "dark" ? "light" : "dark")}
            startContent={theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          >
            Toggle {theme === "dark" ? "Light" : "Dark"} Mode
          </NHButton>
        </div>
      </div>

      {/* Glass Morphism Cards */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Glass Morphism</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="nh-glass p-6 rounded-2xl">
            <SparklesIcon className="h-8 w-8 mb-4 text-primary" />
            <h3 className="text-lg font-semibold mb-2">Glass Card</h3>
            <p className="text-sm text-default-600">
              Translucent surfaces with backdrop blur for depth
            </p>
          </div>
          
          <div className="nh-glass p-6 rounded-2xl">
            <BoltIcon className="h-8 w-8 mb-4 text-secondary" />
            <h3 className="text-lg font-semibold mb-2">Frosted Glass</h3>
            <p className="text-sm text-default-600">
              Elegant transparency with subtle borders
            </p>
          </div>
          
          <div className="nh-glass p-6 rounded-2xl">
            <BeakerIcon className="h-8 w-8 mb-4 text-success" />
            <h3 className="text-lg font-semibold mb-2">Layered Glass</h3>
            <p className="text-sm text-default-600">
              Multiple layers create visual hierarchy
            </p>
          </div>
        </div>
      </div>

      {/* Neon Effects */}
      <NHCard className="mb-12">
        <NHCardHeader>
          <h2 className="text-2xl font-semibold">Neon Effects</h2>
        </NHCardHeader>
        <NHCardBody>
          <div className="flex flex-wrap gap-4">
            <NHButton className="nh-neon-primary" color="primary">
              Neon Primary
            </NHButton>
            <NHButton className="nh-neon-secondary" color="secondary">
              Neon Secondary
            </NHButton>
            <div className="nh-glass nh-neon-primary p-4 rounded-lg">
              <p>Combined Glass + Neon</p>
            </div>
          </div>
        </NHCardBody>
      </NHCard>

      {/* Dark Surfaces */}
      <NHCard className="mb-12">
        <NHCardHeader>
          <h2 className="text-2xl font-semibold">Dark Surface Hierarchy</h2>
        </NHCardHeader>
        <NHCardBody>
          <div className="space-y-4">
            <div className="p-6 rounded-lg bg-background">
              <p className="font-semibold mb-2">Base Background</p>
              <p className="text-sm text-default-600">Deepest level - #0A0A0A</p>
            </div>
            
            <div className="p-6 rounded-lg bg-content1">
              <p className="font-semibold mb-2">Content Level 1</p>
              <p className="text-sm text-default-600">Primary content - #171717</p>
            </div>
            
            <div className="p-6 rounded-lg bg-content2">
              <p className="font-semibold mb-2">Content Level 2</p>
              <p className="text-sm text-default-600">Secondary content - #262626</p>
            </div>
            
            <div className="p-6 rounded-lg bg-content3">
              <p className="font-semibold mb-2">Content Level 3</p>
              <p className="text-sm text-default-600">Elevated content - #404040</p>
            </div>
          </div>
        </NHCardBody>
      </NHCard>

      {/* Interactive Dark Elements */}
      <NHCard className="mb-12">
        <NHCardHeader>
          <h2 className="text-2xl font-semibold">Interactive Dark Elements</h2>
        </NHCardHeader>
        <NHCardBody>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Music Player Dark */}
            <div className="nh-dark-surface p-6 rounded-2xl nh-dark-hover transition-all">
              <div className="flex items-center gap-4 mb-4">
                <NHAvatar
                  src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300"
                  className="w-16 h-16"
                />
                <div>
                  <h4 className="font-semibold">Midnight Vibes</h4>
                  <p className="text-sm text-default-500">Noise Heroes</p>
                </div>
              </div>
              <NHProgress value={70} color="primary" className="mb-4" />
              <div className="flex gap-2">
                <NHButton size="sm" variant="flat" color="primary">Play</NHButton>
                <NHButton size="sm" variant="light">Queue</NHButton>
              </div>
            </div>

            {/* Stats Card Dark */}
            <div className="nh-dark-surface p-6 rounded-2xl nh-dark-hover transition-all">
              <h4 className="font-semibold mb-4">Listening Stats</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-default-600">Plays Today</span>
                  <span className="font-semibold">1,234</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-default-600">New Followers</span>
                  <span className="font-semibold text-success">+89</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-default-600">Revenue</span>
                  <span className="font-semibold">$456.78</span>
                </div>
              </div>
            </div>
          </div>
        </NHCardBody>
      </NHCard>

      {/* Color Adjustments */}
      <NHCard>
        <NHCardHeader>
          <h2 className="text-2xl font-semibold">Dark Mode Color Adjustments</h2>
        </NHCardHeader>
        <NHCardBody>
          <div className="space-y-4">
            <div>
              <p className="font-semibold mb-3">Primary Colors</p>
              <div className="flex gap-2">
                <NHChip color="primary" variant="flat">Light Primary</NHChip>
                <NHChip color="primary" variant="solid">Bright Primary</NHChip>
                <NHChip color="primary" variant="shadow">Elevated Primary</NHChip>
              </div>
            </div>
            
            <div>
              <p className="font-semibold mb-3">Secondary Colors</p>
              <div className="flex gap-2">
                <NHChip color="secondary" variant="flat">Light Secondary</NHChip>
                <NHChip color="secondary" variant="solid">Bright Secondary</NHChip>
                <NHChip color="secondary" variant="shadow">Elevated Secondary</NHChip>
              </div>
            </div>
            
            <div>
              <p className="font-semibold mb-3">Functional Colors</p>
              <div className="flex gap-2">
                <NHChip color="success" variant="flat">Success</NHChip>
                <NHChip color="warning" variant="flat">Warning</NHChip>
                <NHChip color="danger" variant="flat">Danger</NHChip>
              </div>
            </div>
          </div>
        </NHCardBody>
      </NHCard>
    </div>
  );
}