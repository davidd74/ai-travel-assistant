import React from "react";

interface ChatFnButtonProps {
  text: string;
  icon: React.ReactNode;
  fn: () => void;
}

const ChatFnButton = (props: ChatFnButtonProps) => {
  return (
    <button onClick={props.fn} className="button-fn rounded-lg" type="button">
      {props.icon}
      <span className="translate-y-[1px]">{props.text}</span>
    </button>
  );
};

export default ChatFnButton;
