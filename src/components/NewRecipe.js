import React, { useState } from "react";
import { useHistory } from "react-router-dom"

function NewRecipe() {
    const [name, setName] = useState("")
    const [imageURL, setImageURL] = useState("")
    const [description, setDescription] = useState("")
    const [ingredients, setIngredients] = useState("")

    const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault()
        console.log("submit!")

        const formData = {
            name, 
            imageURL, 
            ingredients,
            description, 
        }
        fetch("http://localhost:3001/recipes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => {
            history.push("/recipes")
            console.log(data)})
    }

    return (
        <div className="form-container">
            <h2>Add a new recipe</h2>
            <form onSubmit={handleSubmit} className="form">
                <label htmlFor="name">Name</label>
                <input 
                    id="name"
                    type="text" 
                    // value={name}
                    onChange={e => setName(e.target.value)}
                />

                <label htmlFor="imageURL">Image URL</label>
                <input 
                    id="imageURL"
                    type="text"
                    // value={null}
                    onChange={e => setImageURL(e.target.value)}
                />

                <label htmlFor="description">Description</label>
                <textarea  
                    id="description"
                    onChange={e => setDescription(e.target.value)}
                />

                <label htmlFor="ingredients">Ingredients</label>
                <textarea  
                    id="ingredients"
                    onChange={e => setIngredients(e.target.value)}
                />   

                <button type="submit" className="new-recipe-submit">Submit</button>

            </form>
        </div>
    )
}

export default NewRecipe