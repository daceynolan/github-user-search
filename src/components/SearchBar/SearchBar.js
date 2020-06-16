import React, { useState } from "react";

import Button from "components/Button";
import Input from "components/Input";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const onInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="flex justify-center">
      <form onSubmit={(e) => onFormSubmit(e)}>
        <Input onChange={(event) => onInputChange(event)} value={searchTerm} />
        <Button />
      </form>
    </div>
  );
};

export default SearchBar;
