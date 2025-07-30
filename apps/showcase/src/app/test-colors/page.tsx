"use client";

import { Button } from "@heroui/react";

export default function TestColorsPage() {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-2xl font-bold">Color Test Page</h1>
      
      <div className="space-y-4">
        <h2 className="text-xl">Direct Color Classes</h2>
        <div className="flex gap-4">
          <div className="w-32 h-32 bg-[#FF5500] rounded-lg flex items-center justify-center text-white">
            <span>Orange<br/>#FF5500</span>
          </div>
          <div className="w-32 h-32 bg-[#00D9B5] rounded-lg flex items-center justify-center text-black">
            <span>Teal<br/>#00D9B5</span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl">HeroUI Buttons</h2>
        <div className="flex gap-4">
          <Button color="primary">Primary</Button>
          <Button color="secondary">Secondary</Button>
          <Button color="success">Success</Button>
          <Button color="warning">Warning</Button>
          <Button color="danger">Danger</Button>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl">Tailwind Classes</h2>
        <div className="flex gap-4">
          <div className="w-32 h-32 bg-primary rounded-lg"></div>
          <div className="w-32 h-32 bg-secondary rounded-lg"></div>
          <div className="w-32 h-32 bg-success rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}