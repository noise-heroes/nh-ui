#!/bin/bash

echo "🚀 NH-UI Vercel Deployment"
echo "========================="
echo ""
echo "This script will deploy NH-UI to Vercel with custom domain ui.noiseheroes.com"
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if logged in to Vercel
if ! vercel whoami &> /dev/null; then
    echo -e "${RED}❌ You are not logged in to Vercel${NC}"
    echo "Please run: vercel login"
    echo ""
    echo "Choose 'Continue with GitHub' and use the Noise Heroes account"
    exit 1
fi

echo -e "${GREEN}✅ Logged in to Vercel${NC}"
echo ""

# Change to showcase directory
cd apps/showcase

echo "📦 Deploying NH-UI Showcase..."
echo ""
echo -e "${YELLOW}IMPORTANT: When prompted:${NC}"
echo "1. Set up and deploy: Y"
echo "2. Which scope: Choose 'noise-heroes' (NOT personal account)"
echo "3. Link to existing project: N (create new)"
echo "4. Project name: nh-ui-showcase"
echo "5. Directory: ./ (current directory)"
echo "6. Override settings: N"
echo ""

# Deploy to production with custom domain
vercel --prod \
  --name="nh-ui-showcase" \
  --build-env NEXT_PUBLIC_API_URL="https://api.noiseheroes.com" \
  --build-env NEXT_PUBLIC_AUTH_URL="https://id.noiseheroes.com" \
  --yes

echo ""
echo -e "${GREEN}✅ Deployment complete!${NC}"
echo ""

# Add custom domain
echo "🌐 Adding custom domain ui.noiseheroes.com..."
vercel domains add ui.noiseheroes.com --yes

echo ""
echo -e "${GREEN}✅ Custom domain added!${NC}"
echo ""
echo "Next steps:"
echo "1. The deployment should be live at ui.noiseheroes.com"
echo "2. DNS is already configured since you created the subdomain"
echo "3. Visit https://ui.noiseheroes.com to see your showcase!"
echo ""
echo -e "${YELLOW}Note: DNS propagation may take a few minutes${NC}"