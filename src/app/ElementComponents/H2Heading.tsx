import React from "react";

interface H2HeadingProps {
  text: string;
}

const H2Heading = ({ text }: H2HeadingProps) => {
  return (
    <h2 className="font-semibold pt-12 lg:pt-16 text-xl sm:text-2xl lg:text-4xl">
      {text}
    </h2>
  );
};

export default H2Heading;
