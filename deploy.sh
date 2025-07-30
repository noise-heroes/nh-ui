#!/bin/bash

echo "🚀 NH-UI Deployment Script"
echo "========================="
echo ""
echo "This script will deploy the NH-UI showcase to Vercel."
echo ""
echo "Prerequisites:"
echo "1. You need to be logged in to Vercel CLI"
echo "   Run: vercel login"
echo ""
echo "2. Create a GitHub repository for nh-ui"
echo "   Run: gh repo create noise-heroes/nh-ui --public"
echo ""

# Check if logged in to Vercel
if ! vercel whoami &> /dev/null; then
    echo "❌ You are not logged in to Vercel"
    echo "Please run: vercel login"
    exit 1
fi

echo "✅ Logged in to Vercel"
echo ""

# Deploy the showcase app
echo "📦 Deploying showcase app..."
cd apps/showcase

# Deploy with production flag
vercel --prod --yes \
  --name="nh-ui-showcase" \
  --build-env NEXT_PUBLIC_API_URL="https://api.noiseheroes.com" \
  --build-env NEXT_PUBLIC_AUTH_URL="https://id.noiseheroes.com"

echo ""
echo "✅ Deployment complete!"
echo ""
echo "Next steps:"
echo "1. Visit your deployment URL"
echo "2. Set up a custom domain if desired"
echo "3. Configure automatic deployments from GitHub"