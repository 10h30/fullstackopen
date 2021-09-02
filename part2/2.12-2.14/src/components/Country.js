import React from 'react';
import Weather from './Weather';

const Country = ({data,onClick,weather}) => {
    const list = data.length
    const clickHandler = (index) => {
        onClick(index)
    }
    return (
        <div>
            {list > 10 ? 'Too many matches, specific another filter' :
            list > 1  ? data.map((item, index) => <CountryLongList key={item.alpha2Code} data={item} onClick={() => clickHandler(index)} weather={weather}/>) :
            data.map(item => <CountryDetail key={item.alpha2Code} data={item} weather={weather}/>)
            }
        </div>
        
    )
}
const CountryLongList = ({data, onClick,weather}) => {
    const show = data.Show
    console.log(show)
    return (
      <div>
          <span>{data.name}</span>
          <button onClick={onClick}>
            {show === false ? "Show" : "Hide"}
          </button>
          <div>{show === true && <CountryDetail key={data.alpha2Code} data={data}/>}
          </div>
      </div>
    );
}
const CountryDetail = ({data,weather}) => {
    console.log("Data", data)
    console.log("Length", data.length)
    return (
        <div>
            <h2>{data.name}</h2>
            <p>
                Capital: {data.capital}
            </p>
            <p>
                Population: {data.population}
            </p>
            <h3>Languagues</h3>
            <ul>
            {data.languages.map(item =><li key={item.name}>{item.name}</li>)}
            </ul>
            <img src={data.flag} alt={data.name} width="200" />
            <Weather weather={weather} capital={data.capital} />
        </div>
    )
}

export default Country