import HamburgerIcon from "@/public/icons/HamburgerIcon";
import NewChatIcon from "@/public/icons/NewChatIcon";
import React from "react";

const ChatSidebar = () => {
  return (
    <div className="pt-6 flex flex-col justify-start items-center w-fit px-4 h-screen fixed -left-0 gap-y-6 bg-light-grey">
      <HamburgerIcon />
      <NewChatIcon />
    </div>
  );
};

export default ChatSidebar;
