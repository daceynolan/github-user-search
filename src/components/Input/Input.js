import cx from "classnames";
import React from "react";

const Input = ({ className, ...props }) => {
  return (
    <input
      className={cx(
        "border-2 sm:w-4/12 border-gray-400 px-3 py-2 font-medium rounded-lg text-gray-600 hover:border-teal-500 focus:border-teal-500 focus:outline-none",
        className
      )}
      type="text"
      {...props}
    />
  );
};

export default Input;
