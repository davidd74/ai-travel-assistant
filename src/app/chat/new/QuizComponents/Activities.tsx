import React, { useEffect, useLayoutEffect } from "react";
import MultipleChoiceQuestion from "./MultipleQuestionChoice";
import { activitiesData } from "src/data/activitiesData";
import H3Heading from "src/app/ElementComponents/H3Heading";
import { HandleAnswerType } from "src/data/types";

const Activities = ({ handleAnswer }: { handleAnswer: HandleAnswerType }) => {
  const [questionValue, setQuestionValue] = React.useState<string[]>([]);

  const handleMultipleSelection = (title: string) => {
    setQuestionValue((prev) => {
      if (prev.includes(title)) {
        return prev.filter((item) => item !== title);
      } else {
        return [...prev, title];
      }
    });
  };

  useEffect(() => {
    handleAnswer("activities", questionValue);
  }, [questionValue]);

  return (
    <>
      <H3Heading text="Choose trip activities" />

      <MultipleChoiceQuestion
        questionValue={questionValue}
        items={activitiesData}
        handleSelection={handleMultipleSelection}
      />
    </>
  );
};
export default Activities;
