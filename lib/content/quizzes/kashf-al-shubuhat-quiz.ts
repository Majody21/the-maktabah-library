import type { Quiz } from "../types";

export const kashfAlShubuhatQuiz: Quiz = {
  id: "quiz-kashf-al-shubuhat",
  moduleId: "kashf-al-shubuhat",
  questions: [
    {
      id: "q-ks-01",
      quizId: "quiz-kashf-al-shubuhat",
      questionText:
        "What is the specific aim of Kashf al-Shubuhat, beyond simply teaching what tawheed is?",
      options: [
        "To list the rulings of worship in order of priority",
        "To equip the student to recognize and dismantle the doubts raised against tawheed",
        "To narrate the biography of the Prophet ﷺ and his call in Makkah",
        "To enumerate the ninety-nine names of Allah with their meanings",
      ],
      correctAnswerIndex: 1,
      explanation:
        "The treatise's purpose is defensive: a person may know tawheed yet be shaken by a persuasively dressed doubt. Kashf al-Shubuhat — 'removal of the doubts' — trains you to see exactly where each objection fails, so firmness comes from understanding, not just information.",
      topicTag: "purpose",
      difficulty: "recall",
    },
    {
      id: "q-ks-02",
      quizId: "quiz-kashf-al-shubuhat",
      questionText:
        "The author begins by establishing that the mushrikun the Prophet ﷺ fought affirmed a certain kind of tawheed. Which, and why does it matter for answering doubts?",
      options: [
        "Tawheed al-uluhiyyah — which shows their worship was already correct",
        "Tawheed al-asma wa's-sifat — which shows they described Allah rightly",
        "Tawheed ar-rububiyyah — showing their shirk lay in worship, not in denying the Creator",
        "They affirmed no tawheed at all, being pure atheists",
      ],
      correctAnswerIndex: 2,
      explanation:
        "They affirmed rububiyyah — that Allah alone creates and provides (Luqman 31:25). This is the master key: since their belief in the Creator was intact and still did not save them, the objection 'I can't be like them, I believe in Allah' collapses. The dispute was always over uluhiyyah — worship.",
      topicTag: "two-tawheeds",
      difficulty: "application",
    },
    {
      id: "q-ks-03",
      quizId: "quiz-kashf-al-shubuhat",
      questionText:
        "Someone objects: 'The mushrikun of old bowed to stone idols. I turn to a righteous dead saint — that is completely different.' How does the treatise remove this doubt?",
      options: [
        "By conceding the difference but noting the saint cannot hear either way",
        "By showing the mushrikun themselves called upon righteous beings — angels, prophets, the pious — whom they considered close to Allah",
        "By arguing that stone idols actually had more power than dead saints",
        "By stating the ruling depends on the sincerity of the person's heart",
      ],
      correctAnswerIndex: 1,
      explanation:
        "The false picture is that the mushrikun only worshipped stones. In fact they called upon angels, prophets and righteous people as intermediaries — 'these are our intercessors with Allah.' So directing worship to a righteous being is not a new, safer category; it is the very shirk the Quran condemned.",
      topicTag: "the-righteous",
      difficulty: "application",
    },
    {
      id: "q-ks-04",
      quizId: "quiz-kashf-al-shubuhat",
      questionText:
        "The greatest doubt is: 'We don't believe these beings create or provide; we only seek nearness and intercession through them.' What is the author's decisive answer?",
      options: [
        "This is a lesser error of etiquette, correctable by improving one's intention",
        "This is acceptable for the dead but not the living",
        "This is word-for-word the excuse of the original mushrikun, which Allah reported in order to condemn — not to excuse",
        "This is valid only if the intermediary was a prophet rather than a saint",
      ],
      correctAnswerIndex: 2,
      explanation:
        "Az-Zumar 39:3 records this exact plea — 'we only worship them that they may bring us nearer to Allah' — and Allah names it shirk, not a mitigating intention. The act of worship (du'a to another) is what counts; the noble stated purpose does not change the ruling.",
      topicTag: "nearness",
      difficulty: "application",
    },
    {
      id: "q-ks-05",
      quizId: "quiz-kashf-al-shubuhat",
      questionText:
        "'But intercession (shafa'ah) is real — you cannot deny it.' How does the treatise affirm intercession yet still forbid calling on the dead for it?",
      options: [
        "Intercession is denied outright, so the request is baseless",
        "Intercession belongs to Allah and is sought from Him; the believer asks Allah to grant it, not the deceased",
        "Intercession may be requested from any righteous person, living or dead",
        "Intercession is real only on the Day of Judgment, so requesting it now is pointless",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Intercession is real but wholly Allah's — 'Say: to Allah belongs all intercession' (az-Zumar 39:44) — and occurs only by His permission for those He is pleased with. So one says 'O Allah, grant me the intercession of Your Prophet ﷺ,' turning to the Owner of intercession, rather than calling upon the dead directly. That is the line between tawheed and shirk.",
      topicTag: "intercession",
      difficulty: "application",
    },
    {
      id: "q-ks-06",
      quizId: "quiz-kashf-al-shubuhat",
      questionText:
        "Surah al-Isra 17:57 says of some beings called upon besides Allah that they 'themselves seek the means of nearness to their Lord... hoping for His mercy and fearing His punishment.' How does this verse answer the 'but they are righteous' doubt?",
      options: [
        "It shows those righteous beings are themselves needy servants seeking Allah — so they cannot be objects of worship",
        "It shows the righteous have the power to grant nearness to whoever calls them",
        "It permits calling upon them since they are described as close to Allah",
        "It refers only to the angels and excludes prophets and the pious",
      ],
      correctAnswerIndex: 0,
      explanation:
        "The verse turns the doubt on its head: the very ones invoked are themselves seeking nearness to Allah, hoping for mercy and fearing punishment — needy servants, not deities. If they must seek Allah's mercy, they cannot be a channel of worship directed away from Him. Righteousness makes them worshippers, not worshipped.",
      topicTag: "the-righteous",
      difficulty: "analysis",
    },
    {
      id: "q-ks-07",
      quizId: "quiz-kashf-al-shubuhat",
      questionText:
        "What single principle does the treatise reduce every doubt to, once the objections are cleared away?",
      options: [
        "That sincerity of intention makes any act of devotion acceptable",
        "That worship — with du'a at its core — is Allah's right alone, and directing it elsewhere is shirk however it is dressed",
        "That only prophets and angels may be sought as intermediaries",
        "That belief in Allah as Creator is the essence of Islam",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Every doubt — nearness, intercession, the rank of the righteous — dissolves against one principle: worship belongs to Allah alone, and du'a is its core. However the objection is framed, directing worship to another is shirk. Holding this one line lets you hear any persuasive doubt and locate its flaw.",
      topicTag: "principle",
      difficulty: "recall",
    },
    {
      id: "q-ks-08",
      quizId: "quiz-kashf-al-shubuhat",
      questionText:
        "A man says, 'When I call the saint, I know in my heart he is only a means, so it is not really worship.' Using the treatise's method, what is the flaw?",
      options: [
        "There is no flaw; inner intention determines whether an act is worship",
        "The mushrikun said the same about their intermediaries, and Allah still named their act worship and shirk",
        "The flaw is only that he should choose a more pious saint",
        "The act is fine as long as he also prays the five daily prayers",
      ],
      correctAnswerIndex: 1,
      explanation:
        "This is exactly the mushrikun's own reasoning — 'we only worship them for nearness' — which Allah quoted and condemned as shirk (az-Zumar 39:3, Yunus 10:18). Calling the act 'just a means' does not remove it from being worship; the Quran already rejected that defense.",
      topicTag: "nearness",
      difficulty: "analysis",
    },
    {
      id: "q-ks-09",
      quizId: "quiz-kashf-al-shubuhat",
      questionText:
        "Why does the author say the doubt 'but I call upon the righteous, not idols' actually makes a person's case worse, not better?",
      options: [
        "Because righteous people are more powerful than idols and so more effective to call",
        "Because the earliest shirk arose precisely through veneration of righteous men, and the Quran named calling upon them shirk regardless of their rank",
        "Because idols never existed and the comparison is therefore meaningless",
        "Because the righteous would be angered and withhold their intercession",
      ],
      correctAnswerIndex: 1,
      explanation:
        "The rank of the one called upon never converts the call into deserved worship — and history shows the first shirk (in the people of Nuh) grew from exaggerating dead righteous men. So invoking the pious is not a safer category; it is the original disease, and the Quran labels it shirk all the same.",
      topicTag: "the-righteous",
      difficulty: "analysis",
    },
    {
      id: "q-ks-10",
      quizId: "quiz-kashf-al-shubuhat",
      questionText:
        "How does Kashf al-Shubuhat build on the Four Principles the student studied earlier?",
      options: [
        "It replaces them with a different definition of shirk",
        "It takes the same diagnosis — rububiyyah affirmed, uluhiyyah denied, the nearness-and-intercession excuse — and trains the student to rebut it in live argument",
        "It narrows the discussion to idols of stone only",
        "It shifts the focus from shirk to the rulings of prayer and fasting",
      ],
      correctAnswerIndex: 1,
      explanation:
        "The Four Principles laid out the diagnosis; Kashf al-Shubuhat weaponizes it for defense. Both rest on the mushrikun affirming the Creator while giving worship elsewhere, and both confront the 'nearness and intercession' excuse — but Kashf trains you to answer the doubt when it is raised against you.",
      topicTag: "principle",
      difficulty: "analysis",
    },
    {
      id: "q-ks-11",
      quizId: "quiz-kashf-al-shubuhat",
      questionText:
        "According to the treatise, what is the true difference between the muwahhid and the mushrik regarding intercession?",
      options: [
        "The muwahhid denies intercession entirely; the mushrik affirms it",
        "The muwahhid seeks it from Allah, the Owner of intercession; the mushrik seeks it from the creature directly",
        "The muwahhid seeks it from prophets; the mushrik seeks it from saints",
        "There is no real difference; both hope for intercession",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Both affirm intercession is real. The dividing line is the direction of the request: the believer asks Allah — 'to Allah belongs all intercession' (az-Zumar 39:44) — while the mushrik directs his call to the creature. Same hoped-for outcome; opposite acts, and opposite creeds.",
      topicTag: "intercession",
      difficulty: "recall",
    },
    {
      id: "q-ks-12",
      quizId: "quiz-kashf-al-shubuhat",
      questionText:
        "What does the treatise identify as the real dividing line between tawheed and shirk — the point every doubt tries to blur?",
      options: [
        "Whether a person affirms that Allah exists and created the world",
        "Whether a person performs the five pillars outwardly",
        "To whom worship — especially du'a — is directed, not whether one believes in a Creator",
        "Whether a person belongs to a Muslim family and community",
      ],
      correctAnswerIndex: 2,
      explanation:
        "Every doubt tries to relocate the line to 'belief in God,' which the mushrikun already had. The treatise keeps the line where the Quran puts it: the direction of worship. Believe in the Creator and still call on others in worship, and you have crossed from tawheed into shirk.",
      topicTag: "principle",
      difficulty: "analysis",
    },
  ],
};
