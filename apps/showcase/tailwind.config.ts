import type { Config } from "tailwindcss";
import sharedConfig from "@nh-ui/config/tailwind/heroui";

const config: Config = {
  ...sharedConfig,
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ...(sharedConfig.content as string[]),
  ],
};

export default config;