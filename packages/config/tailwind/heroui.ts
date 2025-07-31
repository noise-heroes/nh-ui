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
        },
      },
      dark: {
        colors: {
          primary: {
            DEFAULT: "#FF5500",
            foreground: "#FFFFFF",
          },
          secondary: {
            DEFAULT: "#00D9B5",
            foreground: "#000000",
          },
        },
      },
    },
  })],
};

export default sharedConfig;