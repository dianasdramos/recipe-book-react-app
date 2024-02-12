import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import UpdateRecipe from "../components/UpdateRecipe";

function RecipeDetails() {

  // Access the location (useLocation from react-router-dom) and get the state (location.state).
  // As we pass the food from recipes page the state will have the food object
  const location = useLocation();
  const state = location.state;
  const [actualRecipe, setActualRecipe] = useState(state);

  // Like and dislike
 
  return (
    <div id="recipeDetails">
      <section className="containerNewRecipe">
        <div>
          <h3>Update Your recipe</h3>
          <UpdateRecipe recipe={actualRecipe} updateRecipe={setActualRecipe}/>
        </div>
      </section>
      <div>
        <h2 id="recipeDetailsTitle">{actualRecipe.name}</h2>
        <div>
          <img id="recipeDetailsPic" src={actualRecipe.image} />
        </div>
        <div id="recipeDetailsInfo">
          <p>Calories: {actualRecipe.calories}</p>
          <p>Servings: {actualRecipe.servings}</p>
        </div>
        <div id="detailsBackButton">
          <Link to="/recipes">
            <button>Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetails;
