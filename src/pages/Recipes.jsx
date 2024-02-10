import { Link } from 'react-router-dom';
import AddRecipe from '../components/UploadRecipe';
import React, { useState } from 'react';
import recipes from '../data/data.json';

function Recipes() {
  const [recipe, setRecipes] = useState(recipes);

  function addNewRecipe(newRecipe) {
    setRecipes((prevRecipes) => [...prevRecipes, newRecipe]);
  }

  const setDeleteBtn = (id) => {
    const filteredRecipes = recipe.filter((placeObject) => placeObject.id !== id);
    setRecipes(filteredRecipes );
};

  return (
    <section className="container">
      <section className="containerNewRecipe">
        <div>
          <h3>Add Your recipe</h3>
          <AddRecipe addNewRecipe={addNewRecipe} />
        </div>
      </section>
      <div id="smallCardGrid">
        {recipes.map((recipe) => (
          <article key={recipe.id}>
            <Link id="smallCardRecipes" to={`/recipes/${recipe.id}`}>
              <div id="smallFoodPicture">
                <img src={recipe.image} alt={recipe.name} />
              </div>
              <div className='smallCardText'>
                <h3>{recipe.name}</h3>
                <p>Calories: {recipe.calories}</p>
                <p>Servings: {recipe.servings}</p>
              </div>
              <div id="deleteButton">
                        <button onClick={() => setDeleteBtn(recipe.id)} className="buttonStyle2">Delete</button>
              </div>
            </Link>
          </article>
        ))}
      </div>
      
    </section>
  );
}

export default Recipes;
