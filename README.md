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

1. Enable **GitHub Pages** → Source: **GitHub Actions**
2. Push to `main` — the workflow builds with `base: /PROTO-fw-wellness/` and deploys

If your repo name differs, update `base` in `vite.config.js` and the workflow env.

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
