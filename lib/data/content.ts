/**
 * Content repository. With Supabase configured, content is read from the
 * database (so videos/lessons can be swapped without redeploying). Without
 * it, the bundled seed content serves everything (demo mode).
 *
 * Uses a plain anon-key client (no cookies) because content is public —
 * this keeps content pages statically renderable.
 */
import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { isSupabaseConfigured, supabaseAnonKey, supabaseUrl } from "@/lib/supabase/config";
import * as staticContent from "@/lib/content";
import type {
  Department,
  Fatwa,
  GlossaryTerm,
  Lesson,
  Module,
  Proof,
  Quiz,
  Resource,
} from "@/lib/content/types";

let client: SupabaseClient | null = null;
function db(): SupabaseClient | null {
  if (!isSupabaseConfigured) return null;
  if (!client) client = createClient(supabaseUrl, supabaseAnonKey);
  return client;
}

/* ————— row mappers (snake_case → camelCase) ————— */

type Row = Record<string, any>;

const mapDepartment = (r: Row): Department => ({
  id: r.id,
  slug: r.slug,
  name: r.name,
  arabicName: r.arabic_name ?? "",
  description: r.description ?? "",
  icon: r.icon ?? "book",
  displayOrder: r.display_order ?? 0,
  isActive: Boolean(r.is_active),
  prerequisiteModuleId: r.prerequisite_module_id ?? null,
  prerequisiteNote: r.prerequisite_note ?? null,
});

const mapModule = (r: Row): Module => ({
  id: r.id,
  departmentId: r.department_id,
  slug: r.slug,
  name: r.name,
  description: r.description ?? "",
  displayOrder: r.display_order ?? 0,
  prerequisiteModuleId: r.prerequisite_module_id ?? null,
  estimatedMinutes: r.estimated_minutes ?? 0,
});

const mapProof = (r: Row): Proof => ({
  id: r.id,
  lessonId: r.lesson_id,
  type: r.type,
  arabicText: r.arabic_text,
  englishTranslation: r.english_translation,
  reference: r.reference,
  displayOrder: r.display_order ?? 0,
});

const mapLesson = (r: Row, proofs: Proof[], video: Row | null): Lesson => ({
  id: r.id,
  moduleId: r.module_id,
  slug: r.slug,
  title: r.title,
  content: r.content_html ?? "",
  displayOrder: r.display_order ?? 0,
  videoYoutubeUrl: video?.youtube_url ?? r.video_youtube_url ?? null,
  videoScholar: video?.scholar ?? r.video_scholar ?? null,
  videoTitle: video?.title ?? r.video_title ?? null,
  bookRecommendations: r.book_recommendations ?? [],
  basedOn: r.based_on ?? "",
  proofs,
});

/* ————— queries ————— */

export async function getDepartments(): Promise<Department[]> {
  const supabase = db();
  if (!supabase) return staticContent.departments;
  const { data } = await supabase
    .from("departments")
    .select("*")
    .order("display_order");
  return (data ?? []).map(mapDepartment);
}

export async function getDepartmentBySlug(slug: string): Promise<Department | null> {
  const supabase = db();
  if (!supabase) return staticContent.getDepartmentBySlug(slug);
  const { data } = await supabase
    .from("departments")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();
  return data ? mapDepartment(data) : null;
}

export async function getModulesForDepartment(departmentId: string): Promise<Module[]> {
  const supabase = db();
  if (!supabase) return staticContent.modulesForDepartment(departmentId);
  const { data } = await supabase
    .from("modules")
    .select("*")
    .eq("department_id", departmentId)
    .order("display_order");
  return (data ?? []).map(mapModule);
}

export async function getModuleBySlug(
  departmentId: string,
  moduleSlug: string
): Promise<Module | null> {
  const supabase = db();
  if (!supabase) return staticContent.getModule(departmentId, moduleSlug);
  const { data } = await supabase
    .from("modules")
    .select("*")
    .eq("department_id", departmentId)
    .eq("slug", moduleSlug)
    .maybeSingle();
  return data ? mapModule(data) : null;
}

