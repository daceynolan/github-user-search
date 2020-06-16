import React from "react";

const Button = ({ ...props }) => {
  return (
    <button
      className="border-2 border-gray-400 px-3 py-2 font-medium rounded-lg text-gray-600 bg-white hover:bg-teal-400 hover:text-white focus:outline-none"
      {...props}
    />
  );
};

export default Button;
