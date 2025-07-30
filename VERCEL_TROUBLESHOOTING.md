# Vercel Deployment Troubleshooting

## Common Issues and Solutions

### 1. Build Fails with "Cannot find module" Errors

**Issue**: Vercel can't find the workspace packages (`@nh-ui/ui`, `@nh-ui/auth`, etc.)

**Solution**: Make sure in Vercel settings:
- Root Directory: `apps/showcase`
- Install Command: Leave blank (Vercel will auto-detect)
- Build Command: Leave blank (Vercel will auto-detect)

### 2. PNPM Not Found

**Issue**: Build fails with "pnpm: command not found"

**Solution**: 
- Vercel should auto-detect pnpm from the `packageManager` field in package.json
- If not, set Environment Variable: `ENABLE_EXPERIMENTAL_COREPACK=1`

### 3. Build Command Issues

**Issue**: Build fails with incorrect directory or command errors

**Solution**: In Vercel project settings:
- Go to Settings → General
- Under "Build & Development Settings":
  - Framework Preset: Next.js
  - Build Command: Override with `cd ../.. && pnpm turbo build --filter=showcase`
  - Output Directory: `.next`
  - Install Command: Override with `cd ../.. && pnpm install`

### 4. Monorepo Detection Issues

**Issue**: Vercel doesn't detect the monorepo structure

**Solution**: 
1. Make sure `turbo.json` is in the root
2. Ensure `pnpm-workspace.yaml` is in the root
3. The `apps/showcase/vercel.json` should handle the commands

### 5. Environment Variables Not Working

**Issue**: App can't connect to NH-ID or API

**Solution**: In Vercel project settings → Environment Variables:
```
NEXT_PUBLIC_API_URL=https://api.noiseheroes.com
NEXT_PUBLIC_AUTH_URL=https://id.noiseheroes.com
```

### 6. Custom Domain Issues

**Issue**: ui.noiseheroes.com not working

**Solution**:
1. In Vercel project settings → Domains
2. Add `ui.noiseheroes.com`
3. It should show "Valid Configuration" since you already set up the DNS

## Quick Fix Checklist

1. **In Vercel Dashboard**:
   - [ ] Root Directory set to `apps/showcase`
   - [ ] Framework Preset: Next.js
   - [ ] Environment variables added
   - [ ] Node.js version: 18.x or 20.x

2. **If still failing**:
   - [ ] Check build logs for specific error
   - [ ] Try building locally: `cd apps/showcase && pnpm build`
   - [ ] Ensure all dependencies are listed in package.json

## Manual Deployment Test

To test if the build works locally:

```bash
# From project root
pnpm install
pnpm build:showcase

# Or directly
cd apps/showcase
pnpm build
```

If it builds locally but not on Vercel, it's likely a configuration issue.