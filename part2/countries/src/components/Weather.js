import React, { useEffect, useState } from 'react'
import axios from 'axios'
// Api key
const API_key = process.env.REACT_APP_API_KEY

export const Weather = ({ countryname }) => {
  const [weather, setWeather] = useState([{}])

  useEffect(() => {
    const source = axios.CancelToken.source()

    getweather(countryname, API_key)

    return () => {
      source.cancel()
    }
  }, [countryname])
  // `http://api.weatherstack.com/current?access_key=${key}&query=${name}`
  const getweather = (name, key) => {
    const source = axios.CancelToken.source()
    const urlWeather = `http://api.weatherapi.com/v1/forecast.json?key=${API_key}002 &q=${name}&days=1&aqi=no&alerts=no`
    axios
      .get(urlWeather, { cancelToken: source.token })
      .then((response) => {
        setWeather(response.data.current)
      })
      .catch((error) => {
        if (axios.isCancel(error)) {
        } else {
          throw error
        }
      })
  }
  console.log(weather)
  return (
    <div className='weatherdisplay'>
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
      ) : (
        <p>Possible usage limit reached for weather data.</p>
      )}
    </div>
  )
}
