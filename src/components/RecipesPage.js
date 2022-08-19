import React, {useState, useEffect} from "react";
import Recipe from "./Recipe";

function Recipes() {
    const [recipeList, setRecipeList] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/recipes')
        .then(res => res.json())
        .then(data => setRecipeList(data))
    }, [])

    if(!recipeList) return <h2>Loading...</h2>
    
    function handleClick() {
        console.log("click")
    }

    return (
        <div>
            
            <h1>Recipes Page</h1>
            {recipeList.map(recipe => {return <Recipe key={recipe.name} recipeData={recipe}/>} )}
            {<button className="new-recipe-btn" onClick={handleClick}>Add new recipe!</button>}
        </div>
       
    )
}

export default Recipes;