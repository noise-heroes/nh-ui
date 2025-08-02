"use client";

import { NHCard, NHCardBody, NHCardHeader, NHChip, NHButton } from "@nh-ui/ui";

export default function ColorsPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">Noise Heroes Colors</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        <NHCard>
          <NHCardHeader>
            <h2 className="text-2xl font-semibold">Primary - Orange</h2>
          </NHCardHeader>
          <NHCardBody>
            <div className="h-32 bg-primary rounded-lg mb-4"></div>
            <p className="text-lg font-mono">#FF5500</p>
            <div className="mt-4 space-y-2">
              <NHButton color="primary">Primary Button</NHButton>
              <NHChip color="primary">Primary Chip</NHChip>
            </div>
          </NHCardBody>
        </NHCard>

        <NHCard>
          <NHCardHeader>
            <h2 className="text-2xl font-semibold">Secondary - Teal</h2>
          </NHCardHeader>
          <NHCardBody>
            <div className="h-32 bg-secondary rounded-lg mb-4"></div>
            <p className="text-lg font-mono">#00D9B5</p>
            <div className="mt-4 space-y-2">
              <NHButton color="secondary">Secondary Button</NHButton>
              <NHChip color="secondary">Secondary Chip</NHChip>
            </div>
          </NHCardBody>
        </NHCard>
      </div>
    </div>
  );
}