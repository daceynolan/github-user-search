import React from "react";

const Input = ({ ...props }) => {
  return (
    <input
      className="border-2 border-gray-400 px-3 py-2 font-medium rounded-lg text-gray-600 hover:border-teal-500 focus:border-teal-500 focus:outline-none"
      placeholder="Search"
      type="text"
      {...props}
    />
  );
};

export default Input;
