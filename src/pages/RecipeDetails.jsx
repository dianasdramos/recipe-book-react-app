import {useParams} from "react-router-dom";

function RecipeDetails(props) {
    const { recipe } = props;

    return (
        <div className="RecipeCard">
            <h3>{recipe.name}</h3>
            <p>Calories: {recipe.calories}</p>
            <p>Servings: {recipe.servings}</p>
            <div>
                <button>Go to Recipes</button>
            </div>
        </div>
    );
}

export default RecipeDetails;
