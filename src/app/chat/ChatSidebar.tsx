import HamburgerIcon from "@/public/icons/HamburgerIcon";
import NewChatIcon from "@/public/icons/NewChatIcon";
import React from "react";

const ChatSidebar = () => {
  return (
    <div className="hidden md:flex pt-6 flex-col w-16 justify-start items-center h-screen fixed -left-0 gap-y-6 bg-light-grey">
      <HamburgerIcon />
      <NewChatIcon />
    </div>
  );
};

export default ChatSidebar;
