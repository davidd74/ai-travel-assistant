import React from "react";
import QuizProgressBar from "./QuizProgressBar";

import Destination from "./QuizComponents/Destination";
import Date from "./QuizComponents/Date";
import Goers from "./QuizComponents/Goers";
import Activities from "./QuizComponents/Activities";
import Budget from "./QuizComponents/Budget";

const Quiz = () => {
  return (
    <div className="bg-light-background px-12 flex flex-col items-start justify-start pt-12 w-full">
      <div className="flex w-full justify-center items-center flex-col">
        <QuizProgressBar quizProgress={1} />
        <Destination />
        <Date />
        <Goers />
        <Activities />
        <Budget />
      </div>
    </div>
  );
};

export default Quiz;
