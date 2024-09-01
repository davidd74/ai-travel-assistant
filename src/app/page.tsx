import Link from "next/link";
import React from "react";
import { Toaster } from "react-hot-toast";
import ChatSidebar from "./chat/ChatSidebar";
import AssistantLarge from "@/public/icons/AssistantLarge";
import Image from "next/image";
import Hero from "./landing/Hero";
import Features from "./landing/Features";

const page = () => {
  return (
    <div className="flex w-full h-screen">
      <ChatSidebar />
      <div className="overflow-y-auto flex flex-col items-center w-full">
        <Hero />
        <Features />
      </div>
    </div>
  );
};

export default page;
