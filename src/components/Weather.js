import React, { useEffect } from 'react'
import axios from 'axios'

const Weather = ({ capital, setWeatherObj, weatherObj }) => {

    useEffect(() => {
        console.log('effect')
        axios
          .get('http://api.apixu.com/v1/current.json?key=0403f8e25079464883b162842191607&q='+capital)
          .then(response => {
            console.log('promise fulfilled')
            const tmp = {
                temperature: response.data.current.feelslike_c,
                clouds: response.data.current.condition.icon,
                wind: response.data.current.wind_kph
            }
            setWeatherObj(tmp)
            console.log(tmp.clouds)
          })
      }, [])

    return (
        <div>
            <h5>Weather</h5>
            {weatherObj.temperature}
            <br/>
            <img href={"#"} src={weatherObj.clouds}/>
            <br/>
            {weatherObj.wind}
        </div>
    )
}
 
export default Weather