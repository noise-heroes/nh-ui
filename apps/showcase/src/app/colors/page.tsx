"use client";

import { Card, CardBody, CardHeader, Chip, Button } from "@heroui/react";
import { colors, darkColors, withOpacity } from "@/styles/colors";

export default function ColorsPage() {
  return (
    <div className="min-h-screen p-8 max-w-7xl mx-auto">
      <div className="mb-12">
        <h1 className="text-5xl font-bold mb-4">Color System</h1>
        <p className="text-xl text-gray-600">
          Noise Heroes color palette designed for modern music applications
        </p>
      </div>

      {/* Brand Colors */}
      <Card className="mb-12">
        <CardHeader>
          <h2 className="text-2xl font-semibold">Brand Colors</h2>
        </CardHeader>
        <CardBody>
          <div className="grid grid-cols-3 gap-6">
            <div>
              <div className="h-32 rounded-xl bg-[#3B82F6] mb-4 shadow-lg"></div>
              <h3 className="font-semibold mb-1">Primary Blue</h3>
              <code className="text-sm text-gray-600">#3B82F6</code>
              <p className="text-sm text-gray-500 mt-2">Main brand color for primary actions</p>
            </div>
            <div>
              <div className="h-32 rounded-xl bg-[#A855F7] mb-4 shadow-lg"></div>
              <h3 className="font-semibold mb-1">Secondary Purple</h3>
              <code className="text-sm text-gray-600">#A855F7</code>
              <p className="text-sm text-gray-500 mt-2">Accent color for creative elements</p>
            </div>
            <div>
              <div className="h-32 rounded-xl bg-[#14B8A6] mb-4 shadow-lg"></div>
              <h3 className="font-semibold mb-1">Tertiary Teal</h3>
              <code className="text-sm text-gray-600">#14B8A6</code>
              <p className="text-sm text-gray-500 mt-2">Success states and positive actions</p>
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Gradients */}
      <Card className="mb-12">
        <CardHeader>
          <h2 className="text-2xl font-semibold">Gradients</h2>
        </CardHeader>
        <CardBody>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <div 
                className="h-32 rounded-xl mb-4 shadow-lg"
                style={{ background: colors.gradients.brand }}
              ></div>
              <h3 className="font-semibold mb-1">Brand Gradient</h3>
              <p className="text-sm text-gray-500">Primary to Secondary blend</p>
            </div>
            <div>
              <div 
                className="h-32 rounded-xl mb-4 shadow-lg"
                style={{ background: colors.gradients.electric }}
              ></div>
              <h3 className="font-semibold mb-1">Electric Gradient</h3>
              <p className="text-sm text-gray-500">High energy creative moments</p>
            </div>
            <div>
              <div 
                className="h-32 rounded-xl mb-4 shadow-lg"
                style={{ background: colors.gradients.ocean }}
              ></div>
              <h3 className="font-semibold mb-1">Ocean Gradient</h3>
              <p className="text-sm text-gray-500">Calm and professional</p>
            </div>
            <div>
              <div 
                className="h-32 rounded-xl mb-4 shadow-lg"
                style={{ background: colors.gradients.sunset }}
              ></div>
              <h3 className="font-semibold mb-1">Sunset Gradient</h3>
              <p className="text-sm text-gray-500">Warm and inviting</p>
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Functional Colors */}
      <Card className="mb-12">
        <CardHeader>
          <h2 className="text-2xl font-semibold">Functional Colors</h2>
        </CardHeader>
        <CardBody>
          <div className="grid grid-cols-4 gap-6">
            <div>
              <div className="h-24 rounded-xl bg-[#14B8A6] mb-4"></div>
              <h3 className="font-semibold mb-1">Success</h3>
              <code className="text-sm text-gray-600">#14B8A6</code>
            </div>
            <div>
              <div className="h-24 rounded-xl bg-[#F59E0B] mb-4"></div>
              <h3 className="font-semibold mb-1">Warning</h3>
              <code className="text-sm text-gray-600">#F59E0B</code>
            </div>
            <div>
              <div className="h-24 rounded-xl bg-[#EF4444] mb-4"></div>
              <h3 className="font-semibold mb-1">Danger</h3>
              <code className="text-sm text-gray-600">#EF4444</code>
            </div>
            <div>
              <div className="h-24 rounded-xl bg-[#3B82F6] mb-4"></div>
              <h3 className="font-semibold mb-1">Info</h3>
              <code className="text-sm text-gray-600">#3B82F6</code>
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Neutral Palette */}
      <Card className="mb-12">
        <CardHeader>
          <h2 className="text-2xl font-semibold">Neutral Palette</h2>
        </CardHeader>
        <CardBody>
          <div className="grid grid-cols-6 gap-4">
            {Object.entries(colors.neutral).map(([key, value]) => (
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

      {/* Effects Demo */}
      <Card className="mb-12">
        <CardHeader>
          <h2 className="text-2xl font-semibold">Special Effects</h2>
        </CardHeader>
        <CardBody className="space-y-6">
          <div>
            <h3 className="font-semibold mb-4">Glow Effects</h3>
            <div className="flex gap-4">
              <Button 
                color="primary" 
                className="shadow-lg"
                style={{ boxShadow: colors.effects.glow.primary }}
              >
                Primary Glow
              </Button>
              <Button 
                color="secondary" 
                className="shadow-lg"
                style={{ boxShadow: colors.effects.glow.secondary }}
              >
                Secondary Glow
              </Button>
              <Button 
                color="success" 
                className="shadow-lg"
                style={{ boxShadow: colors.effects.glow.success }}
              >
                Success Glow
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Neon Effects</h3>
            <div className="flex gap-4">
              <div 
                className="px-6 py-3 rounded-lg bg-gray-900 text-white font-semibold"
                style={{ boxShadow: colors.effects.neon.primary }}
              >
                Neon Primary
              </div>
              <div 
                className="px-6 py-3 rounded-lg bg-gray-900 text-white font-semibold"
                style={{ boxShadow: colors.effects.neon.secondary }}
              >
                Neon Secondary
              </div>
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Usage Guidelines */}
      <Card>
        <CardHeader>
          <h2 className="text-2xl font-semibold">Usage Guidelines</h2>
        </CardHeader>
        <CardBody className="prose max-w-none">
          <ul className="space-y-2">
            <li>
              <strong>Primary Blue:</strong> Use for primary CTAs, links, and key interactive elements
            </li>
            <li>
              <strong>Secondary Purple:</strong> Use for creative features, premium content, and accent elements
            </li>
            <li>
              <strong>Tertiary Teal:</strong> Use for success states, positive feedback, and confirmations
            </li>
            <li>
              <strong>Gradients:</strong> Use sparingly for hero sections, premium features, and special moments
            </li>
            <li>
              <strong>Neutrals:</strong> Use for text, backgrounds, and UI structure following contrast guidelines
            </li>
            <li>
              <strong>Effects:</strong> Reserve glow and neon effects for interactive states and special emphasis
            </li>
          </ul>
        </CardBody>
      </Card>
    </div>
  );
}