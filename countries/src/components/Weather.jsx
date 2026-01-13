import { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({ city }) => {
    const [weather, setWeather] = useState(null)
    const api_key = import.meta.env.VITE_WEATHER_API_KEY

    useEffect(() => {
        if (city && api_key) {
            axios
                .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`)
                .then(response => {
                    setWeather(response.data)
                })
                .catch(error => {
                    console.error('Error fetching weather data:', error)
                })
        }
    }, [city, api_key])

    if (!weather || !api_key) {
        return null
    }

    return (
        <div>
            <h2>Weather in {city}</h2>
            <div>temperature {weather.main.temp} Celcius</div>
            <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt={weather.weather[0].description}
            />
            <div>wind {weather.wind.speed} m/s</div>
        </div>
    )
}

export default Weather
