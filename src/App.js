import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Weather from './components/Weather.js'
import SearchField from './components/SearchField.js'

/* 
Leevi Matias Honkonen
 */

const App = () => {

  const [ countries, setCountries ] = useState([])
  const [ search, setSearch ] = useState('')
  const [ weatherObj, setWeatherObj ] = useState({
    temperature: '',
    clouds: '',
    wind: ''
  })

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])


  const handleInputChange = (event) => {
    setSearch(event.target.value)
  }

  let fCountries = countries.filter(function(item) {
    return item.name.toLowerCase().match( search.toLowerCase() )
    })


    // nonni
  const rows = () => {
    if(fCountries.length > 10 ){
      return (
        <div>
          tarkenna hakua
        </div>
      )

    }else if(fCountries.length === 1){
      return (
        <div>
          <h2>{fCountries[0].name}</h2>
          capital {fCountries[0].capital}
          <br/>
          population {fCountries[0].population}
          <div>
            <h3>languages</h3>
            <ul>
              {fCountries[0].languages.map(item => <li key={item.name}>{item.name}</li>)}
            </ul>
          </div>
          <img alt="#" src={fCountries[0].flag} height="50px"/>
          <div>
             <Weather 
             capital={fCountries[0].capital}
             setWeatherObj={setWeatherObj}
             weatherObj={weatherObj}
             />
          </div>
        </div>
      )
    }else{
    return fCountries
    .map(item =>
       <li key={item.name}>{item.name}
       <button onClick={() => setSearch(item.name)}>show</button>
       </li>
       )}
  }
  return (
    <div>
      <SearchField 
      handleInputChange={handleInputChange}
      search={search}
      />
      <ul>
        {rows()}
      </ul>
    </div>
  )
}

export default App
