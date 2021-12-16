import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from './components/navbar/Navbar';
import Create from './pages/create/Create';
import Home from './pages/home/Home';
import Recipe from './pages/recipe/Recipe';
import Search from './pages/search/Search';
import {
    Link,
    MakeGenerics,
    Outlet,
    ReactLocation,
    Router,
    useMatch,
} from "react-location";
import MissingPage from './pages/404/MissingPage';

const location = new ReactLocation();
const Main = () => {
    const routes = [
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/create',
            element: <Create />
        },
        {
            path: '/search',
            element: <Search />
        },
        {
            path: '/recipe/:id',
            element: <Recipe />
        },
        {
            path: '/*',
            element: <MissingPage />
        }
    ]
    return (
        <Router
            location={location}
            routes={routes}
        >
            <Navbar />
            <Outlet />
        </Router>
    )
}

export default Main
