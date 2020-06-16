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
    <div className="flex justify-center">
      <form onSubmit={(event) => onFormSubmit(event)}>
        <Input onChange={(event) => onInputChange(event)} value={searchTerm} />
        <Button type="submit">Search</Button>
      </form>
    </div>
  );
};

export default SearchBar;
