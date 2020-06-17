import React from "react";

const CenteringLayout = (props) => {
  return (
    <div className="flex items-center justify-center items-center mt-4 mb-4">
      {props.children}
    </div>
  );
};

export default CenteringLayout;
