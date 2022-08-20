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

    
    function handleSearch(e) {
        console.log(e.target.value)
        setSearch(e.target.value)
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
            <input className="search-bar" type="text" onChange={handleSearch}></input>
            <div></div>
            {
                recipesToDisplay
                .sort((a, b) => a.name.localeCompare(b.name))
                .map(recipe => {return <Recipe key={recipe.name} recipeData={recipe}/>})
            }      
        </div>      
    )
}

export default Recipes;