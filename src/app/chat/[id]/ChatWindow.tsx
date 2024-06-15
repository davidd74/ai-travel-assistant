"use client";

import Airplane2DIcon from "@/public/icons/Airplane2DIcon";
import Image from "next/image";
import React, { useEffect } from "react";

const ChatWindow = () => {
  const textArea = React.createRef<HTMLTextAreaElement>();

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

  return (
    <div className="w-full pt-12 pb-4 md:pl-12 relative flex flex-col h-screen md:items-center px-4 md:px-0">
      <div className="md:ml-[64px] chat-height chat-width">
        {/* itinerary card */}
        <div className="w-full md:w-3/5 flex gap-3">
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
              className="w-full rounded-t-[8px]"
            />
            <p className="text-[#00526C] text-sm pt-3 pb-1">Aug 10 - Aug 17</p>
            <h4 className="text-xl font-semibold">
              Cultural Tapestry of Spain.
            </h4>
            <p className="text-[rgba(0,0,0,0.6)] text-sm font-medium w-11/12">
              Experience the Allure of Spain: Rich Culture, Stunning Landscapes,
              and More! Vibrant Culture and Exquisite Cuisine! Build your best
              memories in one of the magic places.
            </p>
            <button className="w-fit mt-4 px-4 py-2 rounded-md text-white bg-light-primary text-sm hover:bg-light-primary/80 transition-all duration-300 ease-linear">
              Book Now
            </button>
          </div>
        </div>
        <div className="mt-16 space-y-12">
          <div className="flex gap-3 items-center">
            <Image
              width={32}
              height={32}
              src="/images/user-pfp.jpg"
              alt="assistant pfp"
              className="aspect-square w-[32px] h-[32px] border-1 border-gray-500 rounded-full"
            />
            <p className="w-full md:w-1/2">Can you tell me more about Zrce beach?</p>
          </div>
          <div className="flex gap-3 items-start">
            <Image
              width={32}
              height={32}
              src="/images/assistant-pfp.png"
              alt="assistant pfp"
              className="aspect-square w-[32px] h-[32px] border-1 border-gray-500 rounded-full self-start"
            />
            <p className="w-4/5 md:w-1/2 flex items-center">
              Zrce Beach is a popular beach destination located on the island of
              Pag in Croatia, along the Adriatic Sea. It is renowned for its
              vibrant party atmosphere, lively music festivals, and beautiful
              surroundings.
            </p>
          </div>
        </div>
      </div>

      <div className="chat-wrapper md:ml-[43px] absolute bottom-[10px] left-0 right-0  pb-2 flex justify-center">
        <div className="px-4 md:px-0 w-full md:w-4/5 relative">
          <textarea
            placeholder="Ask me anything..."
            rows={1}
            ref={textArea}
            onInput={inputHandler}
            className="caret-light-primary_darker py-4 rounded-[8px] pl-3 pr-14 w-full bg-[#F9F9F9] mt-4 outline-none font-medium chat-textarea resize-none border-[3px] border-light-border_lighter placeholder:text-[#808080] placeholder:font-normal"
            style={{ maxHeight: "150px" }}
          ></textarea>

          <button className="absolute right-[30px] top-1/2 translate-y-[-35%]">
            <Airplane2DIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
