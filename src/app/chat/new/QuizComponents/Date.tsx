import React, { useEffect } from "react";
import { RangeCalendar } from "@nextui-org/calendar";
import { today, getLocalTimeZone, parseDate } from "@internationalized/date";
import DateCircle from "@/public/icons/DateCircle";
import H3Heading from "src/app/ElementComponents/H3Heading";
import { HandleAnswerType } from "src/data/types";
import toast from "react-hot-toast";

const SelectDate = ({ handleAnswer }: { handleAnswer: HandleAnswerType }) => {
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
    const start = new Date(
      range.start.year,
      range.start.month - 1,
      range.start.day
    );
    let end = new Date(range.end.year, range.end.month - 1, range.end.day + 1);
    const diffDays = Math.ceil(
      (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
    );

    if (diffDays < 3) {
      end = new Date(start.getTime());
      end.setDate(start.getDate() + 3);
      toast.error("Select at least 2 days");
    } else if (diffDays > 7) {
      end = new Date(start.getTime());
      end.setDate(start.getDate() + 7);
      toast.error("You can't select more than 7 days");
    }

    const newRange = {
      start: range.start,
      end: parseDate(end.toISOString().split("T")[0]),
    };

    setSelectedRange(newRange);
    handleAnswer("date", newRange);
  };

  useEffect(() => {
    console.log(selectedRange);

    if (selectedRange.start && selectedRange.end) {
      setShowCalendar(false);
    }
  }, [selectedRange]);

  return (
    <>
      <H3Heading text="When are you traveling?" />

      <div className="flex relative flex-col">
        <div
          onClick={() => setShowCalendar(!showCalendar)}
          className="bg-white w-[256px] cursor-pointer flex items-center mt-2 md:mt-6 gap-2 p-2 border-2 border-light-border_lighter rounded-[8px]"
        >
          <DateCircle />
          <p className="text-base font-medium ">
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
        <div className="mt-2 absolute top-[100%]">
          {showCalendar && (
            <RangeCalendar
              aria-label="Date (Min Date Value)"
              minValue={currentDate}
              onChange={handleSelectedRange}
              value={
                selectedRange.start && selectedRange.end ? selectedRange : null
              }
              className="max-w-xs md:w-[256px]"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default SelectDate;
