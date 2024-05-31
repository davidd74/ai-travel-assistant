import React, { useEffect } from "react";
import { Slider } from "@nextui-org/slider";

const Budget = () => {
  return (
    <div className="pb-12 flex w-full justify-center flex-col items-center">
      <h2 className="pt-16 pb-10 text-2xl">
        Adjust budget as desired.
      </h2>

      <Slider
        label="Choose budget"
        showTooltip={true}
        step={100}
        formatOptions={{ style: "currency", currency: "USD" }}
        maxValue={2000}
        minValue={200}
        tooltipProps={{ className: "custom-tooltip" }}
        defaultValue={200}
        className="max-w-md"
        classNames={{
          filler: "bg-light-primary",
          thumb: "bg-light-primary",
          startContent: "bg-light-primary",
          step: "bg-light-primary",
          mark: "bg-light-primary",
        }}
      />
    </div>
  );
};

export default Budget;
