import React from "react";

const SearchBar = ({ setSearch }) => {
  return (
    <input
      className="search-input"
      type="text"
      placeholder="Search by name or email..."
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default SearchBar;