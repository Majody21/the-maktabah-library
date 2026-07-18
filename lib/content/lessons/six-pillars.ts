import type { Lesson } from "../types";

export const sixPillarsLessons: Lesson[] = [
  {
    id: "six-pillars--what-is-iman",
    moduleId: "six-pillars",
    slug: "what-is-iman",
    title: "Iman (Faith)",
    displayOrder: 1,
    basedOn:
      "Summarized from the explanations of Shaykh Muhammad ibn Salih al-Uthaymeen on the hadith of Jibreel and Sharh Usul al-Iman.",
    videoYoutubeUrl: "https://www.youtube.com/watch?v=cDSfVWEB49Q",
    videoScholar: "Shaykh Muhammad ibn Salih al-Uthaymeen",
    videoTitle: "The Pillars of Islam and Iman",
    bookRecommendations: [
      {
        title: "Sharh Usul al-Iman (Explanation of the Foundations of Faith)",
        pdfUrl: "https://abdurrahman.org/wp-content/uploads/2014/08/explaining-the-foundations-of-faith-sharh-usool-al-eemaan-shaykh-uthaymeen-dr-saleh-as-saleh.pdf",
        author: "Shaykh Ibn Uthaymeen (trans. Dr. Saleh as-Saleh)",
        url: "https://darussalam.com/",
        note: "A short treatise covering all six pillars; read it alongside this module.",
      },
    ],
    content: `If Islam describes the outward submission of the limbs, **iman** describes what the heart believes, says and does. When Jibreel asked the Prophet ﷺ, “What is iman?”, he answered with six matters, and these are the pillars of iman.

In the narration of Umar ibn al-Khattab (may Allah be pleased with him), the Prophet ﷺ said:

[[proof:1]]

The Quran gathers the same pillars. When Allah describes true righteousness (**birr**), He begins with these beliefs.

Allah the Most Exalted said:

[[proof:2]]

Ahlus Sunnah define iman as *statement of the tongue, belief of the heart, and action of the limbs; it increases with obedience and decreases with sin*. So iman is not one fixed amount: it rises when you obey Allah and falls when you disobey Him.

Abu Hurairah (may Allah be pleased with him) narrated that the Prophet ﷺ said:

[[proof:3]]

Even removing something harmful from the road is counted as part of iman, for faith covers the heart's belief, the tongue's speech, and the limbs' action. In this module we take the six pillars in pairs: Allah and His angels, His books and His messengers, then the Last Day and al-qadar (the divine decree).`,
    proofs: [
      {
        id: "six-pillars--what-is-iman--p1",
        lessonId: "six-pillars--what-is-iman",
        type: "hadith",
        displayOrder: 1,
        arabicText:
          "أَنْ تُؤْمِنَ بِاللَّهِ وَمَلاَئِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ وَالْيَوْمِ الآخِرِ وَتُؤْمِنَ بِالْقَدَرِ خَيْرِهِ وَشَرِّهِ",
        englishTranslation:
          "[Iman is] that you believe in Allah, His angels, His books, His messengers, and the Last Day, and that you believe in the decree — its good and its bad.",
        reference: "Sahih Muslim #8 (the hadith of Jibreel)",
      },
      {
        id: "six-pillars--what-is-iman--p2",
        lessonId: "six-pillars--what-is-iman",
        type: "quran",
        displayOrder: 2,
        arabicText:
          "وَلَٰكِنَّ الْبِرَّ مَنْ آمَنَ بِاللَّهِ وَالْيَوْمِ الْآخِرِ وَالْمَلَائِكَةِ وَالْكِتَابِ وَالنَّبِيِّينَ",
        englishTranslation:
          "But righteousness is [in] the one who believes in Allah, the Last Day, the angels, the Book, and the prophets.",
        reference: "Surah al-Baqarah 2:177",
      },
      {
        id: "six-pillars--what-is-iman--p3",
        lessonId: "six-pillars--what-is-iman",
        type: "hadith",
        displayOrder: 3,
        arabicText:
          "الإِيمَانُ بِضْعٌ وَسَبْعُونَ شُعْبَةً، فَأَفْضَلُهَا قَوْلُ لاَ إِلَهَ إِلاَّ اللَّهُ، وَأَدْنَاهَا إِمَاطَةُ الأَذَى عَنِ الطَّرِيقِ، وَالْحَيَاءُ شُعْبَةٌ مِنَ الإِيمَانِ",
        englishTranslation:
          "Iman is seventy-odd branches: the highest of them is the statement 'none has the right to be worshipped except Allah', the lowest is removing something harmful from the road, and modesty is a branch of iman.",
        reference: "Sahih Muslim #35",
      },
    ],
  },
  {
    id: "six-pillars--allah-and-the-angels",
    moduleId: "six-pillars",
    slug: "allah-and-the-angels",
    title: "Belief in Allah and the Angels",
    displayOrder: 2,
    basedOn:
      "Summarized from Sharh Usul al-Iman of Shaykh Ibn Uthaymeen and Aqeedah at-Tawheed of Shaykh al-Fawzan.",
    videoYoutubeUrl: "https://www.youtube.com/watch?v=cDSfVWEB49Q",
    videoScholar: "Shaykh Muhammad ibn Salih al-Uthaymeen",
    videoTitle: "The Pillars of Islam and Iman",
    bookRecommendations: [
      {
        title: "200 Q&A on Islamic Creed (A'lam as-Sunnah al-Manshurah)",
        pdfUrl: "https://drive.google.com/file/d/13vKC907IYQdHS0GdLimRBEmkwyJnyhD2/view",
        author: "Shaykh Hafiz ibn Ahmad al-Hakami",
        url: "https://darussalam.com/",
        note: "See the questions on belief in Allah and the angels.",
      },
    ],
    content: `**Belief in Allah** contains four things, as the scholars explain: belief in His existence; belief in His **rububiyyah** (He alone creates, owns and governs); belief in His **uluhiyyah** (He alone deserves worship); and belief in His **names and attributes** as He and His Messenger ﷺ described them. Each of these will be studied in a later module; here we learn the outline. One ayah gathers the whole command.

Allah the Most Exalted said:

[[proof:1]]

Whoever denies any of the six pillars, such as believing in Allah while rejecting the angels or the decree, has strayed far by the text of this ayah. Iman is only accepted whole.

**The angels** are a created world of Allah's servants, made from light, who never disobey Him. They are not divine, not Allah's daughters as the pagans claimed, and not metaphors for forces of nature. Among them: Jibreel entrusted with revelation, Mika'il with rain, Israfil with the Horn, the recorders over every person, and the angel of death.

Allah the Almighty describes their perfect obedience:

[[proof:2]]

Belief in them means believing in their existence, in those named to us by name, in their described attributes, and in their works. This belief bears fruit: whoever remembers that two noble recorders write his every word watches his tongue.

Allah the Exalted said:

[[proof:4]]

Aisha (may Allah be pleased with her) narrated that the Messenger of Allah ﷺ said:

[[proof:3]]`,
    proofs: [
      {
        id: "six-pillars--allah-and-the-angels--p1",
        lessonId: "six-pillars--allah-and-the-angels",
        type: "quran",
        displayOrder: 1,
        arabicText:
          "يَا أَيُّهَا الَّذِينَ آمَنُوا آمِنُوا بِاللَّهِ وَرَسُولِهِ وَالْكِتَابِ الَّذِي نَزَّلَ عَلَىٰ رَسُولِهِ وَالْكِتَابِ الَّذِي أَنزَلَ مِن قَبْلُ ۚ وَمَن يَكْفُرْ بِاللَّهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ وَالْيَوْمِ الْآخِرِ فَقَدْ ضَلَّ ضَلَالًا بَعِيدًا",
        englishTranslation:
          "O you who believe, believe in Allah and His Messenger and the Book He sent down upon His Messenger and the Book He sent down before. And whoever disbelieves in Allah, His angels, His books, His messengers, and the Last Day has certainly gone far astray.",
        reference: "Surah an-Nisa 4:136",
      },
      {
        id: "six-pillars--allah-and-the-angels--p2",
        lessonId: "six-pillars--allah-and-the-angels",
        type: "quran",
        displayOrder: 2,
        arabicText:
          "لَّا يَعْصُونَ اللَّهَ مَا أَمَرَهُمْ وَيَفْعَلُونَ مَا يُؤْمَرُونَ",
        englishTranslation:
          "They do not disobey Allah in what He commands them, and they do what they are commanded.",
        reference: "Surah at-Tahrim 66:6",
      },
      {
        id: "six-pillars--allah-and-the-angels--p3",
        lessonId: "six-pillars--allah-and-the-angels",
        type: "hadith",
        displayOrder: 3,
        arabicText:
          "خُلِقَتِ الْمَلاَئِكَةُ مِنْ نُورٍ، وَخُلِقَ الْجَانُّ مِنْ مَارِجٍ مِنْ نَارٍ، وَخُلِقَ آدَمُ مِمَّا وُصِفَ لَكُمْ",
        englishTranslation:
          "The angels were created from light, the jinn were created from a smokeless flame of fire, and Adam was created from that which has been described to you.",
        reference: "Sahih Muslim #2996",
      },
      {
        id: "six-pillars--allah-and-the-angels--p4",
        lessonId: "six-pillars--allah-and-the-angels",
        type: "quran",
        displayOrder: 4,
        arabicText: "مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ",
        englishTranslation:
          "Not a word does he utter except that with him is an observer prepared.",
        reference: "Surah Qaf 50:18",
      },
    ],
  },
  {
    id: "six-pillars--books-and-messengers",
    moduleId: "six-pillars",
    slug: "books-and-messengers",
    title: "Belief in the Books and the Messengers",
    displayOrder: 3,
    basedOn:
      "Summarized from Sharh Usul al-Iman of Shaykh Ibn Uthaymeen.",
    videoYoutubeUrl: "https://www.youtube.com/watch?v=cDSfVWEB49Q",
    videoScholar: "Shaykh Muhammad ibn Salih al-Uthaymeen",
    videoTitle: "The Pillars of Islam and Iman",
    bookRecommendations: [
      {
        title: "200 Q&A on Islamic Creed (A'lam as-Sunnah al-Manshurah)",
        pdfUrl: "https://drive.google.com/file/d/13vKC907IYQdHS0GdLimRBEmkwyJnyhD2/view",
        author: "Shaykh Hafiz ibn Ahmad al-Hakami",
        url: "https://darussalam.com/",
        note: "See the questions on the revealed books and the messengers.",
      },
    ],
    content: `Allah did not leave His creation without guidance. He sent **messengers** to every nation and sent down **books** with them, so that no one may stand before Him on the Day of Judgment with an excuse:

[[proof:1]]

We believe in every book Allah sent down: the scriptures of Ibrahim, the Tawrah of Musa, the Zabur of Dawud, the Injil of 'Isa, and the **Quran**. The earlier books were altered by their people, while Allah Himself has guarded the Quran. The Quran stands over the earlier scriptures as a criterion (*muhaymin*): whatever agrees with it is accepted, and whatever contradicts it has been changed.

The message of every messenger was one, even though their laws differed. Tawheed is the religion of Nuh, Ibrahim, Musa, and 'Isa alike:

[[proof:2]]

We believe in the messengers named in revelation (twenty-five are named in the Quran) and that there were others we were not told about. They were truthful human servants, neither divine nor liars. The best of them are the five of firm resolve: Nuh, Ibrahim, Musa, 'Isa, and Muhammad ﷺ, and Muhammad ﷺ is their seal. No prophet comes after him:

[[proof:3]]

This pillar shapes how you read the Quran: it is the final, protected word of the Lord of the worlds. So read it with certainty, and act upon it.`,
    proofs: [
      {
        id: "six-pillars--books-and-messengers--p1",
        lessonId: "six-pillars--books-and-messengers",
        type: "quran",
        displayOrder: 1,
        arabicText:
          "لَقَدْ أَرْسَلْنَا رُسُلَنَا بِالْبَيِّنَاتِ وَأَنزَلْنَا مَعَهُمُ الْكِتَابَ وَالْمِيزَانَ لِيَقُومَ النَّاسُ بِالْقِسْطِ",
        englishTranslation:
          "We have certainly sent Our messengers with clear proofs, and We sent down with them the Book and the balance so that the people may uphold justice.",
        reference: "Surah al-Hadid 57:25",
      },
      {
        id: "six-pillars--books-and-messengers--p2",
        lessonId: "six-pillars--books-and-messengers",
        type: "quran",
        displayOrder: 2,
        arabicText:
          "وَمَا أَرْسَلْنَا مِن قَبْلِكَ مِن رَّسُولٍ إِلَّا نُوحِي إِلَيْهِ أَنَّهُ لَا إِلَٰهَ إِلَّا أَنَا فَاعْبُدُونِ",
        englishTranslation:
          "And We did not send any messenger before you except that We revealed to him: none has the right to be worshipped except Me, so worship Me.",
        reference: "Surah al-Anbiya 21:25",
      },
      {
        id: "six-pillars--books-and-messengers--p3",
        lessonId: "six-pillars--books-and-messengers",
        type: "quran",
        displayOrder: 3,
        arabicText:
          "مَّا كَانَ مُحَمَّدٌ أَبَا أَحَدٍ مِّن رِّجَالِكُمْ وَلَٰكِن رَّسُولَ اللَّهِ وَخَاتَمَ النَّبِيِّينَ",
        englishTranslation:
          "Muhammad is not the father of any of your men, but the Messenger of Allah and the seal of the prophets.",
        reference: "Surah al-Ahzab 33:40",
      },
    ],
  },
  {
    id: "six-pillars--last-day-and-qadar",
    moduleId: "six-pillars",
    slug: "last-day-and-qadar",
    title: "The Last Day and al-Qadar (The Decree)",
    displayOrder: 4,
    basedOn:
      "Summarized from Sharh Usul al-Iman of Shaykh Ibn Uthaymeen and the explanations of Shaykh Ibn Baz on belief in the decree.",
    videoYoutubeUrl: "https://www.youtube.com/watch?v=cDSfVWEB49Q",
    videoScholar: "Shaykh Muhammad ibn Salih al-Uthaymeen",
    videoTitle: "The Pillars of Islam and Iman",
    bookRecommendations: [
      {
        title: "200 Q&A on Islamic Creed (A'lam as-Sunnah al-Manshurah)",
        pdfUrl: "https://drive.google.com/file/d/13vKC907IYQdHS0GdLimRBEmkwyJnyhD2/view",
        author: "Shaykh Hafiz ibn Ahmad al-Hakami",
        url: "https://darussalam.com/",
        note: "See the questions on the Last Day and al-qadar.",
      },
    ],
    content: `**Belief in the Last Day** means certainty in everything the revelation reports after death: the trial of the grave and its bliss or punishment, the Resurrection, the gathering, the records handed to the right or the left, the scale, the sirat, the intercession, and finally Paradise or the Fire, forever. The reckoning covers even an atom's weight:

[[proof:1]]

Whoever is certain of this Day watches himself in secret as he does in public. For this reason the Quran often joins belief in Allah to belief in the Last Day.

The sixth pillar is **al-qadar**: that Allah's knowledge, writing, will and creation encompass everything that happens. Nothing occurs in the heavens or the earth, sweet or bitter, except that Allah knew it, wrote it fifty thousand years before creation, willed it, and created it.

Allah the Almighty said:

[[proof:2]]

And Abdullah ibn Amr ibn al-As (may Allah be pleased with them) narrated that the Messenger of Allah ﷺ said:

[[proof:3]]

Belief in qadar does not cancel human action; we choose, act, and are held to account. But it removes two diseases: despair over what escaped you, and exultation over what reached you.

Allah the Exalted said:

[[proof:4]]

The believer works and takes the means, and his heart is at rest with the decree of his Lord. With this the six pillars are complete. Review them, then take the module quiz.`,
    proofs: [
      {
        id: "six-pillars--last-day-and-qadar--p1",
        lessonId: "six-pillars--last-day-and-qadar",
        type: "quran",
        displayOrder: 1,
        arabicText:
          "فَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَرَهُ ۝ وَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ شَرًّا يَرَهُ",
        englishTranslation:
          "So whoever does an atom's weight of good will see it, and whoever does an atom's weight of evil will see it.",
        reference: "Surah az-Zalzalah 99:7-8",
      },
      {
        id: "six-pillars--last-day-and-qadar--p2",
        lessonId: "six-pillars--last-day-and-qadar",
        type: "quran",
        displayOrder: 2,
        arabicText: "إِنَّا كُلَّ شَيْءٍ خَلَقْنَاهُ بِقَدَرٍ",
        englishTranslation: "Indeed, all things We created with a decree.",
        reference: "Surah al-Qamar 54:49",
      },
      {
        id: "six-pillars--last-day-and-qadar--p3",
        lessonId: "six-pillars--last-day-and-qadar",
        type: "hadith",
        displayOrder: 3,
        arabicText:
          "كَتَبَ اللَّهُ مَقَادِيرَ الْخَلاَئِقِ قَبْلَ أَنْ يَخْلُقَ السَّمَوَاتِ وَالأَرْضَ بِخَمْسِينَ أَلْفَ سَنَةٍ",
        englishTranslation:
          "Allah wrote the decrees of the creation fifty thousand years before He created the heavens and the earth.",
        reference: "Sahih Muslim #2653",
      },
      {
        id: "six-pillars--last-day-and-qadar--p4",
        lessonId: "six-pillars--last-day-and-qadar",
        type: "quran",
        displayOrder: 4,
        arabicText:
          "مَا أَصَابَ مِن مُّصِيبَةٍ فِي الْأَرْضِ وَلَا فِي أَنفُسِكُمْ إِلَّا فِي كِتَابٍ مِّن قَبْلِ أَن نَّبْرَأَهَا ۚ إِنَّ ذَٰلِكَ عَلَى اللَّهِ يَسِيرٌ ۝ لِّكَيْلَا تَأْسَوْا عَلَىٰ مَا فَاتَكُمْ وَلَا تَفْرَحُوا بِمَا آتَاكُمْ",
        englishTranslation:
          "No disaster strikes upon the earth or among yourselves except that it is in a register before We bring it into being — indeed that, for Allah, is easy — so that you not despair over what has escaped you, nor exult over what He has given you.",
        reference: "Surah al-Hadid 57:22-23",
      },
    ],
  },
];
