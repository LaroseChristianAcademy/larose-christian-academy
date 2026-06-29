# Larose Christian Academy — School Website

**Purpose:** Private Christian school website — enrollment, fees, payments.

## Quick Start

- **Framework:** Next.js 16 (App Router), Tailwind CSS
- **Payments:** Stripe (checkout flow configured)
- **Auth/Database:** Supabase (schema not created yet)
- **Local path:** `C:\Users\1990j\coverschool\`
- **Server:** `npx next start -p 3000` (running)
- **Tunnel:** Cloudflare tunnel (auto-started)
- **Contact:** `larosechristianacademy@gmail.com` | `251-201-9991`
- **Location:** Mobile, AL

## Commands

```bash
cd /c/Users/1990j/coverschool
npm run build      # Build (0 errors as of last check)
npx next start -p 3000  # Start server
```

## Fee Structure

- **One-Time Registration Fee:** $75
- **Monthly Tuition:** $25/month
- Config in `src/lib/constants.ts`

## Key Files

| Path | Purpose |
|------|---------|
| `src/lib/constants.ts` | Fees, Stripe constants |
| `src/data/siteData.ts` | Contact info, address, school data |
| `src/app/enroll/page.tsx` | Enrollment form |
| `src/app/api/pay-paperwork/route.ts` | Stripe checkout for reg fee |
| `src/app/api/download-book/route.ts` | PDF download endpoint |
| `src/app/faq/page.tsx` | FAQ page |

## Build Status

- ✅ npm run build — 0 errors
- ✅ Cloudflare tunnel active
- 🔴 Supabase not created (no database tables)
- 🔴 Stripe webhook secret missing from .env.local
- 🔴 SMTP not configured
- 🔴 Not deployed to Vercel (local-only via tunnel)

## Contact Form

- **Formspree endpoint:** `https://formspree.io/f/mykqplgw` (form ID: mykqplgw)
- **Email notifications sent to:** larosechristianacademy@gmail.com
- **Dashboard:** https://formspree.io/forms/mykqplgw
- Form uses fetch/AJAX submission (no page reload). Includes success/error/loading states.
- Spam protection: hidden `_gotcha` honeypot field included.

**NOTE:** This is Next.js 16 — breaking changes from earlier versions. Read `node_modules/next/dist/docs/` before writing code. Heed deprecation notices.
