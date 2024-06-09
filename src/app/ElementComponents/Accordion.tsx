import { useState } from "react";

type AccordionItem = {
  id: number;
  title: string;
  content: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <div key={item.id} className="border  rounded">
          <button
            className="w-full text-left p-4 font-medium bg-white"
            onClick={() => handleToggle(index)}
          >
            {item.title}
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              activeIndex === index ? "max-h-screen" : "max-h-0"
            }`}
          >
            <div className="p-4 bg-transparent">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
