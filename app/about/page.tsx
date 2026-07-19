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
    <div className="mx-auto max-w-4xl px-6 py-10 text-center">
      <h1 className="font-display text-3xl font-semibold">About the library</h1>

      <Photo
        photo={aboutPhoto}
        priority
        sizes="(max-width: 640px) 100vw, 576px"
        className="mt-6 h-52 w-full"
      />

      <section className="mx-auto mt-10 max-w-2xl space-y-4 leading-relaxed">
        <h2 className="font-display text-lg font-semibold text-forest">Mission</h2>
        <p>
          This library teaches the foundations of the religion to English
          speakers upon the Book of Allah, the authentic Sunnah, and the
          understanding of the Salaf us-Salih.
        </p>
        <p className="text-ink-soft">
          The lessons are short and ordered. Every point is tied to its
          evidence, and the explanation of the scholars is placed beside the
          text.
        </p>
      </section>

      <PatternDivider className="my-10" />

      <section className="mx-auto max-w-2xl space-y-4 leading-relaxed">
        <h2 className="font-display text-lg font-semibold text-forest">Manhaj</h2>
        <p>
          We follow the way of the Salaf us-Salih in creed, in worship, and in
          manhaj: the way of the Companions and the imams of guidance who came
          after them.
        </p>
        <p>
          The lessons are taken from the explanations of the recognized
          scholars of Ahlus Sunnah. Among the later imams:{" "}
          <strong>Ibn Baz</strong>, <strong>Ibn Uthaymeen</strong> and{" "}
          <strong>al-Fawzan</strong>. Among those who preceded them:{" "}
          <strong>Ibn Taymiyyah</strong> and <strong>Ibn al-Qayyim</strong>.
          Each lesson names the scholar whose explanation it draws upon.
        </p>
      </section>

      <PatternDivider className="my-10" />

      <section className="mx-auto max-w-2xl space-y-4 leading-relaxed">
        <h2 className="font-display text-lg font-semibold text-forest">
          Evidence
        </h2>
        <p>
          No lesson states a belief or a ruling without its proof from the Book
          or the Sunnah, given in Arabic with its translation and its
          reference. Read the proofs, and ask the people of knowledge about
          what is unclear to you.
        </p>
        <p className="text-sm text-ink-faint">
          If you find an error in a reference or a translation, inform us so
          that it may be corrected, for conveying knowledge is a trust.
        </p>
      </section>

      <div className="mt-14">
        <Link href="/departments/aqeedah" className="btn btn-primary">
          Start with Aqeedah
        </Link>
      </div>
    </div>
  );
}
