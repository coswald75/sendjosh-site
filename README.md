# sendjosh.org — Josh Montague (Training Leaders International)

Support-raising and partnership site for Josh Montague, Training Strategist at TLI and teaching elder at Cross of Grace Church (Chaska, MN). Aimed specifically at Sovereign Grace churches considering mission partnership. Built with Astro on the Park Church layout (same structure as sovgracekc-site), deploys to Cloudflare Pages. Domain is already registered on Chris's Cloudflare account.

## Commands

- `npm run dev` — local preview at http://localhost:4321
- `npm run build` — production build into `dist/`

## How the site is organized

- `src/pages/*.astro` — one file per page (`about.astro` → `/about/`)
- `src/layouts/Base.astro` — header, nav, footer, fonts, SEO tags, "Partner with Josh" CTA block
- `src/styles/global.css` — the design system (Park structure; sendjosh palette: warm paper `#faf8f3`, deep pine ink `#1f3a34`, clay accent `#c05e36`)
- `public/images/` — photos extracted from Josh's packet doc (headshot + three overseas training shots)

## Page map (from Josh's packet outline)

| Packet item | Page |
| --- | --- |
| Cover / introductory letter | `/support/` (letter section, marked DRAFT) |
| Summary of need / budget | `/support/` |
| Vision for Philippines and beyond | `/philippines/` |
| References | `/references/` |
| Seminar options for churches | `/seminars/` |
| Bio / education / experience | `/about/` |
| Speaker introduction for emcees | `/contact/` |

## Before launch — content Josh/Chris must supply

1. **Letter from Josh** on `/support/` is a draft — replace with Josh's own words
2. **Budget figures** — monthly support goal and per-trip cost (TODO comment in `support.astro`)
3. **References** — confirm full names, titles, and permission for Scott C., Mark P., Nate T.; gather short endorsement quotes (`references.astro`)
4. **Testimonials / past engagements / media** (packet items 6–8) — not built yet, pending content from Josh
5. Verify the TLI staff-giving link (`https://trainingleadersinternational.org/give?tbl=staff`) lands on a page where "Josh Montague" can be designated

## Deploy

Live at **https://sendjosh.pages.dev** — Cloudflare Pages project `sendjosh`, GitHub repo `coswald75/sendjosh-site` (private). The Pages project uses direct upload (not git-connected), so after changes:

```
npm run build
npx wrangler pages deploy dist --project-name sendjosh --branch main
```

Before launch: add custom domain sendjosh.org to the Pages project (domain already on Chris's Cloudflare account).
