import React, { useEffect, useState } from 'react'
import axios from 'axios'
// Api key
const API_key = process.env.REACT_APP_API_KEY

export const Weather = ({ countryname }) => {
  const [weather, setWeather] = useState([{}])
 
  const [Loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const source = axios.CancelToken.source()

    getweather(countryname, API_key)

    return () => {
      source.cancel()
    }
  }, [countryname])


  async function    getweather(name, key) {
    setLoading(true);
    const urlWeather = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=703c1d47125052c3e4116b9aa716c548`
    try {
      const response = await fetch(urlWeather);
      // waits until the request completes...

      if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
      }

      const result = await response.json();
 console.log('result',result,result?.main?.temp)
     
  
      setError(null);
      setLoading(false);
    setWeather(result)
  console.log('WEATHER',result)
     
    } catch (error) {
      console.log("Fetch error: ", error);
      setError(`${error}. Some Error Occured`);
      setLoading(false);
    }
  }

//   useEffect(() => {
//     fetchData();
//   }, [url]);

//   return { data, error, pending };



//   const getweather = (name, key) => {
//     const source = axios.CancelToken.source()

//     const urlWeather = `http://api.weatherstack.com/current?access_key=${key}&query=${name}`

//     axios
//       .get(urlWeather, { cancelToken: source.token })
//       .then((response) => {
//         setWeather(response.data.current)
//       })
//       .catch((error) => {
//         if (axios.isCancel(error)) {
//         } else {
//           throw error
//         }
//       })
//   }

  const tem_celsius = (( weather?.main?.temp - 32) * 5) /9; 
  let cell = (tem_celsius).toFixed(2)

//  console.log('temp',weather.main.temp,tem_celsius)


 function getCurrentDate() {
  return new Date().toLocaleDateString("en-us", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

  return (
    
    <div className='weatherdisplay'>
      <div className="date">
            <span>{getCurrentDate()}</span>
          </div>

       {Loading ? (
        <div className="loading">Loading...</div>
      ) : (

 
       weather ? (
        <ul>
          <li>Temperature : {cell} ℃</li>
          <li>
            <img
              src={weather.weather_icons}
              alt={weather.weather_descriptions}
            />
          </li>
          <li>
            Wind : {weather?.wind?.speed}km/h Humidity:{weather?.main?.humidity}%
          </li>
        </ul> ) : (<p>not wehater</p>)
    
    )}       
  
    </div>
  )
}
