import React from 'react'
import { Weather } from './Weather'

function Countryinfo({ country }) {
  console.log('countryInfo', country)
  return (
    <div className='tablecontainer'>
      <table className='dml_table' cellPadding={0} cellSpacing={0}>
        <thead className='sticky-thc'>
          <tr>
            <th>Country</th>

            {/* <th>Detail</th> */}
            <th>Capital</th>
            <th>Population</th>
            <th>Languages</th>
            <th>Flag</th>
            <th>Weather</th>
          </tr>
        </thead>
        <tbody>
          {/* {country.map((info) => ( */}
          <tr key={country.name.common}>
            <td>{country.name.common}</td>
            <td>{country.capital}</td>
            <td>{country.population.toLocaleString()}</td>
            <td>
              <ul>
                {Object.keys(country.languages).map((speak, i) => (
                  <li key={i}>{country.languages[speak]}</li>
                ))}
              </ul>
            </td>
            <td>
              <img
                src={country.flags.png}
                width='180'
                height='100'
                alt={`${country.name.common} flag`}
              />
            </td>
            <td>
              <Weather countryname={country.name.common} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Countryinfo
