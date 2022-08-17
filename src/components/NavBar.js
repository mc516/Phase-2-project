import React from "react";
import { NavLink } from "react-router-dom"
function NavBar() {
    return ( 
        <div>
            <NavLink exact to="/">Home</NavLink>
            <NavLink exact to="/about">About</NavLink>
            <NavLink exact to="/recipes">Recipes</NavLink>
        </div>
    )
}

export default NavBar