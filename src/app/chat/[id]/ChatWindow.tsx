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
    <div className="w-3/5 pt-7 pb-4 px-8   relative flex flex-col h-screen items-center">
      <div className="ml-[64px]   chat-height chat-width">
        <div className="w-2/5 flex-col">
          <Image
            src={"/images/tapestry.jpg"}
            width={600}
            height={600}
            alt="Cultural Tapestry of Spain."
            className="w-full rounded-t-[8px]"
          />
          <p className="text-[#00526C] text-sm pt-3 pb-1">Aug 10 - Aug 17</p>
          <h4 className="text-xl font-semibold">Cultural Tapestry of Spain.</h4>
          <p className="text-[rgba(0,0,0,0.6)] text-sm font-medium">
            Experience the Allure of Spain: Rich Culture, Stunning Landscapes,
            and More! Vibrant Culture and Exquisite Cuisine! Build your best
            memories in one of the magic places.
          </p>
          <button className="mt-4 px-4 py-2 rounded-md text-white bg-light-primary text-sm hover:bg-light-primary/80 transition-all duration-300 ease-linear">
            Book Now
          </button>
        </div>
        <div className="mt-16">msg</div>
      </div>

      <div className="chat-wrapper ml-[64px] absolute bottom-[10px] left-0 right-0  pb-2 flex justify-center">
        <div className="w-2/3 relative">
          <textarea
            placeholder="Ask me anything..."
            rows={1}
            ref={textArea}
            onInput={inputHandler}
            className="caret-light-primary_darker py-4 rounded-[8px] pl-3 pr-14 w-full bg-[#F9F9F9] mt-4 outline-none font-medium chat-textarea resize-none border-[3px] border-light-border_lighter placeholder:text-[#808080] placeholder:font-normal"
            style={{ maxHeight: "150px" }}
          ></textarea>

          <button className="absolute right-[15px] top-1/2 translate-y-[-35%]">
            <Airplane2DIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
