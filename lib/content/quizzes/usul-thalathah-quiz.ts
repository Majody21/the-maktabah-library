import type { Quiz } from "../types";

export const usulThalathahQuiz: Quiz = {
  id: "quiz-usul-al-thalathah",
  moduleId: "usul-al-thalathah",
  questions: [
    {
      id: "q-ut-01",
      quizId: "quiz-usul-al-thalathah",
      questionText:
        "The author opens Thalathat al-Usul with four matters obligatory on every Muslim. Which list is correct?",
      options: [
        "Knowledge, action upon it, inviting to it, and patience upon the harm encountered",
        "Prayer, fasting, charity, and pilgrimage as the practical core of the religion",
        "Sincerity, truthfulness, humility, and constant remembrance of Allah",
        "Reading the Quran, learning Arabic, memorizing the fundamentals, and finding a teacher",
      ],
      correctAnswerIndex: 0,
      explanation:
        "Knowledge → action → da'wah → patience: the sequence of Surah al-'Asr, which the author cites as proof, and about which ash-Shafi'i said that had nothing else been revealed it would have sufficed the creation. The other lists contain genuine virtues, but the four matters map the *lifecycle* of knowledge — acquiring it, living it, spreading it, and bearing its cost.",
      topicTag: "four-matters",
      difficulty: "recall",
    },
    {
      id: "q-ut-02",
      quizId: "quiz-usul-al-thalathah",
      questionText:
        "Imam al-Bukhari titled a chapter “Knowledge comes before speech and action,” citing Surah Muhammad 47:19. What in the ayah's wording supports this order?",
      options: [
        "It addresses the Prophet ﷺ, whose knowledge preceded the whole ummah's practice",
        "The command “know” (that none deserves worship except Allah) comes before the command to seek forgiveness",
        "It was revealed in Makkah before any acts of worship were legislated for the believers",
        "The word “knowledge” appears in it more often than the word “action” appears",
      ],
      correctAnswerIndex: 1,
      explanation:
        "The ayah's structure — fa'lam (know!) then wastaghfir (seek forgiveness) — puts knowledge textually before the act of worship, and al-Bukhari drew the principle from that ordering. The point is methodological: worship performed ignorantly goes wrong in belief or form. The Makkan-revelation claim is historically confused and, either way, wouldn't establish the ordering the chapter title asserts.",
      topicTag: "four-matters",
      difficulty: "analysis",
    },
    {
      id: "q-ut-03",
      quizId: "quiz-usul-al-thalathah",
      questionText:
        "Why does patience (sabr) belong in a list about knowledge and da'wah at all?",
      options: [
        "Because patience is the most virtuous act in Islam, so every list must include it",
        "Because acquiring knowledge requires patience with long study hours and difficult texts",
        "Because the one who calls to truth will be opposed, and without patience he abandons the path",
        "Because patience compensates for whatever knowledge or action a person happens to lack",
      ],
      correctAnswerIndex: 2,
      explanation:
        "The four matters form a chain, and the last link answers the cost of the third: whoever invites to what he knows and practices *will* meet harm — every prophet did. Surah al-'Asr's ending (“counsel one another to patience”) sits exactly where the resistance begins. Patience in study (option two) is real but secondary; the author's own proof-text ties sabr to the mutual counseling of truth.",
      topicTag: "four-matters",
      difficulty: "application",
    },
    {
      id: "q-ut-04",
      quizId: "quiz-usul-al-thalathah",
      questionText:
        "Asked “Who is your Lord?”, the matn's answer is: “My Lord is Allah, who nurtured me and all the worlds with His blessings.” How does the author say a person comes to *know* this Lord?",
      options: [
        "Through inherited belief passed down reliably from one's parents and community",
        "Through the direct witnessing of the heart once it has been purified by worship",
        "Through the rational proofs developed by the scholars of theology (kalam)",
        "Through His signs — like the night, day, sun and moon — and His creations",
      ],
      correctAnswerIndex: 3,
      explanation:
        "The matn answers explicitly: “I know Him by His signs and His creations,” citing Fussilat 41:37 and al-A'raf 7:54. Reflection on creation is the Quran's own repeated method — accessible to every person, unlike kalam's imported syllogisms which the Salaf censured. Inherited belief describes how many people *hold* the answer, but the grave's question demands knowledge, not inheritance.",
      topicTag: "knowing-lord",
      difficulty: "recall",
    },
    {
      id: "q-ut-05",
      quizId: "quiz-usul-al-thalathah",
      questionText:
        "Fussilat 41:37 commands: “Do not prostrate to the sun or the moon, but prostrate to Allah who created them.” In the context of knowing your Lord, what principle is this ayah teaching?",
      options: [
        "That astronomy is a discouraged science because it draws hearts toward the celestial bodies",
        "That the signs of creation must lead past themselves to their Maker, never becoming objects of veneration",
        "That prostration in Islam is reserved for the direction of the Ka'bah alone",
        "That the sun and moon possess no benefit for mankind and deserve no attention",
      ],
      correctAnswerIndex: 1,
      explanation:
        "The very things listed as signs pointing *to* Allah — sun and moon — are forbidden as objects of worship, closing the gap where nations before slipped from admiring creation into venerating it. Signs are arrows, not destinations. The ayah presupposes the sun and moon are magnificent and beneficial; that is exactly why the warning is needed.",
      topicTag: "knowing-lord",
      difficulty: "application",
    },
    {
      id: "q-ut-06",
      quizId: "quiz-usul-al-thalathah",
      questionText:
        "The matn moves from “He nurtured all the worlds” directly to “He is my object of worship.” A reader asks: why does lordship *obligate* worship? Which reasoning matches the Quran's?",
      options: [
        "The One who created, provides and sustains is alone entitled to the gratitude and servitude of the sustained — “worship your Lord who created you” (al-Baqarah 2:21)",
        "Since Allah is powerful, human beings worship Him primarily out of fear of punishment",
        "Worship is mankind's repayment of the debt of creation, and once repaid the obligation ceases",
        "Because worship benefits Allah, and He deserves benefit from what He made",
      ],
      correctAnswerIndex: 0,
      explanation:
        "Al-Baqarah 2:21 makes creation and provision the *reason clause* for the command to worship: rububiyyah is the premise, uluhiyyah the necessary conclusion. Worship cannot repay or benefit Allah — “I do not want from them any provision” (adh-Dhariyat 51:57) — He is worshipped because He alone deserves it. Fear is one wing of worship, but the Quran pairs it always with love and hope.",
      topicTag: "knowing-lord",
      difficulty: "analysis",
    },
    {
      id: "q-ut-07",
      quizId: "quiz-usul-al-thalathah",
      questionText:
        "The matn defines Islam in three parts. Which option states them correctly?",
      options: [
        "Believing in Allah, performing the five pillars, and avoiding the seven destructive sins",
        "Testifying, praying, and giving zakah — the three acts named first in the hadith of Jibreel",
        "Loving Allah, fearing Allah, and placing hope in Allah in equal measure",
        "Submitting to Allah with tawheed, yielding to Him with obedience, and freeing oneself from shirk and its people",
      ],
      correctAnswerIndex: 3,
      explanation:
        "Istislam (submission) with tawheed, inqiyad (compliance) with obedience, and bara'ah (disavowal) from shirk and its people — each clause excludes a false claimant: the proud submitter without tawheed, the believer without practice, and the one who wants tawheed while never parting from shirk. Love, fear and hope (option three) describe the inner engines of worship, not the definition of Islam.",
      topicTag: "knowing-religion",
      difficulty: "recall",
    },
    {
      id: "q-ut-08",
      quizId: "quiz-usul-al-thalathah",
      questionText:
        "Which statement correctly relates the three levels of the religion — Islam, Iman, Ihsan?",
      options: [
        "They are three names for the same reality, used interchangeably in the texts",
        "Islam concerns outward submission, Iman the inner pillars, and Ihsan the summit — worshipping as though you see Him",
        "Islam is for common people, Iman for students of knowledge, and Ihsan for the prophets alone",
        "Iman precedes Islam, since the heart must believe before the limbs act",
      ],
      correctAnswerIndex: 1,
      explanation:
        "The hadith of Jibreel defines each separately and the scholars arranged them as ascending levels: every muhsin is a believer and every believer a Muslim, but not the reverse. Ihsan — “that you worship Allah as though you see Him, and if you do not see Him, He sees you” (Muslim #8) — is attainable by any sincere servant, not reserved for prophets. When mentioned together the terms differ; only when mentioned separately can each cover the whole religion.",
      topicTag: "levels-of-religion",
      difficulty: "application",
    },
    {
      id: "q-ut-09",
      quizId: "quiz-usul-al-thalathah",
      questionText:
        "A Muslim prays flawlessly in the mosque but carelessly when alone at home. Which level of the religion is he specifically weak in, and why?",
      options: [
        "Ihsan — because worship “as though you see Him” does not change when the audience does",
        "Islam — because his outward acts are defective in their pillars and conditions",
        "Iman — because his belief in the angels who record deeds is deficient",
        "None — variation between public and private worship is natural and carries no meaning",
      ],
      correctAnswerIndex: 0,
      explanation:
        "The definition of ihsan targets exactly this gap: the one aware that Allah sees him prays the same in both settings, for the Watcher never leaves. His outward acts are sound (so not Islam), and the flaw isn't a specific denied belief (so not Iman as such) — it is the weakness of muraqabah, awareness of being seen. The hadith's second clause — “if you do not see Him, He sees you” — is the cure.",
      topicTag: "levels-of-religion",
      difficulty: "application",
    },
    {
      id: "q-ut-10",
      quizId: "quiz-usul-al-thalathah",
      questionText:
        "How many years did the Prophet ﷺ live, and how are they divided around the revelation?",
      options: [
        "Sixty years: thirty before prophethood and thirty as a prophet in Makkah and Madinah",
        "Seventy years: fifty before prophethood, ten in Makkah and ten in Madinah",
        "Sixty-five years: forty-five before prophethood and twenty after it began",
        "Sixty-three years: forty before prophethood, thirteen calling in Makkah and ten in Madinah",
      ],
      correctAnswerIndex: 3,
      explanation:
        "He ﷺ received prophethood at forty, called in Makkah thirteen years, and spent ten in Madinah after the hijrah — sixty-three in all. The matn includes this because knowing your Prophet is the third fundamental: his life is not trivia but the map of how the religion descended. The Makkan/Madinan split matters for the next question's principle.",
      topicTag: "knowing-prophet",
      difficulty: "recall",
    },
    {
      id: "q-ut-11",
      quizId: "quiz-usul-al-thalathah",
      questionText:
        "For thirteen Makkan years the Prophet ﷺ called almost exclusively to tawheed and warning against shirk, before most laws were revealed. What manhaj lesson do the scholars draw from this for teaching Islam today?",
      options: [
        "New Muslims should not be taught any fiqh until they have studied aqeedah for over a decade",
        "Creed is rectified before rules — priorities in teaching follow the order of revelation",
        "The Makkan period shows that rulings may be postponed indefinitely when society is hostile",
        "Da'wah should avoid mentioning laws entirely, since laws repel people from the religion",
      ],
      correctAnswerIndex: 1,
      explanation:
        "The order of revelation is understood as pedagogical wisdom: hearts grounded in tawheed received the laws willingly when they came — as Aisha (رضي الله عنها) observed about the verses of prohibition (al-Bukhari #4993). The lesson is *priority*, not a literal thirteen-year quarantine from fiqh; a new Muslim learns to pray immediately, while the center of gravity stays on creed. This is why the aqeedah department anchors this curriculum.",
      topicTag: "knowing-prophet",
      difficulty: "analysis",
    },
    {
      id: "q-ut-12",
      quizId: "quiz-usul-al-thalathah",
      questionText:
        "With which revelation did the Prophet's ﷺ *messengership* (being sent to warn) begin, according to the matn?",
      options: [
        "Surah al-Fatiha, since it is the mother of the Book and the first complete surah",
        "Ayat al-Kursi, since it is the greatest single ayah in the Quran",
        "“O you wrapped in a cloak: arise and warn” — Surah al-Muddaththir",
        "“Read in the name of your Lord who created” — Surah al-'Alaq",
      ],
      correctAnswerIndex: 2,
      explanation:
        "The scholars distinguish: with Iqra (al-'Alaq) he became a *prophet* (received revelation); with al-Muddaththir — “arise and warn” — he was *sent* as a messenger with a mission to others. Al-'Alaq is the tempting answer because it came first, but it contained no commission to call anyone. The matn is precise: nubuwwah with Iqra, risalah with al-Muddaththir.",
      topicTag: "knowing-prophet",
      difficulty: "application",
    },
    {
      id: "q-ut-13",
      quizId: "quiz-usul-al-thalathah",
      questionText:
        "“And We have not sent you except to all of mankind” (Saba 34:28). A person argues Islam was meant for the Arabs of that time and place. Beyond this ayah, which fact of the Prophet's ﷺ own practice most directly refutes him?",
      options: [
        "He ﷺ retained Arabic as the language of prayer for all peoples entering Islam",
        "He ﷺ commanded that his sayings be memorized with their exact chains of narration",
        "He ﷺ performed hajj with over one hundred thousand Muslims of many tribes",
        "He ﷺ sent letters inviting the rulers of Rome, Persia and Abyssinia to Islam",
      ],
      correctAnswerIndex: 3,
      explanation:
        "The letters to Heraclius, Chosroes and the Negus (Sahih al-Bukhari #7 records the letter to Heraclius) are the Prophet's ﷺ own application of a universal message — non-Arab empires, invited by name. The other options are true practices but show internal matters of the community, not the outward claim over all nations. Method: refute claims about the message with the Messenger's ﷺ own conduct.",
      topicTag: "knowing-prophet",
      difficulty: "analysis",
    },
    {
      id: "q-ut-14",
      quizId: "quiz-usul-al-thalathah",
      questionText:
        "The three questions of the grave are: Who is your Lord? What is your religion? Who is your prophet? According to the texts, what determines a person's ability to answer them?",
      options: [
        "Memorizing the answers in Arabic during one's lifetime exactly as worded in the matn",
        "The firmness Allah gives to those who lived upon iman — “Allah keeps firm those who believe with the firm word” (Ibrahim 14:27)",
        "The prompting of the two angels, who assist the deceased through the questioning",
        "One's family reciting the answers over the grave during the burial",
      ],
      correctAnswerIndex: 1,
      explanation:
        "The scholars of tafsir report that Ibrahim 14:27 was revealed about the questioning of the grave (al-Bukhari #4699): the answer flows from the life lived, not from rote memorization at the end. This is the entire rationale of Thalathat al-Usul — learn, believe and live these answers now. The hypocrite in the narrations says “I heard people saying something, so I said it” — memorization without iman fails the test.",
      topicTag: "knowing-religion",
      difficulty: "application",
    },
    {
      id: "q-ut-15",
      quizId: "quiz-usul-al-thalathah",
      questionText:
        "Which pairing correctly matches each fundamental with the module of this curriculum that expands it?",
      options: [
        "Knowing the Lord → Fiqh of worship; knowing the religion → Hadith sciences; knowing the Prophet → Arabic",
        "All three fundamentals are expanded only within refutations of the sects",
        "Knowing the Lord → Categories of Tawheed; knowing the religion → the pillars of Islam and Iman; knowing the Prophet ﷺ → his seerah and Sunnah",
        "Knowing the Lord → Names and Attributes only; the other two have no expansion in study",
      ],
      correctAnswerIndex: 2,
      explanation:
        "The three fundamentals are a seed-map of the sacred sciences: the first unfolds into tawheed's categories, the second into the levels and pillars you studied in the first two modules, the third into seerah and Sunnah. Seeing the curriculum this way turns a short matn into a lifetime's syllabus — which is how the scholars actually use it with students.",
      topicTag: "knowing-religion",
      difficulty: "application",
    },
    {
      id: "q-ut-16",
      quizId: "quiz-usul-al-thalathah",
      questionText:
        "What did Imam ash-Shafi'i say would suffice as proof upon the creation, according to the matn's introduction?",
      options: [
        "Surah al-'Asr, had Allah revealed nothing else",
        "Surah al-Ikhlas, since it equals a third of the Quran in meaning",
        "Ayat al-Kursi, since it gathers the names and attributes of Allah",
        "Surah al-Fatiha, since no prayer is valid without it",
      ],
      correctAnswerIndex: 0,
      explanation:
        "The statement — “had Allah sent down only this surah as proof upon His creation, it would have sufficed them” — refers to al-'Asr, because its three ayat contain the complete program: iman, action, mutual counsel to truth, and patience. The virtues in the other options are all authentic but answer different questions; this one is about a *sufficient proof for the human obligation*.",
      topicTag: "four-matters",
      difficulty: "recall",
    },
  ],
};
