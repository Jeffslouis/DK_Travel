#!/usr/bin/env python3
"""
Capture viewport and full-page screenshots of a local HTML file at
desktop, tablet, and mobile sizes.

Setup (once):
    pip install playwright
    playwright install chromium

Usage:
    python screenshot_page.py path/to/index.html
    python screenshot_page.py path/to/index.html --out screenshots --delay 800

For each of the three device sizes below, two screenshots are saved:
  - "<page>-<device>-viewport.png"  (just what's visible above the fold)
  - "<page>-<device>-fullpage.png"  (the entire scrolling page)
"""

import argparse
import sys
from pathlib import Path

from playwright.sync_api import sync_playwright

DEVICES = [
    ("desktop", 1440, 900),
    ("tablet", 820, 1180),
    ("mobile", 390, 844),
]


def to_file_url(path: Path) -> str:
    return path.resolve().as_uri()


def scroll_through_page(page, step_delay_ms: int) -> None:
    """
    Walk the page from top to bottom in viewport-height steps, pausing at
    each stop. Sites that reveal content or lazy-load images on scroll
    (IntersectionObserver, scroll-triggered classes) only fire for
    elements that actually pass through the viewport - a single tall
    full-page screenshot never scrolls, so without this pass those
    sections render blank. Scrolls back to the top afterward so the
    viewport screenshot (taken separately) still shows the page at rest.
    """
    height = page.evaluate("document.documentElement.scrollHeight")
    viewport_height = page.viewport_size["height"]
    y = 0
    while y < height:
        page.evaluate(f"window.scrollTo(0, {y})")
        page.wait_for_timeout(step_delay_ms)
        y += viewport_height
        height = page.evaluate("document.documentElement.scrollHeight")  # page can grow as content loads

    # One more pause at the very bottom, then back to the top.
    page.evaluate(f"window.scrollTo(0, {height})")
    page.wait_for_timeout(step_delay_ms)
    page.evaluate("window.scrollTo(0, 0)")
    page.wait_for_timeout(step_delay_ms)


def capture(html_path: Path, out_dir: Path, delay_ms: int) -> None:
    page_name = html_path.stem
    out_dir.mkdir(parents=True, exist_ok=True)
    url = to_file_url(html_path)

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)

        for device_name, width, height in DEVICES:
            context = browser.new_context(viewport={"width": width, "height": height})
            page = context.new_page()

            page.goto(url, wait_until="networkidle")
            # Let CSS/JS animations (fades, marquees, reveal-on-scroll) settle.
            page.wait_for_timeout(delay_ms)

            viewport_path = out_dir / f"{page_name}-{device_name}-viewport.png"
            page.screenshot(path=str(viewport_path), full_page=False)
            print(f"saved {viewport_path}")

            # Scroll all the way through so scroll-reveal / lazy-loaded
            # content has actually fired before the full-page capture.
            scroll_through_page(page, step_delay_ms=max(delay_ms, 200))

            fullpage_path = out_dir / f"{page_name}-{device_name}-fullpage.png"
            page.screenshot(path=str(fullpage_path), full_page=True)
            print(f"saved {fullpage_path}")

            context.close()

        browser.close()


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("html_file", type=Path, help="Path to the local HTML file to screenshot")
    parser.add_argument("--out", type=Path, default=Path("screenshots"), help="Output directory (default: screenshots)")
    parser.add_argument("--delay", type=int, default=500, help="Extra wait in ms after networkidle, for animations (default: 500)")
    args = parser.parse_args()

    if not args.html_file.exists():
        print(f"error: {args.html_file} does not exist", file=sys.stderr)
        sys.exit(1)

    capture(args.html_file, args.out, args.delay)


if __name__ == "__main__":
    main()
