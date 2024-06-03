import React, { useEffect, useLayoutEffect } from "react";
import MultipleChoiceQuestion from "./MultipleQuestionChoice";
import { activitiesData } from "src/data/activitiesData";
import ChoiceQuestion from "./ChoiceQuestion";

const Activities = () => {
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
    console.log(questionValue);
  }, [questionValue]);

  return (
    <>
      <h2 className="pt-16 pb-6 text-center text-lg  md:text-2xl">
        Choose activities for your trip
      </h2>

      <MultipleChoiceQuestion
        questionValue={questionValue}
        items={activitiesData}
        handleSelection={handleMultipleSelection}
      />
    </>
  );
};
export default Activities;
