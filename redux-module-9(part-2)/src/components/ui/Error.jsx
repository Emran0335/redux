import React from "react";

const Error = ({ message }) => {
  return (
    <div className="bg-red-100 py-1 rounded-md px-2 text-red-700 text-center">
      {message}
    </div>
  );
};

export default Error;
