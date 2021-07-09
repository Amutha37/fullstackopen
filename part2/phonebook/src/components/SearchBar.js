import React from "react";

const SearchBar = ({ handlesearch, value }) => {
  return (
    <>
      <label>Search by name :</label>
      <input
        type="text"
        name="name"
        id="name"
        value={value}
        placeholder="search by name..."
        onChange={handlesearch}
        autoComplete="off"
      />
      {/* <label> Search by name :</label>
   <input */}
    </>
  );
};

export default SearchBar;
