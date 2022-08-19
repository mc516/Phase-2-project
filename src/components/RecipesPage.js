import React, {useState, useEffect} from "react";
import Recipe from "./Recipe";

function Recipes() {
    const [recipeList, setRecipeList] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/recipes')
        .then(res => res.json())
        .then(data => setRecipeList(data))
    }, [])

    const recipesToDisplay = recipeList.sort((a, b) => a.name.localeCompare(b.name))
    return (
        <div>          
            <h1>Recipes Page</h1>
            {
                recipeList
                .sort((a, b) => a.name.localeCompare(b.name))
                .map(recipe => {return <Recipe key={recipe.name} recipeData={recipe}/>})
            }      
        </div>      
    )
}

export default Recipes;