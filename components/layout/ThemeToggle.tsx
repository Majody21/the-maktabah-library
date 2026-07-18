"use client";

import { useEffect, useRef, useState } from "react";

type Theme = "light" | "dark" | "library";

const THEMES: { id: Theme; label: string }[] = [
  { id: "light", label: "White" },
  { id: "dark", label: "Black" },
  { id: "library", label: "Library" },
];

function ThemeIcon({ theme }: { theme: Theme }) {
  if (theme === "light") {
    /* sun */
    return (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <circle cx="12" cy="12" r="4.4" />
        <path d="M12 2.5v2.4M12 19.1v2.4M2.5 12h2.4M19.1 12h2.4M5.3 5.3l1.7 1.7M17 17l1.7 1.7M18.7 5.3L17 7M7 17l-1.7 1.7" />
      </svg>
    );
  }
  if (theme === "dark") {
    /* crescent moon */
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.4 14.4A8.8 8.8 0 0 1 9.6 3.6a9 9 0 1 0 10.8 10.8Z" />
      </svg>
    );
  }
  /* candle */
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 7.6c-1.5-1.9-1.1-3.4 0-4.6 1.1 1.2 1.5 2.7 0 4.6Z" />
      <path d="M9.5 10.5h5V20h-5z" />
      <path d="M6 20h12" />
    </svg>
  );
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = document.documentElement;
    setTheme(
      el.classList.contains("library")
        ? "library"
        : el.classList.contains("dark")
          ? "dark"
          : "light"
    );
  }, []);

  useEffect(() => {
    if (!open) return;
    function onPointerDown(e: MouseEvent | TouchEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function apply(next: Theme) {
    const el = document.documentElement;
    el.classList.toggle("dark", next === "dark");
    el.classList.toggle("library", next === "library");
    try {
      localStorage.setItem("maktabah-theme", next);
    } catch {
      // storage unavailable — theme still applies for this page view
    }
    setTheme(next);
    setOpen(false);
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Choose theme"
        aria-haspopup="menu"
        aria-expanded={open}
        className="flex h-11 w-11 items-center justify-center rounded border border-line text-ink-soft transition-colors hover:border-gold hover:text-gold"
      >
        {theme === null ? <span className="block h-5 w-5" /> : <ThemeIcon theme={theme} />}
      </button>
      {open && (
        <div
          role="menu"
          aria-label="Theme"
          className="card absolute right-0 top-full z-50 mt-2 w-40 p-1"
        >
          {THEMES.map((t) => (
            <button
              key={t.id}
              type="button"
              role="menuitemradio"
              aria-checked={theme === t.id}
              onClick={() => apply(t.id)}
              className={`flex w-full items-center gap-2.5 rounded px-3 py-2 text-left font-display text-[0.85rem] font-semibold transition-colors hover:bg-tint ${
                theme === t.id ? "text-forest" : "text-ink-soft"
              }`}
            >
              <ThemeIcon theme={t.id} />
              <span className="flex-1">{t.label}</span>
              {theme === t.id && (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4.5 12.5 10 18 19.5 6.5" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
