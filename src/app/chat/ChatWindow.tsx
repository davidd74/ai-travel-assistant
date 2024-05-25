import Airplane2DIcon from "@/public/icons/Airplane2DIcon";
import MapIcon from "@/public/icons/MapIcon";
import Image from "next/image";
import React from "react";
import ChatFnButton from "src/ElementComponents/ChatFnButton";
import Quiz from "src/app/chat/new/Quiz";

const ChatWindow = () => {
  return (
    <div className="flex justify-center items-center w-full layout-container">
      <Quiz />
    </div>
  );
};

export default ChatWindow;
