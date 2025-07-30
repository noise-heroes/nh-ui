"use client";

import { Card, CardBody, CardHeader, Divider, Chip } from "@heroui/react";

export default function TypographyPage() {
  const fontWeights = [
    { name: "Thin", weight: 100, sample: "The quick brown fox jumps over the lazy dog" },
    { name: "Light", weight: 300, sample: "The quick brown fox jumps over the lazy dog" },
    { name: "Regular", weight: 400, sample: "The quick brown fox jumps over the lazy dog" },
    { name: "Medium", weight: 500, sample: "The quick brown fox jumps over the lazy dog" },
    { name: "Bold", weight: 700, sample: "The quick brown fox jumps over the lazy dog" },
    { name: "Black", weight: 900, sample: "The quick brown fox jumps over the lazy dog" },
  ];

  const typeSizes = [
    { name: "Display XL", class: "text-7xl", size: "72px", weight: 700 },
    { name: "Display", class: "text-6xl", size: "60px", weight: 700 },
    { name: "Heading 1", class: "text-5xl", size: "48px", weight: 700 },
    { name: "Heading 2", class: "text-4xl", size: "36px", weight: 600 },
    { name: "Heading 3", class: "text-3xl", size: "30px", weight: 600 },
    { name: "Heading 4", class: "text-2xl", size: "24px", weight: 600 },
    { name: "Heading 5", class: "text-xl", size: "20px", weight: 500 },
    { name: "Body Large", class: "text-lg", size: "18px", weight: 400 },
    { name: "Body", class: "text-base", size: "16px", weight: 400 },
    { name: "Body Small", class: "text-sm", size: "14px", weight: 400 },
    { name: "Caption", class: "text-xs", size: "12px", weight: 400 },
  ];

  return (
    <div className="min-h-screen p-8 max-w-7xl mx-auto">
      <div className="mb-12">
        <h1 className="text-5xl font-bold mb-4">Typography System</h1>
        <p className="text-xl text-gray-600">
          Noise Heroes uses Neue Haas Grotesk Display as the primary typeface for all UI elements
        </p>
      </div>

      {/* Font Weights */}
      <Card className="mb-12">
        <CardHeader>
          <h2 className="text-2xl font-semibold">Font Weights</h2>
        </CardHeader>
        <CardBody className="space-y-6">
          {fontWeights.map((weight) => (
            <div key={weight.weight} className="flex items-baseline gap-4">
              <Chip size="sm" variant="flat" className="min-w-[100px]">
                {weight.name} ({weight.weight})
              </Chip>
              <p className="text-2xl" style={{ fontWeight: weight.weight }}>
                {weight.sample}
              </p>
            </div>
          ))}
        </CardBody>
      </Card>

      {/* Type Scale */}
      <Card className="mb-12">
        <CardHeader>
          <h2 className="text-2xl font-semibold">Type Scale</h2>
        </CardHeader>
        <CardBody className="space-y-8">
          {typeSizes.map((type) => (
            <div key={type.name}>
              <div className="flex items-center gap-3 mb-2">
                <Chip size="sm" variant="flat">
                  {type.name}
                </Chip>
                <span className="text-sm text-gray-500">
                  {type.size} / {type.weight}
                </span>
              </div>
              <p 
                className={type.class} 
                style={{ fontWeight: type.weight }}
              >
                Noise Heroes Design System
              </p>
              <Divider className="mt-4" />
            </div>
          ))}
        </CardBody>
      </Card>

      {/* Special Cases */}
      <Card className="mb-12">
        <CardHeader>
          <h2 className="text-2xl font-semibold">Special Typography</h2>
        </CardHeader>
        <CardBody className="space-y-8">
          <div>
            <Chip size="sm" variant="flat" className="mb-2">
              Brand Typography (ABC Diatype)
            </Chip>
            <h3 className="text-5xl font-brand font-bold">
              NOISE HEROES
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              ABC Diatype Compressed - Used sparingly for special branding moments only
            </p>
          </div>
          <Divider />
          <div>
            <Chip size="sm" variant="flat" className="mb-2">
              Monospace (Code)
            </Chip>
            <code className="block bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              const noiseHeroes = "Building the future of music";
            </code>
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
              <strong>Primary Font:</strong> Neue Haas Grotesk Display for all UI elements, headings, and body text
            </li>
            <li>
              <strong>Font Weights:</strong> Use 400 for body text, 500-600 for emphasis, 700 for headings
            </li>
            <li>
              <strong>Line Height:</strong> 1.5 for body text, 1.2 for headings
            </li>
            <li>
              <strong>Letter Spacing:</strong> -0.015em for headings, normal for body text
            </li>
            <li>
              <strong>ABC Diatype Compressed:</strong> Reserved for special branding moments only (logo lockups, hero headlines)
            </li>
          </ul>
        </CardBody>
      </Card>
    </div>
  );
}