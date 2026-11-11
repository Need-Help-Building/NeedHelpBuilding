import type { FormField, FormSchema } from "@/content/forms";

/** Submitted values: strings for single fields, string arrays for checkbox groups. */
export type FormValues = Record<string, string | string[]>;
export type FormErrors = Record<string, string>;

const MAX: Record<FormField["type"], number> = {
  text: 120,
  email: 160,
  tel: 24,
  url: 300,
  select: 120,
  checkboxes: 120,
  textarea: 2000,
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Accepts "example.com" as well as full URLs; returns a normalised https URL or null. */
export function normaliseUrl(value: string): string | null {
  const candidate = /^https?:\/\//i.test(value) ? value : `https://${value}`;
  try {
    const url = new URL(candidate);
    return url.hostname.includes(".") ? url.toString() : null;
  } catch {
    return null;
  }
}

function checkField(field: FormField, raw: string | string[] | undefined): { value?: string | string[]; error?: string } {
  if (field.type === "checkboxes") {
    const list = (Array.isArray(raw) ? raw : raw ? [raw] : []).filter((v) => field.options?.includes(v));
    if (field.required && list.length === 0) return { error: "Choose at least one option." };
    return { value: list };
  }

  const value = (Array.isArray(raw) ? raw[0] : raw ?? "").trim();
  if (!value) return field.required ? { error: "This field is required." } : { value: "" };
  if (value.length > MAX[field.type]) return { error: `Please keep this under ${MAX[field.type]} characters.` };

  switch (field.type) {
    case "email":
      return EMAIL.test(value) ? { value } : { error: "Enter a valid email address." };
    case "tel": {
      const digits = value.replace(/[\s\-().]/g, "");
      return /^\+?\d{7,15}$/.test(digits) ? { value } : { error: "Enter a valid phone number, including the country code." };
    }
    case "url": {
      const url = normaliseUrl(value);
      return url ? { value: url } : { error: "Enter a valid link, for example example.com." };
    }
    case "select":
      return field.options?.includes(value) ? { value } : { error: "Choose one of the options." };
    default:
      return { value };
  }
}

/** Validates every field of a schema. Used in the browser for instant feedback and again on the server. */
export function validateForm(schema: FormSchema, input: FormValues): { values: FormValues; errors: FormErrors } {
  const values: FormValues = {};
  const errors: FormErrors = {};
  for (const field of schema.fields) {
    const result = checkField(field, input[field.name]);
    if (result.error) errors[field.name] = result.error;
    else if (result.value !== undefined) values[field.name] = result.value;
  }
  return { values, errors };
}

/** Plain-text rendering of an application ("Label: value" lines), for the email fallback. */
export function formatSubmission(schema: FormSchema, values: FormValues): string {
  return schema.fields
    .map((f) => {
      const v = values[f.name];
      const text = Array.isArray(v) ? v.join(", ") : v;
      return text ? `${/[?:]$/.test(f.label) ? f.label : `${f.label}:`}\n${text}` : null;
    })
    .filter(Boolean)
    .join("\n\n");
}
