import type { Lesson } from "../types";

const QA_200 = {
  title: "200 Q&A on Islamic Creed (A'lam as-Sunnah al-Manshurah)",
  pdfUrl: "https://drive.google.com/file/d/13vKC907IYQdHS0GdLimRBEmkwyJnyhD2/view",
  author: "Shaykh Hafiz ibn Ahmad al-Hakami",
  url: "https://darussalam.com/",
};

const USUL_AL_IMAN = {
  title: "Sharh Usul al-Iman (Explanation of the Foundations of Faith)",
  pdfUrl:
    "https://abdurrahman.org/wp-content/uploads/2014/08/explaining-the-foundations-of-faith-sharh-usool-al-eemaan-shaykh-uthaymeen-dr-saleh-as-saleh.pdf",
  author: "Shaykh Ibn Uthaymeen (trans. Dr. Saleh as-Saleh)",
  url: "https://darussalam.com/",
};

export const sixPillarsLessons: Lesson[] = [
  {
    id: "six-pillars--what-is-iman",
    moduleId: "six-pillars",
    slug: "what-is-iman",
    title: "Iman (Faith)",
    displayOrder: 1,
    basedOn:
      "Summarized from the explanations of Shaykh Muhammad ibn Salih al-Uthaymeen on the hadith of Jibreel and Sharh Usul al-Iman.",
    videoYoutubeUrl: "https://www.youtube.com/watch?v=qcpPwjgdT_k",
    videoScholar: "Shaykh Muhammad ibn Salih al-Uthaymeen",
    videoTitle: "The Hadith of Jibreel and the Levels of the Religion",
    bookRecommendations: [
      {
        ...USUL_AL_IMAN,
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

Even removing something harmful from the road is counted as part of iman, for faith covers the heart's belief, the tongue's speech, and the limbs' action.

In the lessons that follow we take each of the six pillars on its own, and then the level of **ihsan**, which is the highest of the three levels of the religion.`,
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
    id: "six-pillars--belief-in-allah",
    moduleId: "six-pillars",
    slug: "belief-in-allah",
    title: "Belief in Allah",
    displayOrder: 2,
    basedOn:
      "Summarized from Sharh Usul al-Iman of Shaykh Ibn Uthaymeen and Aqeedah at-Tawheed of Shaykh al-Fawzan.",
    videoYoutubeUrl: "https://www.youtube.com/watch?v=45zm4odyZlc",
    videoScholar: "Shaykh Muhammad ibn Salih al-Uthaymeen",
    videoTitle: "Faith in Allah and What It Includes",
    bookRecommendations: [
      { ...QA_200, note: "See the questions on belief in Allah." },
    ],
    content: `**Belief in Allah** is the first pillar of iman and the foundation of the rest. The scholars explain that it contains four matters: belief in His existence, belief in His **rububiyyah**, belief in His **uluhiyyah**, and belief in His **names and attributes**.

Whoever denies any one of the six pillars, such as believing in Allah while rejecting the angels or the decree, has strayed far.

Allah the Most Exalted said:

[[proof:1]]

**His existence** is affirmed by the fitrah, by the intellect, by the senses, and by the revelation. Every created thing points to the One who created it, and the sound fitrah acknowledges its Lord without being taught.

**His rububiyyah** means that He alone creates, He alone owns, and He alone manages the affair of the heavens and the earth. No one shares this with Him. Even the mushrikun of Makkah affirmed this much, and it did not enter them into Islam.

**His uluhiyyah** means that worship belongs to Him alone: du'a, fear, hope, reliance, sacrifice, and every other act of worship. This is the meaning of *La ilaha illa Allah*, and it is what the messengers were sent with. For this Allah created the creation.

Allah the Almighty said:

[[proof:2]]

**His names and attributes** are affirmed as they came in the Book and in the Sunnah, in the manner that befits His majesty. We do not liken them to the attributes of creation, and we do not ask how they are.

Allah the Most High said:

[[proof:3]]

These four matters are taken in full in the module on the Categories of Tawheed. Learn the outline here, and worship your Lord upon knowledge of Him.`,
    proofs: [
      {
        id: "six-pillars--belief-in-allah--p1",
        lessonId: "six-pillars--belief-in-allah",
        type: "quran",
        displayOrder: 1,
        arabicText:
          "يَا أَيُّهَا الَّذِينَ آمَنُوا آمِنُوا بِاللَّهِ وَرَسُولِهِ وَالْكِتَابِ الَّذِي نَزَّلَ عَلَىٰ رَسُولِهِ وَالْكِتَابِ الَّذِي أَنزَلَ مِن قَبْلُ ۚ وَمَن يَكْفُرْ بِاللَّهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ وَالْيَوْمِ الْآخِرِ فَقَدْ ضَلَّ ضَلَالًا بَعِيدًا",
        englishTranslation:
          "O you who believe, believe in Allah and His Messenger and the Book He sent down upon His Messenger and the Book He sent down before. And whoever disbelieves in Allah, His angels, His books, His messengers, and the Last Day has certainly gone far astray.",
        reference: "Surah an-Nisa 4:136",
      },
      {
        id: "six-pillars--belief-in-allah--p2",
        lessonId: "six-pillars--belief-in-allah",
        type: "quran",
        displayOrder: 2,
        arabicText: "وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ إِلَّا لِيَعْبُدُونِ",
        englishTranslation:
          "And I did not create the jinn and mankind except to worship Me.",
        reference: "Surah adh-Dhariyat 51:56",
      },
      {
        id: "six-pillars--belief-in-allah--p3",
        lessonId: "six-pillars--belief-in-allah",
        type: "quran",
        displayOrder: 3,
        arabicText: "لَيْسَ كَمِثْلِهِ شَيْءٌ ۖ وَهُوَ السَّمِيعُ الْبَصِيرُ",
        englishTranslation:
          "There is nothing like Him, and He is the Hearing, the Seeing.",
        reference: "Surah ash-Shura 42:11",
      },
    ],
  },
  {
    id: "six-pillars--belief-in-the-angels",
    moduleId: "six-pillars",
    slug: "belief-in-the-angels",
    title: "Belief in the Angels",
    displayOrder: 3,
    basedOn: "Summarized from Sharh Usul al-Iman of Shaykh Ibn Uthaymeen.",
    videoYoutubeUrl: "https://www.youtube.com/watch?v=V6ZXj4c1rsE",
    videoScholar: "Shaykh Muhammad ibn Salih al-Uthaymeen",
    videoTitle: "Faith in the Angels and What It Includes",
    bookRecommendations: [
      { ...QA_200, note: "See the questions on belief in the angels." },
    ],
    content: `**The angels** are a created world from among the servants of Allah. He created them from light and charged them with obedience to Him. They are not divine, they are not the daughters of Allah as the pagans claimed, and they are not names for the forces of nature.

Allah the Almighty described their obedience:

[[proof:1]]

Aisha (may Allah be pleased with her) narrated that the Messenger of Allah ﷺ said:

[[proof:2]]

Belief in the angels rests upon four matters, as the scholars enumerate them.

**Belief in their existence.** They are a real creation, though we do not see them.

**Belief in those named to us by name**, such as Jibreel, and belief in the rest of them in general.

**Belief in the attributes with which they are described.** Among these is that Allah gave them wings, and that Jibreel was seen by the Prophet ﷺ in the form in which Allah created him.

**Belief in the works Allah charged them with.** Jibreel is entrusted with the revelation, Mika'il with the rain and the vegetation, Israfil with the blowing of the Horn, the angel of death with taking the souls, and the noble recorders with writing the deeds of the servants.

Allah the Exalted said:

[[proof:3]]

This belief bears fruit in the servant. Whoever knows that two noble recorders write down his every word guards his tongue. So believe in them, and be watchful of what is being written for you and against you.`,
    proofs: [
      {
        id: "six-pillars--belief-in-the-angels--p1",
        lessonId: "six-pillars--belief-in-the-angels",
        type: "quran",
        displayOrder: 1,
        arabicText:
          "لَّا يَعْصُونَ اللَّهَ مَا أَمَرَهُمْ وَيَفْعَلُونَ مَا يُؤْمَرُونَ",
        englishTranslation:
          "They do not disobey Allah in what He commands them, and they do what they are commanded.",
        reference: "Surah at-Tahrim 66:6",
      },
      {
        id: "six-pillars--belief-in-the-angels--p2",
        lessonId: "six-pillars--belief-in-the-angels",
        type: "hadith",
        displayOrder: 2,
        arabicText:
          "خُلِقَتِ الْمَلاَئِكَةُ مِنْ نُورٍ، وَخُلِقَ الْجَانُّ مِنْ مَارِجٍ مِنْ نَارٍ، وَخُلِقَ آدَمُ مِمَّا وُصِفَ لَكُمْ",
        englishTranslation:
          "The angels were created from light, the jinn were created from a smokeless flame of fire, and Adam was created from that which has been described to you.",
        reference: "Sahih Muslim #2996",
      },
      {
        id: "six-pillars--belief-in-the-angels--p3",
        lessonId: "six-pillars--belief-in-the-angels",
        type: "quran",
        displayOrder: 3,
        arabicText: "مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ",
        englishTranslation:
          "Not a word does he utter except that with him is an observer prepared.",
        reference: "Surah Qaf 50:18",
      },
    ],
  },
  {
    id: "six-pillars--belief-in-the-books",
    moduleId: "six-pillars",
    slug: "belief-in-the-books",
    title: "Belief in the Books",
    displayOrder: 4,
    basedOn: "Summarized from Sharh Usul al-Iman of Shaykh Ibn Uthaymeen.",
    videoYoutubeUrl: "https://www.youtube.com/watch?v=YIG9AWCn0wQ",
    videoScholar: "Shaykh Muhammad ibn Salih al-Uthaymeen",
    videoTitle: "Faith in the Books and What It Includes",
    bookRecommendations: [
      { ...QA_200, note: "See the questions on the revealed books." },
    ],
    content: `Allah did not leave His creation without guidance. He sent down **books** with His messengers, so that people would know how their Lord is to be worshipped and would have no excuse before Him.

Allah the Most Exalted said:

[[proof:1]]

We believe in every book Allah sent down. We believe in general in all of them, and by name in those He named for us: the scriptures of Ibrahim, the **Tawrah** given to Musa, the **Zabur** given to Dawud, the **Injil** given to 'Isa, and the **Quran** revealed to Muhammad ﷺ.

We also believe in the rulings of these books that have not been altered, and we accept them so long as they are not abrogated by the Quran.

The earlier books were altered by their people, and Allah did not take upon Himself their preservation. The Quran is different.

Allah the Almighty said:

[[proof:2]]

The Quran stands over the scriptures before it as a criterion (**muhaymin**). Whatever agrees with it is accepted, and whatever contradicts it has been changed by the hands of men.

Allah the Most High said:

[[proof:3]]

The Quran abrogates the books before it, and it is the Book by which Allah will judge you. So read it with certainty, and act upon what it commands.`,
    proofs: [
      {
        id: "six-pillars--belief-in-the-books--p1",
        lessonId: "six-pillars--belief-in-the-books",
        type: "quran",
        displayOrder: 1,
        arabicText:
          "لَقَدْ أَرْسَلْنَا رُسُلَنَا بِالْبَيِّنَاتِ وَأَنزَلْنَا مَعَهُمُ الْكِتَابَ وَالْمِيزَانَ لِيَقُومَ النَّاسُ بِالْقِسْطِ",
        englishTranslation:
          "We have certainly sent Our messengers with clear proofs, and We sent down with them the Book and the balance so that the people may uphold justice.",
        reference: "Surah al-Hadid 57:25",
      },
      {
        id: "six-pillars--belief-in-the-books--p2",
        lessonId: "six-pillars--belief-in-the-books",
        type: "quran",
        displayOrder: 2,
        arabicText:
          "إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ",
        englishTranslation:
          "Indeed, it is We who sent down the Reminder, and indeed, We will be its guardian.",
        reference: "Surah al-Hijr 15:9",
      },
      {
        id: "six-pillars--belief-in-the-books--p3",
        lessonId: "six-pillars--belief-in-the-books",
        type: "quran",
        displayOrder: 3,
        arabicText:
          "وَأَنزَلْنَا إِلَيْكَ الْكِتَابَ بِالْحَقِّ مُصَدِّقًا لِّمَا بَيْنَ يَدَيْهِ مِنَ الْكِتَابِ وَمُهَيْمِنًا عَلَيْهِ",
        englishTranslation:
          "And We have revealed to you the Book in truth, confirming what came before it of the Scripture and as a criterion over it.",
        reference: "Surah al-Ma'idah 5:48",
      },
    ],
  },
  {
    id: "six-pillars--belief-in-the-messengers",
    moduleId: "six-pillars",
    slug: "belief-in-the-messengers",
    title: "Belief in the Messengers",
    displayOrder: 5,
    basedOn: "Summarized from Sharh Usul al-Iman of Shaykh Ibn Uthaymeen.",
    videoYoutubeUrl: "https://www.youtube.com/watch?v=36O7Pn86YO0",
    videoScholar: "Shaykh Muhammad ibn Salih al-Uthaymeen",
    videoTitle: "Faith in the Messengers and What It Includes",
    bookRecommendations: [
      { ...QA_200, note: "See the questions on the messengers." },
    ],
    content: `Allah sent to every nation a messenger calling to the worship of Allah alone. Their message was one, even though their laws differed.

Allah the Most Exalted said:

[[proof:1]]

And Allah the Almighty said:

[[proof:2]]

The messengers were human servants of Allah. They possess nothing of lordship and nothing of divinity. Allah honoured them with revelation, and they conveyed the message in full and advised the ummah. Whoever raises them above the rank Allah gave them has gone beyond bounds, and whoever belies them has disbelieved.

We believe in all of them, and we do not distinguish between them by accepting some and rejecting others.

Allah the Exalted said:

[[proof:3]]

Twenty-five are named in the Quran, and there were others whom Allah did not name for us. The best of them are the five of firm resolve: Nuh, Ibrahim, Musa, 'Isa, and Muhammad ﷺ.

Muhammad ﷺ is the last of them. No prophet comes after him, and whoever claims prophethood after him is a liar.

Allah the Most High said:

[[proof:4]]

So believe in the messengers, all of them, and follow the one sent to you: Muhammad ﷺ.`,
    proofs: [
      {
        id: "six-pillars--belief-in-the-messengers--p1",
        lessonId: "six-pillars--belief-in-the-messengers",
        type: "quran",
        displayOrder: 1,
        arabicText:
          "وَلَقَدْ بَعَثْنَا فِي كُلِّ أُمَّةٍ رَّسُولًا أَنِ اعْبُدُوا اللَّهَ وَاجْتَنِبُوا الطَّاغُوتَ",
        englishTranslation:
          "And We certainly sent into every nation a messenger, [saying]: worship Allah and avoid taghut (false objects of worship).",
        reference: "Surah an-Nahl 16:36",
      },
      {
        id: "six-pillars--belief-in-the-messengers--p2",
        lessonId: "six-pillars--belief-in-the-messengers",
        type: "quran",
        displayOrder: 2,
        arabicText:
          "وَمَا أَرْسَلْنَا مِن قَبْلِكَ مِن رَّسُولٍ إِلَّا نُوحِي إِلَيْهِ أَنَّهُ لَا إِلَٰهَ إِلَّا أَنَا فَاعْبُدُونِ",
        englishTranslation:
          "And We did not send any messenger before you except that We revealed to him: none has the right to be worshipped except Me, so worship Me.",
        reference: "Surah al-Anbiya 21:25",
      },
      {
        id: "six-pillars--belief-in-the-messengers--p3",
        lessonId: "six-pillars--belief-in-the-messengers",
        type: "quran",
        displayOrder: 3,
        arabicText:
          "كُلٌّ آمَنَ بِاللَّهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِّن رُّسُلِهِ",
        englishTranslation:
          "All of them have believed in Allah and His angels and His books and His messengers, [saying]: We make no distinction between any of His messengers.",
        reference: "Surah al-Baqarah 2:285",
      },
      {
        id: "six-pillars--belief-in-the-messengers--p4",
        lessonId: "six-pillars--belief-in-the-messengers",
        type: "quran",
        displayOrder: 4,
        arabicText:
          "مَّا كَانَ مُحَمَّدٌ أَبَا أَحَدٍ مِّن رِّجَالِكُمْ وَلَٰكِن رَّسُولَ اللَّهِ وَخَاتَمَ النَّبِيِّينَ",
        englishTranslation:
          "Muhammad is not the father of any of your men, but the Messenger of Allah and the seal of the prophets.",
        reference: "Surah al-Ahzab 33:40",
      },
    ],
  },
  {
    id: "six-pillars--belief-in-the-last-day",
    moduleId: "six-pillars",
    slug: "belief-in-the-last-day",
    title: "Belief in the Last Day",
    displayOrder: 6,
    basedOn: "Summarized from Sharh Usul al-Iman of Shaykh Ibn Uthaymeen.",
    videoYoutubeUrl: "https://www.youtube.com/watch?v=JeNyVjSG1TQ",
    videoScholar: "Shaykh Muhammad ibn Salih al-Uthaymeen",
    videoTitle: "The Day of Resurrection",
    bookRecommendations: [
      { ...QA_200, note: "See the questions on the Last Day." },
    ],
    content: `**Belief in the Last Day** is certainty in everything the revelation reports of what comes after death.

It begins with the trial of the grave, where the servant is questioned about his Lord, his religion and his Prophet ﷺ, and the grave is then either a garden of bliss or a pit of punishment. Then the Horn is blown and the dead are raised. Then comes the gathering, the records handed to the right hand or to the left, the scale in which the deeds are weighed, the sirat, the intercession by Allah's permission, and finally Paradise or the Fire, without end.

Allah the Most Exalted said:

[[proof:1]]

The disbelievers denied the Resurrection, and Allah commanded His Prophet ﷺ to swear to them that it will come.

Allah the Almighty said:

[[proof:2]]

Nothing is lost in that reckoning, and nothing is too small to be brought forward.

Allah the Most High said:

[[proof:3]]

Whoever is certain of this Day watches himself in private as he does in public. For this reason Allah joins belief in Him to belief in the Last Day in many places in His Book. So prepare for it with the deeds you would wish to find before you.`,
    proofs: [
      {
        id: "six-pillars--belief-in-the-last-day--p1",
        lessonId: "six-pillars--belief-in-the-last-day",
        type: "quran",
        displayOrder: 1,
        arabicText:
          "ثُمَّ إِنَّكُم بَعْدَ ذَٰلِكَ لَمَيِّتُونَ ۝ ثُمَّ إِنَّكُمْ يَوْمَ الْقِيَامَةِ تُبْعَثُونَ",
        englishTranslation:
          "Then indeed, after that you are to die. Then indeed you, on the Day of Resurrection, will be resurrected.",
        reference: "Surah al-Mu'minun 23:15-16",
      },
      {
        id: "six-pillars--belief-in-the-last-day--p2",
        lessonId: "six-pillars--belief-in-the-last-day",
        type: "quran",
        displayOrder: 2,
        arabicText:
          "زَعَمَ الَّذِينَ كَفَرُوا أَن لَّن يُبْعَثُوا ۚ قُلْ بَلَىٰ وَرَبِّي لَتُبْعَثُنَّ ثُمَّ لَتُنَبَّؤُنَّ بِمَا عَمِلْتُمْ",
        englishTranslation:
          "Those who disbelieve have claimed that they will never be resurrected. Say: Yes, by my Lord, you will surely be resurrected; then you will surely be informed of what you did.",
        reference: "Surah at-Taghabun 64:7",
      },
      {
        id: "six-pillars--belief-in-the-last-day--p3",
        lessonId: "six-pillars--belief-in-the-last-day",
        type: "quran",
        displayOrder: 3,
        arabicText:
          "فَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَرَهُ ۝ وَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ شَرًّا يَرَهُ",
        englishTranslation:
          "So whoever does an atom's weight of good will see it, and whoever does an atom's weight of evil will see it.",
        reference: "Surah az-Zalzalah 99:7-8",
      },
    ],
  },
  {
    id: "six-pillars--belief-in-al-qadar",
    moduleId: "six-pillars",
    slug: "belief-in-al-qadar",
    title: "Belief in al-Qadar",
    displayOrder: 7,
    basedOn:
      "Summarized from Sharh Usul al-Iman of Shaykh Ibn Uthaymeen and the explanations of Shaykh Ibn Baz on belief in the decree.",
    videoYoutubeUrl: "https://www.youtube.com/watch?v=ep6kYnJSoE8",
    videoScholar: "Shaykh Salih al-Fawzan",
    videoTitle: "Belief in the Qadar of Allah and Contentment with It",
    bookRecommendations: [
      { ...QA_200, note: "See the questions on al-qadar." },
    ],
    content: `**Al-qadar** is the decree of Allah. Belief in it rests upon four matters, as the scholars enumerate them.

**His knowledge.** Allah knows all things: what has been, what will be, and how that which has not happened would be if it were to happen.

**His writing.** He wrote all of that with Him in the Preserved Tablet.

Abdullah ibn Amr ibn al-As (may Allah be pleased with them) narrated that the Messenger of Allah ﷺ said:

[[proof:1]]

**His will.** Nothing occurs in the heavens or the earth except by the will of Allah. What He wills comes to be, and what He does not will does not come to be.

**His creating.** He is the Creator of all things, and the actions of the servants are from among the things He created.

Allah the Most Exalted said:

[[proof:2]]

And Allah the Almighty said:

[[proof:3]]

Belief in the decree does not cancel the action of the servant. You choose, you act, and you are held to account for what you do. Allah commanded you to take the means, and He made the means themselves part of the decree. No one may argue with the decree as an excuse for abandoning a command or falling into what is forbidden.

This belief cures the heart of two diseases: grief over what escaped you, and arrogance over what reached you.

Allah the Exalted said:

[[proof:4]]

So take the means, and let your heart rest upon the decree of your Lord. With this the six pillars of iman are complete.`,
    proofs: [
      {
        id: "six-pillars--belief-in-al-qadar--p1",
        lessonId: "six-pillars--belief-in-al-qadar",
        type: "hadith",
        displayOrder: 1,
        arabicText:
          "كَتَبَ اللَّهُ مَقَادِيرَ الْخَلاَئِقِ قَبْلَ أَنْ يَخْلُقَ السَّمَوَاتِ وَالأَرْضَ بِخَمْسِينَ أَلْفَ سَنَةٍ",
        englishTranslation:
          "Allah wrote the decrees of the creation fifty thousand years before He created the heavens and the earth.",
        reference: "Sahih Muslim #2653",
      },
      {
        id: "six-pillars--belief-in-al-qadar--p2",
        lessonId: "six-pillars--belief-in-al-qadar",
        type: "quran",
        displayOrder: 2,
        arabicText: "إِنَّا كُلَّ شَيْءٍ خَلَقْنَاهُ بِقَدَرٍ",
        englishTranslation: "Indeed, all things We created with a decree.",
        reference: "Surah al-Qamar 54:49",
      },
      {
        id: "six-pillars--belief-in-al-qadar--p3",
        lessonId: "six-pillars--belief-in-al-qadar",
        type: "quran",
        displayOrder: 3,
        arabicText: "وَخَلَقَ كُلَّ شَيْءٍ فَقَدَّرَهُ تَقْدِيرًا",
        englishTranslation:
          "And He created everything and determined it with [precise] determination.",
        reference: "Surah al-Furqan 25:2",
      },
      {
        id: "six-pillars--belief-in-al-qadar--p4",
        lessonId: "six-pillars--belief-in-al-qadar",
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
  {
    id: "six-pillars--ihsan",
    moduleId: "six-pillars",
    slug: "ihsan",
    title: "Ihsan (Excellence)",
    displayOrder: 8,
    basedOn:
      "Summarized from the explanations of Shaykh Muhammad ibn Salih al-Uthaymeen on the hadith of Jibreel.",
    videoYoutubeUrl: "https://www.youtube.com/watch?v=whPxy1HuaPk",
    videoScholar: "Shaykh Muhammad ibn Salih al-Uthaymeen",
    videoTitle: "Ihsan and Attaining the Love of Allah",
    bookRecommendations: [
      {
        ...USUL_AL_IMAN,
        note: "See the closing section on ihsan and the levels of the religion.",
      },
    ],
    content: `After Jibreel asked the Prophet ﷺ about Islam and about iman, he asked him about **ihsan**. The religion has three levels: Islam, then iman, then ihsan, and ihsan is the highest of them.

In the narration of Umar ibn al-Khattab (may Allah be pleased with him), the Prophet ﷺ said:

[[proof:1]]

The scholars explain that this definition contains two stations, one above the other.

**The station of seeking.** The servant worships Allah as though he sees Him. His heart is drawn to his Lord by longing and love, and he worships Him as one who is present before Him. This is the higher of the two stations.

**The station of watchfulness.** If he does not reach the first, he worships Allah knowing that Allah sees him. This is **muraqabah**, and it is enough to keep a man upright when no eye of the creation is upon him.

Allah the Most Exalted said:

[[proof:2]]

Ihsan is not a fourth pillar set beside the pillars of Islam and the pillars of iman. It is the perfection of both: that the outward worship of the limbs and the inward belief of the heart are performed as they ought to be performed, in public and in private without difference.

And Allah has promised the people of ihsan that He is with them.

Allah the Almighty said:

[[proof:3]]

So look at your prayer, your speech and your dealings, and ask yourself whether they are the same when people see you as when they do not. May Allah make us and you of the muhsinun, and grant us and you beneficial knowledge and righteous action.`,
    proofs: [
      {
        id: "six-pillars--ihsan--p1",
        lessonId: "six-pillars--ihsan",
        type: "hadith",
        displayOrder: 1,
        arabicText:
          "أَنْ تَعْبُدَ اللَّهَ كَأَنَّكَ تَرَاهُ، فَإِنْ لَمْ تَكُنْ تَرَاهُ فَإِنَّهُ يَرَاكَ",
        englishTranslation:
          "[Ihsan is] that you worship Allah as though you see Him; and if you do not see Him, then indeed He sees you.",
        reference: "Sahih Muslim #8 (the hadith of Jibreel)",
      },
      {
        id: "six-pillars--ihsan--p2",
        lessonId: "six-pillars--ihsan",
        type: "quran",
        displayOrder: 2,
        arabicText:
          "وَتَوَكَّلْ عَلَى الْعَزِيزِ الرَّحِيمِ ۝ الَّذِي يَرَاكَ حِينَ تَقُومُ ۝ وَتَقَلُّبَكَ فِي السَّاجِدِينَ",
        englishTranslation:
          "And rely upon the Exalted in Might, the Merciful, who sees you when you arise and your movement among those who prostrate.",
        reference: "Surah ash-Shu'ara 26:217-219",
      },
      {
        id: "six-pillars--ihsan--p3",
        lessonId: "six-pillars--ihsan",
        type: "quran",
        displayOrder: 3,
        arabicText:
          "إِنَّ اللَّهَ مَعَ الَّذِينَ اتَّقَوا وَّالَّذِينَ هُم مُّحْسِنُونَ",
        englishTranslation:
          "Indeed, Allah is with those who fear Him and those who are doers of good.",
        reference: "Surah an-Nahl 16:128",
      },
    ],
  },
];
