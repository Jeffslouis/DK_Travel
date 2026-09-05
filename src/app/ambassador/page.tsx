import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section, { Eyebrow } from "@/components/Section";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Ambassador Program | Destination Konpa",
  description: "Earn commission by referring friends and family to DK Travel Club.",
};

const STEPS = [
  {
    title: "Apply",
    body: "Sign up for the DK Ambassador program — it's free to join.",
  },
  {
    title: "Share your link",
    body: "Get a personal referral link and share it with your network.",
  },
  {
    title: "Earn commission",
    body: "Earn a commission every time someone joins DK Travel Club through your link.",
  },
  {
    title: "Track it all",
    body: "See referrals and payouts in your Ambassador dashboard.",
  },
];

export default function AmbassadorPage() {
  return (
    <>
      <PageHero
        eyebrow="DK Ambassador"
        title="Share DK Travel Club, earn on every referral."
        body="Turn word-of-mouth into income. Ambassadors earn commission for every new member who joins through their referral link."
      >
        <div className="mt-10 rounded-2xl border border-gold/40 bg-black/40 p-6 backdrop-blur">
          <p className="text-sm font-semibold uppercase tracking-wide text-gold">
            The Ambassador dashboard is being rebuilt
          </p>
          <p className="mt-2 max-w-lg text-sm text-cream-dark/80">
            Referral tracking and payouts are moving to the new site. Register
            your interest and we&apos;ll reach out as soon as applications
            reopen.
          </p>
          <Button href="/contact" variant="gold" className="mt-5">
            Register Interest
          </Button>
        </div>
      </PageHero>

      <Section>
        <Eyebrow>How It Works</Eyebrow>
        <h2 className="font-display max-w-2xl text-3xl font-bold">Four steps to start earning.</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <div key={s.title}>
              <span className="font-display text-3xl font-bold text-gold">{`0${i + 1}`}</span>
              <h3 className="mt-3 text-lg font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
