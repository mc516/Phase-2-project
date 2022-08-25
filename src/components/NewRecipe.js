import React, { useState } from "react";
import { useHistory } from "react-router-dom"

function NewRecipe() {
    const [recipeObject, setRecipeObject] = useState({
        name:"",
        imageURL:"",
        description:"",
        ingredients:"",
    })

    const history = useHistory();

    function handleChange(e) {
        setRecipeObject({
            ...recipeObject, 
            [e.target.id]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log("submit!")

        fetch("http://localhost:3001/recipes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(recipeObject)
        })
        .then(res => res.json())
        .then(() => history.push("/recipes"))   

    }

    return (
        <div className="form-container">
            <h2>Add a new recipe</h2>
            <form onSubmit={handleSubmit} className="form">
                <label htmlFor="name">Name</label>
                <input 
                    id="name"
                    type="text" 
                    value={recipeObject.name}
                    onChange={handleChange}
                />

                <label htmlFor="imageURL">Image URL</label>
                <input 
                    id="imageURL"
                    type="text"
                    value={recipeObject.imageURL}
                    onChange={handleChange}
                />

                <label htmlFor="description">Description</label>
                <textarea  
                    id="description"
                    value={recipeObject.description}
                    onChange={handleChange}
                />

                <label htmlFor="ingredients">Ingredients</label>
                <textarea  
                    id="ingredients"
                    value={recipeObject.ingredients}
                    onChange={handleChange}
                />   

                <button type="submit" className="new-recipe-submit">Submit</button>

            </form>
            <h3>Preview Image</h3>
            <img src={recipeObject.imageURL} alt={recipeObject.name} />
        </div>
    )
}

export default NewRecipe