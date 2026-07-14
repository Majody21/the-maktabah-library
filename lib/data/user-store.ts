"use client";

import { getSupabaseBrowser } from "@/lib/supabase/client";
import { getSessionInfo, GUEST_NAME_KEY } from "@/lib/session";
import type { CompletedLessons, QuizAttempts } from "@/lib/progress";
import type { ScheduleData } from "@/lib/schedule/generator";
import type { SupabaseClient } from "@supabase/supabase-js";

export type Profile = {
  name: string;
  streakCount: number;
  lastStudyDate: string | null; // YYYY-MM-DD (local)
};

export interface UserStore {
  readonly mode: "supabase" | "guest";
  getCompletedLessons(): Promise<CompletedLessons>;
  markLessonComplete(lessonId: string): Promise<void>;
  getQuizAttempts(): Promise<QuizAttempts>;
  /** Returns false when an attempt already exists (one attempt per quiz). */
  saveQuizAttempt(
    quizId: string,
    scorePercentage: number,
    answers: Record<string, number>
  ): Promise<boolean>;
  getSchedule(): Promise<ScheduleData | null>;
  saveSchedule(schedule: ScheduleData): Promise<void>;
  getProfile(): Promise<Profile>;
}

export function localDateString(d: Date = new Date()): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

/**
 * Streak: studying on consecutive *scheduled* study days keeps it alive
 * (falls back to consecutive calendar days when no schedule exists).
 */
function nextStreak(
  profile: Profile,
  studyDays: number[] | null,
  today: Date = new Date()
): { streakCount: number; lastStudyDate: string } {
  const todayStr = localDateString(today);
  if (profile.lastStudyDate === todayStr) {
    return { streakCount: Math.max(profile.streakCount, 1), lastStudyDate: todayStr };
  }
  let previousExpected: string;
  if (studyDays && studyDays.length > 0) {
    let prev = new Date(today);
    do {
      prev = new Date(prev.getTime() - 86400000);
    } while (!studyDays.includes(prev.getDay()));
    previousExpected = localDateString(prev);
  } else {
    previousExpected = localDateString(new Date(today.getTime() - 86400000));
  }
  const continues =
    profile.lastStudyDate !== null && profile.lastStudyDate >= previousExpected;
  return {
    streakCount: continues ? profile.streakCount + 1 : 1,
    lastStudyDate: todayStr,
  };
}

/* ————— localStorage guest store (demo mode) ————— */

const LS = {
  completed: "maktabah-completed",
  attempts: "maktabah-attempts",
  schedule: "maktabah-schedule",
  profile: "maktabah-profile",
};

function readJson<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function writeJson(key: string, value: unknown) {
  localStorage.setItem(key, JSON.stringify(value));
}

class LocalUserStore implements UserStore {
  readonly mode = "guest" as const;

  async getCompletedLessons(): Promise<CompletedLessons> {
    return readJson<CompletedLessons>(LS.completed, {});
  }

  async markLessonComplete(lessonId: string): Promise<void> {
    const completed = await this.getCompletedLessons();
    if (!completed[lessonId]) {
      completed[lessonId] = new Date().toISOString();
      writeJson(LS.completed, completed);
    }
    const schedule = await this.getSchedule();
    const profile = await this.getProfile();
    const s = nextStreak(profile, schedule?.studyDays ?? null);
    writeJson(LS.profile, { ...profile, ...s });
  }

  async getQuizAttempts(): Promise<QuizAttempts> {
    return readJson<QuizAttempts>(LS.attempts, {});
  }

  async saveQuizAttempt(
    quizId: string,
    scorePercentage: number,
    answers: Record<string, number>
  ): Promise<boolean> {
    const attempts = await this.getQuizAttempts();
    if (attempts[quizId]) return false;
    attempts[quizId] = {
      scorePercentage,
      answers,
      completedAt: new Date().toISOString(),
    };
    writeJson(LS.attempts, attempts);
    return true;
  }

  async getSchedule(): Promise<ScheduleData | null> {
    return readJson<ScheduleData | null>(LS.schedule, null);
  }

  async saveSchedule(schedule: ScheduleData): Promise<void> {
    writeJson(LS.schedule, schedule);
  }

