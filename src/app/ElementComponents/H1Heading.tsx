import React from "react";

interface H1HeadingProps {
  text: string;
}

const H1Heading = ({ text }: H1HeadingProps) => {
  return (
    <h1 className="text-center font-semibold 2xl:text-6xl text-4xl leading-[75px]">
      {text}
    </h1>
  );
};

export default H1Heading;
