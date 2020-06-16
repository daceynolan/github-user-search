import React from "react";

const CenteringLayout = (props) => {
  return (
    <div className="flex items-center justify-center items-center ">
      {props.children}
    </div>
  );
};

export default CenteringLayout;
