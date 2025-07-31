"use client";

import { Card, CardBody, CardHeader, Chip, Button } from "@heroui/react";
import { colors, darkColors, withOpacity, NHWallpaper } from "@nh-ui/ui";

export default function ColorsPage() {
  return (
    <>
      <NHWallpaper variant="subtle" animated />
      <div className="min-h-screen p-8 max-w-7xl mx-auto relative z-10">
      <div className="mb-12">
        <h1 className="text-5xl font-bold mb-4">Official Color System</h1>
        <p className="text-xl text-default-600">
          Noise Heroes official colors: Black, White, Orange (#FF5500), and Teal (#00D9B5)
        </p>
      </div>

      {/* Official Brand Colors */}
      <Card className="mb-12 backdrop-blur-md bg-white/70 dark:bg-black/70">
        <CardHeader>
          <h2 className="text-2xl font-semibold">Official Brand Colors</h2>
        </CardHeader>
        <CardBody>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="h-32 rounded-xl bg-black mb-4 shadow-lg border border-gray-200"></div>
              <h3 className="font-semibold mb-1">Black</h3>
              <code className="text-sm text-gray-600">#000000</code>
              <p className="text-sm text-default-500 mt-2">Pure black for maximum contrast</p>
            </div>
            <div>
              <div className="h-32 rounded-xl bg-white mb-4 shadow-lg border border-gray-200"></div>
              <h3 className="font-semibold mb-1">White</h3>
              <code className="text-sm text-gray-600">#FFFFFF</code>
              <p className="text-sm text-default-500 mt-2">Pure white for clean backgrounds</p>
            </div>
            <div>
              <div className="h-32 rounded-xl bg-[#FF5500] mb-4 shadow-lg"></div>
              <h3 className="font-semibold mb-1">Orange</h3>
              <code className="text-sm text-gray-600">#FF5500</code>
              <p className="text-sm text-default-500 mt-2">Primary brand color for energy</p>
            </div>
            <div>
              <div className="h-32 rounded-xl bg-[#00D9B5] mb-4 shadow-lg"></div>
              <h3 className="font-semibold mb-1">Teal</h3>
              <code className="text-sm text-gray-600">#00D9B5</code>
              <p className="text-sm text-default-500 mt-2">Secondary color for balance</p>
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Extended Orange Palette */}
      <Card className="mb-12 backdrop-blur-md bg-white/70 dark:bg-black/70">
        <CardHeader>
          <h2 className="text-2xl font-semibold">Orange Palette</h2>
        </CardHeader>
        <CardBody>
          <div className="grid grid-cols-6 gap-4">
            {Object.entries(colors.orange).map(([key, value]) => (
              <div key={key}>
                <div 
                  className="h-20 rounded-lg mb-2 border border-gray-200"
                  style={{ backgroundColor: value }}
                ></div>
                <p className="text-sm font-medium">{key}</p>
                <code className="text-xs text-gray-500">{value}</code>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>

      {/* Extended Teal Palette */}
      <Card className="mb-12 backdrop-blur-md bg-white/70 dark:bg-black/70">
        <CardHeader>
          <h2 className="text-2xl font-semibold">Teal Palette</h2>
        </CardHeader>
        <CardBody>
          <div className="grid grid-cols-6 gap-4">
            {Object.entries(colors.teal).map(([key, value]) => (
              <div key={key}>
                <div 
                  className="h-20 rounded-lg mb-2 border border-gray-200"
                  style={{ backgroundColor: value }}
                ></div>
                <p className="text-sm font-medium">{key}</p>
                <code className="text-xs text-gray-500">{value}</code>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>

      {/* Gradients */}
      <Card className="mb-12 backdrop-blur-md bg-white/70 dark:bg-black/70">
        <CardHeader>
          <h2 className="text-2xl font-semibold">Brand Gradients</h2>
        </CardHeader>
        <CardBody>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <div 
                className="h-32 rounded-xl mb-4 shadow-lg"
                style={{ background: colors.gradients.brand }}
              ></div>
              <h3 className="font-semibold mb-1">Brand Gradient</h3>
              <p className="text-sm text-gray-500">Orange to Teal blend</p>
            </div>
            <div>
              <div 
                className="h-32 rounded-xl mb-4 shadow-lg"
                style={{ background: colors.gradients.orangeFade }}
              ></div>
              <h3 className="font-semibold mb-1">Orange Fade</h3>
              <p className="text-sm text-gray-500">Soft orange gradient</p>
            </div>
            <div>
              <div 
                className="h-32 rounded-xl mb-4 shadow-lg"
                style={{ background: colors.gradients.blackToOrange }}
              ></div>
              <h3 className="font-semibold mb-1">Black to Orange</h3>
              <p className="text-sm text-gray-500">Dramatic dark gradient</p>
            </div>
            <div>
              <div 
                className="h-32 rounded-xl mb-4 shadow-lg"
                style={{ background: colors.gradients.whiteToTeal }}
              ></div>
              <h3 className="font-semibold mb-1">White to Teal</h3>
              <p className="text-sm text-gray-500">Light and fresh gradient</p>
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Functional Colors */}
      <Card className="mb-12 backdrop-blur-md bg-white/70 dark:bg-black/70">
        <CardHeader>
          <h2 className="text-2xl font-semibold">Functional Colors</h2>
        </CardHeader>
        <CardBody>
          <div className="grid grid-cols-3 gap-6">
            <div>
              <div className="h-24 rounded-xl bg-[#FF5500] mb-4"></div>
              <h3 className="font-semibold mb-1">Primary/Warning</h3>
              <code className="text-sm text-gray-600">#FF5500</code>
              <p className="text-sm text-gray-500">Orange for primary actions and warnings</p>
            </div>
            <div>
              <div className="h-24 rounded-xl bg-[#00D9B5] mb-4"></div>
              <h3 className="font-semibold mb-1">Secondary/Success</h3>
              <code className="text-sm text-gray-600">#00D9B5</code>
              <p className="text-sm text-gray-500">Teal for success and secondary actions</p>
            </div>
            <div>
              <div className="h-24 rounded-xl bg-[#FF3333] mb-4"></div>
              <h3 className="font-semibold mb-1">Danger</h3>
              <code className="text-sm text-gray-600">#FF3333</code>
              <p className="text-sm text-gray-500">Bright red for errors and dangers</p>
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Effects Demo */}
      <Card className="mb-12 backdrop-blur-md bg-white/70 dark:bg-black/70">
        <CardHeader>
          <h2 className="text-2xl font-semibold">Special Effects</h2>
        </CardHeader>
        <CardBody className="space-y-6">
          <div>
            <h3 className="font-semibold mb-4">Glow Effects</h3>
            <div className="flex gap-4">
              <Button 
                color="primary" 
                className="nh-glow-orange"
              >
                Orange Glow
              </Button>
              <Button 
                color="secondary" 
                className="nh-glow-teal"
              >
                Teal Glow
              </Button>
              <Button 
                variant="bordered" 
                className="border-white text-white bg-black nh-glow"
                style={{ boxShadow: colors.effects.glow.white }}
              >
                White Glow
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Neon Effects (Dark Mode)</h3>
            <div className="flex gap-4">
              <div 
                className="px-6 py-3 rounded-lg bg-gray-900 text-white font-semibold nh-neon-orange"
              >
                Neon Orange
              </div>
              <div 
                className="px-6 py-3 rounded-lg bg-gray-900 text-white font-semibold nh-neon-teal"
              >
                Neon Teal
              </div>
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Usage Guidelines */}
      <Card className="backdrop-blur-md bg-white/70 dark:bg-black/70">
        <CardHeader>
          <h2 className="text-2xl font-semibold">Usage Guidelines</h2>
        </CardHeader>
        <CardBody className="prose max-w-none">
          <ul className="space-y-2">
            <li>
              <strong>Orange (#FF5500):</strong> Use for primary CTAs, links, warnings, and high-energy elements
            </li>
            <li>
              <strong>Teal (#00D9B5):</strong> Use for success states, secondary actions, and calming elements
            </li>
            <li>
              <strong>Black (#000000):</strong> Use for text, dark backgrounds, and maximum contrast
            </li>
            <li>
              <strong>White (#FFFFFF):</strong> Use for light backgrounds, text on dark backgrounds
            </li>
            <li>
              <strong>Gradients:</strong> Use brand gradient for hero sections and special emphasis
            </li>
            <li>
              <strong>Effects:</strong> Reserve glow and neon effects for interactive states and CTAs
            </li>
          </ul>
        </CardBody>
      </Card>
    </div>
    </>
  );
}