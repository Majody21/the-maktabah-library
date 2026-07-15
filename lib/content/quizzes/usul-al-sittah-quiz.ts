import type { Quiz } from "../types";

export const usulAlSittahQuiz: Quiz = {
  id: "quiz-usul-al-sittah",
  moduleId: "usul-al-sittah",
  questions: [
    {
      id: "q-us-01",
      quizId: "quiz-usul-al-sittah",
      questionText:
        "What recurring pattern does the author say runs through all six foundations?",
      options: [
        "Allah made a matter clear enough for the common person to grasp, yet most people opposed it",
        "Each foundation was revealed in Madinah after the community was established",
        "Every foundation depends on a hadith rather than a verse of the Quran",
        "Each foundation was disputed only by the philosophers and theologians",
      ],
      correctAnswerIndex: 0,
      explanation:
        "The author's frame is that each of the six is so plain even an unlettered person would understand it — and yet the majority, including many who claimed knowledge, fell into its opposite. Seeing that pattern is the purpose of the whole treatise.",
      topicTag: "overview",
      difficulty: "recall",
    },
    {
      id: "q-us-02",
      quizId: "quiz-usul-al-sittah",
      questionText:
        "The first foundation is sincerity (ikhlas) in the religion for Allah alone. What did most people do in opposition to it, per the author?",
      options: [
        "They abandoned the obligatory prayers while claiming inner faith",
        "They directed acts of worship to intermediaries rather than to Allah alone",
        "They denied that Allah is the Creator of the heavens and the earth",
        "They invented new times and forms for the five daily prayers",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Ikhlas means worship purely for Allah, free of shirk. The opposition the author highlights is precisely giving worship to intermediaries — the same failure the categories of tawheed and the Four Principles diagnosed. Allah made the point plain (al-Bayyinah 98:5) yet most turned to others.",
      topicTag: "foundation-1",
      difficulty: "recall",
    },
    {
      id: "q-us-03",
      quizId: "quiz-usul-al-sittah",
      questionText:
        "The second foundation commands unity in the religion and forbids division. According to the author, how did most people come to regard this?",
      options: [
        "They upheld unity so strictly that they forbade all scholarly differences",
        "They came to treat division into sects as a mercy and unity upon truth as impossible",
        "They limited unity to matters of prayer while dividing over creed",
        "They believed unity was obligatory only under a single caliph",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Allah tied the ummah to one rope (Aal Imran 3:103) and forbade splitting (ash-Shura 42:13). The author observes the inversion: people came to regard sectarian division as a mercy and unity upon the truth as unattainable — the opposite of the command.",
      topicTag: "foundation-2",
      difficulty: "application",
    },
    {
      id: "q-us-04",
      quizId: "quiz-usul-al-sittah",
      questionText:
        "A man argues: 'Since obeying the ruler is a foundation of religion, I must obey any command he gives, even one requiring sin.' Where does his reasoning break, based on the third foundation?",
      options: [
        "Obedience to authority was abrogated and no longer applies after the first generation",
        "The command to obey covers only religious scholars, never political authority",
        "Obedience to a created being does not extend to disobedience of the Creator — it is in what is good",
        "The foundation requires obedience only when the ruler is himself a scholar",
      ],
      correctAnswerIndex: 2,
      explanation:
        "The third foundation joins obeying those in authority to obeying Allah and His Messenger (an-Nisa 4:59), but the Prophet ﷺ limited it: 'there is no obedience to a created being in disobedience to the Creator' (al-Bukhari #7257). Obedience is in the good; a command to sin is not obeyed — while wholesale rejection of authority is also wrong.",
      topicTag: "foundation-3",
      difficulty: "application",
    },
    {
      id: "q-us-05",
      quizId: "quiz-usul-al-sittah",
      questionText:
        "The fourth foundation clarifies who the true scholars are. Which verse does the author's point rest on?",
      options: [
        "'Only those who have knowledge among His servants fear Allah' (Fatir 35:28)",
        "'And say: my Lord, increase me in knowledge' (Ta-Ha 20:114)",
        "'Read in the name of your Lord who created' (al-'Alaq 96:1)",
        "'Are those who know equal to those who do not know?' (az-Zumar 39:9)",
      ],
      correctAnswerIndex: 0,
      explanation:
        "The fourth foundation defines the scholar by fear of Allah born of knowing Him — 'only those with knowledge among His servants fear Allah' (Fatir 35:28). The other verses praise knowledge generally but the author's specific proof for who the true ulama are is Fatir 35:28.",
      topicTag: "foundation-4",
      difficulty: "recall",
    },
    {
      id: "q-us-06",
      quizId: "quiz-usul-al-sittah",
      questionText:
        "According to the fifth foundation and Yunus 10:62-63, who are the true allies of Allah (awliya Allah)?",
      options: [
        "A hidden elite granted miraculous powers and knowledge of the unseen",
        "The descendants of the Prophet ﷺ and the great scholars of each age",
        "Those who believe and have taqwa — open to every believer, increasing with iman",
        "Those who withdraw from society to devote themselves to constant worship",
      ],
      correctAnswerIndex: 2,
      explanation:
        "Allah defined His awliya plainly: 'those who believed and were fearing Allah' (Yunus 10:62-63). Wilayah is not a secret caste with strange powers; it grows with iman and taqwa and is open to any believer. The closer to Allah, the closer the following of His Messenger ﷺ — never the violation of the Shariah.",
      topicTag: "foundation-5",
      difficulty: "application",
    },
    {
      id: "q-us-07",
      quizId: "quiz-usul-al-sittah",
      questionText:
        "The sixth foundation refutes a doubt the author calls one of Shaytan's greatest tricks. What is that doubt?",
      options: [
        "That the Quran was altered like the earlier scriptures",
        "That only a perfect, all-knowing mujtahid may derive from the Quran and Sunnah, so ordinary people should leave the texts entirely",
        "That the Sunnah cannot be trusted because its chains are weak",
        "That the religion was completed and needs no further study",
      ],
      correctAnswerIndex: 1,
      explanation:
        "The sixth foundation answers the claim that the texts are sealed off from all but a flawless mujtahid, so the masses should abandon the Quran and Sunnah for blind imitation. The author calls it a device to empty people's hands of revelation — refuted by Allah making the Book a clarification and guidance for all.",
      topicTag: "foundation-6",
      difficulty: "recall",
    },
    {
      id: "q-us-08",
      quizId: "quiz-usul-al-sittah",
      questionText:
        "How does the sixth foundation answer that doubt about approaching the Quran and Sunnah?",
      options: [
        "By conceding the texts are only for scholars but urging the masses to memorize them anyway",
        "By arguing that reason, not revelation, is the final authority in religion",
        "By showing Allah made the Book a clarification and guidance for all people, easy to remember, meeting every doubt with truth",
        "By restricting the Quran's guidance to matters of worship and leaving all else to jurists",
      ],
      correctAnswerIndex: 2,
      explanation:
        "The answer is that Allah made the Quran 'a clarification for all things, and guidance and mercy' (an-Nahl 16:89), easy to remember (al-Qamar 54:17), and promised that no doubt comes except that He sends truth against it (al-Furqan 25:33). The Book is Allah's accessible, standing proof — taken with the understanding of the people of knowledge, not abandoned.",
      topicTag: "foundation-6",
      difficulty: "application",
    },
    {
      id: "q-us-09",
      quizId: "quiz-usul-al-sittah",
      questionText:
        "A speaker claims a certain man is a great wali of Allah because he reportedly flies and predicts the future, though he abandons the prayer. How does the fifth foundation assess this?",
      options: [
        "The claim stands, since miracles are the defining mark of Allah's allies",
        "It is rejected: wilayah is measured by iman and taqwa, and there is no nearness to Allah in abandoning His Shariah",
        "It is accepted only if witnessed by several trustworthy people",
        "It is a matter of opinion on which the texts are silent",
      ],
      correctAnswerIndex: 1,
      explanation:
        "The fifth foundation ties wilayah to belief and taqwa, not to wonders. One who abandons the prayer cannot be a wali on the strength of alleged powers — the nearer a person is to Allah, the more he follows the Messenger ﷺ. Unusual feats without taqwa are no proof; they can even be from Shaytan's imposters.",
      topicTag: "foundation-5",
      difficulty: "analysis",
    },
    {
      id: "q-us-10",
      quizId: "quiz-usul-al-sittah",
      questionText:
        "The first and second foundations, taken together, explain a claim made elsewhere in this curriculum. Which?",
      options: [
        "That the prayer is the first pillar to be judged on the Day of Resurrection",
        "That correct creed underlies communal unity — division in religion begins with corruption in aqeedah",
        "That fasting was prescribed upon earlier nations before this one",
        "That hajj combines bodily and financial worship",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Foundation one (sincere tawheed) and foundation two (unity, no division) connect directly: a community splinters when its creed corrupts, and it unites upon sound tawheed. This is why the whole library places aqeedah first — the foundations themselves make the link.",
      topicTag: "overview",
      difficulty: "analysis",
    },
    {
      id: "q-us-11",
      quizId: "quiz-usul-al-sittah",
      questionText:
        "Why does the author repeatedly stress that these foundations are simple enough for a common person, yet opposed by many claimants to knowledge?",
      options: [
        "To argue that formal scholarship is unnecessary for understanding religion",
        "To show that clarity of a truth is no guarantee people will accept it — so the student must hold to the evidence, not the crowd",
        "To encourage students to bypass teachers and rely on their own reading",
        "To prove that the common people are always more correct than the learned",
      ],
      correctAnswerIndex: 1,
      explanation:
        "The contrast drives home that a matter can be crystal clear and still be widely rejected — so truth is measured by the evidence, not by numbers or reputations. It does not dismiss scholarship (the fourth foundation honors the true scholars); it warns against following the crowd against the proof.",
      topicTag: "overview",
      difficulty: "analysis",
    },
    {
      id: "q-us-12",
      quizId: "quiz-usul-al-sittah",
      questionText:
        "Which ordering correctly matches each foundation to its theme?",
      options: [
        "1 sincerity, 2 unity, 3 obedience to authority, 4 the true scholars, 5 the allies of Allah, 6 answering the doubt about the texts",
        "1 unity, 2 sincerity, 3 the scholars, 4 obedience, 5 the doubt about the texts, 6 the allies of Allah",
        "1 obedience, 2 the allies of Allah, 3 sincerity, 4 unity, 5 the scholars, 6 the doubt about the texts",
        "1 the scholars, 2 the allies of Allah, 3 the doubt about the texts, 4 sincerity, 5 unity, 6 obedience",
      ],
      correctAnswerIndex: 0,
      explanation:
        "The six in order: sincerity for Allah alone; unity and the ban on division; hearing and obeying legitimate authority in good; clarifying the true scholars; clarifying the true allies of Allah; and refuting the doubt used to abandon the Quran and Sunnah. Holding the sequence helps you recall how the text builds.",
      topicTag: "overview",
      difficulty: "application",
    },
  ],
};
