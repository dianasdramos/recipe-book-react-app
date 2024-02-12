import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import iconFavorite from "../assets/images/favoritar.png";
import iconNotFavorite from "../assets/images/desfavoritar.png";

function Filter({ filteredData, toggleFavorite }) {
  const [foods, setFoods] = useState(filteredData); // Use filteredData as initial state because I want to show alldata not only the filtereed one from homepage.

  // Update foods state when filteredData prop changes in homepage
  useEffect(() => {
    setFoods(filteredData);
  }, [filteredData]);

  const resetFilter = () => {
    setFoods(filteredData); // Reset to original filteredData
  };

  //here I sort the calories in descending order by calling: (a, b) => b.calories - a.calories. It does not change the original array.
  const caloriesBtn = () => {
    const filteredByCalories = [...foods].sort((a, b) => b.calories - a.calories);
    setFoods(filteredByCalories);
  };

  //here I call the foods from the useState and filter them by item, if the item has the state.liked then it is checked if the liked property of each item is defined and evaluates to true to then display they. If you don't check it causes error and nothing is displayed because its not defined.We set the variable to the useState so it can be rendered when clicked.
  const likedBtn = () => {
    const filteredByLiked = foods.filter((item) => item.liked !== undefined && item.liked);
    setFoods(filteredByLiked);
  };

  //toggleFavorite function is called when the heart icon is clicked and it is used food not filteredData because we are mapping through food
  return (
    <>
      <div className="filter-container">
        <button onClick={caloriesBtn}>Filter by Calories</button>
        <button onClick={likedBtn}>Filter by Liked</button>
        <button onClick={resetFilter}>Clear filter</button>

        <div id="smallCardGrid">
          {foods.map((food) => (
            <article key={food.id}>
              <div id="smallCard">
                <div className="heartIconContainer">
                  <a>
                    <img
                      onClick={() => toggleFavorite(food.id)}
                      className="buttonStyle2"
                      src={food.liked ? iconFavorite : iconNotFavorite}
                      alt="Favorite"
                    />
                  </a>
                </div>
                <Link to={`/recipes/${food.id}`}>
                  <div id="smallFoodPicture">
                    <img src={food.image} alt={`${food.name} image`} />
                  </div>
                  <div className="smallCardText">
                    <h3>{food.name}</h3>
                    <p>Calories: {food.calories}</p>
                    <p>Servings: {food.servings}</p>
                  </div>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}

export default Filter;
