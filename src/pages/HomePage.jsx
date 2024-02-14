import React, { useState } from "react";
import foodData from "../data/data.json";
import Carousel from "../components/Carousel";
import Filter from "../components/Filter";
import hero from "../assets/images/hero2.jpg";
import { Link } from "react-router-dom";

function HomePage() {
  const [filteredData, setFilteredData] = useState(foodData);// just making a copy of foodData, for the filter.
  const [showAll, setShowAll] = useState(true);

  //since there isn't the porperty liked in thw json file we need to create it in each item from th object array. Also it has to be rendered, so we use the useState. With .map we can get every item in the json file by calling the spread operator(...) and setting the initial value as false.
  const [foodItemsWithLikedState, setFoodItemsWithLikedState] = useState(
    foodData.map((item) => ({ ...item, liked: false }))
  );

  //create first the useState function to then put the toggleFavorite function in it.

  //now that we have the.liked property in each item fron the json file we can then create the toggle by id. so we create a variable that is set with the new array  with the property (foodItemsWithLikedState), where we map it to compare if the id is the same of if exists, if it is, we change the liked property by sayng !item.liked that was initially false, else we return the item without modifications. On the components we have the pictures of the hearts to change visually it, so this part of the code is on the component and not here also because there we create the divs and not here. I didn't put the toggleFavorite there because we use it here on the page.
  const toggleFavorite = (id) => {
    const updatedItems = foodItemsWithLikedState.map((item) =>
      item.id === id ? { ...item, liked: !item.liked } : item
    );
    setFoodItemsWithLikedState(updatedItems);
  };

  //here it is created a function to show only the favorite recipes.We get the id as parameter.Then we assign a variable that holds the map funcction of the filteredData(copy of json file) and compare if the id is the same of any id in the array, if so we return in each foodItem via the ...operator the liked property to true, if not nothing changes. To finally display the favorite recipes in a list we call it by the useState of setFilteredData with the constant created here. This function will be used in here, but the button is created in the component.
  const filterFavorite = (id) => {
    const updatedData = filteredData.map((foodItem) => {
      if (foodItem.id === id) {
        return { ...foodItem, liked: foodItem.liked }; 
      }
      return foodItem;
    });
    setFilteredData(updatedData);
  };

  return (
    <section>
      <section className="container">
        <div>
          <img id="heroImg" src={hero} alt="Hero image" />
          <h1 id="heroTitle">Recipes Book</h1>
          <h3 id="heroText">
            Here all your best recipes are saved <br /> and shared with your
            loved ones.
          </h3>
        </div>
      </section>
      <section className="container">
      <Link id="goRecipesBtn" to={`/recipes`}>
        <h3 id="goRecipesBtnText"><a>See all recipes</a></h3></Link>
        <Carousel
          filteredData={foodItemsWithLikedState}
          toggleFavorite={toggleFavorite}
        />
      </section>
      <section className="container">
        <div>
          <h3 id="filterTitle">Recipes filter</h3>
          <Filter
            filteredData={foodItemsWithLikedState}
            toggleFavorite={toggleFavorite}
          />
        </div>
      </section>
    </section>
  );
}

export default HomePage;
