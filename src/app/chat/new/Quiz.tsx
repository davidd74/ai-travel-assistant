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
import Link from "next/link";
import NavbarDesktop from "src/app/ElementComponents/NavbarDesktop";
import Image from "next/image";

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
  const [creatingPlan, setCreatingPlan] = useState(false);

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
    setCreatingPlan(true);
    localStorage.clear();

    const isButtonDisabled =
      !answers.destination ||
      Object.keys((answers.date as any).start).length === 0 ||
      !answers.goers ||
      answers.activities.length === 0 ||
      answers.budget <= 0;

    if (isButtonDisabled) {
      setCreatingPlan(false);
      toast.error("Please answer all the questions");
    } else {
      console.log(answers);
      const response = await axios.post("/api/itinerary", { answers });

      localStorage.setItem(
        "itinerary",
        JSON.stringify(response.data.choices[0].message.content)
      );

      router.push("/chat");
    }
  };

  return (
    <div className="bg-light-background quiz-wrapper md:px-12 flex flex-col items-start justify-start md:overflow-y-scroll lg:pt-12 md:ml-[32px] max-h-screen">
      {!creatingPlan ? (
        <>
          <Toaster position="top-right" />

          <NavbarDesktop />

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
        </>
      ) : (
        <div className="h-screen flex-col gap-y-4 mb-[7%] w-full items-center text-center flex justify-center">
          <Image
            height={200}
            width={200}
            quality={100}
            priority
            src={"https://i.imgur.com/Xh4TYha.gif"}
            alt="loading"
          />

          <p className="font-medium">Creating your itinerary...</p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
