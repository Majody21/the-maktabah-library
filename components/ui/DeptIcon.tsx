const paths: Record<string, React.ReactNode> = {
  // aqeedah — anchored heart/foundation: a pillar with a star
  pillar: (
    <>
      <path d="M7 21h10M8 18h8M9 18V8h6v10" />
      <path d="M6.5 8h11M12 3l1.8 1.8L12 6.6l-1.8-1.8L12 3Z" />
    </>
  ),
  // fiqh — prayer mat with mihrab niche
  mat: (
    <>
      <rect x="5" y="3.5" width="14" height="17" rx="1.5" />
      <path d="M12 7.5l3.5 3.5v5h-7v-5L12 7.5Z" />
    </>
  ),
  // quran — book on a rehal stand
  book: (
    <>
      <path d="M4.5 17.5L12 20l7.5-2.5" />
      <path d="M12 5.5C9.5 3.8 6.5 3.5 4.5 4v12c2-.5 5 .2 7.5 1.9 2.5-1.7 5.5-2.4 7.5-1.9V4c-2-.5-5-.2-7.5 1.5Z" />
      <path d="M12 5.5V18" />
    </>
  ),
  // hadith — scroll
  scroll: (
    <>
      <path d="M7 4h11a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h-1" />
      <path d="M17 8v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h11" />
      <path d="M8 10h5M8 13.5h5M8 17h3" />
    </>
  ),
  // arabic — calligraphic letters (alif-ba-jim hint)
  letters: (
    <>
      <path d="M6 5v14M10.5 12c0 3.5 2 6 4.5 6s4.5-2 4.5-4.5S17.5 9 15 9" />
      <circle cx="15" cy="20.5" r="0.6" fill="currentColor" stroke="none" />
    </>
  ),
  // dawah — minaret with radiating call
  minaret: (
    <>
      <path d="M10 21V8h4v13M10 8l2-4 2 4" />
      <path d="M7 21h10" />
      <path d="M17.5 6.5l2-1M17.8 10h2.4M6.5 6.5l-2-1M6.2 10H3.8" />
    </>
  ),
  // seerah — date palm of Madinah
  palm: (
    <>
      <path d="M12 21v-9" />
      <path d="M12 12C12 8.5 9.5 6.5 6 6.5c1 3 3.5 5 6 5.5ZM12 12c0-3.5 2.5-5.5 6-5.5-1 3-3.5 5-6 5.5Z" />
      <path d="M12 12c-.5-3 .5-6 2.5-8M12 12c.5-3-.5-6-2.5-8" />
      <path d="M8 21h8" />
    </>
  ),
  // tazkiyah — heart
  heart: (
    <>
      <path d="M12 20.5C7 16.5 3.5 13.4 3.5 9.6 3.5 7 5.5 5 8 5c1.6 0 3.1.8 4 2.1C12.9 5.8 14.4 5 16 5c2.5 0 4.5 2 4.5 4.6 0 3.8-3.5 6.9-8.5 10.9Z" />
    </>
  ),
  // refutations — shield
  shield: (
    <>
      <path d="M12 3l7.5 2.8v5.4c0 4.7-3.1 8.2-7.5 9.8-4.4-1.6-7.5-5.1-7.5-9.8V5.8L12 3Z" />
      <path d="M9 11.5l2.2 2.2L15.5 9" />
    </>
  ),
  // fatawa — question in an arch
  question: (
    <>
      <path d="M6 21V11c0-4.4 2.4-7.2 6-8.4 3.6 1.2 6 4 6 8.4v10" />
      <path d="M10 10.2c0-1.3 1-2.2 2.1-2.2 1.2 0 2 .8 2 1.9 0 1.6-2 1.8-2 3.3" />
      <circle cx="12.1" cy="16.4" r="0.7" fill="currentColor" stroke="none" />
    </>
  ),
};

export default function DeptIcon({
  name,
  size = 28,
  className = "",
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {paths[name] ?? paths.book}
    </svg>
  );
}
