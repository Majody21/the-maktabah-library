import type { Resource } from "./types";

/** A Google Drive file's browser-viewable link (from the user's public library). */
const drive = (fileId: string) =>
  `https://drive.google.com/file/d/${fileId}/view`;

const r = (
  id: string,
  departmentId: string | null,
  title: string,
  author: string,
  type: Resource["type"],
  url: string,
  description: string,
  pdfUrl: string | null = null
): Resource => ({ id, departmentId, title, author, type, url, description, pdfUrl });

export const resources: Resource[] = [
  // ——— Aqeedah ———
  r("r-thalathat-usul", "aqeedah", "Explanation of the Three Fundamental Principles", "Explained by Shaykh Haytham Sarhan", "book", "https://darussalam.com/", "The matn studied in this library's core module, with the standard beginner-level sharh.", drive("1RW23U4G6tT8dPVWsGMnapTNNNsVjZpub")),
  r("r-qawaid-arba", "aqeedah", "The Four Principles (with explanation)", "Muhammad ibn Abd al-Wahhab; expl. Salih al-Fawzan", "book", "https://darussalam.com/", "A one-page matn exposing the reality of shirk — covered in Module 5.", drive("1FzVvWWHEjzinFKdWJM099fwQ2SPQSfsr")),
  r("r-kitab-tawheed", "aqeedah", "Kitab at-Tawheed", "Muhammad ibn Abd al-Wahhab", "book", "https://darussalam.com/", "The classical chapter-by-chapter text on tawheed al-uluhiyyah with its evidences.", drive("1zIGTupW21kyecFVYVqBhmk6u1QHlm91b")),
  r("r-wasitiyyah", "aqeedah", "Sharh al-Aqeedah al-Wasitiyyah", "Ibn Taymiyyah; expl. Ibn Uthaymeen", "book", "https://darussalam.com/", "The reference creed text on Allah's names and attributes upon the way of the Salaf.", drive("1f4U7-60nh7XDfYvBF1_PFx5qYaTPRdMv")),
  r("r-usul-iman", "aqeedah", "Sharh Usul al-Iman", "Ibn Uthaymeen", "book", "https://darussalam.com/", "A concise explanation of all six pillars of iman — pairs with Module 2."),
  r("r-aqeedah-tawheed", "aqeedah", "Aqeedah at-Tawheed", "Salih ibn Fawzan al-Fawzan", "book", "https://darussalam.com/", "A modern university-level primer covering the categories of tawheed and their nullifiers."),
  r("r-usul-sunnah", "aqeedah", "Usul as-Sunnah", "Imam Ahmad ibn Hanbal", "book", "https://darussalam.com/", "The creed of Imam Ahmad — short, early, and foundational for knowing the Salaf's positions.", drive("1pmw3F8i0TaQZut4xVFF-QjPB2kXgs45B")),
  // ——— Fiqh ———
  r("r-mulakhkhas", "fiqh", "A Summary of Islamic Jurisprudence (al-Mulakhkhas al-Fiqhi)", "Salih ibn Fawzan al-Fawzan", "book", "https://darussalam.com/", "A complete survey of worship and transactions with evidences — the planned base text for the fiqh department."),
  r("r-prophets-prayer", "fiqh", "The Prophet's Prayer Described", "Muhammad Nasir ad-Din al-Albani", "book", "https://darussalam.com/", "Describing the prayer ﷺ from takbir to taslim, evidence by evidence."),
  r("r-sharh-mumti", "fiqh", "Ash-Sharh al-Mumti' 'ala Zad al-Mustaqni'", "Ibn Uthaymeen", "book", "https://shamela.ws/", "The great Hanbali commentary this department's advanced content will draw from (Arabic)."),
  r("r-fatawa-arkan", "fiqh", "Fatawa Arkan al-Islam (Islamic Verdicts on the Pillars of Islam)", "Ibn Uthaymeen", "book", "https://darussalam.com/", "Organized fatawa on creed, prayer, zakah, fasting and hajj in English translation."),
  // ——— Quran & Tafsir ———
  r("r-tafsir-ibn-kathir", "quran-tafsir", "Tafsir Ibn Kathir (abridged, 10 vols.)", "Ibn Kathir", "book", "https://darussalam.com/", "The most relied-upon classical tafsir available in English."),
  r("r-tafsir-sadi", "quran-tafsir", "Tafsir as-Sa'di", "Abd ar-Rahman as-Sa'di", "book", "https://iiph.com/", "A clear, aqeedah-sound tafsir beloved for beginners — available in English volumes."),
  r("r-quran-com", "quran-tafsir", "Quran.com", "—", "website", "https://quran.com/", "Read the Quran with translations, word-by-word analysis, and audio."),
  r("r-noble-quran", "quran-tafsir", "The Noble Quran (Hilali & Khan translation)", "Hilali & Muhsin Khan", "book", "https://darussalam.com/", "The widely used translation with tafsir-based annotations from Sahih sources."),
  // ——— Hadith Sciences ———
  r("r-sunnah-com", "hadith-sciences", "Sunnah.com", "—", "website", "https://sunnah.com/", "Search the major hadith collections with Arabic text and English translation — used for every hadith reference on this site."),
  r("r-nukhbah", "hadith-sciences", "Nukhbat al-Fikar (with explanation)", "Ibn Hajar al-Asqalani", "book", "https://darussalam.com/", "The classical matn of hadith terminology, for when the department opens."),
  // ——— Arabic ———
  r("r-madinah-books", "arabic-language", "Madinah Arabic Books 1-3", "V. Abdur Rahim", "book", "https://darussalam.com/", "The standard Arabic course taught at the Islamic University of Madinah."),
  r("r-ajurrumiyyah", "arabic-language", "Al-Ajurrumiyyah (with English commentary)", "Ibn Ajurrum", "book", "https://darussalam.com/", "The classical beginner grammar text this department will teach lesson by lesson."),
  r("r-madinaharabic-site", "arabic-language", "MadinahArabic.com", "—", "website", "https://www.madinaharabic.com/", "Free structured Arabic lessons for reading and grammar practice."),
  r("r-arabic-alphabet", "arabic-language", "Arabic Reading & Writing Made Easy", "—", "book", "https://darussalam.com/", "For absolute beginners: letters, harakat and joining before starting Madinah Book 1."),
  // ——— Seerah ———
  r("r-sealed-nectar", "seerah", "The Sealed Nectar (ar-Raheeq al-Makhtum)", "Safi ar-Rahman al-Mubarakpuri", "book", "https://darussalam.com/", "The standard English biography of the Prophet ﷺ — the base text for the seerah department.", drive("162eXpzNwDnrcgxFVAMqkYtiyA2RvqY5f")),
  // ——— Tazkiyat al-Nafs ———
  r("r-disease-cure", "tazkiyah", "The Disease and the Cure (ad-Daa' wad-Dawaa')", "Ibn Qayyim al-Jawziyyah", "book", "https://darussalam.com/", "Ibn al-Qayyim's answer to the question: what heals the heart from sin? The base text for tazkiyat al-nafs.", drive("1XXHa_qmnvTOe8yc2z0LPqI8v34ih67cf")),
  // ——— Dawah ———
  r("r-kalimatun-sawa", "dawah", "The Methodology of the Prophets in Calling to Allah", "Rabee' ibn Hadi al-Madkhali", "book", "https://darussalam.com/", "How the prophets called: tawheed first — the base text for the dawah department."),
  r("r-worlddawah", "dawah", "WorldDawah.com", "—", "website", "https://worlddawah.com/", "English da'wah resources and materials for conveying Islam clearly."),
  // ——— Refutations ———
  r("r-sharh-sunnah-barbahari", "refutations", "Sharh as-Sunnah", "Imam al-Barbahari; expl. al-Fawzan", "book", "https://darussalam.com/", "An early Salafi creed text warning from innovation — foundational before studying the sects.", drive("1VUYnx4VPblYnf5nBZVe8PbVWXNnQu-Cn")),
  r("r-ibanah", "refutations", "Al-Ibanah 'an Usul ad-Diyanah", "Abu al-Hasan al-Ash'ari", "book", "https://shamela.ws/", "The final creed of al-Ash'ari himself, affirming the way of Ahmad ibn Hanbal (Arabic)."),
  r("r-lumah", "refutations", "Al-Lum'ah fil-I'tiqad (Sufficiency in Creed)", "Ibn Qudamah; expl. Ibn Uthaymeen", "book", "https://darussalam.com/", "A Hanbali creed text often taught before engaging the positions of the sects.", drive("12QcpTrNHXFiZLF2Sn3A7tyKQ-K4NHbUu")),
  // ——— Fatawa / scholars' portals ———
  r("r-binbaz", "fatawa-library", "Official website of Shaykh Ibn Baz", "Ibn Baz Foundation", "website", "https://binbaz.org.sa/", "Thousands of the Shaykh's fatawa, treatises and audio (Arabic, with some translations)."),
  r("r-binothaimeen", "fatawa-library", "Official website of Shaykh Ibn Uthaymeen", "Ibn Uthaymeen Foundation", "website", "https://binothaimeen.net/", "The Shaykh's books, fatawa and recorded lessons (Arabic)."),
  r("r-alfawzan", "fatawa-library", "Official website of Shaykh Salih al-Fawzan", "—", "website", "https://www.alfawzan.af.org.sa/", "Current lessons, khutbahs and fatawa of the Shaykh (Arabic)."),
  r("r-alifta", "fatawa-library", "General Presidency of Scholarly Research and Ifta (alifta.gov.sa)", "Al-Lajnah ad-Da'imah", "website", "https://www.alifta.gov.sa/", "The Permanent Committee's fatawa — the source referenced throughout this site's fatawa section."),
  // ——— Video channels ———
  r("r-scholarly-subtitles", "aqeedah", "Scholarly Subtitles (YouTube)", "Various scholars, English subtitles", "video", "https://www.youtube.com/results?search_query=scholarly+subtitles", "Subtitled clips of Ibn Baz, Ibn Uthaymeen, al-Fawzan and others — the source pool for this site's lesson videos."),
  r("r-uthaymeen-yt", "aqeedah", "Ibn Uthaymeen archive lectures (YouTube)", "Ibn Uthaymeen", "video", "https://www.youtube.com/results?search_query=ibn+uthaymeen+english+subtitles", "Recorded lessons of the Shaykh with English subtitles, searchable by matn."),
  // ——— Where to buy ———
  r("r-buy-darussalam", null, "Darussalam Publishers", "—", "website", "https://darussalam.com/", "Major publisher of English Islamic books — most titles recommended on this site."),
  r("r-buy-iiph", null, "International Islamic Publishing House (IIPH)", "—", "website", "https://iiph.com/", "Publisher of al-Ashqar's creed series and many translated works."),
  r("r-buy-authentic", null, "Authentic Statements Publishing", "—", "website", "https://authenticstatements.com/", "US-based publisher/distributor of Salafi books and matn translations."),
  r("r-buy-hikmah", null, "Hikmah Publications", "—", "website", "https://hikmahpubs.com/", "Publisher of translations from the scholars of Sunnah, including creed texts."),
];
