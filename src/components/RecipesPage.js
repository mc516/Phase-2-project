import React, {useState, useEffect} from "react";
import Recipe from "./Recipe";

function Recipes() {
    const [recipeList, setRecipeList] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetch('http://localhost:3001/recipes')
        .then(res => res.json())
        .then(data => setRecipeList(data))
    }, [])

    function handleDeleteRecipe(deletedRecipe) {
        const updatedRecipes = recipeList.filter(recipe => { 
            return recipe.id !== deletedRecipe.id});
        setRecipeList(updatedRecipes)
    }

    const recipesToDisplay = recipeList.filter(recipe => {
        if(search !== "") {
            return recipe.name.toLowerCase().includes(search.toLowerCase())
        } else {
            return true
        }
    })
    
    return (
        <div>          
            <h1>Recipes Page</h1>
            <label htmlFor="search">Search: </label>
            <input className="search-bar" type="text" onChange={(e) => setSearch(e.target.value)}></input>
            <div></div>
            {
                recipesToDisplay
                .sort((a, b) => a.name.localeCompare(b.name))
                .map(recipe => {return <Recipe key={recipe.name} recipeData={recipe} handleDeleteRecipe={handleDeleteRecipe}/>})
            }      
        </div>      
    )
}

export default Recipes;