# BourseInvest

A bilingual (FR/EN) educational guide to stock market basics, French investment tax wrappers (PEA, ordinary brokerage account, life insurance) and building a sane investor routine. Not a tracker, not a calculator: a content site, in the spirit of [finance-for-engineers](https://github.com/riadh-mnasri/finance-for-engineers) but for the individual investor rather than the finance engineer.

*[Lire en français](README.md)*

## Content

12 bilingual articles across 4 modules:

1. **The basics**: what a financial market is, stocks/bonds/ETFs, market risk vs permanent loss.
2. **Tax wrappers**: PEA/CTO/life insurance overview, the PEA in detail (eligibility, synthetic replication, counterparty risk), the brokerage account as a complement.
3. **Investor routine**: core-satellite allocation, DCA and automated contributions, behavioral biases.
4. **Lessons**: ideas distilled from three reference books (Rich Dad Poor Dad, The Little Book of Common Sense Investing, The Psychology of Money), with the source cited each time.

Plus a glossary of key terms.

## What the site doesn't do (yet)

No personal portfolio tracking, no position entry, no personalized advice (see the AMF disclaimer in the footer). French content is the primary focus; English content is translated in parallel but isn't meant to cover other countries' tax rules.

## Stack

- Next.js 16 (App Router, Turbopack) with `src/`
- Tailwind CSS v4 + `@tailwindcss/typography`
- MDX content (`@next/mdx`) with dedicated pedagogical components (`Callout`, `Example`, `KeyTakeaway`, `Source`)
- FR/EN and light/dark via `useSyncExternalStore` (no next-intl/next-themes)
- Favicon and Open Graph image generated via `next/og`

## Local development

```bash
npm install
npm run dev
```

The site runs on [http://localhost:3040](http://localhost:3040).

```bash
npm run build   # production build
npm run lint    # eslint
```

## Deployment

Continuously deployed to Vercel on every push to `main`.

---

© 2026 Riadh MNASRI. All rights reserved.
