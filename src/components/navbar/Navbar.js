import React from 'react'
import { Link } from 'react-location'
import SearchBar from '../search-bar/SearchBar'
import './Navbar.css'
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-brand">
                <Link to="/">
                    <img src={`https://res.cloudinary.com/dum4u7sro/image/upload/v1639772475/D_L_yj4pxy.png`} alt="logo" />
                </Link>
            </div>
            <div className='nav-items'>
                <SearchBar />
                <Link className="nav-item" to="/">Home</Link>
                <Link className="nav-item" to="/create">Create</Link>
                <Link className="nav-item" to="/search">Search</Link>
            </div>
        </nav>
    )
}

export default Navbar
