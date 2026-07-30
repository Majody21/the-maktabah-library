import type { Lesson } from "../types";

const MATN = {
  title: "The Four Principles (with explanation)",
  pdfUrl: "https://drive.google.com/file/d/1gSL4VRco9eaGn7MyGeee9u9__4XY_PKW/view",
  author: "Matn of Muhammad ibn Abd al-Wahhab; expl. Shaykh Haytham Sarhan",
  url: "https://darussalam.com/",
};

const FAWZAN = "Shaykh Salih al-Fawzan";

export const qawaidArbaLessons: Lesson[] = [
  {
    id: "qawaid-al-arba--the-book",
    moduleId: "qawaid-al-arba",
    slug: "the-book",
    title: "The Author's Introduction",
    displayOrder: 1,
    basedOn:
      "A guided reading of al-Qawa'id al-Arba' of Shaykh Muhammad ibn Abd al-Wahhab, summarized from the explanation of Shaykh Salih al-Fawzan.",
    videoYoutubeUrl: "https://www.youtube.com/watch?v=HGdigStLye8",
    videoScholar: FAWZAN,
    videoTitle: "Explanation of al-Qawa'id al-Arba' (Part 1)",
    bookRecommendations: [
      { ...MATN, note: "A single-sitting matn; read it whole before this module." },
    ],
    content: `**Al-Qawa'id al-Arba'** (The Four Principles) is a treatise of Shaykh Muhammad ibn Abd al-Wahhab. It is barely a page in length, and the scholars place it early in the study of aqeedah because it settles the confusions surrounding shirk before the student meets them.

The author does not open with argument. He opens with a du'a for whoever reads his book:

*I ask Allah, the Generous, Lord of the Great Throne, to befriend you in this world and the next, to make you blessed wherever you are, and to make you of those who when given are grateful, when tested are patient, and when they sin seek forgiveness, for these three are the signs of happiness.*

The scholars draw attention to what he gathered in these words. Gratitude when given, patience when tested, and repentance when a sin occurs: the servant does not leave these three states, and whoever is granted them in all of them has been granted happiness.

He then states the purpose of the treatise. The **hanifiyyah**, the religion of Ibrahim, is that you worship Allah alone, making the religion sincerely for Him. For this Allah created the creation.

Allah the Most Exalted said:

[[proof:1]]

And He commanded nothing besides it.

Allah the Almighty said:

[[proof:2]]

So the matter is not whether a person worships. The mushrikun worshipped, and gave, and drew near. The matter is whom he worships, and whether the religion is made sincerely for Allah alone.

The author then lays down the rule upon which everything after it rests: when you know that Allah created you for His worship, know that worship is not called worship unless it is joined with tawheed, just as the prayer is not called prayer unless it is joined with purification. When shirk enters an act of worship it corrupts it, as impurity entering purification corrupts it.

Upon this he builds the four principles. Read the treatise once from its beginning to its end, then take the principles one by one in the lessons that follow.`,
    proofs: [
      {
        id: "qawaid-al-arba--the-book--p1",
        lessonId: "qawaid-al-arba--the-book",
        type: "quran",
        displayOrder: 1,
        arabicText: "وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ إِلَّا لِيَعْبُدُونِ",
        englishTranslation:
          "And I did not create the jinn and mankind except to worship Me.",
        reference: "Surah adh-Dhariyat 51:56",
      },
      {
        id: "qawaid-al-arba--the-book--p2",
        lessonId: "qawaid-al-arba--the-book",
        type: "quran",
        displayOrder: 2,
        arabicText:
          "وَمَا أُمِرُوا إِلَّا لِيَعْبُدُوا اللَّهَ مُخْلِصِينَ لَهُ الدِّينَ حُنَفَاءَ",
        englishTranslation:
          "And they were not commanded except to worship Allah, making the religion sincerely His, inclining to truth.",
        reference: "Surah al-Bayyinah 98:5",
      },
    ],
  },
  {
    id: "qawaid-al-arba--first-principle",
    moduleId: "qawaid-al-arba",
    slug: "first-principle",
    title: "The First Principle",
    displayOrder: 2,
    basedOn:
      "Summarized from the explanation of Shaykh Salih al-Fawzan on al-Qawa'id al-Arba'.",
    videoYoutubeUrl: "https://www.youtube.com/watch?v=cj6kAXqWNF0",
    videoScholar: FAWZAN,
    videoTitle: "Explanation of al-Qawa'id al-Arba' (Part 2)",
    bookRecommendations: [
      { ...MATN, note: "The first principle and its proof from Surah Yunus." },
    ],
    content: `**The First Principle:** the disbelievers whom the Messenger of Allah ﷺ fought affirmed that Allah is the Creator, the Provider, and the One who disposes of every affair. That affirmation did not enter them into Islam.

The proof is the statement of Allah the Exalted:

[[proof:1]]

Look at the answer the Quran records from them. They said: "Allah." They did not deny the Creator, and they did not claim that their idols made the heavens and the earth or sent down the rain. They affirmed the lordship of Allah while directing worship to others besides Him.

Allah the Most High said:

[[proof:2]]

The scholars explain this ayah: they believe in Allah as Creator and Provider, and at the same time they commit shirk in His worship. Belief in the Creator and shirk gathered together in one person.

This principle draws the line for you. The division between tawheed and shirk was never over whether a Creator exists, for almost every nation affirms that. The division is over worship: whom do you call upon, for whom do you slaughter, in whom do you place your hope and your fear, and to whom do you prostrate?

Had belief in lordship alone been sufficient, the Quraysh would have had no need of a messenger, and the Prophet ﷺ would not have fought them while they were affirming that Allah is the Creator.

So do not be satisfied with knowing that Allah exists. Look at your worship, and see to whom you are directing it.`,
    proofs: [
      {
        id: "qawaid-al-arba--first-principle--p1",
        lessonId: "qawaid-al-arba--first-principle",
        type: "quran",
        displayOrder: 1,
        arabicText:
          "قُلْ مَن يَرْزُقُكُم مِّنَ السَّمَاءِ وَالْأَرْضِ أَمَّن يَمْلِكُ السَّمْعَ وَالْأَبْصَارَ وَمَن يُخْرِجُ الْحَيَّ مِنَ الْمَيِّتِ وَيُخْرِجُ الْمَيِّتَ مِنَ الْحَيِّ وَمَن يُدَبِّرُ الْأَمْرَ ۚ فَسَيَقُولُونَ اللَّهُ ۚ فَقُلْ أَفَلَا تَتَّقُونَ",
        englishTranslation:
          "Say: who provides for you from the heaven and the earth? Or who controls hearing and sight? And who brings the living out of the dead and the dead out of the living? And who disposes of every affair? They will say, 'Allah.' So say: will you not then fear Him?",
        reference: "Surah Yunus 10:31",
      },
      {
        id: "qawaid-al-arba--first-principle--p2",
        lessonId: "qawaid-al-arba--first-principle",
        type: "quran",
        displayOrder: 2,
        arabicText:
          "وَمَا يُؤْمِنُ أَكْثَرُهُم بِاللَّهِ إِلَّا وَهُم مُّشْرِكُونَ",
        englishTranslation:
          "And most of them do not believe in Allah except while they associate others with Him.",
        reference: "Surah Yusuf 12:106",
      },
    ],
  },
  {
    id: "qawaid-al-arba--second-principle",
    moduleId: "qawaid-al-arba",
    slug: "second-principle",
    title: "The Second Principle",
    displayOrder: 3,
    basedOn:
      "Summarized from the explanation of Shaykh Salih al-Fawzan on al-Qawa'id al-Arba'.",
    videoYoutubeUrl: "https://www.youtube.com/watch?v=vRG2lK6SMOE",
    videoScholar: FAWZAN,
    videoTitle: "Explanation of al-Qawa'id al-Arba' (Part 3)",
    bookRecommendations: [
      { ...MATN, note: "The doubt of nearness and intercession, and its answer." },
    ],
    content: `**The Second Principle:** the mushrikun said that they did not call upon their objects of worship except to draw near to Allah and to seek their intercession with Him.

They never claimed that these objects created them or provided for them. Their claim was nearness and intercession, and nothing besides it.

Allah the Most Exalted said:

[[proof:1]]

And Allah the Almighty said:

[[proof:2]]

Allah did not accept this excuse from them. He reported their claim of nearness and then ruled upon it as disbelief and lying, and He answered their claim of intercession by informing us that intercession belongs to Him alone.

Allah the Most High said:

[[proof:3]]

Intercession is real, but it is sought from the One who owns it. No one intercedes with Allah except by His permission, and only for the one with whom He is pleased. So the believer asks Allah to grant him the intercession of His Prophet ﷺ, and he does not address the Prophet ﷺ after his death with the request.

The scholars point out that this same excuse is repeated in every age. A man says: "I do not worship the righteous man; I only ask him to bring me near to Allah." This is the argument of Quraysh in different clothing, and the answer to it is the answer Allah gave them in His Book.

So carry your need to Allah directly, for He is near and answers the one who calls upon Him.`,
    proofs: [
      {
        id: "qawaid-al-arba--second-principle--p1",
        lessonId: "qawaid-al-arba--second-principle",
        type: "quran",
        displayOrder: 1,
        arabicText:
          "وَالَّذِينَ اتَّخَذُوا مِن دُونِهِ أَوْلِيَاءَ مَا نَعْبُدُهُمْ إِلَّا لِيُقَرِّبُونَا إِلَى اللَّهِ زُلْفَىٰ",
        englishTranslation:
          "And those who take protectors besides Him [say]: 'We only worship them that they may bring us nearer to Allah in position.'",
        reference: "Surah az-Zumar 39:3",
      },
      {
        id: "qawaid-al-arba--second-principle--p2",
        lessonId: "qawaid-al-arba--second-principle",
        type: "quran",
        displayOrder: 2,
        arabicText:
          "وَيَعْبُدُونَ مِن دُونِ اللَّهِ مَا لَا يَضُرُّهُمْ وَلَا يَنفَعُهُمْ وَيَقُولُونَ هَٰؤُلَاءِ شُفَعَاؤُنَا عِندَ اللَّهِ",
        englishTranslation:
          "And they worship besides Allah that which neither harms them nor benefits them, and they say: 'These are our intercessors with Allah.'",
        reference: "Surah Yunus 10:18",
      },
      {
        id: "qawaid-al-arba--second-principle--p3",
        lessonId: "qawaid-al-arba--second-principle",
        type: "quran",
        displayOrder: 3,
        arabicText: "قُل لِّلَّهِ الشَّفَاعَةُ جَمِيعًا",
        englishTranslation:
          "Say: to Allah belongs [the right to allow] intercession entirely.",
        reference: "Surah az-Zumar 39:44",
      },
    ],
  },
  {
    id: "qawaid-al-arba--third-principle",
    moduleId: "qawaid-al-arba",
    slug: "third-principle",
    title: "The Third Principle",
    displayOrder: 4,
    basedOn:
      "Summarized from the explanation of Shaykh Salih al-Fawzan on al-Qawa'id al-Arba'.",
    videoYoutubeUrl: "https://www.youtube.com/watch?v=8-rBiR_4Gj0",
    videoScholar: FAWZAN,
    videoTitle: "Explanation of al-Qawa'id al-Arba' (Part 4)",
    bookRecommendations: [
      { ...MATN, note: "The third principle: the differing objects of worship." },
    ],
    content: `**The Third Principle:** the Prophet ﷺ appeared among people whose objects of worship differed. Some worshipped the angels, some worshipped the prophets and the righteous, some worshipped trees and stones, and some worshipped the sun and the moon. He ﷺ called all of them to one thing, and he did not distinguish between them.

Allah the Most Exalted said:

[[proof:1]]

No messenger was ever sent permitting the worship of anything besides Allah. The ruling did not change when the one worshipped was noble, and Allah placed the worship of the righteous alongside the worship of stones and named both of them shirk.

The first shirk that occurred upon the earth was among the people of Nuh, and it began with veneration of righteous men after their death.

Allah the Almighty said:

[[proof:2]]

Ibn Abbas (may Allah be pleased with them) explained these names. They were righteous men among the people of Nuh. When they died, Shaytan inspired their people to set up images of them in their gathering places and to name those images after them, and they did so, and they did not worship them. Then that generation passed away and knowledge was lost, and the images were worshipped (Sahih al-Bukhari #4920).

So the danger does not come from stones alone. It comes from exaggeration concerning the righteous, and this was the door through which shirk first entered the earth.

The lesson: shirk is judged by the act that is directed to other than Allah, and not by the rank of the one it is directed to. Whether an angel, a prophet, or a righteous servant, his honour with Allah does not make the worship of him permissible.`,
    proofs: [
      {
        id: "qawaid-al-arba--third-principle--p1",
        lessonId: "qawaid-al-arba--third-principle",
        type: "quran",
        displayOrder: 1,
        arabicText:
          "وَاسْأَلْ مَنْ أَرْسَلْنَا مِن قَبْلِكَ مِن رُّسُلِنَا أَجَعَلْنَا مِن دُونِ الرَّحْمَٰنِ آلِهَةً يُعْبَدُونَ",
        englishTranslation:
          "And ask those We sent before you of Our messengers: did We ever appoint gods to be worshipped besides the Most Merciful?",
        reference: "Surah az-Zukhruf 43:45",
      },
      {
        id: "qawaid-al-arba--third-principle--p2",
        lessonId: "qawaid-al-arba--third-principle",
        type: "quran",
        displayOrder: 2,
        arabicText:
          "وَقَالُوا لَا تَذَرُنَّ آلِهَتَكُمْ وَلَا تَذَرُنَّ وَدًّا وَلَا سُوَاعًا وَلَا يَغُوثَ وَيَعُوقَ وَنَسْرًا",
        englishTranslation:
          "And they said: do not leave your gods, and do not leave Wadd, nor Suwa', nor Yaghuth and Ya'uq and Nasr.",
        reference: "Surah Nuh 71:23",
      },
    ],
  },
  {
    id: "qawaid-al-arba--fourth-principle",
    moduleId: "qawaid-al-arba",
    slug: "fourth-principle",
    title: "The Fourth Principle",
    displayOrder: 5,
    basedOn:
      "Summarized from the explanation of Shaykh Salih al-Fawzan on al-Qawa'id al-Arba'.",
    videoYoutubeUrl: "https://www.youtube.com/watch?v=9iu00A806dQ",
    videoScholar: FAWZAN,
    videoTitle: "Explanation of al-Qawa'id al-Arba' (Part 5)",
    bookRecommendations: [
      { ...MATN, note: "The closing principle and its proof from Surah al-Ankabut." },
    ],
    content: `**The Fourth Principle:** the mushrikun of our time are graver in their shirk than the mushrikun of the first age. Those of the first age committed shirk in ease and made their worship sincere for Allah in hardship, while the mushrikun of our time commit shirk in ease and in hardship alike.

Allah the Most Exalted said:

[[proof:1]]

Consider what this ayah reports of them. When the sea rose about them and every means was cut off, they abandoned their intermediaries and called upon Allah alone, sincere to Him in the religion. Their own fitrah gave testimony against them, for in that hour they knew to whom du'a truly belongs. Then when He delivered them to the land, they returned to their partners.

So the one whose sincerity appears only in hardship has produced a proof against himself, not for himself. He has admitted that he knows the One who answers, and then he turns from Him when the hardship lifts.

And Allah the Almighty said:

[[proof:2]]

Now take the four principles together.

**The first.** Believing that Allah is the Creator and the Provider does not by itself enter a person into Islam.

**The second.** The claim of nearness and intercession does not excuse worship directed to a creature.

**The third.** The rank of the one worshipped does not change the ruling.

**The fourth.** Sincerity that appears only in hardship is a proof against a person, for it shows that he knows to whom worship belongs.

With this the treatise is complete, and with it you have finished the first phase of the aqeedah curriculum: the pillars of Islam and of iman, the three fundamentals, the categories of tawheed, and the four principles concerning shirk. Review them, then take the module quiz. May Allah grant us and you beneficial knowledge and righteous action.`,
    proofs: [
      {
        id: "qawaid-al-arba--fourth-principle--p1",
        lessonId: "qawaid-al-arba--fourth-principle",
        type: "quran",
        displayOrder: 1,
        arabicText:
          "فَإِذَا رَكِبُوا فِي الْفُلْكِ دَعَوُا اللَّهَ مُخْلِصِينَ لَهُ الدِّينَ فَلَمَّا نَجَّاهُمْ إِلَى الْبَرِّ إِذَا هُمْ يُشْرِكُونَ",
        englishTranslation:
          "And when they board a ship, they call upon Allah, making their religion sincerely His; but when He delivers them to the land, at once they associate others with Him.",
        reference: "Surah al-Ankabut 29:65",
      },
      {
        id: "qawaid-al-arba--fourth-principle--p2",
        lessonId: "qawaid-al-arba--fourth-principle",
        type: "quran",
        displayOrder: 2,
        arabicText:
          "وَمَا أُمِرُوا إِلَّا لِيَعْبُدُوا اللَّهَ مُخْلِصِينَ لَهُ الدِّينَ حُنَفَاءَ",
        englishTranslation:
          "And they were not commanded except to worship Allah, making the religion sincerely His, inclining to truth.",
        reference: "Surah al-Bayyinah 98:5",
      },
    ],
  },
];
