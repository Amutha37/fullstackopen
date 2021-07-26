import React, { Fragment, useState, useEffect } from "react";
// import { SearchBar } from "./components/SearchBar";

import SelectedCountry from "./components/SelectedCountry";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [filteredList, setfilteredList] = useState([]);

  // const [multiList, setMultiList] = useState(false);
  // fetch data

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setData(response.data);
    });
  }, []);
  // onchange input
  const handleSearch = (event) => {
    setQuery(event.target.value);
    // filtering search list
    const filtered = data.filter((row) => {
      return row.name.toLowerCase().includes(query.toLowerCase());
    });
    setfilteredList(filtered);
  };

  return (
    <Fragment>
      <h2>
        Search by country : <input onChange={handleSearch} />
      </h2>

      {filteredList.length > 10 ? (
        <p> "Too many matches, specify another filter" </p>
      ) : (
        <SelectedCountry filteredList={filteredList} />
      )}
    </Fragment>
  );
}

export default App;
