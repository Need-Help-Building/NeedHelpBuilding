"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Search, X } from "lucide-react";
import { departments, employmentTypes, roles, workModes, type Role } from "@/content/careers";
import { cn } from "@/lib/cn";

type Filters = { department: string; type: string; mode: string; q: string };
const EMPTY: Filters = { department: "All", type: "All", mode: "All", q: "" };

function Chips({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <fieldset>
      <legend className="t-arcade text-[11px] text-muted">{label}</legend>
      <div className="mt-2.5 flex flex-wrap gap-1.5">
        {["All", ...options].map((o) => {
          const on = value === o;
          return (
            <button
              key={o}
              type="button"
              aria-pressed={on}
              onClick={() => onChange(o)}
              className={cn(
                "h-9 rounded-full border px-3.5 text-[13.5px] transition-colors",
                on ? "border-ink bg-ink text-ivory" : "border-ink/15 bg-white text-ink/80 hover:border-ink/40",
              )}
            >
              {o}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

function RoleRow({ role }: { role: Role }) {
  return (
    <li>
      <Link
        href={`/careers/${role.slug}`}
        className="pixel-corners group grid gap-3 rounded-2xl border border-ink/10 bg-white p-5 transition-colors hover:border-ink sm:grid-cols-12 sm:items-center sm:gap-6 sm:p-6"
      >
        <div className="sm:col-span-6">
          <p className="t-arcade text-[11px] text-muted">{role.department}</p>
          <h3 className="mt-1.5 text-[18px] leading-snug font-semibold tracking-[-0.02em] group-hover:underline">{role.title}</h3>
          <p className="mt-1.5 text-[14px] leading-snug text-muted">{role.summary}</p>
        </div>
        <ul className="flex flex-wrap gap-1.5 sm:col-span-5" aria-label="Role details">
          {[role.type, `${role.workMode} · ${role.location}`, role.experience].map((t) => (
            <li key={t} className="rounded-full bg-ivory-2 px-2.5 py-1 text-[12.5px] text-ink/80">
              {t}
            </li>
          ))}
        </ul>
        <span className="inline-flex items-center gap-1.5 text-[14px] font-medium sm:col-span-1 sm:justify-end">
          <span className="sm:sr-only">View role</span>
          <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </Link>
    </li>
  );
}

/** Filterable list of open roles (department, type, work mode, keyword). */
export default function RoleBoard() {
  const [f, setF] = useState<Filters>(EMPTY);
  const set = (k: keyof Filters) => (v: string) => setF((p) => ({ ...p, [k]: v }));

  const results = useMemo(() => {
    const q = f.q.trim().toLowerCase();
    return roles.filter(
      (r) =>
        (f.department === "All" || r.department === f.department) &&
        (f.type === "All" || r.type === f.type) &&
        (f.mode === "All" || r.workMode === f.mode) &&
        (!q || `${r.title} ${r.summary} ${r.department} ${r.location}`.toLowerCase().includes(q)),
    );
  }, [f]);

  const active = f.department !== "All" || f.type !== "All" || f.mode !== "All" || f.q !== "";

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
      <aside className="space-y-6 lg:col-span-4" aria-label="Filter roles">
        <label className="relative block">
          <span className="sr-only">Search roles</span>
          <Search aria-hidden className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted" />
          <input
            type="search"
            value={f.q}
            onChange={(e) => set("q")(e.target.value)}
            placeholder="Search roles"
            className="h-12 w-full rounded-full border border-ink/15 bg-white pr-4 pl-11 text-[15px] outline-none focus-visible:border-ink focus-visible:ring-2 focus-visible:ring-sun"
          />
        </label>
        <Chips label="Team" options={departments} value={f.department} onChange={set("department")} />
        <Chips label="Type" options={employmentTypes} value={f.type} onChange={set("type")} />
        <Chips label="Work mode" options={workModes} value={f.mode} onChange={set("mode")} />
        {active && (
          <button type="button" onClick={() => setF(EMPTY)} className="inline-flex items-center gap-1.5 text-[13.5px] font-medium underline underline-offset-4">
            <X aria-hidden className="size-3.5" /> Clear filters
          </button>
        )}
      </aside>

      <div className="lg:col-span-8">
        <p className="t-arcade text-[11px] text-muted" aria-live="polite">
          {results.length} {results.length === 1 ? "role" : "roles"}
        </p>
        {results.length > 0 ? (
          <ul className="mt-3 space-y-3">
            {results.map((r) => (
              <RoleRow key={r.slug} role={r} />
            ))}
          </ul>
        ) : (
          <div className="mt-3 rounded-2xl border border-dashed border-ink/20 p-8 text-center">
            <p className="text-[16px] font-semibold">No roles match those filters.</p>
            <p className="mt-2 text-[14.5px] text-muted">
              Try clearing a filter, or send an open application below. We shape roles around strong people.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
