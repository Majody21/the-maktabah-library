import ProofBlock from "./ProofBlock";
import { renderInline } from "@/components/ui/InlineText";
import type { Lesson } from "@/lib/content/types";

/**
 * Lesson content: paragraphs separated by blank lines; a paragraph of the
 * form [[proof:N]] renders the proof whose displayOrder is N.
 */
export default function LessonBody({ lesson }: { lesson: Lesson }) {
  const blocks = lesson.content.split(/\n\s*\n/);
  return (
    <div className="lesson-prose text-base leading-[1.8]">
      {blocks.map((raw, i) => {
        const block = raw.trim();
        if (!block) return null;
        const proofMatch = block.match(/^\[\[proof:(\d+)\]\]$/);
        if (proofMatch) {
          const proof = lesson.proofs.find(
            (p) => p.displayOrder === Number(proofMatch[1])
          );
          return proof ? <ProofBlock key={i} proof={proof} /> : null;
        }
        return <p key={i}>{renderInline(block)}</p>;
      })}
    </div>
  );
}
