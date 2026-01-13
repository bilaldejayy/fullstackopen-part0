import { useState, useEffect } from 'react'
import axios from 'axios'
import SearchFilter from './components/SearchFilter'
import CountryList from './components/CountryList'
import CountryDetail from './components/CountryDetail'
import Weather from './components/Weather'

const App = () => {
  const [countries, setCountries] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCountry, setSelectedCountry] = useState(null)

  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        setCountries(response.data)
      })
      .catch(error => console.error('Error loading countries:', error))
  }, [])

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
    setSelectedCountry(null)
  }

  const handleShowCountry = (country) => {
    setSelectedCountry(country)
  }

  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <SearchFilter searchTerm={searchTerm} handleSearchChange={handleSearchChange} />

      {selectedCountry ? (
        <div>
          <CountryDetail country={selectedCountry} />
          <Weather city={selectedCountry.capital ? selectedCountry.capital[0] : null} />
        </div>
      ) : (
        searchTerm && (
          filteredCountries.length === 1 ? (
            <div>
              <CountryDetail country={filteredCountries[0]} />
              <Weather city={filteredCountries[0].capital ? filteredCountries[0].capital[0] : null} />
            </div>
          ) : (
            <CountryList
              countries={filteredCountries}
              handleShowCountry={handleShowCountry}
            />
          )
        )
      )}
    </div>
  )
}

export default App
