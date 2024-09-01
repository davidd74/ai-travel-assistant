import HamburgerIcon from "@/public/icons/HamburgerIcon";
import NewChatIcon from "@/public/icons/NewChatIcon";
import Link from "next/link";
import React from "react";

const ChatSidebar = () => {
  return (
    <div className="z-10 hidden md:flex pt-6 flex-col w-16 justify-start items-center h-screen overflow-hidden px-6 gap-y-6 bg-light-grey">
      <HamburgerIcon />
      <Link href="/chat/new">
        <NewChatIcon />
      </Link>
    </div>
  );
};

export default ChatSidebar;
