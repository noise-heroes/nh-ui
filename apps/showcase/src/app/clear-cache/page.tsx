"use client";

import { useEffect, useState } from "react";
import { Button, Card, CardBody, Progress } from "@heroui/react";
import { TrashIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

export default function ClearCachePage() {
  const [clearing, setClearing] = useState(false);
  const [cleared, setCleared] = useState(false);
  const [progress, setProgress] = useState(0);

  const clearAllCaches = async () => {
    setClearing(true);
    setProgress(10);

    try {
      // Register service worker to clear caches
      if ('serviceWorker' in navigator) {
        const reg = await navigator.serviceWorker.register('/sw.js');
        await reg.update();
        setProgress(30);
      }

      // Clear all caches
      if ('caches' in window) {
        const cacheNames = await caches.keys();
        await Promise.all(
          cacheNames.map(cacheName => caches.delete(cacheName))
        );
        setProgress(50);
      }

      // Clear localStorage
      localStorage.clear();
      setProgress(70);

      // Clear sessionStorage
      sessionStorage.clear();
      setProgress(90);

      // Force reload without cache
      setTimeout(() => {
        setProgress(100);
        setCleared(true);
        setTimeout(() => {
          window.location.href = '/?cache-bust=' + Date.now();
        }, 1000);
      }, 500);
    } catch (error) {
      console.error('Error clearing cache:', error);
      setClearing(false);
    }
  };

  useEffect(() => {
    // Unregister service worker when leaving the page
    return () => {
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistrations().then(registrations => {
          registrations.forEach(registration => registration.unregister());
        });
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <Card className="max-w-md w-full">
        <CardBody className="p-8 text-center">
          <div className="mb-6">
            {cleared ? (
              <CheckCircleIcon className="h-16 w-16 text-success mx-auto" />
            ) : (
              <TrashIcon className="h-16 w-16 text-primary mx-auto" />
            )}
          </div>

          <h1 className="text-2xl font-bold mb-4">Clear Safari Cache</h1>
          
          {!clearing && !cleared && (
            <>
              <p className="text-default-600 mb-6">
                This will clear all caches, storage, and force a fresh reload of the NH-UI showcase.
              </p>
              <Button 
                color="primary" 
                size="lg" 
                onPress={clearAllCaches}
                startContent={<TrashIcon className="h-5 w-5" />}
              >
                Clear Cache & Reload
              </Button>
            </>
          )}

          {clearing && !cleared && (
            <>
              <p className="text-default-600 mb-4">
                Clearing cache and preparing fresh reload...
              </p>
              <Progress 
                value={progress} 
                color="primary" 
                className="mb-4"
                showValueLabel={true}
              />
            </>
          )}

          {cleared && (
            <>
              <p className="text-success font-semibold mb-4">
                Cache cleared successfully!
              </p>
              <p className="text-default-600">
                Redirecting to fresh page...
              </p>
            </>
          )}

          <div className="mt-8 text-sm text-default-500">
            <p>If the issue persists, try:</p>
            <ul className="mt-2 text-left list-disc list-inside">
              <li>Safari → Develop → Empty Caches</li>
              <li>Safari → Preferences → Privacy → Manage Website Data → Remove All</li>
              <li>Restart Safari</li>
            </ul>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}