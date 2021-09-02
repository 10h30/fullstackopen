import React from 'react';

const Country = ({data,onClick}) => {
    const list = data.length
    const clickHandler = (index) => {
        onClick(index)
    }
    return (
        <div>
            {list > 10 ? 'Too many matches, specific another filter' :
            list > 1  ? data.map((item, index) => <CountryLongList key={item.alpha2Code} data={item} onClick={() => clickHandler(index)}/>) :
            data.map(item => <CountryDetail key={item.alpha2Code} data={item}/>)
            }
        </div>
        
    )
}
const CountryLongList = ({data, onClick}) => {
    const show = data.Show
    console.log(show)
    return (
      <div>
        <p>
          <span>{data.name}</span>
          <button onClick={onClick}>
            {show === false ? "Show" : "Hide"}
          </button>
          {show === true && <CountryDetail key={data.alpha2Code} data={data}/>}
        </p>
      </div>
    );
}
const CountryDetail = ({data}) => {
    return (
        <div>
            <h2>{data.name}</h2>
            <p>
                Capital: {data.capital}
                <br />
                Population: {data.population}
            </p>
            <h3>Languagues</h3>
            <ul>
            {data.languages.map(item =><li key={item.name}>{item.name}</li>)}
            </ul>
            <img src={data.flag} alt={data.name} width="200" />

        </div>
    )
}

export default Country