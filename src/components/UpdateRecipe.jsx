/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

function UpdateRecipe(props) {
  const { recipe, updateRecipe } = props;
  const id = recipe.id;
  const [name, setName] = useState(recipe.name);
  const [calories, setCalories] = useState(recipe.calories);
  const [image, setImage] = useState(recipe.image);
  const [servings, setServings] = useState(recipe.servings);


  function handleSubmit(e) {
    e.preventDefault();

    const updatedRecipe = { id, name, calories, image, servings };
	  updateRecipe(updatedRecipe);

    // Clear form fields after submission
    setName(updatedRecipe.name);
    setCalories(updatedRecipe.calories);
    setImage(updateRecipe.image);
    setServings(updatedRecipe.servings);
  }

  function handleImageChange(e) {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label>Recipe Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Calories</label>
        <input
          type="text"
          name="calories"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
        />
        <label>Picture</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
        <label>Servings</label>
        <input
          type="number"
          name="servings"
          value={servings}
          onChange={(e) => setServings(e.target.value)}
        />

        <button type="submit">Update</button>
      </form>
    </section>
  );
}

export default UpdateRecipe;
