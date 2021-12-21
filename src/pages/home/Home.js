import React from 'react'
import { Link, useNavigate } from 'react-location'
import RecipeList from '../../components/recipe_list/RecipeList'
import useFetch from '../../hooks/useFetch'
import "./Home.css"
const Home = () => {
    const URL = 'http://localhost:3001/recipes'
    const [data, isPending, error] = useFetch(URL);
    const navigate = useNavigate();
    // const displayData = data?.slice(data.length - 6, data.length)
    return (
        <div className="home">
            {
                error && <p className="error">{error}</p>
            }
            {
                isPending && <p className="loading">Loading...</p>
            }
            {
                data && (
                    <>
                        <div className="hero-section">
                            <h1 className="hero-title">The Recipe Book</h1>
                            <button onClick={() => navigate({to: '/create'})}>Create</button>
                        </div>
                        <div>
                            {/* <p className="title">Recent creations:</p> */}
                            <RecipeList recipes={data} />
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default Home
