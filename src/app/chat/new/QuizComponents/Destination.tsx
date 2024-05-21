// Destination.tsx
import SearchIcon from "@/public/icons/SearchIcon";
import React, { useEffect, useState } from "react";
import { destinationData } from "src/data/destinationData";
import SingleChoiceQuestion from "./SingleChoiceQuestion";

const Destination = () => {
  const [destinationValue, setDestinationValue] = useState<string>("");

  // Handler function to update the selected destination value
  const handleDestinationSelection = (selectedDestination: string) => {
    setDestinationValue(selectedDestination);
  };

  useEffect(() => {
    console.log(destinationValue);
  }, [destinationValue]);

  return (
    <>
      <h2 className="pt-16 text-3xl">Plan your next trip</h2>
      <form className="flex relative w-1/2 mt-8 flex-col">
        <input
          autoFocus
          placeholder="Where do you wanna go?"
          type="text"
          className="caret-light-primary border-2 outline-none pl-10 border-light-border_lighter py-3.5 w-full rounded-[50px] font-normal text-md"
          value={destinationValue}
          onChange={(e) => setDestinationValue(e.target.value)}
        ></input>
        <button>
          <SearchIcon className="cursor-pointer absolute left-2.5 top-1/2 translate-y-[-45%]" />
        </button>
      </form>
      <div className="flex gap-10 mt-10">
        <SingleChoiceQuestion
          items={destinationData}
          handleSelection={handleDestinationSelection}
          inputValue={destinationValue}
        />
      </div>
    </>
  );
};

export default Destination;
