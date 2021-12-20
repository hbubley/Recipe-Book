import React from 'react';
import { Link } from 'react-location';
import './RecipeList.css';

const RecipeList = ({ recipes }) => {
    if(recipes.length === 0){
        return <div>No recipes to load...</div>
    }
    return (
        <div className="recipe-list">
            {
                recipes.map((recipe) => (
                    <div className="card" key={recipe.id}>
                        <h3>{recipe.title}</h3>
                        <p>{recipe.cookingTime} to make.</p>
                        <div>{recipe.method && recipe.method.substring(0, 100)}...</div>
                        <Link to={`/recipe/${recipe.id}`}>Cook This</Link>
                    </div>
                ))
            }
        </div>
    )
}

export default RecipeList
