import React from 'react'
import { Link } from 'react-location'
import './Navbar.css'
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-brand">

            </div>
            <div>
                <Link className="nav-item" to="/">Home</Link>
                <Link className="nav-item" to="/create">Create</Link>
                <Link className="nav-item" to="/search">Search</Link>
            </div>
        </nav>
    )
}

export default Navbar
