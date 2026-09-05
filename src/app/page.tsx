import Link from "next/link";
import Button from "@/components/Button";
import Section, { Eyebrow } from "@/components/Section";
import { DESTINATIONS, HOW_IT_WORKS, PERKS, TESTIMONIALS } from "@/lib/content";
import { SITE } from "@/lib/nav";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-black text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-gold-dark/30" />
        <div className="relative mx-auto flex max-w-6xl flex-col items-start px-6 py-28 md:py-36">
          <Eyebrow>
            <span className="text-gold">{SITE.tagline}</span>
          </Eyebrow>
          <h1 className="font-display max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            Build your own vacation savings plan — travel when{" "}
            <span className="text-gold">you&apos;re</span> ready.
          </h1>
          <p className="mt-6 max-w-xl text-base text-cream-dark/90 md:text-lg">
            DK Travel Club lets you save toward Caribbean getaways at your own
            pace. Pick a plan, build your credit, then choose your destination
            when the time is right.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/dk-travel-club" variant="gold">
              Join DK Travel Club
            </Button>
            <Button href="/destinations" variant="outline">
              Explore Destinations
            </Button>
          </div>
        </div>
      </section>

      {/* Perks strip */}
      <div className="border-y border-gold-dark/20 bg-cream-dark">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-8 text-center md:grid-cols-3 lg:grid-cols-6">
          {PERKS.map((perk) => (
            <div key={perk.title} className="text-xs font-semibold uppercase tracking-wide text-ink/80">
              {perk.title}
            </div>
          ))}
        </div>
      </div>

      {/* How it works */}
      <Section>
        <Eyebrow>How It Works</Eyebrow>
        <h2 className="font-display max-w-2xl text-3xl font-bold md:text-4xl">
          Four steps from first payment to first flight.
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {HOW_IT_WORKS.map((item) => (
            <div key={item.step} className="rounded-2xl border border-gold-dark/15 bg-white p-6 shadow-sm">
              <span className="font-display text-3xl font-bold text-gold">{item.step}</span>
              <h3 className="mt-3 text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Destinations */}
      <Section className="bg-cream-dark" id="Destinations">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>Where You Could Be Going</Eyebrow>
            <h2 className="font-display max-w-xl text-3xl font-bold md:text-4xl">
              Popular Caribbean destinations
            </h2>
          </div>
          <Link href="/destinations" className="text-sm font-semibold uppercase tracking-wide text-gold-dark hover:text-gold">
            View all destinations →
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DESTINATIONS.slice(0, 6).map((d) => (
            <div key={d.slug} className="group overflow-hidden rounded-2xl border border-gold-dark/15 bg-white shadow-sm">
              <div className={`h-40 bg-gradient-to-br ${d.gradient}`} />
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-ink">{d.name}</h3>
                <p className="text-xs font-semibold uppercase tracking-wide text-gold-dark">{d.country}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{d.blurb}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Membership + Ambassador teasers */}
      <Section>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl bg-black p-10 text-white">
            <Eyebrow>DK Travel Club</Eyebrow>
            <h3 className="font-display text-2xl font-bold">Your vacation, funded before you book it.</h3>
            <p className="mt-4 text-sm leading-relaxed text-cream-dark/80">
              Build a savings plan around your budget and get first access to
              new destinations, member pricing, and savings of up to $100 per
              package.
            </p>
            <Button href="/dk-travel-club" variant="gold" className="mt-8">
              Learn More
            </Button>
          </div>
          <div className="rounded-2xl bg-gold-dark p-10 text-white">
            <Eyebrow>
              <span className="text-black/70">DK Ambassador</span>
            </Eyebrow>
            <h3 className="font-display text-2xl font-bold text-black">Share DK, earn on every referral.</h3>
            <p className="mt-4 text-sm leading-relaxed text-black/80">
              Become a DK Ambassador and earn commission for every friend or
              family member you refer to DK Travel Club.
            </p>
            <Button href="/ambassador" variant="dark" className="mt-8">
              Become an Ambassador
            </Button>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="bg-cream-dark">
        <Eyebrow>What Members Say</Eyebrow>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <blockquote key={t.quote} className="rounded-2xl border border-gold-dark/15 bg-white p-6 text-sm leading-relaxed text-ink/80 shadow-sm">
              <p>&ldquo;{t.quote}&rdquo;</p>
              <footer className="mt-4 text-xs font-semibold uppercase tracking-wide text-gold-dark">
                {t.name}
              </footer>
            </blockquote>
          ))}
        </div>
      </Section>

      {/* CTA banner */}
      <Section className="bg-black text-white text-center">
        <h2 className="font-display text-3xl font-bold md:text-4xl">
          Ready to start saving for your next trip?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-cream-dark/80">
          Join DK Travel Club today and let your next Caribbean vacation pay
          for itself, one contribution at a time.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button href="/dk-travel-club" variant="gold">
            Join DK Travel Club
          </Button>
          <Button href="/contact" variant="outline">
            Talk to Us
          </Button>
        </div>
      </Section>
    </>
  );
}
