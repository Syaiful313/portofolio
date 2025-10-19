import { NextResponse } from "next/server";

type Payload = {
  name?: string;
  email?: string;
  message?: string;
};

export async function POST(req: Request) {
  let data: Payload;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = (data.name || "").trim();
  const email = (data.email || "").trim();
  const message = (data.message || "").trim();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "All fields are required" }, { status: 400 });
  }

  const basicEmail = /.+@.+\..+/;
  if (!basicEmail.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const TO = process.env.CONTACT_TO;
  const rawFrom = (process.env.CONTACT_FROM || "onboarding@resend.dev").trim();
  const FROM = normalizeFrom(rawFrom);

  if (!RESEND_API_KEY || !TO) {
    return NextResponse.json(
      {
        error: "Email service not configured",
        missing: {
          RESEND_API_KEY: !RESEND_API_KEY,
          CONTACT_TO: !TO,
        },
      },
      { status: 500 },
    );
  }

  const subject = `New message from ${name}`;
  const text = `Name: ${name}\nEmail: ${email}\n\n${message}`;

  try {
    const resp = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM,
        to: [TO],
        reply_to: email,
        subject,
        text,
      }),
    });

    const payloadText = await resp.text();
    if (!resp.ok) {
      console.error("Resend error:", resp.status, payloadText);
      return NextResponse.json(
        { error: "Failed to send", detail: safeParse(payloadText) },
        { status: 502 },
      );
    }

    const dataOk = safeParse(payloadText);
    return NextResponse.json({ ok: true, id: dataOk?.id });
  } catch (e) {
    console.error("/api/contact unexpected error", e);
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
}

function safeParse(text: string) {
  try {
    return JSON.parse(text);
  } catch {
    return { raw: text } as any;
  }
}

function normalizeFrom(value: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const nameEmailRegex = /^[^<>]+<\s*[^\s@]+@[^\s@]+\.[^\s@]+\s*>$/;
  const v = value.replace(/[“”]/g, '"').trim();
  if (emailRegex.test(v) || nameEmailRegex.test(v)) return v;
  return "onboarding@resend.dev";
}

export async function GET() {
  const hasKey = !!process.env.RESEND_API_KEY;
  const hasTo = !!process.env.CONTACT_TO;
  const from = process.env.CONTACT_FROM || "Portfolio Contact <onboarding@resend.dev>";
  return NextResponse.json({ ready: hasKey && hasTo, hasKey, hasTo, from });
}
export const runtime = "nodejs";
