import React, { useState } from 'react'
import './SearchBar.css'
const SearchBar = () => {
    const [term, setTerm] = useState()
    return (
        <div className="searchbar">
            <form onSubmit={ }>
                <label htmlFor="search">Search:</label>
                <input type="text" id="search" onChange={(e) => setTerm(e.target.value)} />
            </form>
        </div>
    )
}

export default SearchBar
