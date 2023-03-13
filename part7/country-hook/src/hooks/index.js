import { useState, useEffect } from 'react'
import axios from 'axios'

export const useCountry = (name) => {
  const [country, setCountry] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (name) {
      axios
        .get(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
        .then((response) => {
          console.log('response', response.data)
          setCountry(response.data)
        })
        .catch((error) => {
          console.log(error)
          // setCountry(error.message)
          setError(error.message)
        })
    }
  }, [name])

  if (error) {
    console.log('error', error)

    setError('')
    setCountry('')
    return []
  }
  if (name === '') {
    return null
  }

  if (!country) {
    return []
  }

  return country
}

export const useField = (type) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  return {
    type,
    value,
    onChange,
  }
}
