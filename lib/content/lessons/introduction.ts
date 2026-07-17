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
    videoYoutubeUrl: "https://www.youtube.com/watch?v=FuUWeVpN0Ak",
    videoScholar: "Shaykh Salih al-'Usaymi",
    videoTitle: "Learn How to Purify Your Intention",
    bookRecommendations: [
      {
        title: "The Disease and the Cure (ad-Daa' wad-Dawaa')",
        pdfUrl: "https://drive.google.com/file/d/1XXHa_qmnvTOe8yc2z0LPqI8v34ih67cf/view",
        author: "Ibn Qayyim al-Jawziyyah",
        url: "https://darussalam.com/",
        note: "On the heart's diseases and their cure — sincerity runs through the whole book.",
      },
    ],
    content: `**بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ**

*In the name of Allah, the Most Gracious, the Most Merciful.*

Allah opened His Book with the basmalah, and the Prophet ﷺ opened his letters with it. The Muslim begins his affairs in the name of Allah, seeking His help and His blessing in them. Begin your study the same way: in His name, asking Him for success.

Before the first lesson of aqeedah, ask yourself: **why am I learning this?** Seeking knowledge is worship, and Allah does not accept worship unless it is done for Him alone. This is **ikhlas**: to purify your intention so that you seek the Face of Allah, not the praise of people or a share of this world.

Allah said:

[[proof:1]]

And Imam al-Bukhari opened his Sahih with the hadith of intention:

[[proof:2]]

The scholars warned the student of knowledge about this before everything else, because knowledge sought for other than Allah is a proof against its bearer. The Prophet ﷺ informed us that among the first to be judged on the Day of Resurrection is a man who learned and taught so that people would say of him, "He is a scholar" (Sahih Muslim #1905). Learning raises a person or ruins him according to what he intends by it.

So set your intention before the first module. Shaykh Ibn al-Uthaymeen advised that the student must not seek knowledge for position, fame, or wealth. He seeks it to remove ignorance from himself, then from others, and to preserve and defend the religion of Allah by learning it. So intend this: I am learning to know my Lord, to worship Him upon insight, to act upon what I learn, and to teach it. Renew this intention whenever you return to study, for the intention changes. Sufyan ath-Thawri said: *"I never treated anything more difficult than my intention, because it keeps turning on me."* If Sufyan found his intention difficult, then we have more reason to watch our own.`,
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
    videoYoutubeUrl: "https://www.youtube.com/watch?v=UBbkbLezDhg",
    videoScholar: "Shaykh Muhammad ibn Salih al-Uthaymeen",
    videoTitle: "The Correct Understanding of Tawakkul upon Allah",
    bookRecommendations: [
      {
        title: "Explanation of the Three Fundamental Principles",
        pdfUrl: "https://drive.google.com/file/d/1RW23U4G6tT8dPVWsGMnapTNNNsVjZpub/view",
        author: "Explained by Shaykh Haytham Sarhan",
        url: "https://darussalam.com/",
        note: "The first text you will study — approach it asking Allah for guidance.",
      },
    ],
    content: `A person may gather books and attend classes and still remain unguided, because guidance is in the Hand of Allah alone. Allah said to His Prophet ﷺ:

[[proof:1]]

This ayah lifts a weight from you. Your task is to take the means: read, listen, and ask. The result belongs to Allah. For this reason, Allah made the request for guidance part of every prayer:

[[proof:2]]

You repeat this ayah in every rak'ah, seventeen times a day in the obligatory prayers alone. The scholars explain: you need guidance at every moment, and the heart does not remain firm except by Allah keeping it firm. The Prophet ﷺ would swear: *"No, by the Turner of the hearts"* (Sahih al-Bukhari #6628). And in the hadith qudsi, Allah says: **"O My servants, all of you are astray except those whom I guide, so seek guidance from Me and I shall guide you"** (Sahih Muslim #2577).

So join your study to reliance upon Allah (**tawakkul**): take the means, and depend upon Allah for the result, for nothing comes about except by His will:

[[proof:3]]

Begin your study with the name of Allah. Ask Him to teach you what benefits you and to benefit you by what He teaches you. And when a matter is unclear to you, ask Him, for He is the one who teaches His servants.`,
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
    content: `Seeking knowledge of the religion is among the greatest acts of worship, and learning what the worship of Allah requires is an obligation upon every Muslim. The Prophet ﷺ connected it to Paradise:

[[proof:1]]

And Allah raised its people by degrees:

[[proof:2]]

Allah did not command His Prophet ﷺ to ask for increase in anything except knowledge: *"And say: My Lord, increase me in knowledge"* (Surah Ta-Ha 20:114). And when Allah wants good for a person, He gives him understanding of the religion (Sahih al-Bukhari #71). So if you find in yourself the desire to learn, know that this is from the favour of Allah upon you, and thank Him for it.

**How is knowledge sought?** The scholars advise the student with the following:

**Take it gradually.** The early scholars said: whoever seeks knowledge all at once loses it all at once. So take the lessons one by one, at a steady pace, for the most beloved deeds to Allah are the most constant, even if they are few (Sahih al-Bukhari #6464).

**Take it in order.** Learn the foundations before the details. The modules here follow the order in which the scholars teach these texts, so do not skip ahead.

**Take it with its proofs.** Aqeedah is taken from the Book and the Sunnah. Under every point in these lessons you will find its proof. Read the proofs, so that you know your creed from its sources.

**Take it to act upon it.** The Salaf sought knowledge in order to act upon it, and knowledge without action is a burden upon its bearer. After each lesson, look at what it obligates you to do, and do it.

You have set your intention, placed your reliance upon Allah, and learned how knowledge is sought. Begin now with the Five Pillars of Islam. May Allah grant us and you beneficial knowledge and righteous action.`,
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
