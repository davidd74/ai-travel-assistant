import React, { useEffect } from "react";
import { RangeCalendar } from "@nextui-org/calendar";
import { today, getLocalTimeZone, parseDate } from "@internationalized/date";
import DateCircle from "@/public/icons/DateCircle";
import { Slider } from "@nextui-org/react";

const SelectDate = () => {
  const [selectedRange, setSelectedRange] = React.useState<any>([]);
  const [showCalendar, setShowCalendar] = React.useState<boolean>(false);

  const currentDate = today(getLocalTimeZone());

  const addDays = (date: any, days: any) => {
    const result = new Date(date.year, date.month - 1, date.day);
    result.setDate(result.getDate() + days);
    return parseDate(result.toISOString().split("T")[0]);
  };

  const maxDate = addDays(currentDate, 7);

  const formatDate = (date: any) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return `${months[date.month - 1]} ${date.day}${
      date.day === 1
        ? "st"
        : date.day === 2
        ? "nd"
        : date.day === 3
        ? "rd"
        : "th"
    }`;
  };

  const handleSelectedRange = (range: any) => {
    setSelectedRange(range);
  };

  useEffect(() => {
    if (selectedRange.start && selectedRange.end) {
      setShowCalendar(false);
    }
  }, [selectedRange]);

  return (
    <>
      <h2 className="pt-16 text-2xl">When are you traveling?</h2>
      <div className="flex flex-col">
        <div
          onClick={() => setShowCalendar(!showCalendar)}
          className="w-[256px] cursor-pointer flex items-center mt-6 gap-2 p-2 border-2 border-light-border_lighter rounded-[8px]"
        >
          <DateCircle />
          <p>
            {selectedRange.start && selectedRange.end ? (
              <span>
                {formatDate(selectedRange.start)} -{" "}
                {formatDate(selectedRange.end)}
              </span>
            ) : (
              "Select Date"
            )}
          </p>
        </div>
        <div className="mt-2">
          {showCalendar && (
            <RangeCalendar
              aria-label="Date (Min Date Value)"
              minValue={currentDate}
              maxValue={maxDate}
              onChange={handleSelectedRange}
              value={
                selectedRange.start && selectedRange.end ? selectedRange : null
              }
            />
          )}
        </div>
      </div>

      <Slider
        label="Temperature"
        step={0.01}
        maxValue={1}
        minValue={0}
        defaultValue={0.4}
        className="max-w-md"
      />
    </>
  );
};

export default SelectDate;
