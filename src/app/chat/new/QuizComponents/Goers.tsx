import React, { useEffect, useState } from "react";
import SingleChoiceQuestion from "./SingleChoiceQuestion";
import { goersData } from "src/data/goersData";

const Goers = () => {
  const [goersDataValue, setGoersDataValue] = useState<string>("");

  const handleGoersSelection = (goersDataValue: string) => {
    setGoersDataValue(goersDataValue);
  };

  useEffect(() => {
    console.log(goersDataValue);
  }, [goersDataValue]);

  return (
    <>
      <h2 className="pt-16 pb-6 text-2xl">How many people are going?</h2>
      <SingleChoiceQuestion
        handleSelection={handleGoersSelection}
        items={goersData}
      />
    </>
  );
};

export default Goers;