  async getProfile(): Promise<Profile> {
    const stored = readJson<Partial<Profile>>(LS.profile, {});
    const name =
      stored.name ?? localStorage.getItem(GUEST_NAME_KEY) ?? "Student";
    return {
      name,
      streakCount: stored.streakCount ?? 0,
      lastStudyDate: stored.lastStudyDate ?? null,
    };
  }
}

/* ————— Supabase-backed store ————— */

class SupabaseUserStore implements UserStore {
  readonly mode = "supabase" as const;

  constructor(
    private supabase: SupabaseClient,
    private userId: string,
    private name: string
  ) {}

  async getCompletedLessons(): Promise<CompletedLessons> {
    const { data } = await this.supabase
      .from("user_progress")
      .select("lesson_id, completed_at")
      .eq("user_id", this.userId);
    const out: CompletedLessons = {};
    for (const row of data ?? []) out[row.lesson_id] = row.completed_at;
    return out;
  }

  async markLessonComplete(lessonId: string): Promise<void> {
    await this.supabase
      .from("user_progress")
      .upsert(
        { user_id: this.userId, lesson_id: lessonId },
        { onConflict: "user_id,lesson_id", ignoreDuplicates: true }
      );
    const [schedule, profile] = await Promise.all([
      this.getSchedule(),
      this.getProfile(),
    ]);
    const s = nextStreak(profile, schedule?.studyDays ?? null);
    await this.supabase
      .from("users")
      .update({ streak_count: s.streakCount, last_study_date: s.lastStudyDate })
      .eq("id", this.userId);
  }

  async getQuizAttempts(): Promise<QuizAttempts> {
    const { data } = await this.supabase
      .from("user_quiz_attempts")
      .select("quiz_id, score_percentage, answers, completed_at")
      .eq("user_id", this.userId);
    const out: QuizAttempts = {};
    for (const row of data ?? []) {
      out[row.quiz_id] = {
        scorePercentage: row.score_percentage,
        answers:
          row.answers && typeof row.answers === "object" && !Array.isArray(row.answers)
            ? row.answers
            : {},
        completedAt: row.completed_at,
      };
    }
    return out;
  }

  async saveQuizAttempt(
    quizId: string,
    scorePercentage: number,
    answers: Record<string, number>
  ): Promise<boolean> {
    const { error } = await this.supabase.from("user_quiz_attempts").insert({
      user_id: this.userId,
      quiz_id: quizId,
      score_percentage: scorePercentage,
      answers,
    });
    // 23505 = unique_violation → an attempt already exists
    if (error) return error.code === "23505" ? false : Promise.reject(error);
    return true;
  }

  async getSchedule(): Promise<ScheduleData | null> {
    const { data } = await this.supabase
      .from("user_schedules")
      .select("schedule_data")
      .eq("user_id", this.userId)
      .maybeSingle();
    return (data?.schedule_data as ScheduleData | undefined) ?? null;
  }

  async saveSchedule(schedule: ScheduleData): Promise<void> {
    await this.supabase
      .from("user_schedules")
      .upsert(
        {
          user_id: this.userId,
          schedule_data: schedule,
          updated_at: new Date().toISOString(),
        },
        { onConflict: "user_id" }
      );
    await this.supabase
      .from("users")
      .update({
        study_hours_per_day: schedule.hoursPerDay,
        study_days: schedule.studyDays,
      })
      .eq("id", this.userId);
  }

  async getProfile(): Promise<Profile> {
    const { data } = await this.supabase
      .from("users")
      .select("name, streak_count, last_study_date")
      .eq("id", this.userId)
      .maybeSingle();
    return {
      name: data?.name ?? this.name,
      streakCount: data?.streak_count ?? 0,
      lastStudyDate: data?.last_study_date ?? null,
    };
  }
}

/** Resolve the store for the current session, or null when signed out. */
export async function getUserStore(): Promise<UserStore | null> {
  const session = await getSessionInfo();
  if (!session) return null;
  if (session.mode === "supabase" && session.userId) {
    const supabase = getSupabaseBrowser();
    if (supabase) return new SupabaseUserStore(supabase, session.userId, session.name);
  }
  return new LocalUserStore();
}
