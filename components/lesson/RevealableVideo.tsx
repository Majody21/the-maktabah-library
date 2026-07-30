"use client";

import { useState } from "react";
import VideoEmbed from "./VideoEmbed";

/**
 * A follow-on video that stays closed until the student asks for it, so two
 * parts of one explanation are not stacked on top of each other.
 */
export default function RevealableVideo({
  youtubeUrl,
  title,
  scholar,
  prompt,
}: {
  youtubeUrl: string;
  title: string;
  scholar: string;
  prompt: string;
}) {
  const [open, setOpen] = useState(false);

  if (open) {
    return <VideoEmbed youtubeUrl={youtubeUrl} title={title} scholar={scholar} />;
  }

  return (
    <button
      type="button"
      onClick={() => setOpen(true)}
      className="card card-hover flex w-full items-center gap-3 p-5 text-left"
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line-strong text-forest">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M8 5.2v13.6L19 12 8 5.2Z" />
        </svg>
      </span>
      <span>
        <span className="block font-display text-[0.95rem] font-semibold">
          {prompt}
        </span>
        <span className="mt-0.5 block text-sm text-ink-soft">
          {title} — {scholar}
        </span>
      </span>
    </button>
  );
}
