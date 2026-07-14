"use client";

import { useMemo, useState } from "react";
import type { Department, Resource } from "@/lib/content/types";

const TYPE_LABEL: Record<Resource["type"], string> = {
  book: "Book",
  video: "Video",
  website: "Website",
};

/** Real cover image when provided; otherwise a styled book-cover placeholder. */
function BookCover({ resource }: { resource: Resource }) {
  if (resource.coverUrl) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={resource.coverUrl}
        alt={`Cover of ${resource.title}`}
        className="h-28 w-20 shrink-0 rounded-sm border border-line object-cover"
      />
    );
  }
  return (
    <div
      aria-hidden="true"
      className="flex h-28 w-20 shrink-0 flex-col justify-between rounded-sm border border-forest-strong/30 bg-forest-fill p-2 text-on-forest shadow-sm"
    >
      <span className="block h-px w-full bg-gold-bright/70" />
      <span className="font-display text-[0.55rem] font-semibold leading-snug">
        {resource.title.length > 60
          ? resource.title.slice(0, 57) + "…"
          : resource.title}
      </span>
      <span className="block truncate text-[0.5rem] opacity-75">
        {resource.author}
      </span>
    </div>
  );
}

export default function ResourcesClient({
  resources,
  departments,
}: {
  resources: Resource[];
  departments: Department[];
}) {
  const [deptFilter, setDeptFilter] = useState<string>("all");

  const deptName = (id: string | null) =>
    departments.find((d) => d.id === id)?.name ?? "General";

  const filtered = useMemo(
    () =>
      resources.filter((r) => {
        if (deptFilter === "all") return r.departmentId !== null;
        return r.departmentId === deptFilter;
      }),
    [resources, deptFilter]
  );

  const buyLinks = resources.filter((r) => r.departmentId === null);

  const grouped = useMemo(() => {
    const map = new Map<string, Resource[]>();
    for (const r of filtered) {
      const key = r.departmentId ?? "general";
      map.set(key, [...(map.get(key) ?? []), r]);
    }
    const order = departments.map((d) => d.id);
    return [...map.entries()].sort(
      (a, b) => order.indexOf(a[0]) - order.indexOf(b[0])
    );
  }, [filtered, departments]);

  const filterOptions = [
    { id: "all", name: "All departments" },
    ...departments.filter((d) => resources.some((r) => r.departmentId === d.id)),
  ];

  return (
    <div>
      <div className="mt-8 flex flex-wrap gap-2">
        {filterOptions.map((d) => (
          <button
            key={d.id}
            type="button"
            onClick={() => setDeptFilter(d.id)}
            className={`rounded border px-3.5 py-1.5 font-display text-[0.85rem] font-semibold transition-colors ${
              deptFilter === d.id
                ? "border-forest bg-forest-fill text-on-forest"
                : "border-line-strong text-ink-soft hover:border-forest-soft hover:text-forest"
            }`}
          >
            {d.name}
          </button>
        ))}
      </div>

      {grouped.map(([deptId, items]) => (
        <section key={deptId} className="mt-10">
          <h2 className="font-display text-lg font-semibold">
            {deptName(deptId)}
          </h2>
          <ul className="mt-4 grid gap-3.5 sm:grid-cols-2">
            {items.map((r) => (
              <li key={r.id} className="card card-hover p-4">
                <a
                  href={r.pdfUrl ?? r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex gap-4"
                >
                  {r.type === "book" && <BookCover resource={r} />}
                  <span className="min-w-0">
                    <h3 className="font-display text-[0.98rem] font-semibold leading-snug group-hover:text-forest">
                      {r.title} <span className="text-xs">↗</span>
                    </h3>
                    <p className="mt-1 text-sm text-ink-soft">{r.author}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                      {r.description}
                    </p>
                    <p className="mt-2 font-display text-[0.68rem] font-semibold uppercase tracking-wider text-ink-faint">
                      {TYPE_LABEL[r.type]}
                      {r.pdfUrl && <span className="text-forest"> · Free PDF</span>}
                    </p>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      ))}

      {buyLinks.length > 0 && (
        <section className="mt-14">
          <div className="rounded-lg border border-line bg-tint/50 p-6">
            <h2 className="font-display text-lg font-semibold">
              Where to buy Islamic books
            </h2>
            <p className="mt-1.5 max-w-xl text-sm text-ink-soft">
              Reputable publishers of the translations recommended here.
            </p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {buyLinks.map((r) => (
                <li key={r.id}>
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-baseline gap-2"
                  >
                    <span className="font-display text-[0.95rem] font-semibold text-forest group-hover:underline">
                      {r.title} ↗
                    </span>
                    <span className="text-sm text-ink-soft">{r.description}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </div>
  );
}
