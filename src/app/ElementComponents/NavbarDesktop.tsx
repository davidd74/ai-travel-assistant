import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavbarDesktop = () => {
  const linkClass =
    "rounded-lg border-2 transition-all duration-200 ease-linear px-4 py-1 hover:border-light-primary";

  return (
    <nav className="w-full fixed h-[65px] z-50 top-0 left-0 bg-light-background">
      <ul className="flex h-full text-md w-full items-center justify-between px-4 gap-3">
        <Link href={"/"}>
          <Image
            src={"/images/assistant-hero.png"}
            width={40}
            height={40}
            alt="assistant"
            priority
            className="border-2 rounded-full border-gray-700 max-w-[170px] md:max-w-[220px]"
          />
        </Link>
        <div className="gap-2.5 flex">
          <li className="">
            <Link href="/" className={linkClass}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/chat" className={linkClass}>
              Current Trip
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default NavbarDesktop;
