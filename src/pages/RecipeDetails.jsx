import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import UpdateRecipe from "../components/UpdateRecipe";

function RecipeDetails(props) {
  const { recipeId } = useParams();
  const { recipes } = props;//props.recipes aqui envia - props enviaaaa, receber e atraves do componente

  // Access the location (useLocation from react-router-dom) and get the state (location.state).
  // As we pass the food from recipes page the state will have the food object
  /*const location = useLocation();
    const state = location.state;*/

  //console.log(recipeId);
  const foundRecipe = recipes.find((oneRecipe) => {
    return oneRecipe.id /* Data Type: Number */ == recipeId; // Data Type: String;
  });

  // Like and dislike

  return (
    <div id="recipeDetails">
      <section className="containerNewRecipe">
        <div>
          <h3>Update Your recipe</h3>
          <UpdateRecipe UpdateRecipe={UpdateRecipe} />
        </div>
      </section>
      <div>
        <h2 id="recipeDetailsTitle">{foundRecipe.name}</h2>
        <div>
          <img id="recipeDetailsPic" src={foundRecipe.image} />
        </div>
        <div id="recipeDetailsInfo">
          <p>Calories: {foundRecipe.calories}</p>
          <p>Servings: {foundRecipe.servings}</p>
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
