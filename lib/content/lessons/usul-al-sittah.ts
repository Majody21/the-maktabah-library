import type { Lesson } from "../types";

const UTHAYMEEN_PDF =
  "https://drive.google.com/file/d/1ddlIFpoJtny18RWiLm8YzZbSwcExJnhz/view";

export const usulAlSittahLessons: Lesson[] = [
  {
    id: "usul-al-sittah--first-three",
    moduleId: "usul-al-sittah",
    slug: "first-three-foundations",
    title: "The First Three Foundations",
    displayOrder: 1,
    basedOn:
      "A guided reading of al-Usul al-Sittah by Shaykh Muhammad ibn Abd al-Wahhab, summarized from the explanation of Shaykh Muhammad ibn Salih al-Uthaymeen.",
    videoYoutubeUrl: "https://www.youtube.com/watch?v=z1xm_qhEdsc",
    videoScholar: "Shaykh Dr. Muhammad al-Hujayli",
    videoTitle: "Usool as-Sittah — Full Explanation",
    bookRecommendations: [
      {
        title: "Usul al-Sittah (The Six Foundations)",
        pdfUrl: UTHAYMEEN_PDF,
        author: "Matn of Muhammad ibn Abd al-Wahhab; expl. Shaykh Ibn Uthaymeen",
        url: "https://darussalam.com/",
        note: "A one-page matn; read it before each lesson and note the recurring pattern.",
      },
    ],
    content: `The author opens this short treatise with these words: these are **six foundations that Allah made so clear that even the common, unlettered person can grasp them**, yet most people, including many who claim knowledge, fell into the opposite of them. Each foundation follows one pattern: Allah made the matter plain, and the majority opposed it.

**The First Foundation: sincerity (ikhlas) in the religion for Allah alone**, and freeing it from shirk. Allah clarified this so completely that no excuse remains, yet most people opposed it and gave their worship to intermediaries.

Allah the Most Exalted said:

[[proof:1]]

**The Second Foundation: Allah commanded unity in the religion and forbade division within it.** He did not leave the ummah to split into parties, each pleased with what it has; He commanded them to hold to His rope all together, for division in the religion begins with corruption in creed.

Allah the Almighty said:

[[proof:2]]

Allah joined the command to establish the religion with the command not to split in it (ash-Shura 42:13). Yet, as the author notes, most people came to regard division as a mercy, and unity upon the truth as impossible.

**The Third Foundation: hearing and obeying the one given authority (wali al-amr)** completes the establishment of the religion and the community. A people cannot uphold the religion collectively while each person answers to no one.

Allah joined obedience to the Messenger ﷺ with obedience to those He placed in authority:

[[proof:3]]

The obedience owed is in what is *good*.

Ali (may Allah be pleased with him) narrated that the Prophet ﷺ said:

[[proof:4]]

But rejecting legitimate authority altogether, which some came to consider part of the religion, is the opposite of what Allah commanded. These three foundations gather one meaning: the religion is sincerity to Allah, unity, and obedience in what is good.`,
    proofs: [
      {
        id: "usul-al-sittah--first-three--p1",
        lessonId: "usul-al-sittah--first-three",
        type: "quran",
        displayOrder: 1,
        arabicText:
          "وَمَا أُمِرُوا إِلَّا لِيَعْبُدُوا اللَّهَ مُخْلِصِينَ لَهُ الدِّينَ حُنَفَاءَ",
        englishTranslation:
          "And they were not commanded except to worship Allah, making the religion sincerely His, inclining to truth.",
        reference: "Surah al-Bayyinah 98:5",
      },
      {
        id: "usul-al-sittah--first-three--p2",
        lessonId: "usul-al-sittah--first-three",
        type: "quran",
        displayOrder: 2,
        arabicText:
          "وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا وَلَا تَفَرَّقُوا",
        englishTranslation:
          "And hold firmly to the rope of Allah all together, and do not become divided.",
        reference: "Surah Aal Imran 3:103",
      },
      {
        id: "usul-al-sittah--first-three--p3",
        lessonId: "usul-al-sittah--first-three",
        type: "quran",
        displayOrder: 3,
        arabicText:
          "يَا أَيُّهَا الَّذِينَ آمَنُوا أَطِيعُوا اللَّهَ وَأَطِيعُوا الرَّسُولَ وَأُولِي الْأَمْرِ مِنكُمْ",
        englishTranslation:
          "O you who believe, obey Allah and obey the Messenger and those in authority among you.",
        reference: "Surah an-Nisa 4:59",
      },
      {
        id: "usul-al-sittah--first-three--p4",
        lessonId: "usul-al-sittah--first-three",
        type: "hadith",
        displayOrder: 4,
        arabicText: "إِنَّمَا الطَّاعَةُ فِي الْمَعْرُوفِ",
        englishTranslation: "Obedience is only in that which is good.",
        reference: "Sahih al-Bukhari #7257; Sahih Muslim #1840",
      },
    ],
  },
  {
    id: "usul-al-sittah--last-three",
    moduleId: "usul-al-sittah",
    slug: "last-three-foundations",
    title: "The Last Three Foundations",
    displayOrder: 2,
    basedOn:
      "A guided reading of al-Usul al-Sittah by Shaykh Muhammad ibn Abd al-Wahhab, summarized from the explanation of Shaykh Muhammad ibn Salih al-Uthaymeen.",
    videoYoutubeUrl: "https://www.youtube.com/watch?v=z1xm_qhEdsc",
    videoScholar: "Shaykh Dr. Muhammad al-Hujayli",
    videoTitle: "Usool as-Sittah — Full Explanation",
    bookRecommendations: [
      {
        title: "Usul al-Sittah (The Six Foundations)",
        pdfUrl: UTHAYMEEN_PDF,
        author: "Matn of Muhammad ibn Abd al-Wahhab; expl. Shaykh Ibn Uthaymeen",
        url: "https://darussalam.com/",
        note: "The fourth through sixth foundations, ending with the famous doubt and its answer.",
      },
    ],
    content: `**The Fourth Foundation: clarifying who the scholars (ulama) truly are.** The scholar is the one who fears Allah because he knows Him, and who inherits the guidance of the prophets.

Allah defined the people of knowledge by their fear of Him:

[[proof:1]]

The author notes that people confused this: some raised ignorant claimants to the rank of scholars, and some cast aside the true scholars. The student's protection is to take knowledge from those grounded in the Book and the Sunnah, upon the way of the Salaf.

**The Fifth Foundation: clarifying the allies of Allah (awliya Allah)** and distinguishing them from the pretenders. People imagined that a "friend of Allah" is one with strange powers who is excused from the Shariah.

Allah gave the definition Himself, and it is open to every believer:

[[proof:2]]

The awliya of Allah are **those who believe and have taqwa**: the more iman and taqwa, the greater the wilayah. There is no wilayah in violating the Shariah; the closer a person is to Allah, the more closely he follows His Messenger ﷺ.

**The Sixth Foundation: the great doubt** used to turn people away from the Quran and Sunnah: the claim that only a great mujtahid may take from them, so ordinary people should leave the texts and follow blind imitation instead. The author counts this among the greatest plots of Shaytan against the revelation. Its answer is that Allah made the Quran a clarification and a guidance for all people, and made it easy to remember.

Allah the Most High said:

[[proof:3]]

Allah even promised that no one comes with a doubt (a "false argument") except that He sends down against it the truth and a better explanation (al-Furqan 25:33). So the Book is not sealed away from the ummah; it is Allah's standing proof, accessible guidance for whoever turns to it sincerely and takes the understanding of the people of knowledge. With these six foundations complete, you have a compass for reading everything that follows: sincerity, unity, order, true knowledge, true nearness to Allah, and a living relationship with the Book and the Sunnah.`,
    proofs: [
      {
        id: "usul-al-sittah--last-three--p1",
        lessonId: "usul-al-sittah--last-three",
        type: "quran",
        displayOrder: 1,
        arabicText:
          "إِنَّمَا يَخْشَى اللَّهَ مِنْ عِبَادِهِ الْعُلَمَاءُ ۗ إِنَّ اللَّهَ عَزِيزٌ غَفُورٌ",
        englishTranslation:
          "Only those who have knowledge among His servants fear Allah. Indeed, Allah is Exalted in Might, Forgiving.",
        reference: "Surah Fatir 35:28",
      },
      {
        id: "usul-al-sittah--last-three--p2",
        lessonId: "usul-al-sittah--last-three",
        type: "quran",
        displayOrder: 2,
        arabicText:
          "أَلَا إِنَّ أَوْلِيَاءَ اللَّهِ لَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ ۝ الَّذِينَ آمَنُوا وَكَانُوا يَتَّقُونَ",
        englishTranslation:
          "Unquestionably, the allies of Allah — there will be no fear upon them, nor will they grieve: those who believed and were fearing Allah.",
        reference: "Surah Yunus 10:62-63",
      },
      {
        id: "usul-al-sittah--last-three--p3",
        lessonId: "usul-al-sittah--last-three",
        type: "quran",
        displayOrder: 3,
        arabicText:
          "وَنَزَّلْنَا عَلَيْكَ الْكِتَابَ تِبْيَانًا لِّكُلِّ شَيْءٍ وَهُدًى وَرَحْمَةً وَبُشْرَىٰ لِلْمُسْلِمِينَ",
        englishTranslation:
          "And We have sent down to you the Book as a clarification for all things, and as guidance and mercy and good tidings for the Muslims.",
        reference: "Surah an-Nahl 16:89",
      },
    ],
  },
];
