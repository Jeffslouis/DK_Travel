import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { FAQS } from "@/lib/content";

export const metadata: Metadata = {
  title: "FAQ | Destination Konpa",
  description: "Answers to common questions about DK Travel Club, savings plans, and the Ambassador program.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions"
        body="Everything you need to know about saving with DK Travel Club, using your credit, and becoming an Ambassador."
      />

      <Section id="read">
        <div className="mx-auto max-w-3xl divide-y divide-gold-dark/15">
          {FAQS.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink">
                {item.q}
                <span className="shrink-0 text-gold transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">{item.a}</p>
            </details>
          ))}
        </div>
      </Section>
    </>
  );
}
