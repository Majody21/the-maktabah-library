import type { Department, Module } from "./types";

export const departments: Department[] = [
  {
    id: "aqeedah",
    slug: "aqeedah",
    name: "Aqeedah",
    arabicName: "العقيدة",
    description:
      "Correct belief in Allah — the pillars, tawheed, and the proof for every point of creed.",
    icon: "pillar",
    displayOrder: 1,
    isActive: true,
    prerequisiteModuleId: null,
    prerequisiteNote: null,
  },
  {
    id: "fiqh",
    slug: "fiqh",
    name: "Ibadat / Fiqh",
    arabicName: "الفقه",
    description:
      "Purification, prayer, fasting, zakah and hajj upon the Hanbali madhhab.",
    icon: "mat",
    displayOrder: 2,
    isActive: false,
    prerequisiteModuleId: null,
    prerequisiteNote: null,
  },
  {
    id: "quran-tafsir",
    slug: "quran-tafsir",
    name: "Quran & Tafsir",
    arabicName: "القرآن والتفسير",
    description:
      "Approaching the Book of Allah with the tafsir of Ibn Kathir and al-Sa'di.",
    icon: "book",
    displayOrder: 3,
    isActive: false,
    prerequisiteModuleId: null,
    prerequisiteNote: null,
  },
  {
    id: "hadith-sciences",
    slug: "hadith-sciences",
    name: "Hadith Sciences",
    arabicName: "علوم الحديث",
    description:
      "How the Sunnah was preserved, the six books, and how narrations are graded.",
    icon: "scroll",
    displayOrder: 4,
    isActive: false,
    prerequisiteModuleId: null,
    prerequisiteNote: null,
  },
  {
    id: "seerah",
    slug: "seerah",
    name: "Seerah",
    arabicName: "السيرة النبوية",
    description:
      "The life of the Prophet ﷺ from Makkah to Madinah — his biography as guidance.",
    icon: "palm",
    displayOrder: 5,
    isActive: false,
    prerequisiteModuleId: null,
    prerequisiteNote: null,
  },
  {
    id: "tazkiyah",
    slug: "tazkiyah",
    name: "Tazkiyat al-Nafs",
    arabicName: "تزكية النفس",
    description:
      "Purification of the soul upon the Sunnah, beginning with Ibn al-Qayyim's The Disease and the Cure.",
    icon: "heart",
    displayOrder: 6,
    isActive: false,
    prerequisiteModuleId: null,
    prerequisiteNote: null,
  },
  {
    id: "arabic-language",
    slug: "arabic-language",
    name: "Arabic Language",
    arabicName: "اللغة العربية",
    description:
      "Quranic Arabic from the alphabet to al-Ajurrumiyyah, with interactive exercises.",
    icon: "letters",
    displayOrder: 7,
    isActive: false,
    prerequisiteModuleId: null,
    prerequisiteNote: null,
  },
  {
    id: "dawah",
    slug: "dawah",
    name: "Dawah",
    arabicName: "الدعوة",
    description:
      "The methodology and etiquette of calling to Allah with wisdom.",
    icon: "minaret",
    displayOrder: 8,
    isActive: false,
    prerequisiteModuleId: null,
    prerequisiteNote: null,
  },
  {
    id: "refutations",
    slug: "refutations",
    name: "Refutations & Warnings",
    arabicName: "الردود",
    description:
      "What bid'ah is, and the positions of the historical sects — once the foundations are firm.",
    icon: "shield",
    displayOrder: 9,
    isActive: false,
    prerequisiteModuleId: "usul-al-thalathah",
    prerequisiteNote:
      "Complete the Aqeedah module “Usul al-Thalathah” first — refutations are only understood once the correct position is firm.",
  },
  {
    id: "fatawa-library",
    slug: "fatawa-library",
    name: "Q&A / Fatawa Library",
    arabicName: "الفتاوى",
    description:
      "Selected verdicts of the major scholars, searchable and organized by topic.",
    icon: "question",
    displayOrder: 10,
    isActive: false,
    prerequisiteModuleId: null,
    prerequisiteNote: null,
  },
];

