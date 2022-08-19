import React from "react";

function Recipe({recipeData}) {
    const {name ,imageURL, description, ingredients} = recipeData;
    return (
        <div className="recipe-card">
            <div className="name">{name}</div>
            <img className="image" src={imageURL} alt={name}/> 
            <div className="description">{description}</div>
            <div className="ingredients">{ingredients}</div>
            
         </div>  
    )
}

export default Recipe