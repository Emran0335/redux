import React from "react";
import Message from "./Message";
import { useSelector } from "react-redux";

const Messages = ({ messages = [] }) => {
  const { user } = useSelector((state) => state.auth) || {};
  const { email } = user || {};
  return (
    <div className="relative w-full h-[calc(100vh_-_197px)] p-6 overflow-y-auto flex flex-col-reverse">
      <ul className="space-y-2">
        {messages
          .slice() // is the copy of the original array
          .sort((a, b) => a.timestamp - b.timestamp)
          .map((message) => {
            const { message: lastMessage, id, sender } = message || {};
            const justify = sender.email !== email ? "start" : "end";
            return <Message key={id} message={lastMessage} justify={justify} />;
          })}
      </ul>
    </div>
  );
};

export default Messages;
