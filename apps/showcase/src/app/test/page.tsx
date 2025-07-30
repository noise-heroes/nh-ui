"use client";

import { Button, Card, CardBody } from "@heroui/react";

export default function TestPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">HeroUI Test Page</h1>
      <Card>
        <CardBody>
          <p>If you can see this styled card, HeroUI is working!</p>
          <Button color="primary" className="mt-4">
            Test Button
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}