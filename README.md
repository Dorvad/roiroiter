# Roi Roiter — a surreal private museum

An artist website for **Roi Roiter**, a surreal painter and woodcarver. It is
built to feel less like an online store and more like entering a dark, poetic,
private museum: a *cabinet of faces, bodies, beasts, masks, and carved objects.*
It works as both a portfolio and a quiet place to inquire about, reserve, or
acquire work.

## The experience

- **Home** — a full-screen hero detail emerging from darkness with a slow
  Ken-Burns drift and scroll parallax, a collection statement, the six **rooms**,
  an Index of Faces teaser, and the collector list.
- **Gallery** — every work in one place, filterable by the six symbolic
  **rooms** (Face, Body, Beast, Ritual, Absurd, and the Carved Archive) and by
  **motif** (face, mask, animal, hand, wound, body, machine, desert, sleep,
  death, wood, ritual, absurdity). Deep-linkable via `?room=` / `?motif=`.
- **Artwork pages** — a gallery label combined with a collector page: a
  full-bleed image with click-to-enlarge lightbox, detail close-ups, poetic text
  and artist notes, availability and price (or "price on request"), motif chips,
  inquiry actions with a private-inquiry modal, shipping/COA/viewing notes, and
  related works from the same room.
- **Available Works / Private Viewing Room** — inquiry-based originals,
  carvings, drawings and editions, plus commissions. There is no checkout —
  acquisition happens through conversation.
- **Index of Faces** — recurring heads and masks; hover a face to reveal its
  full work.
- **The Cabinet** — openable studio drawers of small works, studies, in-progress
  pieces, and fragments.
- **Studio Notes**, **About Roi Roiter**, and **Contact / Collector List**.

The design uses a warm-black palette (warm black, walnut, burnt umber, bone
white, dusty blue, muted red, old gold), a serif display + clean sans + mono
label type system (Cormorant Garamond, Hanken Grotesk, IBM Plex Mono), and
film-grain + vignette atmosphere with slow, restrained motion.

## Stack

- [Next.js 16](https://nextjs.org) (App Router) · React 19 · TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) (base layer) with the design
  expressed largely through inline styles and a small set of global classes.

All routes are statically prerendered and exported as plain HTML/CSS/JS for
hosting.

## Content

All catalogue content lives in [`src/lib/data.ts`](src/lib/data.ts): works,
rooms, motifs, the Index of Faces, the studio cabinet drawers, and studio notes.
Images are plain files in [`public/art/`](public/art) referenced by filename
from the data — no build step or metadata generation is required. Base-path
prefixing for GitHub Pages is handled by [`src/lib/asset.ts`](src/lib/asset.ts).

To add a work: drop the image in `public/art/`, add an entry to `works` (and,
if it has a recurring face, to `faces`), then commit and push.

## Deploy

### GitHub Pages (this repo)

GitHub Pages **cannot run Next.js**. This project includes a **GitHub Actions
workflow** that builds the real site and deploys the `out/` folder.

**One-time setup (do this once):**

1. Open **https://github.com/Dorvad/roiroiter/settings/pages**
2. Under **Build and deployment → Source**, choose **GitHub Actions** (not
   “Deploy from a branch”).
3. Push to `main` (or run the workflow manually: **Actions → Deploy to GitHub
   Pages → Run workflow**).
4. Wait for the green checkmark on the Actions tab (~2–3 minutes).

**Live URL:** **https://dorvad.github.io/roiroiter/**

(Note the `/roiroiter/` at the end — project sites live in a subfolder.)

**Custom domain later:** if you attach e.g. `roiroiter.art` in Pages settings,
set workflow env `NEXT_BASE_PATH` to empty (`""`) so assets load from the domain
root, then redeploy.

### Vercel (alternative — simpler URL)

Connect the repo at [vercel.com](https://vercel.com). No subpath, no workflow
needed.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static production build → out/
npm run start    # serve the production build
npm run lint
```
