This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Source lives under `src/` (pages in `src/app/`, components in `src/components/`).

## Environment variables

Copy the keys below into `.env.local` for local dev, and set the same keys in the Vercel dashboard for production. `.env.local` is gitignored and never ships — Vercel has its own copy. `NEXT_PUBLIC_*` is inlined at build time, so changing it needs a redeploy.

```bash
# Google reCAPTCHA v3 — https://www.google.com/recaptcha/admin
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=   # public, browser-exposed
RECAPTCHA_SECRET_KEY=            # secret

# Resend — demo-form emails
RESEND_KEY=                      # starts re_
LEADS_EMAIL=contact@ayuplus.in   # admin recipient

# Groq — chat widget
GROQ_KEY=                        # starts gsk_
```

For local dev, add `localhost` to the reCAPTCHA key's Domains list (admin console). reCAPTCHA v3 scores automated/headless traffic low, so only real human submits clear the 0.5 gate.

## Deploy

Work on `development`; deploy by merging into `production` (Vercel's Production Branch auto-deploys):

```bash
git checkout production && git merge development && git push origin production
git checkout development && git push origin development
```

See [CLAUDE.md](CLAUDE.md) for the full architecture, API routes, and gotchas.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
