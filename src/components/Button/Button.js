import React from "react";
import cx from "classnames";

const Button = ({ className }) => {
  return <button className={cx("button", className)}>Search</button>;
};

export default Button;
