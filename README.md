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
| `hero.jsx` | Homepage hero — the original slider wording (`heroMessages`) and carousel photos (`heroSlides`) |
| `site.js` | Organisation facts, contact details, quotes, navigation (original menu: Home, About Us, Events, Activities, Team, Gallery) |
| `causes.js` | The six causes (shared by Home, Causes and Donate) |
| `events.js` | `events` = past events; `upcomingEvents` = confirmed upcoming events (empty list shows a tasteful “none announced yet” note) |
| `impact.js` | Beneficiary organisations, individual support (by type only), impact stories |
| `gallery.js` | Gallery photos, captions and categories |
| `teamMembers.js` | Chair and members. Set `photo` (and optionally `photoPosition`) to replace the “Photograph to follow” frame; `role`/`bio` appear only when filled |

Photos are in `public/images/`. To add a team portrait, save it there and set the member's `photo`, e.g. ``photo: `${import.meta.env.BASE_URL}images/team/hari-pillai.jpg` `` (always prefix with `import.meta.env.BASE_URL` so paths work under `/NGO-IA/`).

## Pending (by design)

- **Donations** — the Donate page is presentation only. No gateway, form, amounts or external payment link.
- **Contact form** — UI only; submission is disabled until a delivery method is chosen.
- **Logo** — the official logo is `public/images/lit-the-way-logo.png` (189×65, white background), used unaltered in the navbar, footer and as favicon. A higher-resolution or transparent version can replace that file directly; a square version would make a better favicon.
- **Original homepage banner** — save the original littheway.org banner as `public/images/banner.jpg`; it appears automatically as the first hero slide. Until then a neutral “Original banner image” frame is shown.
- **Hero wording & team photographs** — to be supplied by the organisation.

## Image policy

No AI-generated, stock or illustrative imagery. Use only original photographs from littheway.org, images supplied by the organisation, the flag components in `src/components/Flags.jsx` (drawn to official specifications) and neutral placeholders.

## Content policy

Content is drawn only from the public pages of littheway.org. Do not add statistics, testimonials, event dates, titles or biographies unless the organisation has confirmed them.
