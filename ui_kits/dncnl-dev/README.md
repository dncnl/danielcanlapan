# UI kit — dncnl.dev (portfolio site)

A single-page portfolio for **Daniel Martin G. Canlapan** — fourth-year computer science
student (Angeles University Foundation), DOST-SEI scholar. Deliberately *general*: full-stack
web, machine learning and data analysis, software/UI development, and technical documentation.
All content comes from his résumé (`assets/resume.docx`).

Open `index.html`. Interactive and restrained: scroll-spy nav, smooth anchor scrolling,
light/dark toggle persisted to `localStorage`, two counter-running skill marquees that pause
on hover, an accordion of competencies, reveal-on-scroll (one observer per block, disconnected
after firing, off under `prefers-reduced-motion`), a copy-to-clipboard email block, and a
contact form with inline validation and a sent state.

## Files
| File | What it is |
|---|---|
| `data.js` | All résumé-derived content: skills, competencies, projects |
| `nav.jsx` | Sticky header: wordmark, numbered links, ThemeToggle, GitHub, CTA |
| `hero.jsx` | Intro, credentials row, and the two skill marquees beneath it |
| `intro.jsx` | Short personal statement section right after the hero |
| `work.jsx` | Kalinga case study + an honest "coursework & self-directed" card |
| `skills.jsx` | Four competencies as a centered card grid, then the full tech ticker |
| `about.jsx` | Text introduction (no portrait), education, scholarship, résumé download |
| `contact.jsx` | Large CopyEmail block, direct channels, message form |
| `footer.jsx` | Wordmark, email, social IconButtons |

## Notes
- **No profile picture** — the introduction is text-only by request. `about.jsx` has room for
  a portrait later; the layout does not depend on one.
- LinkedIn points at `#` — the résumé lists the label but no URL.
- Tech glyphs are Simple Icons masked to `currentColor`, so one bold SVG serves both themes.
  Tkinter, Seaborn, CustomTkinter and VS Code appear name-only where no glyph exists.
