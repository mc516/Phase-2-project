import React from "react";

function Recipe( {recipeData, handleDeleteRecipe} ) {
    const {name ,imageURL, description, ingredients, id} = recipeData;

    function handleDeleteClick() {
        console.log(id)
        fetch(`http://localhost:3001/recipes/${id}`, {
            method:"DELETE",
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            handleDeleteRecipe(data)
        })
    }

    return (
        <div className="recipe-card">
            <div className="name">{name}</div>
            <img className="image" src={imageURL} alt={name}/> 
            <div className="description">{description}</div>
            <div className="ingredients">{ingredients}</div>
            <button 
                className="delete-btn"
                onClick={handleDeleteClick}
                >
                Delete
            </button>
         </div>  
    )
}

export default Recipe