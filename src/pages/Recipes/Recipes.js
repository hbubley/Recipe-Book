import React from 'react';
import RecipeList from '../../components/recipe_list/RecipeList';
import useFetch from '../../hooks/useFetch';
import './Recipes.css';

const Recipes = ({ recipes }) => {
    const URL = 'http://localhost:3000/recipes'
    const [data, isPending, error] = useFetch(URL)
    return (
        <div>
            {
                error && <p className="error">{error}</p>
            }
            {
                isPending && <p className="loading">Loading...</p>
            }
            {
                data && <RecipeList recipes={data} />
            }
        </div>
    )
}

export default Recipes
