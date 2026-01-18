# CI/CD Setup Guide

This guide covers setting up automated deployments with GitHub Actions and Vercel.

---

## Overview

| Workflow | Trigger | Purpose |
|----------|---------|---------|
| `ci.yml` | Push to main/develop, PRs | Lint, test, build validation |
| `deploy.yml` | Push to main | Auto-deploy to Vercel production |

---

## Step 1: Get Vercel Credentials

### 1.1 Get Vercel Token
1. Go to [Vercel Account Settings → Tokens](https://vercel.com/account/tokens)
2. Click **"Create"**
3. Name: `github-actions`
4. Scope: Full Account
5. Copy the token (you won't see it again!)

### 1.2 Get Vercel Project & Org IDs
Run this in your project folder:

```bash
cd /Users/tseekeaw/Personal/Pak-khay
npx vercel link
```

This creates `.vercel/project.json` with:
```json
{
  "orgId": "your-org-id",
  "projectId": "your-project-id"
}
```

Copy both IDs.

---

## Step 2: Add GitHub Secrets

Go to your GitHub repo → **Settings** → **Secrets and variables** → **Actions**

Add these **Repository Secrets**:

| Secret Name | Value |
|-------------|-------|
| `VERCEL_TOKEN` | Your Vercel token from Step 1.1 |
| `VERCEL_ORG_ID` | Your org ID from Step 1.2 |
| `VERCEL_PROJECT_ID` | Your project ID from Step 1.2 |

---

## Step 3: Configure Vercel Environment Variables

In [Vercel Dashboard](https://vercel.com) → Your Project → **Settings** → **Environment Variables**

Add these variables for **Production**:

| Variable | Value | Environment |
|----------|-------|-------------|
| `RESEND_API_KEY` | `re_xxxxxxxx` (from [resend.com](https://resend.com)) | Production |
| `NEXT_PUBLIC_SITE_URL` | `https://your-domain.com` | Production, Preview |

---

## Step 4: Domain & DNS Setup

### Option A: Use Vercel Domain (Free)
Your site is already available at: `https://your-project.vercel.app`

### Option B: Custom Domain

#### 4.1 Add Domain in Vercel
1. Go to Vercel → Project → **Settings** → **Domains**
2. Enter your domain (e.g., `phakkaycamping.com`)
3. Click **Add**

#### 4.2 Configure DNS Records
At your domain registrar (e.g., Namecheap, GoDaddy, Cloudflare):

**For apex domain (phakkaycamping.com):**
| Type | Name | Value |
|------|------|-------|
| A | @ | 76.76.21.21 |

**For www subdomain:**
| Type | Name | Value |
|------|------|-------|
| CNAME | www | cname.vercel-dns.com |

#### 4.3 Wait for DNS Propagation
- Usually 5-30 minutes
- Can take up to 48 hours
- Check status in Vercel dashboard

---

## Step 5: Google Search Console Setup

### 5.1 Add Property
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click **"Add property"**
3. Choose **"URL prefix"**
4. Enter: `https://your-domain.com`

### 5.2 Verify Ownership
Choose one method:

**Option A: DNS TXT Record (Recommended)**
1. Copy the TXT record value Google provides
2. Add to your DNS:
   | Type | Name | Value |
   |------|------|-------|
   | TXT | @ | google-site-verification=xxxxxx |
3. Click Verify in Google Search Console

**Option B: HTML Meta Tag**
Add to your `src/app/[locale]/layout.tsx`:
```tsx
<meta name="google-site-verification" content="your-verification-code" />
```

### 5.3 Submit Sitemap
1. In Search Console, go to **Sitemaps**
2. Enter: `sitemap.xml`
3. Click **Submit**

---

## Workflow Diagram

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   Developer     │────▶│    GitHub       │────▶│    Vercel       │
│   Push Code     │     │    Actions      │     │    Deploy       │
└─────────────────┘     └─────────────────┘     └─────────────────┘
                               │
                               ▼
                        ┌─────────────────┐
                        │  CI: Lint/Test  │
                        │  Build Check    │
                        └─────────────────┘
```

---

## How It Works

1. **Push to `main`** → Triggers both CI and Deploy workflows
2. **CI Workflow** → Runs lint, format check, tests, build
3. **Deploy Workflow** → If CI passes, deploys to Vercel production
4. **Pull Request** → Runs CI + creates preview deployment

---

## Manual Deployment

If you need to deploy manually:

```bash
# Preview deployment
npx vercel

# Production deployment
npx vercel --prod
```

---

## Troubleshooting

### Build Fails in GitHub Actions
1. Check Actions logs for specific errors
2. Ensure `bun.lock` is committed
3. Verify environment variables are set

### Vercel Token Invalid
1. Create a new token in Vercel
2. Update `VERCEL_TOKEN` secret in GitHub

### DNS Not Working
1. Verify DNS records are correct
2. Wait up to 48 hours for propagation
3. Check Vercel domain settings for errors

---

## Cost Summary

| Service | Plan | Cost |
|---------|------|------|
| GitHub Actions | Free tier | Free (2,000 min/month) |
| Vercel | Hobby | Free |
| Resend | Free tier | Free (3,000 emails/month) |
| Domain | .com | ~$12/year |
| **Total** | | **~$12/year** |
