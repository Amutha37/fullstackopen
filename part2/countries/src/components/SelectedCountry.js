import React, { Fragment } from "react";

import Countryinfo from "./Countryinfo";
import CountryList from "./CountryList";

const SelectedCountry = ({ filteredList }) => {
  return (
    <Fragment>
      {filteredList.length === 1 ? (
        <Countryinfo country={filteredList[0]} />
      ) : (
        filteredList.map((country) => {
          return (
            <CountryList
              key={country.name}
              country={country}
              filteredList={filteredList}
            />
          );
        })
      )}
    </Fragment>
  );
};
export default SelectedCountry;
