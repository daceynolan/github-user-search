import React from "react";

const CenteringLayout: React.FunctionComponent = (props) => {
  return (
    <div
      className="flex items-center justify-center items-center mt-4 mb-4"
      data-testid="centering-layout"
    >
      {props.children}
    </div>
  );
};

export default CenteringLayout;
