import React from 'react';

const Country = (props) => {
    const filtered = props.data
    return (
        <div>
            {filtered.length > 10 ? 
          'Too many matches, specific another filter' : filtered.length !== 1 ?
            filtered.map(item => <CountryLongList key={item.alpha2Code} data={item}/>): 
            filtered.map(item => <CountryDetail key={item.alpha2Code} data={item}/>)}
        </div>
        
    )
}
const CountryLongList = ({data}) => {
    return (
        <div>
            <p>{data.name}</p>
        </div>
    )
}
const CountryDetail = ({data}) => {
    console.log(data)
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