"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { Quiz, QuizQuestion } from "@/lib/content/types";
import {
  buildQuizSession,
  encouragementFor,
  scoreQuiz,
  topicLabel,
  type QuizResult,
  type QuizSession,
} from "@/lib/quiz/engine";
import { getUserStore, type UserStore } from "@/lib/data/user-store";
import PatternDivider from "@/components/ui/PatternDivider";
import InlineText from "@/components/ui/InlineText";

type Attempt = {
  scorePercentage: number;
  answers: Record<string, number>;
  completedAt: string;
};

/* ————— Review mode ————— */

function ReviewQuestion({
  question,
  chosen,
  index,
}: {
  question: QuizQuestion;
  chosen: number | undefined;
  index: number;
}) {
  const correct = question.correctAnswerIndex;
  return (
    <li className="card p-5">
      <p className="font-display text-[1.05rem] font-semibold leading-snug">
        {index + 1}. {question.questionText}
      </p>
      <ul className="mt-3.5 space-y-2">
        {question.options.map((opt, i) => {
          const isCorrect = i === correct;
          const isChosen = i === chosen;
          return (
            <li
              key={i}
              className={`flex items-start gap-2.5 rounded-md border px-3.5 py-2.5 text-[0.98rem] leading-relaxed ${
                isCorrect
                  ? "border-forest-soft bg-forest-tint"
                  : isChosen
                    ? "border-red-700/40 bg-red-900/5 dark:bg-red-300/5"
                    : "border-line"
              }`}
            >
              <span className="mt-0.5 shrink-0 font-display text-[0.85rem] font-bold">
                {isCorrect ? (
                  <span className="text-forest">✓</span>
                ) : isChosen ? (
                  <span className="text-red-700 dark:text-red-400">✗</span>
                ) : (
                  <span className="text-ink-faint">{String.fromCharCode(65 + i)}</span>
                )}
              </span>
              <span>
                {opt}
                {isChosen && !isCorrect && (
                  <span className="ml-2 font-display text-[0.8rem] font-bold uppercase tracking-wider text-red-700 dark:text-red-400">
                    your answer
                  </span>
                )}
                {isChosen && isCorrect && (
                  <span className="ml-2 font-display text-[0.8rem] font-bold uppercase tracking-wider text-forest">
                    your answer
                  </span>
                )}
              </span>
            </li>
          );
        })}
        {chosen === undefined || chosen < 0 ? (
          <li className="text-[0.9rem] italic text-ink-faint">Not answered.</li>
        ) : null}
      </ul>
      <div className="mt-3.5 rounded-md bg-tint px-4 py-3">
        <p className="font-display text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-ink-faint">
          Explanation
        </p>
        <p className="mt-1.5 text-sm leading-relaxed">
          <InlineText text={question.explanation} />
        </p>
        <p className="mt-2 text-xs text-ink-faint">
          Topic: {topicLabel(question.topicTag)} · {question.difficulty}
        </p>
      </div>
    </li>
  );
}

