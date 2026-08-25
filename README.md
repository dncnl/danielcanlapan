# dncnl.dev — portfolio

Hi, I'm Daniel Martin G. Canlapan — a fourth-year Computer Science student at Angeles
University Foundation. This repo is my personal portfolio: a single scrolling page covering my
work, skills, certifications, GitHub activity, about, and contact, with all content pulled from
my résumé.

I built and iterated on it over several real development passes rather than generating it in
one shot: a hand-rolled scroll-driven reveal/animation layer (`motion.jsx`), a token-based
design system (`tokens/`) driving color, spacing, type and motion across both themes, and a
shared component library synced in from a separate design-system project (`_ds_bundle.js`).
Features like the credentials section and the live GitHub activity feed landed as their own
separate changes, not part of an initial pass — see `UI_KIT_NOTES.md` for the build decisions
and tradeoffs behind it.


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
| `hero.jsx`, `work.jsx`, `skills.jsx`, `certifications.jsx`, `github.jsx`, `about.jsx`, `contact.jsx`, `footer.jsx`, `nav.jsx` | One file per page section |
| `assets/` | Résumé PDF, portrait, and certification badge images |

See `UI_KIT_NOTES.md` for the fuller set of build/design decisions behind the site.

## Featured project

The current case study is **[Kalinga](https://github.com/dncnl/kalinga)** — an AI care
companion for migrant caregivers, built for the Presidential Hackathon's international track.
