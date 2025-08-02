# NH-UI - Noise Heroes UI Framework

A complete frontend scaffold for building Noise Heroes applications with built-in authentication, API integration, and a beautiful design system.

## Features

- 🎨 **Design System** - Complete Noise Heroes branded components
- 🔐 **Authentication** - Pre-integrated with NH-ID (id.noiseheroes.com)
- 🌐 **API Ready** - Configured for api.noiseheroes.com
- ⚡ **Fast Development** - Turborepo + Next.js + TypeScript
- 🎯 **Type Safe** - End-to-end TypeScript
- 📱 **Responsive** - Mobile-first design
- 🌙 **Dark Mode** - Built-in theme support
- ♿ **Accessible** - WCAG compliant components

## What's Inside?

This monorepo includes:

### Apps

- `docs` - Noise Heroes Human Interface Design Guidelines
- `template` - Starter template for new apps

### Packages

- `@nh-ui/ui` - Core UI components (based on shadcn/ui)
- `@nh-ui/auth` - NH-ID authentication integration
- `@nh-ui/api` - API Gateway client for api.noiseheroes.com
- `@nh-ui/config` - Shared configuration (ESLint, TypeScript, Tailwind)

## Quick Start

```bash
# Clone the repository
git clone https://github.com/noise-heroes/nh-ui.git
cd nh-ui

# Install dependencies
pnpm install

# Start development
pnpm dev

# Open the documentation
open http://localhost:3000
```

## Creating a New App

```bash
# Use the CLI (coming soon)
npx create-nh-app my-music-app

# Or copy the template
cp -r apps/template apps/my-music-app
```

## Technology Stack

- **Next.js 15** - React framework
- **Tailwind CSS v4.2** - Utility-first CSS
- **shadcn/ui** - Component foundation
- **TypeScript** - Type safety
- **Turborepo** - Monorepo management
- **pnpm** - Package management

## Design System

The NH-UI design system includes:

- **Colors**: Primary (NH Blue), Secondary (NH Purple), Accent (NH Teal)
- **Typography**: Inter for UI, custom display font
- **Components**: 40+ pre-built components
- **Patterns**: Common UI patterns for music/creative apps

## Authentication

All apps come with NH-ID authentication pre-configured:

```tsx
import { useAuth } from '@nh-ui/auth'

function MyApp() {
  const { user, login, logout } = useAuth()
  
  // User is automatically synced with NH-ID
}
```

## API Integration

Type-safe API client for api.noiseheroes.com:

```tsx
import { api } from '@nh-ui/api'

// Fully typed API calls
const projects = await api.projects.list()
const user = await api.auth.me()
```

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for development guidelines.

## License

MIT © Noise Heroes