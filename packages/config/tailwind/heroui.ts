import type { Config } from "tailwindcss";
const { heroui } = require("@heroui/theme");

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
      backdropBlur: {
        xs: '4px',
      },
      backgroundColor: {
        'glass-light': 'rgba(255, 255, 255, 0.7)',
        'glass-light-hover': 'rgba(255, 255, 255, 0.8)',
        'glass-dark': 'rgba(10, 10, 10, 0.7)',
        'glass-dark-hover': 'rgba(10, 10, 10, 0.8)',
        'glass-primary': 'rgba(255, 85, 0, 0.1)',
        'glass-secondary': 'rgba(0, 217, 181, 0.1)',
      },
      borderColor: {
        'glass-light': 'rgba(255, 255, 255, 0.2)',
        'glass-dark': 'rgba(255, 255, 255, 0.1)',
      },
      boxShadow: {
        'glass-sm': '0 2px 8px rgba(0, 0, 0, 0.04)',
        'glass-md': '0 4px 16px rgba(0, 0, 0, 0.08)',
        'glass-lg': '0 8px 32px rgba(0, 0, 0, 0.12)',
        'glass-xl': '0 16px 48px rgba(0, 0, 0, 0.16)',
        'glass-primary': '0 4px 16px rgba(255, 85, 0, 0.2)',
        'glass-secondary': '0 4px 16px rgba(0, 217, 181, 0.2)',
      },
    },
  },
  darkMode: "class",
  plugins: [heroui({
    themes: {
      light: {
        extend: "light",
        colors: {
          primary: {
            50: "#FFF5F0",
            100: "#FFE5D9",
            200: "#FFC7AD",
            300: "#FFA380",
            400: "#FF7F54",
            500: "#FF5500",
            600: "#E64D00",
            700: "#CC4400",
            800: "#B33C00",
            900: "#803300",
            DEFAULT: "#FF5500",
            foreground: "#FFFFFF",
          },
          secondary: {
            50: "#F0FFFC",
            100: "#D9FFF7",
            200: "#B3FFEF",
            300: "#80FFE5",
            400: "#4DFFDB",
            500: "#00D9B5",
            600: "#00C3A3",
            700: "#00AD91",
            800: "#009980",
            900: "#00806B",
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
        extend: "dark",
        colors: {
          primary: {
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
            DEFAULT: "#FF5500",
            foreground: "#FFFFFF",
          },
          secondary: {
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
            DEFAULT: "#00D9B5",
            foreground: "#000000",
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