import type { Metadata } from "next";
import Link from "next/link";
import PatternDivider from "@/components/ui/PatternDivider";

export const metadata: Metadata = {
  title: "About",
  description:
    "The mission and manhaj of The Maktabah Library: Islamic education upon the Quran, the Sunnah, and the understanding of the Salaf.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-10 text-center">
      <h1 className="font-display text-3xl font-semibold">About the library</h1>

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
          Our manhaj is taken from the Messenger of Allah ﷺ. He conveyed the
          religion complete and left nothing of it unclear, and he informed us
          that the saved group is the one upon what he and his Companions were
          upon.
        </p>
        <p>
          After him it is taken from his <strong>Companions</strong>, may Allah
          be pleased with them. They are the ones who received the revelation
          from him directly and understood it as he intended, and Allah praised
          them and was pleased with them. Whoever wishes to understand the Book
          and the Sunnah correctly understands them as the Companions did, for
          they are the best of this ummah and the most knowledgeable of it.
        </p>
        <p>
          Then it is taken from the <strong>Tabi'un</strong> and those who
          followed them, and from the <strong>imams of the Salaf</strong> who
          carried this knowledge after them, such as{" "}
          <strong>Imam Malik</strong>, <strong>Imam ash-Shafi'i</strong>,{" "}
          <strong>Imam Ahmad ibn Hanbal</strong> and{" "}
          <strong>Imam al-Bukhari</strong>. The Prophet ﷺ testified to the
          excellence of the first three generations, so the religion is
          understood as they understood it.
        </p>
        <p>
          Then it is taken from those who followed them in goodness and
          revived their way in the ages after them, such as{" "}
          <strong>Ibn Taymiyyah</strong> and <strong>Ibn al-Qayyim</strong>,
          and in our own time <strong>Ibn Baz</strong>,{" "}
          <strong>Ibn Uthaymeen</strong> and <strong>al-Fawzan</strong>. These
          scholars are not a source beside the Book and the Sunnah. They are
          the ones who transmit them and explain them upon the understanding
          of the Salaf, and each lesson here names the scholar whose
          explanation it draws upon.
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
