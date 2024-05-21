import React from "react";
import QuizProgressBar from "./QuizProgressBar";

import SearchIcon from "@/public/icons/SearchIcon";
import Destination from "./QuizComponents/Destination";
import SingleChoiceQuestion from "./QuizComponents/SingleChoiceQuestion";
import Date from "./QuizComponents/Date";
import Goers from "./QuizComponents/Goers";

const questionComponents = [];

const Quiz = () => {
  return (
    <div className="px-12 h-screen flex flex-col items-start justify-start pt-12 w-full">
      <div className="flex w-full justify-center items-center flex-col">
        <QuizProgressBar quizProgress={1} />
        <Destination />
        <Date />
        <Goers />
      </div>
    </div>
  );
};

export default Quiz;
