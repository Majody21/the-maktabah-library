"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState<boolean | null>(null);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("maktabah-theme", next ? "dark" : "light");
    } catch {
      // storage unavailable — theme still toggles for this page view
    }
    setDark(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="flex h-11 w-11 items-center justify-center rounded border border-line text-ink-soft transition-colors hover:border-gold hover:text-gold"
    >
      {dark === null ? (
        <span className="block h-5 w-5" />
      ) : dark ? (
        /* sun */
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <circle cx="12" cy="12" r="4.4" />
          <path d="M12 2.5v2.4M12 19.1v2.4M2.5 12h2.4M19.1 12h2.4M5.3 5.3l1.7 1.7M17 17l1.7 1.7M18.7 5.3L17 7M7 17l-1.7 1.7" />
        </svg>
      ) : (
        /* crescent moon */
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.4 14.4A8.8 8.8 0 0 1 9.6 3.6a9 9 0 1 0 10.8 10.8Z" />
        </svg>
      )}
    </button>
  );
}
