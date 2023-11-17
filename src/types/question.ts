import { subjects } from "@/lib/subjects";

export interface Question {
  id: number;
  question: string;
  subjects: (typeof subjects)[number][];
}

export interface QuestionData {
  numberOfQuestions: number;
  questions: Question[];
}
