/**
 * Reads a book on the lesson page itself. Google Drive's /preview viewer
 * carries its own page controls and a full-screen button, so the student can
 * read the whole treatise without leaving the lesson.
 */
function driveFileId(url: string): string | null {
  return url.match(/\/file\/d\/([\w-]+)/)?.[1] ?? null;
}

export default function PdfReader({
  url,
  title,
}: {
  url: string;
  title: string;
}) {
  const id = driveFileId(url);
  if (!id) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
        Open {title} ↗
      </a>
    );
  }

  return (
    <figure>
      <div className="card overflow-hidden">
        <iframe
          src={`https://drive.google.com/file/d/${id}/preview`}
          title={title}
          className="block h-[75vh] min-h-[420px] w-full"
          allow="autoplay; fullscreen"
          allowFullScreen
          loading="lazy"
        />
      </div>
      <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-3 text-[0.95rem] text-ink-soft">
        <span>{title}</span>
        <a
          href={`https://drive.google.com/file/d/${id}/view`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-forest underline underline-offset-2 hover:text-forest-strong"
        >
          Open full screen ↗
        </a>
      </figcaption>
    </figure>
  );
}
