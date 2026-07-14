/**
 * Renders Arabic scripture/terms in Amiri, right-to-left, sized up relative
 * to surrounding English text so it stays readable on phones without zooming.
 */
export default function ArabicText({
  children,
  inline = false,
  className = "",
}: {
  children: React.ReactNode;
  inline?: boolean;
  className?: string;
}) {
  if (inline) {
    return (
      <span lang="ar" dir="rtl" className={`arabic-inline ${className}`}>
        {children}
      </span>
    );
  }
  return (
    <p lang="ar" dir="rtl" className={`arabic ${className}`}>
      {children}
    </p>
  );
}
