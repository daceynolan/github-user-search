import React from "react";
import { render } from "@testing-library/react";

import Avatar from ".";

describe("<Avatar/>", () => {
  test("handles src prop", () => {
    const { getByTestId } = render(
      <Avatar avatar="example_image" alt="example image" />
    );
    const img = getByTestId("avatar");
    expect(img).toHaveAttribute("src", "example_image");
  });
  test("handles alt prop", () => {
    const { getByTestId } = render(
      <Avatar avatar="example_image" alt="example image" />
    );
    const img = getByTestId("avatar");
    expect(img).toHaveAttribute("alt", "example image");
  });
});
