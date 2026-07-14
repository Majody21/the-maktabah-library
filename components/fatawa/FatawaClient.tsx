"use client";

import { useMemo, useState } from "react";
import type { Fatwa } from "@/lib/content/types";

export default function FatawaClient({ fatawa }: { fatawa: Fatwa[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [openId, setOpenId] = useState<string | null>(null);

  const categories = useMemo(
    () => ["All", ...[...new Set(fatawa.map((f) => f.category))].sort()],
    [fatawa]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return fatawa
      .filter((f) => category === "All" || f.category === category)
      .filter(
        (f) =>
          !q ||
          f.topic.toLowerCase().includes(q) ||
          f.question.toLowerCase().includes(q) ||
          f.answerText.toLowerCase().includes(q) ||
          f.scholar.toLowerCase().includes(q)
      );
  }, [fatawa, query, category]);

  return (
    <div>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <input
          type="search"
          className="input sm:max-w-sm"
          placeholder="Search fatawa — e.g. amulet, fasting, grave…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search fatawa"
        />
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              className={`rounded border px-3.5 py-1.5 font-display text-[0.85rem] font-semibold transition-colors ${
                category === c
                  ? "border-forest bg-forest-fill text-on-forest"
                  : "border-line-strong text-ink-soft hover:border-forest-soft hover:text-forest"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-4 text-[0.92rem] text-ink-faint">
        {filtered.length} {filtered.length === 1 ? "verdict" : "verdicts"}
      </p>

      <ul className="mt-6 space-y-3">
        {filtered.map((f) => {
          const open = openId === f.id;
          return (
            <li key={f.id} className="card overflow-hidden">
              <button
                type="button"
                onClick={() => setOpenId(open ? null : f.id)}
                aria-expanded={open}
                className="flex w-full items-start justify-between gap-4 p-5 text-left"
              >
                <div>
                  <p className="font-display text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-ink-faint">
                    {f.category} · {f.topic}
                  </p>
                  <h2 className="mt-1.5 font-display text-[1rem] font-semibold leading-snug">
                    {f.question}
                  </h2>
                </div>
                <span
                  className={`mt-1 shrink-0 text-forest transition-transform ${open ? "rotate-45" : ""}`}
                  aria-hidden="true"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </button>
              {open && (
                <div className="border-t border-line px-5 pb-5 pt-4">
                  <p className="text-[0.95rem] leading-relaxed">{f.answerText}</p>
                  <p className="mt-4 text-sm font-semibold text-forest">
                    — {f.scholar}
                  </p>
                  <p className="mt-1 text-xs italic text-ink-faint">
                    {f.sourceReference}
                  </p>
                </div>
              )}
            </li>
          );
        })}
      </ul>

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-ink-soft">
          No fatawa match your search.
        </p>
      )}
    </div>
  );
}
