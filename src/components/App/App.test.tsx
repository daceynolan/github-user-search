import React from "react";
import { render } from "@testing-library/react";
import App from ".";

describe("<App/>", () => {
  test("renders without crashing", () => {
    const { container } = render(<App />);
    expect(container.firstChild).toMatchSnapshot();
  });
  test.todo("fetches data from the GitHub API");
  test.todo("handles totalPages");
  test.todo("handles totalCount");
  test.todo("handles page increment and decrement count");
  test.todo("handles searchTerm");
});
