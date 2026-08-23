# dncnl.dev — portfolio

Personal portfolio for **Daniel Martin G. Canlapan**, a fourth-year Computer Science student
at Angeles University Foundation. One scrolling page — hero, projects, skills, certifications,
about, contact — all content sourced from his résumé.

## Stack

No build step. Plain HTML + React 18 loaded from a CDN, with JSX transpiled in-browser via
Babel Standalone (see `index.html`). Each page section is a single `.jsx` file, content lives
in `data.js`, shared UI primitives (`Button`, `Card`, `ProjectCard`, `Tag`, …) come from the
generated `_ds_bundle.js`, and design tokens (color, spacing, type, motion, shadows, borders)
live in `tokens/`.

## Run locally

Static site — any local web server works, e.g.:

```
npx serve .
```

then open the printed localhost URL. (Opening `index.html` directly via `file://` mostly
works too, but relative asset lookups behave better served over http.)

## Layout

| Path | What it is |
|---|---|
| `index.html` | Entry point — CDN script tags, section load order, scroll-spy wiring |
| `data.js` | All CV-derived content: skills, competencies, projects, certifications |
| `_ds_bundle.js` | Generated shared component library (buttons, cards, icons, tags, …) |
| `tokens/` | CSS custom properties — color, spacing, typography, motion, shadows, borders |
| `motion.jsx` | Scroll/animation helpers layered on top of the base reveal pattern |
| `hero.jsx`, `work.jsx`, `skills.jsx`, `certifications.jsx`, `about.jsx`, `contact.jsx`, `footer.jsx`, `nav.jsx` | One file per page section |
| `assets/` | Résumé PDF, portrait, and certification badge images |

See `UI_KIT_NOTES.md` for the fuller set of build/design decisions behind the site.

## Featured project

The current case study is **[Kalinga](https://github.com/dncnl/kalinga)** — an AI care
companion for migrant caregivers, built for the Presidential Hackathon's international track.
