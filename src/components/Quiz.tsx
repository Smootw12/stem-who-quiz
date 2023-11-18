"use client";

import { questions as questionData } from "@/lib/questionsData";
import { useState } from "react";

interface asnwerMapType {
  [key: string]: number;
}

function Quiz() {
  const [questionIdx, setQuestionIdx] = useState<number>(0);
  const [answerState, setAnswerState] = useState<"yes" | "no" | "unset">(
    "unset"
  );

  const [answersMap, setAnswerMap] = useState<asnwerMapType>({});

  function getAnswer() {
    let biggest = { name: "", value: 0 };
    let isValid = false;

    for (let key in answersMap) {
      if (answersMap[key] === biggest.value) {
        isValid = false;
      }
      if (answersMap[key] > biggest.value) {
        biggest.name = key;
        biggest.value = answersMap[key];
        isValid = true;
      }
    }

    return isValid ? biggest.name : "Gioca sul serio!";
  }

  function submitAnswer() {
    let newMap = { ...answersMap };
    if (answerState === "yes") {
      questionData.questions[questionIdx].subjects.map((subject) => {
        if (!newMap[subject]) {
          newMap[subject] = 1;
          return;
        }
        newMap[subject]++;
      });
    }

    console.log(newMap);

    setAnswerState("unset");
    setQuestionIdx((prev) => prev + 1);
    setAnswerMap(newMap);
  }

  function changeAnswerState(change: "yes" | "no") {
    if (change === answerState) {
      setAnswerState("unset");
      return;
    }
    setAnswerState(change);
  }

  if (questionIdx < questionData.numberOfQuestions) {
    return (
      <div className="flex justify-center h-[100vh] items-center">
        <div>
          <h1 className="text-2xl font-semibold">Questions</h1>
          <span className="text-sm">
            Question {questionIdx + 1} of {questionData.numberOfQuestions}
          </span>
          <h1 className="text-2xl font-medium mb-3">
            {questionData.questions[questionIdx].question}
          </h1>
          <ul className="mb-5 flex gap-3 justify-stretch">
            <button
              className={
                answerState === "yes"
                  ? "btn btn-primary w-[50%]"
                  : "btn btn-ghost w-[50%]"
              }
              onClick={() => changeAnswerState("yes")}
            >
              Yes
            </button>
            <button
              className={
                answerState === "no"
                  ? "btn btn-primary w-[50%]"
                  : "btn btn-ghost w-[50%]"
              }
              onClick={() => changeAnswerState("no")}
            >
              No
            </button>
          </ul>
          <div className="flex gap-3 justify-end">
            <button
              disabled={answerState === "unset"}
              className="btn btn-primary"
              onClick={() => submitAnswer()}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex justify-center h-[100vh] items-center">
        <div>
          <h1 className="text-2xl font-semibold mb-4">
            Il personaggio a cui stai pensando è
          </h1>
          <h1 className="text-3xl font-semibold text-center mb-6">
            {getAnswer()}
          </h1>
          <div className="flex justify-center">
            <button
              className="btn btn-primary"
              onClick={() => {
                setQuestionIdx(0);
                setAnswerState("unset");
                setAnswerMap({});
              }}
            >
              Replay
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Quiz;
