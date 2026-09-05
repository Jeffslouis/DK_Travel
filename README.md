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
# or, if you have Python:
python -m http.server 3000
```

Then open the URL it prints (defaults to http://localhost:3000). You can
also just double-click `index.html` to open it directly in a browser, though
a couple of things (like smooth root-relative paths) work best through a
local server.

## Project structure

```
index.html               Home — full-screen real-photo slideshow hero,
                          Upcoming Trips, video showcase, gallery teaser,
                          testimonials
about.html                includes a real event photo banner
faq.html                  accordion built with native <details>/<summary>
destinations.html         "Upcoming Trips" — real scheduled group trips
                          (2026/2027), each linking out to the live booking
                          page on destinationkonpa.com
gallery.html               full photo gallery with click-to-enlarge lightbox
contact.html               working form (currently logs to a static "sent"
                            state client-side — see note below)
dk-travel-club.html        DK Travel Club membership marketing page
ambassador.html            Ambassador affiliate program marketing page
shop.html                  DK Shop preview (no cart yet)

assets/
  css/styles.css           entire design system: colors, type, components,
                            hover/scroll-reveal animation, gallery/lightbox,
                            hero slideshow, video showcase
  js/main.js               mobile nav toggle, contact form handling,
                            scroll-reveal (IntersectionObserver), lightbox,
                            hero slideshow (autoplay + dot navigation)
  img/
    dk-logo-black.png       real logo (pulled from the live site)
    dk-pattern.svg           decorative brand pattern (from the live site)
    community-event.jpg      real event photo (Facebook cover photo)
    trips/                   the 4 real event flyers used as trip cards
    gallery/                 6 real photos from the DK Travel Club Facebook
                              photo album (used with permission — see note).
                              Also used as the homepage hero slideshow.
  video/
    vibes-toast.mp4           vertical video used in the "DK Experience"
                               showcase section (stock, Pexels)
    vibes-toast-poster.jpg    poster frame for that video
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
   system, real photos/video, gallery, and hover/scroll polish.
2. ⏳ **More real content** — swap any remaining placeholder copy, add more
   trip photos as new events happen.
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
- **Image/video sourcing:** the logo, brand pattern, and event flyers came
  from the live destinationkonpa.com site. The 6 gallery photos (also used
  as the homepage hero slideshow) and the homepage "community" photo came
  from the DK Travel Club Facebook page, pulled with the account owner's
  confirmation that attendee photos are cleared for marketing use. The
  "DK Experience" showcase video is free stock footage from Pexels,
  standing in until real trip footage is available.
- **Video file size:** `vibes-toast.mp4` (~15 MB) is an un-compressed
  stock download. Before this goes to production, run it through a
  compressor (e.g. HandBrake) and trim to a shorter loop — no
  video-capable `ffmpeg` build was available in the environment this was
  built in to do that here.
