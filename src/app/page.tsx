import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="pl-4 pt-12">
      <Link className="px-12 rounded-xl py-3.5 bg-blue-200" href="/chat/new">
        Chat
      </Link>
    </div>
  );
};

export default page;
