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
    <div className="flex justify-center">
      <form onSubmit={(e) => onFormSubmit(e)}>
        <input
          className="border-2 border-gray-400 hover:border-teal-400 focus:border-teal-400 focus:outline-none px-3 py-2 font-medium rounded-lg"
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
