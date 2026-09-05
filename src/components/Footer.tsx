import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/nav";

export default function Footer() {
  return (
    <footer className="bg-black text-cream-dark">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <span className="font-display text-2xl font-bold text-white">
            Destination <span className="text-gold">Konpa</span>
          </span>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream-dark/80">
            Caribbean travel, built around the rhythm of Konpa. Save at your own
            pace, then pick your destination when you&apos;re ready to go.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gold">
            Explore
          </h3>
          <ul className="space-y-2 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gold">
            Contact
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href={`tel:${SITE.phone}`} className="hover:text-gold">
                {SITE.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="hover:text-gold">
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-6 text-center text-xs text-cream-dark/60">
        © {new Date().getFullYear()} Destination Konpa. All rights reserved.
      </div>
    </footer>
  );
}
