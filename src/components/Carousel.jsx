import React, { useState } from "react";
import { Link } from "react-router-dom";

/* This function cardsData as parameter, this parameter later will be = <foodData className="json">
I create a a nextCard anonymous function and previousCard anonymous function to move around the object array(json).
 To move as next if the card is not the last index we add 1 to move to the next index. If the card is not the 0 index we decrease 1 to move back.  
 It is created the use state function to aply in those anonymous functions.*/
function Carousel({ cardsData }) {
  const [card, setCard] = useState(0);

  const nextCard = () => {
    if (card < cardsData.length - 1) {
      setCard(card + 1);
    }
  };

  const previousCard = () => {
    if (card > 0) {
      setCard(card - 1);
    }
  };

  return (
    <>
      <button onClick={previousCard}>Left</button>
      <article key={cardsData[card].id}>
        <Link id="bigCard" to={`/foods/${cardsData[card].id}`}>
          <div id="bigFoodPicture">
            <img src={cardsData[card].image} alt={cardsData[card].name} />
          </div>
          <div>
            <h3>{cardsData[card].name}</h3>
            <p>Calories: {cardsData[card].calories}</p>
            <p>Servings: {cardsData[card].servings}</p>
          </div>
        </Link>
      </article>
      <button onClick={nextCard}>Right</button>
    </>
  );
}

export default Carousel;
