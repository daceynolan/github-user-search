import React from "react";

import SearchBar from "components/SearchBar";
import octocat from "images/octocat.png";

const Banner = (props) => {
  return (
    <div className="flex flex-col items-center p-8 bg-gray-300 ">
      <img className="w-32 mb-4" src={octocat} alt="GitHub logo" />
      <SearchBar onFormSubmit={props.onFormSubmit} />
    </div>
  );
};

export default Banner;
