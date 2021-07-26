import React from "react";
import { Weather } from "./Weather";

function Countryinfo({ country }) {
  return (
    <div>
      <table className="dml_table" cellPadding={0} cellSpacing={0}>
        <thead className="sticky-thc">
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
          <tr key={country.name}>
            <td>{country.name}</td>
            <td>{country.capital}</td>
            <td>{country.population.toLocaleString()}</td>
            <td>
              <ul>
                {country.languages.map((speak) => (
                  <li key={speak.name}> {speak.name}</li>
                ))}
              </ul>
            </td>
            <td>
              <img
                src={country.flag}
                width="180"
                // height="100"
                alt={`${country.name} flag`}
              />
            </td>
            <td>
              <Weather countryname={country.name} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Countryinfo;
