import ArabicText from "@/components/arabic/ArabicText";
import type { Proof } from "@/lib/content/types";

/**
 * Qur'an proofs: parchment-gold tint with a gold leading border.
 * Hadith proofs: green tint with a green leading border.
 */
export default function ProofBlock({ proof }: { proof: Proof }) {
  const isQuran = proof.type === "quran";
  return (
    <figure
      className={`${isQuran ? "proof-quran" : "proof-hadith"} my-6 px-4 py-4 sm:px-5`}
    >
      <figcaption className="mb-2 flex items-baseline gap-2">
        <span
          className={`font-display text-[0.68rem] font-semibold uppercase tracking-[0.14em] ${
            isQuran ? "text-gold" : "text-forest"
          }`}
        >
          {isQuran ? "Qur’an" : "Hadith"}
        </span>
        <span className="text-xs text-ink-faint">{proof.reference}</span>
      </figcaption>
      <ArabicText>{proof.arabicText}</ArabicText>
      <blockquote className="mt-3 text-[0.95rem] leading-relaxed text-ink">
        “{proof.englishTranslation}”
      </blockquote>
    </figure>
  );
}
