import { forms, type FormId } from "@/content/forms";
import { formatSubmission, validateForm, type FormValues } from "@/lib/forms";

/**
 * POST /api/applications — receives program applications and forwards them to the team.
 *
 * Delivery: set APPLICATIONS_WEBHOOK_URL (server-only env var) to any webhook that accepts JSON — an n8n,
 * Make or Zapier workflow, a Google Apps Script, a Slack incoming webhook, a CRM endpoint. Optionally set
 * APPLICATIONS_WEBHOOK_SECRET; it is sent as a Bearer token so the receiver can reject other callers.
 * Until the webhook is configured this route answers 503 `not_configured` and the form offers the
 * applicant an email fallback instead of pretending the application was received.
 */

const MAX_BODY_BYTES = 24_000;

function json(body: unknown, status: number) {
  return Response.json(body, { status, headers: { "Cache-Control": "no-store" } });
}

export async function POST(request: Request) {
  const length = Number(request.headers.get("content-length") ?? 0);
  if (length > MAX_BODY_BYTES) return json({ error: "too_large" }, 413);

  let payload: { form?: string; data?: FormValues; website_confirm?: string };
  try {
    const text = await request.text();
    if (text.length > MAX_BODY_BYTES) return json({ error: "too_large" }, 413);
    payload = JSON.parse(text);
  } catch {
    return json({ error: "invalid_json" }, 400);
  }

  const schema = payload.form && payload.form in forms ? forms[payload.form as FormId] : null;
  if (!schema || !payload.data || typeof payload.data !== "object") return json({ error: "unknown_form" }, 400);

  // Honeypot: real visitors never see or fill this field.
  if (payload.website_confirm) return json({ error: "rejected" }, 400);

  const { values, errors } = validateForm(schema, payload.data);
  if (Object.keys(errors).length > 0) return json({ error: "invalid", fields: errors }, 422);

  const webhook = process.env.APPLICATIONS_WEBHOOK_URL;
  if (!webhook) return json({ error: "not_configured" }, 503);

  const headers: Record<string, string> = { "Content-Type": "application/json" };
  if (process.env.APPLICATIONS_WEBHOOK_SECRET) headers.Authorization = `Bearer ${process.env.APPLICATIONS_WEBHOOK_SECRET}`;

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers,
      body: JSON.stringify({
        form: schema.id,
        title: schema.title,
        submittedAt: new Date().toISOString(),
        data: values,
        // Ready-to-read version for webhooks that post straight to email or chat.
        text: `${schema.title}\n\n${formatSubmission(schema, values)}`,
      }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) return json({ error: "delivery_failed" }, 502);
  } catch {
    return json({ error: "delivery_failed" }, 502);
  }

  return json({ ok: true }, 200);
}
