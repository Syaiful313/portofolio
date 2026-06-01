import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(80, "Name is too long"),
  email: z
    .string()
    .trim()
    .email("Invalid email")
    .max(120, "Email is too long"),
  message: z
    .string()
    .trim()
    .min(1, "Message is required")
    .max(2000, "Message is too long"),
});

const RESEND_TIMEOUT_MS = 10_000;

export async function POST(req: Request) {
  let payload: unknown;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "Invalid input",
        fields: parsed.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  }

  const { name, email, message } = parsed.data;
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

  const subject = `New message from ${sanitizeSubject(name)}`;
  const text = `Name: ${name}\nEmail: ${email}\n\n${message}`;
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), RESEND_TIMEOUT_MS);

  try {
    const resp = await fetch("https://api.resend.com/emails", {
      method: "POST",
      signal: controller.signal,
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
    if (e instanceof Error && e.name === "AbortError") {
      return NextResponse.json({ error: "Email service timeout" }, { status: 504 });
    }

    console.error("/api/contact unexpected error", e);
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  } finally {
    clearTimeout(timeoutId);
  }
}

function safeParse(text: string): Record<string, unknown> {
  try {
    return JSON.parse(text);
  } catch {
    return { raw: text };
  }
}

function normalizeFrom(value: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const nameEmailRegex = /^[^<>]+<\s*[^\s@]+@[^\s@]+\.[^\s@]+\s*>$/;
  const v = value.replace(/[“”]/g, '"').trim();
  if (emailRegex.test(v) || nameEmailRegex.test(v)) return v;
  return "onboarding@resend.dev";
}

function sanitizeSubject(value: string) {
  return value.replace(/[\r\n]+/g, " ").slice(0, 80);
}

export async function GET() {
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const hasKey = !!process.env.RESEND_API_KEY;
  const hasTo = !!process.env.CONTACT_TO;
  const from = process.env.CONTACT_FROM || "Portfolio Contact <onboarding@resend.dev>";
  return NextResponse.json({ ready: hasKey && hasTo, hasKey, hasTo, from });
}
export const runtime = "nodejs";
