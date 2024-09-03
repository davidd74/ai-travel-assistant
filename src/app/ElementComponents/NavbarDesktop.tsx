import Link from "next/link";
import React from "react";

const NavbarDesktop = () => {
  const linkClass =
    "rounded-lg border-2 transition-all duration-200 ease-linear px-4 py-1 hover:border-light-primary";

  return (
    <nav className="w-full pt-4 pr-4 fixed h-[60px] z-50 top-0 left-0 bg-light-background">
      <ul className="flex text-md w-full justify-end gap-3">
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
      </ul>
    </nav>
  );
};

export default NavbarDesktop;
