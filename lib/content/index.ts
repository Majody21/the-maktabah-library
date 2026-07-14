import { departments, modules, modulesForDepartment } from "./departments";
import { fivePillarsLessons } from "./lessons/five-pillars";
import { sixPillarsLessons } from "./lessons/six-pillars";
import { usulThalathahLessons } from "./lessons/usul-thalathah";
import { categoriesTawheedLessons } from "./lessons/categories-tawheed";
import { qawaidArbaLessons } from "./lessons/qawaid-arba";
import { fivePillarsQuiz } from "./quizzes/five-pillars-quiz";
import { sixPillarsQuiz } from "./quizzes/six-pillars-quiz";
import { usulThalathahQuiz } from "./quizzes/usul-thalathah-quiz";
import { categoriesTawheedQuiz } from "./quizzes/categories-tawheed-quiz";
import { qawaidArbaQuiz } from "./quizzes/qawaid-arba-quiz";
import { glossaryTerms } from "./glossary";
import { resources } from "./resources";
import { fatawa } from "./fatawa";
import type { Lesson, Module, Quiz } from "./types";

export { departments, modules, modulesForDepartment, glossaryTerms, resources, fatawa };

export const allLessons: Lesson[] = [
  ...fivePillarsLessons,
  ...sixPillarsLessons,
  ...usulThalathahLessons,
  ...categoriesTawheedLessons,
  ...qawaidArbaLessons,
];

export const allQuizzes: Quiz[] = [
  fivePillarsQuiz,
  sixPillarsQuiz,
  usulThalathahQuiz,
  categoriesTawheedQuiz,
  qawaidArbaQuiz,
];

export function getDepartmentBySlug(slug: string) {
  return departments.find((d) => d.slug === slug) ?? null;
}

export function getModule(departmentId: string, moduleSlug: string): Module | null {
  return (
    modules.find(
      (m) => m.departmentId === departmentId && m.slug === moduleSlug
    ) ?? null
  );
}

export function getModuleById(moduleId: string): Module | null {
  return modules.find((m) => m.id === moduleId) ?? null;
}

export function lessonsForModule(moduleId: string): Lesson[] {
  return allLessons
    .filter((l) => l.moduleId === moduleId)
    .sort((a, b) => a.displayOrder - b.displayOrder);
}

export function getLesson(moduleId: string, lessonSlug: string): Lesson | null {
  return (
    allLessons.find(
      (l) => l.moduleId === moduleId && l.slug === lessonSlug
    ) ?? null
  );
}

export function getQuizForModule(moduleId: string): Quiz | null {
  return allQuizzes.find((q) => q.moduleId === moduleId) ?? null;
}

/**
 * Every lesson of the given departments in curriculum order:
 * department order → module order → lesson order.
 */
export function orderedLessonsForDepartments(departmentIds: string[]): Lesson[] {
  const result: Lesson[] = [];
  const sortedDepts = departments
    .filter((d) => departmentIds.includes(d.id))
    .sort((a, b) => a.displayOrder - b.displayOrder);
  for (const dept of sortedDepts) {
    for (const mod of modulesForDepartment(dept.id)) {
      result.push(...lessonsForModule(mod.id));
    }
  }
  return result;
}

/** Locate a lesson's routing context (department + module slugs). */
export function lessonPath(lesson: Lesson): string {
  const mod = getModuleById(lesson.moduleId);
  const dept = mod ? departments.find((d) => d.id === mod.departmentId) : null;
  if (!mod || !dept) return "/departments";
  return `/departments/${dept.slug}/${mod.slug}/${lesson.slug}`;
}

/** The lesson that follows the given one in its department's curriculum. */
export function nextLessonAfter(lesson: Lesson): Lesson | null {
  const mod = getModuleById(lesson.moduleId);
  if (!mod) return null;
  const inModule = lessonsForModule(mod.id);
  const idx = inModule.findIndex((l) => l.id === lesson.id);
  if (idx >= 0 && idx < inModule.length - 1) return inModule[idx + 1];
  // first lesson of the next module in the same department
  const deptModules = modulesForDepartment(mod.departmentId);
  const mIdx = deptModules.findIndex((m) => m.id === mod.id);
  if (mIdx >= 0 && mIdx < deptModules.length - 1) {
    const nextMod = lessonsForModule(deptModules[mIdx + 1].id);
    return nextMod[0] ?? null;
  }
  return null;
}
