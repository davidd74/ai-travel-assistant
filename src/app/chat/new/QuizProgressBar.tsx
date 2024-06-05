// import React, { useEffect, useState } from "react";
// import Quiz from "./Quiz";
// import IslandIcon from "@/public/icons/IslandIcon";
// import DateIcon from "@/public/icons/DateIcon";
// import ContactsIcon from "@/public/icons/ContactsIcon";
// import CelebrateIcon from "@/public/icons/CelebrateIcon";

// interface QuizProgressBarProps {
//   quizProgress?: number;
// }

// const quizLength = 4;

// const QuizProgressBar = (props: QuizProgressBarProps) => {
//   const divsArray = Array.from({ length: quizLength });

//   const getIcon = (index: number) => {
//     const fill = (props.quizProgress as number) >= index + 1 ? "black" : "gray";
//     switch (index) {
//       case 0:
//         return <IslandIcon fill={fill} />;
//       case 1:
//         return <DateIcon fill={fill} />;
//       case 2:
//         return <ContactsIcon fill={fill} />;
//       case 3:
//         return <CelebrateIcon fill={fill} />;
//       default:
//         return null;
//     }
//   };

//   console.log(props.quizProgress);

//   return (
//     <div className="hidden md:flex">
//       {divsArray.map((_, index) => (
//         <div className="flex" key={index}>
//           <div
//             className={`border-[2px] flex items-center justify-center aspect-square w-10 md:w-14 rounded-full overflow-visible
//                 z-10 relative
//               ${
//                 (props.quizProgress as number) >= index + 1
//                   ? "border-light-primary"
//                   : "border-light-border"
//               }
//               ${index + 1 === 2 ? "translate-x-[-3px]" : ""}
//               ${index + 1 === 3 ? "translate-x-[-7px]" : ""}
//               ${index + 1 === 4 ? "translate-x-[-11px]" : ""}

//               `}
//           >
//             {getIcon(index)}
//           </div>
//           <svg
//             height="40"
//             viewBox="0 0 50 20"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//             className={`
//         transition-all duration-30 w-[50px]  ease-linear
//         ${index + 1 === 4 ? "hidden" : ""}
//         ${index + 1 === 1 ? "translate-x-[-2px]" : ""}
//         ${index + 1 === 2 ? "translate-x-[-5px]" : ""}
//         ${index + 1 === 3 ? "translate-x-[-9px] rotate-180 translate-y-3" : ""}
//       `}
//           >
//             <path
//               d="M49.1937 15.5645C35.477 27.4213 15.188 27.5881 1.27804 15.9586L0.806641 15.5645"
//               stroke={
//                 (props.quizProgress as number) >= index + 1 ? "#2F80ED" : "gray"
//               }
//               strokeWidth="1.24"
//               strokeDasharray={
//                 (props.quizProgress as number) >= index + 1 ? "" : "3 3"
//               }
//               style={{
//                 transition: "all 0.6s ease-in-out",
//               }}
//             />
//           </svg>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default QuizProgressBar;
