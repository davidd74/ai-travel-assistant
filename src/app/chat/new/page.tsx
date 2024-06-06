"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import AirplaneIcon from "@/public/icons/AirplaneIcon";
import "animate.css";
import NewChatIcon from "@/public/icons/NewChatIcon";
import HamburgerIcon from "@/public/icons/HamburgerIcon";
import ChatSidebar from "../ChatSidebar";
import ChatWindow from "../[id]/ChatWindow";
import Quiz from "./Quiz";

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
    }
  }, [messageCollection.length]);

  return (
    <div className="font-noto font-bold flex">
      <ChatSidebar />
      <Quiz />
      {/* <ChatWindow /> */}
    </div>
  );
};

export default Page;
