import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Country from './components/Country'

const App = () => {
  
  const [newSearch, setNewSerach] = useState('')
  const [CountryList, setCountryList] = useState([])
  const [ResultList, setResultList] = useState([])

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
      setCountryList(response.data)
    })
  }, [])

  const clickHandler = (index) => {
    console.log(index)
    const newresult = ResultList
    newresult[index].Show = !newresult[index].Show
    setResultList([...newresult])
  }
  
  const handleSearchChange = (event) => {
    setNewSerach(event.target.value)
  }

  useEffect(() => {
    const sfilter = CountryList.filter(country => country.name.toLowerCase().includes(newSearch.toLowerCase()))
    const filter = sfilter.map(item => ({...item,Show:false}))
    setResultList(filter)
  }, [newSearch, CountryList])

  return (
    <div>
      <h2>Country</h2>
      <Filter value={newSearch} onChange={handleSearchChange} />
      <Country data={ResultList} onClick={clickHandler}/>
    </div>
  )
}

export default App