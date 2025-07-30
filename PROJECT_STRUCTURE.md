# NH-UI Project Structure

## Overview
NH-UI is a monorepo containing the Noise Heroes UI framework and showcase application.

## Directory Structure

```
nh-ui/
├── apps/
│   └── showcase/          # Main showcase application
│       ├── src/
│       │   ├── app/      # Next.js app directory
│       │   ├── components/ # Showcase-specific components
│       │   └── lib/      # Utilities
│       └── public/       # Static assets
│
├── packages/
│   ├── ui/               # Core UI components library
│   │   └── src/         # shadcn/ui based components
│   │
│   ├── auth/            # NH-ID authentication integration
│   │   └── src/         # Auth context and hooks
│   │
│   ├── api/             # API client for api.noiseheroes.com
│   │   └── src/         # Type-safe API client
│   │
│   └── config/          # Shared configuration
│       ├── eslint/      # ESLint configs
│       ├── tailwind/    # Tailwind config
│       └── tsconfig/    # TypeScript configs
│
├── turbo.json           # Turborepo configuration
├── pnpm-workspace.yaml  # PNPM workspace config
└── package.json         # Root package.json
```

## Key Features

- **Monorepo**: Managed with Turborepo and PNPM
- **Design System**: Based on shadcn/ui with Noise Heroes branding
- **Authentication**: Pre-integrated with NH-ID
- **API Client**: Type-safe client for api.noiseheroes.com
- **Dark Mode**: Built-in theme support
- **TypeScript**: Full type safety across packages

## Development

```bash
# Install dependencies
pnpm install

# Start development
pnpm dev

# Build all packages
pnpm build

# Run linting
pnpm lint
```

## Deployment

The showcase app is deployed to Vercel at https://ui.noiseheroes.com

To redeploy:
```bash
./deploy-to-vercel.sh
```
