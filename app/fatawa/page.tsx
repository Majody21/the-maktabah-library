import type { Metadata } from "next";
import { getFatawa } from "@/lib/data/content";
import FatawaClient from "@/components/fatawa/FatawaClient";
import Photo from "@/components/ui/Photo";
import { fatawaPhoto } from "@/lib/images";

export const metadata: Metadata = {
  title: "Fatawa Library",
  description:
    "Published fatawa of the major scholars, reproduced in full and translated, each linked to the fatwa on the scholar's official site.",
};

export const revalidate = 3600;

export default async function FatawaPage() {
  const fatawa = await getFatawa();
  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      <h1 className="font-display text-3xl font-semibold">Fatawa</h1>
      <p className="mt-2 text-ink-soft">
        Published verdicts reproduced in full — the scholar's own answer, not a
        summary — each linked to the fatwa on his official site.
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
