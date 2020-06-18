import React from "react";
import { render } from "@testing-library/react";

import Input from "./Input";

describe("<Input/>", () => {
  test("handles className prop", () => {
    const { getByTestId } = render(
      <Input className="custom-class another-custom-class" />
    );
    const input = getByTestId("input");
    expect(input).toHaveClass("input");
    expect(input).toHaveClass("custom-class");
    expect(input).toHaveClass("another-custom-class");
  });

  test("passes through all other props", () => {
    const { getByTestId } = render(<Input id="input" />);
    const input = getByTestId("input");
    expect(input).toHaveAttribute("id", "input");
  });
});
