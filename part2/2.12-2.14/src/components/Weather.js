import React from 'react'

const Weather = ({weather,capital}) => {
    const {current_condition} = weather
    const temperature = current_condition[0].temp_C
    const windspeed = current_condition[0].windspeedKmph
    const winddirection = current_condition[0].winddir16Point
    return (
        <div>
            <h2>Weather in {capital}</h2>
            { weather &&
                <div>
                <p>Temperature: {temperature} Celcius</p>
                <p>Wind: {windspeed} km/h, Direction {winddirection}</p>
                </div>
                }
        </div>
    )
}

export default Weather