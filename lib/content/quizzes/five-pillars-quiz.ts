import type { Quiz } from "../types";

/**
 * Authoring notes (quality rules): correct answers are spread evenly across
 * positions 0-3 (the engine also shuffles options per load); distractor
 * lengths exceed the correct answer in roughly half the questions; every
 * distractor encodes a real misconception; difficulty mix ≈ 3 recall /
 * 10 application / 3 analysis.
 */
export const fivePillarsQuiz: Quiz = {
  id: "quiz-five-pillars",
  moduleId: "five-pillars",
  questions: [
    {
      id: "q-fp-01",
      quizId: "quiz-five-pillars",
      questionText:
        "In the hadith of Jibreel, who was the questioner, and why did he ask questions he already knew the answers to?",
      options: [
        "A bedouin testing the Prophet ﷺ, because the desert Arabs doubted his message until they heard it face to face",
        "The angel Jibreel in the form of a man, so that the Companions would hear the religion defined by question and answer",
        "Abu Bakr, because the Prophet ﷺ instructed his closest Companion to ask on behalf of the newer Muslims",
        "A delegation from Yemen, since the people of Yemen were known for asking the most precise questions about faith",
      ],
      correctAnswerIndex: 1,
      explanation:
        "The Prophet ﷺ said at the end of the narration: “That was Jibreel; he came to teach you your religion” (Sahih Muslim #8). The questioning format was deliberate teaching, not genuine inquiry — which is why the Prophet ﷺ noted the strangeness of a questioner who confirms each answer. The bedouin option is tempting because bedouins did question the Prophet ﷺ in other narrations, but not this one.",
      topicTag: "hadith-jibreel",
      difficulty: "recall",
    },
    {
      id: "q-fp-02",
      quizId: "quiz-five-pillars",
      questionText:
        "The phrase “la ilaha illa Allah” contains a negation and an affirmation. What exactly is being negated?",
      options: [
        "The existence of any beings that people treat as gods",
        "The possibility of knowing anything about Allah except through reason",
        "The right of anything besides Allah to be worshipped",
        "The value of intermediaries in bringing people to correct belief",
      ],
      correctAnswerIndex: 2,
      explanation:
        "The kalimah negates the *right* to worship, not the existence of false gods — idols and tyrants exist, but none deserve worship. This is why the scholars translate it “none has the right to be worshipped except Allah” rather than “there is no god but Allah” alone. Misreading it as denying existence is the most common error, since false objects of worship plainly exist while deserving nothing.",
      topicTag: "shahadatayn",
      difficulty: "application",
    },
    {
      id: "q-fp-03",
      quizId: "quiz-five-pillars",
      questionText:
        "A friend says: “I bear witness that Muhammad is the Messenger of Allah — but the sunnah prayers and his way of dress were just seventh-century culture, so I only take the Quran.” Which requirement of the second testimony is he missing?",
      options: [
        "Believing the Prophet's ﷺ reports about the unseen world",
        "Loving the Prophet ﷺ more than one's own family and possessions",
        "Defending the Prophet's ﷺ honour when he is insulted",
        "Worshipping Allah only in the way the Prophet ﷺ legislated",
      ],
      correctAnswerIndex: 3,
      explanation:
        "Testifying to messengership obligates obeying his commands, believing his reports, avoiding what he forbade, and worshipping Allah by his legislation — his Sunnah defines *how* worship is done. “Whoever obeys the Messenger has obeyed Allah” (an-Nisa 4:80). The other options are real obligations too, but the scenario describes someone specifically rejecting the Sunnah as a source of practice.",
      topicTag: "shahadatayn",
      difficulty: "application",
    },
    {
      id: "q-fp-04",
      quizId: "quiz-five-pillars",
      questionText:
        "Why did the Prophet ﷺ instruct Mu'adh ibn Jabal to begin with the shahadah when calling the People of the Book in Yemen, rather than beginning with prayer or charity?",
      options: [
        "No deed is accepted without correct belief, so the foundation must precede the structure",
        "The People of the Book were exempt from the other pillars until they mastered theology",
        "Prayer and charity were not yet legislated at the time Mu'adh was sent to Yemen",
        "The shahadah was easier to accept, and da'wah should always start with the easiest matter",
      ],
      correctAnswerIndex: 0,
      explanation:
        "The hadith (al-Bukhari #1496) orders the call: tawheed first, then prayer, then zakah — because worship built on shirk is a building without a foundation. The “easiest first” option is the tempting one, but the shahadah was actually the *hardest* demand for that audience; it was placed first for validity, not ease. Prayer and zakah were long since legislated by that late Madinan period.",
      topicTag: "shahadatayn",
      difficulty: "analysis",
    },
    {
      id: "q-fp-05",
      quizId: "quiz-five-pillars",
      questionText:
        "What does “establishing the prayer” (iqamat as-salah) add beyond simply performing it?",
      options: [
        "Praying extra voluntary prayers alongside the obligatory ones each day",
        "Performing it with its conditions, pillars and times — built properly like a structure",
        "Attending the mosque for every single prayer without any exception",
        "Reciting longer portions of the Quran and lengthening the prostrations",
      ],
      correctAnswerIndex: 1,
      explanation:
        "The Quran's word iqamah (establishing) implies raising something upright and complete: on time, with purification, humility, and its essential parts. A rushed, delayed or hollow prayer is “performed” but not “established.” Congregation and voluntary prayers are virtues connected to it, but the term itself concerns the quality and completeness of the obligatory act.",
      topicTag: "salah",
      difficulty: "application",
    },
    {
      id: "q-fp-06",
      quizId: "quiz-five-pillars",
      questionText:
        "Which statement did the Prophet ﷺ make about the one who abandons the prayer?",
      options: [
        "His fasting and charity carry his prayer's reward until he returns to it",
        "He remains a Muslim as long as belief stays firmly in his heart",
        "His case is delayed to the Day of Judgment with no ruling in this world",
        "Between a man and shirk and disbelief stands the abandonment of the prayer",
      ],
      correctAnswerIndex: 3,
      explanation:
        "The wording is from Sahih Muslim #82. The Companions treated abandoning salah with unmatched severity — Abdullah ibn Shaqiq relates they considered no other deed's abandonment to be kufr. Option two reflects the common “faith is in the heart” reassurance, which is precisely the assumption this hadith confronts.",
      topicTag: "salah",
      difficulty: "recall",
    },
    {
      id: "q-fp-07",
      quizId: "quiz-five-pillars",
      questionText:
        "Zakah is best described as which of the following?",
      options: [
        "A voluntary charity that generous Muslims give when they can afford it",
        "A government tax that Islamic states may adjust according to public need",
        "A fixed annual right owed on qualifying wealth, purifying the giver and his property",
        "A one-time payment made upon entering Islam to establish membership in the community",
      ],
      correctAnswerIndex: 2,
      explanation:
        "Allah commands: “Take from their wealth a charity by which you purify them” (at-Tawbah 9:103) — a defined right (2.5% on stored monetary wealth), not generosity left to mood or state policy. Confusing zakah with voluntary sadaqah is the most common error; sadaqah is open-ended, while zakah has thresholds, rates and recipients fixed by revelation.",
      topicTag: "zakah",
      difficulty: "recall",
    },
    {
      id: "q-fp-08",
      quizId: "quiz-five-pillars",
      questionText:
        "A Muslim with savings well above the nisab says: “I gave generously to a mosque construction project this year, so my zakah is covered.” What is the correct assessment?",
      options: [
        "His donation counts because building mosques is among the eight categories of zakah recipients",
        "Voluntary giving does not discharge zakah, which must be calculated and paid as its own obligation",
        "His donation counts as long as he made the intention of zakah at any point before the year ended",
        "Zakah does not apply to savings, only to business inventory, so nothing was due in the first place",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Zakah is a specific obligation with a specific intention, calculation and recipients (at-Tawbah 9:60 lists them — general mosque construction is not among the eight). A gift given as ordinary sadaqah cannot be retroactively relabeled. The principle: obligatory worship is defined by the Legislator, not offset by voluntary good elsewhere.",
      topicTag: "zakah",
      difficulty: "application",
    },
    {
      id: "q-fp-09",
      quizId: "quiz-five-pillars",
      questionText:
        "According to Surah al-Baqarah 2:183, what is the stated purpose of fasting Ramadan?",
      options: [
        "Attaining taqwa",
        "Learning to feel the hunger of the poor so that society becomes more generous",
        "Purifying the body through an annual period of physical discipline",
        "Earning multiplied rewards during the month the Quran was revealed",
      ],
      correctAnswerIndex: 0,
      explanation:
        "The ayah ends “la'allakum tattaqun” — that you may attain taqwa, mindfulness of Allah. Empathy for the poor and physical benefits are real side-fruits mentioned by some scholars, but the Quran states the objective as taqwa: fasting trains the soul to obey Allah against its appetites. Note how the shortest option is correct here — length is no guide.",
      topicTag: "sawm",
      difficulty: "recall",
    },
    {
      id: "q-fp-10",
      quizId: "quiz-five-pillars",
      questionText:
        "A colleague fasts Ramadan but spends the day deceiving customers, and says “fasting is between me and food, business is business.” Which prophetic teaching most directly addresses him?",
      options: [
        "Whoever fasts Ramadan with iman and hope of reward has his past sins forgiven",
        "Allah has no need of one who leaves food and drink yet does not leave false speech and acting upon it",
        "The fasting person has two joys: one at breaking fast and one when meeting his Lord",
        "Fasting and the Quran will intercede for the servant on the Day of Resurrection",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Sahih al-Bukhari #1903: a fast that abstains from food while persisting in falsehood misses its purpose, because the goal is taqwa, not hunger. The other narrations are authentic virtues of fasting, but none of them confronts the separation of ritual from conduct — which is this man's exact error.",
      topicTag: "sawm",
      difficulty: "application",
    },
    {
      id: "q-fp-11",
      quizId: "quiz-five-pillars",
      questionText:
        "Hajj is obligatory upon a Muslim how often, and under what condition?",
      options: [
        "Every year, for whoever owns wealth above the nisab threshold",
        "Once every ten years, following the practice of the Companions after the Prophet's ﷺ death",
        "Once in a lifetime, upon the one who has the ability — in body, wealth and route",
        "Twice in a lifetime, once for oneself and once on behalf of one's parents",
      ],
      correctAnswerIndex: 2,
      explanation:
        "“And due to Allah from the people is pilgrimage to the House — for whoever is able to find a way to it” (Aal Imran 3:97), and the Prophet ﷺ clarified that it is once; whatever is extra is voluntary. The condition of ability (istita'ah) covers physical capacity, sufficient wealth, and a safe route. Hajj on behalf of parents exists as a voluntary act after one's own, but is not a second obligation.",
      topicTag: "hajj",
      difficulty: "recall",
    },
    {
      id: "q-fp-12",
      quizId: "quiz-five-pillars",
      questionText:
        "What did the Prophet ﷺ promise the one who performs hajj without obscenity or transgression?",
      options: [
        "He returns free of sin, as on the day his mother bore him",
        "He is guaranteed that his next forty years of supplications will be answered",
        "He receives the reward of a martyr who died defending the sacred places",
        "He and seventy of his relatives are granted intercession on the Day of Judgment",
      ],
      correctAnswerIndex: 0,
      explanation:
        "Sahih al-Bukhari #1521: “...returns as on the day his mother bore him.” The distractors borrow the *style* of virtue-narrations but attach unverified specifics — a useful habit to build: when you hear a precise-sounding reward, ask for the source. The authentic promise is total erasure of sins, conditioned on avoiding rafath (obscenity) and fusuq (transgression) during the rites.",
      topicTag: "hajj",
      difficulty: "application",
    },
    {
      id: "q-fp-13",
      quizId: "quiz-five-pillars",
      questionText:
        "Why do the scholars say the five pillars were ordered with the shahadatayn first, rather than beginning with the prayer?",
      options: [
        "Because the testimony takes the least time to perform, and the religion moves from lighter to heavier duties",
        "Because the other four pillars were revealed later in Madinah, long after the testimony",
        "Because a person cannot be judged in Islamic courts until he has publicly pronounced the testimony",
        "Because every outward deed depends for its acceptance on the belief the testimony expresses",
      ],
      correctAnswerIndex: 3,
      explanation:
        "The pillars are ordered by dependency: worship without tawheed is a structure with no foundation, so the shahadah is the condition for everything after it. The chronology option is partly factual for zakah and hajj but fails as the *reason* — prayer was obligated in Makkah, yet still comes after the testimony in every listing. Order here teaches priority, not history.",
      topicTag: "pillars-general",
      difficulty: "analysis",
    },
    {
      id: "q-fp-14",
      quizId: "quiz-five-pillars",
      questionText:
        "A new Muslim asks: “If I struggle to fast for medical reasons, does that break my Islam, since fasting is a pillar?” What is the sound answer?",
      options: [
        "Yes — a structure with a missing pillar collapses, so all five must be performed by everyone",
        "No — the Shariah itself excuses the sick and legislates alternatives, which is different from rejecting the pillar",
        "Yes — but only if the illness continues for more than two consecutive Ramadans without repayment",
        "No — because fasting is the least emphasized of the pillars and its abandonment carries no consequence",
      ],
      correctAnswerIndex: 1,
      explanation:
        "The same Quranic passage that obligates fasting excuses the sick and traveler (al-Baqarah 2:184-185) with making up days or fidyah — using a legislated concession is obedience, not abandonment. The pillar is undermined by *denying* its obligation or abandoning it without excuse, not by availing an excuse Allah Himself revealed. The “collapse” image applies to rejection, not to concession.",
      topicTag: "sawm",
      difficulty: "application",
    },
    {
      id: "q-fp-15",
      quizId: "quiz-five-pillars",
      questionText:
        "Which grouping correctly matches each pillar to the kind of right it primarily represents, as the scholars describe it?",
      options: [
        "Prayer and fasting — bodily worship; zakah — wealth; hajj — both body and wealth",
        "Prayer and zakah — bodily worship; fasting — wealth; hajj — community solidarity",
        "Prayer — wealth; zakah and fasting — bodily worship; hajj — purely spiritual worship",
        "All four practical pillars are bodily acts, while wealth enters only through voluntary charity",
      ],
      correctAnswerIndex: 0,
      explanation:
        "The classical breakdown: salah and sawm are acts of the body, zakah is the act of wealth, and hajj combines body and wealth (travel, ihram, expenditure). The point of the division is completeness — submission claims the whole person, physical and financial. It also explains rulings like appointing a hajj proxy for the physically unable but financially capable.",
      topicTag: "pillars-general",
      difficulty: "analysis",
    },
    {
      id: "q-fp-16",
      quizId: "quiz-five-pillars",
      questionText:
        "In the hadith “Islam is built upon five,” what does the building metaphor imply about a Muslim who neglects some pillars while affirming them all?",
      options: [
        "His Islam is void in all cases, exactly like the one who never testified at all",
        "The metaphor is only rhetorical and carries no implication for rulings whatsoever",
        "His structure stands but deficient and endangered — with the prayer being the weight-bearing case the texts single out",
        "The building refers to the community as a whole, so individual neglect affects only communal reward",
      ],
      correctAnswerIndex: 2,
      explanation:
        "A building missing parts of its structure still stands — weakened — which is how the scholars describe the sinful neglecter who does not deny the obligation; but the texts single out the prayer with unique severity (Sahih Muslim #82). Equating every neglect with apostasy overstates the metaphor, while emptying it of meaning understates the danger. The Salaf held both: hope for the sinner, alarm for the prayer-abandoner.",
      topicTag: "pillars-general",
      difficulty: "analysis",
    },
  ],
};
