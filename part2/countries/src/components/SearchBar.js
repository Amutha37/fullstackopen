import React from "react";

const SearchBar = ({ handlesearch, value }) => {
  return (
    <>
      <h2>
        Search by country : <input onChange={handlesearch} />
      </h2>
      {/* <input
        type="text"
        name="name"
        value={value}
        placeholder="search by name..."
        onChange={handlesearch}
        autoComplete="off"
      /> */}
      {/* <label> Search by name :</label>
   <input */}
    </>
  );
};

export default SearchBar;
