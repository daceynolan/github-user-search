import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Button from "./Button";

describe("<Button/>", () => {
  test("handles type prop", () => {
    const { getByTestId } = render(<Button type="submit" />);
    const button = getByTestId("button");
    expect(button).toHaveAttribute("type", "submit");
  });

  test("passes through other props", () => {
    const { getByTestId } = render(<Button id="my-button" />);
    const button = getByTestId("button");
    expect(button).toHaveAttribute("id", "my-button");
  });

  test("handles className prop", () => {
    const { getByTestId } = render(
      <Button className="custom-class another-custom-class" />
    );
    const button = getByTestId("button");
    expect(button).toHaveClass("button");
    expect(button).toHaveClass("custom-class");
    expect(button).toHaveClass("another-custom-class");
  });

  test("renders children", () => {
    const { container } = render(<Button>Click Me</Button>);
    expect(container).toHaveTextContent("Click Me");
  });

  test("handles click", () => {
    const mockCallback = jest.fn();
    const { getByTestId } = render(<Button onClick={mockCallback} />);
    const button = getByTestId("button");
    expect(mockCallback).toHaveBeenCalledTimes(0);
    fireEvent.click(button);
    expect(mockCallback).toHaveBeenCalledTimes(1);
  });
});
