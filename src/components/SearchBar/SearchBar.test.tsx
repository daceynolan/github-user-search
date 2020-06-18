import React from "react";
import { render, fireEvent } from "@testing-library/react";

import SearchBar from "./SearchBar";

describe("<SearchBar/>", () => {
  test("handles form submit", () => {
    const mockCallback = jest.fn();
    const { getByTestId } = render(<SearchBar onFormSubmit={mockCallback} />);
    const userInput = getByTestId("userInput");
    fireEvent.change(userInput, { target: { value: "Dacey" } });
    const submit = getByTestId("submit");
    fireEvent.click(submit);
    expect(mockCallback).toHaveBeenCalledTimes(1);
    expect(mockCallback).toBeCalledWith("Dacey");
  });
});
