import React from "react";

function Recipe({recipeData}) {
    const {name ,image, description, ingredients} = recipeData;
    return (
        <div className="recipe-card">
            <div className="name">{name}</div>
            <img className="image" src={image} alt={name}/> 
            <div className="description">{description}</div>
            <div className="ingredients">{ingredients}</div>
        </div>  
    )
}

export default Recipe