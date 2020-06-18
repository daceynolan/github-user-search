import React from "react";
import cx from "classnames";

type Props = React.HTMLAttributes<HTMLButtonElement> & {
  type?: "button" | "submit" | "reset";
};

const Button: React.FunctionComponent<Props> = ({
  className,
  type = "button",
  ...props
}) => {
  return (
    <button
      className={cx(
        "button block w-full border-2 border-gray-400 px-3 py-2 font-medium rounded-lg text-gray-600 bg-white hover:bg-teal-500 hover:text-white focus:outline-none",
        className
      )}
      type={type}
      data-testid="button"
      {...props}
    />
  );
};

export default Button;