function ResultsView({
  quiz,
  score,
  answers,
  topics,
}: {
  quiz: Quiz;
  score: number;
  answers: Record<string, number>;
  topics: { topic: string; correct: number; total: number }[];
}) {
  return (
    <div>
      <div className="card p-7 text-center">
        <p className="eyebrow">Module Quiz Result</p>
        <p className="mt-3 font-display text-4xl font-semibold text-forest">{score}%</p>
        <p className="mx-auto mt-4 max-w-md leading-relaxed">
          {encouragementFor(score)}
        </p>
        <p className="mt-3 text-sm text-ink-soft">
          The next module is unlocked. One attempt is recorded per quiz.
        </p>
      </div>

      {topics.length > 0 && (
        <div className="card mt-5 p-6">
          <h3 className="font-display text-lg font-bold">Score by topic</h3>
          <ul className="mt-4 space-y-3">
            {topics.map((t) => (
              <li key={t.topic}>
                <div className="flex items-baseline justify-between text-[0.95rem]">
                  <span>{topicLabel(t.topic)}</span>
                  <span className="text-ink-soft">
                    {t.correct}/{t.total}
                  </span>
                </div>
                <div className="mt-1 h-2 overflow-hidden rounded-sm bg-tint">
                  <div
                    className="h-full rounded-sm bg-forest-soft"
                    style={{ width: `${(t.correct / t.total) * 100}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      <PatternDivider className="my-10" />
      <h3 className="font-display text-xl font-semibold">Full review</h3>
      <p className="mt-2 text-sm text-ink-soft">
        Every question with your answer, the correct answer, and the principle
        behind it.
      </p>
      <ol className="mt-6 space-y-4">
        {quiz.questions.map((q, i) => (
          <ReviewQuestion key={q.id} question={q} chosen={answers[q.id]} index={i} />
        ))}
      </ol>
    </div>
  );
}

/* ————— Main section ————— */

export default function QuizSection({
  quiz,
  moduleName,
  departmentHref,
}: {
  quiz: Quiz;
  moduleName: string;
  departmentHref: string;
}) {
  const [store, setStore] = useState<UserStore | null>(null);
  const [phase, setPhase] = useState<
    "loading" | "signed-out" | "intro" | "taking" | "done"
  >("loading");
  const [attempt, setAttempt] = useState<Attempt | null>(null);
  const [session, setSession] = useState<QuizSession | null>(null);
  const [current, setCurrent] = useState(0);
  const [selections, setSelections] = useState<Record<number, number>>({});
  const [result, setResult] = useState<QuizResult | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const s = await getUserStore();
      if (cancelled) return;
      if (!s) {
        setPhase("signed-out");
        return;
      }
      setStore(s);
      const attempts = await s.getQuizAttempts();
      if (cancelled) return;
      const existing = attempts[quiz.id];
      if (existing) {
        setAttempt(existing);
        setPhase("done");
      } else {
        setPhase("intro");
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [quiz.id]);

  const answeredCount = useMemo(
    () => Object.keys(selections).length,
    [selections]
  );

  function start() {
    setSession(buildQuizSession(quiz));
    setSelections({});
    setCurrent(0);
    setPhase("taking");
  }

  async function submit() {
    if (!session || !store) return;
    setSaving(true);
    const r = scoreQuiz(session, selections);
    const saved = await store.saveQuizAttempt(
      quiz.id,
      r.scorePercentage,
      r.answersByQuestionId
    );
    if (!saved) {
      // An attempt already existed (e.g. another tab) — show the stored one.
      const attempts = await store.getQuizAttempts();
      setAttempt(attempts[quiz.id] ?? null);
      setResult(null);
    } else {
      setResult(r);
      setAttempt({
        scorePercentage: r.scorePercentage,
        answers: r.answersByQuestionId,
        completedAt: new Date().toISOString(),
      });
    }
    setSaving(false);
    setPhase("done");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  /* ————— render ————— */

  if (phase === "loading") {
    return <div className="card mt-6 h-32 animate-pulse" aria-hidden="true" />;
  }

  if (phase === "signed-out") {
    return (
      <div className="card mt-6 p-7 text-center">
        <h3 className="font-display text-xl font-bold">Module quiz</h3>
        <p className="mx-auto mt-2 max-w-md text-ink-soft">
          Sign in or continue as a guest to take the quiz — your score unlocks
          the next module.
        </p>
        <Link href="/signup" className="btn btn-primary mt-5">
          Start Learning
        </Link>
      </div>
    );
  }

  if (phase === "done" && attempt) {
    return (
      <ResultsView
        quiz={quiz}
        score={attempt.scorePercentage}
        answers={attempt.answers}
        topics={
          result?.topics ??
          (() => {
            const map = new Map<string, { correct: number; total: number }>();
            for (const q of quiz.questions) {
              const t = map.get(q.topicTag) ?? { correct: 0, total: 0 };
              t.total++;
              if (attempt.answers[q.id] === q.correctAnswerIndex) t.correct++;
              map.set(q.topicTag, t);
            }
            return [...map.entries()]
              .map(([topic, v]) => ({ topic, ...v }))
              .sort((a, b) => a.topic.localeCompare(b.topic));
          })()
        }
      />
    );
  }

  if (phase === "intro") {
    return (
      <div className="card p-7">
        <p className="eyebrow">Module Quiz</p>
        <h3 className="mt-2 font-display text-xl font-semibold">
          Test yourself: {moduleName}
        </h3>
        <ul className="mt-4 space-y-1.5 text-sm text-ink-soft">
          <li>· {quiz.questions.length} questions covering the module</li>
          <li>· You can go back and change answers before submitting</li>
          <li>
            · <strong className="text-ink">One attempt only</strong> — a full
            review with explanations follows, and the next module unlocks.
          </li>
        </ul>
        <button type="button" onClick={start} className="btn btn-primary mt-6">
          Begin the Quiz
        </button>
      </div>
    );
  }

  if (phase === "taking" && session) {
    const pq = session.questions[current];
    const chosen = selections[current];
    const isLast = current === session.questions.length - 1;

    return (
      <div className="card p-6 sm:p-7">
        <div className="flex items-baseline justify-between gap-3">
          <p className="font-display text-xs font-semibold uppercase tracking-wider text-ink-faint">
            Question {current + 1} of {session.questions.length}
          </p>
          <p className="text-sm text-ink-faint">{answeredCount} answered</p>
        </div>
        <div className="mt-2.5 h-1 overflow-hidden rounded-sm bg-tint">
          <div
            className="h-full rounded-sm bg-forest-soft transition-all duration-300"
            style={{ width: `${((current + 1) / session.questions.length) * 100}%` }}
          />
        </div>

        <p className="mt-6 font-display text-[1.05rem] font-semibold leading-snug">
          {pq.question.questionText}
        </p>

        <div className="mt-5 flex flex-col gap-2.5" role="radiogroup" aria-label="Answer options">
          {pq.presentedOptions.map((opt, i) => (
            <button
              key={i}
              type="button"
              role="radio"
              aria-checked={chosen === i}
              onClick={() => setSelections((s) => ({ ...s, [current]: i }))}
              className={`flex items-start gap-3 rounded-md border px-4 py-3.5 text-left text-[1rem] leading-relaxed transition-colors ${
                chosen === i
                  ? "border-forest-soft bg-forest-tint"
                  : "border-line-strong hover:border-forest-soft hover:bg-tint"
              }`}
            >
              <span
                className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded border-2 font-display text-[0.8rem] font-bold ${
                  chosen === i
                    ? "border-forest bg-forest-fill text-on-forest"
                    : "border-line-strong text-ink-faint"
                }`}
              >
                {String.fromCharCode(65 + i)}
              </span>
              <span>{opt}</span>
            </button>
          ))}
        </div>

        <div className="mt-7 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => setCurrent((c) => Math.max(0, c - 1))}
            disabled={current === 0}
            className="btn btn-outline"
          >
            ← Back
          </button>
          {isLast ? (
            <button
              type="button"
              onClick={submit}
              disabled={answeredCount < session.questions.length || saving}
              className="btn btn-primary"
              title={
                answeredCount < session.questions.length
                  ? "Answer every question before submitting"
                  : undefined
              }
            >
              {saving ? "Submitting…" : "Submit Quiz"}
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setCurrent((c) => Math.min(session.questions.length - 1, c + 1))}
              className="btn btn-primary"
            >
              Next →
            </button>
          )}
        </div>
        {isLast && answeredCount < session.questions.length && (
          <p className="mt-3 text-right text-[0.9rem] text-ink-faint">
            {session.questions.length - answeredCount} unanswered — use Back to
            review.
          </p>
        )}
        <p className="mt-6 border-t border-line pt-4 text-[0.9rem] text-ink-faint">
          Module: {moduleName} ·{" "}
          <Link href={departmentHref} className="hover:text-forest">
            back to department
          </Link>
        </p>
      </div>
    );
  }

  return null;
}
