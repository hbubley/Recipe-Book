import React from 'react'
import { Link } from 'react-location'

const Navbar = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/create">Create</Link>
            <Link to="/search">Search</Link>
        </nav>
    )
}

export default Navbar
