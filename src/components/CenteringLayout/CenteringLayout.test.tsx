import React from "react";
import { render } from "@testing-library/react";

import CenteringLayout from "./CenteringLayout";

describe("<CenteringLayout", () => {
  test("renders children", () => {
    const { container } = render(
      <CenteringLayout>Example Text</CenteringLayout>
    );
    expect(container).toHaveTextContent("Example Text");
  });
});
