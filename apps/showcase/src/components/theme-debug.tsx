"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeDebug() {
  const { theme, setTheme, resolvedTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed bottom-20 right-2 p-4 bg-white dark:bg-black border rounded-lg text-xs">
      <p>Theme: {theme}</p>
      <p>Resolved: {resolvedTheme}</p>
      <p>System: {systemTheme}</p>
      <p>HTML class: {typeof document !== 'undefined' ? document.documentElement.className : 'SSR'}</p>
      <button 
        onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        className="mt-2 px-2 py-1 bg-primary text-white rounded"
      >
        Toggle
      </button>
    </div>
  );
}