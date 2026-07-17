import type { Lesson } from "../types";

export const introductionLessons: Lesson[] = [
  {
    id: "introduction--ikhlas",
    moduleId: "introduction",
    slug: "ikhlas",
    title: "Ikhlas: Why You Are Learning",
    displayOrder: 1,
    basedOn:
      "Drawn from the scholars' counsel to students of knowledge on sincerity of intention.",
    videoYoutubeUrl: "https://www.youtube.com/watch?v=rzQflcb00HE",
    videoScholar: "Shaykh Muhammad ibn Salih al-Uthaymeen",
    videoTitle: "How to Attain Sincerity in Seeking Knowledge",
    bookRecommendations: [
      {
        title: "The Disease and the Cure (ad-Daa' wad-Dawaa')",
        pdfUrl: "https://drive.google.com/file/d/1XXHa_qmnvTOe8yc2z0LPqI8v34ih67cf/view",
        author: "Ibn Qayyim al-Jawziyyah",
        url: "https://darussalam.com/",
        note: "On the heart's diseases and their cure — sincerity runs through the whole book.",
      },
    ],
    content: `Before the first lesson of aqeedah, stop and ask the question the Salaf asked themselves constantly: **why am I learning this?** Knowledge in Islam is worship — and like every act of worship, it is accepted only when it is done sincerely for Allah. This is **ikhlas**: purifying your intention so that you seek Allah's face, not appearance, argument, or applause.

Allah commanded nothing less in His Book:

[[proof:1]]

The Prophet ﷺ placed intention at the very foundation of every deed — the hadith with which Imam al-Bukhari chose to open his Sahih:

[[proof:2]]

The scholars warned students about this more than anything else, because knowledge sought for the wrong reason becomes a proof *against* its bearer. The Prophet ﷺ warned that among the first to be judged on the Day of Resurrection is a man who learned and taught knowledge so that it would be *said* of him "he is a scholar" (Sahih Muslim #1905). The same act — learning — can raise a person or ruin him, and the difference lives entirely in the heart.

So make your intention now, before the first module: I am learning to know my Lord, to worship Him upon insight, and to act on what I learn. Renew it whenever you return, for intentions drift. Sufyan ath-Thawri said: *"I never treated anything more difficult than my intention, because it keeps turning on me."* If a man of that rank watched his intention that closely, then a student beginning this path should watch it closer still.`,
    proofs: [
      {
        id: "introduction--ikhlas--p1",
        lessonId: "introduction--ikhlas",
        type: "quran",
        displayOrder: 1,
        arabicText:
          "وَمَا أُمِرُوا إِلَّا لِيَعْبُدُوا اللَّهَ مُخْلِصِينَ لَهُ الدِّينَ حُنَفَاءَ",
        englishTranslation:
          "And they were not commanded except to worship Allah, making the religion sincerely His, inclining to truth.",
        reference: "Surah al-Bayyinah 98:5",
      },
      {
        id: "introduction--ikhlas--p2",
        lessonId: "introduction--ikhlas",
        type: "hadith",
        displayOrder: 2,
        arabicText:
          "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى",
        englishTranslation:
          "Actions are only by intentions, and every person shall have only what he intended.",
        reference: "Sahih al-Bukhari #1; Sahih Muslim #1907",
      },
    ],
  },
  {
    id: "introduction--guidance",
    moduleId: "introduction",
    slug: "guidance-is-from-allah",
    title: "Guidance Is from Allah: Rely on Him",
    displayOrder: 2,
    basedOn:
      "Drawn from the scholars' counsel to students of knowledge on seeking guidance and tawakkul.",
    videoYoutubeUrl: "https://www.youtube.com/watch?v=bb8TPFDAEcM",
    videoScholar: "Shaykh Muhammad ibn Salih al-Uthaymeen",
    videoTitle: "The True Reliance upon Allah",
    bookRecommendations: [
      {
        title: "Explanation of the Three Fundamental Principles",
        pdfUrl: "https://drive.google.com/file/d/1RW23U4G6tT8dPVWsGMnapTNNNsVjZpub/view",
        author: "Explained by Shaykh Haytham Sarhan",
        url: "https://darussalam.com/",
        note: "The first text you will study — approach it asking Allah for guidance.",
      },
    ],
    content: `A student can own every book and attend every class and still remain unguided — because **guidance is not taken, it is given**. Allah said to His own Prophet ﷺ, the most truthful of callers:

[[proof:1]]

This is not a discouragement; it is the removal of a burden. Your task is to take the means — read, listen, ask — while the result belongs to Allah. That is why the most repeated du'a in a Muslim's life, recited in every rak'ah of every prayer, is a request for guidance:

[[proof:2]]

The scholars point out the wisdom: if Allah obligated you to ask for guidance seventeen times a day at a minimum, then guidance is something you need constantly — not a possession acquired once. The heart turns, and only the One who holds it keeps it firm. The Prophet ﷺ himself would often swear: *"No, by the Turner of the hearts"* (Sahih al-Bukhari #6628), and in the hadith qudsi Allah says: **"O My servants, all of you are astray except those whom I guide — so seek guidance from Me and I shall guide you"** (Sahih Muslim #2577).

So pair your study with reliance (**tawakkul**): take the means as if everything depends on them, and depend on Allah knowing that nothing happens without Him:

[[proof:3]]

Begin every study session with Bismillah, ask Allah to teach you and benefit you by what He teaches you, and when a matter confuses you, ask the One who taught Adam the names of all things. The student who learns this before the first lesson has learned something many miss after years.`,
    proofs: [
      {
        id: "introduction--guidance--p1",
        lessonId: "introduction--guidance",
        type: "quran",
        displayOrder: 1,
        arabicText:
          "إِنَّكَ لَا تَهْدِي مَنْ أَحْبَبْتَ وَلَٰكِنَّ اللَّهَ يَهْدِي مَن يَشَاءُ ۚ وَهُوَ أَعْلَمُ بِالْمُهْتَدِينَ",
        englishTranslation:
          "Indeed, you do not guide whom you love, but Allah guides whom He wills. And He is most knowing of the guided.",
        reference: "Surah al-Qasas 28:56",
      },
      {
        id: "introduction--guidance--p2",
        lessonId: "introduction--guidance",
        type: "quran",
        displayOrder: 2,
        arabicText: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
        englishTranslation: "Guide us to the straight path.",
        reference: "Surah al-Fatiha 1:6",
      },
      {
        id: "introduction--guidance--p3",
        lessonId: "introduction--guidance",
        type: "quran",
        displayOrder: 3,
        arabicText:
          "وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ ۚ إِنَّ اللَّهَ بَالِغُ أَمْرِهِ",
        englishTranslation:
          "And whoever relies upon Allah — He is sufficient for him. Indeed, Allah will accomplish His purpose.",
        reference: "Surah at-Talaq 65:3",
      },
    ],
  },
  {
    id: "introduction--seeking-ilm",
    moduleId: "introduction",
    slug: "seeking-ilm",
    title: "The Virtue of Seeking Ilm, and How to Seek It",
    displayOrder: 3,
    basedOn:
      "Drawn from the scholars' counsel to students of knowledge on the virtue and etiquette of seeking ilm.",
    videoYoutubeUrl: "https://www.youtube.com/watch?v=QSlxiXbM9hs",
    videoScholar: "Shaykh Abdul-Aziz ibn Baz",
    videoTitle: "Comprehensive Words on How to Seek Knowledge",
    bookRecommendations: [
      {
        title: "200 Q&A on Islamic Creed (A'lam as-Sunnah al-Manshurah)",
        pdfUrl: "https://drive.google.com/file/d/13vKC907IYQdHS0GdLimRBEmkwyJnyhD2/view",
        author: "Shaykh Hafiz ibn Ahmad al-Hakami",
        url: "https://darussalam.com/",
        note: "Keep it beside you throughout the curriculum as a creed reference.",
      },
    ],
    content: `Why does this whole site exist? Because seeking knowledge of the religion is not a hobby for the interested — it is the path Allah honoured above others, and a portion of it is an obligation on every Muslim. The Prophet ﷺ tied it directly to Paradise:

[[proof:1]]

And Allah raised its people by degrees:

[[proof:2]]

The only increase the Prophet ﷺ was commanded to ask for was not wealth or ease — it was knowledge: *"And say: My Lord, increase me in knowledge"* (Surah Ta-Ha 20:114). When Allah wants good for a person, He gives him understanding of the religion (Sahih al-Bukhari #71) — so the very fact that you are here, wanting to learn, is a door Allah has opened. Walk through it with gratitude, not complacency.

**How should you seek it?** The scholars' counsel, distilled for this curriculum:

**Gradually.** Knowledge is taken a little at a time; whoever seizes it all at once loses it all at once. This is why the site gives you a daily plan measured in single lessons — consistency beats intensity, for the most beloved deeds to Allah are the most constant, even if small (Sahih al-Bukhari #6464).

**In order.** Foundations before details — the pillars before the subtleties, the clear before the disputed. The modules ahead are sequenced the way the scholars teach them; resist the urge to skip ahead.

**With proof.** Tie every belief to its ayah or hadith. You will find a proof under every claim on this site; read them, look them up, and let your creed rest on revelation rather than on a website.

**For action.** The Salaf sought knowledge to act upon it; knowledge that does not reach the limbs and the heart is a burden. After each lesson, ask: what do I now owe Allah that I did not know I owed Him before?

With the intention purified, reliance placed in Allah, and the path of seeking understood — you are ready. Begin with the Five Pillars of Islam, and may Allah make you of those He guides and raises by knowledge.`,
    proofs: [
      {
        id: "introduction--seeking-ilm--p1",
        lessonId: "introduction--seeking-ilm",
        type: "hadith",
        displayOrder: 1,
        arabicText:
          "مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ",
        englishTranslation:
          "Whoever treads a path seeking knowledge in it, Allah makes easy for him thereby a path to Paradise.",
        reference: "Sahih Muslim #2699",
      },
      {
        id: "introduction--seeking-ilm--p2",
        lessonId: "introduction--seeking-ilm",
        type: "quran",
        displayOrder: 2,
        arabicText:
          "يَرْفَعِ اللَّهُ الَّذِينَ آمَنُوا مِنكُمْ وَالَّذِينَ أُوتُوا الْعِلْمَ دَرَجَاتٍ",
        englishTranslation:
          "Allah will raise those who have believed among you and those who were given knowledge by degrees.",
        reference: "Surah al-Mujadilah 58:11",
      },
    ],
  },
];
