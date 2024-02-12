// Carousel component
import React, { useState } from "react";
import { Link } from "react-router-dom";
import iconFavorite from "../assets/images/favoritar.png";
import iconNotFavorite from "../assets/images/desfavoritar.png";
import left from "../assets/images/left-arrow.png";
import right from "../assets/images/right-arrow.png";
import foodData from "../data/data.json";

//foodData (json file) and toggleFavorite (is because more than one component has it, such as filter too.) are props from homePage.
function Carousel({ filteredData, toggleFavorite }) {
  const [card, setCard] = useState(0);

  // for the next card to show we use the useState to render my screen. It was created an anonymous function where, if my array of objects(foodData) is lower than my array legth -1, meaning 0 we add 2 to show the next two index numbers of the array, otherwise it would repeat one picture visualization. We use the operator % here to get the index by the remainder, so we can catch always the next number from the array.
  const nextCard = () => {
    if (card < foodData.length - 1) {
      setCard((card + 2) % foodData.length);
    }
  };

  //for the previous we just check if is higher than 0 and decrease two in the array index.
  const previousCard = () => {
    if (card > 0) {
      setCard(card - 2);
    }
  };
  /* {foodData[card].image} we call the items fron the object array by calling the name of the json file, then inside square brackets the element by its index and .image to call the property image of the object. */

  /* inside the buttons <a className="arrow" onClick={nextCard}><img src={right} alt="right arrow" /></a> we call the function we create to move the cards by calling the useState onClick */

  /* the Link function from react was called <Link id="goRecipeBtn" to={`/foods/${foodData[card].id}`}><button>Go to recipe</button></Link> to make the button go to the recipe details page */

  /* <div className="favoriteButton"><a><img   onClick={() => toggleFavorite(filteredData[card].id)}
                      src={filteredData[card].liked ? iconNotFavorite : iconFavorite}
                      alt="Favorite"
                    /></a></div>   Here we call the function from homepage where we associate the liked state by id. the source will provide the heart picture according to its state*/

  /* Use filteredData only within the logic related to toggling the liked state (e.g., in the favoriteButton component) because it came as props.
Use foodData directly in the rest of the Carousel component to render the carousel items and their details. */

  return (
    <>
      <div className="carousel-container">
        <div className="arrow" onClick={previousCard}>
          <img src={left} alt="left arrow" />
        </div>
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
                <Link id="goRecipeBtn" to={`/recipeDetails/ ${foodData[card].id}`}>
                  <button>Go to recipe</button>
                </Link>
                <div className="favoriteButton">
                  <img
                    onClick={() => toggleFavorite(filteredData[card].id)}
                    src={
                      filteredData[card].liked ? iconFavorite : iconNotFavorite
                    }
                    alt="Favorite"
                  />
                </div>
              </div>
            </div>
          </div>
        </article>
        <article key={foodData[card + 1].id}>
          <div className="carousel-div">
            <div className="card">
              <div id="bigFoodPicture">
                <img src={foodData[card  + 1].image} alt={foodData[card  + 1].name} />
              </div>
              <div>
                <h3>{foodData[card  + 1].name}</h3>
                <p>Calories: {foodData[card  + 1].calories}</p>
                <p>Servings: {foodData[card  + 1].servings}</p>
              </div>
              <div className="bigCardButtons">
                <Link id="goRecipeBtn" to={`/recipes/${foodData[card  + 1].id}`}>
                  <button>Go to recipe</button>
                </Link>
                <div className="favoriteButton">
                  <img
                    onClick={() => toggleFavorite(filteredData[card  + 1].id)}
                    src={
                      filteredData[card  + 1].liked ? iconFavorite : iconNotFavorite
                    }
                    alt="Favorite"
                  />
                </div>
              </div>
            </div>
          </div>
        </article>
        <div className="arrow" onClick={nextCard}>
          <img src={right} alt="right arrow" />
        </div>
      </div>
    </>
  );
}

export default Carousel;
