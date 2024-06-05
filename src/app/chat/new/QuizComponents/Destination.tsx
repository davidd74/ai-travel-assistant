import SearchIcon from "@/public/icons/SearchIcon";
import React, { useEffect, useState } from "react";
import { destinationData } from "src/data/destinationData";
import SingleChoiceQuestion from "./ChoiceQuestion";
import H2Heading from "src/app/ElementComponents/H2Heading";
import { HandleAnswerType } from "src/data/types";

const Destination = ({ handleAnswer }: { handleAnswer: HandleAnswerType }) => {
  const [destinationValue, setDestinationValue] = useState<string>("");

  const handleDestinationSelection = (selectedDestination: string) => {
    setDestinationValue(selectedDestination);

    handleAnswer("destination", selectedDestination);
  };

  return (
    <>
      <H2Heading text="Plan your next trip" />
      <form className="flex relative w-4/5 md:w-2/3 lg:w-1/2 mt-4 md:mt-8 flex-col">
        <input
          autoFocus
          placeholder="Where to?"
          type="text"
          className="caret-light-primary border-2 outline-none pl-10 border-light-border_lighter py-2.5 md:py-3.5 w-full rounded-[30px] font-normal text-md"
          value={destinationValue}
          onChange={(e) => {
            setDestinationValue(e.target.value);
          }}
        ></input>
        <button>
          <SearchIcon className="cursor-pointer absolute left-2.5 top-1/2 translate-y-[-45%]" />
        </button>
      </form>
      <div className={`flex gap-10 md:mt-10`}>
        <SingleChoiceQuestion
          items={destinationData}
          handleSelection={handleDestinationSelection}
          inputValue={destinationValue}
          questionValue={destinationValue}
        />
      </div>
    </>
  );
};

export default Destination;
