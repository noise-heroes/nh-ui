"use client";

import { Card, CardBody, CardHeader, Chip, Button } from "@heroui/react";

export default function ColorsPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">Noise Heroes Colors</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold">Primary - Orange</h2>
          </CardHeader>
          <CardBody>
            <div className="h-32 bg-primary rounded-lg mb-4"></div>
            <p className="text-lg font-mono">#FF5500</p>
            <div className="mt-4 space-y-2">
              <Button color="primary">Primary Button</Button>
              <Chip color="primary">Primary Chip</Chip>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold">Secondary - Teal</h2>
          </CardHeader>
          <CardBody>
            <div className="h-32 bg-secondary rounded-lg mb-4"></div>
            <p className="text-lg font-mono">#00D9B5</p>
            <div className="mt-4 space-y-2">
              <Button color="secondary">Secondary Button</Button>
              <Chip color="secondary">Secondary Chip</Chip>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}