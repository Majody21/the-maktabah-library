import type { Module, Department } from "@/lib/content/types";
import { getQuizForModule, lessonsForModule, modulesForDepartment } from "@/lib/content";

export type CompletedLessons = Record<string, string>; // lessonId -> completedAt ISO
export type QuizAttempts = Record<
  string,
  {
    scorePercentage: number;
    /** questionId -> original option index chosen (-1 = unanswered) */
    answers: Record<string, number>;
    completedAt: string;
  }
>;

export type ModuleStatus = "locked" | "in-progress" | "complete";

/** A module is complete when its quiz has been attempted (any score unlocks the next). */
export function isModuleComplete(moduleId: string, attempts: QuizAttempts): boolean {
  const quiz = getQuizForModule(moduleId);
  if (!quiz) return false;
  return Boolean(attempts[quiz.id]);
}

export function isModuleUnlocked(module: Module, attempts: QuizAttempts): boolean {
  if (!module.prerequisiteModuleId) return true;
  return isModuleComplete(module.prerequisiteModuleId, attempts);
}

export function moduleStatus(
  module: Module,
  completed: CompletedLessons,
  attempts: QuizAttempts
): ModuleStatus {
  if (isModuleComplete(module.id, attempts)) return "complete";
  if (!isModuleUnlocked(module, attempts)) return "locked";
  return "in-progress";
}

export function isDepartmentUnlocked(dept: Department, attempts: QuizAttempts): boolean {
  if (!dept.prerequisiteModuleId) return true;
  return isModuleComplete(dept.prerequisiteModuleId, attempts);
}

/** Percent of a department's lessons completed (0-100). */
export function departmentProgress(
  departmentId: string,
  completed: CompletedLessons
): number {
  const lessons = modulesForDepartment(departmentId).flatMap((m) =>
    lessonsForModule(m.id)
  );
  if (lessons.length === 0) return 0;
  const done = lessons.filter((l) => completed[l.id]).length;
  return Math.round((done / lessons.length) * 100);
}

export function moduleLessonProgress(
  moduleId: string,
  completed: CompletedLessons
): { done: number; total: number } {
  const lessons = lessonsForModule(moduleId);
  return {
    done: lessons.filter((l) => completed[l.id]).length,
    total: lessons.length,
  };
}
