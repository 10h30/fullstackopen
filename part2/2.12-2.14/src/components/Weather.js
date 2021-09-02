import React from 'react'

const Weather = ({weather,capital}) => {
    console.log(weather)
    
    return (
        <div>
            <p>Temperature: {weather.current.temperature} Celcius</p>
            <img src={weather.current.weather_icons} alt="Weather" />
            <p>Wind: {weather.current.wind_speed} mph {weather.current.wind_degree} {weather.current.wind_dir}</p>
        </div>
    )
}

export default Weather