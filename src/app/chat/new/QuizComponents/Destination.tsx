import SearchIcon from "@/public/icons/SearchIcon";
import React, { useEffect, useState } from "react";
import { destinationData } from "src/data/destinationData";
import SingleChoiceQuestion from "./ChoiceQuestion";
import H2Heading from "src/app/ElementComponents/H2Heading";
import { HandleAnswerType } from "src/data/types";
import Autocomplete from "react-google-autocomplete";
import Link from "next/link";

const Destination = ({ handleAnswer }: { handleAnswer: HandleAnswerType }) => {
  const [destinationValue, setDestinationValue] = useState<string>("");
  const [selectedFromAutocomplete, setSelectedFromAutocomplete] =
    useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const handleDestinationSelection = (selectedDestination: string) => {
    setDestinationValue(selectedDestination);
    handleAnswer("destination", selectedDestination);
    setSelectedFromAutocomplete(false);
    setIsTyping(false);
  };

  useEffect(() => {
    if (isTyping) {
      handleAnswer("destination", "");
    } else if (destinationValue !== "") {
      handleAnswer("destination", destinationValue);
    }
  }, [destinationValue, isTyping]);

  return (
    <>
      <div className="h-[36px] "></div>
      <H2Heading text="Plan your next trip" />

      <form className="flex relative w-4/5 md:w-2/3 lg:w-1/2 mt-4 md:mt-8 flex-col">
        <Autocomplete
          apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}
          className="caret-light-primary border-2 outline-none pl-10 border-light-border_lighter py-2.5 md:py-3.5 w-full rounded-[30px] font-normal text-md"
          onPlaceSelected={(place) => {
            setDestinationValue(place.formatted_address);
            setSelectedFromAutocomplete(true);
            setIsTyping(false);
          }}
          value={destinationValue}
          onInput={(e) => {
            setDestinationValue((e.target as HTMLInputElement).value);
            setIsTyping(true);
          }}
          aria-placeholder="Where to?"
          placeholder="Select the destination."
          options={{
            types: ["(cities)"], // Restrict to cities
            fields: ["place_id", "name", "geometry", "formatted_address"], // Exclude postal_code
          }}
        />
        <button>
          <SearchIcon className="cursor-pointer absolute left-2.5 top-1/2 translate-y-[-45%]" />
        </button>
      </form>

      <div
        className={`${
          selectedFromAutocomplete && destinationValue ? "hidden" : "block"
        } flex gap-10 md:mt-10`}
      >
        <SingleChoiceQuestion
          items={destinationData}
          handleSelection={handleDestinationSelection}
          inputValue={destinationValue as string}
          questionValue={destinationValue as string}
        />
      </div>
    </>
  );
};

export default Destination;