export async function getLessonsForModule(moduleId: string): Promise<Lesson[]> {
  const supabase = db();
  if (!supabase) return staticContent.lessonsForModule(moduleId);
  const { data: lessonRows } = await supabase
    .from("lessons")
    .select("*")
    .eq("module_id", moduleId)
    .order("display_order");
  if (!lessonRows?.length) return [];
  const ids = lessonRows.map((l) => l.id);
  const [{ data: proofRows }, { data: videoRows }] = await Promise.all([
    supabase.from("proofs").select("*").in("lesson_id", ids).order("display_order"),
    supabase.from("videos").select("*").in("lesson_id", ids),
  ]);
  return lessonRows.map((l) =>
    mapLesson(
      l,
      (proofRows ?? []).filter((p) => p.lesson_id === l.id).map(mapProof),
      (videoRows ?? []).find((v) => v.lesson_id === l.id) ?? null
    )
  );
}

export async function getLesson(
  moduleId: string,
  lessonSlug: string
): Promise<Lesson | null> {
  const supabase = db();
  if (!supabase) return staticContent.getLesson(moduleId, lessonSlug);
  const { data: l } = await supabase
    .from("lessons")
    .select("*")
    .eq("module_id", moduleId)
    .eq("slug", lessonSlug)
    .maybeSingle();
  if (!l) return null;
  const [{ data: proofRows }, { data: video }] = await Promise.all([
    supabase.from("proofs").select("*").eq("lesson_id", l.id).order("display_order"),
    supabase.from("videos").select("*").eq("lesson_id", l.id).maybeSingle(),
  ]);
  return mapLesson(l, (proofRows ?? []).map(mapProof), video ?? null);
}

export async function getQuizForModule(moduleId: string): Promise<Quiz | null> {
  const supabase = db();
  if (!supabase) return staticContent.getQuizForModule(moduleId);
  const { data: quiz } = await supabase
    .from("quizzes")
    .select("*")
    .eq("module_id", moduleId)
    .maybeSingle();
  if (!quiz) return null;
  const { data: questions } = await supabase
    .from("quiz_questions")
    .select("*")
    .eq("quiz_id", quiz.id);
  return {
    id: quiz.id,
    moduleId: quiz.module_id,
    questions: (questions ?? []).map((q) => ({
      id: q.id,
      quizId: q.quiz_id,
      questionText: q.question_text,
      options: q.options ?? [],
      correctAnswerIndex: q.correct_answer_index,
      explanation: q.explanation ?? "",
      topicTag: q.topic_tag ?? "general",
      difficulty: q.difficulty ?? "application",
    })),
  };
}

export async function getGlossaryTerms(): Promise<GlossaryTerm[]> {
  const supabase = db();
  if (!supabase) return staticContent.glossaryTerms;
  const { data } = await supabase
    .from("glossary_terms")
    .select("*")
    .order("transliteration");
  return (data ?? []).map((r) => ({
    id: r.id,
    arabicTerm: r.arabic_term,
    transliteration: r.transliteration,
    definition: r.definition,
    category: r.category,
  }));
}

export async function getResources(): Promise<Resource[]> {
  const supabase = db();
  if (!supabase) return staticContent.resources;
  const { data } = await supabase.from("resources").select("*");
  return (data ?? []).map((r) => ({
    id: r.id,
    departmentId: r.department_id ?? null,
    title: r.title,
    author: r.author ?? "—",
    type: r.type,
    url: r.url,
    description: r.description ?? "",
    pdfUrl: r.pdf_url ?? null,
    coverUrl: r.cover_url ?? null,
  }));
}

export async function getFatawa(): Promise<Fatwa[]> {
  const supabase = db();
  if (!supabase) return staticContent.fatawa;
  const { data } = await supabase.from("fatawa").select("*").order("category");
  return (data ?? []).map((r) => ({
    id: r.id,
    topic: r.topic,
    question: r.question,
    answerText: r.answer_text,
    scholar: r.scholar,
    sourceReference: r.source_reference ?? "",
    category: r.category ?? "General",
  }));
}
