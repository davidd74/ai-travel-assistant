// SingleChoiceQuestion.tsx
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
  questionValue: string[];
};

const MultipleChoiceQuestion = (props: Props) => {
  return (
    <div className="grid grid-cols-3 gap-x-8 gap-y-4">
      {props.items.map((item, index) => (
        <div
          key={index}
          className={`
          max-w-[275px]
          pb-2 w-full bg-light-card_bg border-[3px] overflow-hidden  transition-all duration-200 ease-linear rounded-[20px] cursor-pointer ${
            props.questionValue?.includes(item.title)
              ? "border-light-primary"
              : "border-transparent"
          }`}
          onClick={() => {
            props.handleSelection(item.title);
          }}
        >
          <Image
            src={item.src as string}
            width={275}
            height={275}
            alt="activity"
            quality={100}
            priority
          />
          <h3 className="ml-2 mt-2 text-md font-semibold">{item.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default MultipleChoiceQuestion;
