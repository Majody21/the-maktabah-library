"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { LogoWordmark } from "@/components/ui/Logo";
import ThemeToggle from "@/components/layout/ThemeToggle";
import { getSessionInfo, SESSION_EVENT, type SessionInfo } from "@/lib/session";

const NAV_LINKS = [
  { href: "/departments", label: "Departments" },
  { href: "/glossary", label: "Glossary" },
  { href: "/resources", label: "Resources" },
  { href: "/fatawa", label: "Fatawa" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const [session, setSession] = useState<SessionInfo | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const refresh = useCallback(() => {
    getSessionInfo().then(setSession);
  }, []);

  useEffect(() => {
    refresh();
    window.addEventListener(SESSION_EVENT, refresh);
    return () => window.removeEventListener(SESSION_EVENT, refresh);
  }, [refresh]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-parchment/90 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link href="/" aria-label="The Maktabah Library — home" className="shrink-0">
          <LogoWordmark />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main">
          <Link
            href="/"
            aria-label="Home"
            className={`transition-colors hover:text-forest ${pathname === "/" ? "text-forest" : "text-ink-soft"}`}
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M3.5 10.5 12 3l8.5 7.5" />
              <path d="M5.5 9.5V20a1 1 0 0 0 1 1h4v-6h3v6h4a1 1 0 0 0 1-1V9.5" />
            </svg>
          </Link>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-display text-[0.88rem] transition-colors hover:text-forest ${
                pathname?.startsWith(link.href) ? "text-forest" : "text-ink-soft"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          {session ? (
            <Link href="/dashboard" className="btn btn-primary hidden !min-h-9 !py-1.5 sm:inline-flex">
              Dashboard
            </Link>
          ) : (
            <>
              <Link
                href="/login"
                className="hidden font-display text-[0.88rem] text-ink-soft transition-colors hover:text-forest sm:block"
              >
                Sign in
              </Link>
              <Link href="/signup" className="btn btn-primary hidden !min-h-9 !py-1.5 sm:inline-flex">
                Start Learning
              </Link>
            </>
          )}
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-md border border-line text-ink-soft lg:hidden"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none">
              {menuOpen ? (
                <path d="M5 5l14 14M19 5L5 19" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          aria-label="Mobile"
          className="border-t border-line bg-raised px-4 pb-5 pt-3 shadow-card lg:hidden"
        >
          <ul className="flex flex-col">
            <li>
              <Link
                href="/"
                className="flex items-center gap-2.5 border-b border-line py-3 font-display text-[1.05rem] text-ink"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3.5 10.5 12 3l8.5 7.5" />
                  <path d="M5.5 9.5V20a1 1 0 0 0 1 1h4v-6h3v6h4a1 1 0 0 0 1-1V9.5" />
                </svg>
                Home
              </Link>
            </li>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block border-b border-line py-3 font-display text-[1.05rem] text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-2.5">
            {session ? (
              <Link href="/dashboard" className="btn btn-primary w-full">
                Go to Dashboard
              </Link>
            ) : (
              <>
                <Link href="/signup" className="btn btn-primary w-full">
                  Start Learning
                </Link>
                <Link href="/login" className="btn btn-outline w-full">
                  Sign in
                </Link>
              </>
            )}
          </div>
        </nav>
      )}
    </header>
  );
}
