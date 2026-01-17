# Phase 2: Cloud Deployment

**Duration**: 2 days  
**Goal**: Deploy landing page to Vercel with production optimizations and SEO configuration

---

## Day 7: Deployment Setup

### Morning (4 hours)

- [ ] **Create Vercel account and connect repository**
  - Sign up at vercel.com (use GitHub/GitLab)
  - Install Vercel CLI: `npm i -g vercel`
  - Connect to Git repository
  - Verify account permissions

- [ ] **Push code to Git repository**
  - Initialize git if not done
  - Create .gitignore with proper exclusions
  - Commit all Phase 1 code
  - Push to main/master branch

- [ ] **Configure environment variables**
  - In Vercel dashboard, add environment variables:
    - `RESEND_API_KEY` - for email sending
    - `NEXT_PUBLIC_SITE_URL` - production URL
  - Configure for production environment
  - Keep development .env.local separate

- [ ] **Configure Vercel build settings**
  - Framework Preset: Next.js
  - Build Command: `bun run build`
  - Output Directory: `.next`
  - Install Command: `bun install`
  - Node.js Version: 20.x (Bun compatible)

### Afternoon (4 hours)

- [ ] **Deploy initial version**
  - Trigger first deployment
  - Monitor build logs for errors
  - Verify deployment completes successfully
  - Test preview URL

- [ ] **Test deployment on preview URL**
  - Verify all pages load
  - Test Thai/English switching
  - Test gallery functionality
  - Test contact form
  - Test map component
  - Check for console errors

- [ ] **Setup custom domain (if available)**
  - Add domain in Vercel dashboard
  - Configure DNS records:
    - A record → Vercel IP
    - CNAME record → cname.vercel-dns.com
  - Wait for DNS propagation
  - Verify SSL certificate issued
  - If no domain: use `.vercel.app` subdomain

- [ ] **Configure Vercel project settings**
  - Set production branch (main)
  - Configure preview deployments
  - Set up automatic deployments on push
  - Configure build cache

---

## Day 8: Production Optimization

### Morning (4 hours)

- [ ] **Enable Vercel Edge caching**
  - Review Next.js caching defaults
  - Configure static page caching
  - Set cache headers for images
  - Test cache behavior with curl

- [ ] **Configure image optimization settings**
  - Verify next/image optimization works
  - Set appropriate quality settings
  - Configure allowed image domains
  - Test image loading performance

- [x] **Setup sitemap.xml** ✅
  - Created `src/app/sitemap.ts` with Thai/English URLs
  - Sitemap generates at `/sitemap.xml`

- [x] **Setup robots.txt** ✅
  - Created `src/app/robots.ts`
  - robots.txt accessible at `/robots.txt`

### Afternoon (4 hours)

- [ ] **Submit to Google Search Console**
  - Go to search.google.com/search-console
  - Add property (URL prefix or Domain)
  - Verify ownership:
    - DNS TXT record, OR
    - HTML file upload, OR
    - Meta tag
  - Submit sitemap URL
  - Request indexing of homepage

- [ ] **Configure social sharing previews**
  - Test Open Graph with:
    - Facebook Debugger: developers.facebook.com/tools/debug
    - Twitter Card Validator: cards-dev.twitter.com/validator
    - LinkedIn Inspector: linkedin.com/post-inspector
  - Fix any missing or incorrect tags
  - Re-scrape after fixes

- [ ] **Verify production performance metrics**
  - Run Lighthouse on production URL
  - Check Core Web Vitals:
    - LCP (Largest Contentful Paint) < 2.5s
    - FID (First Input Delay) < 100ms
    - CLS (Cumulative Layout Shift) < 0.1
  - Run PageSpeed Insights
  - Document results

- [ ] **Final production testing**
  - Test all user flows on production
  - Test on multiple browsers:
    - Chrome
    - Firefox
    - Safari
    - Edge
  - Test on mobile devices
  - Verify HTTPS works correctly
  - Check for mixed content warnings

---

## Deployment Checklist

### Pre-Deployment
- [x] All tests passing locally ✅
- [x] No lint errors ✅
- [x] Build completes without errors ✅
- [x] Environment variables documented ✅ (see `.env.example`)

### Post-Deployment
- [ ] Site accessible at production URL
- [ ] SSL certificate active (HTTPS)
- [ ] All images loading
- [ ] Thai/English working
- [ ] Contact form working
- [ ] No console errors
- [ ] Lighthouse Performance: 90+
- [ ] Lighthouse SEO: 95+
- [ ] Sitemap accessible
- [ ] Robots.txt accessible
- [ ] Open Graph preview working

---

## Vercel Configuration Reference

### vercel.json ✅ (Created)
```json
{
  "framework": "nextjs",
  "buildCommand": "bun run build",
  "installCommand": "bun install",
  "regions": ["sin1"],
  "headers": [
    {
      "source": "/images/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

### Environment Variables
| Variable | Description | Required |
|----------|-------------|----------|
| `RESEND_API_KEY` | Resend email API key | Yes |
| `NEXT_PUBLIC_SITE_URL` | Production site URL | Yes |

---

## Troubleshooting

### Build Fails
1. Check build logs in Vercel dashboard
2. Ensure all dependencies are in package.json
3. Verify Node.js version compatibility
4. Check for missing environment variables

### Images Not Loading
1. Verify images are in `/public/images`
2. Check image paths are correct
3. Ensure images are not in .gitignore
4. Check Vercel image optimization settings

### Contact Form Not Working
1. Verify `RESEND_API_KEY` is set
2. Check API route is deployed
3. Test with Vercel logs
4. Verify CORS settings

### DNS/Domain Issues
1. Wait 24-48 hours for propagation
2. Verify DNS records are correct
3. Check Vercel domain settings
4. Clear browser DNS cache

---

## Cost Estimate

| Service | Plan | Cost |
|---------|------|------|
| Vercel | Hobby | Free |
| Domain | .com | ~$12/year |
| Resend | Free tier | Free (3k emails/month) |
| **Total** | | **~$12/year** |

---

## Next Steps After Phase 2

1. Monitor for any issues
2. Check analytics after 24 hours
3. Proceed to Phase 3 for monitoring
4. Plan for content updates

