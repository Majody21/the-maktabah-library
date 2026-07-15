import type { Lesson } from "../types";

const SARHAN_PDF =
  "https://drive.google.com/file/d/1SRd_vBX0SZs7Styutb8PlQ0pOfP0XziH/view";

export const nawaqidAlIslamLessons: Lesson[] = [
  {
    id: "nawaqid-al-islam--first-five",
    moduleId: "nawaqid-al-islam",
    slug: "first-five-nullifiers",
    title: "What Nullifies Islam, and the First Five Nullifiers",
    displayOrder: 1,
    basedOn:
      "A guided reading of Nawaqid al-Islam by Shaykh Muhammad ibn Abd al-Wahhab, summarized from the explanation of Shaykh Haytham Sarhan.",
    videoYoutubeUrl: null,
    videoScholar: "Shaykh Haytham Sarhan",
    videoTitle: "Explanation of Nawaqid al-Islam",
    bookRecommendations: [
      {
        title: "Nawaqid al-Islam (The Nullifiers of Islam)",
        pdfUrl: SARHAN_PDF,
        author: "Matn of Muhammad ibn Abd al-Wahhab; expl. Shaykh Haytham Sarhan",
        url: "https://darussalam.com/",
        note: "The ten nullifiers with their evidences — read the matn before each lesson.",
      },
    ],
    content: `A person can enter Islam with a sincere testimony and then, without realizing it, do something that cancels it — the way ablution is nullified by what breaks it. Shaykh Muhammad ibn Abd al-Wahhab gathered **ten nullifiers** (nawaqid) of Islam so that a Muslim would recognize the cliff edges and stay far from them. This is not a chapter for declaring others disbelievers — that is the work of the scholars and the courts, with their conditions and barriers — but a chapter for **guarding your own Islam**. Knowing what destroys a thing is part of protecting it.

**The First Nullifier: shirk in the worship of Allah.** Directing any act of worship — du'a, sacrifice, a vow, ultimate reliance — to other than Allah nullifies Islam, because it contradicts the very testimony a Muslim stands upon:

[[proof:1]]

**The Second Nullifier: setting up intermediaries between oneself and Allah** — calling upon them, asking them to intercede, relying upon them. This is the exact practice the mushrikun of Makkah offered as their excuse (they said the idols would "bring us nearer to Allah"), and the scholars state that whoever does this has disbelieved by consensus. You studied its refutation in the Four Principles: the nobility of the intermediary — angel, prophet or saint — never makes worship of him permissible.

**The Third Nullifier: whoever does not regard the mushrikun as disbelievers, or doubts their disbelief, or holds their way to be correct** — has himself disbelieved. To affirm *La ilaha illa Allah* is to negate the worship of all else; a person who then declares that worship of others is a valid path has torn up the negation he affirmed.

**The Fourth Nullifier: whoever believes that some guidance other than the Prophet's ﷺ is more complete, or that another's ruling is better than his ﷺ ruling.** This includes the one who prefers man-made law over the judgement of the Messenger ﷺ, believing it superior. Allah ties iman itself to submitting to his judgement without resistance:

[[proof:2]]

**The Fifth Nullifier: whoever hates something the Messenger ﷺ came with, even if he acts upon it.** A person might perform a command outwardly while hating that Allah legislated it — and this hatred of the revelation nullifies his Islam:

[[proof:3]]

Notice the mercy in how these are framed: each nullifier is a matter of the heart's stance toward Allah and His Messenger ﷺ — turning worship elsewhere, preferring another way, or despising the revelation. Guard the heart's submission, and the limbs follow.`,
    proofs: [
      {
        id: "nawaqid-al-islam--first-five--p1",
        lessonId: "nawaqid-al-islam--first-five",
        type: "quran",
        displayOrder: 1,
        arabicText:
          "إِنَّ اللَّهَ لَا يَغْفِرُ أَن يُشْرَكَ بِهِ وَيَغْفِرُ مَا دُونَ ذَٰلِكَ لِمَن يَشَاءُ",
        englishTranslation:
          "Indeed, Allah does not forgive that partners be associated with Him, but He forgives what is less than that for whom He wills.",
        reference: "Surah an-Nisa 4:48",
      },
      {
        id: "nawaqid-al-islam--first-five--p2",
        lessonId: "nawaqid-al-islam--first-five",
        type: "quran",
        displayOrder: 2,
        arabicText:
          "فَلَا وَرَبِّكَ لَا يُؤْمِنُونَ حَتَّىٰ يُحَكِّمُوكَ فِيمَا شَجَرَ بَيْنَهُمْ ثُمَّ لَا يَجِدُوا فِي أَنفُسِهِمْ حَرَجًا مِّمَّا قَضَيْتَ وَيُسَلِّمُوا تَسْلِيمًا",
        englishTranslation:
          "But no, by your Lord, they will not believe until they make you judge concerning that which arises between them, then find within themselves no discomfort from what you have judged, and submit in full submission.",
        reference: "Surah an-Nisa 4:65",
      },
      {
        id: "nawaqid-al-islam--first-five--p3",
        lessonId: "nawaqid-al-islam--first-five",
        type: "quran",
        displayOrder: 3,
        arabicText:
          "ذَٰلِكَ بِأَنَّهُمْ كَرِهُوا مَا أَنزَلَ اللَّهُ فَأَحْبَطَ أَعْمَالَهُمْ",
        englishTranslation:
          "That is because they hated what Allah revealed, so He rendered their deeds worthless.",
        reference: "Surah Muhammad 47:9",
      },
    ],
  },
  {
    id: "nawaqid-al-islam--second-five",
    moduleId: "nawaqid-al-islam",
    slug: "second-five-nullifiers",
    title: "The Second Five Nullifiers",
    displayOrder: 2,
    basedOn:
      "A guided reading of Nawaqid al-Islam by Shaykh Muhammad ibn Abd al-Wahhab, summarized from the explanation of Shaykh Haytham Sarhan.",
    videoYoutubeUrl: null,
    videoScholar: "Shaykh Haytham Sarhan",
    videoTitle: "Explanation of Nawaqid al-Islam",
    bookRecommendations: [
      {
        title: "Nawaqid al-Islam (The Nullifiers of Islam)",
        pdfUrl: SARHAN_PDF,
        author: "Matn of Muhammad ibn Abd al-Wahhab; expl. Shaykh Haytham Sarhan",
        url: "https://darussalam.com/",
        note: "The remaining five nullifiers, with the closing warning.",
      },
    ],
    content: `**The Sixth Nullifier: mocking something of the religion of the Messenger ﷺ** — mocking Allah, or the Quran, or the Messenger ﷺ, or the reward or the punishment. This is not a light matter of humour; the Quran addressed it directly when some at Tabuk joked about the reciters, and Allah answered them without softening:

[[proof:1]]

**The Seventh Nullifier: magic (sihr)**, including that which turns spouses apart or binds them (sarf and 'atf). Whoever performs it, or is pleased with it being performed, has disbelieved. Allah described the two angels at Babylon warning every person who came to learn it:

[[proof:2]]

**The Eighth Nullifier: supporting and aiding the mushrikun against the Muslims** — backing disbelief against the people of tawheed in their war upon Islam. Allah warned that allegiance follows to whom one gives it:

[[proof:3]]

**The Ninth Nullifier: whoever believes that some people are permitted to leave the Shariah of Muhammad ﷺ** — as al-Khidr was permitted to depart from the law of Musa عليه السلام — believing they may worship Allah outside the way the Messenger ﷺ brought. The message of Muhammad ﷺ is for all people and all times; no saint and no seeker stands above it.

**The Tenth Nullifier: turning away from the religion of Allah entirely** — neither learning it nor acting upon it. Not a lapse or a sin, but a wholesale turning of the back on revelation:

[[proof:4]]

The author closes with two crucial points. First, **there is no difference in these nullifiers between the one who jokes, the one who is serious, and the one who acts out of fear** — except the one genuinely *coerced*, whose heart remains at rest upon faith. Second — and this is the spirit of the whole chapter — he says they are "among the greatest of what is dangerous and most frequently occurring," so **the Muslim must beware of them and fear them for himself.** Study this list not to measure others, but to inspect your own heart, and to ask Allah for firmness upon His religion until you meet Him.`,
    proofs: [
      {
        id: "nawaqid-al-islam--second-five--p1",
        lessonId: "nawaqid-al-islam--second-five",
        type: "quran",
        displayOrder: 1,
        arabicText:
          "قُلْ أَبِاللَّهِ وَآيَاتِهِ وَرَسُولِهِ كُنتُمْ تَسْتَهْزِئُونَ ۝ لَا تَعْتَذِرُوا قَدْ كَفَرْتُم بَعْدَ إِيمَانِكُمْ",
        englishTranslation:
          "Say: was it Allah, and His verses, and His Messenger that you were mocking? Make no excuse; you have disbelieved after your belief.",
        reference: "Surah at-Tawbah 9:65-66",
      },
      {
        id: "nawaqid-al-islam--second-five--p2",
        lessonId: "nawaqid-al-islam--second-five",
        type: "quran",
        displayOrder: 2,
        arabicText:
          "وَمَا يُعَلِّمَانِ مِنْ أَحَدٍ حَتَّىٰ يَقُولَا إِنَّمَا نَحْنُ فِتْنَةٌ فَلَا تَكْفُرْ",
        englishTranslation:
          "But the two angels do not teach anyone until they say: we are only a trial, so do not disbelieve.",
        reference: "Surah al-Baqarah 2:102",
      },
      {
        id: "nawaqid-al-islam--second-five--p3",
        lessonId: "nawaqid-al-islam--second-five",
        type: "quran",
        displayOrder: 3,
        arabicText:
          "وَمَن يَتَوَلَّهُم مِّنكُمْ فَإِنَّهُ مِنْهُمْ ۗ إِنَّ اللَّهَ لَا يَهْدِي الْقَوْمَ الظَّالِمِينَ",
        englishTranslation:
          "And whoever among you takes them as allies — then indeed, he is one of them. Indeed, Allah does not guide the wrongdoing people.",
        reference: "Surah al-Ma'idah 5:51",
      },
      {
        id: "nawaqid-al-islam--second-five--p4",
        lessonId: "nawaqid-al-islam--second-five",
        type: "quran",
        displayOrder: 4,
        arabicText:
          "وَمَنْ أَظْلَمُ مِمَّن ذُكِّرَ بِآيَاتِ رَبِّهِ ثُمَّ أَعْرَضَ عَنْهَا ۚ إِنَّا مِنَ الْمُجْرِمِينَ مُنتَقِمُونَ",
        englishTranslation:
          "And who is more unjust than one who is reminded of the verses of his Lord, then turns away from them? Indeed, We will take retribution from the criminals.",
        reference: "Surah as-Sajdah 32:22",
      },
    ],
  },
];
