// Carousel component
import React, { useState } from "react";
import { Link } from "react-router-dom";
import iconFavorite from "../assets/images/favoritar.png";
import iconNotFavorite from "../assets/images/desfavoritar.png";
import left from "../assets/images/left-arrow.png";
import right from "../assets/images/right-arrow.png";

function Carousel({ foodData, toggleFavorite }) {
  const [card, setCard] = useState(0);

  const nextCard = () => {
    if (card < foodData.length - 2) {
      setCard(card + 2);
    }
  };

  const previousCard = () => {
    if (card > 0) {
      setCard(card - 2);
    }
  };

  return (
    <>
      <div className="carousel-container">
        <a className="arrow" onClick={previousCard}><img src={left} alt="left arrow"/></a>
        <article key={foodData[card].id}>
          <div className="carousel-div">
            <div className="card">
              <div id="bigFoodPicture">
                <img src={foodData[card].image} alt={foodData[card].name} />
              </div>
              <div>
                <h3>{foodData[card].name}</h3>
                <p>Calories: {foodData[card].calories}</p>
                <p>Servings: {foodData[card].servings}</p>
              </div>
              <div className="bigCardButtons">
                <Link id="goRecipeBtn" to={`/foods/${foodData[card].id}`}>
                  <button>Go to recipe</button>
                </Link>
                <div className="favoriteButton">
                  <a>
                    <img
                      onClick={() => toggleFavorite(foodData[card].id)}
                      src={foodData[card].liked ? iconNotFavorite : iconFavorite}
                      alt="Favorite"
                    />
                  </a>
                </div>
              </div>
            </div>
            {foodData[card + 1] && (
              <div className="card">
                <div id="bigFoodPicture">
                  <img src={foodData[card + 1].image} alt={foodData[card + 1].name} />
                </div>
                <div>
                  <h3>{foodData[card + 1].name}</h3>
                  <p>Calories: {foodData[card + 1].calories}</p>
                  <p>Servings: {foodData[card + 1].servings}</p>
                </div>
                <div className="bigCardButtons">
                  <Link id="goRecipeBtn" to={`/foods/${foodData[card + 1].id}`}>
                    <button>Go to recipe</button>
                  </Link>
                  <div className="favoriteButton">
                    <a>
                      <img
                        onClick={() => toggleFavorite(foodData[card + 1].id)}
                        src={foodData[card + 1].liked ? iconNotFavorite : iconFavorite}
                        alt="Favorite"
                      />
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </article >
        <a className="arrow" onClick={nextCard}><img src={right} alt="right arrow" /></a>
      </div >
    </>
  );
}

export default Carousel;
