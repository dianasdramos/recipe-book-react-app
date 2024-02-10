import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import iconFavorite from "../assets/images/favoritar.png";
import iconNotFavorite from "../assets/images/desfavoritar.png";

function Filter({ filtered, setFilteredData, toggleFavorite }) {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    setMenuItems(filtered);
  }, [filtered]);

  const resetFilter = () => {
	const allFoods = [...filtered];
	setMenuItems(allFoods);
  };

  const caloriesBtn = () => {
    const filteredByCalories = menuItems.slice().sort((a, b) => b.calories - a.calories);
    setMenuItems(filteredByCalories);
  };

  const likedBtn = () => {
    const filteredByLiked = menuItems.filter((item) => item.liked);
    setMenuItems(filteredByLiked);
  };

  return (
    <>
      <button onClick={caloriesBtn}>Filter by Calories</button>
      <button onClick={likedBtn}>Filter by Liked</button>
      <button onClick={resetFilter}>Clear filter</button>

      <div id="smallCardGrid">
        {menuItems.map((food) => (
          <article key={food.id}>
            <div className="Filter-container">
              <div>
                <a>
                  <img
                    onClick={() => toggleFavorite(food.id)}
                    className="buttonStyle2"
                    src={food.liked ? iconNotFavorite : iconFavorite}
                    alt="Favorite"
                  />
                </a>
              </div>
              <Link id="smallCard" to={`/foods/${food.id}`}>
                <div id="smallFoodPicture">
                  <img src={food.image} alt={`${food.name} image`} />
                </div>
                <div>
                  <h3>{food.name}</h3>
                  <p>Calories: {food.calories}</p>
                  <p>Servings: {food.servings}</p>
                </div>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

export default Filter;
