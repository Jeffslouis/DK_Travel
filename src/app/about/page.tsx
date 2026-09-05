import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section, { Eyebrow } from "@/components/Section";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "About | Destination Konpa",
  description:
    "Destination Konpa connects the Caribbean diaspora to home through affordable, member-funded travel.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Destination Konpa"
        title="Travel built around community, culture, and Konpa."
        body="We started Destination Konpa to make Caribbean travel easier to plan for — and to keep the diaspora connected to the music and culture that brought us together in the first place."
      />

      <Section>
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <Eyebrow>Our Story</Eyebrow>
            <h2 className="font-display text-3xl font-bold">
              From Konpa events to a travel club.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink/70">
              Destination Konpa grew out of a simple idea: the same community
              that fills a dance floor for Konpa music should be able to fill
              a beach in Haiti, Jamaica, or the Dominican Republic without
              draining a bank account to get there. So we built a travel club
              where members save a little at a time and cash it in for a real
              vacation.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink/70">
              Since 2007, that&apos;s meant helping members plan trips around
              their budget instead of the other way around — and giving our
              most active members a way to earn by sharing DK with friends and
              family through the Ambassador program.
            </p>
          </div>
          <div>
            <Eyebrow>What We Believe</Eyebrow>
            <h2 className="font-display text-3xl font-bold">Our values</h2>
            <ul className="mt-4 space-y-4 text-sm leading-relaxed text-ink/70">
              <li>
                <span className="font-semibold text-ink">
                  Vacation shouldn&apos;t be a financial surprise.
                </span>{" "}
                Save first, travel with a paid-in-advance balance.
              </li>
              <li>
                <span className="font-semibold text-ink">
                  Flexibility over pressure.
                </span>{" "}
                Pause your plan, change your destination, use your credit on
                your own timeline.
              </li>
              <li>
                <span className="font-semibold text-ink">
                  Community pays it forward.
                </span>{" "}
                Ambassadors earn for growing the community that grows with
                them.
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section className="bg-black text-center text-white">
        <h2 className="font-display text-3xl font-bold">
          Ready to start your own savings plan?
        </h2>
        <div className="mt-8 flex justify-center gap-4">
          <Button href="/dk-travel-club" variant="gold">
            Join DK Travel Club
          </Button>
          <Button href="/contact" variant="outline">
            Contact Us
          </Button>
        </div>
      </Section>
    </>
  );
}
