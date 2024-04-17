"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  const [chatMessage, setChatMessage] = React.useState("");

  return (
    <>
      <div className="p-2 h-[55px] flex items-center">
        <Link href="/" className="font-semibold">
          Go home
        </Link>
      </div>
      <div className="flex">
        <div className="md:w-[265px] text-black chat-screen-height border-t-[1px] border-r-2 border-gray-300 shadow-sm">
          sidebar
        </div>
        <div className="flex w-full border-t-[1px] border-gray-300">
          <div className="w-2/3 relative border-r-2 shadow-sm bg-light-background">
            <div className="bg-light-box_bg py-2 px-4 border-2 flex shadow-md gap-2 items-center justify-between">
              <div className="flex gap-2 items-center">
                <Image
                  src={"/images/assistant-pfp.webp"}
                  width={300}
                  height={300}
                  alt="assistant-pfp"
                  className="rounded-full aspect-square w-10"
                />
                <span className="font-semibold bg-light">
                  AI Travel Assistant
                </span>
              </div>

              <div className="text-green-500 font-semibold flex gap-2 items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Online</span>
              </div>
            </div>
            <div className="max-chat-screen-height overflow-y-auto border-gray-300 ">
              <div className="flex flex-col items-center">
                <div className="mb-24 mt-12 flex flex-col items-start gap-y-4">
                  <div className="rounded-2xl bg-gray-200 max-w-[85%] p-4 mb-2">
                    Here we are again, what are we chatting about today? Ask me
                    literally anything related to travel.
                  </div>
                  <div className="rounded-2xl bg-light-primary text-white  max-w-[90%] p-4 self-end">
                    Inspire me where to go
                  </div>
                  <div className="rounded-2xl bg-gray-200 max-w-[85%] p-4 mb-2">
                    Here we are again, what are we chatting about today? Ask me
                    literally anything related to travel.
                  </div>
                  <div className="rounded-2xl bg-light-primary text-white  max-w-[90%] p-4 self-end">
                    Inspire me where to go
                  </div>
                  <div className="rounded-2xl bg-gray-200 max-w-[85%] p-4 mb-2">
                    Here we are again, what are we chatting about today? Ask me
                    literally anything related to travel.
                  </div>
                  <div className="rounded-2xl bg-light-primary text-white  max-w-[90%] p-4 self-end">
                    Inspire me where to go
                  </div>
                  <div className="rounded-2xl bg-gray-200 max-w-[85%] p-4 mb-2">
                    Here we are again, what are we chatting about today? Ask me
                    literally anything related to travel.
                  </div>
                  <div className="rounded-2xl bg-light-primary text-white  max-w-[90%] p-4 self-end">
                    Inspire me where to go
                  </div>
                  <div className="rounded-2xl bg-gray-200 max-w-[85%] p-4 mb-2">
                    Here we are again, what are we chatting about today? Ask me
                    literally anything related to travel.
                  </div>
                  <div className="rounded-2xl bg-light-primary text-white  max-w-[90%] p-4 self-end">
                    Inspire me where to go
                  </div>
                  <div className="rounded-2xl bg-gray-200 max-w-[85%] p-4 mb-2">
                    Here we are again, what are we chatting about today? Ask me
                    literally anything related to travel.
                  </div>
                  <div className="rounded-2xl bg-light-primary text-white  max-w-[90%] p-4 self-end">
                    Inspire me where to go
                  </div>
                  <div className="rounded-2xl bg-gray-200 max-w-[85%] p-4 mb-2">
                    Here we are again, what are we chatting about today? Ask me
                    literally anything related to travel.
                  </div>
                  <div className="rounded-2xl bg-light-primary text-white  max-w-[90%] p-4 self-end">
                    Inspire me where to go
                  </div>
                </div>
                <div className="chat-layout-container bg-light-background fixed bottom-0">
                  <div className="flex justify-center gap-2 flex-col py-3">
                    <div className="flex gap-2 justify-center">
                      <input
                        type="text"
                        placeholder="Got any travel-related questions? Feel free to ask."
                        className="caret-light-primary bg-light-box_bg focus:outline-none border-2 border-gray-200 py-3.5 rounded-full px-4 w-full"
                        onChange={(e) => setChatMessage(e.target.value)}
                      />
                      <button
                        className={`bg-light-primary p-4 aspect-square rounded-full flex justify-center items-center transition-all duration-200 ease-linear`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#fff"
                          width="20px"
                          version="1.1"
                          id="Layer_1"
                          viewBox="0 0 512 512"
                        >
                          <g>
                            <g>
                              <path d="M508.645,18.449c-2.929-2.704-7.133-3.51-10.826-2.085L6.715,204.446c-3.541,1.356-6.066,4.515-6.607,8.264    c-0.541,3.75,0.985,7.496,3.995,9.796l152.127,116.747c-0.004,0.116-0.575,0.224-0.575,0.342v83.592    c0,3.851,2.663,7.393,6.061,9.213c1.541,0.827,3.51,1.236,5.199,1.236c2.026,0,4.181-0.593,5.931-1.756l56.12-37.367    l130.369,99.669c1.848,1.413,4.099,2.149,6.365,2.149c1.087,0,2.186-0.169,3.248-0.516c3.27-1.066,5.811-3.672,6.786-6.974    L511.571,29.082C512.698,25.271,511.563,21.148,508.645,18.449z M170.506,321.508c-0.385,0.36-0.7,0.763-1.019,1.163    L31.659,217.272L456.525,54.557L170.506,321.508z M176.552,403.661v-48.454l33.852,25.887L176.552,403.661z M359.996,468.354    l-121.63-93.012c-1.263-1.77-2.975-3.029-4.883-3.733l-47.29-36.163L480.392,60.86L359.996,468.354z" />
                            </g>
                          </g>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/3">recommendations here</div>
        </div>
      </div>
    </>
  );
};

export default Page;
