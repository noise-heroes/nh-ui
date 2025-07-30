#!/bin/bash

echo "🐙 NH-UI GitHub Setup"
echo "===================="
echo ""

# Create GitHub repository
echo "Creating GitHub repository..."
gh repo create noise-heroes/nh-ui --public --description "Noise Heroes UI Framework - Complete frontend scaffold with design system" --homepage "https://nh-ui.vercel.app"

# Add remote
git remote add origin https://github.com/noise-heroes/nh-ui.git

# Push to GitHub
echo "Pushing to GitHub..."
git push -u origin main

echo ""
echo "✅ GitHub repository created and pushed!"
echo ""
echo "Repository: https://github.com/noise-heroes/nh-ui"