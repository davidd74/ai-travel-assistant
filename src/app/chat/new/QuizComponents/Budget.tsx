import React, { useState, useEffect } from "react";
import { Slider } from "@nextui-org/slider";
import H3Heading from "src/app/ElementComponents/H3Heading";
import { HandleAnswerType } from "src/data/types";

const Budget = ({ handleAnswer }: { handleAnswer: HandleAnswerType }) => {
  const [budget, setBudget] = useState(200);

  const handleBudgetChange = (value: any) => {
    setBudget(value);
  };

  useEffect(() => {
    handleAnswer("budget", budget);
  }, [budget]);

  return (
    <div className="pb-12 flex w-full justify-center flex-col items-center">
      <H3Heading
        text={`Adjust budget: ${budget.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        })}`}
      />
      {/* <p className="mt-4 text-xl font-medium">
        {budget.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        })}
      </p> */}
      <Slider
        aria-label="Budget"
        showTooltip={true}
        step={100}
        formatOptions={{ style: "currency", currency: "USD" }}
        maxValue={2000}
        minValue={200}
        tooltipProps={{ className: "custom-tooltip" }}
        defaultValue={200}
        className="max-w-md mt-6"
        classNames={{
          filler: "bg-light-primary",
          thumb: "bg-light-primary",
          startContent: "bg-light-primary",
          step: "bg-light-primary",
          mark: "bg-light-primary",
        }}
        onChange={handleBudgetChange}
      />
    </div>
  );
};

export default Budget;
