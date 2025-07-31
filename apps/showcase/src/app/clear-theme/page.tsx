"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card, CardBody, CardHeader, Button } from "@heroui/react";

export default function ClearThemePage() {
  const router = useRouter();

  useEffect(() => {
    // Clear all possible theme storage
    localStorage.removeItem("nh-ui-theme");
    localStorage.removeItem("theme");
    
    // Clear any next-themes storage
    const keys = Object.keys(localStorage);
    keys.forEach(key => {
      if (key.includes("theme")) {
        localStorage.removeItem(key);
      }
    });
    
    // Force reload after clearing
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  }, []);

  return (
    <div className="container mx-auto px-6 py-12">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <h1 className="text-2xl font-bold">Clearing Theme Cache...</h1>
        </CardHeader>
        <CardBody>
          <p className="mb-4">Resetting theme settings and clearing cache...</p>
          <p className="text-sm text-default-500">You will be redirected to the home page.</p>
        </CardBody>
      </Card>
    </div>
  );
}