# Import NH-UI to Vercel via Dashboard

Since the repository isn't showing in your Connected Git Repository list, follow these steps:

## Step 1: Import New Project

1. Go to: https://vercel.com/new/noise-heroes
2. You should see "Import Git Repository"

## Step 2: Connect GitHub Repository

Since `nh-ui` isn't showing up, you may need to:

1. Click on "Add GitHub Account" or "Configure GitHub App"
2. In the GitHub permissions page:
   - Find "Repository access"
   - Either select "All repositories" OR
   - Select "Only select repositories" and add `noise-heroes/nh-ui`
3. Click "Save"

## Step 3: Import nh-ui

1. Back in Vercel, you should now see `noise-heroes/nh-ui` in the list
2. Click "Import" next to it

## Step 4: Configure Import

**IMPORTANT Configuration:**

- **Project Name**: `nh-ui-showcase`
- **Framework Preset**: Next.js (should auto-detect)
- **Root Directory**: Click "Edit" and change to `apps/showcase`
- **Build and Output Settings**:
  - Build Command: `pnpm build` (or leave as auto-detected)
  - Output Directory: `.next` (or leave as auto-detected)
  - Install Command: `pnpm install --frozen-lockfile`

## Step 5: Environment Variables

Add these environment variables:

```
NEXT_PUBLIC_API_URL = https://api.noiseheroes.com
NEXT_PUBLIC_AUTH_URL = https://id.noiseheroes.com
```

## Step 6: Deploy

Click "Deploy" and wait for the build to complete.

## Step 7: Add Custom Domain

After deployment:
1. Go to Settings → Domains
2. Add `ui.noiseheroes.com`
3. It should automatically verify since you've already set it up

## Alternative: If Repository Still Doesn't Show

If the repository still doesn't appear after configuring GitHub permissions:

1. Go to: https://github.com/apps/vercel/installations/
2. Find your Noise Heroes installation
3. Click "Configure"
4. Add `nh-ui` to the repository access list
5. Return to Vercel and refresh