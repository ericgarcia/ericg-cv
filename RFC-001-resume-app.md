# RFC-001: Resume Renderer — Next.js Client-Side App with PDF Export

**Status:** Draft  
**Author:** Eric Garcia  
**Date:** 2026-05-22

---

## Problem

The resume lives as a Markdown file (`resume.md`). We need a polished, shareable HTML render with clean typography and a one-click "export to PDF" path that produces a print-ready document.

---

## Goals

1. Render the resume with professional typography and clean layout.
2. Export to PDF directly from the browser — no server required.
3. Stay simple: no CMS, no auth, no dynamic data. Pure static content.

## Non-Goals

- Server-side rendering or API routes.
- Hosting / deployment (out of scope for this RFC).
- Auto-syncing from `resume.md` at runtime.

---

## Proposed Approach

### Stack

| Concern | Choice | Rationale |
|---|---|---|
| Framework | Next.js 15 (App Router) | Standard; easy static export with `output: 'export'` |
| Styling | Tailwind CSS v4 | Utility-first; print variants built in (`print:hidden`, etc.) |
| Fonts | `next/font` — **Inter** (body) + **DM Serif Display** (name/headings) | Crisp at small sizes; classic resume feel |
| PDF Export | CSS `@media print` + `window.print()` | Zero dependencies, pixel-perfect fidelity, browser handles layout |

### Why CSS print over `react-pdf` / `html2canvas`

`@react-pdf/renderer` requires a parallel JSX tree and custom layout engine — double maintenance. `html2canvas` bitmaps text into a PNG, losing crispness. `window.print()` is the browser's own renderer: it respects the same DOM, handles pagination, and produces vector PDF with embedded fonts. A `<PrintButton>` component calls it in one line.

### Data Model

Hardcode resume content as a typed TypeScript object in `src/data/resume.ts`. No markdown parsing at runtime. The source of truth remains `resume.md` for humans; the TS object is what the app consumes.

```ts
// src/data/resume.ts
export const resume = {
  name: "Eric Garcia",
  title: "PhD · Staff ML Engineer",
  contact: { email: "...", phone: "...", location: "...", linkedin: "..." },
  summary: "...",
  experience: [
    { company: "MuffinLabs", url: "...", role: "Founder & Principal Consultant",
      period: "Jan 2026–Present", bullets: ["..."] },
    // ...
  ],
  education: [
    { institution: "University of Washington", degree: "PhD, Electrical Engineering", year: 2010 },
    // ...
  ],
};
```

### File Structure

```
ericg-cv-app/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Font setup, global styles
│   │   ├── page.tsx            # Single-page resume render
│   │   └── globals.css         # Tailwind base + print overrides
│   ├── components/
│   │   ├── ResumeHeader.tsx    # Name, title, contact links
│   │   ├── ResumeSection.tsx   # Section wrapper (Experience, Education)
│   │   ├── ExperienceEntry.tsx # Company, role, period, bullets
│   │   └── PrintButton.tsx     # "Export PDF" button — hidden in print
│   └── data/
│       └── resume.ts           # Typed resume content
├── next.config.ts              # output: 'export'
└── tailwind.config.ts
```

### Print Behavior

- `PrintButton` is `print:hidden` — disappears in PDF output.
- Layout shifts to single-column in print, with tighter margins (0.5in all sides).
- Links render their href inline in print via CSS `content: attr(href)` — optional, configurable.
- Page break hints (`break-before-avoid`) on section headers and job entries.

### Key CSS Print Rules (in `globals.css`)

```css
@media print {
  @page { margin: 0.5in; size: letter; }
  body   { font-size: 11pt; }
  a      { color: inherit; text-decoration: none; }
}
```

---

## Open Questions

1. **Single page vs. multi-page PDF?** Resume currently fits one page. If it grows, we may need `break-inside: avoid` tuning or an explicit page-2 section.
2. **Dark mode?** Out of scope for now — print CSS always uses the light palette.
3. **Hosting?** Vercel static export is the obvious choice but not decided here.

---

## Implementation Plan

1. `npx create-next-app@latest ericg-cv-app --ts --tailwind --app --no-src-dir` (or with `src/`).
2. Add fonts via `next/font/google`.
3. Populate `src/data/resume.ts` from `resume.md`.
4. Build components top-down: `ResumeHeader` → `ExperienceEntry` → `ResumeSection` → assemble in `page.tsx`.
5. Add `PrintButton` and wire `@media print` styles.
6. Test PDF output: Chrome → Print → Save as PDF. Verify fonts embed, no text clipping.
7. `next build` → confirm static export works (`out/` directory).
