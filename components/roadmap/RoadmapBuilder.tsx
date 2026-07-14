"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import type { Department } from "@/lib/content/types";
import {
  DAY_NAMES,
  estimatedWeeksRemaining,
  generateSchedule,
  type ScheduleData,
} from "@/lib/schedule/generator";
import { getUserStore, type UserStore } from "@/lib/data/user-store";
import { isSupabaseConfigured } from "@/lib/supabase/config";
import { startGuestSession } from "@/lib/session";
import DeptIcon from "@/components/ui/DeptIcon";

const STEP_TITLES = [
  "Choose your departments",
  "Daily study commitment",
  "Days of the week",
  "Review your schedule",
];

export default function RoadmapBuilder({
  departments,
  lessonCounts,
}: {
  departments: Department[];
  lessonCounts: Record<string, number>;
}) {
  const router = useRouter();
  const [store, setStore] = useState<UserStore | null>(null);
  const [storeChecked, setStoreChecked] = useState(false);
  const [guestName, setGuestName] = useState("");

  const [step, setStep] = useState(0);
  const [selectedDepts, setSelectedDepts] = useState<string[]>(["aqeedah"]);
  const [hours, setHours] = useState<1 | 2 | 3>(1);
  const [days, setDays] = useState<number[]>([0, 1, 2, 3, 4]);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    getUserStore().then((s) => {
      setStore(s);
      setStoreChecked(true);
      if (s) {
        s.getSchedule().then((existing) => {
          if (existing) {
            setSelectedDepts(existing.departments);
            setHours(existing.hoursPerDay);
            setDays(existing.studyDays);
          }
        });
      }
    });
  }, []);

  const schedule: ScheduleData = useMemo(
    () => generateSchedule(selectedDepts, hours, days),
    [selectedDepts, hours, days]
  );

  const totalLessons = schedule.lessonQueue.length;
  const weeks = estimatedWeeksRemaining(schedule, {});

  async function confirm() {
    setSaving(true);
    let s = store;
    if (!s && !isSupabaseConfigured) {
      startGuestSession(guestName.trim() || "Student");
      s = await getUserStore();
    }
    if (!s) {
      router.push("/login?next=/roadmap");
      return;
    }
    await s.saveSchedule(schedule);
    router.push("/dashboard");
  }

  function toggleDept(id: string) {
    setSelectedDepts((prev) =>
      prev.includes(id) ? prev.filter((d) => d !== id) : [...prev, id]
    );
  }

  function toggleDay(d: number) {
    setDays((prev) =>
      prev.includes(d) ? prev.filter((x) => x !== d) : [...prev, d].sort()
    );
  }

  const canNext =
    step === 0
      ? selectedDepts.some((d) => (lessonCounts[d] ?? 0) > 0)
      : step === 2
        ? days.length > 0
        : true;

  return (
    <div className="mt-10">
      {/* stepper */}
      <ol className="flex items-start gap-2" aria-label="Progress">
        {STEP_TITLES.map((title, i) => (
          <li key={title} className="flex flex-1 flex-col gap-1.5">
            <span
              className={`h-1.5 rounded-sm ${i <= step ? "bg-gold-bright" : "bg-tint"}`}
            />
            <span
              className={`hidden font-display text-[0.78rem] font-semibold uppercase tracking-wider sm:block ${
                i === step ? "text-gold" : "text-ink-faint"
              }`}
            >
              {title}
            </span>
          </li>
        ))}
      </ol>
      <h2 className="mt-6 font-display text-2xl font-bold sm:hidden">
        {STEP_TITLES[step]}
      </h2>

      {/* Step 1: departments */}
      {step === 0 && (
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {departments.map((dept) => {
            const count = lessonCounts[dept.id] ?? 0;
            const selectable = dept.isActive && count > 0;
            const selected = selectedDepts.includes(dept.id);
            return (
              <button
                key={dept.id}
                type="button"
                disabled={!selectable}
                onClick={() => toggleDept(dept.id)}
                aria-pressed={selected}
                className={`card flex items-start gap-3.5 p-5 text-left transition-colors ${
                  selected && selectable
                    ? "border-forest-soft bg-forest-tint"
                    : selectable
                      ? "hover:border-forest-soft"
                      : "opacity-55"
                }`}
              >
                <span
                  className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded border-2 ${
                    selected && selectable
                      ? "border-forest bg-forest-fill text-on-forest"
                      : "border-line-strong"
                  }`}
                >
                  {selected && selectable && (
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M4.5 12.5l5 5L19.5 7" />
                    </svg>
                  )}
                </span>
                <span className="min-w-0">
                  <span className="flex items-center gap-2 font-display text-[1.08rem] font-semibold">
                    <span className="text-forest"><DeptIcon name={dept.icon} size={20} /></span>
                    {dept.name}
                  </span>
                  <span className="mt-1 block text-[0.92rem] leading-relaxed text-ink-soft">
                    {dept.description}
                  </span>
                  <span className="mt-1.5 block font-display text-[0.8rem] font-bold uppercase tracking-wider text-ink-faint">
                    {selectable ? `${count} lessons available` : "Coming soon"}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      )}

      {/* Step 2: hours */}
      {step === 1 && (
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {([1, 2, 3] as const).map((h) => (
            <button
              key={h}
              type="button"
              onClick={() => setHours(h)}
              aria-pressed={hours === h}
              className={`card p-6 text-center transition-colors ${
                hours === h ? "border-forest-soft bg-forest-tint" : "hover:border-forest-soft"
              }`}
            >
              <span className="font-display text-3xl font-semibold text-forest">{h}</span>
              <span className="block font-display text-[0.95rem] font-semibold">
                {h === 1 ? "hour" : "hours"} / day
              </span>
              <span className="mt-1.5 block text-sm text-ink-soft">
                ≈ {h} {h === 1 ? "lesson" : "lessons"} per study day
              </span>
            </button>
          ))}
        </div>
      )}

      {/* Step 3: days */}
      {step === 2 && (
        <div className="mt-6">
          <div className="flex flex-wrap gap-2.5">
            {DAY_NAMES.map((name, d) => (
              <button
                key={name}
                type="button"
                onClick={() => toggleDay(d)}
                aria-pressed={days.includes(d)}
                className={`min-w-[6.5rem] rounded-md border px-4 py-3 font-display font-semibold transition-colors ${
                  days.includes(d)
                    ? "border-forest bg-forest-fill text-on-forest"
                    : "border-line-strong text-ink-soft hover:border-forest-soft"
                }`}
              >
                {name}
              </button>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-2 text-[0.9rem]">
            <button type="button" className="btn btn-outline !min-h-9 !px-3 !py-1.5 !text-[0.85rem]" onClick={() => setDays([0, 1, 2, 3, 4, 5, 6])}>
              Every day
            </button>
            <button type="button" className="btn btn-outline !min-h-9 !px-3 !py-1.5 !text-[0.85rem]" onClick={() => setDays([1, 2, 3, 4, 5])}>
              Weekdays
            </button>
            <button type="button" className="btn btn-outline !min-h-9 !px-3 !py-1.5 !text-[0.85rem]" onClick={() => setDays([0, 6])}>
              Weekends
            </button>
          </div>
          {days.length === 0 && (
            <p className="mt-4 text-[0.95rem] text-gold">
              Pick at least one study day.
            </p>
          )}
        </div>
      )}

      {/* Step 4: review + confirm */}
      {step === 3 && (
        <div className="mt-6">
          <div className="card p-6">
            <h3 className="font-display text-lg font-semibold">Your schedule</h3>
            <dl className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              <div>
                <dt className="font-display text-[0.8rem] font-bold uppercase tracking-wider text-ink-faint">
                  Departments
                </dt>
                <dd className="mt-0.5">
                  {selectedDepts
                    .map((id) => departments.find((d) => d.id === id)?.name ?? id)
                    .join(", ")}
                </dd>
              </div>
              <div>
                <dt className="font-display text-[0.8rem] font-bold uppercase tracking-wider text-ink-faint">
                  Rhythm
                </dt>
                <dd className="mt-0.5">
                  {hours} {hours === 1 ? "lesson unit" : "lesson units"} on{" "}
                  {days.length === 7 ? "every day" : days.map((d) => DAY_NAMES[d].slice(0, 3)).join(", ")}
                </dd>
              </div>
              <div>
                <dt className="font-display text-[0.8rem] font-bold uppercase tracking-wider text-ink-faint">
                  Queue
                </dt>
                <dd className="mt-0.5">{totalLessons} lessons + 5 module quizzes</dd>
              </div>
              <div>
                <dt className="font-display text-[0.8rem] font-bold uppercase tracking-wider text-ink-faint">
                  Estimated pace
                </dt>
                <dd className="mt-0.5">
                  {weeks ? `≈ ${weeks} ${weeks === 1 ? "week" : "weeks"} for current content` : "—"}
                </dd>
              </div>
            </dl>
            <p className="mt-5 text-sm text-ink-soft">
              Miss a day and the plan simply shifts forward.
            </p>
          </div>

          {storeChecked && !store && !isSupabaseConfigured && (
            <div className="card mt-4 p-5">
              <label className="block">
                <span className="mb-1.5 block font-display text-[0.95rem] font-semibold">
                  Your name (guest mode — saved in this browser)
                </span>
                <input
                  className="input"
                  type="text"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  placeholder="e.g. Abdullah"
                />
              </label>
            </div>
          )}
          {storeChecked && !store && isSupabaseConfigured && (
            <p className="mt-4 text-center text-[0.98rem] text-ink-soft">
              <Link href="/login?next=/roadmap" className="font-semibold text-forest hover:underline">
                Sign in
              </Link>{" "}
              to save your schedule.
            </p>
          )}
        </div>
      )}

      {/* nav buttons */}
      <div className="mt-8 flex items-center justify-between">
        <button
          type="button"
          className="btn btn-outline"
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          disabled={step === 0}
        >
          ← Back
        </button>
        {step < 3 ? (
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setStep((s) => s + 1)}
            disabled={!canNext}
          >
            Continue →
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-primary"
            onClick={confirm}
            disabled={saving || (isSupabaseConfigured && !store)}
          >
            {saving ? "Saving…" : "Confirm & Save Schedule"}
          </button>
        )}
      </div>
    </div>
  );
}
