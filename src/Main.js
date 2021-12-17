import React from 'react'
import Navbar from './components/navbar/Navbar';
import Create from './pages/create/Create';
import Home from './pages/home/Home';
import Recipe from './pages/recipe/Recipe';
import Search from './pages/search/Search';
import {
    Outlet,
    ReactLocation,
    Router,
} from "react-location";
import MissingPage from './pages/404/MissingPage';
import useFetch from './hooks/useFetch';
import Recipes from './pages/Recipes/Recipes';

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
        // {
        //     path: '/recipe',
        //     element: <Recipes />,
        //     // children: [
        //     //     {
        //     //         path: '/',
        //     //     },
        //     //     {
        //     //         path: ':id',
        //     //         element: <Recipe />
        //     //     },
        //     // ]
        // },
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
