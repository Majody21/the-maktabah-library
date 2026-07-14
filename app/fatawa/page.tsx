import type { Metadata } from "next";
import { getFatawa } from "@/lib/data/content";
import FatawaClient from "@/components/fatawa/FatawaClient";
import Photo from "@/components/ui/Photo";
import { fatawaPhoto } from "@/lib/images";

export const metadata: Metadata = {
  title: "Fatawa Library",
  description:
    "A curated, searchable collection of verdicts from Ibn Baz, Ibn Uthaymeen, al-Fawzan and the Permanent Committee, organized by topic.",
};

export const revalidate = 3600;

export default async function FatawaPage() {
  const fatawa = await getFatawa();
  return (
    <div className="mx-auto max-w-2xl px-6 py-10">
      <h1 className="font-display text-3xl font-semibold">Fatawa</h1>
      <p className="mt-2 text-ink-soft">
        Summaries of published verdicts from Ibn Baz, Ibn Uthaymeen, al-Fawzan
        and the Permanent Committee, with sources cited.
      </p>
      <Photo
        photo={fatawaPhoto}
        sizes="(max-width: 640px) 100vw, 672px"
        className="mt-6 h-36 w-full sm:h-44"
      />
      <FatawaClient fatawa={fatawa} />
    </div>
  );
}
