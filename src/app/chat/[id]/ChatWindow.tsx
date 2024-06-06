"use client";

import Airplane2DIcon from "@/public/icons/Airplane2DIcon";
import { Textarea } from "@nextui-org/react";
import React from "react";
import Quiz from "src/app/chat/new/Quiz";

const ChatWindow = () => {
  const textArea = React.createRef<HTMLTextAreaElement>();

  return (
    <div className="w-3/5 pl-[65px] bg-yellow-500 relative flex justify-center">
      <div className="ml-[64px] absolute bottom-[15px] py-4 left-0 right-0 bg-red-500 flex justify-center">
        <div className="w-2/3 relative">
          <textarea
            placeholder="Ask me anything..."
            rows={1}
            ref={textArea}
            onInput={(event) => {
              textArea.current!.style.height = "auto";
              let scHeight = (event.target as HTMLInputElement).scrollHeight;

              if (scHeight > 150) {
                textArea.current!.style.height = "150px";
                textArea.current!.style.overflowY = "auto";
              } else {
                textArea.current!.style.height = `${scHeight}px`;
                textArea.current!.style.overflowY = "hidden";
              }
            }}
            className="py-4 rounded-[8px] pl-3 w-full bg-[#F9F9F9] mt-4 outline-none font-medium chat-textarea resize-none border-[3px] border-light-border_lighter"
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
