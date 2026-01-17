# Phase 3: Logging and Monitoring

**Duration**: 2 days  
**Goal**: Implement comprehensive monitoring, error tracking, and documentation

---

## Day 9: Analytics and Error Tracking

### Morning (4 hours)

- [ ] **Integrate Vercel Analytics (free)**
  - Enable in Vercel Dashboard:
    - Go to Project Settings → Analytics
    - Enable Web Analytics
  - Install package:
    ```bash
    npm install @vercel/analytics
    ```
  - Add to root layout:
    ```tsx
    import { Analytics } from '@vercel/analytics/react';
    
    export default function RootLayout({ children }) {
      return (
        <html>
          <body>
            {children}
            <Analytics />
          </body>
        </html>
      );
    }
    ```
  - Deploy and verify data appears

- [ ] **Add Vercel Speed Insights**
  - Install package:
    ```bash
    npm install @vercel/speed-insights
    ```
  - Add to root layout:
    ```tsx
    import { SpeedInsights } from '@vercel/speed-insights/next';
    
    export default function RootLayout({ children }) {
      return (
        <html>
          <body>
            {children}
            <SpeedInsights />
          </body>
        </html>
      );
    }
    ```
  - Monitor Core Web Vitals

### Afternoon (4 hours)

- [ ] **Setup Sentry for error tracking (free tier)**
  - Create Sentry account at sentry.io
  - Create new project (Next.js)
  - Install SDK:
    ```bash
    npx @sentry/wizard@latest -i nextjs
    ```
  - Configure `sentry.client.config.ts`:
    ```typescript
    Sentry.init({
      dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
      tracesSampleRate: 0.1,
      environment: process.env.NODE_ENV,
    });
    ```
  - Add environment variable in Vercel
  - Test error reporting

- [ ] **Configure error boundaries in React**
  - Create `src/components/ErrorBoundary.tsx`:
    ```tsx
    'use client';
    
    import * as Sentry from '@sentry/nextjs';
    
    export default function GlobalError({ error, reset }) {
      Sentry.captureException(error);
      return (
        <html>
          <body>
            <h2>Something went wrong!</h2>
            <button onClick={() => reset()}>Try again</button>
          </body>
        </html>
      );
    }
    ```
  - Create `src/app/global-error.tsx`
  - Test error boundary works

- [ ] **Add custom event tracking for contact form**
  - Track form submissions:
    ```typescript
    import * as Sentry from '@sentry/nextjs';
    
    // In contact form submit
    Sentry.addBreadcrumb({
      category: 'contact',
      message: 'Form submitted',
      level: 'info',
    });
    ```
  - Track form errors
  - View events in Sentry dashboard

- [ ] **Setup uptime monitoring (UptimeRobot free)**
  - Create account at uptimerobot.com
  - Add new monitor:
    - Type: HTTP(s)
    - URL: your production URL
    - Interval: 5 minutes
  - Configure alert contacts:
    - Email notifications
    - Optional: SMS/Telegram
  - Test by triggering downtime

---

## Day 10: Refinement and Documentation

### Morning (4 hours)

- [ ] **Review analytics dashboard**
  - Check Vercel Analytics:
    - Page views
    - Unique visitors
    - Top pages
    - Referrer sources
  - Check Speed Insights:
    - LCP scores
    - FID scores
    - CLS scores
  - Identify any performance issues

- [ ] **Configure alert notifications**
  - Sentry alerts:
    - New issue alert
    - Issue spike alert
  - UptimeRobot:
    - Down alert (email)
    - Back up alert
  - Optional: Slack integration

- [ ] **Create runbook for common issues**
  - Document in `docs/runbook.md`:
    - How to deploy hotfix
    - How to rollback deployment
    - How to check error logs
    - How to restart if needed
    - Contact information

### Afternoon (4 hours)

- [ ] **Final documentation updates**
  - Update README.md with:
    - Project overview
    - Setup instructions
    - Available scripts
    - Deployment guide
    - Architecture diagram
  - Document environment variables
  - Add troubleshooting guide

