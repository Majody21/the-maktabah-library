"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { departments, allQuizzes, getModuleById, lessonPath } from "@/lib/content";
import {
  departmentProgress,
  type CompletedLessons,
  type QuizAttempts,
} from "@/lib/progress";
import {
  continueTarget,
  todaysPlan,
  type ScheduleData,
} from "@/lib/schedule/generator";
import { getUserStore, localDateString, type Profile } from "@/lib/data/user-store";
import { signOut } from "@/lib/session";
import { useRouter } from "next/navigation";

type State = {
  profile: Profile;
  schedule: ScheduleData | null;
  completed: CompletedLessons;
  attempts: QuizAttempts;
};

function daysBetween(fromYmd: string, to: Date): number {
  const [y, m, d] = fromYmd.split("-").map(Number);
  const from = new Date(y, m - 1, d);
  return Math.floor((to.getTime() - from.getTime()) / 86400000);
}

export default function DashboardClient() {
  const router = useRouter();
  const [state, setState] = useState<State | null>(null);
  const [signedOut, setSignedOut] = useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const store = await getUserStore();
      if (!store) {
        if (!cancelled) setSignedOut(true);
        return;
      }
      const [profile, schedule, completed, attempts] = await Promise.all([
        store.getProfile(),
        store.getSchedule(),
        store.getCompletedLessons(),
        store.getQuizAttempts(),
      ]);
      if (!cancelled) setState({ profile, schedule, completed, attempts });
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  if (signedOut) {
    return (
      <div className="card mx-auto mt-10 max-w-lg p-8 text-center">
        <h2 className="font-display text-2xl font-bold">Your desk awaits</h2>
        <p className="mt-3 text-ink-soft">
          Sign in — or continue as a guest — to see your study plan, progress
          and quiz scores.
        </p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/signup" className="btn btn-primary">Start Learning</Link>
          <Link href="/login" className="btn btn-outline">Sign In</Link>
        </div>
      </div>
    );
  }

  if (!state) {
    return (
      <div className="mt-10 space-y-4">
        <div className="card h-28 animate-pulse" />
        <div className="card h-44 animate-pulse" />
        <div className="card h-44 animate-pulse" />
      </div>
    );
  }

  const { profile, schedule, completed, attempts } = state;
  const today = new Date();
  const plan = schedule ? todaysPlan(schedule, completed, today) : null;
  const target = continueTarget(schedule, completed);
  const gapDays = profile.lastStudyDate
    ? daysBetween(profile.lastStudyDate, today)
    : null;
  const showWelcomeBack = gapDays !== null && gapDays >= 3;
  const studiedToday = profile.lastStudyDate === localDateString(today);

  const enrolledDepts = departments.filter((d) =>
    schedule ? schedule.departments.includes(d.id) : d.id === "aqeedah"
  );
  const overallTotal = schedule?.lessonQueue.length ?? 0;
  const overallDone = schedule
    ? schedule.lessonQueue.filter((id) => completed[id]).length
    : Object.keys(completed).length;

  const recentAttempts = Object.entries(attempts)
    .sort((a, b) => b[1].completedAt.localeCompare(a[1].completedAt))
    .slice(0, 5)
    .map(([quizId, a]) => {
      const quiz = allQuizzes.find((q) => q.id === quizId);
      const mod = quiz ? getModuleById(quiz.moduleId) : null;
      return { quizId, module: mod?.name ?? quizId, ...a };
    });

  return (
    <div className="mt-8">
      {/* welcome + streak */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h1 className="font-display text-2xl font-semibold sm:text-3xl">
            As-salamu alaykum, {profile.name}
          </h1>
          <p className="mt-2 text-sm text-ink-soft">
            {studiedToday
              ? "You've already studied today — may Allah put barakah in it."
              : "Your desk is ready when you are."}
          </p>
        </div>
        <div className="flex items-center gap-3">
          {profile.streakCount > 0 && (
            <span
              className="inline-flex items-center gap-1.5 rounded border border-line bg-tint px-3.5 py-1.5 font-display text-sm font-semibold text-ink-soft"
              title="Consecutive study days"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="var(--gold-bright)" aria-hidden="true">
                <path d="M12 2l2.4 5.9L20 9.2l-4.5 4 1.2 6.1L12 16.4l-4.7 2.9 1.2-6.1-4.5-4 5.6-1.3L12 2Z" />
              </svg>
              {profile.streakCount}-day streak
            </span>
          )}
          <button
            type="button"
            className="btn btn-outline !min-h-10 !px-3.5 !py-1.5 !text-[0.9rem]"
            onClick={async () => {
              await signOut();
              router.push("/");
            }}
          >
            Sign out
          </button>
        </div>
      </div>

      {showWelcomeBack && (
        <div className="mt-6 rounded-md border border-forest-soft/40 bg-forest-tint px-5 py-4">
          <p className="font-display font-semibold text-forest">
            Knowledge is taken gradually, not all at once. Welcome back.
          </p>
          <p className="mt-1 text-sm text-ink-soft">
            Your schedule has shifted forward with you.
          </p>
        </div>
      )}

      {/* today's plan */}
      <section className="card mt-8 p-6">
        <div className="flex items-baseline justify-between gap-3">
          <h2 className="font-display text-lg font-semibold">Today&rsquo;s Study Plan</h2>
          <Link href="/roadmap" className="text-sm text-forest hover:underline">
            Edit schedule
          </Link>
        </div>
        {!schedule ? (
          <div className="mt-4 text-center">
            <p className="text-ink-soft">
              You haven&rsquo;t built your ilm roadmap yet — it takes one minute.
            </p>
            <Link href="/roadmap" className="btn btn-primary mt-4">
              Build My Study Plan
            </Link>
          </div>
        ) : plan && plan.remainingCount === 0 ? (
          <p className="mt-4 text-ink-soft">
            Ma sha Allah — you&rsquo;ve completed every lesson in your current
            plan. Add departments from the{" "}
            <Link href="/roadmap" className="font-semibold text-forest hover:underline">
              roadmap builder
            </Link>{" "}
            as new content opens.
          </p>
        ) : plan && !plan.isStudyDay ? (
          <p className="mt-4 text-ink-soft">
            Today is a rest day. Your next study day is{" "}
            <strong className="text-ink">{plan.nextStudyDayName}</strong>
            {target && (
              <>
                {" "}— or{" "}
                <Link href={target.href} className="font-semibold text-forest hover:underline">
                  study ahead
                </Link>
              </>
            )}
            .
          </p>
        ) : plan ? (
          <ol className="mt-4 space-y-2.5">
            {plan.lessons.map((lesson, i) => {
              const mod = getModuleById(lesson.moduleId);
              const done = Boolean(completed[lesson.id]);
              return (
                <li key={lesson.id}>
                  <Link
                    href={lessonPath(lesson)}
                    className={`flex items-center gap-3.5 rounded-md border px-4 py-3 transition-colors hover:border-forest-soft hover:bg-forest-tint ${
                      done ? "border-forest-soft/50 opacity-70" : "border-line"
                    }`}
                  >
                    <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded font-display text-[0.85rem] font-bold ${done ? "bg-forest-fill text-on-forest" : "border-2 border-gold text-gold"}`}>
                      {done ? "✓" : i + 1}
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate font-display font-semibold">
                        {lesson.title}
                      </span>
                      <span className="block text-[0.88rem] text-ink-faint">
                        {mod?.name} · ≈50 min
                      </span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ol>
        ) : null}
      </section>

      {/* continue + progress */}
      <div className="mt-5 grid gap-5 lg:grid-cols-5">
        <section className="card p-6 lg:col-span-2">
          <h2 className="font-display text-lg font-semibold">Continue</h2>
          {target ? (
            <>
              <p className="mt-3 text-[0.95rem] text-ink-soft">Next up:</p>
              <p className="mt-1 font-display text-lg font-semibold leading-snug">
                {target.lesson.title}
              </p>
              <p className="mt-1 text-[0.9rem] text-ink-faint">
                {getModuleById(target.lesson.moduleId)?.name}
              </p>
              <Link href={target.href} className="btn btn-primary mt-5 w-full">
                Continue where you left off →
              </Link>
            </>
          ) : (
            <p className="mt-3 text-ink-soft">All caught up.</p>
          )}
        </section>

        <section className="card p-6 lg:col-span-3">
          <h2 className="font-display text-lg font-semibold">Progress</h2>
          {overallTotal > 0 && (
            <div className="mt-4">
              <div className="flex items-baseline justify-between text-[0.95rem]">
                <span className="font-semibold">Overall plan</span>
                <span className="text-ink-soft">
                  {overallDone}/{overallTotal} lessons ·{" "}
                  {Math.round((overallDone / overallTotal) * 100)}%
                </span>
              </div>
              <div className="mt-1.5 h-2.5 overflow-hidden rounded-sm bg-tint">
                <div
                  className="h-full rounded-sm bg-gold-bright transition-all"
                  style={{ width: `${(overallDone / overallTotal) * 100}%` }}
                />
              </div>
            </div>
          )}
          <ul className="mt-5 space-y-4">
            {enrolledDepts.map((dept) => {
              const pct = departmentProgress(dept.id, completed);
              return (
                <li key={dept.id}>
                  <div className="flex items-baseline justify-between text-[0.95rem]">
                    <Link href={`/departments/${dept.slug}`} className="font-semibold hover:text-forest">
                      {dept.name}
                    </Link>
                    <span className="text-ink-soft">{pct}%</span>
                  </div>
                  <div className="mt-1.5 h-2.5 overflow-hidden rounded-sm bg-tint">
                    <div
                      className="h-full rounded-sm bg-forest-soft transition-all"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      </div>

      {/* recent quiz scores */}
      <section className="card mt-5 p-6">
        <h2 className="font-display text-lg font-semibold">Recent quiz scores</h2>
        {recentAttempts.length === 0 ? (
          <p className="mt-3 text-ink-soft">
            No quizzes taken yet — each module ends with one. Finish the last
            lesson of a module to unlock it.
          </p>
        ) : (
          <ul className="mt-4 divide-y divide-line">
            {recentAttempts.map((a) => (
              <li key={a.quizId} className="flex items-baseline justify-between gap-4 py-3">
                <span className="min-w-0 truncate font-display font-semibold">
                  {a.module}
                </span>
                <span className="flex shrink-0 items-baseline gap-3">
                  <span className={`font-display text-lg font-bold ${a.scorePercentage >= 75 ? "text-forest" : "text-gold"}`}>
                    {a.scorePercentage}%
                  </span>
                  <span className="text-[0.88rem] text-ink-faint">
                    {new Date(a.completedAt).toLocaleDateString()}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
