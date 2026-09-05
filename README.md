# Destination Konpa — Site Revamp

A ground-up rebuild of [destinationkonpa.com](https://destinationkonpa.com), a Caribbean travel
club site. The original site runs on WordPress + WooCommerce with a
membership/savings-plan system and an Ambassador affiliate program; this
project rebuilds it as a custom app so the whole experience — marketing
site, shop, membership, and Ambassador dashboard — lives in one codebase.

## Stack

- **Framework:** Next.js (App Router) + TypeScript
- **Styling:** Tailwind CSS v4
- **Fonts:** Playfair Display (headings) + Inter (body), via `next/font/google`
- **Planned:** Prisma ORM, NextAuth, Stripe (Checkout + Subscriptions) — added
  in later phases (see Roadmap below)

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Project structure

```
src/
  app/                 route segments (App Router) — one folder per page
    api/contact/        contact form endpoint (logs submissions; no email
                         provider wired up yet — see TODO in route.ts)
  components/          shared UI (Header, Footer, Button, PageHero, ...)
  lib/
    nav.ts             nav links + site info (phone, email, tagline)
    content.ts          marketing copy: perks, FAQs, destinations, testimonials
```

## Brand

- **Colors:** black `#0b0b0c`, gold `#c6971a`, cream `#faf6ec` — defined as
  CSS custom properties / Tailwind theme tokens in `src/app/globals.css`.
- **Tagline:** "Vacation Always Paid In Advance"

## Roadmap

This repo is being built in phases; each phase is its own set of commits.

1. ✅ **Design system + marketing pages** — Home, About, FAQ, Destinations,
   Contact, plus placeholder pages for DK Travel Club, Ambassador, and Shop.
2. ⏳ **Shop** — real product catalog, cart, and Stripe Checkout.
3. ⏳ **DK Travel Club membership** — signup, recurring savings-plan billing
   via Stripe Subscriptions, member dashboard with credit balance.
4. ⏳ **Ambassador program** — referral codes, signup tracking, commission
   dashboard.

## Notes for later phases

- Payments will go through Stripe. `.env.example` will list the required
  keys once that phase starts — real keys are never committed, and you'll
  need to add your own Stripe account's keys locally and in your hosting
  provider's environment settings.
- The contact form currently logs submissions server-side only
  (`src/app/api/contact/route.ts`) — no email provider is connected yet.
