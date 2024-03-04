/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import axios from 'axios'
import Countries from './components/Countries'
// import countryService from './services/countries.js'
const allCountriesUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all'

function App () {
  const [searchFilter, setSearchFilter] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios
      .get(allCountriesUrl)
      .then(res => {
        setCountries(res.data)
      })
      .catch(error => {
        console.log(`Error fetching countries data: ${error}`)
      })
  }, [])

  const filterCountries = searchFilter.length === 0
    ? countries
    : countries.filter(country => country.name.official.toLowerCase().indexOf(searchFilter) >= 0)

  const handleShow = (props) => {
    setSearchFilter(props)
  }
  return (
    <>
      <h1>Countries</h1>
      <form>
        <label>Country name</label>
        <input value={searchFilter} onChange={(e) => setSearchFilter(e.target.value.toLowerCase())} />
      </form>
      <div>
        <Countries filterCountries={filterCountries} handleShow={handleShow} />
      </div>
    </>
  )
}

export default App
