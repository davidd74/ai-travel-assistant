"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import AirplaneIcon from "@/public/icons/AirplaneIcon";
import "animate.css";

const Page = () => {
  const [chatMessage, setChatMessage] = React.useState("");
  const [messageCollection, setMessageCollection] = React.useState<any[]>([]);
  const ref = React.useRef<HTMLDivElement>(null);

  const itenary = [
    {
      day: 1,
      morning: "Arrive in Split and check into your accommodation.",
      afternoon:
        "Explore the historic Diocletian's Palace and wander through the narrow streets of the Old Town.",
      evening: "Enjoy a traditional Croatian dinner at a local restaurant.",
      destination: "Split",
      budget: "500euros",
      activities: ["exploration of nature", "partying"],
    },
    {
      day: 2,
      morning:
        "Take a morning hike in the nearby Marjan Forest Park, enjoying the natural beauty and stunning views of the city and the Adriatic Sea.",
      afternoon:
        "Visit the beautiful Bačvice Beach and relax in the sun or try some water activities.",
      evening:
        "Experience the vibrant nightlife of Split by visiting some of the popular bars and clubs in the city center.",
      destination: "Split",
      budget: "500euros",
      activities: ["exploration of nature", "partying"],
    },
    {
      day: 3,
      morning:
        "Enjoy a final breakfast in Split before checking out of your accommodation.",
      afternoon: "",
      evening: "",
      destination: "Split",
      budget: "500euros",
      activities: ["exploration of nature", "partying"],
    },
  ];

  const submitMessageHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const userMessage = { role: "user", content: chatMessage };
      setMessageCollection((prevMessages) => [...prevMessages, userMessage]);
      setChatMessage("");

      const response = await axios.post("/api/ai-assistant", {
        message: [...messageCollection, userMessage],
      });

      const assistantMessage = {
        role: "assistant",
        content: response.data.content[0].text,
      };
      setMessageCollection((prevMessages) => [
        ...prevMessages,
        assistantMessage,
      ]);
      console.log(response.data.content[0].text);
    } catch (error) {
      console.error("Error submitting message:", error);
    }
  };

  useEffect(() => {
    if (messageCollection.length) {
      ref.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [messageCollection.length]);

  return (
    <div className="font-poppins">
      <div className="p-2 h-[55px] flex items-center">
        <Link href="/" className="font-semibold">
          Go home
        </Link>
      </div>
      <div className="flex">
        <div className="hidden md:block md:w-[265px] text-black chat-screen-height border-t-[1px] border-r-2 border-gray-300 shadow-sm ">
          sidebar
        </div>
        <div className="flex w-full border-t-[1px] border-gray-300">
          <div className="w-full md:w-2/3 relative border-r-2 shadow-sm bg-light-background">
            <div className="bg-light-box_bg py-3 px-4 border-b-2 flex shadow-sm gap-2 items-center justify-between">
              <div className="flex flex-col gap-2 items-center">
                <div className="flex gap-4 items-center">
                  <Image
                    src={"/images/assistant-pfp.webp"}
                    width={300}
                    height={300}
                    alt="assistant-pfp"
                    className="rounded-full aspect-square w-10"
                  />
                  <span className="font-semibold bg-light">
                    Travel Assistant
                    <div className="text-green-500 font-semibold flex gap-2 items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Online</span>
                    </div>
                  </span>
                </div>
              </div>
            </div>
            <div className="relative overflow-x-hidden overflow-y-auto border-gray-300 chat-window-h">
              <div className="flex flex-col items-center relative">
                <div className="mb-12 mt-12 flex flex-col items-start gap-y-4 chat-layout-container">
                  <div className="rounded-2xl rounded-tl-none bg-gray-200  max-w-[80%] md:max-w-[75%] p-4 mb-2">
                    Ask me anything.
                  </div>
                  {messageCollection.map((message, index) => (
                    <div
                      className={`rounded-2xl max-w-[90%] md:max-w-[75%] animate__animated animate__fadeIn  p-4 ${
                        message.role === "user"
                          ? "self-end bg-light-primary_bg rounded-tr-none text-white font max-w-[55%]"
                          : "rounded-tl-none bg-gray-200 max-w-[75%]"
                      }`}
                      key={index}
                    >
                      {message.content}
                    </div>
                  ))}
                </div>
              </div>
              <div ref={ref} />
            </div>
            <div className="bg-light-background ">
              <div className="flex justify-center gap-2 flex-col md:py-3">
                <form
                  className="flex gap-2 justify-center chat-layout-container"
                  onSubmit={submitMessageHandler}
                >
                  <input
                    type="text"
                    placeholder="Got any travel-related questions? Feel free to ask."
                    className="caret-light-primary bg-light-box_bg focus:outline-none border-2 border-gray-200 py-1 md:py-3.5 rounded-full px-4 w-full"
                    onChange={(e) => setChatMessage(e.target.value)}
                    value={chatMessage}
                  />
                  <button
                    type="submit"
                    className={`bg-light-primary p-4 aspect-square rounded-full flex justify-center items-center transition-all duration-200 ease-linear`}
                    disabled={chatMessage.length < 1}
                  >
                    <AirplaneIcon />
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="hidden md:block md:w-1/3">recommendations here</div>
        </div>
      </div>
    </div>
  );
};

export default Page;
