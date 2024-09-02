import React from "react";
import ChatSidebar from "./ChatSidebar";
import ChatWindow from "./ChatWindow";
import Itinerary from "./Itinerary";

const page = () => {
  return (
    <div className="relative flex h-screen max-h-screen">
      <ChatSidebar />
      <ChatWindow />
    </div>
  );
};

export default page;