- [ ] **Knowledge transfer / handoff notes**
  - Create `docs/handoff.md`:
    - Account credentials (where stored)
    - Service access links
    - Monitoring dashboards
    - Maintenance schedule
    - Future improvement ideas

- [ ] **Final testing and verification**
  - Run full E2E test suite
  - Verify all monitoring is working
  - Check all documentation is accurate
  - Create backup of configuration

---

## Monitoring Dashboard Links

Create `docs/dashboards.md`:

```markdown
# Monitoring Dashboards

## Vercel
- Dashboard: https://vercel.com/[team]/phakkay-camping
- Analytics: https://vercel.com/[team]/phakkay-camping/analytics
- Logs: https://vercel.com/[team]/phakkay-camping/logs

## Sentry
- Dashboard: https://sentry.io/organizations/[org]/projects/phakkay-camping

## UptimeRobot
- Dashboard: https://uptimerobot.com/dashboard

## Google Search Console
- Dashboard: https://search.google.com/search-console?resource_id=[site]
```

---

## Runbook Template

Create `docs/runbook.md`:

```markdown
# Phakkay Camping - Runbook

## Deployment

### Standard Deployment
1. Push to main branch
2. Vercel auto-deploys
3. Monitor deployment in dashboard

### Hotfix Deployment
1. Create hotfix branch
2. Make minimal fix
3. Test locally
4. Push to main
5. Verify deployment

### Rollback
1. Go to Vercel Dashboard → Deployments
2. Find previous working deployment
3. Click "..." → "Promote to Production"
4. Verify rollback successful

## Troubleshooting

### Site Down
1. Check UptimeRobot for status
2. Check Vercel status: status.vercel.com
3. Check Sentry for errors
4. If Vercel issue: wait or contact support
5. If code issue: deploy fix or rollback

### Contact Form Not Working
1. Check Sentry for errors
2. Verify RESEND_API_KEY in Vercel
3. Check Resend dashboard for quota
4. Test API route directly

### Performance Issues
1. Check Vercel Speed Insights
2. Identify slow pages
3. Check for large images
4. Review component rendering

## Contacts
- Developer: [email]
- Resort Owner: [phone]
- Vercel Support: support@vercel.com
```

---

## Free Tier Limits Reference

| Service | Free Tier Limit |
|---------|-----------------|
| Vercel | 100GB bandwidth/month |
| Vercel Analytics | 2,500 data points/month |
| Sentry | 5,000 errors/month |
| UptimeRobot | 50 monitors, 5-min interval |
| Resend | 3,000 emails/month |

---

## Phase 3 Checklist

### Monitoring Setup
- [ ] Vercel Analytics enabled and receiving data
- [ ] Vercel Speed Insights tracking Core Web Vitals
- [ ] Sentry capturing errors (test error sent)
- [ ] UptimeRobot monitoring site (test alert received)

### Documentation
- [ ] README.md complete and accurate
- [ ] Runbook created with procedures
- [ ] Dashboard links documented
- [ ] Environment variables documented
- [ ] Handoff notes completed

### Final Verification
- [ ] All monitoring dashboards accessible
- [ ] Alert notifications working
- [ ] No outstanding errors in Sentry
- [ ] Site performing well (Lighthouse 90+)
- [ ] All tests still passing

---

## Future Improvements (Backlog)

1. **Add more analytics**
   - Google Analytics 4
   - Hotjar for heatmaps
   - User feedback widget

2. **Enhanced monitoring**
   - Custom Sentry dashboards
   - Performance budgets
   - Automated Lighthouse CI

3. **Content improvements**
   - Add more photos
   - Video tour
   - Virtual 360° view

4. **Features**
   - Online booking integration
   - Review/testimonial section
   - Blog for SEO

5. **Technical**
   - A/B testing
   - Feature flags
   - Staging environment

