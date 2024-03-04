import { useEffect, useState } from 'react'
import Languages from './Languages'
import axios from 'axios'
const apiKey = import.meta.env.VITE_WEATHER_API_KEY

const CountryDetails = ({ countriesResult }) => {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${countriesResult.name.official}&units=metric&appid=${apiKey}`)
      .then(res => {
        setWeather(res.data)
      })
      .catch(error => {
        console.log(`Fetching country data failed: ${error}`)
      })
  }, [])

  if (weather !== null) {
    return (
      <div>
        <h3><strong>Name: </strong>{countriesResult.name.common}</h3>
        <p><strong>capital: </strong>{countriesResult.capital}</p>
        <p><strong>Area Code: </strong>{countriesResult.area}</p>
        <Languages languages={countriesResult.languages} />
        <img src={countriesResult.flags.png} alt={countriesResult.name} width='100' />
        <h3>Weather in: {countriesResult.name.common}</h3>
        <p><strong>Description: </strong> {weather.weather[0].description}</p>
        <p><strong>Temp: </strong> {weather.main.temp} °C</p>
        <p><strong>Wind: </strong> {weather.wind.speed} m/s</p>
        <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={`Weather from ${countriesResult.name.common} icon`} />
      </div>
    )
  } else {
    return (
      <div>
        <h3><strong>Name: </strong>{countriesResult.name.common}</h3>
        <p>official name:{countriesResult.name.official}</p>
        <p><strong>capital: </strong>{countriesResult.capital}</p>
        <p><strong>Area: </strong>{countriesResult.area}</p>
        <Languages languages={countriesResult.languages} />
        <img src={countriesResult.flags.png} alt={countriesResult.name} width='100' />
      </div>
    )
  }
}

export default CountryDetails
