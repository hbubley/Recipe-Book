import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Create from './pages/create/Create';
import Home from './pages/home/Home';
import Recipe from './pages/recipe/Recipe';
import Search from './pages/search/Search';
const Main = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/create" element={<Create />} />
                <Route path="/search" element={<Search />} />
                <Route path="/recipe/:id" element={<Recipe />} />
            </Routes>
        </Router>
    )
}

export default Main
