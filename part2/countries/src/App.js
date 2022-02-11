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

  useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/all`).then((response) => {
      setData(response.data)
    })
  }, [])
  // console.log('data', data)
  // onchange input
  const handleSearch = (event) => {
    setQuery(event.target.value)
    // filtering search list
    const filtered = data.filter((row) => {
      return row.name.common.toLowerCase().includes(query.toLowerCase())
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
              key={country.name.common}
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
