# Brand Docs

> Brand assets, design system, and marketing guidelines — built with [Docusaurus](https://docusaurus.io/) and deployed to GitHub Pages.

## 🚀 Getting Started

### 1. Clone & Install

```bash
git clone https://github.com/YOUR-GITHUB-USERNAME/brand-docs.git
cd brand-docs
npm install
```

### 2. Local Development

```bash
npm start
```

Opens `http://localhost:3000` with live reload.

### 3. Build

```bash
npm run build
```

Generates a static site in `./build`.

---

## ⚙️ Configuration (Do This First)

Before deploying, update `docusaurus.config.ts`:

| Field | Value |
|---|---|
| `url` | `https://YOUR-GITHUB-USERNAME.github.io` |
| `baseUrl` | `/brand-docs/` (or your repo name) |
| `organizationName` | Your GitHub username or org |
| `projectName` | Your GitHub repo name |
| `editUrl` | Update the GitHub repo URL |

Also update the footer GitHub link in `docusaurus.config.ts` and the homepage CTA in `src/pages/index.tsx`.

---

## 🌐 Deploying to GitHub Pages

### Automatic (Recommended)

Every push to `main` triggers the GitHub Actions workflow at `.github/workflows/deploy.yml`, which builds and deploys automatically.

**One-time setup:**
1. Go to your repo → **Settings → Pages**
2. Under **Source**, select **GitHub Actions**
3. Push to `main` — the site deploys automatically

### Manual Deploy

```bash
GIT_USER=YOUR-GITHUB-USERNAME npm run deploy
```

---

## 📁 Project Structure

```
brand-docs/
├── docs/
│   ├── brand/              # Brand assets section
│   │   ├── overview.md
│   │   ├── logos/
│   │   ├── colors/
│   │   ├── typography/
│   │   └── illustrations/
│   ├── ui-ux/              # Design system section
│   │   ├── principles.md
│   │   ├── components/
│   │   ├── patterns/
│   │   └── accessibility/
│   └── marketing/          # Marketing guidelines
│       ├── voice-and-tone.md
│       ├── templates/
│       └── campaigns/
├── src/
│   ├── css/custom.css      # Theme & custom component styles
│   └── pages/index.tsx     # Homepage
├── static/
│   └── img/                # Put logo.svg, logo-dark.svg here
├── .github/workflows/
│   └── deploy.yml          # Auto-deploy to GitHub Pages
├── docusaurus.config.ts    # Main configuration
└── sidebars.ts             # Sidebar structure
```

---

## ✏️ Adding Content

All content lives in `docs/` as Markdown (`.md`) or MDX (`.mdx`) files.

**Frontmatter required on every doc:**
```md
---
id: my-page
title: My Page Title
---
```

**Adding a new page to the sidebar:** Edit `sidebars.ts` and add the doc ID to the relevant category.

### Using Custom Components

The theme ships with several CSS utility classes for brand docs:

| Class | Use |
|---|---|
| `.color-grid` + `.color-swatch` | Color palette display |
| `.logo-showcase` + `.logo-card` | Logo variant gallery |
| `.do-dont` | Side-by-side do/don't columns |
| `.type-scale-row` | Typography scale rows |

See `src/css/custom.css` for full documentation.

---

## 🔤 Fonts

The site uses [DM Sans](https://fonts.google.com/specimen/DM+Sans) (body), [DM Serif Display](https://fonts.google.com/specimen/DM+Serif+Display) (headings), and [DM Mono](https://fonts.google.com/specimen/DM+Mono) (code) — all loaded from Google Fonts.

To change fonts, edit the `@import` and `--ifm-font-family-*` variables in `src/css/custom.css`.

---

## 🔍 Search (Optional)

To enable search, add [Algolia DocSearch](https://docusaurus.io/docs/search) credentials to `docusaurus.config.ts` under `themeConfig.algolia`.

---

## 📄 License

Internal use only. All brand assets are proprietary.
