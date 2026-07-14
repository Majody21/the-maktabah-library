import Link from "next/link";
import { LogoIcon } from "@/components/ui/Logo";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center px-6 py-28 text-center">
      <LogoIcon size={40} />
      <h1 className="mt-6 font-display text-2xl font-semibold">
        This shelf is empty
      </h1>
      <p className="mt-3 text-sm text-ink-soft">
        The page you were looking for isn&rsquo;t in the library.
      </p>
      <Link href="/" className="btn btn-primary mt-8">
        Return to the Library
      </Link>
    </div>
  );
}
