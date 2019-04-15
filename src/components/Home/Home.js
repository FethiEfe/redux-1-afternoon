import React, { Component } from "react";
import { Link } from "react-router-dom";
import RecipeCard from "./../RecipeCard/RecipeCard";
import "./Home.css";
import store from "./../../store"

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: store.getState().recipes
    };
    // this.clearInput = this.clearInput.bind(this)
  }

  
  

  render() {
    const recipes = this.state.recipes.map((recipe, i) => {
      return (
        <RecipeCard
          key={i}
          name={recipe.name}
          category={recipe.category}
          authorFirstName={recipe.authorFirstName}
          authorLastName={recipe.authorLastName}
          ingredients={recipe.ingredients}
          instruction={recipe.instruction}
        />
      );
    });
    return (
      <div className="Home">
        <Link to="/add/name">
          <button >Create New Recipe</button>
        </Link>
        <div className="card_container">{recipes}</div>
      </div>
    );
  }
}

export default Home;
