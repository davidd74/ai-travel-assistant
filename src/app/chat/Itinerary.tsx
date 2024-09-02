"use client";

interface itineraryProps {
  display: string;
  parsedData: any;
}

import React, { useEffect } from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

const Itinerary = (props: itineraryProps) => {
  return (
    <div
      className={`md:w-3/5 ${props.display} mt-[65px] w-full md:mt-0 bg-light-card_bg px-4 xl:px-12 py-1 overflow-y-auto`}
    >
      <Accordion variant="splitted">
        {props.parsedData.itinerary?.map((object: any, index: any) => (
          <AccordionItem
            key={index}
            aria-label={`Day ${index + 1}`}
            title={`Day ${index + 1}`}
            subtitle={object.daySummary}
            style={{
              backgroundColor: "white",
              margin: "5px 0",
              padding: "0 15px 15px 15px",
              boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px",
            }}
          >
            <div className="space-y-6">
              <div>
                <strong>Morning:</strong>
                <div>{object.morning}</div>
              </div>
              <div>
                <strong>Afternoon:</strong>
                <div>{object.afternoon}</div>
              </div>
              <div>
                <strong>Evening:</strong>
                <div>{object.evening}</div>
              </div>
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Itinerary;
