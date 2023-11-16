import React from "react";
import blankImg from "../../../assets/blank.svg";

const Blank = () => {
  return (
    <div className="h-[calc(100vh_-_129px)] flex md:flex-col md:space-y-4 items-center justify-center text-gray-700">
      <img src={blankImg} alt="No message" className="w-10 hidden md:block" />
      <div className="-rotate-90 md:rotate-0 min-w-[130px] md:min-w-0">
        No messages yet
      </div>
    </div>
  );
};

export default Blank;
