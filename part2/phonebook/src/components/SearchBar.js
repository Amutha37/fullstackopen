import React from "react";

const SearchBar = ({ handlesearch, value }) => {
  return (
    <>
      <label>Search by name :</label>
      <input
        type="text"
        name="name"
        value={value}
        placeholder="search by name..."
        onChange={handlesearch}
        autoComplete="off"
      />
    </>
  );
};

export default SearchBar;
