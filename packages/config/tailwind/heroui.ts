import type { Config } from "tailwindcss";
import { heroui } from "@heroui/react";

const sharedConfig: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
    '../../node_modules/.pnpm/@heroui+theme@*/node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Neue Haas Grotesk Display', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'display': ['Neue Haas Grotesk Display', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'brand': ['ABC Diatype Compressed', 'system-ui', 'sans-serif'],
        'mono': ['SF Mono', 'Roboto Mono', 'Courier New', 'monospace'],
      },
    },
  },
  darkMode: "class",
  plugins: [heroui({
    themes: {
      light: {
        colors: {
          primary: {
            DEFAULT: "#FF5500",
            foreground: "#FFFFFF",
          },
          secondary: {
            DEFAULT: "#00D9B5",
            foreground: "#000000",
          },
          success: {
            DEFAULT: "#00D9B5",
            foreground: "#000000",
          },
          warning: {
            DEFAULT: "#FF5500",
            foreground: "#FFFFFF",
          },
          danger: {
            DEFAULT: "#FF3333",
            foreground: "#FFFFFF",
          },
        },
      },
      dark: {
        colors: {
          primary: {
            DEFAULT: "#FF5500",
            foreground: "#FFFFFF",
            50: "#4D1F00",
            100: "#803300",
            200: "#B33C00",
            300: "#CC4400",
            400: "#E64D00",
            500: "#FF5500",
            600: "#FF7F54",
            700: "#FFA380",
            800: "#FFC7AD",
            900: "#FFE5D9",
          },
          secondary: {
            DEFAULT: "#00D9B5",
            foreground: "#000000",
            50: "#004D40",
            100: "#00806B",
            200: "#009980",
            300: "#00AD91",
            400: "#00C3A3",
            500: "#00D9B5",
            600: "#4DFFDB",
            700: "#80FFE5",
            800: "#B3FFEF",
            900: "#D9FFF7",
          },
          success: {
            DEFAULT: "#00D9B5",
            foreground: "#000000",
          },
          warning: {
            DEFAULT: "#FF7F54",
            foreground: "#000000",
          },
          danger: {
            DEFAULT: "#FF6666",
            foreground: "#FFFFFF",
          },
          background: {
            DEFAULT: "#000000",
            100: "#0A0A0A",
            200: "#171717",
            300: "#262626",
          },
          content1: "#0A0A0A",
          content2: "#171717",
          content3: "#262626",
          content4: "#404040",
        },
      },
    },
  })],
};

export default sharedConfig;