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
            DEFAULT: "#60A5FA",
            foreground: "#FFFFFF",
            50: "#1E293B",
            100: "#1E3A5F",
            200: "#1E4788",
            300: "#2563EB",
            400: "#3B82F6",
            500: "#60A5FA",
            600: "#93BBFD",
            700: "#BFDBFE",
            800: "#DBEAFE",
            900: "#EFF6FF",
          },
          secondary: {
            DEFAULT: "#C084FC",
            foreground: "#FFFFFF",
            50: "#3B1E4F",
            100: "#4C1D95",
            200: "#6B21A8",
            300: "#9333EA",
            400: "#A855F7",
            500: "#C084FC",
            600: "#D8B4FE",
            700: "#E9D5FF",
            800: "#F3E8FF",
            900: "#FAF5FF",
          },
          success: {
            DEFAULT: "#2DD4BF",
            foreground: "#FFFFFF",
            50: "#042F2E",
            100: "#064E3B",
            200: "#047857",
            300: "#059669",
            400: "#10B981",
            500: "#2DD4BF",
            600: "#5EEAD4",
            700: "#99F6E4",
            800: "#CCFBF1",
            900: "#F0FDFA",
          },
          background: {
            DEFAULT: "#0A0A0A",
            100: "#171717",
            200: "#262626",
            300: "#404040",
          },
          content1: "#171717",
          content2: "#262626",
          content3: "#404040",
          content4: "#525252",
        },
      },
    },
  })],
};

export default config;