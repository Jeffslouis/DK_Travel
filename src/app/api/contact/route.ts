import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
};

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are all required." },
      { status: 400 }
    );
  }

  // TODO: wire this up to a real email provider (e.g. Resend, SendGrid,
  // Postmark) once an API key is available. For now, the submission is
  // logged server-side only — no email is actually sent.
  console.log("[contact] new message", { name, email, message });

  return NextResponse.json({ ok: true });
}
