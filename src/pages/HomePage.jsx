// HomePage component
import React, { useState } from "react";
import foodData from "../data/data.json";
import Carousel from "../components/Carousel";
import Filter from "../components/Filter";
import hero from "../assets/images/hero2.jpg";


function HomePage() {
  const [filteredData, setFilteredData] = useState(foodData);
  const [showAll, setShowAll] = useState(true);
 
  const toggleFavorite = (id) => {
    const updatedData = filteredData.map((foodItem) => {
      if (foodItem.id === id) {
        return { ...foodItem, liked: !foodItem.liked }; 
      }
      return foodItem;
    });
    setFilteredData(updatedData);
  };

  return (
    <section>
      <section className="container">
        <div>
          <img id="heroImg" src={hero} alt="" />
          <h1 id="heroTitle">Recipes Book</h1>
          <h3 id="heroText">Here all your best recipes are saved <br /> and shared with your loved ones.</h3>
        </div>
      </section>
      <section className="container">
        <Carousel foodData={foodData} toggleFavorite={toggleFavorite} />
      </section>
        <section className="container">
          <div>
            <h3 id="filterTitle">Recipes filter</h3>
            <Filter filtered={showAll ? foodData : filteredData} setFilteredData={setFilteredData} toggleFavorite={toggleFavorite} />
          </div>
        </section>
      </section>
  );
}

export default HomePage;
