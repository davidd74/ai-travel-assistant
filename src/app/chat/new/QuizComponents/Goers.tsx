import React, {useState } from "react";
import SingleChoiceQuestion from "./ChoiceQuestion";
import { goersData } from "src/data/goersData";
import H3Heading from "src/app/ElementComponents/H3Heading";
import { HandleAnswerType } from "src/data/types";

const Goers = ({ handleAnswer }: { handleAnswer: HandleAnswerType }) => {
  const [goersDataValue, setGoersDataValue] = useState<string>("");

  const handleGoersSelection = (goersDataValue: string) => {
    setGoersDataValue(goersDataValue);
    handleAnswer("goers", goersDataValue);
  };

  return (
    <>
      <H3Heading text="How many people are going?" />

      <SingleChoiceQuestion
        handleSelection={handleGoersSelection}
        questionValue={goersDataValue}
        items={goersData}
      />
    </>
  );
};

export default Goers;
