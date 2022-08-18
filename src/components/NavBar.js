import React from "react";
import { NavLink } from "react-router-dom"
function NavBar() {
    return ( 
        <div>
            <NavLink className="nav-links" exact to="/">Home</NavLink>
            <NavLink className="nav-links" exact to="/about">About</NavLink>
            <NavLink className="nav-links" exact to="/recipes">Recipes</NavLink>
        </div>
    )
}

export default NavBar