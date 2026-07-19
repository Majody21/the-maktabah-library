import type { Fatwa } from "./types";

const f = (
  id: string,
  category: string,
  topic: string,
  question: string,
  answerText: string,
  scholar: string,
  sourceReference: string,
  sourceUrl: string | null = null,
  translationCredit: string | null = null,
  translationUrl: string | null = null
): Fatwa => ({
  id,
  category,
  topic,
  question,
  answerText,
  scholar,
  sourceReference,
  sourceUrl,
  translationCredit,
  translationUrl,
});

/** binbaz.org.sa fatwa permalink (the Arabic slug, percent-encoded). */
const binbaz = (id: number, slug: string) =>
  `https://binbaz.org.sa/fatwas/${id}/${encodeURIComponent(slug)}`;

const OUR_TRANSLATION =
  "Translated in full for The Maktabah Library from the Arabic original";

const PUBLISHED_EN = "English translation published by IslamQA";

/**
 * Every entry is a published fatwa reproduced in full — the questioner's words
 * and the scholar's entire answer, nothing summarized or abridged. Each links
 * to the fatwa on the scholar's own official site so the Arabic can be checked
 * against the translation.
 */
export const fatawa: Fatwa[] = [
  f(
    "f-dua-to-dead",
    "Tawheed",
    "Supplicating to the dead",
    "Some people attach themselves to the righteous while they are dead. You see such a person going to these dead people, asking them to fulfil needs and relieve distresses, even though they have died, and he claims that they are righteous. What is the ruling on what these people do?",
    `What some people do, of going to the graves of the righteous, or to the grave of the Prophet ﷺ, supplicating and seeking rescue — this is major shirk. This is the shirk of the mushrikun; this is the shirk of the jahiliyyah, we seek refuge in Allah. The people of the jahiliyyah used to ask from the dead. They used to ask al-Lat and draw near to him, and he was a righteous man; they claimed that he used to knead barley porridge for the pilgrims. When he died they devoted themselves at his grave and began asking him besides Allah and seeking rescue from him. For this reason the Prophet ﷺ said: "Allah cursed the Jews and the Christians; they took the graves of their prophets as places of prostration." And he ﷺ said: "Indeed, those before you used to take the graves of their prophets and their righteous ones as places of prostration. Do not take the graves as places of prostration; I forbid you from that."

So it is obligatory upon every accountable person that he fear Allah, that he be watchful of Allah, and that he single Allah out with worship: he supplicates to none but Allah, seeks rescue from none but Him, and seeks protection from none but Him. He, glorified be He, is the One who is supplicated to and hoped in, Mighty and Exalted. Allah the Exalted said: "And the places of prostration are for Allah, so do not invoke anyone along with Allah" [al-Jinn 18]. He, glorified be He, said: "Call upon Me; I will respond to you" [Ghafir 60]. Allah the Exalted said: "And whoever invokes besides Allah another deity for which he has no proof — then his account is only with his Lord. Indeed, the disbelievers will not succeed" [al-Mu'minun 117]. Allah the Exalted said: "And do not invoke besides Allah that which neither benefits you nor harms you; for if you did, then indeed you would be among the wrongdoers" [Yunus 106] — meaning the mushrikun.

So whoever heads for the people of the graves, even if they are righteous, and asks them for rescue, or for intercession, or for the forgiveness of sins, or for safety from the evil of enemies — all of this is shirk with Allah, major shirk. And likewise supplicating to the jinn and seeking rescue from the jinn, or from idols and statues: all of this is major shirk, we ask Allah for well-being. So it is obligatory to beware of that. This is the religion of the mushrikun: supplicating to the dead and seeking rescue from the dead, and from idols, and from the jinn, and from the stars. This is the shirk of the mushrikun; this is their false religion. We ask Allah for well-being.`,
    "Shaykh Abd al-Aziz ibn Baz",
    "Nur 'ala ad-Darb — fatwa no. 14463",
    binbaz(14463, "حكم-دعاء-الاموات"),
    OUR_TRANSLATION
  ),
  f(
    "f-amulets",
    "Tawheed",
    "Hanging amulets and charms",
    "There are people who hang beads on their eyes, their necks and their ears because of illnesses, as he says. Is this shirk that expels one from the religion, or what?",
    `This is minor shirk, and it is from the hanging of amulets and charms — whether they be beads, or papers, or cowrie shells, or other than that. The Prophet ﷺ says: "Whoever attaches an amulet, may Allah not complete [the matter] for him; and whoever attaches a cowrie shell, may Allah not grant him ease." And in the other wording: "Whoever attaches an amulet has committed shirk."

The amulets (tama'im) are the charms which some people hang, and they are also called al-hujub — whether they are of beads, or of cowrie shells, or of other than that, or of bones, or of papers on which verses or ahadith are written.

The correct position is that even what is written of verses and ahadith, it is not permissible to hang it. Rather, the treatment is by reciting over the sick person — reciting over him and supplicating for him. As for hanging upon him papers, or threads, or bones, or beads, or other than this for the sake of a cure, this is not permissible, and it is minor shirk. It does not expel one from the religion, but it negates the completeness of the obligatory tawheed. For example, one says: "What Allah wills and what so-and-so wills," "Were it not for Allah and so-and-so" — this is minor shirk. Like swearing by other than Allah: by the Prophet, or by trust — minor shirk. It is obligatory to beware of it. And it may be major shirk, if the one doing it believes that these things benefit by themselves apart from Allah, and that they act independently in bringing benefit apart from Allah — this is major shirk. We ask Allah for well-being.`,
    "Shaykh Abd al-Aziz ibn Baz",
    "Nur 'ala ad-Darb — fatwa no. 10707",
    binbaz(10707, "حكم-تعليق-التماىم"),
    OUR_TRANSLATION
  ),
  f(
    "f-fortune-tellers",
    "Tawheed",
    "Going to soothsayers and diviners",
    "I am a woman who has been afflicted by the evil eye for six years, and no treatment has benefited me. Now a woman has told me of a man who has some treatment, and I am being treated by him without my husband's knowledge. What is your view concerning one who uses recitation, and in it uses the consulting of a book, this book containing the gathering of the jinn and their dispersal — so where is this illness from? Is it from them or from other than them?",
    `This treatment with the likes of this man is not permissible. This one is called a diviner ('arraf) and is called a soothsayer (kahin). It is not permissible to come to him, nor to ask him, nor to be treated by him. It is not permissible for you to do this even if your husband permitted you — so how when he does not know? This is never permissible for you; even if the husband told you [to do it], obedience to him in what Allah has forbidden would not be permissible for you.

The Prophet ﷺ said: "Whoever comes to a diviner and asks him about something, no prayer will be accepted from him for forty nights" — Muslim reported it in the Sahih. And he, upon him be prayers and peace, said: "Whoever comes to a soothsayer and believes him in what he says has disbelieved in what was revealed to Muhammad, upon him be prayers and peace." And when he was asked about the diviners and the soothsayers, he said: "Do not come to them."

So what is obligatory upon you is repentance to Allah and not coming to him — because by this action he is a soothsayer who seeks the aid of the jinn and worships them besides Allah, for they do not benefit him nor obey him except when he draws near to them by slaughtering for them, or vowing to them, or supplicating to them and seeking rescue from them, or the like of that; and this is major shirk. So it is not for you to be treated by this one or his like. You must repent to Allah, and ask Him, Mighty and Exalted, to cure you of what has afflicted you. There is no objection to treatment with the known physicians, and with the good among people who recite over you and blow over you with the Quranic verses and the prophetic supplications. If a righteous woman possessing knowledge is available to recite over you, that will benefit, if Allah wills. If she is not available, then a righteous man may recite over you and blow over you — but he must not be alone with you; rather he recites over you while your husband, or your mother, or your sister, or the like of that is present, for seclusion is not permissible. It is not permissible for a man to be alone with a woman who is not a mahram for him. Or he may recite for you into water which you then drink or wash with.

All of this is fine, and all praise is due to Allah. And if you know of someone accused of [striking with] the eye, you contact him and ask him to wash for you: he washes his face and his hands and rinses his mouth in the water, then you wash with it, and it benefits by Allah's permission. He, upon him be prayers and peace, said: "The eye is real, and if you are asked to wash, then wash" — meaning, if it is said to the one accused of the glance of the eye, "Wash your face and your hands for us," then he should not refuse; he washes his extremities for them, and that benefits by Allah's permission when it is poured over the one struck by the eye, as the Prophet, upon him be prayers and peace, commanded with that. As for coming to the soothsayers, the astrologers, and whoever employs the jinn — that is never permissible, neither for the eye nor for any other illness.`,
    "Shaykh Abd al-Aziz ibn Baz",
    "Nur 'ala ad-Darb — fatwa no. 8586",
    binbaz(8586, "حكم-الذهاب-الى-الكهنة-والعرافين"),
    OUR_TRANSLATION
  ),
  f(
    "f-mawlid-bidah-hasanah",
    "Bid'ah",
    "The mawlid, and whether there is a 'good bid'ah'",
    "We ask you about the birthday of the greatest Prophet ﷺ — is it an innovation? I have heard in some lands, and from some scholars, that they say it is a good innovation (bid'ah hasanah), and Allah knows best.",
    `In the name of Allah, the Most Merciful, the Bestower of mercy. All praise is due to Allah, Lord of the worlds, and prayers and peace be upon His slave and Messenger, His close friend and the one entrusted with His revelation, our Prophet and our Imam Muhammad ibn Abdillah, and upon his family and his Companions, and whoever is guided by his guidance. To proceed:

Celebrating the mawlids only came about in the later centuries, after the best generations — after the first, the second and the third centuries. It is among the innovations that some people introduced, deeming it good and supposing it to be something fine. The correct and true position, which the verifiers among the people of knowledge hold, is that it is an innovation. The celebrations of the mawlids are all innovation, and among them is celebrating the birthday of the Prophet. And why? Because the Messenger ﷺ did not do it, nor his Companions, nor his rightly-guided successors, nor the best generations — none of them did this thing. The good lies in following them, not in what people introduced after them. It is authentically established from him, upon him be prayers and peace, that he said: "Beware of newly invented matters." And he, upon him be prayers and peace, said: "The worst of affairs are the newly invented ones, and every innovation is misguidance." And he, upon him be prayers and peace, said: "Whoever introduces into this affair of ours what is not from it, it is rejected"; "Whoever performs a deed that is not in accordance with our affair, it is rejected" — meaning: thrown back upon him.

So the Prophet ﷺ clarified the matter and made plain that innovations in the religion are detestable, and that it is not for anyone to introduce into the religion what Allah has not permitted. Allah has censured whoever does this, in His statement, glorified be He: "Or do they have partners who have legislated for them of the religion that which Allah has not permitted?" [ash-Shura 21]. The celebration is a newly invented matter which Allah did not permit, nor did His Messenger, upon him be prayers and peace. The Companions are the best of people after the prophets, and the most beloved of people to the Prophet ﷺ, and the quickest of people to every good — and they did not do this: not Abu Bakr, nor Umar, nor Uthman, nor Ali, nor the rest of the ten, nor the rest of the Companions. And likewise the Tabi'un and the followers of the Tabi'un did not do this. It only came about from some of the Fatimid Shi'ah in Egypt in the fourth century, as some of the historians have mentioned. Then it came about in the sixth century, at its end, or at the beginning of the seventh, from the king of Irbil, who supposed that this was something good and so did it. The truth is that it is an innovation, because it is an act of worship which Allah did not legislate. The Messenger ﷺ conveyed the message clearly, and did not conceal anything of what Allah legislated; rather he conveyed everything Allah legislated and commanded. And Allah, glorified be He, said: "This day I have perfected for you your religion" [al-Ma'idah 3].

So Allah has perfected the religion and completed it, and celebrating the mawlids is not part of that religion which Allah perfected. By this it is known that it is a detestable innovation, not a good one. There is no good innovation in the religion; rather all innovations are misguidance, all of them detestable. And the Prophet said: "Every innovation is misguidance." So it is not permissible for any of the Muslims to say that among the innovations there is something good, while the Messenger ﷺ says: "Every innovation is misguidance" — because this is contradicting and opposing the Messenger ﷺ. It is authentically established from him that he said: "Every innovation is misguidance," so it is not permissible for us to say other than his statement, upon him be prayers and peace.

As for what some people suppose to be an innovation while it is from what the Shari'ah brought, it is not an innovation — such as the writing of the mus-hafs, and such as the tarawih. These are not innovations; all of these are legislated, and calling them innovation has no basis. As for what is narrated from Umar, that he said concerning the tarawih, "What an excellent innovation," what is intended by this is from the angle of the language, not from the angle of the religion. Moreover, the statement of Umar does not contradict what the Messenger ﷺ said, nor does it oppose it; the statement of the Messenger takes precedence, upon him be prayers and peace, because he said: "Every innovation is misguidance," and he said: "Beware of newly invented matters," and he ﷺ said in the Friday sermon: "To proceed: the best of speech is the Book of Allah, and the best guidance is the guidance of Muhammad ﷺ, and the worst of affairs are the newly invented ones, and every innovation is misguidance." This is his ruling, upon him be prayers and peace — Muslim reported it in the Sahih.

So it is not permissible for a Muslim to oppose what Allah has legislated, nor to contend with what the Prophet of Allah brought, upon him be prayers and peace. Rather it is obligatory upon him to submit to the legislation of Allah, and to refrain from what Allah has forbidden of innovations and acts of disobedience. May Allah grant everyone guidance.`,
    "Shaykh Abd al-Aziz ibn Baz",
    "Nur 'ala ad-Darb — fatwa no. 13480",
    binbaz(13480, "هل-الاحتفال-بالمولد-النبوي-بدعة-حسنة"),
    OUR_TRANSLATION
  ),
  f(
    "f-fasting-traveler",
    "Sawm",
    "Fasting while travelling",
    "Fasting now — for one who has gone on a journey?",
    `The better course while travelling is to break the fast; and if he fasts there is no harm, so long as there is no hardship upon him. If he fasts while travelling, in Ramadan or other than it, there is no harm. When he leaves the town he fasts; when he leaves the town he breaks the fast. And if he continues fasting while travelling there is no blame. The Prophet ﷺ fasted and broke the fast, and the Companions fasted and broke the fast.

[Questioner:] At the airport, does the breaking of the fast begin?

The Shaykh: The breaking of the fast is when he leaves the town — when he leaves the built-up area of the town, in any town.

[Questioner:] Is the recommendation upon the original ruling?

The Shaykh: Breaking the fast is better while travelling, without restriction; and when the heat is severe it is more emphatically so — meaning: "It is not righteousness to fast while travelling."

[Questioner:] He does not break the fast on the white days, being constant upon them while resident?

The Shaykh: If he fasts them, may Allah reward him with good. If he is able, that is fine; several ahadith have come concerning them — it is not a single hadith.`,
    "Shaykh Abd al-Aziz ibn Baz",
    "Nur 'ala ad-Darb — fatwa no. 22828",
    binbaz(22828, "هل-الافضل-في-السفر-الفطر-ام-الصوم"),
    OUR_TRANSLATION
  ),
  f(
    "f-fasting-forgetting",
    "Sawm",
    "Eating forgetfully while fasting",
    "It is known that if the fasting person eats forgetfully, there is nothing upon him. Does this apply only to the obligatory fast, or to fasting in general?",
    `To fasting in general — the obligatory and the voluntary, Ramadan and other than it. If he eats forgetfully, and drinks forgetfully, his fast is sound, and all praise is due to Allah.`,
    "Shaykh Abd al-Aziz ibn Baz",
    "Nur 'ala ad-Darb — fatwa no. 15525",
    binbaz(15525, "حكم-صوم-من-اكل-ناسيا"),
    OUR_TRANSLATION
  ),
  f(
    "f-minor-shirk-forgiveness",
    "Tawheed",
    "Whether minor shirk is forgiven",
    "Do the words of Allah, \"Verily, Allah forgives not that partners should be set up with Him (in worship)\" [al-Nisa' 4:48], include minor shirk?",
    `The scholars differed concerning that. Some of them said that it includes all kinds of shirk, even minor shirk such as swearing by something other than Allah; Allah will not forgive him. But with regard to major sins, such as drinking alcohol and zina, they are subject to the will of Allah; if Allah wills He will forgive them and if He wills He will punish them.

Shaykh al-Islam [Ibn Taymiyah] said different things. On one occasion he said: Allah does not forgive shirk even if it is minor. And on another occasion he said: That which Allah does not forgive is major shirk.

Whatever the case, we must beware of shirk altogether, because the general meaning may include minor shirk too, because He says "Verily, Allah forgives not that partners should be set up with Him" meaning any partner, therefore it suggests any kind of shirk.`,
    "Shaykh Muhammad ibn Salih al-Uthaymeen",
    "Majmoo' Fataawa al-Shaykh Ibn 'Uthaymeen, 2/203",
    null,
    PUBLISHED_EN,
    "https://islamqa.info/en/answers/91763"
  ),
  f(
    "f-congregation-travelling",
    "Salah",
    "Praying in congregation while travelling",
    "The Shaykh was asked about a group of travellers who were going to attend a conference: should they pray in the mosques or not?",
    `The basic principle is that you should attend prayers in congregation in the mosque with the people if you are in a place where you can hear the adhaan without a loudspeaker because you are near the mosque. If you are in a far place where you cannot hear the call to prayer even with a loudspeaker, then pray in congregation where you are. Similarly if going to the mosque will detract from the purpose for which you came then pray in congregation where you are.`,
    "Shaykh Muhammad ibn Salih al-Uthaymeen",
    "Fatawa al-Shaykh Ibn 'Uthaymeen, 15/381",
    null,
    PUBLISHED_EN,
    "https://islamqa.info/en/answers/21498"
  ),
  f(
    "f-dhikr-in-unison",
    "Bid'ah",
    "Du'a and dhikr recited in unison",
    "The Standing Committee was asked about du'a and dhikr recited in unison.",
    `The basic principle concerning dhikr and acts of worship is that there is no room for adding or subtracting anything. Allah should only be worshipped in the ways that He has prescribed; this applies whether it is something that can be done at any time or something that is limited to a specific time and how it is to be done and how many times it is to be done. With regard to dhikrs and du'as that Allah has prescribed and all kinds of worship that are not limited with regard to time and numbers, location or a particular way in which they are to be done, it is not permissible for us to adhere to a particular way, time or number; rather we are to do these acts of worship without restrictions as it was prescribed.

In matters where it is proven in the words or deeds of the Prophet (peace and blessings of Allah be upon him) that an action is to be done at a certain time or a certain number of times or in a certain place or in a certain manner, then we should worship Allah in accordance with what has been prescribed. It has not been proven from the words or deeds or approval of the Prophet (peace and blessings of Allah be upon him) that he recited du'a in unison with others following the prayers, or after reading Quran, or following each lesson, whether that took the form of the imaam reciting du'a and the congregation saying Ameen to his du'a, or whether they all recited du'a together in unison. That was not known at the time of the Rightly-Guided Khaleefahs or any of the Sahaabah (may Allah be pleased with them). Whoever adheres to the practice of reciting du'a in unison following the prayers or after reading Quran or after every lesson has innovated something and introduced into the religion something which is not a part of it. It was narrated that the Prophet (peace and blessings of Allah be upon him) said: "Whoever innovates something in this matter of ours (i.e. Islam) that is not part of it will have it rejected." And he said: "Whoever does something that is not in accordance with this matter of ours (Islam) will have it rejected."

If it were prescribed to adhere to a certain way of doing it, the Prophet (peace and blessings of Allah be upon him) and his successors (khulafa') after him would have adhered to that. We have stated above that no such thing was proven from him or from his companions (may Allah be pleased with them). All goodness is to be found in following the guidance of the Prophet (peace and blessings of Allah be upon him) and the guidance of the Rightly-Guided Khulafa' (may Allah be pleased with them); all evil is to be found in going against their guidance and following the innovated matters against which the Prophet (peace and blessings of Allah be upon him) warned us by saying, "Beware of newly-innovated matters, for every innovation is misguidance." May Allah bless our Prophet Muhammad and his family and companions, and grant them peace.`,
    "Al-Lajnah ad-Da'imah (The Permanent Committee)",
    "Fatawa Islamiyyah, 4/178",
    null,
    PUBLISHED_EN,
    "https://islamqa.info/en/answers/10491"
  ),
  f(
    "f-riya-naseehah",
    "General",
    "Fearing riya when advising others",
    "A woman is asking: I am so afraid of showing off that I cannot advise some people or tell them not to do certain things such as backbiting, gossiping, and so on. I am afraid that that will be showing off on my part, and I am afraid that people will think that I am showing off. So I do not give them any advice (naseehah). I tell myself: They are educated people, they do not need any advice. What do you suggest?",
    `This is one of the traps of the Shaytaan, by means of which he prevents people from calling others to Allaah and from enjoining what is good and forbidding what is evil. One of the ways in which he does this is to make them think that this is showing off, or that people will think that it is showing off. You should not pay any attention to that, rather what you should do is go ahead and advise your sisters and brothers in faith, if you see them falling short in any duty or committing haraam (impermissible) actions such as gossiping, setting people against one another, or not covering in front of men. Do not be afraid of showing off, rather do it solely for the sake of Allaah, be sincere in your intention and receive glad tiding of goodness. Ignore the tricks and whispers of the Shaytaan. Allaah knows what is in your heart, your intention and your sincerity towards Him and your sincerity towards His slaves. Undoubtedly showing off is shirk and is not permissible, but it is not permissible for a believing man or woman to refrain from doing something that Allaah has enjoined, such as calling people to Him or enjoining what is good and forbidding what is evil, for fear of showing off, so they should beware of that. They should do what they are obliged to do among men and women, and men and women are equal in this regard. Allaah has stated that in His Holy Book where He says (interpretation of the meaning): "The believers, men and women, are Awliyaa' (helpers, supporters, friends, protectors) of one another; they enjoin (on the people) Al-Ma'roof, and forbid (people) from Al-Munkar; they perform As-Salaah, and give the Zakaah, and obey Allaah and His Messenger. Allaah will have His Mercy on them. Surely, Allaah is All-Mighty, All-Wise" [al-Tawbah 9:71].`,
    "Shaykh Abd al-Aziz ibn Baz",
    "Fataawa Ibn Baaz, 6/403",
    null,
    PUBLISHED_EN,
    "https://islamqa.info/en/answers/67617"
  ),
];
