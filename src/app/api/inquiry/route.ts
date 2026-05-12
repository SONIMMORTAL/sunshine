import { NextResponse } from "next/server";

/**
 * Tour-inquiry route handler. The body is currently logged server-side and
 * acknowledged with `{ ok: true }`.
 *
 * TODO (owner): wire this up to a real delivery service before launch.
 *   Recommended options:
 *     - Resend: https://resend.com (transactional email + React Email)
 *     - Formspree: https://formspree.io (zero-code form provider)
 *     - Postmark / Mailgun
 *   Add the corresponding API key to `.env.local` and replace the
 *   `console.log` below with the SDK call.
 */

interface InquiryPayload {
  parentName: string;
  email: string;
  phone: string;
  childAge: string;
  preferredTour: string;
  message: string;
}

const MAX_BODY = 8 * 1024;

function sanitize(input: unknown): string {
  return typeof input === "string" ? input.trim().slice(0, 1000) : "";
}

function isValid(payload: Partial<InquiryPayload>): payload is InquiryPayload {
  return Boolean(
    payload.parentName &&
      payload.email &&
      payload.phone &&
      /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(payload.email),
  );
}

export async function POST(request: Request) {
  try {
    const contentLength = Number(request.headers.get("content-length") ?? "0");
    if (contentLength > MAX_BODY) {
      return NextResponse.json(
        { ok: false, error: "Payload too large." },
        { status: 413 },
      );
    }

    const raw = (await request.json()) as Partial<InquiryPayload> | null;
    if (!raw) {
      return NextResponse.json(
        { ok: false, error: "Empty body." },
        { status: 400 },
      );
    }

    const payload: Partial<InquiryPayload> = {
      parentName: sanitize(raw.parentName),
      email: sanitize(raw.email),
      phone: sanitize(raw.phone),
      childAge: sanitize(raw.childAge),
      preferredTour: sanitize(raw.preferredTour),
      message: sanitize(raw.message),
    };

    if (!isValid(payload)) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "Please share at least your name, a valid email, and a phone number so we can reach you.",
        },
        { status: 422 },
      );
    }

    // TODO: replace this stub with Resend / Formspree / etc.
    console.log("[Sunshine inquiry]", payload);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[Sunshine inquiry] failed", error);
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please call (718) 404-6909." },
      { status: 500 },
    );
  }
}

export function GET() {
  return NextResponse.json(
    { ok: false, error: "Method not allowed." },
    { status: 405, headers: { Allow: "POST" } },
  );
}
