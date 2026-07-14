import type { Quiz, QuizQuestion } from "@/lib/content/types";

/** A quiz question as presented: options shuffled, with a map back to original indices. */
export type PresentedQuestion = {
  question: QuizQuestion;
  /** presentedOptions[i] === question.options[optionOrder[i]] */
  presentedOptions: string[];
  optionOrder: number[];
};

export type QuizSession = {
  quizId: string;
  questions: PresentedQuestion[];
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Build a session with question order and option order shuffled per load. */
export function buildQuizSession(quiz: Quiz): QuizSession {
  const questions = shuffle(quiz.questions).map((question) => {
    const optionOrder = shuffle(question.options.map((_, i) => i));
    return {
      question,
      optionOrder,
      presentedOptions: optionOrder.map((i) => question.options[i]),
    };
  });
  return { quizId: quiz.id, questions };
}

export type QuizResult = {
  scorePercentage: number;
  correctCount: number;
  total: number;
  /** original option index chosen per original question id */
  answersByQuestionId: Record<string, number>;
  /** per-topic breakdown */
  topics: { topic: string; correct: number; total: number }[];
};

/**
 * Score a finished session. `selections` maps presented-question index to the
 * presented-option index the user chose.
 */
export function scoreQuiz(
  session: QuizSession,
  selections: Record<number, number>
): QuizResult {
  let correctCount = 0;
  const answersByQuestionId: Record<string, number> = {};
  const topicMap = new Map<string, { correct: number; total: number }>();

  session.questions.forEach((pq, idx) => {
    const chosenPresented = selections[idx];
    const originalIndex =
      chosenPresented === undefined ? -1 : pq.optionOrder[chosenPresented];
    answersByQuestionId[pq.question.id] = originalIndex;
    const isCorrect = originalIndex === pq.question.correctAnswerIndex;
    if (isCorrect) correctCount++;
    const t = topicMap.get(pq.question.topicTag) ?? { correct: 0, total: 0 };
    t.total++;
    if (isCorrect) t.correct++;
    topicMap.set(pq.question.topicTag, t);
  });

  const total = session.questions.length;
  return {
    scorePercentage: Math.round((correctCount / total) * 100),
    correctCount,
    total,
    answersByQuestionId,
    topics: [...topicMap.entries()]
      .map(([topic, v]) => ({ topic, ...v }))
      .sort((a, b) => a.topic.localeCompare(b.topic)),
  };
}

/** Score-band encouragement messages (per site spec). */
export function encouragementFor(scorePercentage: number): string {
  if (scorePercentage >= 90)
    return "بارك الله فيك — May Allah increase you in beneficial knowledge!";
  if (scorePercentage >= 75)
    return "Good effort. Review the explanations below to strengthen what you've learned.";
  if (scorePercentage >= 60)
    return "Review the lesson material and the explanations below. Knowledge comes with patience and repetition.";
  return "Don't be discouraged. The Salaf used to review their knowledge constantly. Go through the lesson again and reflect on the proofs.";
}

/** Pretty label for a topic tag like "hadith-jibreel". */
export function topicLabel(tag: string): string {
  return tag
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}
