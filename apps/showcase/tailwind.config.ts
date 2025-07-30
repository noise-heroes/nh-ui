import type { Config } from "tailwindcss";
import {heroui} from "@heroui/react";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    "../../node_modules/.pnpm/@heroui+theme@*/node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['ABC Diatype Compressed', 'system-ui', 'sans-serif'],
        'body': ['Neue Haas Grotesk Display', 'system-ui', 'sans-serif'],
        'mono': ['SF Mono', 'Roboto Mono', 'monospace'],
      },
    },
  },
  darkMode: "class",
  plugins: [heroui({
    themes: {
      light: {
        colors: {
          primary: {
            DEFAULT: "#3B82F6",
            foreground: "#FFFFFF",
          },
          secondary: {
            DEFAULT: "#A855F7",
            foreground: "#FFFFFF",
          },
          success: {
            DEFAULT: "#14B8A6",
            foreground: "#FFFFFF",
          },
        },
      },
      dark: {
        colors: {
          primary: {
            DEFAULT: "#3B82F6",
            foreground: "#FFFFFF",
          },
          secondary: {
            DEFAULT: "#A855F7",
            foreground: "#FFFFFF",
          },
          success: {
            DEFAULT: "#14B8A6",
            foreground: "#FFFFFF",
          },
        },
      },
    },
  })],
};

export default config;