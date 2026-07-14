import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getDepartmentBySlug,
  getLesson,
  getLessonsForModule,
  getModuleBySlug,
  getModulesForDepartment,
  getQuizForModule,
} from "@/lib/data/content";
import LessonBody from "@/components/lesson/LessonBody";
import LessonActions from "@/components/lesson/LessonActions";
import VideoEmbed from "@/components/lesson/VideoEmbed";
import QuizSection from "@/components/quiz/QuizSection";

export const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; module: string; lesson: string }>;
}) {
  const { slug, module: moduleSlug, lesson: lessonSlug } = await params;
  const department = await getDepartmentBySlug(slug);
  if (!department) return {};
  const module = await getModuleBySlug(department.id, moduleSlug);
  if (!module) return {};
  const lesson = await getLesson(module.id, lessonSlug);
  if (!lesson) return {};
  return {
    title: `${lesson.title} — ${module.name}`,
    description: `${module.name}, ${department.name} department: ${lesson.title}. Proof-based lesson with Quran and Sunnah evidences.`,
  };
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{ slug: string; module: string; lesson: string }>;
}) {
  const { slug, module: moduleSlug, lesson: lessonSlug } = await params;

  const department = await getDepartmentBySlug(slug);
  if (!department) notFound();
  const module = await getModuleBySlug(department.id, moduleSlug);
  if (!module) notFound();
  const lesson = await getLesson(module.id, lessonSlug);
  if (!lesson) notFound();

  const moduleLessons = await getLessonsForModule(module.id);
  const idx = moduleLessons.findIndex((l) => l.id === lesson.id);
  const isLast = idx === moduleLessons.length - 1;

  // Next lesson: within this module, else the first lesson of the next module.
  let nextHref: string | null = null;
  let nextTitle: string | null = null;
  if (!isLast && idx >= 0) {
    const next = moduleLessons[idx + 1];
    nextHref = `/departments/${department.slug}/${module.slug}/${next.slug}`;
    nextTitle = next.title;
  } else {
    const deptModules = await getModulesForDepartment(department.id);
    const mIdx = deptModules.findIndex((m) => m.id === module.id);
    if (mIdx >= 0 && mIdx < deptModules.length - 1) {
      const nextModule = deptModules[mIdx + 1];
      const nextLessons = await getLessonsForModule(nextModule.id);
      if (nextLessons.length > 0) {
        nextHref = `/departments/${department.slug}/${nextModule.slug}/${nextLessons[0].slug}`;
        nextTitle = nextModule.name;
      }
    }
  }

  // Previous lesson: within this module, else the last lesson of the previous module.
  let prevHref: string | null = null;
  let prevTitle: string | null = null;
  if (idx > 0) {
    const prev = moduleLessons[idx - 1];
    prevHref = `/departments/${department.slug}/${module.slug}/${prev.slug}`;
    prevTitle = prev.title;
  } else {
    const deptModules = await getModulesForDepartment(department.id);
    const mIdx = deptModules.findIndex((m) => m.id === module.id);
    if (mIdx > 0) {
      const prevModule = deptModules[mIdx - 1];
      const prevLessons = await getLessonsForModule(prevModule.id);
      if (prevLessons.length > 0) {
        const last = prevLessons[prevLessons.length - 1];
        prevHref = `/departments/${department.slug}/${prevModule.slug}/${last.slug}`;
        prevTitle = prevModule.name;
      }
    }
  }

  const quiz = isLast ? await getQuizForModule(module.id) : null;

  return (
    <article className="mx-auto max-w-2xl px-6 py-10">
      <nav className="text-sm text-ink-faint" aria-label="Breadcrumb">
        <Link href="/departments" className="hover:text-forest">Departments</Link>
        {" / "}
        <Link href={`/departments/${department.slug}`} className="hover:text-forest">
          {department.name}
        </Link>
        {" / "}
        <span className="text-ink-soft">{module.name}</span>
      </nav>

      <header className="mt-8">
        <p className="text-sm text-ink-faint">
          Lesson {idx + 1} of {moduleLessons.length}
        </p>
        <h1 className="mt-2 font-display text-[1.7rem] font-semibold leading-snug sm:text-3xl">
          {lesson.title}
        </h1>
      </header>

      {/* ————— A. Text overview with proofs ————— */}
      <section className="mt-10">
        <LessonBody lesson={lesson} />
      </section>

      {lesson.basedOn && (
        <p className="mt-10 text-sm italic text-ink-faint">
          Based on: {lesson.basedOn}
        </p>
      )}

      {lesson.bookRecommendations.length > 0 && (
        <section className="mt-8 rounded-lg border border-line p-5">
          <h2 className="font-display text-base font-semibold">Go deeper</h2>
          <ul className="mt-3 space-y-3">
            {lesson.bookRecommendations.map((book) => (
              <li key={book.title} className="text-[0.92rem]">
                <a
                  href={book.pdfUrl ?? book.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-forest hover:underline"
                >
                  {book.title} {book.pdfUrl ? "(PDF) " : ""}↗
                </a>
                <span className="text-ink-soft"> — {book.author}</span>
                {book.note && (
                  <p className="mt-0.5 text-sm text-ink-faint">{book.note}</p>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* ————— B. Scholar's video ————— */}
      <section className="mt-14">
        <h2 className="font-display text-xl font-semibold">
          Hear it from the scholars
        </h2>
        <div className="mt-5">
          <VideoEmbed
            youtubeUrl={lesson.videoYoutubeUrl}
            title={lesson.videoTitle}
            scholar={lesson.videoScholar}
          />
        </div>
      </section>

      {/* ————— Completion + C. quiz on the final lesson ————— */}
      <LessonActions
        lessonId={lesson.id}
        nextHref={nextHref}
        nextTitle={nextTitle}
        prevHref={prevHref}
        prevTitle={prevTitle}
        isLastInModule={isLast && Boolean(quiz)}
      />

      {quiz && (
        <section className="mt-14" id="quiz">
          <QuizSection
            quiz={quiz}
            moduleName={module.name}
            departmentHref={`/departments/${department.slug}`}
          />
        </section>
      )}
    </article>
  );
}
