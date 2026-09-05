import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Button from "@/components/Button";
import { DESTINATIONS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Destinations | Destination Konpa",
  description: "Browse Caribbean destinations available through DK Travel Club.",
};

export default function DestinationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Destinations"
        title="Pick a destination that matches your credit."
        body="Your DK Travel Club savings aren't locked to one trip — browse destinations and apply your credit to whichever one fits when you're ready to book."
      />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DESTINATIONS.map((d) => (
            <div key={d.slug} className="overflow-hidden rounded-2xl border border-gold-dark/15 bg-white shadow-sm">
              <div className={`h-44 bg-gradient-to-br ${d.gradient}`} />
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-ink">{d.name}</h3>
                <p className="text-xs font-semibold uppercase tracking-wide text-gold-dark">{d.country}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{d.blurb}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-cream-dark p-10 text-center">
          <h2 className="font-display text-2xl font-bold text-ink">
            Package pricing & booking are coming to the new DK Shop.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-ink/70">
            We&apos;re rebuilding checkout for these destinations right now. In
            the meantime, join DK Travel Club to start saving, or contact us
            for current package pricing.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button href="/dk-travel-club" variant="gold">
              Join DK Travel Club
            </Button>
            <Button href="/contact" variant="outline">
              Contact Us
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
