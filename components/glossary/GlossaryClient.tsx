"use client";

import { useMemo, useState } from "react";
import type { GlossaryTerm } from "@/lib/content/types";

export default function GlossaryClient({ terms }: { terms: GlossaryTerm[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");

  const categories = useMemo(
    () => ["All", ...[...new Set(terms.map((t) => t.category))].sort()],
    [terms]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return terms
      .filter((t) => category === "All" || t.category === category)
      .filter(
        (t) =>
          !q ||
          t.transliteration.toLowerCase().includes(q) ||
          t.definition.toLowerCase().includes(q) ||
          t.arabicTerm.includes(query.trim())
      )
      .sort((a, b) => a.transliteration.localeCompare(b.transliteration));
  }, [terms, query, category]);

  // Group by first letter for the library-index feel
  const grouped = useMemo(() => {
    const map = new Map<string, GlossaryTerm[]>();
    for (const t of filtered) {
      const letter = t.transliteration[0].toUpperCase();
      map.set(letter, [...(map.get(letter) ?? []), t]);
    }
    return [...map.entries()];
  }, [filtered]);

  return (
    <div>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <input
          type="search"
          className="input sm:max-w-sm"
          placeholder="Search terms — e.g. tawheed, بدعة, decree…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search glossary"
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
        {filtered.length} {filtered.length === 1 ? "term" : "terms"}
      </p>

      {grouped.map(([letter, items]) => (
        <section key={letter} className="mt-10">
          <h2 className="border-b border-line pb-1.5 font-display text-lg font-semibold text-ink-faint">
            {letter}
          </h2>
          <dl className="mt-4 grid gap-3 sm:grid-cols-2">
            {items.map((term) => (
              <div key={term.id} className="card p-4">
                <dt className="flex items-baseline justify-between gap-3">
                  <span className="font-display text-[1rem] font-semibold">
                    {term.transliteration}
                  </span>
                  <span className="arabic-inline shrink-0 !text-[1.15rem] text-forest" dir="rtl" lang="ar">
                    {term.arabicTerm}
                  </span>
                </dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                  {term.definition}
                </dd>
                <dd className="mt-2 font-display text-[0.68rem] font-semibold uppercase tracking-wider text-ink-faint">
                  {term.category}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      ))}

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-ink-soft">
          No terms match your search. Try a different spelling — transliterations
          vary (e.g. “tawheed” / “tawhid”).
        </p>
      )}
    </div>
  );
}
