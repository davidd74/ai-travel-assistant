import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavbarDesktop from "../ElementComponents/NavbarDesktop";

const Hero = () => {
  return (
    <div className="flex px-4">
      <div className="flex w-full pt-5 md:mt-[90px] justify-center">
        <div className="flex flex-col gap-3 items-center">
          <h1 className="text-center font-semibold 2xl:text-6xl text-3xl md:text-4xl 2xl:leading-[75px]">
            Discover the world with <br />
            <span className="text-light-primary">AI Travel-Assistant</span>
          </h1>
          <p className="text-center w-4/5 sm:w-11/12 md:w-2/3">
            AI-powered itineraries tailored just for you. Plan and book your
            perfect adventure effortlessly
          </p>

          <Link href="/chat/new">
            <button
              type="submit"
              className="font-medium rounded-[8px] transition-all duration-200 ease-linear hover:bg-light-primary/80 px-4 py-3 bg-light-primary text-white mt-4"
            >
              Create new itinerary
            </button>
          </Link>
          <Image
            src={"/images/assistant-hero.png"}
            width={250}
            height={250}
            alt="assistant"
            className="mt-4 w-full max-w-[170px] md:max-w-[220px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
