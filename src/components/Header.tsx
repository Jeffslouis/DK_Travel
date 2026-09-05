"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV_LINKS, SITE } from "@/lib/nav";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div className="hidden bg-black text-cream-dark md:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2 text-xs tracking-wide">
          <div className="flex items-center gap-6">
            <a href={`tel:${SITE.phone}`} className="hover:text-gold">
              {SITE.phone}
            </a>
            <a href={`mailto:${SITE.email}`} className="hover:text-gold">
              {SITE.email}
            </a>
          </div>
          <p className="font-display italic text-gold">{SITE.tagline}</p>
        </div>
      </div>

      {/* Main nav */}
      <div className="border-b border-gold-dark/20 bg-black">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-display text-2xl font-bold tracking-wide text-white">
              Destination <span className="text-gold">Konpa</span>
            </span>
          </Link>

          <nav className="hidden lg:block">
            <ul className="flex items-center gap-7 text-xs font-semibold uppercase tracking-wide text-cream-dark">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Link
            href="/dk-travel-club"
            className="hidden rounded-full bg-gold px-6 py-2 text-xs font-semibold uppercase tracking-wide text-black transition-colors hover:bg-gold-light lg:inline-block"
          >
            Join DK Travel Club
          </Link>

          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex flex-col gap-1.5 lg:hidden"
          >
            <span className="h-0.5 w-6 bg-white" />
            <span className="h-0.5 w-6 bg-white" />
            <span className="h-0.5 w-6 bg-white" />
          </button>
        </div>

        {open && (
          <nav className="border-t border-gold-dark/20 bg-black lg:hidden">
            <ul className="flex flex-col gap-1 px-6 py-4 text-sm font-semibold uppercase tracking-wide text-cream-dark">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
