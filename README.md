# Sam Vojdani, MD — Website

Marketing/SEO site for Dr. Sam Vojdani, orthopedic surgeon specializing in
hip and knee replacement at Total Joint Specialists (Midtown Atlanta and
Sandy Springs, GA).

## Stack

Next.js 15 (App Router), TypeScript, Tailwind CSS. Statically generated
pages with per-page metadata, JSON-LD structured data (Physician,
MedicalClinic, FAQPage), sitemap.xml, and robots.txt for SEO.

## Content source

Bio, credentials, and location details are pulled from the official
Total Joint Specialists bio card and match the practice's published
information. Update `src/lib/site.ts` as a single source of truth for
name, credentials, locations, services, and FAQ content — it's used
everywhere (pages, structured data, sitemap).

## Setup

```bash
npm install
npm run dev
```

Runs at http://localhost:3000.

## Before going live

1. **Buy the domain** (georgiahipandknee.com) and set `NEXT_PUBLIC_SITE_URL`
   in a `.env.local` file (copy `.env.example`) to the real domain —
   this feeds canonical URLs, Open Graph tags, the sitemap, and
   structured data.
2. **Google Business Profile**: claim/verify a listing for each office
   location with the exact same name/address/phone used in
   `src/lib/site.ts` (NAP consistency matters for local SEO).
3. **Submit the sitemap** (`/sitemap.xml`) to Google Search Console and
   Bing Webmaster Tools once the domain is live.
4. **Replace placeholder review copy**: no patient testimonials are
   included on the site — add real, consented patient reviews/quotes
   if desired, with proper HIPAA-compliant consent.
5. Confirm all clinical claims and credentials with Dr. Vojdani/the
   practice before publishing, since medical marketing content must
   stay accurate and current.

## Pages

- `/` — Home
- `/about` — Bio, education, training, distinctions
- `/services` + `/services/[slug]` — 6 procedure pages
- `/locations` + `/locations/[slug]` — Midtown Atlanta & Sandy Springs
- `/faq`
- `/contact`
