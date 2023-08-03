import React from "react";

const Button = ({ children, handler }) => {
  return (
    <button className="bg-indigo-400 text-white px-3 py-2 rounded shadow" onClick={handler}>
      {children}
    </button>
  );
};

export default Button;
