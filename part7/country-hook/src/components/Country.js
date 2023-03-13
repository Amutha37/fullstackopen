const Country = ({ country }) => {
  if (!country) {
    return null
  }

  // const countryInfo = []
  console.log('country', country[0])

  const countryInfo = country[0]

  if (!countryInfo) {
    return <div>Country not found...</div>
  }

  return (
    <div>
      <h3>{countryInfo.name.common} </h3>
      <div>Capital : {countryInfo.capital} </div>
      <div>Population : {countryInfo.population.toLocaleString()}</div>
      <img
        src={countryInfo.flags.png}
        height='100'
        alt={`flag of ${countryInfo.name.common}`}
      />
    </div>
  )
}

export default Country
