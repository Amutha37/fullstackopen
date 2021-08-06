import React, { useState } from "react";
import Countryinfo from "./Countryinfo";
import Button from "./Button";

function CountryList({ filteredList, country }) {
  const [status, setStatus] = useState(
    new Array(filteredList.length).fill(false)
  );
  const [oneIndex, setOneIndex] = useState("");
  const [show, setShow] = useState(false);

  const handleClick = (e) => {
    const countryClicked = e.target.value;

    const countryIndex = filteredList.findIndex(
      (item) => item.name === countryClicked
    );

    setOneIndex(countryIndex);
    const copy = [...status];
    copy[countryIndex] = !copy[countryIndex];
    setStatus(copy);
    setShow(!show);
  };

  return (
    <div className="Am_country_list_container">
      <div className="country_list">
        <ul key={country.name}>
          <ol>
            {country.name}
            <div className="button_list">
              <Button
                className={show ? "showing" : "closing"}
                show={show}
                value={country.name}
                handleClick={handleClick}
                status={status}
                oneIndex={oneIndex}
              />
            </div>
          </ol>
        </ul>
      </div>

      <div className="Am_country_info">
        {status[oneIndex] && show && <Countryinfo country={country} />}
      </div>
    </div>
  );
}

export default CountryList;
