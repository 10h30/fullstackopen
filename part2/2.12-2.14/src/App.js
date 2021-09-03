import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Country from './components/Country'

const App = () => {
  
  const [newSearch, setNewSerach] = useState('')
  const [CountryList, setCountryList] = useState([])
  const [ResultList, setResultList] = useState([])
  const [WeatherData, setWeatherdata] = useState([])
  console.log(WeatherData)
  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
      setCountryList(response.data)
    })
  }, [])

  useEffect(() => {
    if (ResultList.length === 1 ) {
      const capital = ResultList[0].capital.replace(/\s/g, '+')
      console.log(capital)
      const apistring = `http://wttr.in/${capital}?format=j1`
      console.log(capital, apistring)
      axios
        .get(apistring)
        .then(response => {
        setWeatherdata(response.data)
      })
    }
    }, [ResultList])
  
  const clickHandler = (index) => {
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
    setResultList([...filter])
  }, [newSearch, CountryList])

  return (
    <div>
      <h2>Country</h2>
      <Filter value={newSearch} onChange={handleSearchChange} />
      <Country data={ResultList} onClick={clickHandler} weather={WeatherData}/>
    </div>
  )
}

export default App