import type { Metadata } from "next";
import { getGlossaryTerms } from "@/lib/data/content";
import GlossaryClient from "@/components/glossary/GlossaryClient";
import Photo from "@/components/ui/Photo";
import { glossaryPhoto } from "@/lib/images";

export const metadata: Metadata = {
  title: "Glossary",
  description:
    "Essential Arabic Islamic terms with transliteration and plain-English definitions — aqeedah, fiqh, hadith and Arabic grammar vocabulary.",
};

export const revalidate = 3600;

export default async function GlossaryPage() {
  const terms = await getGlossaryTerms();
  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      <h1 className="font-display text-3xl font-semibold">Glossary</h1>
      <p className="mt-2 text-ink-soft">
        The Arabic terms used across the library, alphabetized by
        transliteration.
      </p>
      <Photo
        photo={glossaryPhoto}
        sizes="(max-width: 896px) 100vw, 896px"
        className="mt-6 h-40 w-full sm:h-48"
      />
      <GlossaryClient terms={terms} />
    </div>
  );
}
