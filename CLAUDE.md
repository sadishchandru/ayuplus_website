# AyuPlus Website — Claude Guide

Marketing site for AyuPlus, an Ayurvedic Hospital Management System. Next.js 16 (App Router) + React 19 + Tailwind v4, deployed on Vercel.

## Project shape

- Source under `src/` (not root). Pages in `src/app/`, components in `src/components/`, shared blocks in `src/sections/`.
- Root layout is `src/app/layout.tsx` (a Server Component — it exports `metadata`/`viewport`, so it must NOT carry `"use client"`).
- Feature pages: `digital-prescription`, `vaidya-mode`, `case-sheets`, `billing`, `opd-ipd-management`, `ayurvedic-pharmacy-software`, `hospital-settings`, `pricing`, `contact`.

## API routes

- `src/app/api/demo/route.js` — demo-request form handler. Verifies Google reCAPTCHA v3, writes lead to `data/leads.json`, sends two emails via **Resend** (admin alert + user confirmation). Both emails are best-effort; the reCAPTCHA gate runs first and returns 400 before any write/email.
- `src/app/api/chat/route.js` — chat-widget backend. Proxies to **Groq** chat completions.

## Chat model (Groq)

- Current model: `openai/gpt-oss-20b`. Set in `src/app/api/chat/route.js`.
- Groq decommissions models on a schedule (https://console.groq.com/docs/deprecations). When chat returns 502 `Upstream error`, check whether the model is still active — a decommissioned or inaccessible model returns 404 `model_not_found` from Groq. `llama-3.1-8b-instant` was decommissioned 2026-08-16; `llama-3.3-70b-versatile` is not accessible on this account's tier.

## reCAPTCHA v3

- Provider lives in `src/components/RecaptchaProvider.jsx` (a `"use client"` wrapper around `GoogleReCaptchaProvider`). It is imported into the Server-Component layout; the provider itself can never go directly in `layout.tsx` because it calls `createContext`.
- `src/components/DemoModal.jsx` calls `useGoogleReCaptcha()` → `executeRecaptcha("demo_request")` and sends the token in the POST body.
- The route verifies via `https://www.google.com/recaptcha/api/siteverify` (form-encoded body) and gates on `success && score >= 0.5`.
- reCAPTCHA v3 scores automation/headless traffic low by design. A browser-driven/automated submit will legitimately 400 with `reCAPTCHA failed`; that is the anti-bot gate working, not a bug. Only a real human submit reliably clears the 0.5 threshold.
- Domains must be registered in the reCAPTCHA admin console with "Verify the origin" on: `ayuplus.in` (covers `www.`) for prod, and `localhost` for local dev. Missing `localhost` → `error-codes: ["browser-error"]`.

## Environment variables

Local in `.env.local` (gitignored). Production in the Vercel dashboard (Settings → Environment Variables). `.env.local` never ships — every key must also exist in Vercel, and `NEXT_PUBLIC_*` is inlined at build time so changing it requires a redeploy.

| Var | Used by | Notes |
|-----|---------|-------|
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | RecaptchaProvider, DemoModal | public (browser-exposed) |
| `RECAPTCHA_SECRET_KEY` | demo route | secret |
| `RESEND_KEY` | demo route | secret, starts `re_` |
| `LEADS_EMAIL` | demo route | admin recipient, default `contact@ayuplus.in` |
| `GROQ_KEY` | chat route | secret, starts `gsk_` |

## Branch + deploy flow

- Work branch: **`development`**. Deploy branch: **`production`** (Vercel's Production Branch). `production` is normally a fast-forward behind `development`.
- Ship:
  ```bash
  git add <files> && git commit -m "..."        # on development
  git checkout production && git merge development && git push origin production
  git checkout development && git push origin development
  ```
- Vercel auto-deploys on push to `production`. The apex/homepage is prerendered + CDN-cached, so after a push the homepage HTML (and its chunk hashes) can lag a minute or two; a hard check is to curl a JS chunk for new content or hit an API route.
- Remote: `github.com/sadishchandru/ayuplus_website`. No PR flow in use — direct branch merges.

## Known debt

- `data/leads.json` (contains submitted lead PII) is tracked in git. Consider `.gitignore` + `git rm --cached`.
- `.hero-demo-cta` CSS in `src/app/globals.css` is dead (Hero button no longer uses it).
