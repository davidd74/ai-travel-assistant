import React, { useEffect } from "react";
import { RangeCalendar } from "@nextui-org/calendar";
import { today, getLocalTimeZone, parseDate } from "@internationalized/date";
import { Slider } from "@nextui-org/slider";

const Budget = () => {
  return (
    <div className="pb-12 flex w-full justify-center flex-col items-center">
      <h2 className="pt-16 pb-6 text-2xl">
        Adjust your budget range as desired.
      </h2>
      <Slider
        label="Temperature"
        step={0.01}
        maxValue={1}
        minValue={0}
        defaultValue={0.4}
        className="max-w-md"
      />
    </div>
  );
};

export default Budget;
