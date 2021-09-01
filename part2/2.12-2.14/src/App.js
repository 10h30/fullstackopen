import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Country from './components/Country'

const App = () => {
  
  const [newSearch, setNewSerach] = useState('')
  const [CountryList, setCountryList] = useState([])

  const handleSearchChange  =(event) => {
    setNewSerach(event.target.value)
  }

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
      setCountryList(response.data)
    })
  }, [])

 
  const filtered = CountryList.filter(country => country.name.toLowerCase().includes(newSearch.toLowerCase()))
  console.log(newSearch.toLowerCase())
  return (
    <div>
      <h2>Country</h2>
      <Filter value={newSearch} onChange={handleSearchChange} />
      <Country data={filtered} />
      
    </div>
  )
}

export default App