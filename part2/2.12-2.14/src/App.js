import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Country from './components/Country'

const App = () => {
  
  const [newSearch, setNewSerach] = useState('')
  const [CountryList, setCountryList] = useState([])
  const [ResultList, setResultList] = useState([])
  const [WeatherData, setWeatherdata] = useState([])

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
      setCountryList(response.data)
    })
  }, [])

  useEffect(() => {
    console.log(ResultList)
    if (ResultList.length > 0 ) {
      const capital = ResultList[0].capital
      const apistring = `http://api.weatherstack.com/current?access_key=9482b8f61c984f8e1988759e020d133e&query=${capital}`
      console.log(capital, apistring)
      axios
        .get(apistring)
        .then(response => {
        setWeatherdata(response.data)
      })
      console.log(WeatherData)
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