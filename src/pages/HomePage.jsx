
import foodData from "../data/data.json";
import Carousel from "../components/Carousel";
import { Link } from "react-router-dom";
import hero from "../assets/images/hero2.jpg"
function HomePage() {
  return (
    <section>
      <section className="container">
        <div id="hero">
          <img
            src={hero}
            alt=""
          />
          <h1>Recipes Book</h1>
          <h3>
            Here all your best recipes are save and shared with your loved ones.
          </h3>
        </div>
      </section>
      <section className="container">
        <Carousel cardsData={foodData} />
      </section>
      <section className="container">
        <div id="smallCardGrid">
          {foodData.map((food) => {
            return (
              <article key={food.id}>
                <Link id="smallCard" to={`/foods/${food.id}`}>
                  <div id="smallFoodPicture">
                    <img src={food.image} />
                  </div>
                  <div>
                    <h3>{food.name}</h3>
                    <p>Calories: {food.calories}</p>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      </section>
    </section>
  );
}
export default HomePage;

