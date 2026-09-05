import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section, { Eyebrow } from "@/components/Section";
import Button from "@/components/Button";
import { HOW_IT_WORKS, PERKS } from "@/lib/content";

export const metadata: Metadata = {
  title: "DK Travel Club | Destination Konpa",
  description: "Build a vacation savings plan with DK Travel Club and travel paid in advance.",
};

export default function DkTravelClubPage() {
  return (
    <>
      <PageHero
        eyebrow="DK Travel Club"
        title="Vacation, always paid in advance."
        body="Set your own savings plan, build travel credit at your pace, and apply it to the Caribbean destination of your choice — with no rush to spend it."
      >
        <div id="signup" className="mt-10 rounded-2xl border border-gold/40 bg-black/40 p-6 backdrop-blur">
          <p className="text-sm font-semibold uppercase tracking-wide text-gold">
            Membership signup is launching with our new DK Shop
          </p>
          <p className="mt-2 max-w-lg text-sm text-cream-dark/80">
            We&apos;re building online enrollment and plan management right
            now. Leave your details on the Contact page and we&apos;ll notify
            you the moment sign-ups open.
          </p>
          <Button href="/contact" variant="gold" className="mt-5">
            Get Notified
          </Button>
        </div>
      </PageHero>

      <Section>
        <Eyebrow>Member Perks</Eyebrow>
        <h2 className="font-display max-w-2xl text-3xl font-bold">
          Every plan comes with the same core benefits.
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PERKS.map((perk) => (
            <div key={perk.title} className="rounded-2xl border border-gold-dark/15 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-ink">{perk.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{perk.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-cream-dark">
        <Eyebrow>How It Works</Eyebrow>
        <h2 className="font-display max-w-2xl text-3xl font-bold">From first payment to first flight.</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {HOW_IT_WORKS.map((item) => (
            <div key={item.step}>
              <span className="font-display text-3xl font-bold text-gold">{item.step}</span>
              <h3 className="mt-3 text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
