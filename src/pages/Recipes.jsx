import foodData from "../data/data.json";
import { Link } from "react-router-dom";

function Recipes() {


  return (
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
                  <p>Servings: {food.servings}</p>
                </div>
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Recipes;
