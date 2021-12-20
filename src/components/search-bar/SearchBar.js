import React, { useState } from 'react'
import { useNavigate } from 'react-location';
import './SearchBar.css'
const SearchBar = () => {
    //Make this a magnifying glass that turns into an input field on click!
    const navigate = useNavigate();
    const [term, setTerm] = useState();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate({to: `/search?q=${term}`})
    }
    return (
        <div className="searchbar">
            <form onSubmit={handleSubmit}>
                <input type="text" id="search" onChange={(e) => setTerm(e.target.value)} placeholder='Search...'/>
            </form>
        </div>
    )
}

export default SearchBar
