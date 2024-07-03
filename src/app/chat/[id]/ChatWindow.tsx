"use client";

import Airplane2DIcon from "@/public/icons/Airplane2DIcon";
import HamburgerIcon from "@/public/icons/HamburgerIcon";
import axios from "axios";
import Image from "next/image";
import React, { useEffect } from "react";
import Itinerary from "./Itinerary";

const ChatWindow = () => {
  const textArea = React.createRef<HTMLTextAreaElement>();
  const div = React.useRef<HTMLDivElement>(null);
  const [chatMessage, setChatMessage] = React.useState<string>("");
  const [view, setView] = React.useState<string>("chat");
  const [conversation, setConversation] = React.useState([
    { role: "system", content: "You are Bob. Bob is extremely nice." },
  ]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const userMessage = { role: "user", content: chatMessage };
      const updatedConversation = [...conversation, userMessage];
      setConversation(updatedConversation);
      setChatMessage("");

      const response = await axios.post("/api/ai-assistant", {
        messages: updatedConversation,
      });

      console.log(response.data.choices[0].message.content);
      setConversation([
        ...updatedConversation,
        {
          role: "assistant",
          content: response.data.choices[0].message.content,
        },
      ]);

      textArea.current!.style.height = "auto";
    } catch (error) {
      console.error("Error submitting message:", error);
    }
  };

  const inputHandler = (event: React.FormEvent) => {
    textArea.current!.style.height = "auto";
    let scHeight = (event.target as HTMLInputElement).scrollHeight;

    if (scHeight > 150) {
      textArea.current!.style.height = "140px";
      textArea.current!.style.overflowY = "auto";
    } else {
      textArea.current!.style.height = `${scHeight + 5}px`;
      textArea.current!.style.overflowY = "hidden";
    }
  };

  useEffect(() => {
    textArea.current!.focus();
  }, []);

  useEffect(() => {
    if (chatMessage === "") {
      textArea.current!.style.height = "auto";
    }
  }, [chatMessage]);

  useEffect(() => {
    if (conversation.length) {
      setTimeout(() => {
        div.current?.scrollIntoView({ behavior: "smooth", block: "end" });
      }, 100); // Adjust the delay as needed
    }
  }, [conversation.length]);

  return (
    <div className="w-full md:pt-4 md:pl-12 relative overflow-y-auto flex flex-col h-screen max-h-screen md:items-start md:ml-12 px-4 md:px-2 justify-between">
      <nav className="flex gap-4 py-2.5 fixed shadow-sm md:hidden left-0 top-0 w-full justify-center bg-light-background border-b-2 items-center">
        <button className="bg-light-box_bg rounded-lg p-1 shadow-sm border-2 hover:border-light-border transition-all duration-500 ease-out absolute left-4">
          <HamburgerIcon />
        </button>
        <button
          onClick={() => setView("chat")}
          className="bg-light-box_bg border-2 shadow-sm hover:border-light-border transition-all duration-500 ease-out py-2 px-4 rounded-lg cursor-pointer"
        >
          AI Chat
        </button>
        <button
          onClick={() => setView("itinerary")}
          className="bg-light-box_bg border-2 shadow-sm hover:border-light-border transition-all duration-500 ease-out py-2 px-4 rounded-lg cursor-pointer"
        >
          Itinerary
        </button>
      </nav>
      <div className="h-full flex flex-col justify-between mb-[50px]">
        {view === "chat" ? (
          <>
            <div className="md:ml-[20px] md:mt-0  chat-width chat-window mb-4">
              <div className="mt-4 space-y-8">
                <div className="chat-width mt-[80px] md:mt-0 flex gap-3">
                  <Image
                    width={32}
                    height={32}
                    src="/images/assistant-pfp.png"
                    alt="assistant pfp"
                    className="aspect-square w-[32px] h-[32px] border-1 border-gray-500 rounded-full"
                  />
                  <div className="flex flex-col">
                    <Image
                      src={"/images/tapestry.jpg"}
                      width={600}
                      height={600}
                      alt="Cultural Tapestry of Spain."
                      className="w-full lg:w-3/5 rounded-t-[8px]"
                    />
                    <p className="text-[#00526C] text-sm pt-3 pb-1">
                      Aug 10 - Aug 17
                    </p>
                    <h4 className="text-xl font-semibold lg:w-3/5">
                      Cultural Tapestry of Spain.
                    </h4>
                    <p className="text-[rgba(0,0,0,0.6)] text-sm font-medium w-11/12 lg:w-3/5 pr-2">
                      Experience the Allure of Spain: Rich Culture, Stunning
                      Landscapes, and More! Vibrant Culture and Exquisite
                      Cuisine! Build your best memories in one of the magic
                      places.
                    </p>
                    <button className="w-fit mt-4 px-4 py-2 rounded-md text-white bg-light-primary text-sm hover:bg-light-primary/80 transition-all duration-300 ease-linear">
                      Book Now
                    </button>
                  </div>
                </div>
                {conversation.slice(1).map((message, index) => (
                  <div key={index} className={`flex gap-3 items-center`}>
                    {message.role === "assistant" ? (
                      <Image
                        width={32}
                        height={32}
                        src="/images/assistant-pfp.png"
                        alt="assistant pfp"
                        className="self-start aspect-square w-[32px] h-[32px] border-1 border-gray-500 rounded-full"
                      />
                    ) : (
                      <Image
                        width={32}
                        height={32}
                        src="/images/user-pfp.jpg"
                        alt="assistant pfp"
                        className="aspect-square w-[32px] h-[32px] border-1 border-gray-500 rounded-full"
                      />
                    )}
                    <p className="w-full md:w-1/2">{message.content}</p>
                  </div>
                ))}
              </div>
              <div ref={div}></div>
            </div>
            <div className="chat-wrapper left-0 right-0 flex justify-center relative  bg-light-background">
              <form className="px-4 md:px-0 w-full md:w-11/12 md:relative">
                <textarea
                  placeholder="Ask me anything..."
                  rows={1}
                  ref={textArea}
                  onInput={inputHandler}
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  className="caret-light-primary_darker py-4 rounded-[8px] pl-3 pr-14 w-full bg-[#F9F9F9] mt-4 outline-none font-medium chat-textarea resize-none border-[3px] border-light-border_lighter placeholder:text-[#808080] placeholder:font-normal"
                  style={{ maxHeight: "150px" }}
                ></textarea>
                <button
                  onClick={sendMessage}
                  className="absolute right-[20px] top-1/2 translate-y-[-35%]"
                >
                  <Airplane2DIcon />
                </button>
              </form>
            </div>
          </>
        ) : (
          <>
            <Itinerary display="block md:hidden" />
          </>
        )}
      </div>
    </div>
  );
};

export default ChatWindow;
