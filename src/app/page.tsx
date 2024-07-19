import Link from "next/link";
import React from "react";
import { Toaster } from "react-hot-toast";
import ChatSidebar from "./chat/ChatSidebar";
import AssistantLarge from "@/public/icons/AssistantLarge";

const page = () => {
  return (
    <div className="flex">
      <ChatSidebar />
      <div className="flex w-full mt-[90px] justify-center">
        <div className="flex flex-col gap-3 items-center">
          <h1 className="text-center font-semibold text-6xl leading-[75px]">
            Discover the world with{" "}
            <div className="text-light-primary">Travel-Assistant.pro</div>
          </h1>
          <p className="text-center max-w-[500px]">
            AI-powered itineraries tailored just for you. Plan, book, and embark
            on your perfect adventure effortlessly
          </p>

          <Link href="/chat/new">
            <button
              type="submit"
              className="font-medium rounded-[8px] transition-all duration-200 ease-linear hover:bg-light-primary/80 px-4 py-3 bg-light-primary text-white mt-4"
            >
              Create new itinerary
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
