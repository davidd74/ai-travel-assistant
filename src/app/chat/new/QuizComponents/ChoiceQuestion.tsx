import Image from "next/image";
import React from "react";

interface Item {
  title: string;
  description?: string;
  src?: string;
}

type Props = {
  items: Item[];
  handleSelection: (title: string) => void;
  inputValue?: string;
  questionValue?: string;
};

const ChoiceQuestion = (props: Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {props.items.map((item, index) => (
        <div
          key={index}
          className={`
          
           max-w-[300px]
          pb-2 bg-light-card_bg border-[3px] overflow-hidden hover:border-light-primary transition-all duration-300 ease-linear rounded-[13px] cursor-pointer ${
            props.questionValue === item.title &&
            (props.inputValue === undefined || props.inputValue === item.title)
              ? "border-light-primary"
              : "border-transparent"
          }`}
          onClick={() => {
            props.handleSelection(item.title);
          }}
        >
          <Image
            src={item.src as string}
            width={300}
            height={300}
            alt="destination"
            className="w-full"
          />
          <h3 className="ml-2 mr-2 mt-2 text-sm sm:text-lg">{item.title}</h3>
          <p className="ml-2 w-2/3 mr-2 mt-1 text-xs sm:text-sm font-normal">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ChoiceQuestion;
