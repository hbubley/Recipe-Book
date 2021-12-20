import React from 'react'
import { useSearch } from 'react-location'
import RecipeList from '../../components/recipe_list/RecipeList'
import useFetch from '../../hooks/useFetch'
import './Search.css'
const Search = () => {
    const { q } = useSearch()
    const url = `http://localhost:3000/recipes?q=${q}`
    const [data, isPending, error] = useFetch(url);
    console.log("🚀 ~ file: Search.js ~ line 10 ~ Search ~ data", data)

    return (
        <div className="search">
            <h1>Recipes including "{q}"</h1>
            {error && <p>{error}</p>}
            {isPending && <h1>Loading</h1>}
            {data && <RecipeList recipes={data} />}
        </div>
    )
}

export default Search
