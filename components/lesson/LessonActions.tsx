"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getUserStore } from "@/lib/data/user-store";

export default function LessonActions({
  lessonId,
  nextHref,
  nextTitle,
  prevHref,
  prevTitle,
  isLastInModule,
}: {
  lessonId: string;
  nextHref: string | null;
  nextTitle: string | null;
  prevHref?: string | null;
  prevTitle?: string | null;
  isLastInModule: boolean;
}) {
  const [state, setState] = useState<"loading" | "signed-out" | "incomplete" | "complete">(
    "loading"
  );

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const store = await getUserStore();
      if (cancelled) return;
      if (!store) {
        setState("signed-out");
        return;
      }
      const completed = await store.getCompletedLessons();
      if (!cancelled) setState(completed[lessonId] ? "complete" : "incomplete");
    })();
    return () => {
      cancelled = true;
    };
  }, [lessonId]);

  async function markComplete() {
    const store = await getUserStore();
    if (!store) return;
    await store.markLessonComplete(lessonId);
    setState("complete");
  }

  if (state === "loading") {
    return <div className="card mt-10 h-20 animate-pulse" aria-hidden="true" />;
  }

  if (state === "signed-out") {
    return (
      <div className="card mt-10 flex flex-col items-center gap-4 p-6 text-center">
        <p className="text-ink-soft">
          Sign in (or continue as a guest) to track your progress through this
          course.
        </p>
        <Link href="/signup" className="btn btn-primary">
          Start Learning
        </Link>
        {(prevHref || nextHref) && (
          <div className="flex w-full items-center justify-between gap-2.5 border-t border-line pt-4">
            {prevHref ? (
              <Link href={prevHref} className="btn btn-outline" title={prevTitle ? `Back to: ${prevTitle}` : "Previous lesson"}>
                ← Previous
              </Link>
            ) : (
              <span />
            )}
            {nextHref && (
              <Link href={nextHref} className="btn btn-outline">
                Next: {nextTitle} →
              </Link>
            )}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="card mt-10 flex flex-col items-center gap-4 p-6 text-center sm:flex-row sm:justify-between sm:text-left">
      <div>
        {state === "complete" ? (
          <p className="flex items-center gap-2 font-display font-semibold text-forest">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
              <path d="M4.5 12.5l5 5L19.5 7" />
            </svg>
            Lesson complete — may Allah bless your effort
          </p>
        ) : (
          <p className="font-display font-semibold">
            Finished reading and watching?
          </p>
        )}
        {isLastInModule && (
          <p className="mt-1 text-sm text-ink-soft">
            This is the final lesson — the module quiz is below.
          </p>
        )}
      </div>
      <div className="flex flex-col gap-2.5 sm:flex-row">
        {prevHref && (
          <Link
            href={prevHref}
            className="btn btn-outline"
            title={prevTitle ? `Back to: ${prevTitle}` : "Previous lesson"}
          >
            ← Previous
          </Link>
        )}
        {state !== "complete" && (
          <button type="button" onClick={markComplete} className="btn btn-primary">
            Mark Lesson Complete
          </button>
        )}
        {nextHref && (
          <Link href={nextHref} className={`btn ${state === "complete" ? "btn-primary" : "btn-outline"}`}>
            Next: {nextTitle} →
          </Link>
        )}
      </div>
    </div>
  );
}
