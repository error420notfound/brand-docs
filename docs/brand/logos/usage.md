---
id: usage
title: Logo Usage
---

# Logo Usage

Our logo is the most recognizable element of our brand. Use it consistently and with care.

## Primary Logo

The primary logo consists of the mark + wordmark lockup. Use this version wherever possible.

<div className="logo-showcase">
  <div className="logo-card">
    <img src="/img/logo.svg" alt="Logo on light" height="48" />
    <span className="logo-card__label">On Light</span>
  </div>
  <div className="logo-card logo-card--dark">
    <img src="/img/logo-dark.svg" alt="Logo on dark" height="48" />
    <span className="logo-card__label" style={{color:'rgba(255,255,255,0.5)'}}>On Dark</span>
  </div>
</div>

## File Formats

| Format | Use Case |
|---|---|
| `.svg` | Web, apps, scalable print |
| `.png 2×` | Email, presentations, Slack |
| `.pdf` | High-res print and press |

:::tip SVG is always preferred
SVGs are resolution-independent. Always use SVG for digital contexts unless the tool doesn't support it.
:::

## Download

```
/assets/logos/
  ├── primary/
  │   ├── logo.svg
  │   ├── logo-dark.svg
  │   └── logo@2x.png
  ├── mark-only/
  │   ├── mark.svg
  │   └── mark@2x.png
  └── wordmark-only/
      ├── wordmark.svg
      └── wordmark@2x.png
```
