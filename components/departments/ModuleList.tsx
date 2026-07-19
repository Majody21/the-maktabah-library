"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Department, Module } from "@/lib/content/types";
import {
  isDepartmentUnlocked,
  isModuleUnlocked,
  isModuleComplete,
  type CompletedLessons,
  type QuizAttempts,
} from "@/lib/progress";
import { getModuleById } from "@/lib/content";
import { getUserStore } from "@/lib/data/user-store";

export type ModuleSummary = Module & {
  lessonCount: number;
  lessonSlugs: string[];
  lessonIds: string[];
};

function LockIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="5" y="11" width="14" height="9" rx="1.5" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
      <path d="M4.5 12.5l5 5L19.5 7" />
    </svg>
  );
}

export default function ModuleList({
  department,
  moduleSummaries,
}: {
  department: Department;
  moduleSummaries: ModuleSummary[];
}) {
  const [completed, setCompleted] = useState<CompletedLessons>({});
  const [attempts, setAttempts] = useState<QuizAttempts>({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const store = await getUserStore();
      if (!store) {
        if (!cancelled) setLoaded(true);
        return;
      }
      const [c, a] = await Promise.all([
        store.getCompletedLessons(),
        store.getQuizAttempts(),
      ]);
      if (!cancelled) {
        setCompleted(c);
        setAttempts(a);
        setLoaded(true);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const deptUnlocked = isDepartmentUnlocked(department, attempts);

  if (!department.isActive && moduleSummaries.length === 0) {
    return (
      <div className="card mt-12 p-8 text-center">
        <h2 className="font-display text-xl font-semibold">Coming soon, بإذن الله</h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-ink-soft">
          This department&rsquo;s courses are being prepared upon the same
          standard as Aqeedah.
        </p>
        {department.prerequisiteNote && (
          <p className="mx-auto mt-4 max-w-md rounded-md bg-tint px-4 py-3 text-sm text-ink-soft">
            <span className="mr-1.5 inline-block align-[-2px] text-ink-faint"><LockIcon /></span>
            {department.prerequisiteNote}
          </p>
        )}
        <Link href="/departments/aqeedah" className="btn btn-outline mt-6">
          Study Aqeedah meanwhile
        </Link>
      </div>
    );
  }

  return (
    <div className="mt-12">
      {!deptUnlocked && department.prerequisiteNote && (
        <div className="mb-6 flex items-start gap-3 rounded-md border border-line bg-tint px-4 py-3.5">
          <span className="mt-0.5 text-ink-faint">
            <LockIcon />
          </span>
          <p className="text-sm">{department.prerequisiteNote}</p>
        </div>
      )}

      <ol className="space-y-4">
        {moduleSummaries.map((mod, idx) => {
          const modObj = getModuleById(mod.id) ?? mod;
          const unlocked = deptUnlocked && isModuleUnlocked(modObj, attempts);
          const complete = isModuleComplete(mod.id, attempts);
          const doneCount = mod.lessonIds.filter((id) => completed[id]).length;
          const firstIncompleteSlug =
            mod.lessonSlugs[mod.lessonIds.findIndex((id) => !completed[id])] ??
            mod.lessonSlugs[0];
          const prereqName = modObj.prerequisiteModuleId
            ? getModuleById(modObj.prerequisiteModuleId)?.name
            : null;

          return (
            <li
              key={mod.id}
              className={`card p-5 sm:p-6 ${!unlocked ? "opacity-70" : ""}`}
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded font-display text-[0.78rem] font-bold ${
                        complete
                          ? "bg-forest-fill text-on-forest"
                          : unlocked
                            ? "border-2 border-forest text-forest"
                            : "border-2 border-line-strong text-ink-faint"
                      }`}
                    >
                      {complete ? <CheckIcon /> : idx + 1}
                    </span>
                    <h2 className="font-display text-[1.05rem] font-semibold leading-snug">
                      {mod.name}
                    </h2>
                  </div>
                  <p className="mt-2.5 text-[0.92rem] leading-relaxed text-ink-soft">
                    {mod.description}
                  </p>
                  <p className="mt-2 text-sm text-ink-faint">
                    {mod.lessonCount} lessons · ≈{Math.round(mod.estimatedMinutes / 60)}h
                    {loaded && unlocked && !complete && doneCount > 0 && (
                      <span className="text-forest"> · {doneCount}/{mod.lessonCount} complete</span>
                    )}
                    {complete && attempts[`quiz-${mod.id}`] && (
                      <span className="text-forest">
                        {" "}· quiz {attempts[`quiz-${mod.id}`].scorePercentage}%
                      </span>
                    )}
                  </p>
                </div>
                <div className="shrink-0">
                  {!unlocked ? (
                    <span className="inline-flex items-center gap-2 rounded-md bg-tint px-3.5 py-2 font-display text-[0.9rem] font-semibold text-ink-faint">
                      <LockIcon />
                      {prereqName ? `Complete “${prereqName}” first` : "Locked"}
                    </span>
                  ) : (
                    <Link
                      href={`/departments/${department.slug}/${mod.slug}/${firstIncompleteSlug}`}
                      className={`btn ${complete ? "btn-outline" : "btn-primary"} w-full sm:w-auto`}
                    >
                      {complete ? "Review" : doneCount > 0 ? "Continue" : "Start"}
                    </Link>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
