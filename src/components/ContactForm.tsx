"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-gold-dark/20 bg-cream-dark p-8 text-center">
        <h3 className="font-display text-xl font-semibold text-ink">Message received</h3>
        <p className="mt-2 text-sm text-ink/70">
          Thanks for reaching out — our team will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-1 block text-xs font-semibold uppercase tracking-wide text-ink/70">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          className="w-full rounded-lg border border-gold-dark/25 bg-white px-4 py-3 text-sm text-ink outline-none focus:border-gold"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1 block text-xs font-semibold uppercase tracking-wide text-ink/70">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-lg border border-gold-dark/25 bg-white px-4 py-3 text-sm text-ink outline-none focus:border-gold"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-xs font-semibold uppercase tracking-wide text-ink/70">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-lg border border-gold-dark/25 bg-white px-4 py-3 text-sm text-ink outline-none focus:border-gold"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center rounded-full bg-gold px-7 py-3 text-sm font-semibold uppercase tracking-wide text-black transition-colors hover:bg-gold-light disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong sending your message. Please try again or email
          us directly.
        </p>
      )}
    </form>
  );
}
