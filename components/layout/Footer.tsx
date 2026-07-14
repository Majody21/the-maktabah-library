import Link from "next/link";
import { LogoWordmark } from "@/components/ui/Logo";
import PatternDivider from "@/components/ui/PatternDivider";

const LINKS = [
  { href: "/departments", label: "Departments" },
  { href: "/glossary", label: "Glossary" },
  { href: "/resources", label: "Resources" },
  { href: "/fatawa", label: "Fatawa" },
  { href: "/about", label: "About" },
];

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-line">
      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="flex flex-col items-center gap-8 text-center">
          <LogoWordmark iconSize={26} />
          <nav aria-label="Footer">
            <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-display text-[0.88rem] text-ink-soft transition-colors hover:text-forest"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <PatternDivider className="w-full max-w-xs" />
          <div>
            <p className="text-sm italic text-ink-soft">
              “Whoever treads a path seeking knowledge, Allah makes easy for him
              a path to Paradise.”
            </p>
            <p className="mt-1 text-xs text-ink-faint">Sahih Muslim #2699</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
