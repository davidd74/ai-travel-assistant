import * as React from "react";

function NewChatIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="42"
      height="38"
      viewBox="0 0 42 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="42" height="38" rx="8" fill="#DDE3EA" />
      <path
        d="M20 24H22V20H26V18H22V14H20V18H16V20H20V24ZM14 28C13.45 28 12.9792 27.8042 12.5875 27.4125C12.1958 27.0208 12 26.55 12 26V12C12 11.45 12.1958 10.9792 12.5875 10.5875C12.9792 10.1958 13.45 10 14 10H28C28.55 10 29.0208 10.1958 29.4125 10.5875C29.8042 10.9792 30 11.45 30 12V26C30 26.55 29.8042 27.0208 29.4125 27.4125C29.0208 27.8042 28.55 28 28 28H14ZM14 26H28V12H14V26Z"
        fill="black"
      />
    </svg>
  );
}

export default NewChatIcon;
