# NH-UI Deployment Guide

This guide will walk you through deploying NH-UI to Vercel and setting up automatic deployments.

## Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **GitHub Account**: For automatic deployments

## Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push to GitHub**:
   ```bash
   ./setup-github.sh
   ```
   This creates a GitHub repository at `https://github.com/noise-heroes/nh-ui`

2. **Import to Vercel**:
   - Go to [vercel.com/new](https://vercel.com/new)
   - Click "Import Git Repository"
   - Select `noise-heroes/nh-ui`
   - Configure the project:
     - **Framework Preset**: Next.js
     - **Root Directory**: `apps/showcase`
     - **Build Command**: Leave default (auto-detected)
     - **Output Directory**: Leave default
     - **Install Command**: `pnpm install --frozen-lockfile`

3. **Environment Variables**:
   Add these in the Vercel dashboard:
   ```
   NEXT_PUBLIC_API_URL=https://api.noiseheroes.com
   NEXT_PUBLIC_AUTH_URL=https://id.noiseheroes.com
   ```

4. **Deploy**: Click "Deploy" and wait for the build to complete

## Option 2: Deploy via CLI

1. **Login to Vercel**:
   ```bash
   vercel login
   ```

2. **Deploy**:
   ```bash
   ./deploy.sh
   ```

## Custom Domain Setup

To use a custom domain like `ui.noiseheroes.com`:

1. In Vercel Dashboard, go to your project settings
2. Navigate to "Domains"
3. Add `ui.noiseheroes.com`
4. Add the provided DNS records to your domain provider

## Automatic Deployments

Once connected to GitHub, Vercel will automatically deploy:
- **Production**: Every push to `main` branch
- **Preview**: Every pull request

## Local Development

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build for production
pnpm build
```

## Project Structure

```
nh-ui/
├── apps/
│   └── showcase/          # Main showcase app (deploys to Vercel)
├── packages/
│   ├── ui/               # Core UI components
│   ├── auth/             # NH-ID authentication integration
│   ├── api/              # API client for api.noiseheroes.com
│   └── config/           # Shared configuration
└── deploy.sh             # Deployment script
```

## Troubleshooting

### Build Fails
- Ensure all dependencies are installed: `pnpm install`
- Check build locally: `pnpm build`
- Verify Node.js version: Should be 18+

### Environment Variables Not Working
- Ensure they start with `NEXT_PUBLIC_` for client-side access
- Redeploy after adding environment variables

### Custom Domain Issues
- Verify DNS propagation (can take up to 48 hours)
- Check domain ownership verification in Vercel

## Support

For issues or questions:
- GitHub Issues: https://github.com/noise-heroes/nh-ui/issues
- Vercel Docs: https://vercel.com/docs