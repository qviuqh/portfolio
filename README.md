# Quang Vinh — Portfolio

React + Tailwind (Vite) rebuild of the "More than just models." portfolio design.
The visual system from the original `About Me` page (cream background, black/orange
accent, Inter + Playfair Display, massive broadsheet-style typography) is centralized
in `src/components/Layout.jsx`, `Header.jsx`, `Footer.jsx` and the Tailwind design
tokens in `tailwind.config.js`, so every new page automatically stays on-brand.

## Project structure

```
src/
  components/
    Header.jsx       # top nav, shared on every page
    Footer.jsx        # bio + locate + socials, shared on every page
    Layout.jsx         # page shell: noise overlay + Header + Footer wrapper
    NoiseOverlay.jsx    # paper texture / vignette, shared on every page
  data/
    posts.js            # sample blog content — replace with real posts / CMS
  pages/
    AboutMe.jsx          # "/"          — the original hero page
    Blog.jsx              # "/blog"       — post listing
    BlogPost.jsx            # "/blog/:slug" — single post
    AboutUs.jsx               # "/about-us"   — studio/values page
    NotFound.jsx                # "*"           — 404
  App.jsx                        # route definitions
  main.jsx                        # React root + Router (reads base URL)
  index.css                        # Tailwind directives + shared custom CSS
tailwind.config.js                  # color/font/animation design tokens
vite.config.js                       # reads VITE_BASE_URL for the app's base path
```

## Design tokens (do not fork these per-page — extend them here instead)

| Token         | Value                          |
|---------------|---------------------------------|
| `background`  | `#e6e4e1` (warm cream)          |
| `foreground`  | `#111111` (soft black)          |
| `accent`      | `#FF4500` (signature dot color) |
| Display font  | `Inter`, weight 800/900         |
| Serif font    | `Playfair Display`, italic      |

Adding a new page: wrap it in `<Layout>`, reuse the same "micro label → massive
headline → accent-dot serif line" pattern used in `AboutMe.jsx`/`Blog.jsx`/`AboutUs.jsx`,
and only pull colors/fonts from the tokens above.

## Getting started

```bash
npm install
npm run dev
```

## Base URL (deploying under a sub-path, e.g. GitHub Pages)

The app reads its base path from the `VITE_BASE_URL` env var (see `vite.config.js`),
and `main.jsx` passes `import.meta.env.BASE_URL` as the router's `basename`, so both
Vite's asset URLs and React Router's routes stay correct together.

- **Local dev / root deployment (default):** nothing to configure, base is `/`.
- **Deploying to `https://username.github.io/repo-name/`:**

  ```bash
  VITE_BASE_URL=/repo-name/ npm run build
  ```

  Or create a `.env.production` file:

  ```
  VITE_BASE_URL=/repo-name/
  ```

  then run `npm run build` as usual.

## Build

```bash
npm run build   # outputs to dist/
npm run preview # serve the production build locally
```
