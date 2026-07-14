import type { Fatwa } from "./types";

const f = (
  id: string,
  category: string,
  topic: string,
  question: string,
  answerText: string,
  scholar: string,
  sourceReference: string
): Fatwa => ({ id, category, topic, question, answerText, scholar, sourceReference });

/**
 * Curated summaries of well-known published verdicts. Answers are faithful
 * paraphrases of the scholars' documented positions, with the source cited
 * for anyone who wants the full original wording.
 */
export const fatawa: Fatwa[] = [
  f(
    "f-dua-to-dead",
    "Tawheed",
    "Calling upon the dead",
    "Some people call upon deceased righteous men at their graves, asking for cures or children. What is the ruling?",
    "Supplicating to the dead — asking them for benefit, cure or rescue — is major shirk, because du'a is worship and worship belongs to Allah alone. The deceased cannot answer anyone; Allah says, 'If you call upon them, they do not hear your call' (Fatir 35:14). Whoever needs something asks Allah directly, for He is near and answers the caller. The righteous dead are honoured by following their way, not by supplicating to them.",
    "Shaykh Abd al-Aziz ibn Baz",
    "Summarized from Majmu' Fatawa wa Maqalat Ibn Baz"
  ),
  f(
    "f-tawassul-status",
    "Tawheed",
    "Seeking intercession of the Prophet ﷺ today",
    "Is it permissible to say 'O Messenger of Allah, intercede for me'?",
    "Addressing the Prophet ﷺ after his death with requests is not permissible; asking intercession from him now is asking the dead, which the Companions never did. Rather one says: 'O Allah, grant Your Prophet the station of intercession and grant me his intercession.' The legislated tawassul is through Allah's names, one's own righteous deeds, or the du'a of a living righteous person — as Umar sought rain through the du'a of the living al-Abbas, not at the grave of the Prophet ﷺ.",
    "Al-Lajnah ad-Da'imah (Permanent Committee)",
    "Summarized from Fatawa al-Lajnah ad-Da'imah, section on aqeedah"
  ),
  f(
    "f-amulets",
    "Tawheed",
    "Wearing amulets and charms",
    "What is the ruling on wearing an amulet (ta'wiz) containing writings for protection?",
    "Hanging amulets is forbidden and is a means to shirk; the Prophet ﷺ said, 'Whoever hangs an amulet has committed shirk.' If the amulet contains other than the Quran — symbols, unknown names, numbers — it is forbidden by agreement, and attaching one's heart to it is shirk. As for amulets made purely of Quranic verses, the correct of the two scholarly positions is that they are also to be prevented, closing the door to shirk and protecting the Quran from disrespect.",
    "Shaykh Abd al-Aziz ibn Baz",
    "Summarized from Majmu' Fatawa Ibn Baz"
  ),
  f(
    "f-swearing-by-other",
    "Tawheed",
    "Swearing by other than Allah",
    "People habitually swear by the Prophet ﷺ, by their parents, or by honour. What is the ruling?",
    "Swearing by other than Allah is not permissible; the Prophet ﷺ said, 'Whoever swears, let him swear by Allah or remain silent,' and he counted swearing by other than Allah among shirk and disobedience. It is minor shirk when said out of habit, and can reach major shirk if the swearer venerates the one sworn by as Allah is venerated. The tongue must be retrained: one swears by Allah alone or not at all.",
    "Shaykh Muhammad ibn Salih al-Uthaymeen",
    "Summarized from Fatawa Arkan al-Islam"
  ),
  f(
    "f-magic-fortune",
    "Tawheed",
    "Going to fortune-tellers",
    "Is it permissible to visit fortune-tellers or 'spiritual healers' who claim knowledge of the unseen?",
    "Visiting fortune-tellers is forbidden: whoever merely goes to one and asks him, his prayer is not accepted for forty days, and whoever believes what he says has disbelieved in what was revealed to Muhammad ﷺ, as the authentic hadith states. Knowledge of the unseen belongs to Allah alone. Healing is sought through the Quran, the legislated supplications, and permissible medicine — never through those who traffic with the jinn.",
    "Shaykh Salih al-Fawzan",
    "Summarized from al-Muntaqa min Fatawa al-Fawzan"
  ),
  f(
    "f-riya-small-deeds",
    "Tawheed",
    "Fearing riya (showing off)",
    "I sometimes abandon good deeds fearing I am doing them to be seen. What should I do?",
    "Abandoning deeds for fear of riya is itself from Shaytan's deception — he first corrupts the deed with showing off, and if he fails, he prevents the deed altogether. The believer performs the deed and fights the whisper, renewing sincerity within it. Riya is treated by remembering that people control neither benefit nor harm, and by concealing voluntary deeds where possible; it is not treated by handing the deed to Shaytan.",
    "Shaykh Muhammad ibn Salih al-Uthaymeen",
    "Summarized from Majmu' Fatawa wa Rasa'il al-Uthaymeen"
  ),
  f(
    "f-leaving-salah",
    "Salah",
    "One who does not pray",
    "What is the state of a person who believes in Islam but never prays?",
    "The prayer is the pillar of the religion after the two testimonies, and abandoning it is the gravest of matters: the Prophet ﷺ said, 'Between a man and shirk and disbelief stands the abandonment of the prayer' (Muslim). The scholars differed whether the lazy abandoner leaves Islam, but they did not differ that he stands on the edge of destruction and must repent immediately and guard the five prayers. There is no share in Islam's rest for the one who has no share in the prayer.",
    "Shaykh Abd al-Aziz ibn Baz",
    "Summarized from Majmu' Fatawa Ibn Baz, section on salah"
  ),
  f(
    "f-congregation",
    "Salah",
    "Praying in congregation",
    "Is praying in the mosque obligatory for men, or is praying at home sufficient?",
    "Congregational prayer in the mosque is obligatory upon men who hear the call, based on the Prophet's ﷺ statement to the blind man who asked for a concession: 'Do you hear the call to prayer? Then respond.' He ﷺ even considered burning the houses of men who stay away from it. A man who prays at home without excuse — illness or genuine fear — is sinful though his prayer counts. Women's prayer at home is better for them, and they are not prevented from the mosques.",
    "Shaykh Muhammad ibn Salih al-Uthaymeen",
    "Summarized from Fatawa Arkan al-Islam"
  ),
  f(
    "f-missed-prayers-sleep",
    "Salah",
    "Missing Fajr due to sleep",
    "A person regularly sleeps through Fajr and prays it after sunrise. What must he do?",
    "Whoever sleeps through a prayer or forgets it prays it when he wakes or remembers — 'there is no expiation for it except that,' as the Prophet ﷺ said. But this concession is for the one overcome despite taking the means; the one who habitually neglects the means — staying up late without need, ignoring alarms, having no one wake him — is negligent and sinful. Sleep early, use every means of waking, and let a man's household wake one another for the prayer.",
    "Shaykh Abd al-Aziz ibn Baz",
    "Summarized from Fatawa Nur 'ala ad-Darb"
  ),
  f(
    "f-khushu",
    "Salah",
    "Weak concentration in prayer",
    "My mind wanders constantly in prayer. Does this invalidate it, and how do I treat it?",
    "Wandering thoughts do not invalidate the prayer, but they strip its reward in proportion to their extent. The treatment: perform wudu well, come early, seek refuge in Allah from Shaytan when whispering intensifies, understand what you recite, and pray as the Prophet ﷺ instructed — 'pray the prayer of one bidding farewell.' Khushu' is the heart's presence before its Lord; it grows with practice like everything the soul is trained upon.",
    "Shaykh Muhammad ibn Salih al-Uthaymeen",
    "Summarized from Majmu' Fatawa wa Rasa'il al-Uthaymeen"
  ),
  f(
    "f-jumuah-obligation",
    "Salah",
    "Who must attend Jumu'ah",
    "Is the Friday prayer obligatory on every Muslim, including travelers and women?",
    "Jumu'ah is an individual obligation upon every free, adult, resident male with no valid excuse; Allah commands, 'When the call is made for prayer on Friday, hasten to the remembrance of Allah' (al-Jumu'ah 62:9). It is not obligatory upon women, travelers, or the ill — though if they attend, it suffices them in place of Dhuhr. Whoever abandons three Jumu'ahs out of negligence, Allah places a seal over his heart, as the authentic warning states.",
    "Al-Lajnah ad-Da'imah (Permanent Committee)",
    "Summarized from Fatawa al-Lajnah ad-Da'imah, section on salah"
  ),
  f(
    "f-mawlid",
    "Bid'ah",
    "Celebrating the Prophet's ﷺ birthday",
    "Is celebrating the mawlid an act of love for the Prophet ﷺ?",
    "Celebrating the mawlid was not done by the Prophet ﷺ, his Companions, or the three praised generations — and all goodness is in following them. It entered centuries later, and the Prophet ﷺ said, 'Whoever introduces into this affair of ours what is not from it, it is rejected.' True love of him ﷺ is obeying his Sunnah, sending salah upon him, and following his guidance — not an annual gathering he never legislated. Had it been good, the Companions — who loved him most — would have preceded us to it.",
    "Shaykh Abd al-Aziz ibn Baz",
    "Summarized from Majmu' Fatawa Ibn Baz, section on innovations"
  ),
  f(
    "f-bidah-hasanah",
    "Bid'ah",
    "Is there 'good bid'ah'?",
    "Some say there is bid'ah hasanah (good innovation) in religion, citing Umar's statement about tarawih. Is this correct?",
    "The Prophet ﷺ said, 'Every bid'ah is misguidance' — a universal statement from the one given the most comprehensive speech; it admits no exceptions in matters of worship. Umar's words 'what a good bid'ah' referred to the linguistic sense: reviving a congregational prayer the Prophet ﷺ himself had led and left only fearing it would be made obligatory — a revived Sunnah, not an invention. Whoever legislates a new act of worship implies the religion was incomplete, and Allah has said, 'This day I have perfected for you your religion.'",
    "Shaykh Muhammad ibn Salih al-Uthaymeen",
    "Summarized from Majmu' Fatawa wa Rasa'il al-Uthaymeen"
  ),
  f(
    "f-grave-visits",
    "Bid'ah",
    "Visiting graves — Sunnah and excess",
    "What is the correct manner of visiting graves, and what practices at graves are forbidden?",
    "Visiting graves is Sunnah for men — the Prophet ﷺ said, 'Visit the graves, for they remind you of the Hereafter' — with the legislated greeting and du'a *for* the dead. Forbidden at graves: supplicating *to* the buried, seeking blessing from the soil, circumambulating them, building structures over them, and taking them as places of prayer — all means to shirk that the Prophet ﷺ blocked, cursing those who take graves as masajid. Visit to remember death; leave having supplicated for them, not to them.",
    "Shaykh Salih al-Fawzan",
    "Summarized from al-Muntaqa min Fatawa al-Fawzan"
  ),
  f(
    "f-dhikr-beads-counts",
    "Bid'ah",
    "Invented dhikr formulas",
    "Groups gather to chant Allah's name in unison with swaying movements, claiming it polishes the heart. What is the ruling?",
    "Remembrance of Allah is among the greatest worship — but worship is built on following, not invention. Collective chanting in unison, dancing or swaying, and dhikr formulas with invented counts and manners were not practiced by the Prophet ﷺ or his Companions; they are innovations regardless of the sincerity behind them. The legislated dhikr — with its authentic wordings and times — suffices, and in it is all the heart's polish; 'verily in the remembrance of Allah do hearts find rest' (ar-Ra'd 13:28).",
    "Al-Lajnah ad-Da'imah (Permanent Committee)",
    "Summarized from Fatawa al-Lajnah ad-Da'imah, section on aqeedah and dhikr"
  ),
  f(
    "f-fasting-traveler",
    "Sawm",
    "Fasting while traveling",
    "Is it better for a traveler in Ramadan to fast or to break the fast?",
    "Both are permissible by the text of the Quran — 'whoever is ill or on a journey, then an equal number of other days' (al-Baqarah 2:185). If fasting brings no hardship, fasting is fine and discharges the duty sooner; if travel is hard, breaking the fast is better, for 'Allah loves that His concessions be taken.' The Prophet ﷺ did both in travel. What is not permissible is fasting that harms — when he ﷺ saw a man shaded and collapsing, he said: 'It is not righteousness to fast in travel' in such a state.",
    "Shaykh Abd al-Aziz ibn Baz",
    "Summarized from Majmu' Fatawa Ibn Baz, section on siyam"
  ),
  f(
    "f-fasting-forgetting",
    "Sawm",
    "Eating forgetfully while fasting",
    "Someone ate and drank forgetting he was fasting. Is his fast broken?",
    "His fast is sound and he completes his day; the Prophet ﷺ said, 'Whoever forgets while fasting and eats or drinks, let him complete his fast, for it is only Allah who fed him and gave him drink.' Forgetfulness lifts blame in this ummah by Allah's mercy. But the moment he remembers, he must stop immediately, and whoever sees a fasting person eating forgetfully should remind him.",
    "Shaykh Muhammad ibn Salih al-Uthaymeen",
    "Summarized from Fatawa Arkan al-Islam"
  ),
  f(
    "f-zakah-salary",
    "Zakah",
    "Zakah on monthly salaries",
    "How does an employee with a monthly salary calculate zakah on his savings?",
    "Zakah is due on savings that reach the nisab and remain in one's possession for a full lunar year, at 2.5%. For salaries saved month by month, the easiest sound method: fix one zakah date each year — when your first savings reached nisab — and on that date pay 2.5% of everything held, even if some of it has not individually completed a year. Paying zakah early for later months is permissible and simpler, and the excess counts as hastened zakah or charity.",
    "Shaykh Muhammad ibn Salih al-Uthaymeen",
    "Summarized from Fatawa Arkan al-Islam, section on zakah"
  ),
  f(
    "f-zakah-recipients-family",
    "Zakah",
    "Giving zakah to relatives",
    "May I give my zakah to my poor brother or other relatives?",
    "Giving zakah to poor relatives whom you are not already obligated to maintain — such as brothers, sisters, uncles and aunts — is not only valid but doubly rewarded: the Prophet ﷺ said charity to kin is 'charity and upholding of ties.' It may not be given to those whose maintenance is your duty, like parents, grandparents, children and wife, because it would return a benefit to yourself. It also may not be given to the rich or the strong able earner.",
    "Al-Lajnah ad-Da'imah (Permanent Committee)",
    "Summarized from Fatawa al-Lajnah ad-Da'imah, section on zakah"
  ),
  f(
    "f-quran-without-wudu",
    "General",
    "Touching the mushaf without wudu",
    "May a person read the Quran without wudu, from memory or from the mushaf?",
    "Reciting from memory without wudu is permissible by agreement — the Prophet ﷺ would remember Allah in all his states, and only janabah prevented him from recitation. As for touching the mushaf itself, the majority of scholars hold that purification is required, based on 'none touch it except the purified' and the letter of the Prophet ﷺ to Amr ibn Hazm. Reading from a phone screen without wudu is permissible, since the device is not a mushaf.",
    "Shaykh Abd al-Aziz ibn Baz",
    "Summarized from Majmu' Fatawa Ibn Baz"
  ),
  f(
    "f-seeking-knowledge-priority",
    "General",
    "Where should a beginner start seeking knowledge?",
    "There are so many books and lectures. In what order should a beginner student of knowledge study?",
    "Begin with what is obligatory upon you personally: sound aqeedah, purification and prayer. Take short foundational texts with a qualified teacher — Thalathat al-Usul, al-Qawa'id al-Arba', then Kitab at-Tawheed in creed; the short fiqh texts in worship — and do not race to big books before firming the foundations. Knowledge is taken gradually: 'whoever seizes knowledge all at once loses it all at once,' as the Salaf said. Consistency upon a little is beloved to Allah and builds what cramming never will.",
    "Shaykh Salih al-Fawzan",
    "Summarized from the Shaykh's advice to beginners in seeking knowledge"
  ),
  f(
    "f-dreams",
    "General",
    "Acting upon dreams",
    "I saw a dream instructing me to do a specific act of worship. Should I follow it?",
    "Good dreams are from Allah and may glad-tidings be taken from them, but the Shariah is complete and dreams legislate nothing. An act of worship is accepted only with proof from the Quran and Sunnah; a dream cannot obligate, prohibit or specify worship — even the dream of a righteous person. If a dream conforms to the Shariah, the Shariah was already sufficient; if it contradicts it, it is discarded. Relate good dreams to those you love, spit dryly to the left three times from bad ones, and seek refuge in Allah.",
    "Shaykh Muhammad ibn Salih al-Uthaymeen",
    "Summarized from Majmu' Fatawa wa Rasa'il al-Uthaymeen"
  ),
  f(
    "f-new-muslim-past",
    "General",
    "A new Muslim's past sins",
    "Someone entered Islam after a life of serious sins. Must he make up for what passed?",
    "Islam demolishes what was before it — the Prophet ﷺ said this to Amr ibn al-As when he accepted Islam, and Allah says the one who repents and believes, 'Allah will replace their evil deeds with good' (al-Furqan 25:70). He is not required to make up past prayers or fasts, for he was not addressed with them before his Islam. Let him enter his new life with hope, guard the obligations from today, and know that his record opened white on the day he testified.",
    "Al-Lajnah ad-Da'imah (Permanent Committee)",
    "Summarized from Fatawa al-Lajnah ad-Da'imah"
  ),
];
