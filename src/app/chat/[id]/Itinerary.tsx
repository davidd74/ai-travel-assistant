"use client";

import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

const Itinerary = () => {
  let msg = "david here";
  const data = [
    {
      day: 1,
      morning: "Arrive in Split and check into your accommodation.",
      afternoon:
        "Explore the historic Diocletian's Palace and wander through the narrow streets of the Old Town.",
      evening: "Enjoy a traditional Croatian dinner at a local restaurant.",
      daySummary: "Arrival and beach party at the beach",
    },
    {
      day: 2,
      morning:
        "Take a morning hike in the nearby Marjan Forest Park, enjoying the natural beauty and stunning views of the city and the Adriatic Sea.",
      afternoon:
        "Visit the beautiful Bačvice Beach and relax in the sun or try some water activities.",
      evening:
        "Experience the vibrant nightlife of Split by visiting some of the popular bars and clubs in the city center.",
      daySummary: "Morning hike - Marjan Forest Park",
    },
    {
      day: 3,
      morning: "Enjoy a traditional Croatian dinner at a local restaurant.",
      afternoon:
        "Explore the historic Diocletian's Palace and wander through the narrow streets of the Old Town.",
      evening:
        "Take a morning hike in the nearby Marjan Forest Park, enjoying the natural beauty and stunning views of the city and the Adriatic Sea.",
      daySummary: "Morning hike - Marjan Forest Park",
    },
  ];

  return (
    <div className="w-3/5 bg-light-card_bg px-12 pt-12 hidden md:block">
      <Accordion variant="splitted">
        {data.map((object, index) => (
          <AccordionItem
            key={index}
            aria-label={`Day ${index + 1}`}
            title={`Day ${index + 1}`}
            subtitle={object.daySummary}
            style={{
              backgroundColor: "white",
              margin: "10px 0",
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

        {/* <AccordionItem
          key="1"
          aria-label="Day 1"
          title="Day 1"
          subtitle="Arrival and beach party at the beach"
          style={{
            backgroundColor: "white",
            margin: "10px 0",
          }}
        >
          <div className="">{msg}</div>
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Day 2"
          title="Day 2"
          style={{ backgroundColor: "white", margin: "" }}
        >
          <div
            style={{
              // backgroundColor: "#F0F4F9",
              height: "100%",
              margin: "10px 0",
            }}
          >
            {msg}
          </div>
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="Day 3"
          title="Day 3"
          style={{ backgroundColor: "white", margin: "10px 0" }}
        >
          <div style={{ height: "100%" }}>{msg}</div>
        </AccordionItem> */}
      </Accordion>
    </div>
  );
};

export default Itinerary;
