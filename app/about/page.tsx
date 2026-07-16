import type { Metadata } from "next";
import Link from "next/link";
import PatternDivider from "@/components/ui/PatternDivider";
import Photo from "@/components/ui/Photo";
import { aboutPhoto } from "@/lib/images";

export const metadata: Metadata = {
  title: "About",
  description:
    "The mission and manhaj of The Maktabah Library: Islamic education upon the Quran, the Sunnah, and the understanding of the Salaf.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      <h1 className="font-display text-3xl font-semibold">About the library</h1>

      <Photo
        photo={aboutPhoto}
        priority
        sizes="(max-width: 640px) 100vw, 576px"
        className="mt-6 h-52 w-full"
      />

      <section className="mt-10 space-y-4 leading-relaxed">
        <h2 className="font-display text-lg font-semibold text-forest">Mission</h2>
        <p>
          A clear, structured path through the foundations of the religion for
          English speakers — grounded in the Qur&rsquo;an, the authentic
          Sunnah, and the understanding of the Salaf us-Salih.
        </p>
        <p className="text-ink-soft">
          Short, focused lessons. Every claim tied to its evidence. The
          scholars&rsquo; own explanations beside the text.
        </p>
      </section>

      <PatternDivider className="my-10" />

      <section className="space-y-4 leading-relaxed">
        <h2 className="font-display text-lg font-semibold text-forest">Manhaj</h2>
        <p>
          We follow the way of the Salaf — the Companions and the imams of
          guidance after them — in creed, worship and methodology. Lessons
          draw from the explanations of the recognized scholars of Ahlus
          Sunnah: <strong>Ibn Baz</strong>, <strong>Ibn Uthaymeen</strong> and{" "}
          <strong>al-Fawzan</strong> among the later imams;{" "}
          <strong>Ibn Taymiyyah</strong> and <strong>Ibn al-Qayyim</strong>{" "}
          among the earlier. Each lesson states whose explanation it summarizes.
        </p>
      </section>

      <PatternDivider className="my-10" />

      <section className="space-y-4 leading-relaxed">
        <h2 className="font-display text-lg font-semibold text-forest">
          Every claim has its proof
        </h2>
        <p>
          No lesson states a belief or ruling without citing the ayah or
          hadith it stands on — in Arabic, with translation and reference.
          Check the proofs, and ask the people of knowledge.
        </p>
        <p className="text-sm text-ink-faint">
          Found an error in a reference or translation? That is a trust upon
          us — please tell us so we can correct it.
        </p>
      </section>

      <div className="mt-14 text-center">
        <Link href="/departments/aqeedah" className="btn btn-primary">
          Start with Aqeedah
        </Link>
      </div>
    </div>
  );
}
