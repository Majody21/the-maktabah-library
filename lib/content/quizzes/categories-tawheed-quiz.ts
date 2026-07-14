import type { Quiz } from "../types";

export const categoriesTawheedQuiz: Quiz = {
  id: "quiz-categories-of-tawheed",
  moduleId: "categories-of-tawheed",
  questions: [
    {
      id: "q-ct-01",
      quizId: "quiz-categories-of-tawheed",
      questionText:
        "Which action belongs to Tawheed ar-Rububiyyah — Allah's oneness in His own actions?",
      options: [
        "Mankind's directing of all supplication to Allah alone",
        "Allah's giving of life and death and His management of every affair",
        "The believer's affirmation of Allah's names as revealed in the Quran",
        "The pilgrim's sacrifice being offered exclusively for Allah",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Rububiyyah concerns what *Allah does* — creating, providing, giving life and death, governing (az-Zumar 39:62). Uluhiyyah concerns what *servants do* toward Him (du'a, sacrifice), and asma wa sifat concerns what we *affirm about* Him. Sorting any statement into “His actions / our actions / His descriptions” is the fastest way to classify it correctly.",
      topicTag: "rububiyyah",
      difficulty: "recall",
    },
    {
      id: "q-ct-02",
      quizId: "quiz-categories-of-tawheed",
      questionText:
        "The Quran records that the Makkan pagans, when asked who created them, “would surely say: Allah” (az-Zukhruf 43:87). What do the scholars conclude from this?",
      options: [
        "The pagans were secretly Muslims whose social pressure prevented open practice",
        "The Quran describes only a small educated elite among them, not the masses",
        "Affirming Allah as Creator, alone, did not enter them into Islam — the dispute was over worship",
        "The ayah abrogated earlier verses that had described them as deniers of the Creator",
      ],
      correctAnswerIndex: 2,
      explanation:
        "This is the most consequential conclusion in the whole subject: rububiyyah-affirmation is near-universal and has never by itself made anyone a Muslim, for the messengers were sent over the issue of *whom to worship*. It refutes the assumption that shirk means denying God's existence. The Quran calls those same affirmers mushrikun because their du'a, sacrifice and hope went to others.",
      topicTag: "rububiyyah",
      difficulty: "application",
    },
    {
      id: "q-ct-03",
      quizId: "quiz-categories-of-tawheed",
      questionText:
        "Why does the Quran repeatedly argue from rububiyyah (“who provides for you?”) when its actual demand is uluhiyyah (worship Him alone)?",
      options: [
        "Because the premise they already accepted logically obligates the worship they refused",
        "Because rububiyyah was the point they denied, so the Quran concentrates its proofs there",
        "Because worship cannot be commanded until people first master theology",
        "Because provision is the greatest of Allah's blessings and gratitude is its price",
      ],
      correctAnswerIndex: 0,
      explanation:
        "The Quran's method is argument from the conceded to the disputed: you admit He alone creates and provides (conceded) — then how do you worship what creates nothing (an-Nahl 16:17)? Option two reverses the facts: rububiyyah was *accepted*, uluhiyyah refused. Recognizing this method equips you to answer the modern claim that “believing in God” suffices.",
      topicTag: "rububiyyah",
      difficulty: "analysis",
    },
    {
      id: "q-ct-04",
      quizId: "quiz-categories-of-tawheed",
      questionText:
        "Ibn Taymiyyah defined 'ibadah (worship) as:",
      options: [
        "The five pillars performed with sincerity and following the Sunnah",
        "Everything commanded in the Quran as understood by the four schools of law",
        "The heart's humility before Allah accompanied by hope in His reward",
        "A comprehensive term for all that Allah loves and is pleased with, of statements and actions, inward and outward",
      ],
      correctAnswerIndex: 3,
      explanation:
        "This definition (from al-'Ubudiyyah) is deliberately wide: it captures du'a, fear, hope, reliance, sacrifice, and even ordinary acts ennobled by intention. Its width is what makes shirk detectable — if du'a is worship, then du'a to the dead is worship given to creation. The narrower options each miss categories (inward acts, statements) that the texts treat as worship.",
      topicTag: "uluhiyyah",
      difficulty: "recall",
    },
    {
      id: "q-ct-05",
      quizId: "quiz-categories-of-tawheed",
      questionText:
        "A man at a shrine says: “I know the saint cannot create or provide — only Allah does that. I simply call on him to relay my need to Allah.” Classify his statement.",
      options: [
        "Sound tawheed, since he correctly attributes creation and provision to Allah alone",
        "Correct rububiyyah with a violation of uluhiyyah — du'a is worship, and he has directed it to other than Allah",
        "A minor error of etiquette in supplication, provided his intention remains directed at Allah",
        "An error of asma wa sifat, since he has denied Allah's attribute of hearing",
      ],
      correctAnswerIndex: 1,
      explanation:
        "His creed about creation is intact; his *practice* gives the worship of du'a to a creature — precisely the split the Quran describes in Yunus 10:18 (“these are our intercessors with Allah”). The Prophet ﷺ said “du'a is worship” (authentic, at-Tirmidhi #2969), so redirecting it is not etiquette but shirk in uluhiyyah. This scenario is the second principle of al-Qawa'id al-Arba' in modern clothes.",
      topicTag: "uluhiyyah",
      difficulty: "application",
    },
    {
      id: "q-ct-06",
      quizId: "quiz-categories-of-tawheed",
      questionText:
        "In the hadith of Mu'adh, the Prophet ﷺ said the right of Allah upon His servants is:",
      options: [
        "That they thank Him for every blessing and endure every trial without complaint",
        "That they seek knowledge of Him through study before performing any deed",
        "That they worship Him and do not associate anything with Him",
        "That they establish prayer, give zakah, and treat creation with excellence",
      ],
      correctAnswerIndex: 2,
      explanation:
        "Al-Bukhari #2856, Muslim #30 — the first right of all rights, stated in a single clause joining affirmation (worship Him) and negation (no partners). The pairing matters: worship of Allah *plus* worship of others fulfils neither half. The other options list real duties, but the hadith names the root from which they all branch.",
      topicTag: "uluhiyyah",
      difficulty: "recall",
    },
    {
      id: "q-ct-07",
      quizId: "quiz-categories-of-tawheed",
      questionText:
        "“You alone we worship, and You alone we ask for help” (al-Fatiha 1:5). How do the scholars relate this ayah's two halves to the categories of tawheed?",
      options: [
        "Worship expresses uluhiyyah; seeking help expresses reliance on the Lord who alone controls all things",
        "Both halves express rububiyyah, since prayer and help both come from the Lord",
        "Worship refers to the pillars of Islam while help refers to the pillars of iman",
        "The first half abrogates the second, indicating worship suffices without supplication",
      ],
      correctAnswerIndex: 0,
      explanation:
        "“You alone we worship” is the servant's tawheed al-uluhiyyah; “You alone we ask for help” flows from tawheed ar-rububiyyah — only the One who governs everything can be relied upon absolutely. The ayah thus binds the two categories in one line recited in every rak'ah. The scholars note the order too: worship (His right) precedes asking (our need).",
      topicTag: "uluhiyyah",
      difficulty: "analysis",
    },
    {
      id: "q-ct-08",
      quizId: "quiz-categories-of-tawheed",
      questionText:
        "State the manhaj of Ahlus Sunnah toward the ayat and ahadith of Allah's attributes.",
      options: [
        "Affirm them as they came, in a manner befitting His majesty — without distortion, denial, asking how, or likening",
        "Reinterpret them metaphorically so that they conform to what reason judges possible for God",
        "Pass their wording on without affirming any meaning, since their meaning is unknowable",
        "Affirm those attributes reason can verify and suspend judgment on the remainder",
      ],
      correctAnswerIndex: 0,
      explanation:
        "The rule stands on ash-Shura 42:11 — “There is nothing like Him” (refuting tamthil/takyif) “and He is the Hearing, the Seeing” (refuting ta'til/tahrif). The meanings are known in Arabic; the *how* is what's beyond us — as Malik said of the istiwa: “the rising is known, the how is unknown.” Option three (tafwid of meaning) sounds pious but implies the Quran addresses hearts with unintelligible words.",
      topicTag: "asma-wa-sifat",
      difficulty: "recall",
    },
    {
      id: "q-ct-09",
      quizId: "quiz-categories-of-tawheed",
      questionText:
        "Someone reads “the Hand of Allah is over their hands” (al-Fath 48:10) and says: “This must mean His power, because a real hand would make Him resemble creation.” What is the flaw in his reasoning?",
      options: [
        "Nothing — this is precisely how the Companions dealt with such texts",
        "He assumed affirming an attribute implies resemblance, when Allah's attributes befit Him just as His essence is unlike ours",
        "His error is quoting an ayah without first mastering the science of abrogation",
        "He is right about the hand but wrong to reason about attributes at all",
      ],
      correctAnswerIndex: 1,
      explanation:
        "The hidden premise — “a real attribute entails creaturely likeness” — is the root error of the negators: it treats resemblance as automatic, when Allah affirmed for Himself hearing and seeing while nothing is like Him (ash-Shura 42:11). We affirm a Hand befitting His majesty, unlike ours, without asking how. The Companions affirmed such texts without reinterpretation — no authentic transmission shows them converting attributes into abstractions.",
      topicTag: "asma-wa-sifat",
      difficulty: "application",
    },
    {
      id: "q-ct-10",
      quizId: "quiz-categories-of-tawheed",
      questionText:
        "What does “enumerating” Allah's names (man ahsaha) mean in the hadith “Allah has ninety-nine names; whoever enumerates them enters Paradise”?",
      options: [
        "Reciting the list of names a fixed number of times daily as dhikr",
        "Compiling and memorizing all the names in their exact revealed sequence",
        "Memorizing, understanding, and worshipping Allah through their meanings",
        "Writing the names and keeping them in the home for blessing",
      ],
      correctAnswerIndex: 2,
      explanation:
        "The scholars explain ihsa in three ascending steps: memorize the wording, understand the meaning, and act — trust ar-Razzaq when provision tightens, watch as-Sami' before speaking (al-Bukhari #2736; Muslim #2677). No fixed sequence or count-ritual is authentically prescribed; treating the names as talismans replaces worship *through* them with superstition *about* them.",
      topicTag: "asma-wa-sifat",
      difficulty: "application",
    },
    {
      id: "q-ct-11",
      quizId: "quiz-categories-of-tawheed",
      questionText:
        "Which of the following is MAJOR shirk — expelling its doer from Islam if he dies upon it unrepentant?",
      options: [
        "Swearing an oath by one's father out of lingering habit",
        "Improving one's recitation when aware that people are listening",
        "Saying “what Allah willed and you willed” to a person",
        "Slaughtering an animal as an offering to a jinn for protection from harm",
      ],
      correctAnswerIndex: 3,
      explanation:
        "Sacrifice is worship (“Say: my prayer, my sacrifice, my living and my dying are for Allah, Lord of the worlds” — al-An'am 6:162), so offering it to a jinn directs worship to creation: major shirk. The other three are forms of *minor* shirk the Prophet ﷺ warned about — swearing by other than Allah, riya, and equating creatures with Allah in wording (“say: what Allah willed, *then* what you willed”). Knowing the boundary protects from both carelessness and unjustified takfir.",
      topicTag: "shirk",
      difficulty: "application",
    },
    {
      id: "q-ct-12",
      quizId: "quiz-categories-of-tawheed",
      questionText:
        "Why did the Prophet ﷺ call riya (beautifying worship for observers) “the hidden shirk” and fear it for his Companions?",
      options: [
        "Because it redirects the intention of worship toward people while the outward act looks perfectly sound",
        "Because it involves publicly declaring allegiance to idols under compulsion",
        "Because the Companions were known to abandon prayers when no one watched them",
        "Because any deed seen by others is automatically void of reward",
      ],
      correctAnswerIndex: 0,
      explanation:
        "Riya corrupts the unseen engine of the deed — intention — leaving nothing visible to correct, which is exactly why it is “hidden” and why the best generation was warned about it. Being *seen* doing good is not the sin; *doing it in order to be seen* is. A deed begun for Allah and witnessed incidentally keeps its reward; one performed for the audience is minor shirk that starves the deed.",
      topicTag: "shirk",
      difficulty: "analysis",
    },
    {
      id: "q-ct-13",
      quizId: "quiz-categories-of-tawheed",
      questionText:
        "A relative wears an amulet containing unknown writings, saying “it's just tradition — my heart relies on Allah.” What is the correct evaluation according to this module?",
      options: [
        "Acceptable, since intentions determine deeds and his intention is reliance on Allah",
        "The Prophet ﷺ forbade amulets as a means of shirk; claiming inner reliance does not clean an outward practice of jahiliyyah",
        "Acceptable only if the writings inside turn out to be verses of the Quran",
        "A matter of pure custom with no connection to creed in either direction",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Authentic narrations condemn tying amulets (“whoever hangs an amulet has committed shirk” — Ahmad, authentic), because attaching benefit and protection to objects is the machinery of shirk regardless of verbal disclaimers. Intention does not legitimize a forbidden means — the same logic as “we only worship them for nearness” (az-Zumar 39:3). The Quranic-amulet case is genuinely differed over among the Salaf, but *unknown writings* are condemned by agreement.",
      topicTag: "shirk",
      difficulty: "application",
    },
    {
      id: "q-ct-14",
      quizId: "quiz-categories-of-tawheed",
      questionText:
        "Which sentence correctly distinguishes the three categories of tawheed in one line each?",
      options: [
        "Rububiyyah: He alone deserves worship; Uluhiyyah: He alone creates; Asma wa Sifat: He alone judges",
        "Rububiyyah: affirmed only by Muslims; Uluhiyyah: affirmed by all nations; Asma wa Sifat: affirmed by the angels",
        "Rububiyyah: He alone acts as Lord; Uluhiyyah: He alone is worshipped; Asma wa Sifat: He alone is described with the perfect names and attributes",
        "The categories are a later invention with no basis in the Quran's own structure",
      ],
      correctAnswerIndex: 2,
      explanation:
        "His actions — our worship — His names: three sentences that organize every ayah of creed in the Quran. The categorization is extracted *from* the Quran (Surah al-Fatiha contains all three), the way grammar was extracted from speech — naming what was always there, not inventing it. Option one scrambles the definitions, and option two reverses who affirmed what.",
      topicTag: "categories-overview",
      difficulty: "application",
    },
    {
      id: "q-ct-15",
      quizId: "quiz-categories-of-tawheed",
      questionText:
        "“Indeed, Allah does not forgive that partners be associated with Him, but He forgives what is less than that for whom He wills” (an-Nisa 4:48). What do the scholars clarify about this ayah's scope?",
      options: [
        "It concerns the one who dies upon shirk without repentance; sincere tawbah before death is accepted even from shirk",
        "It applies equally to the repentant and unrepentant, making shirk unforgivable in every case",
        "It refers only to the shirk of the nations before Islam, not to anyone of this ummah",
        "It concerns minor shirk, while major shirk is under Allah's will to forgive",
      ],
      correctAnswerIndex: 0,
      explanation:
        "Az-Zumar 39:53 — “do not despair of Allah's mercy; indeed Allah forgives all sins” — is understood by the scholars to address those who *repent*, while an-Nisa 4:48 addresses the one who meets Allah still upon shirk. Otherwise no Companion who left paganism could have been forgiven. Option four inverts the categories: it is major shirk that bars forgiveness at death, while lesser sins sit under His will.",
      topicTag: "shirk",
      difficulty: "analysis",
    },
    {
      id: "q-ct-16",
      quizId: "quiz-categories-of-tawheed",
      questionText:
        "Your study partner summarizes: “Tawheed means believing Allah is One.” Using this module, what essential correction does his summary need?",
      options: [
        "None — oneness of belief is the complete meaning the texts intend",
        "It must add that oneness covers His actions, His right to all worship, and His names and attributes — belief alone without directing worship to Him alone is the very deficiency of the mushrikun",
        "It should replace “believing” with “declaring,” since tawheed is fulfilled by pronouncing the shahadah",
        "It should specify that tawheed concerns knowing Allah exists, which philosophy can establish without revelation",
      ],
      correctAnswerIndex: 1,
      explanation:
        "“Allah is One” as bare belief was affirmed by the pagans of Makkah in the sense of one Creator — yet the Quran names them mushrikun for their worship. Complete tawheed unifies all three categories: Lordship, worship, and names-and-attributes. Reducing it to declaration (option three) repeats the Murji'i error from the opposite direction; reducing it to existence-belief makes revelation redundant.",
      topicTag: "categories-overview",
      difficulty: "analysis",
    },
  ],
};
