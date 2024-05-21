import Airplane2DIcon from "@/public/icons/Airplane2DIcon";
import MapIcon from "@/public/icons/MapIcon";
import Image from "next/image";
import React from "react";
import ChatFnButton from "src/ElementComponents/ChatFnButton";
import Quiz from "src/app/chat/new/Quiz";

const ChatWindow = () => {
  return (
    <div className="flex justify-center items-center w-2/3">
      {/* <Image
        src={"/images/assistant-pfp.png"}
        width={180}
        height={180}
        priority
        alt="assistant illustration"
        className="border-light-grey border-2 rounded-full"
      />

      <div className="flex flex-col gap-6 w-full items-center">
        <ChatFnButton
          text="Where to go next?"
          icon={<Airplane2DIcon />}
          fn={() => window.alert("Where to go next?")}
        />
        <ChatFnButton
          text="Create itinerary"
          icon={<MapIcon />}
          fn={() => window.alert("Where to go next?")}
        />
        <ChatFnButton
          text="Where to go next?"
          icon={<Airplane2DIcon />}
          fn={() => window.alert("Where to go next?")}
        />
      </div> */}

      <Quiz />
    </div>
  );
};

export default ChatWindow;
