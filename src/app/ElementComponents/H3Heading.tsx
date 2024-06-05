import React from "react";

interface H3Heading {
  text: string;
}

const H3Heading = ({ text }: H3Heading) => {
  return (
    <h3
      className="
      font-bold
      pt-12 lg:pt-16 text-lg md:text-xl lg:text-2xl
    "
    >
      {text}
    </h3>
  );
};

export default H3Heading;
