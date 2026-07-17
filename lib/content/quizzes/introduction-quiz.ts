import type { Quiz } from "../types";

export const introductionQuiz: Quiz = {
  id: "quiz-introduction",
  moduleId: "introduction",
  questions: [
    {
      id: "q-in-01",
      quizId: "quiz-introduction",
      questionText: "What is ikhlas, as this introduction defines it?",
      options: [
        "Purifying the intention so that learning and worship are for Allah's face alone",
        "Performing acts of worship with technical precision and correct form",
        "Concealing all of one's good deeds from every other person",
        "Learning the religion from many teachers to avoid bias",
      ],
      correctAnswerIndex: 0,
      explanation:
        "Ikhlas is sincerity of intention — seeking Allah, not appearance or applause. Concealing deeds can help protect sincerity but is not its definition; a public deed done for Allah remains sincere.",
      topicTag: "ikhlas",
      difficulty: "recall",
    },
    {
      id: "q-in-02",
      quizId: "quiz-introduction",
      questionText:
        "Why did Imam al-Bukhari open his Sahih with the hadith 'Actions are only by intentions'?",
      options: [
        "Because it was the first hadith he ever memorized as a child",
        "Because it has the shortest chain of narration in his collection",
        "Because every deed in the book that follows — and every deed in a Muslim's life — is weighed by the intention behind it",
        "Because scholars of his time disputed its authenticity",
      ],
      correctAnswerIndex: 2,
      explanation:
        "Placing the intention-hadith first announces that everything after it depends on the heart's purpose. The same act of learning can raise a person or ruin him — the difference lives in the intention (Sahih Muslim #1905 warns of the man who learned so it would be said 'he is a scholar').",
      topicTag: "ikhlas",
      difficulty: "application",
    },
    {
      id: "q-in-03",
      quizId: "quiz-introduction",
      questionText:
        "A student says: 'I've begun studying aqeedah; the results now depend entirely on how hard I work.' What correction does the second lesson give?",
      options: [
        "None — effort is indeed the sole cause of guidance",
        "Take the means fully, but guidance itself is given by Allah — so pair effort with du'a and reliance",
        "Effort is irrelevant since guidance was decreed long ago",
        "Hard work matters only after mastering the Arabic language",
      ],
      correctAnswerIndex: 1,
      explanation:
        "'Indeed, you do not guide whom you love, but Allah guides whom He wills' (al-Qasas 28:56). The student takes the means — reading, listening, asking — while depending on Allah for the outcome. Abandoning effort is fatalism; trusting effort alone forgets who holds the hearts.",
      topicTag: "guidance",
      difficulty: "application",
    },
    {
      id: "q-in-04",
      quizId: "quiz-introduction",
      questionText:
        "What does the placement of 'Guide us to the straight path' in every rak'ah of prayer teach about guidance?",
      options: [
        "That guidance is needed constantly and must be asked for continually, not acquired once",
        "That the du'a is meant only for those who have not yet accepted Islam",
        "That guidance is granted automatically to whoever prays",
        "That the straight path refers only to physical direction of the qiblah",
      ],
      correctAnswerIndex: 0,
      explanation:
        "Allah obligated the request at least seventeen times a day — because hearts turn, and remaining guided is a continuous need. The hadith qudsi confirms it: 'All of you are astray except those whom I guide, so seek guidance from Me' (Sahih Muslim #2577).",
      topicTag: "guidance",
      difficulty: "analysis",
    },
    {
      id: "q-in-05",
      quizId: "quiz-introduction",
      questionText: "What is tawakkul, as paired with study in this introduction?",
      options: [
        "Abandoning planning so that Allah's decree operates unhindered",
        "Relying on the strength of one's teachers and study materials",
        "Postponing study until one feels spiritually ready",
        "Taking the means fully while depending on Allah for the result",
      ],
      correctAnswerIndex: 3,
      explanation:
        "'Whoever relies upon Allah — He is sufficient for him' (at-Talaq 65:3). Tawakkul is not abandoning means; it is working as if everything depends on the means while knowing the outcome belongs to Allah alone.",
      topicTag: "guidance",
      difficulty: "recall",
    },
    {
      id: "q-in-06",
      quizId: "quiz-introduction",
      questionText:
        "According to Sahih Muslim #2699, what does Allah make easy for the one who treads a path seeking knowledge?",
      options: [
        "Provision and wealth in this world",
        "A path to Paradise",
        "Victory over opponents in debate",
        "Memorization of everything he reads",
      ],
      correctAnswerIndex: 1,
      explanation:
        "'Whoever treads a path seeking knowledge in it, Allah makes easy for him thereby a path to Paradise.' The reward named is the greatest one — and it hangs the honour of seeking ilm on the destination it leads to.",
      topicTag: "seeking-ilm",
      difficulty: "recall",
    },
    {
      id: "q-in-07",
      quizId: "quiz-introduction",
      questionText:
        "The only increase the Prophet ﷺ was commanded to ask for in the Quran was:",
      options: [
        "Increase in followers",
        "Increase in provision",
        "Increase in knowledge",
        "Increase in lifespan",
      ],
      correctAnswerIndex: 2,
      explanation:
        "'And say: My Lord, increase me in knowledge' (Ta-Ha 20:114). The scholars note that of all things Allah could have commanded His Prophet ﷺ to seek more of, He chose ilm — a measure of its rank above every worldly increase.",
      topicTag: "seeking-ilm",
      difficulty: "recall",
    },
    {
      id: "q-in-08",
      quizId: "quiz-introduction",
      questionText:
        "A new student plans to finish all nine modules in one weekend. Which counsel from the third lesson does this collide with?",
      options: [
        "Learning with proof — he has not verified the site's references yet",
        "Learning for action — he has not implemented anything yet",
        "Learning in order — he intends to study the modules out of sequence",
        "Learning gradually — whoever seizes knowledge all at once loses it all at once, and constant small deeds are most beloved to Allah",
      ],
      correctAnswerIndex: 3,
      explanation:
        "Knowledge settles a little at a time; cramming produces familiarity, not firmness. The most beloved deeds to Allah are the most constant even if small (Sahih al-Bukhari #6464) — which is why the site plans single daily lessons rather than marathons.",
      topicTag: "seeking-ilm",
      difficulty: "application",
    },
    {
      id: "q-in-09",
      quizId: "quiz-introduction",
      questionText:
        "Why does the curriculum insist on a proof under every claim rather than asking you to trust the site?",
      options: [
        "So the pages look more scholarly to visitors",
        "So your creed rests on revelation — the ayah and the hadith — rather than on any website or personality",
        "Because proofs are required by publishing law",
        "So that quizzes have material to test",
      ],
      correctAnswerIndex: 1,
      explanation:
        "The manhaj of this library is that belief follows evidence. A creed built on a website collapses with the website; a creed tied to the Quran and Sunnah stands. Check the proofs and ask the people of knowledge.",
      topicTag: "seeking-ilm",
      difficulty: "application",
    },
    {
      id: "q-in-10",
      quizId: "quiz-introduction",
      questionText:
        "Sufyan ath-Thawri said he never treated anything more difficult than his intention. What practical habit does the first lesson draw from this?",
      options: [
        "Delay studying until the intention feels perfectly pure",
        "Renew and inspect the intention repeatedly, because it keeps turning",
        "Announce one's intention publicly for accountability",
        "Study only in private so intention cannot be corrupted",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Intentions drift, so they are renewed — before study, during it, and on returning to it. Waiting for a perfect heart before acting is a trick that stops the deed; the Salaf acted and watched their hearts as they went.",
      topicTag: "ikhlas",
      difficulty: "application",
    },
    {
      id: "q-in-11",
      quizId: "quiz-introduction",
      questionText:
        "'When Allah wants good for a person, He gives him understanding of the religion' (al-Bukhari #71). How does the introduction apply this to you as a beginning student?",
      options: [
        "It guarantees that every student will become a scholar",
        "It means formal study is unnecessary since understanding is a gift",
        "Your desire to learn is itself a door Allah opened — enter it with gratitude and effort, not complacency",
        "It applies only to those born into families of scholars",
      ],
      correctAnswerIndex: 2,
      explanation:
        "The hadith makes fiqh in the religion a sign of Allah's good intent for a person. Finding yourself at the start of this path is a blessing to act upon — the gift invites effort rather than replacing it.",
      topicTag: "seeking-ilm",
      difficulty: "analysis",
    },
    {
      id: "q-in-12",
      quizId: "quiz-introduction",
      questionText:
        "Taken together, what do the three introduction lessons say must be in place before the first module?",
      options: [
        "Fluent Arabic, a personal teacher, and a complete library",
        "A purified intention, reliance on Allah for guidance, and a sound method of seeking knowledge",
        "Memorization of the Quran and the six books of hadith",
        "A fixed daily schedule of at least three hours",
      ],
      correctAnswerIndex: 1,
      explanation:
        "The sequence is deliberate: ikhlas (why you learn), then guidance and tawakkul (from whom it comes), then the virtue and manners of seeking ilm (how to walk the path). With these three, the student is ready for the Five Pillars.",
      topicTag: "overview",
      difficulty: "analysis",
    },
  ],
};
