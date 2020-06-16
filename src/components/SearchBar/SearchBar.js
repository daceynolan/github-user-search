import React, { useState } from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const onInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="search-bar">
      <form onSubmit={(e) => onFormSubmit(e)}>
        <input
          className="search-bar__input"
          placeholder="Search"
          type="text"
          value={searchTerm}
          onChange={onInputChange}
        />
      </form>
    </div>
  );
};

export default SearchBar;
