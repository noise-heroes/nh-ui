#!/bin/bash

echo "🧹 NH-UI Cleanup Script"
echo "======================"
echo ""

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo "This script will clean up and organize the NH-UI project"
echo ""

# 1. Remove deployment scripts after successful deployment
echo "1. Cleaning up deployment scripts..."
if [ -f "deploy.sh" ]; then
    rm deploy.sh
    echo "   - Removed deploy.sh"
fi

if [ -f "setup-github.sh" ]; then
    rm setup-github.sh
    echo "   - Removed setup-github.sh"
fi

# Keep deploy-to-vercel.sh for future use
echo "   - Keeping deploy-to-vercel.sh for future deployments"

# 2. Clean node_modules and reinstall
echo ""
echo "2. Cleaning node_modules..."
rm -rf node_modules
rm -rf apps/*/node_modules
rm -rf packages/*/node_modules
echo "   - Removed all node_modules"

# 3. Clean build artifacts
echo ""
echo "3. Cleaning build artifacts..."
rm -rf apps/showcase/.next
rm -rf apps/showcase/out
rm -rf .turbo
echo "   - Removed build artifacts"

# 4. Update .gitignore
echo ""
echo "4. Ensuring .gitignore is complete..."
cat >> .gitignore << 'EOL'

# Deployment
.env.local
.env.production

# Logs
logs
*.log

# OS
.DS_Store
Thumbs.db

# Editor
.vscode/
.idea/
*.swp
*.swo
EOL
echo "   - Updated .gitignore"

# 5. Create project structure documentation
echo ""
echo "5. Creating project documentation..."
cat > PROJECT_STRUCTURE.md << 'EOL'
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
EOL
echo "   - Created PROJECT_STRUCTURE.md"

# 6. Reinstall dependencies
echo ""
echo "6. Reinstalling dependencies..."
pnpm install --frozen-lockfile

# 7. Git operations
echo ""
echo "7. Committing cleanup changes..."
git add -A
git commit -m "Project cleanup and organization

- Remove temporary deployment scripts
- Update .gitignore
- Add project structure documentation
- Clean build artifacts"

git push

echo ""
echo -e "${GREEN}✅ Cleanup complete!${NC}"
echo ""
echo "Summary:"
echo "- Removed temporary files"
echo "- Cleaned build artifacts"
echo "- Updated documentation"
echo "- Reinstalled dependencies"
echo "- Pushed changes to GitHub"
echo ""
echo -e "${YELLOW}Ready for deployment! Run ./deploy-to-vercel.sh when ready.${NC}"