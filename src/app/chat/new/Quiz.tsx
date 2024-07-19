import React, { useEffect, useState } from "react";
// import QuizProgressBar from "./QuizProgressBar";

import Destination from "./QuizComponents/Destination";
import Date from "./QuizComponents/Date";
import Goers from "./QuizComponents/Goers";
import Activities from "./QuizComponents/Activities";
import Budget from "./QuizComponents/Budget";
import { button } from "@nextui-org/theme";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import axios from "axios";

type AnswersType = {
  destination: string;
  date: {};
  goers: string;
  activities: string[];
  budget: number;
};

type HandleAnswerType = (question: keyof AnswersType, answer: any) => void;

const Quiz: React.FC = () => {
  const router = useRouter();

  const [answers, setAnswers] = useState<AnswersType>({
    destination: "",
    date: {
      start: {},
      end: {},
    },
    goers: "",
    activities: [],
    budget: 0,
  });

  const handleAnswer: HandleAnswerType = (question, answer) => {
    setAnswers((prevState) => ({ ...prevState, [question]: answer }));
  };

  const isButtonDisabled =
    !answers.destination ||
    Object.keys((answers.date as any).start).length === 0 ||
    !answers.goers ||
    answers.activities.length === 0 ||
    answers.budget <= 0;

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isButtonDisabled) {
      toast.error("Please answer all the questions");
    } else {
      console.log(answers);
      const response = await axios.post("/api/itinerary", { answers });

      localStorage.setItem(
        "itinerary",
        JSON.stringify(response.data.choices[0].message.content)
      );

      router.push("/chat/12");
      console.log(response.data.choices[0].message.content);
    }
  };

  return (
    <div className="bg-light-background quiz-wrapper md:px-12 flex flex-col items-start justify-start lg:pt-12 md:ml-[32px] h-screen overflow-y-scroll">
      <Toaster position="top-right" />

      <div className="flex w-full justify-center items-center flex-col">
        <Destination handleAnswer={handleAnswer} />
        <Date handleAnswer={handleAnswer} />
        <Goers handleAnswer={handleAnswer} />
        <Activities handleAnswer={handleAnswer} />
        <Budget handleAnswer={handleAnswer} />
      </div>
      <div className="w-full pb-6 flex justify-center">
        <button
          type="submit"
          onClick={onSubmit}
          className="font-medium rounded-[8px] transition-all duration-200 ease-linear hover:bg-light-primary/80 px-4 py-3 bg-light-primary text-white"
        >
          Create itinerary
        </button>
      </div>
    </div>
  );
};

export default Quiz;
