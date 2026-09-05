import { ReactNode } from "react";
import Container from "./Container";

export default function PageHero({
  eyebrow,
  title,
  body,
  children,
}: {
  eyebrow: string;
  title: string;
  body?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-gold-dark/30" />
      <Container className="relative py-20 md:py-28">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          {eyebrow}
        </p>
        <h1 className="font-display max-w-2xl text-4xl font-bold leading-tight md:text-5xl">
          {title}
        </h1>
        {body && (
          <p className="mt-5 max-w-xl text-sm text-cream-dark/90 md:text-base">
            {body}
          </p>
        )}
        {children}
      </Container>
    </section>
  );
}
