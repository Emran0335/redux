/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import headerImg from "../assets/dribbble.svg";

const Header = () => {
  return (
    <>
      <header className="w-full mx-auto p-8 bg-slate-400 text-white mb-4">
        <div className="flex justify-between items-center">
          <img src={headerImg} alt="logo" className="w-[40px] h-[40] rounded-lg text-white" />
          <div className="flex space-x-2 items-center">
            <a href="#" className="cursor-pointer hover:text-slate-300 transi">
              Home
            </a>
            <button className="bg-blue-700 hover:bg-blue-400 py-4 px-8 rounded-full">Login</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
