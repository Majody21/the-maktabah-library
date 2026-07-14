/** A quiet hairline divider with a single small diamond at its center. */
export default function PatternDivider({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`flex items-center justify-center gap-3 ${className}`}
    >
      <span className="h-px flex-1 max-w-32 bg-line" />
      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
        <path d="M4 0.8 7.2 4 4 7.2 0.8 4Z" stroke="var(--line-strong)" strokeWidth="1" />
      </svg>
      <span className="h-px flex-1 max-w-32 bg-line" />
    </div>
  );
}
