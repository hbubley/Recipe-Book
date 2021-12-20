import React from 'react'
import { useMatch } from 'react-location'
import useFetch from '../../hooks/useFetch'
import styles from './Recipe.module.css'
const Recipe = () => {
    const { params: { id } } = useMatch()
    const [data, isPending, error] = useFetch(`http://localhost:3000/recipes/${id}`);

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
                    <div className={styles.recipe}>
                        <h1 className={styles.page_title}>{data.title}</h1>
                        <p>Takes {data.cookingTime} to cook.</p>
                        <ul className={styles.recipe_list}>
                            {
                                data.ingredients.map(ingredient => (
                                    <li className={styles.recipe_list_item} key={ingredient}>{ingredient}</li>
                                ))
                            }
                        </ul>
                        <p className={styles.method}>{data.method}</p>
                    </div>
                )
            }
        </div>
    )
}

export default Recipe
