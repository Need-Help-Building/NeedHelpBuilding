"use client";

import { useId, useRef, useState, type FormEvent } from "react";
import { ArrowRight, Check, Loader2, Mail } from "lucide-react";
import { forms, type FormField, type FormId } from "@/content/forms";
import { mailto, site, whatsapp } from "@/content/site";
import { formatSubmission, validateForm, type FormErrors, type FormValues } from "@/lib/forms";
import { cn } from "@/lib/cn";

type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success"; email: string }
  /** Online delivery isn't available (not configured or failed): hand the application off by email/WhatsApp. */
  | { kind: "handoff"; reason: "not_configured" | "failed"; values: FormValues };

const inputBase =
  "w-full rounded-xl border bg-white px-4 text-[15px] text-ink placeholder:text-faint transition-colors outline-none focus-visible:border-ink focus-visible:ring-2 focus-visible:ring-sun focus-visible:outline-none";

function readValues(form: HTMLFormElement, fields: FormField[]): FormValues {
  const data = new FormData(form);
  const values: FormValues = {};
  for (const f of fields) {
    values[f.name] = f.type === "checkboxes" ? data.getAll(f.name).map(String) : String(data.get(f.name) ?? "");
  }
  return values;
}

function Field({ field, error, formKey }: { field: FormField; error?: string; formKey: string }) {
  const id = `${formKey}-${field.name}`;
  const errorId = `${id}-error`;
  const hintId = `${id}-hint`;
  const describedBy = [field.hint ? hintId : null, error ? errorId : null].filter(Boolean).join(" ") || undefined;
  const wide = field.wide || field.type === "textarea" || field.type === "checkboxes";

  const label = (
    <>
      {field.label}
      {field.required ? (
        <span aria-hidden className="text-muted">
          {" "}
          *
        </span>
      ) : (
        <span className="font-normal text-muted"> (optional)</span>
      )}
    </>
  );

  const meta = (
    <>
      {field.hint && (
        <p id={hintId} className="mt-1.5 text-[13px] leading-snug text-muted">
          {field.hint}
        </p>
      )}
      {error && (
        <p id={errorId} className="mt-1.5 text-[13px] font-medium text-[#b42318]">
          {error}
        </p>
      )}
    </>
  );

  if (field.type === "checkboxes") {
    return (
      <fieldset className={cn(wide && "sm:col-span-2")} aria-describedby={describedBy}>
        <legend className="text-[14px] font-medium text-ink">{label}</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {field.options?.map((option) => (
            <label key={option} className="relative cursor-pointer">
              <input type="checkbox" name={field.name} value={option} className="peer sr-only" aria-invalid={!!error} />
              <span
                className={cn(
                  "inline-flex items-center gap-2 rounded-full border bg-white px-3.5 py-2 text-[14px] transition-colors",
                  "peer-checked:border-ink peer-checked:bg-ink peer-checked:text-ivory",
                  "peer-focus-visible:ring-2 peer-focus-visible:ring-sun peer-focus-visible:ring-offset-2",
                  error ? "border-[#b42318]/60" : "border-ink/15 hover:border-ink/40",
                )}
              >
                {option}
              </span>
            </label>
          ))}
        </div>
        {meta}
      </fieldset>
    );
  }

  const common = {
    id,
    name: field.name,
    required: field.required,
    "aria-invalid": !!error,
    "aria-describedby": describedBy,
    autoComplete: field.autoComplete,
    placeholder: field.placeholder,
    className: cn(inputBase, error ? "border-[#b42318]/70" : "border-ink/15 hover:border-ink/35"),
  };

  return (
    <div className={cn(wide && "sm:col-span-2")}>
      <label htmlFor={id} className="block text-[14px] font-medium text-ink">
        {label}
      </label>
      <div className="mt-2">
        {field.type === "textarea" ? (
          <textarea {...common} rows={4} className={cn(common.className, "min-h-28 resize-y py-3 leading-relaxed")} />
        ) : field.type === "select" ? (
          <select {...common} defaultValue="" className={cn(common.className, "h-12 appearance-none bg-[length:16px] bg-[right_1rem_center] bg-no-repeat pr-10 [background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23171717' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")]")}>
            <option value="" disabled>
              Select…
            </option>
            {field.options?.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        ) : (
          <input
            {...common}
            type={field.type === "url" ? "text" : field.type}
            inputMode={field.type === "url" ? "url" : field.type === "tel" ? "tel" : undefined}
            className={cn(common.className, "h-12")}
          />
        )}
      </div>
      {meta}
    </div>
  );
}

/** Program application form. Submits to /api/applications; never shows success unless the server confirms it. */
export default function ApplicationForm({ formId, className }: { formId: FormId; className?: string }) {
  const schema = forms[formId];
  const formKey = useId().replace(/:/g, "");
  const formRef = useRef<HTMLFormElement>(null);
  const summaryRef = useRef<HTMLDivElement>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [serverMessage, setServerMessage] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const raw = readValues(form, schema.fields);
    const { values, errors: found } = validateForm(schema, raw);
    setErrors(found);
    setServerMessage(null);

    if (Object.keys(found).length > 0) {
      const first = schema.fields.find((f) => found[f.name]);
      const el = first && form.querySelector<HTMLElement>(`[name="${first.name}"]`);
      el?.focus();
      return;
    }

    setStatus({ kind: "submitting" });
    const honeypot = String(new FormData(form).get("website_confirm") ?? "");
    try {
      const res = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ form: schema.id, data: values, website_confirm: honeypot }),
      });
      if (res.ok) {
        setStatus({ kind: "success", email: String(values.email ?? "") });
        return;
      }
      const body = (await res.json().catch(() => ({}))) as { error?: string; fields?: FormErrors };
      if (res.status === 422 && body.fields) {
        setErrors(body.fields);
        setStatus({ kind: "idle" });
        setServerMessage("Please check the highlighted fields.");
        return;
      }
      setStatus({ kind: "handoff", reason: body.error === "not_configured" ? "not_configured" : "failed", values });
    } catch {
      setStatus({ kind: "handoff", reason: "failed", values });
    }
    requestAnimationFrame(() => summaryRef.current?.focus());
  }

  if (status.kind === "success") {
    return (
      <div role="status" className={cn("rounded-3xl border border-ink/12 bg-white p-8 sm:p-10", className)}>
        <span className="grid size-12 place-items-center rounded-full bg-sun">
          <Check aria-hidden className="size-6" />
        </span>
        <p className="mt-6 t-h3">Application received.</p>
        <p className="mt-3 max-w-lg text-[15.5px] leading-relaxed text-muted">
          Thank you. A member of the NHB team will review it and reply
          {status.email ? (
            <>
              {" "}
              at <span className="font-medium text-ink">{status.email}</span>
            </>
          ) : null}
          . If it&apos;s urgent, you can also reach us on WhatsApp at {site.phone.display}.
        </p>
      </div>
    );
  }

  const errorCount = Object.keys(errors).length;
  const submitting = status.kind === "submitting";

  return (
    <div className={className}>
      {status.kind === "handoff" && (
        <div
          ref={summaryRef}
          tabIndex={-1}
          role="alert"
          className="mb-8 rounded-2xl border border-ink bg-sun/90 p-6 outline-none sm:p-7"
        >
          <p className="text-[17px] font-semibold tracking-[-0.02em]">
            {status.reason === "not_configured"
              ? "One last step: send your application to us."
              : "We couldn't submit your application online just now."}
          </p>
          <p className="mt-2 text-[14.5px] leading-relaxed text-ink/80">
            It hasn&apos;t reached us yet. Choose email or WhatsApp and your application opens pre-filled with your answers,
            addressed to {site.email}. Just press send.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={mailto(schema.emailSubject, formatSubmission(schema, status.values))}
              className="inline-flex h-12 items-center gap-2 rounded-full bg-ink px-5 text-sm font-medium text-ivory transition-colors hover:bg-white hover:text-ink"
            >
              <Mail aria-hidden className="size-4" /> Send by email
            </a>
            <a
              href={whatsapp(`${schema.title}\n\n${formatSubmission(schema, status.values)}`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-ink px-5 text-sm font-medium transition-colors hover:bg-ink hover:text-ivory"
            >
              Send on WhatsApp
            </a>
            {status.reason === "failed" && (
              <button
                type="button"
                onClick={() => formRef.current?.requestSubmit()}
                className="inline-flex h-12 items-center px-3 text-sm font-medium underline underline-offset-4"
              >
                Try again
              </button>
            )}
          </div>
        </div>
      )}

      <form ref={formRef} noValidate onSubmit={onSubmit} aria-label={schema.title}>
        {(errorCount > 0 || serverMessage) && (
          <p role="alert" className="mb-6 rounded-xl border border-[#b42318]/30 bg-[#fdf2f1] px-4 py-3 text-[14px] text-[#912018]">
            {serverMessage ?? `Please check ${errorCount === 1 ? "the highlighted field" : `the ${errorCount} highlighted fields`}.`}
          </p>
        )}

        <div className="grid gap-x-5 gap-y-6 sm:grid-cols-2">
          {schema.fields.map((field) => (
            <Field key={field.name} field={field} error={errors[field.name]} formKey={formKey} />
          ))}
        </div>

        {/* Honeypot for bots; hidden from people and assistive tech. */}
        <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
          <label>
            Leave this empty
            <input type="text" name="website_confirm" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4 border-t border-ink/12 pt-6">
          <button
            type="submit"
            disabled={submitting}
            className="group/btn inline-flex h-14 items-center gap-3 rounded-full bg-ink pr-2.5 pl-7 text-[15px] font-medium text-ivory transition-colors duration-300 hover:bg-sun hover:text-ink disabled:cursor-wait disabled:opacity-70"
          >
            <span>{submitting ? "Sending…" : schema.submitLabel}</span>
            <span aria-hidden className="grid size-9 place-items-center rounded-full bg-sun text-ink transition-colors group-hover/btn:bg-ink group-hover/btn:text-sun">
              {submitting ? <Loader2 className="size-4 animate-spin" /> : <ArrowRight className="size-4" />}
            </span>
          </button>
          <p className="max-w-sm text-[13px] leading-snug text-muted">
            We use your details only to review this application and contact you about it.
          </p>
        </div>
      </form>
    </div>
  );
}
