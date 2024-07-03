import React from "react";
import ChatSidebar from "../ChatSidebar";
import ChatWindow from "./ChatWindow";
import Itinerary from "./Itinerary";

const page = () => {
  return (
    <div className="relative flex h-screen max-h-screen">
      <ChatSidebar />
      <ChatWindow />
      <Itinerary display="hidden md:block" />
    </div>
  );
};

export default page;
