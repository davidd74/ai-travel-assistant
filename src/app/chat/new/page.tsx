"use client";

import axios from "axios";
import React, { useEffect } from "react";
import "animate.css";
import ChatSidebar from "../ChatSidebar";
import Quiz from "./Quiz";

const Page = () => {
  const [chatMessage, setChatMessage] = React.useState("");
  const [messageCollection, setMessageCollection] = React.useState<any[]>([]);
  const ref = React.useRef<HTMLDivElement>(null);

  const submitMessageHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const userMessage = { role: "user", content: chatMessage };
      setMessageCollection((prevMessages) => [...prevMessages, userMessage]);
      localStorage.setItem(
        "messageCollection",
        JSON.stringify(messageCollection)
      );
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
    <div className="font-noto font-bold flex justify-center">
      <ChatSidebar />
      <Quiz />
    </div>
  );
};

export default Page;
