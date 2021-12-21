import React, { useState, useEffect } from 'react'
import { Navigate, useNavigate } from 'react-location';
import useFetch from '../../hooks/useFetch';
import "./Create.css"
const Create = () => {
    const [title, setTitle] = useState('');
    const [method, setMethod] = useState('');
    const [cookingTime, setCookingTime] = useState('');
    const [ingredients, setIngredients] = useState([{}])
    const [data, , error, postData] = useFetch('http://localhost:3001/recipes', "POST")
    const navigate = useNavigate();
    useEffect(() => {
        if (data && !error) {
            navigate({ to: '/', replace: true })
        }
    }, [data, error, navigate])

    const handleSubmit = (e) => {
        e.preventDefault();
        postData({ title, method, cookingTime: `${cookingTime} minutes`, ingredients })
    }

    const handleRowChange = (value, index) => {
        const ingredientsCopy = [...ingredients];
        ingredientsCopy[index] = { ...ingredientsCopy[index], value: value };
        console.log("🚀 ~ file: Create.js ~ line 16 ~ handleRowChange ~ ingredientsCopy", ingredientsCopy)
        setIngredients(ingredientsCopy);
    }
    const addRow = (e) => {
        e.preventDefault()
        const ingredientsCopy = [...ingredients, { value: "" }];
        setIngredients(ingredientsCopy)
    }

    const deleteRow = (e, index) => {
        e.preventDefault();
        const ingredientsCopy = [...ingredients];
        console.log("🚀 ~ file: Create.js ~ line 26 ~ deleteRow ~ ingredientsCopy", ingredientsCopy)
        const remove = ingredientsCopy.splice(index, 1)
        console.log("🚀 ~ file: Create.js ~ line 28 ~ deleteRow ~ remove", remove)
        setIngredients(ingredientsCopy);
    }

    return (
        <div className="create">
            <h2 className="page-title">Add a New Recipe</h2>
            <form>
                <label>
                    <span>Recipe title:</span>
                    <input
                        type="text"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                </label>
                <label>
                    <span>Recipe ingredients:</span>
                    <div className="ingredients">
                        {ingredients.map((ingredient, index) => {
                            return (
                                <div className="ingredient" key={index}>
                                    <span>
                                        <p>{index + 1}.</p>
                                    </span>
                                    <span className="ingredient-input">
                                        <input
                                            type="text"
                                            onChange={(e) => handleRowChange(e.target.value, index)}
                                            value={ingredient?.value ? ingredient.value : ""}
                                        />
                                    </span>
                                    <span className="ingredient-delete">
                                        <button className="delete-ingredient" disabled={ingredients.length <= 1} onClick={(e) => deleteRow(e, index)}>x</button>
                                    </span>
                                </div>
                            )
                        })}
                        <button className="button" onClick={addRow}><p>Add another</p></button>
                    </div>
                </label>
                <label>
                    <span>Recipe method:</span>
                    <textarea
                        onChange={(e) => setMethod(e.target.value)}
                        value={method}
                    />
                </label>
                <label>
                    <span>Cooking time (minutes):</span>
                    <input
                        type="number"
                        onChange={(e) => setCookingTime(e.target.value)}
                        value={cookingTime}
                    />
                </label>
                <button className="button" onClick={handleSubmit}><p>Submit</p></button>
            </form>
        </div>
    )
}

export default Create
