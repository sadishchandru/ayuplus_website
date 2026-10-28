---
name: deploy
description: Deploy the AyuPlus site to production. Use when the user wants to ship, push live, release, or asks why a change isn't on www.ayuplus.in. Merges development into the production branch (Vercel's deploy branch) and verifies.
---

# Deploy AyuPlus to production

Live site `www.ayuplus.in` is served from the **`production`** branch on Vercel (Hobby plan, auto-deploy on push). Work happens on **`development`**. There is no `main`/`master`.

## Steps

1. Make sure the change is committed on `development`:
   ```bash
   git status --short            # confirm what's staged
   git add <files> && git commit -m "<message>"
   ```
2. Merge into `production` and push (fast-forward — `production` is normally behind `development`):
   ```bash
   git checkout production && git merge development && git push origin production
   git checkout development && git push origin development
   ```
3. Vercel builds automatically. Wait ~1–3 min.

## Verify it's live

The homepage is prerendered + CDN-cached, so its HTML can lag. Prefer checking an API route or JS chunk:

```bash
# chat
curl -sS -X POST https://www.ayuplus.in/api/chat -H "Content-Type: application/json" \
  -d '{"messages":[{"role":"user","content":"hi"}]}'

# demo reCAPTCHA gate (dummy token must be rejected)
curl -sS -X POST https://www.ayuplus.in/api/demo -H "Content-Type: application/json" \
  -d '{"name":"t","phone":"1","email":"t@t.com","hospital":"h","city":"c","hospitalSize":"11–30 beds","interest":"Full Platform","recaptchaToken":"dummy"}'
```

Expect chat `{"reply":...}` 200, demo `{"error":"reCAPTCHA failed"}` 400.

## Env vars (do NOT rely on `.env.local`)

`.env.local` is local-only and never ships. Production keys live in **Vercel → Settings → Environment Variables**. If a live feature is broken but local works, a Vercel env var is probably missing or stale. `NEXT_PUBLIC_*` is inlined at build — changing it requires a **redeploy**, not just saving the var.

Required: `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`, `RECAPTCHA_SECRET_KEY`, `RESEND_KEY`, `LEADS_EMAIL`, `GROQ_KEY`.

## Gotchas

- Commit/PR messages are plain prose even if the session is in caveman mode.
- Never push lead data or secrets. `data/leads.json` holds PII.
- reCAPTCHA v3 blocks automated submits by low score — a bot/headless 400 on `/api/demo` is expected, not a regression.
