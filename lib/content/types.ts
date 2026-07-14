export type Department = {
  id: string;
  slug: string;
  name: string;
  arabicName: string;
  description: string;
  icon: string;
  displayOrder: number;
  isActive: boolean;
  /** Module that must be completed before this department unlocks. */
  prerequisiteModuleId: string | null;
  prerequisiteNote: string | null;
};

export type Module = {
  id: string;
  departmentId: string;
  slug: string;
  name: string;
  description: string;
  displayOrder: number;
  /** Previous module whose quiz must be completed before this one unlocks. */
  prerequisiteModuleId: string | null;
  estimatedMinutes: number;
};

export type Proof = {
  id: string;
  lessonId: string;
  type: "quran" | "hadith";
  arabicText: string;
  englishTranslation: string;
  reference: string;
  displayOrder: number;
};

export type BookRecommendation = {
  title: string;
  author: string;
  url: string;
  note: string;
  /** Direct link to a (legitimately free) PDF of the book. Preferred over url when set. */
  pdfUrl?: string | null;
};

export type Lesson = {
  id: string;
  moduleId: string;
  slug: string;
  title: string;
  /**
   * Lesson body. Paragraphs are separated by blank lines; a line consisting
   * of the token [[proof:N]] renders the proof whose displayOrder is N.
   * **bold** is supported for key terms.
   */
  content: string;
  displayOrder: number;
  videoYoutubeUrl: string | null;
  videoScholar: string | null;
  videoTitle: string | null;
  bookRecommendations: BookRecommendation[];
  /** Which scholar's explanation the lesson summary draws from. */
  basedOn: string;
  proofs: Proof[];
};

export type QuizQuestion = {
  id: string;
  quizId: string;
  questionText: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  topicTag: string;
  difficulty: "recall" | "application" | "analysis";
};

export type Quiz = {
  id: string;
  moduleId: string;
  questions: QuizQuestion[];
};

export type GlossaryTerm = {
  id: string;
  arabicTerm: string;
  transliteration: string;
  definition: string;
  category: string;
};

export type Resource = {
  id: string;
  departmentId: string | null;
  title: string;
  author: string;
  type: "book" | "video" | "website";
  url: string;
  description: string;
  /** Direct link to a (legitimately free) PDF of the book. Preferred over url when set. */
  pdfUrl?: string | null;
  /** Book cover image URL; a styled cover placeholder renders when absent. */
  coverUrl?: string | null;
};

export type Fatwa = {
  id: string;
  topic: string;
  question: string;
  answerText: string;
  scholar: string;
  sourceReference: string;
  category: string;
};
