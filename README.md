# Destination Konpa — Site Revamp (Static Design)

A ground-up redesign of [destinationkonpa.com](https://destinationkonpa.com), a
Caribbean travel club site. The original runs on WordPress + WooCommerce with
a membership/savings-plan system and an Ambassador affiliate program.

**This repo is the design phase:** a plain static HTML/CSS/JS build of the
new site — no framework, no build step. Once the design is approved, it gets
hand-converted into a PHP WordPress theme (see Roadmap below), where each
`.html` file here maps almost directly onto a theme template.

## Getting started

No install required — every page is a real `.html` file. Easiest way to view
it locally with working relative links:

```bash
npx serve .
```

Then open the URL it prints (defaults to http://localhost:3000). You can
also just double-click `index.html` to open it directly in a browser, though
a couple of things (like smooth root-relative paths) work best through a
local server.

## Project structure

```
index.html            Home
about.html
faq.html               accordion built with native <details>/<summary>
destinations.html
contact.html            working form (currently logs to a static "sent"
                         state client-side — see note below)
dk-travel-club.html      DK Travel Club membership marketing page
ambassador.html          Ambassador affiliate program marketing page
shop.html                DK Shop preview (no cart yet)

assets/
  css/styles.css         entire design system: colors, type, components
  js/main.js             mobile nav toggle + contact form handling
```

Every page repeats the same `<header>`/`<footer>` markup rather than using a
templating include — that's intentional for a plain static site, and it also
means a PHP developer can diff the repeated blocks, confirm they're
identical, and lift them straight into `header.php` / `footer.php`.

## Brand

- **Colors:** black `#0b0b0c`, gold `#c6971a`, cream `#faf6ec` — defined as
  CSS custom properties at the top of `assets/css/styles.css`.
- **Fonts:** Playfair Display (headings) + Inter (body), loaded from Google
  Fonts.
- **Tagline:** "Vacation Always Paid In Advance"

## Roadmap

1. ✅ **Static design** — this repo. All pages, responsive layout, brand
   system, and placeholder content/copy.
2. ⏳ **Real content** — swap placeholder gradients for real destination
   photos, add the logo, finalize copy.
3. ⏳ **Port to a WordPress PHP theme** — convert this static markup into
   theme templates (`header.php`, `footer.php`, `page-*.php`, etc.), wire up
   WordPress's template hierarchy and menus.
4. ⏳ **WooCommerce shop** — product catalog + checkout, replacing the
   `shop.html` preview.
5. ⏳ **DK Travel Club membership** — recurring savings-plan billing and a
   member dashboard.
6. ⏳ **Ambassador program** — referral tracking and a commission dashboard.

## Notes

- The contact form (`contact.html`) currently intercepts its own submit in
  `assets/js/main.js` and shows a "not connected yet" message — there's no
  backend on a static site. When this becomes the WordPress theme, wire it
  to `wp_mail()` (or an SMTP plugin) instead.
