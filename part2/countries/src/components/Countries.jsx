import Country from './Country'
import CountryDetails from './CountryDetails'
const Countries = ({ filterCountries, handleShow }) => {
  let result = 'Search countries data, start typing!'
  // * new method
  if (filterCountries.length > 0) {
    if (filterCountries.length === 1) {
      result = <CountryDetails countriesResult={filterCountries[0]} />
    } else if (filterCountries.length <= 10) {
      result = filterCountries.map(element => {
        return (
          <Country key={element.name.official} countriesResult={element} handleShow={handleShow} />
        )
      })
    } else if (filterCountries.length > 10 && filterCountries.length !== 250) {
      result = 'Too many matches, specify another filter'
    }
  }
  return (
    <div>
      {result}
    </div>
  )
}

export default Countries
