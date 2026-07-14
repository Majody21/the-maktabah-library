import { orderedLessonsForDepartments, allLessons, lessonPath } from "@/lib/content";
import type { Lesson } from "@/lib/content/types";
import type { CompletedLessons } from "@/lib/progress";

export type ScheduleData = {
  departments: string[];
  hoursPerDay: 1 | 2 | 3;
  /** Days of week available for study, 0 = Sunday … 6 = Saturday. */
  studyDays: number[];
  /** Lesson ids in curriculum order at generation time. */
  lessonQueue: string[];
  createdAt: string;
};

export const DAY_NAMES = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

/**
 * One lesson unit ≈ 45-60 min (reading + video + quiz time), so hours/day
 * maps directly to lesson units per study day.
 */
export function unitsPerDay(hoursPerDay: 1 | 2 | 3): number {
  return hoursPerDay;
}

export function generateSchedule(
  departmentIds: string[],
  hoursPerDay: 1 | 2 | 3,
  studyDays: number[]
): ScheduleData {
  return {
    departments: departmentIds,
    hoursPerDay,
    studyDays: [...studyDays].sort((a, b) => a - b),
    lessonQueue: orderedLessonsForDepartments(departmentIds).map((l) => l.id),
    createdAt: new Date().toISOString(),
  };
}

export function lessonById(id: string): Lesson | null {
  return allLessons.find((l) => l.id === id) ?? null;
}

/**
 * The schedule is intentionally flexible: rather than pinning lessons to
 * calendar dates, "today's plan" is always the next N incomplete lessons in
 * the queue. Missing a day shifts everything forward automatically.
 */
export function todaysPlan(
  schedule: ScheduleData,
  completed: CompletedLessons,
  now: Date = new Date()
): {
  isStudyDay: boolean;
  lessons: Lesson[];
  remainingCount: number;
  nextStudyDayName: string | null;
} {
  const remaining = schedule.lessonQueue.filter((id) => !completed[id]);
  const isStudyDay = schedule.studyDays.includes(now.getDay());
  const todays = isStudyDay
    ? remaining
        .slice(0, unitsPerDay(schedule.hoursPerDay))
        .map(lessonById)
        .filter((l): l is Lesson => l !== null)
    : [];

  let nextStudyDayName: string | null = null;
  if (schedule.studyDays.length > 0) {
    for (let offset = 1; offset <= 7; offset++) {
      const d = (now.getDay() + offset) % 7;
      if (schedule.studyDays.includes(d)) {
        nextStudyDayName = offset === 1 ? "tomorrow" : DAY_NAMES[d];
        break;
      }
    }
  }

  return {
    isStudyDay,
    lessons: todays,
    remainingCount: remaining.length,
    nextStudyDayName,
  };
}

/** Rough finish estimate: remaining units / units-per-week. */
export function estimatedWeeksRemaining(
  schedule: ScheduleData,
  completed: CompletedLessons
): number | null {
  const remaining = schedule.lessonQueue.filter((id) => !completed[id]).length;
  const perWeek = schedule.studyDays.length * unitsPerDay(schedule.hoursPerDay);
  if (perWeek === 0) return null;
  return Math.ceil(remaining / perWeek);
}

/** First incomplete lesson in the queue — the "continue where you left off" target. */
export function continueTarget(
  schedule: ScheduleData | null,
  completed: CompletedLessons
): { lesson: Lesson; href: string } | null {
  const queue = schedule?.lessonQueue?.length
    ? schedule.lessonQueue
    : orderedLessonsForDepartments(["aqeedah"]).map((l) => l.id);
  for (const id of queue) {
    if (!completed[id]) {
      const lesson = lessonById(id);
      if (lesson) return { lesson, href: lessonPath(lesson) };
    }
  }
  return null;
}
