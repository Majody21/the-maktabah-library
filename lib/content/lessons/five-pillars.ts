import type { Lesson } from "../types";

export const fivePillarsLessons: Lesson[] = [
  {
    id: "five-pillars--hadith-of-jibreel",
    moduleId: "five-pillars",
    slug: "hadith-of-jibreel",
    title: "The Hadith of Jibreel: What Islam Is Built Upon",
    displayOrder: 1,
    basedOn:
      "Summarized from the explanations of Shaykh Muhammad ibn Salih al-Uthaymeen on the hadith of Jibreel (Sharh al-Arba'in an-Nawawiyyah).",
    videoYoutubeUrl: "https://www.youtube.com/watch?v=cDSfVWEB49Q",
    videoScholar: "Shaykh Muhammad ibn Salih al-Uthaymeen",
    videoTitle: "The Pillars of Islam and Iman",
    bookRecommendations: [
      {
        title: "Sharh al-Arba'in an-Nawawiyyah (Explanation of the Forty Hadith)",
        pdfUrl: "https://drive.google.com/file/d/1jbKQermwmGd3qmrDcVs1MmC4UGdbT3Hh/view",
        author: "Matn of an-Nawawi; expl. Shaykh Ibn Uthaymeen",
        url: "https://darussalam.com/",
        note: "The hadith of Jibreel is the second hadith; the explanation is beginner-friendly.",
      },
    ],
    content: `**Islam** is a defined religion with pillars, and Allah's Messenger ﷺ named them himself. The angel **Jibreel** came to the Prophet ﷺ in the form of a man and questioned him in front of his Companions: What is Islam? What is iman? What is ihsan? The Prophet ﷺ then said, “That was Jibreel; he came to teach you your religion.” This module explains the first of those answers.

[[proof:1]]

Islam is built on **five pillars**: the testimony that none has the right to be worshipped except Allah and that Muhammad is the Messenger of Allah, establishing the prayer, giving the zakah, fasting Ramadan, and making pilgrimage to the House for whoever is able. A pillar is what holds a structure up. If a pillar is removed, the structure falls or stands deficient. The Prophet ﷺ used this image in another narration:

[[proof:2]]

The scholars draw two lessons from the ordering. First, the **shahadatayn** come before everything, because no deed is accepted without correct belief; worship built upon shirk is like a building without a foundation. Second, the pillars cover the rights of Allah in the body (prayer, fasting), in wealth (zakah), and in both (hajj), so that submission covers the whole of a person's life.

Islam is the only religion Allah accepts. It is the religion of all the prophets: submission to Allah alone. It was completed and sealed with the message of Muhammad ﷺ:

[[proof:3]]

In the coming lessons we take each pillar in turn: its meaning, and its proof from the Quran and the Sunnah.`,
    proofs: [
      {
        id: "five-pillars--hadith-of-jibreel--p1",
        lessonId: "five-pillars--hadith-of-jibreel",
        type: "hadith",
        displayOrder: 1,
        arabicText:
          "الإِسْلاَمُ أَنْ تَشْهَدَ أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللَّهِ، وَتُقِيمَ الصَّلاَةَ، وَتُؤْتِيَ الزَّكَاةَ، وَتَصُومَ رَمَضَانَ، وَتَحُجَّ الْبَيْتَ إِنِ اسْتَطَعْتَ إِلَيْهِ سَبِيلاً",
        englishTranslation:
          "Islam is that you testify that none has the right to be worshipped except Allah and that Muhammad is the Messenger of Allah, that you establish the prayer, give the zakah, fast Ramadan, and perform hajj to the House if you are able to find a way to it.",
        reference: "Sahih Muslim #8 (the hadith of Jibreel)",
      },
      {
        id: "five-pillars--hadith-of-jibreel--p2",
        lessonId: "five-pillars--hadith-of-jibreel",
        type: "hadith",
        displayOrder: 2,
        arabicText:
          "بُنِيَ الإِسْلاَمُ عَلَى خَمْسٍ: شَهَادَةِ أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللَّهِ، وَإِقَامِ الصَّلاَةِ، وَإِيتَاءِ الزَّكَاةِ، وَالْحَجِّ، وَصَوْمِ رَمَضَانَ",
        englishTranslation:
          "Islam is built upon five: the testimony that none has the right to be worshipped except Allah and that Muhammad is the Messenger of Allah, establishing the prayer, giving the zakah, hajj, and fasting Ramadan.",
        reference: "Sahih al-Bukhari #8; Sahih Muslim #16",
      },
      {
        id: "five-pillars--hadith-of-jibreel--p3",
        lessonId: "five-pillars--hadith-of-jibreel",
        type: "quran",
        displayOrder: 3,
        arabicText: "إِنَّ الدِّينَ عِندَ اللَّهِ الْإِسْلَامُ",
        englishTranslation: "Indeed, the religion in the sight of Allah is Islam.",
        reference: "Surah Aal Imran 3:19",
      },
    ],
  },
  {
    id: "five-pillars--the-shahadatayn",
    moduleId: "five-pillars",
    slug: "the-shahadatayn",
    title: "The Shahadatayn: The Two Testimonies",
    displayOrder: 2,
    basedOn:
      "Summarized from the explanations of Shaykh Salih al-Fawzan (Aqeedah at-Tawheed) and Shaykh Ibn Uthaymeen on the meaning and conditions of the shahadah.",
    videoYoutubeUrl: "https://www.youtube.com/watch?v=cDSfVWEB49Q",
    videoScholar: "Shaykh Muhammad ibn Salih al-Uthaymeen",
    videoTitle: "The Pillars of Islam and Iman",
    bookRecommendations: [
      {
        title: "Kitab at-Tawheed",
        pdfUrl: "https://drive.google.com/file/d/1_-8INcbDziMMU2oLX9GcS1mSdpQ6Q2iP/view",
        author: "Matn of Muhammad ibn Abd al-Wahhab; expl. Shaykh Salih al-Fawzan",
        url: "https://darussalam.com/",
        note: "The classical text on the tawheed the shahadah expresses.",
      },
    ],
    content: `The first pillar is the statement **La ilaha illa Allah**: *none has the right to be worshipped except Allah*. It contains a negation and an affirmation. It negates the right of worship from everything besides Allah, whether an idol, a saint, a prophet, a star, or a desire, and it affirms worship for Allah alone. The scholars call this the word of **tawheed**, and it is what every messenger was sent with.

[[proof:1]]

Knowledge of its meaning is itself an obligation. Allah commanded us to know it, not only to say it:

[[proof:2]]

The second testimony, **Muhammadun Rasulullah**, is inseparable from the first. Testifying that Muhammad ﷺ is the Messenger of Allah obligates four things, as the scholars summarize: obeying him in what he commanded, believing him in what he informed, avoiding what he forbade, and worshipping Allah only in the way he legislated.

When the Prophet ﷺ sent Mu'adh ibn Jabal to Yemen, a land of the People of the Book, he commanded him to begin with this testimony before anything else, because no deed is accepted without it:

[[proof:3]]

Keep this order in your own learning: know what you testify to, whom you worship, and whom you follow, before everything else. Everything that follows builds upon this.`,
    proofs: [
      {
        id: "five-pillars--the-shahadatayn--p1",
        lessonId: "five-pillars--the-shahadatayn",
        type: "quran",
        displayOrder: 1,
        arabicText:
          "وَلَقَدْ بَعَثْنَا فِي كُلِّ أُمَّةٍ رَّسُولًا أَنِ اعْبُدُوا اللَّهَ وَاجْتَنِبُوا الطَّاغُوتَ",
        englishTranslation:
          "And We certainly sent into every nation a messenger, [saying]: worship Allah and avoid taghut (false objects of worship).",
        reference: "Surah an-Nahl 16:36",
      },
      {
        id: "five-pillars--the-shahadatayn--p2",
        lessonId: "five-pillars--the-shahadatayn",
        type: "quran",
        displayOrder: 2,
        arabicText: "فَاعْلَمْ أَنَّهُ لَا إِلَٰهَ إِلَّا اللَّهُ وَاسْتَغْفِرْ لِذَنبِكَ",
        englishTranslation:
          "So know that none has the right to be worshipped except Allah, and seek forgiveness for your sin.",
        reference: "Surah Muhammad 47:19",
      },
      {
        id: "five-pillars--the-shahadatayn--p3",
        lessonId: "five-pillars--the-shahadatayn",
        type: "hadith",
        displayOrder: 3,
        arabicText:
          "إِنَّكَ تَقْدَمُ عَلَى قَوْمٍ مِنْ أَهْلِ الْكِتَابِ، فَلْيَكُنْ أَوَّلَ مَا تَدْعُوهُمْ إِلَيْهِ شَهَادَةُ أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ",
        englishTranslation:
          "You are going to a people of the Book, so let the first thing you call them to be the testimony that none has the right to be worshipped except Allah.",
        reference: "Sahih al-Bukhari #1496; Sahih Muslim #19",
      },
    ],
  },
  {
    id: "five-pillars--salah-and-zakah",
    moduleId: "five-pillars",
    slug: "salah-and-zakah",
    title: "Salah and Zakah: The Rights of Allah and the Rights of Wealth",
    displayOrder: 3,
    basedOn:
      "Summarized from the explanations of Shaykh Ibn Baz and Shaykh Ibn Uthaymeen on the status of the prayer and zakah.",
    videoYoutubeUrl: "https://www.youtube.com/watch?v=cDSfVWEB49Q",
    videoScholar: "Shaykh Muhammad ibn Salih al-Uthaymeen",
    videoTitle: "The Pillars of Islam and Iman",
    bookRecommendations: [
      {
        title: "The Prophet's Prayer Described (Sifat Salaat an-Nabi)",
        pdfUrl: "https://drive.google.com/file/d/1Cewcsg6T5SeBRqPhmujDmT_zu0C8_Rfe/view",
        author: "Shaykh Muhammad Nasir ad-Din al-Albani",
        url: "https://darussalam.com/",
        note: "The practical companion once the status of prayer is understood.",
      },
    ],
    content: `After the testimony, the greatest pillar is the **salah**, the five daily prayers. Throughout the Quran, Allah pairs the command to establish prayer with the command to give zakah, because the first is the right of Allah upon the body and the second is His right upon wealth:

[[proof:1]]

The command is to *establish* the prayer (iqamat as-salah), not only to perform it. Establishing it means praying with its conditions, its pillars, humility, and on its time. The Prophet ﷺ made the prayer the line between a man and disbelief:

[[proof:2]]

Abdullah ibn Shaqiq reported that the Companions of Muhammad ﷺ did not consider the abandonment of any deed to be disbelief other than the prayer. So guard the five prayers on their times, and for men in congregation where possible. If you fall short in the prayer, correct it before anything else.

**Zakah** is a fixed right that Allah has obligated on qualifying wealth: 2.5% of stored monetary wealth each year. It purifies the giver and his wealth:

[[proof:3]]

Allah has threatened the one who withholds it with a painful punishment on the Day of Resurrection. And whoever pays it, Allah blesses his wealth and purifies his heart from greed.`,
    proofs: [
      {
        id: "five-pillars--salah-and-zakah--p1",
        lessonId: "five-pillars--salah-and-zakah",
        type: "quran",
        displayOrder: 1,
        arabicText: "وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ وَارْكَعُوا مَعَ الرَّاكِعِينَ",
        englishTranslation:
          "And establish the prayer, and give the zakah, and bow with those who bow.",
        reference: "Surah al-Baqarah 2:43",
      },
      {
        id: "five-pillars--salah-and-zakah--p2",
        lessonId: "five-pillars--salah-and-zakah",
        type: "hadith",
        displayOrder: 2,
        arabicText:
          "بَيْنَ الرَّجُلِ وَبَيْنَ الشِّرْكِ وَالْكُفْرِ تَرْكُ الصَّلاَةِ",
        englishTranslation:
          "Between a man and shirk and disbelief stands the abandonment of the prayer.",
        reference: "Sahih Muslim #82",
      },
      {
        id: "five-pillars--salah-and-zakah--p3",
        lessonId: "five-pillars--salah-and-zakah",
        type: "quran",
        displayOrder: 3,
        arabicText:
          "خُذْ مِنْ أَمْوَالِهِمْ صَدَقَةً تُطَهِّرُهُمْ وَتُزَكِّيهِم بِهَا",
        englishTranslation:
          "Take from their wealth a charity by which you purify them and cause them to increase.",
        reference: "Surah at-Tawbah 9:103",
      },
    ],
  },
  {
    id: "five-pillars--sawm-and-hajj",
    moduleId: "five-pillars",
    slug: "sawm-and-hajj",
    title: "Sawm and Hajj: The Fast of Ramadan and the Pilgrimage",
    displayOrder: 4,
    basedOn:
      "Summarized from the explanations of Shaykh Ibn Uthaymeen (Majalis Shahr Ramadan) and Shaykh al-Fawzan on fasting and pilgrimage.",
    videoYoutubeUrl: "https://www.youtube.com/watch?v=cDSfVWEB49Q",
    videoScholar: "Shaykh Muhammad ibn Salih al-Uthaymeen",
    videoTitle: "The Pillars of Islam and Iman",
    bookRecommendations: [
      {
        title: "Al-Mulakhkhas al-Fiqhi (A Summary of Islamic Jurisprudence)",
        pdfUrl: "https://drive.google.com/file/d/1wHuLp2TNlXy3KU_FS12JilMrHpzRKOv1/view",
        author: "Shaykh Salih al-Fawzan",
        url: "https://darussalam.com/",
        note: "See the chapters of fasting and hajj for this lesson's rulings.",
      },
    ],
    content: `The fourth pillar is fasting **Ramadan**: abstaining from food, drink and marital relations from true dawn until sunset, as worship of Allah. Its obligation is stated in the Quran, along with its purpose: **taqwa**, the fearful mindfulness of Allah:

[[proof:1]]

Fasting is hidden worship: no one but Allah knows with certainty that you are fasting. So it trains sincerity (**ikhlas**). The Prophet ﷺ described it as a shield, and warned that whoever does not leave false speech and acting upon it, Allah has no need of his leaving food and drink (Sahih al-Bukhari #1903).

The fifth pillar is **hajj**: the pilgrimage to the Sacred House in Makkah, obligatory once in a lifetime upon whoever is able in body, wealth, and route:

[[proof:2]]

Hajj gathers many kinds of worship into a few days: tawheed proclaimed in the talbiyah, prayer, sacrifice, charity, patience, and the leaving of adornment and comfort. The Prophet ﷺ stated its reward:

[[proof:3]]

This completes the five pillars. Before the module quiz, review each pillar and ask: what is its proof, and do I act upon it? For knowledge is sought in order to be acted upon.`,
    proofs: [
      {
        id: "five-pillars--sawm-and-hajj--p1",
        lessonId: "five-pillars--sawm-and-hajj",
        type: "quran",
        displayOrder: 1,
        arabicText:
          "يَا أَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ الصِّيَامُ كَمَا كُتِبَ عَلَى الَّذِينَ مِن قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُونَ",
        englishTranslation:
          "O you who believe, fasting has been prescribed upon you as it was prescribed upon those before you, that you may attain taqwa.",
        reference: "Surah al-Baqarah 2:183",
      },
      {
        id: "five-pillars--sawm-and-hajj--p2",
        lessonId: "five-pillars--sawm-and-hajj",
        type: "quran",
        displayOrder: 2,
        arabicText:
          "وَلِلَّهِ عَلَى النَّاسِ حِجُّ الْبَيْتِ مَنِ اسْتَطَاعَ إِلَيْهِ سَبِيلًا",
        englishTranslation:
          "And due to Allah from the people is pilgrimage to the House — for whoever is able to find a way to it.",
        reference: "Surah Aal Imran 3:97",
      },
      {
        id: "five-pillars--sawm-and-hajj--p3",
        lessonId: "five-pillars--sawm-and-hajj",
        type: "hadith",
        displayOrder: 3,
        arabicText:
          "مَنْ حَجَّ لِلَّهِ فَلَمْ يَرْفُثْ وَلَمْ يَفْسُقْ رَجَعَ كَيَوْمِ وَلَدَتْهُ أُمُّهُ",
        englishTranslation:
          "Whoever performs hajj for Allah and does not commit obscenity or transgression returns [free of sin] as on the day his mother bore him.",
        reference: "Sahih al-Bukhari #1521",
      },
    ],
  },
];
