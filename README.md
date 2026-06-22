# Fort Wayne Wellness — Mobile Web Prototype

A mobile-first web adaptation of the [Fort Wayne Wellness Kiosk prototype](https://fw-bt-kiosk-prototype.lovable.app/), built for phones and deployable to GitHub Pages.

## What's different from the kiosk

- **Mobile-native design** — warm typography, gradients, and touch-friendly cards (no kiosk QR flows)
- **Geolocation first** — attempts browser location before asking for zip/neighborhood
- **Save to phone** — uses Web Share API or clipboard instead of QR codes
- **Same core flows** — support finder, crisis help, wellness check-in, EN/ES/Myanmar

## Tech stack

- Vue 3 + Vite
- Vue Router (hash mode for GitHub Pages)
- [Iconify](https://iconify.design/) + Lucide icons (bundled, no runtime CDN)
- CSS variables + vanilla CSS

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:5173`

## Build

```bash
npm run build
npm run preview
```

## GitHub Pages

**Live URL (after Pages is enabled):** https://bt-pro-solutions.github.io/PROTO-fw-wellness/

### One-time setup

1. Open [repository Pages settings](https://github.com/BT-Pro-Solutions/PROTO-fw-wellness/settings/pages)
2. Under **Build and deployment**, set **Source** to **GitHub Actions**
3. Push to `main` (or re-run the **Deploy to GitHub Pages** workflow)

The workflow builds with `base: /PROTO-fw-wellness/` and publishes the `dist` folder. If the repo is renamed, update `GITHUB_REPOSITORY` in the `build:pages` script in `package.json`.

### Test the production build locally

```bash
npm run preview:pages
```

Open http://localhost:4173/PROTO-fw-wellness/

## Project structure

```
src/
  components/   Shared UI (header, cards, icons)
  composables/  App state, geolocation
  data/         Resources, translations
  styles/       CSS variables and components
  views/        Route screens
```

## License

Prototype — not for production use without review.
