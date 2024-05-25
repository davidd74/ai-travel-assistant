import DateCircle from "@/public/icons/DateCircle";
import React, { useEffect } from "react";

const Date = () => {
  const [destinationValue, setDestinationValue] = React.useState<string>("");

  useEffect(() => {
    console.log(destinationValue);
  }, [destinationValue]);

  return (
    <>
      <h2 className="pt-16 text-2xl">When are you traveling?</h2>
      <div className="flex items-center mt-6 gap-2 p-2 border-2 border-light-border_lighter rounded-[8px] w-1/5">
        <DateCircle />
        <p>Select trip dates</p>
      </div>
    </>
  );
};

export default Date;
