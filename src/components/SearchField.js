import React from 'react'

const SearchField = ({ handleInputChange, search }) => {
    return(
        <div>
            <label htmlFor="search">Search for something: </label>
            <input 
            type="text" 
            name="search" 
            onChange={handleInputChange}
            value={search}
            />
      </div>
    )
}

export default SearchField