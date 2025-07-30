# Adding Custom Domain ui.noiseheroes.com to Vercel

Since the deployment is working but not on the custom domain, follow these steps:

## In Vercel Dashboard:

1. **Go to your project**: 
   - Navigate to: https://vercel.com/noise-heroes/nh-ui-showcase (or whatever your project is named)

2. **Go to Settings → Domains**

3. **Add Domain**:
   - Enter: `ui.noiseheroes.com`
   - Click "Add"

4. **Domain Configuration**:
   Since you mentioned you already created ui.noiseheroes.com, Vercel should either:
   
   **Option A: Auto-verify** (if DNS is already pointing to Vercel)
   - It will show "Valid Configuration" ✓
   
   **Option B: Need DNS setup**
   - It will show required DNS records
   - You'll need to add a CNAME record:
     ```
     Type: CNAME
     Name: ui
     Value: cname.vercel-dns.com
     ```

## Check DNS Status:

To verify DNS is properly configured:

```bash
# Check current DNS
dig ui.noiseheroes.com

# Or use nslookup
nslookup ui.noiseheroes.com
```

## If DNS is Already Set Up:

If you already configured DNS for ui.noiseheroes.com:

1. In Vercel, it should show "Valid Configuration"
2. The site should be accessible at https://ui.noiseheroes.com within a few minutes
3. Vercel automatically provisions SSL certificates

## Troubleshooting:

### Domain not working after adding:
1. **Check DNS propagation**: Can take up to 48 hours (usually much faster)
2. **Clear browser cache**: Try incognito/private browsing
3. **Check with**: https://dnschecker.org/#CNAME/ui.noiseheroes.com

### "Invalid Configuration" in Vercel:
1. Verify DNS records match exactly what Vercel shows
2. Remove any conflicting A or AAAA records
3. Make sure there's only one CNAME record for the subdomain

### SSL Certificate Issues:
- Vercel automatically provisions Let's Encrypt certificates
- This can take 10-15 minutes after domain verification
- Check: https://ui.noiseheroes.com (note HTTPS)

## Alternative: Using Vercel CLI

If you prefer CLI:

```bash
# From the project directory
cd apps/showcase

# Add domain
vercel domains add ui.noiseheroes.com

# List domains
vercel domains ls

# Check domain status
vercel domains inspect ui.noiseheroes.com
```

## Expected Result:

Once properly configured:
- https://ui.noiseheroes.com → Your NH-UI Showcase
- Automatic SSL/HTTPS
- Automatic deployments on git push