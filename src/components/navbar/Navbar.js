import React from 'react'
import { Link } from 'react-router-dom'

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