export const modules: Module[] = [
  {
    id: "five-pillars",
    departmentId: "aqeedah",
    slug: "five-pillars",
    name: "The Five Pillars of Islam",
    description:
      "What Islam is built upon: the two testimonies, prayer, zakah, fasting and hajj — each established from the Quran and the Sunnah.",
    displayOrder: 1,
    prerequisiteModuleId: null,
    estimatedMinutes: 220,
  },
  {
    id: "six-pillars",
    departmentId: "aqeedah",
    slug: "six-pillars",
    name: "The Six Pillars of Iman",
    description:
      "Belief in Allah, His angels, His books, His messengers, the Last Day, and al-qadar — the inward foundation of the religion.",
    displayOrder: 2,
    prerequisiteModuleId: "five-pillars",
    estimatedMinutes: 220,
  },
  {
    id: "usul-al-thalathah",
    departmentId: "aqeedah",
    slug: "usul-al-thalathah",
    name: "Usul al-Thalathah (The Three Fundamentals)",
    description:
      "A guided journey through Shaykh Muhammad ibn Abd al-Wahhab's primer on the three questions every soul will be asked: Who is your Lord? What is your religion? Who is your Prophet ﷺ?",
    displayOrder: 3,
    prerequisiteModuleId: "six-pillars",
    estimatedMinutes: 220,
  },
  {
    id: "categories-of-tawheed",
    departmentId: "aqeedah",
    slug: "categories-of-tawheed",
    name: "The Categories of Tawheed",
    description:
      "Tawheed of lordship, of worship, and of Allah's names and attributes — and the shirk that nullifies each.",
    displayOrder: 4,
    prerequisiteModuleId: "usul-al-thalathah",
    estimatedMinutes: 220,
  },
  {
    id: "qawaid-al-arba",
    departmentId: "aqeedah",
    slug: "qawaid-al-arba",
    name: "Al-Qawa'id al-Arba' (The Four Principles)",
    description:
      "Four short principles that expose the reality of shirk in every era — an introductory breakdown of the famous matn.",
    displayOrder: 5,
    prerequisiteModuleId: "categories-of-tawheed",
    estimatedMinutes: 170,
  },
  {
    id: "nawaqid-al-islam",
    departmentId: "aqeedah",
    slug: "nawaqid-al-islam",
    name: "Nawaqid al-Islam (The Nullifiers of Islam)",
    description:
      "The ten matters Shaykh Muhammad ibn Abd al-Wahhab gathered that nullify a person's Islam — each with its proof, so a Muslim knows what to guard against.",
    displayOrder: 6,
    prerequisiteModuleId: "qawaid-al-arba",
    estimatedMinutes: 130,
  },
  {
    id: "usul-al-sittah",
    departmentId: "aqeedah",
    slug: "usul-al-sittah",
    name: "Usul al-Sittah (The Six Foundations)",
    description:
      "Six short, decisive foundations of the religion — clear enough that a child could grasp them, yet missed by many. A guided reading of the famous matn.",
    displayOrder: 7,
    prerequisiteModuleId: "nawaqid-al-islam",
    estimatedMinutes: 130,
  },
  {
    id: "kashf-al-shubuhat",
    departmentId: "aqeedah",
    slug: "kashf-al-shubuhat",
    name: "Kashf al-Shubuhat (Removal of the Doubts)",
    description:
      "How to answer the doubts raised against tawheed — the very arguments the mushrikun of old and today rely on, dismantled from the Quran and Sunnah.",
    displayOrder: 8,
    prerequisiteModuleId: "usul-al-sittah",
    estimatedMinutes: 170,
  },
];

export function modulesForDepartment(departmentId: string): Module[] {
  return modules
    .filter((m) => m.departmentId === departmentId)
    .sort((a, b) => a.displayOrder - b.displayOrder);
}
