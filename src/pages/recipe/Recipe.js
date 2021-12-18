import React from 'react'
import { useMatch } from 'react-location'
import useFetch from '../../hooks/useFetch'
import './Recipe.css'
const Recipe = () => {
    const { params: { id } } = useMatch()
    const [data, isPending, error] = useFetch(`http://localhost:3000/recipes/${id}`);
    console.log("🚀 ~ file: Recipe.js ~ line 8 ~ Recipe ~ data", data)

    return (
        <div>
            {
                isPending && <h1>Loading...</h1>
            }
            {
                error && <h1>{error}</h1>
            }
            {
                data && (
                    <div className='recipe'>
                        <h1 className="page-title">{data.title}</h1>
                        <p>Takes {data.cookingTime} to cook.</p>
                        <ul>
                            {
                                data.ingredients.map(ingredient => (
                                    <li key={ingredient}>{ingredient}</li>
                                ))
                            }
                        </ul>
                        <p className="method">{data.method}</p>
                    </div>
                )
            }
        </div>
    )
}

export default Recipe
