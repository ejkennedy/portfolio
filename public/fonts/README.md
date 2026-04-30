# Fonts

## Currently in use (Google Fonts CDN)

- **JetBrains Mono** — primary mono for body, UI, hero. Weights 400/500/700.
- **Barlow Condensed** — secondary condensed display for large numerals/stat callouts. Weights 500/700.

Both are loaded via `<link>` from Google Fonts in each HTML entry point. Example:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Barlow+Condensed:wght@500;700&display=swap" rel="stylesheet">
```

## ⚠️ Substitution flag

No bespoke font files were provided with the brief. **JetBrains Mono is a substitution** for whatever the actual Ethan Kennedy portfolio uses. The reference image shows a monospaced, slightly geometric programming font with a clear "1lI" disambiguation — JetBrains Mono is the closest free equivalent. If you have access to (e.g.) **Berkeley Mono**, **MD IO**, **Commit Mono**, **Geist Mono**, or another preferred mono, please drop the `.woff2` files into this folder and I'll wire them up via `@font-face`.

Same for the condensed display — Barlow Condensed is a stand-in. **Oswald**, **Bebas Neue**, or a custom condensed are equally valid swaps.
