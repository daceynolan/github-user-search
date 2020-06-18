import React from "react";
import { render } from "@testing-library/react";

import UserCard from "./UserCard";

describe("<UserCard/>", () => {
  test("passes through all other props", () => {
    const { getByTestId } = render(
      <UserCard
        user={{
          html_url: "example_url",
          avatar_url: "example_avatar",
          login: "dacey",
          id: 1234,
        }}
      />
    );
    const userLogin = getByTestId("user-login");
    expect(userLogin).toHaveTextContent("dacey");
  });
});
