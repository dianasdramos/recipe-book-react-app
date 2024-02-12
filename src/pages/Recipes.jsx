import foodData from "../data/data.json";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import AddRecipe from "../components/AddRecipe";

function Recipes() {
  const [recipesList, setRecipesList] = useState(foodData);

  function addNewRecipe(newRecipe) {
    setRecipesList((addRecipes) => [...addRecipes, newRecipe]);
  }

  const getLabel = (calories) => {
      if (calories <= 175) {
          return <label className="labelLowCalories">Low calories</label>;
      } else if (calories >= 450) {
          return <label className="labelHighCalories">High calories</label>;
      }
  }

  const deleteRecipe = foodId => {
    let filteredRecipes = recipesList.filter(food => {
      return food.id !== foodId;
    });

    setRecipesList(filteredRecipes);
  }

  return (
    <section className="recipes">
      <section className="containerNewRecipe">
        <div>
          <h3>Add Your recipe</h3>
          <AddRecipe addNewRecipe={addNewRecipe} />
        </div>
      </section>
      <h1>Recipes Book</h1>

        {recipesList.map((food) => {
          return (
            <div id="recipesCardGrid" key={food.id}>
            <article>
              {/* Pass the food object in Link state attribute. This will be used in recipeDetails page to access the food data. 
              With this we do noot need to load (import) the data.json again  */}
              <Link id="recipeCard" to={`/recipeDetails/${food.id}`} state={food}>
                <div id="recipeFoodPicture">
                  <img src={food.image} />
                </div>
                <div>
                  <h3 id="recipeName">{food.name}</h3>
                  <p>Calories: {food.calories}</p>
                  {getLabel(food.calories)}
                  <p>Servings: {food.servings}</p>
                </div>
                <div>
                  <button onClick={(e) => { e.preventDefault(); deleteRecipe(food.id);}} id="deleteRecipe">Delete</button>
                </div>
              </Link>
              
            </article>
            </div>
          );
        })}

    </section>
  );
}

export default Recipes;
