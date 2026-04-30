# CLAUDE.md

Guidance for Claude Code working in this repo.

## Project

Personal portfolio site for Ethan Kennedy, deployed as a static-asset Cloudflare Worker at `ethankennedy.uk` (and `www.ethankennedy.uk`). Single-file static site — all HTML, CSS, and JS live inline in `public/index.html`. No build step, no framework.

## Commands

- **Dev:** `bun run dev` (or `npm run dev`) — runs `wrangler dev`
- **Deploy:** `bun run deploy` (or `npm run deploy`) — runs `wrangler deploy`

## Architecture

- **`public/`** is the deploy root. Everything under it is served as-is via Cloudflare's static-assets path.
  - `public/index.html` — the entire site (62 KB), all styles + JS inline.
  - `public/assets/` — SVGs (mark, wordmark, waveform), music (`assets/music/*.mp3`), CV PDF (`assets/ethankennedy-cv_30-04-26.pdf`).
  - `public/fonts/` — local font assets (currently just a README; the page loads JetBrains Mono from Google Fonts).
  - `public/colors_and_type.css` — design-system reference, not currently linked from `index.html`.
- **`wrangler.toml`** — assets-only Worker config (`[assets] directory = "./public"`), pinned `account_id`, custom-domain routes for `ethankennedy.uk` and `www.ethankennedy.uk`. No `main` / no Worker code.

## Editing the site

The whole page lives in `public/index.html`. Project / role / output cards are JS objects in a `nodes` map near the bottom of the file (search for `'p-llm':`). Each entry has `kind`, `meta`, `body` (HTML string), `tags`, and `links`. Add new nodes by extending that map.

Hardcoded HUD links (mail / github / cv) are at line ~254.

## Don't

- Don't reintroduce a build step or SSR. The design relies on a single self-contained HTML file.
- Don't move `public/assets/` — `index.html` uses relative `assets/...` paths.
- Don't rename the Worker (`name = "portfolio"`) — the custom-domain routes are bound to it.
