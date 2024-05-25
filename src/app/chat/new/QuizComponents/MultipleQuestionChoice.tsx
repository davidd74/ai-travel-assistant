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
  inputValue?: string;
};

const MultipleChoiceQuestion = (props: Props) => {
  const [questionValue, setQuestionValue] = React.useState<string>("");

  return (
    <div className="grid grid-cols-4 gap-4">
      {props.items.map((item, index) => (
        <div
          key={index}
          className={`pb-2 w-full bg-light-card_bg border-[3px] overflow-hidden hover:border-light-primary transition-all duration-300 ease-linear rounded-[13px] cursor-pointer ${
            questionValue === item.title &&
            (props.inputValue === undefined || props.inputValue === item.title)
              ? "border-light-primary"
              : "border-transparent"
          }`}
          onClick={() => {
            props.handleSelection(item.title);
            setQuestionValue(item.title);
          }}
        >
          <Image
            src={item.src as string}
            width={450}
            height={450}
            alt="destination"
          />
          <h3 className="ml-2 mr-2 mt-2 text-lg">{item.title}</h3>
          <p className="ml-2 mr-2 mt-1 text-sm font-normal">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default MultipleChoiceQuestion;
