import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section, { Eyebrow } from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import { SITE } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Contact | Destination Konpa",
  description: "Get in touch with the Destination Konpa team.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We'd love to hear from you."
        body="Questions about your savings plan, a destination, or the Ambassador program? Reach out any time."
      />

      <Section>
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <Eyebrow>Send a Message</Eyebrow>
            <h2 className="font-display mb-6 text-2xl font-bold text-ink">Contact form</h2>
            <ContactForm />
          </div>

          <div>
            <Eyebrow>Reach Us Directly</Eyebrow>
            <h2 className="font-display mb-6 text-2xl font-bold text-ink">Contact details</h2>
            <ul className="space-y-4 text-sm text-ink/80">
              <li>
                <span className="block text-xs font-semibold uppercase tracking-wide text-gold-dark">
                  Phone
                </span>
                <a href={`tel:${SITE.phone}`} className="text-lg font-semibold text-ink hover:text-gold-dark">
                  {SITE.phone}
                </a>
              </li>
              <li>
                <span className="block text-xs font-semibold uppercase tracking-wide text-gold-dark">
                  Email
                </span>
                <a href={`mailto:${SITE.email}`} className="text-lg font-semibold text-ink hover:text-gold-dark">
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
