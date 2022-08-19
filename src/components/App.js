import React from "react";
import Home from "./Home"
import About from "./About"
import Recipes from "./RecipesPage";
import NavBar from "./NavBar";
import NewRecipe from "./NewRecipe";
import {Route, Switch} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/recipes">
          <Recipes />
        </Route>
        <Route path="/recipes/new">
          <NewRecipe />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
