# UI kit — dncnl.dev (portfolio site)

A single-page portfolio for **Daniel Martin G. Canlapan** — fourth-year computer science
student (Angeles University Foundation). Deliberately *general*: full-stack web, machine
learning and data analysis, software/UI development, and technical documentation.
All content comes from his CV (`assets/Daniel_Canlapan_Resume.pdf`).

Open `index.html`. Interactive and restrained: scroll-spy nav, smooth anchor scrolling,
light/dark toggle persisted to `localStorage`, a looping skill marquee that pauses on hover,
reveal-on-scroll (one observer per block, disconnected after firing, off under
`prefers-reduced-motion`), and a copy-to-clipboard email row. No contact form.

## Files
| File | What it is |
|---|---|
| `data.js` | All CV-derived content: skills, competencies, projects, certifications |
| `motion.jsx` | Hand-written animation helpers (`ScrollProgress`, `Magnetic`, `SplitReveal`) — not part of `_ds_bundle.js`, loaded before the section files that use them |
| `nav.jsx` | Sticky header: wordmark, numbered links, ThemeToggle, GitHub, CV, CTA |
| `hero.jsx` | Headline, two CTAs (work + CV), and the skill marquee beneath it |
| `work.jsx` | Kalinga case study + an honest "coursework & self-directed" card |
| `skills.jsx` | Four competencies as a centered card grid, then the full tech ticker |
| `certifications.jsx` | Discrete placeholder carousel; only shows arrows/dots once there's more than one entry |
| `about.jsx` | Single about section: portrait, intro copy, education, CV download |
| `contact.jsx` | Compact copy-email row plus GitHub/LinkedIn/location, no form |
| `footer.jsx` | Wordmark, email, social IconButtons |

## Notes
- Intro (short pitch) and About (long pitch) used to be separate sections; they're now one
  `about.jsx` section to cut the redundant framing.
- The contact form was removed: it never sent anywhere, it only flipped local React state to
  fake a "sent" confirmation. `contact.jsx` now just surfaces real channels (email, GitHub,
  LinkedIn) with no dead-end submit button. The email row is a small custom `CopyEmailRow`
  (not the shared `CopyEmail` from `_ds_bundle.js`) so the size and alignment stay under
  control — no wrap-prone subtext line.
- **Portrait** — `about.jsx`'s `Portrait` component looks for `assets/portrait.jpeg` and
  falls back to "DC" initials if the file isn't there.
- Copy is deliberately generic about tech stack (web / ML / interfaces / docs) rather than
  naming specific libraries, in the hero subtext and the About intro paragraph.
- Phone number and exact address were dropped from `contact.jsx`; location is now a subtle
  "Philippines" mention only (hero eyebrow, footer, contact).
- DOST-SEI scholarship credential was dropped from `hero.jsx` and `about.jsx` by request.
- `certifications.jsx` reads from `CERTIFICATIONS` in `data.js`. It's a real carousel (same
  slide/index pattern as `work.jsx`) but stays visually lighter (hairline card, no image
  block) and hides the prev/next arrows and dots entirely while there's only one placeholder
  slide. Meant to hold Credly badges later.
- `C#` in `data.js` has no `slug` on purpose — Simple Icons has no C# glyph, so `TechIcon`
  returns `null` and the chip just centers the text. Don't re-add `slug:'csharp'`.
- Mobile: `index.html` sets the viewport meta tag (without it, none of the `clamp()`/`vw`
  sizing in `tokens/` computes against the real device width). Below 640px the nav hides its
  GitHub/CV/CTA buttons and lets the link row scroll horizontally instead of overflowing.
  Below 760px, About's two-column grid collapses to one column.
- LinkedIn points at `#` — the CV lists the label but no URL.
- Tech glyphs are Simple Icons masked to `currentColor`, so one bold SVG serves both themes.
  Tkinter, Seaborn, CustomTkinter, VS Code and C# appear name-only where no glyph exists.
- `motion.jsx` layers on top of the existing `Reveal` fade-up pattern rather than replacing it:
  a fixed scroll-progress bar, a sliding active-link indicator in the nav, a magnetic hover on
  the hero/nav CTAs, a word-stagger reveal on the hero headline, and a scroll parallax on the
  hero `Orb`. All of it no-ops under `prefers-reduced-motion`, same as `Reveal`. See
  `ANIMATION_NOTES.md` (gitignored, local-only) for the full rationale.
