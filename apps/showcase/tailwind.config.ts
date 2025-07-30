import type { Config } from "tailwindcss";
import {heroui} from "@heroui/react";
import { colors } from "./src/styles/colors";

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
        'sans': ['Neue Haas Grotesk Display', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'display': ['Neue Haas Grotesk Display', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'], // Same as sans
        'brand': ['ABC Diatype Compressed', 'system-ui', 'sans-serif'], // Only for special branding moments
        'mono': ['SF Mono', 'Roboto Mono', 'Courier New', 'monospace'],
      },
      colors: {
        ...colors.neutral,
      },
      backgroundImage: {
        ...colors.gradients,
      },
      boxShadow: {
        ...colors.shadows,
        ...colors.effects.glow,
        ...colors.effects.neon,
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