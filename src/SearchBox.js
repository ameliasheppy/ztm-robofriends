import React from "react";

const SearchBox = ({ searchField, searchChange }) => {
  return (
    <div className="pa2 b--green bg-lightest-blue ">
      <input
        type="search"
        placeholder="search robots"
        onChange={searchChange}
      />
      ;
    </div>
  );
};
export default SearchBox;
