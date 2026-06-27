# Roi Roiter — a dark surreal cabinet

An artist website for **Roi Roiter**, a surreal painter and woodcarver. It is
built to feel less like an online store and more like entering a dark, poetic,
private museum: a *cabinet of faces, bodies, beasts, masks, and carved objects.*
It works as both a portfolio and a quiet place to inquire about, reserve, or buy
work.

## The experience

- **Home** — a full-screen hero detail emerging from darkness, primary doors
  into the gallery, available works, and the carved archive, and cinematic
  "room" cards.
- **Gallery** — organised by six symbolic **rooms** (Face, Body, Beast, Ritual,
  Absurd, and the Carved Archive) rather than by medium, with museum **archive
  cards** (title, year, medium, dimensions, status).
- **Artwork pages** — a gallery label combined with a collector page: a
  loupe/zoom viewer and lightbox, detail close-ups, an optional to-scale wall
  mockup, poetic text and artist notes, availability and price (or "price on
  request"), inquiry actions, shipping/COA/viewing notes, and signed editions.
- **Available Works / Private Viewing Room** — inquiry-based originals and
  carvings; direct-purchase prints, editions, and small objects with a quiet
  cart; and commissions.
- **Index of Faces** — recurring heads and masks; hover a face to reveal its
  full work.
- **Browse by Symbol** — face, mask, animal, hand, wound, body, machine, desert,
  sleep, death, wood, ritual, absurdity.
- **The Cabinet** — openable studio drawers of small works, studies, in-progress
  pieces, sold/departed works, and fragments.
- **Studio Notes**, **About Roi Roiter**, and **Contact / Collector List**.

The design uses a warm-dark palette (warm black, walnut, burnt umber, bone
white, dusty blue, muted red, old gold), refined serif + clean sans typography,
film-grain and vignette atmosphere, archive/wood/paper textures, a custom
magnifier cursor, and slow, restrained motion.

## Stack

- [Next.js 16](https://nextjs.org) (App Router) · React 19 · TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- [`motion`](https://motion.dev) for restrained animation

All routes are statically prerendered and exported as plain HTML/CSS/JS for hosting.

## Deploy

### GitHub Pages (this repo)

GitHub Pages **cannot run Next.js**. If you set Pages to “Deploy from branch” and
point it at `main`, GitHub only publishes files from the repo — so you see
**README.md on a white page**, not the site.

This project includes a **GitHub Actions workflow** that builds the real site and
deploys the `out/` folder.

**One-time setup (do this once):**

1. Open **https://github.com/Dorvad/roiroiter/settings/pages**
2. Under **Build and deployment → Source**, choose **GitHub Actions** (not
   “Deploy from a branch”).
3. Push to `main` (or run the workflow manually: **Actions → Deploy to GitHub
   Pages → Run workflow**).
4. Wait for the green checkmark on the Actions tab (~2–3 minutes).

**Live URL:**

**https://dorvad.github.io/roiroiter/**

(Note the `/roiroiter/` at the end — project sites live in a subfolder.)

**Custom domain later:** if you attach e.g. `roiroiter.art` in Pages settings,
set repository secret or workflow env `NEXT_BASE_PATH` to empty (`""`) so assets
load from the domain root, then redeploy.

### Vercel (alternative — simpler URL)

Connect the repo at [vercel.com](https://vercel.com). No subpath, no workflow
needed. Best if you want `roiroiter.art` at the root without extra config.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint
```

## Art files

Drop images into `public/art/` (see `public/art/FILES.txt`), then:

```bash
npm run art:meta
git add public/art src/lib/image-meta.json
git commit -m "Add artwork images"
git push
```

GitHub Actions will rebuild the site automatically.
