import React, { Fragment, useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'

// import SelectedCountry from "./components/SelectedCountry";
import Countryinfo from './components/Countryinfo'
import CountryList from './components/CountryList'
import axios from 'axios'
import './App.css'

function App() {
  const [data, setData] = useState([])
  const [query, setQuery] = useState('')
  const [filteredList, setfilteredList] = useState([])

  // fetch data
  // https://restcountries.eu/rest/v2/all

  useEffect(() => {
    axios.get(`http://api.weatherapi.com/rest/v1`).then((response) => {
      setData(response.data)
    })
  }, [])
  // onchange input
  const handleSearch = (event) => {
    setQuery(event.target.value)
    // filtering search list
    const filtered = data.filter((row) => {
      return row.name.toLowerCase().includes(query.toLowerCase())
    })
    setfilteredList(filtered)
  }

  return (
    <Fragment>
      <SearchBar handlesearch={handleSearch} />

      {filteredList.length > 10 ? (
        <p> "Too many matches, specify another filter" </p>
      ) : filteredList.length === 1 ? (
        <Countryinfo country={filteredList[0]} />
      ) : (
        filteredList.map((country) => {
          return (
            <CountryList
              key={country.name}
              country={country}
              filteredList={filteredList}
            />
          )
        })
      )}
    </Fragment>
  )
}

export default App
