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
      className="grid grid-cols-1 sm:grid-cols-4 gap-4 w-full max-w-screen-sm"
      onSubmit={(event) => onFormSubmit(event)}
    >
      <div className="col-span-1 sm:col-span-3">
        <Input
          className="mr-8"
          onChange={(event) => onInputChange(event)}
          value={searchTerm}
          placeholder="Search for GitHub user"
        />
      </div>
      <div className="col-span-1">
        <Button type="submit">Search</Button>
      </div>
    </form>
  );
};

export default SearchBar;
