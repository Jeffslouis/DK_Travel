import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Button from "@/components/Button";
import { DESTINATIONS } from "@/lib/content";

export const metadata: Metadata = {
  title: "DK Shop | Destination Konpa",
  description: "Browse Caribbean travel packages from Destination Konpa.",
};

export default function ShopPage() {
  return (
    <>
      <PageHero
        eyebrow="DK Shop"
        title="Packages and merchandise, coming soon."
        body="We're rebuilding checkout so you can browse packages, apply your DK Travel Club credit, and pay securely online. Here's a preview of what's coming."
      />

      <Section id="shop">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DESTINATIONS.map((d) => (
            <div key={d.slug} className="overflow-hidden rounded-2xl border border-gold-dark/15 bg-white shadow-sm">
              <div className={`h-40 bg-gradient-to-br ${d.gradient}`} />
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-lg font-semibold text-ink">{d.name} Package</h3>
                  <span className="rounded-full bg-cream-dark px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-gold-dark">
                    Coming Soon
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{d.blurb}</p>
                <button
                  disabled
                  className="mt-5 w-full cursor-not-allowed rounded-full border border-gold-dark/30 px-6 py-2 text-xs font-semibold uppercase tracking-wide text-ink/40"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-cream-dark p-10 text-center">
          <h2 className="font-display text-2xl font-bold text-ink">
            Want current pricing before checkout is live?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-ink/70">
            Reach out and our team will help you book directly while online
            checkout is in progress.
          </p>
          <Button href="/contact" variant="gold" className="mt-6">
            Contact Us
          </Button>
        </div>
      </Section>
    </>
  );
}
