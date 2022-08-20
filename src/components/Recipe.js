import React from "react";

function Recipe({recipeData}) {
    const {name ,imageURL, description, ingredients, id} = recipeData;

    function handleDeleteClick() {
        console.log(id)
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