import CloseIcon from "@/public/icons/CloseIcon";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavbarMobile = ({ toggleNavbar }: { toggleNavbar: () => void }) => {
  return (
    <nav className="z-20 fixed bg-light-background w-full h-screen max-h-screen overflow-hidden transition-all">
      <div className="py-4">
        <div className=" border-b-2">
          <div className="flex justify-between items-center pl-4 pb-3.5">
            <Link href={"/"} className="cursor-pointer flex gap-2 items-center">
              <Image
                src={"/images/assistant-hero.png"}
                width={40}
                height={40}
                alt="assistant"
                priority
                className="border-2 rounded-full border-gray-700 max-w-[170px] md:max-w-[220px]"
              />
              <h4 className="text-lg font-semibold">Travel AI</h4>
            </Link>
            <button
              className={`p-1 right-4 bg-light-box_bg absolute rounded-lg shadow-sm border-2 hover:border-light-border transition-all duration-500 ease-out`}
              onClick={toggleNavbar}
            >
              <CloseIcon />
            </button>
          </div>
        </div>

        <ul className="p-4 text-2xl font-semibold space-y-3.5 mt-[50px]">
          <li>
            <Link
              href="/"
              className="hover:text-light-primary transition-all duration-200 ease-linear"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/chat/new"
              className="hover:text-light-primary transition-all duration-200 ease-linear"
            >
              New Trip
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarMobile;
