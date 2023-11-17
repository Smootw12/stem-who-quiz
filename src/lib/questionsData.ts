import { QuestionData } from "@/types/question";

export const questions: QuestionData = {
  numberOfQuestions: 3,
  questions: [
    {
      id: 1,
      question: "Il tuo personaggio ha meno di 60 anni? (2023)",
      subjects: ["Elon Musk", "Mark Zuckerberg"],
    },
    {
      id: 2,
      question: "Il tuo personaggio è/è stato un CEO di un'azienda FANG?",
      subjects: ["Bill Gates", "Mark Zuckerberg"],
    },
    {
      id: 3,
      question: "Il tuo personaggio ha più di 45 anni? (2023)",
      subjects: ["Bill Gates", "Elon Musk"],
    },
  ],
};
