import React, { useState } from "react";

import Button from "components/Button";
import Input from "components/Input";

const SearchBar = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const onInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    props.onFormSubmit(searchTerm);
  };

  return (
    <form
      className="w-full flex justify-center"
      onSubmit={(event) => onFormSubmit(event)}
    >
      <Input
        className="mr-8"
        onChange={(event) => onInputChange(event)}
        value={searchTerm}
        placeholder="Search for GitHub user"
      />
      <Button type="submit">Search</Button>
    </form>
  );
};

export default SearchBar;
