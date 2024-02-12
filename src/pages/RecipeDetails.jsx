import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";

function RecipeDetails() {

    // Access the location (useLocation from react-router-dom) and get the state (location.state). 
    // As we pass the food from recipes page the state will have the food object
    const location = useLocation();
    const state = location.state;

    // Like and dislike
    
    return (
            <div id="recipeDetails">
                <div>
                    <h2 id="recipeDetailsTitle">{state.name}</h2>
                    <div>
                        <img id="recipeDetailsPic" src={state.image} />
                    </div>
                    <div id="recipeDetailsInfo">
                        <p>Calories: {state.calories}</p>
                        <p>Servings: {state.servings}</p>
                    </div>
                    <div id="detailsBackButton">
                        <Link to="/recipes"><button>Back</button></Link>
                    </div>
                </div>
                
            </div>
    )
}

export default RecipeDetails;