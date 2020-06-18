import cx from "classnames";
import React from "react";

type Props = React.HTMLAttributes<HTMLInputElement> &
  React.HTMLProps<HTMLInputElement>;

const Input: React.FunctionComponent<Props> = ({ className, ...props }) => {
  return (
    <input
      className={cx(
        "input border-2 w-full border-gray-400 px-3 py-2 font-medium rounded-lg text-gray-600 hover:border-teal-500 focus:border-teal-500 focus:outline-none",
        className
      )}
      type="text"
      data-testid="input"
      {...props}
    />
  );
};

export default Input;
