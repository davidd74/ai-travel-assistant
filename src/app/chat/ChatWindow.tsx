"use client";
"use strict";

import Airplane2DIcon from "@/public/icons/Airplane2DIcon";
import HamburgerIcon from "@/public/icons/HamburgerIcon";
import axios from "axios";
import Image from "next/image";
import React, { useEffect } from "react";
import Itinerary from "./Itinerary";
import Link from "next/link";
import CloseIcon from "@/public/icons/CloseIcon";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";
import { makeBookingLink } from "../utils/makeBookingLink";
import NavbarMobile from "../ElementComponents/NavbarMobile";

const ChatWindow = () => {
  const textArea = React.createRef<HTMLTextAreaElement>();
  const router = useRouter();
  const div = React.useRef<HTMLDivElement>(null);
  const [chatMessage, setChatMessage] = React.useState<string>("");
  const [view, setView] = React.useState<string>("chat");
  const [conversation, setConversation] = React.useState([
    { role: "system", content: "" },
  ]);

  const [parsedData, setParsedData] = React.useState<any>({});
  const [openMenu, setOpenMenu] = React.useState<boolean>(false);

  const buttonClass =
    "bg-light-box_bg border-2 shadow-sm hover:border-light-border transition-all duration-500 ease-out py-2.5 px-3 text-sm sm:text-md rounded-lg cursor-pointer";

  const toggleNavbar = () => {
    setOpenMenu(!openMenu);
  };

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const userMessage = { role: "user", content: chatMessage };
      const updatedConversation = [...conversation, userMessage];
      setConversation(updatedConversation);

      // Save updated conversation to localStorage
      localStorage.setItem("conversation", JSON.stringify(updatedConversation));
      setChatMessage("");

      const response = await axios.post("/api/chat", {
        messages: updatedConversation,
        tripDetails: parsedData,
      });

      const assistantMessage = {
        role: "assistant",
        content: response.data.choices[0].message.content,
      };

      const finalConversation = [...updatedConversation, assistantMessage];
      setConversation(finalConversation);

      // Update the stored conversation with assistant's reply
      localStorage.setItem("conversation", JSON.stringify(finalConversation));

      if (textArea.current) {
        textArea.current.style.height = "auto";
      }
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

  const deleteTrip = () => {
    localStorage.clear();
    toast.success("Trip deleted");
    router.push("/chat/new");
  };

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

  useEffect(() => {
    if (textArea.current && chatMessage.length === 0) {
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

  useEffect(() => {
    const data = localStorage.getItem("itinerary");
    const dataParsed = JSON.parse(data || "{}");
    if (Object.keys(dataParsed).length > 0) {
      // double parsing because there are nested objects
      setParsedData(JSON.parse(dataParsed || "{}"));
    } else {
      toast.error("Trip not found");
      redirect("/chat/new");
    }
  }, []);

  useEffect(() => {
    const conversationData = localStorage.getItem("conversation");
    if (conversationData) {
      setConversation(JSON.parse(conversationData));
    } else {
      localStorage.setItem("conversation", JSON.stringify(conversation));
    }
  }, []);

  return (
    <>
      {parsedData.tripDetails ? (
        <>
          {/* navbar here */}
          {openMenu && <NavbarMobile toggleNavbar={toggleNavbar} />}

          <div className="w-full flex flex-col justify-between overflow-hidden">
            <nav className="bg-light-card_bg pl-4 flex items-center justify-start border-b-2 gap-3 py-3 fixed w-full top-0 left-0 md:hidden">
              <button
                className={`p-1 right-4 bg-light-box_bg absolute rounded-lg shadow-sm border-2 hover:border-light-border transition-all duration-500 ease-out`}
                onClick={toggleNavbar}
              >
                <HamburgerIcon />
              </button>

              <button onClick={() => setView("chat")} className={buttonClass}>
                AI Chat
              </button>

              <button
                onClick={() => setView("itinerary")}
                className={buttonClass}
              >
                Itinerary
              </button>

              <button
                onClick={deleteTrip}
                className={`${buttonClass} bg-red-500 text-white font-medium
                `}
              >
                Delete Trip
              </button>
            </nav>
            {view === "chat" ? (
              <>
                <div className="pl-4 chat-height overflow-y-auto chat-scrollbar flex flex-col">
                  <div className="chat-width mt-[85px] pr-6 md:mt-4 flex gap-3">
                    <Image
                      width={32}
                      height={32}
                      src="/images/assistant-pfp.png"
                      alt="assistant pfp"
                      className="aspect-square w-[32px] h-[32px] border-1 border-gray-500 rounded-full"
                    />
                    <div className="flex flex-col">
                      {parsedData?.tripDetails && (
                        <Image
                          src={`${parsedData.tripDetails?.destinationImage}`}
                          width={400}
                          height={400}
                          alt="trip destination image"
                          className="h-auto object-fill rounded-t-[8px]"
                        />
                      )}

                      <p className="text-[#00526C] text-sm pt-3 pb-1">
                        {formatDate(parsedData.tripDetails.dates.start)} -{" "}
                        {formatDate(parsedData.tripDetails.dates.end)}
                      </p>
                      <h4 className="text-xl font-semibold max-w-[400px]">
                        Trip to {parsedData.tripDetails?.destination}
                      </h4>
                      <p className="text-[rgba(0,0,0,0.6)] text-sm font-medium w-full  pr-2 max-w-[400px] mt-2">
                        {parsedData.tripDetails.dates.destinationSummary}
                      </p>
                      <div className="flex gap-3">
                        <Link
                          target="_blank"
                          className="w-fit mt-4 px-4 py-2 rounded-md text-white bg-light-primary text-sm hover:bg-light-primary/80 transition-all duration-300 ease-linear"
                          href={makeBookingLink(
                            parsedData.tripDetails?.destination,
                            parsedData.tripDetails?.dates.start,
                            parsedData.tripDetails?.dates.end,
                            parsedData.tripDetails?.travelers
                          )}
                        >
                          Book Accomodation
                        </Link>
                        <button
                          onClick={deleteTrip}
                          className={`rounded-md mt-4 text-sm  px-3 py-2 bg-red-500 text-white font-medium
                `}
                        >
                          Delete Trip
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6 mt-10">
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
                        <p
                          className="w-full md:w-1/2"
                          dangerouslySetInnerHTML={{
                            __html: message.content.replace(
                              /\*\*(.*?)\*\*/g,
                              "<strong>$1</strong>"
                            ),
                          }}
                        />
                      </div>
                    ))}
                    <div ref={div} />
                  </div>
                </div>
                <div className="flex justify-center fixed md:static w-full bottom-0 left-0">
                  <form className="px-4 md:px-0 w-full md:w-11/12 relative">
                    <textarea
                      placeholder="Ask me anything..."
                      rows={1}
                      ref={textArea}
                      onInput={inputHandler}
                      value={chatMessage}
                      onChange={(e) => setChatMessage(e.target.value)}
                      className=" caret-light-primary_darker py-4 rounded-[8px] pl-3 pr-14 w-full bg-[#F9F9F9] mt-4 outline-none font-medium chat-textarea resize-none border-[3px] border-light-border_lighter placeholder:text-[#808080] placeholder:font-normal"
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
              <Itinerary display="" parsedData={parsedData} />
            )}
          </div>
          {view !== "itinerary" && (
            <Itinerary display="hidden md:block" parsedData={parsedData} />
          )}
        </>
      ) : (
        <div>Loading your trip...</div>
      )}
    </>
  );
};

export default ChatWindow;
