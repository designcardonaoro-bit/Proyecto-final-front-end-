# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Zehn — a React + Vite single-page site for an art gallery / artisan brand. The UI text and content are in Spanish; preserve Spanish copy when editing user-facing strings.

The project lives in the `Zehn-Pagina-Web/` subdirectory of this workspace. Run all commands from there.

## Commands

```bash
npm install         # install dependencies
npm run dev         # start Vite dev server with HMR
npm run build       # production build to dist/
npm run preview     # serve the built dist/ for local verification
npm run lint        # ESLint over all .js/.jsx
```

There is no test runner configured.

## Architecture

- **Entry**: [src/main.jsx](src/main.jsx) mounts `<App/>` in StrictMode. The HTML host is [index.html](index.html).
- **Routing**: [src/app.jsx](src/app.jsx) wires `BrowserRouter` with three top-level routes: `/` → `Home`, `/events` → `Events`, `/gallery` → `Gallery`. `Navbar`, `Footer`, and `Button` render outside `<Routes>` so they appear on every page.
- **Pages** in [src/Pages/](src/Pages/) each import a sibling stylesheet from [src/Styles/](src/Styles/) (e.g. `Home.jsx` ↔ `Styles/Home.css`).
- **Shared components** live in [src/components/JSX/](src/components/JSX/) (Navbar, footer, Button). Their CSS sits in [src/components/JSX/CSS/](src/components/JSX/CSS/) and is imported relatively from each component. Note the mixed casing: the folder is `JSX` (uppercase) and files like `footer.jsx` are lowercase — imports must match exactly because builds run on case-sensitive CI even if Windows dev is case-insensitive.
- **Assets**: bundled images go in [src/assets/](src/assets/) and are imported as ES modules (Vite fingerprints them). Static files served from the site root (e.g. `/Logo-Zehn-4x.svg` referenced in `Navbar.jsx`) go in [public/](public/).

### Conventions worth knowing

- **SweetAlert2** (`sweetalert2`) is the project's standard for confirmations / redirects (see `Home.handleReportButtonClick`). Prefer it over `window.alert` / `window.confirm` for consistency.
- **Swiper** is installed for carousels. There is no shared wrapper — import directly per-page if you add a slider.
- **CSS** is plain CSS, scoped by BEM-ish class names (`navbar__item`, `blog-card`). No CSS modules or preprocessor. Some pages also use inline `style={{...}}` for layout-level concerns (see `Home.jsx`).
- **ESLint** ([eslint.config.js](eslint.config.js)) extends `js.recommended` + `react-hooks` + `react-refresh/vite`, with `no-unused-vars` ignoring identifiers that start with an uppercase letter or underscore — keep that pattern when introducing intentionally-unused imports.
- **React 19** with the new JSX transform — no need to `import React` just for JSX (it's still imported where hooks like `useState` are used).
