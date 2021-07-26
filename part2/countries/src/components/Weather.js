import React, { useEffect, useState } from "react";
import axios from "axios";
// Api key
const API_key = process.env.REACT_APP_API_KEY;

export const Weather = ({ countryname }) => {
  const [weather, setWeather] = useState([{}]);

  // const { country } = props;
  useEffect(() => {
    getweather(countryname, API_key);
  }, [countryname]);

  const getweather = (name, key) => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${key}&query=${name}`
      )
      .then((response) => {
        setWeather(response.data.current);
      })
      .catch((error) => {
        return <p>{error}</p>;
      });
  };

  return (
    <div className="weatherdisplay">
      {weather ? (
        <ul>
          <li>Temperature : {weather.temperature} ℃</li>
          <li>
            <img
              src={weather.weather_icons}
              alt={weather.weather_descriptions}
            />
          </li>
          <li>
            Wind : {weather.wind_speed} km/h direction :{weather.wind_dir}
          </li>
        </ul>
      ) : null}
    </div>
  );
};
