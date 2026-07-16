function extractYouTubeId(url: string | null | undefined): string | null {
  if (!url) return null;
  const patterns = [
    /youtube\.com\/watch\?v=([\w-]{6,})/,
    /youtu\.be\/([\w-]{6,})/,
    /youtube\.com\/embed\/([\w-]{6,})/,
  ];
  for (const p of patterns) {
    const m = url.match(p);
    if (m) return m[1];
  }
  return null;
}

/** Playlist id from a YouTube URL's list= param, if present. */
function extractPlaylistId(url: string | null | undefined): string | null {
  if (!url) return null;
  const m = url.match(/[?&]list=([\w-]{10,})/);
  return m ? m[1] : null;
}

export default function VideoEmbed({
  youtubeUrl,
  title,
  scholar,
}: {
  youtubeUrl?: string | null;
  title?: string | null;
  scholar?: string | null;
}) {
  const videoId = extractYouTubeId(youtubeUrl);
  const playlistId = extractPlaylistId(youtubeUrl);

  // Nothing usable to embed → graceful fallback.
  if (!videoId && !playlistId) {
    return (
      <div className="card flex min-h-40 items-center justify-center p-6 text-center">
        <p className="max-w-md text-ink-soft">
          This video is temporarily unavailable. Please proceed with the text
          content above.
        </p>
      </div>
    );
  }

  // A playlist plays as a queue; a single video with a list param starts at that
  // video and continues through the playlist.
  const src = playlistId
    ? videoId
      ? `https://www.youtube-nocookie.com/embed/${videoId}?list=${playlistId}`
      : `https://www.youtube-nocookie.com/embed/videoseries?list=${playlistId}`
    : `https://www.youtube-nocookie.com/embed/${videoId}`;

  return (
    <figure>
      <div className="card overflow-hidden">
        <div className="relative aspect-video w-full">
          <iframe
            className="absolute inset-0 h-full w-full"
            src={src}
            title={title ?? "Scholar's explanation"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
      {(title || scholar) && (
        <figcaption className="mt-3 text-[0.95rem] text-ink-soft">
          {title}
          {title && scholar ? " — " : ""}
          {scholar && <span className="font-semibold text-forest">{scholar}</span>}
          {playlistId && (
            <span className="text-ink-faint"> (playlist)</span>
          )}
        </figcaption>
      )}
    </figure>
  );
}
