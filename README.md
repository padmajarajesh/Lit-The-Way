# Lit The Way — Website

Static frontend for **Lit The Way**, a 501(c)(3) nonprofit founded in 2008 (*Empowerment through Education*).
Built with React + Vite, React Router, Framer Motion, Lucide icons and custom CSS. No backend, database or payment processing.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview  # serve the production build
```

Deployed to GitHub Pages at https://padmajarajesh.github.io/NGO-IA/ by `.github/workflows/deploy.yml` on every push to `main`. The build sets `base: '/NGO-IA/'` and copies `index.html` to `404.html` so deep links and refreshes work.

## Updating content

All content lives in `src/data/` — edit these files, not the page components.

| File | Content |
|---|---|
| `site.js` | Organisation facts, contact details, quotes, navigation |
| `causes.js` | The six causes (shared by Home, Causes and Donate) |
| `events.js` | Events — add upcoming events here |
| `impact.js` | Beneficiary organisations, individual support (by type only), impact stories |
| `gallery.js` | Gallery photos, captions and categories |
| `teamMembers.js` | Chair and members. Fill in `photo`, `role` or `bio` and they appear automatically; empty fields stay hidden |

Photos are in `public/images/`. To add a team portrait, save it there and set the member's `photo`, e.g. ``photo: `${import.meta.env.BASE_URL}images/team/hari-pillai.jpg` `` (always prefix with `import.meta.env.BASE_URL` so paths work under `/NGO-IA/`).

## Pending (by design)

- **Donations** — the Donate page is presentation only. No gateway, form, amounts or external payment link.
- **Contact form** — UI only; submission is disabled until a delivery method is chosen.
- **Logo** — `src/components/Logo.jsx` and `public/favicon.svg` are an interim vector recreation. Replace them with the official logo files.

## Content policy

Content is drawn only from the public pages of littheway.org. Do not add statistics, testimonials, event dates, titles or biographies unless the organisation has confirmed them.
