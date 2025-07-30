# Vercel Setup Guide for NH-UI

## Important: Avoiding Conflicts with nh-website-next

Since you already have nh-website-next hosted on Vercel, we need to be careful to create NH-UI as a separate project.

## Step 1: Login to Vercel

```bash
vercel login
```

Choose "Continue with GitHub" and use the Noise Heroes account.

## Step 2: Deploy NH-UI

Run the deployment script:

```bash
./deploy-to-vercel.sh
```

### When prompted by Vercel CLI:

1. **Set up and deploy?** → `Y`
2. **Which scope?** → Select `noise-heroes` (NOT your personal account)
3. **Link to existing project?** → `N` (We want a NEW project, not link to nh-website-next)
4. **What's your project's name?** → `nh-ui-showcase`
5. **In which directory is your code located?** → `./` (just press Enter)
6. **Want to override the settings?** → `N`

## Step 3: Verify Deployment

After deployment:

1. Check that a NEW project was created at https://vercel.com/noise-heroes/nh-ui-showcase
2. Verify it's NOT linked to nh-website-next
3. The custom domain ui.noiseheroes.com should be automatically added

## Step 4: Clean Up

After successful deployment, run:

```bash
./cleanup.sh
```

## Troubleshooting

### If you accidentally link to nh-website-next:

1. Delete the `.vercel` folder: `rm -rf apps/showcase/.vercel`
2. Go to Vercel dashboard and unlink the repository from nh-website-next
3. Run the deployment script again

### If custom domain doesn't work:

1. Go to https://vercel.com/noise-heroes/nh-ui-showcase/settings/domains
2. Add `ui.noiseheroes.com` manually
3. Verify DNS settings (should already be configured since you set it up)

## Project Structure on Vercel

You should have:
- `nh-website-next` → Your main website
- `nh-ui-showcase` → The UI framework showcase (NEW)

Both are separate projects under the noise-heroes organization.