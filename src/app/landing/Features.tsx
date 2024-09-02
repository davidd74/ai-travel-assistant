import React from "react";
import H1Heading from "../ElementComponents/H1Heading";
import H2Heading from "../ElementComponents/H2Heading";
import H3Heading from "../ElementComponents/H3Heading";
import Image from "next/image";

const Features = () => {
  const steps = [
    {
      title: "Complete the Quiz",
      description:
        "Answer a few quick questions about your travel preferences, interests, and desired destinations. Our assistant will use your responses to create a travel plan for you.",
      image: "/images/step1.png",
    },
    {
      title: "Explore Your Itinerary",
      description:
        "Check out the itinerary our assistant has created for you and ask any questions you may have.",
      image: "/images/step2.png",
    },
    {
      title: "Book Accomodation and Enjoy!",
      description: "Have fun!",
      image: "/images/step3.png",
    },
  ];

  return (
    <div className="mt-4 w-full flex  flex-col items-center ">
      <H2Heading text="How it works" />
      <div className="flex flex-col xl:w-[60%] gap-y-10 mt-6">
        {steps.map((step, index) => (
          <div
            className={`rounded-xl flex flex-col bg-light-grey justify-between p-4 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } gap-5`}
            key={index}
          >
            <div className="flex items-center gap-4 px-4">
              <div className="">
                <div className="text-center rounded-full w-[74.74px] h-[74.74px] justify-center flex items-center shadow-lg border-2 border-light-primary">
                  Step {index + 1}
                </div>
              </div>
              <div>
                <H3Heading
                  className="!pt-0 mt-0 font-medium !text-2xl md:!text-3xl"
                  text={step.title}
                />
                <p className="mt-1 text-sm md:text-lg max-w-[400px]">
                  {step.description}
                </p>
              </div>
            </div>
            {step.image && (
              <div className="flex-shrink-0 md:max-w-[50%]">
                <Image
                  alt="step image"
                  width={500}
                  height={500}
                  src={`${step.image}`}
                  className="w-full h-auto object-contain"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
