# Noise Heroes Authentication Workflow Troubleshooting

## Current Status (as of 2025-07-30)

### Service Health
- ✅ NH-ID is running at https://id.noiseheroes.com
- ✅ API Gateway is running at https://api.noiseheroes.com
- ❌ API Gateway cannot connect to NH-ID (500 Internal Server Error)

### Issues Identified

1. **API Gateway → NH-ID Connection**
   - API Gateway returns 500 error when trying to proxy auth requests
   - This suggests the NH_ID_URL environment variable is either:
     - Not set
     - Set to wrong URL
     - Network connectivity issue between services

2. **CORS Configuration**
   - CORS headers are present but may not include https://ui.noiseheroes.com as allowed origin
   - Getting 400 Bad Request on preflight OPTIONS request

### Required Environment Variables

#### For API Gateway (nh-api-gateway on Render):
```bash
NH_ID_URL=https://id.noiseheroes.com
CORS_ORIGINS=https://ui.noiseheroes.com,https://noiseheroes.com,http://localhost:3000
```

#### For NH-ID (nh-id on Render):
```bash
DATABASE_URL=postgresql://postgres:doscot-sesQa9-fitked@db.qnsyndoisxujehbpzsja.supabase.co:5432/postgres
SECRET_KEY=[your-secret-key]
ENVIRONMENT=production
```

### How to Fix

1. **In Render Dashboard for nh-api-gateway:**
   - Go to Environment tab
   - Add/Update NH_ID_URL = https://id.noiseheroes.com
   - Add/Update CORS_ORIGINS = https://ui.noiseheroes.com,https://noiseheroes.com,http://localhost:3000
   - Save and redeploy

2. **In Render Dashboard for nh-id:**
   - Verify DATABASE_URL is using the Direct Connection from Supabase
   - Make sure it's the full URL with password included
   - Save and redeploy if changed

3. **Test the Connection:**
   - Visit https://ui.noiseheroes.com/test-auth
   - All tests should pass once environment variables are correct

### Quick Test Commands

```bash
# Test NH-ID directly
curl https://id.noiseheroes.com/health

# Test API Gateway
curl https://api.noiseheroes.com/health

# Test registration through API Gateway (without CORS)
curl -X POST https://api.noiseheroes.com/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "testuser123",
    "email": "test123@example.com",
    "password": "Test123!@#",
    "full_name": "Test User"
  }'
```

### Architecture Reminder
```
UI (Vercel) → API Gateway (Render) → NH-ID (Render) → Supabase DB
```

The API Gateway acts as a proxy, forwarding /auth/* requests to NH-ID.