import {useState} from 'react';

function AddRecipe(props) {
  const [name, setName] = useState("");
  const [calories, setCalories] = useState(0);
  const [image, setImage] = useState(null);
  const [servings, setServings] = useState(0);
  const [imageFile, setImageFile] = useState(null); // To store the uploaded file
  const [imagePreview, setImagePreview] = useState(""); // To display a preview of the uploaded image

  function handleSubmit(e){
    // Prevent Default Action of a Form' submission (refresh the page).
    // Why? With the refresh of a page, the state values go to original values. 

    e.preventDefault();

    // Create a new Object with name, calories, image, servings properties
    const newRecipe = {name, calories: Number(calories), image, servings};

    // This way, we add the new movie to the movie list parent component.
    props.addNewRecipe(newRecipe);

    // Reset the state, so I don't have to delete all the fields if I want to create a second new Movie.
    setName("");
    setCalories(0);
    setImage(null);
    setServings(0);
  }

  function handleImageChange(e) {
    const file = e.target.files[0];
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label>name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>calories</label>
        <input
          type="text"
          name="calories"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
        />
        <label>Picture</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
        {imagePreview && <img src={imagePreview} alt="Preview" style={{ maxWidth: "150px", maxHeight: "150px" }} />}
        <label>Servings</label>
        <input
          type="number"
          name="servings"
          checked={servings}
          onChange={(e) => setServings(e.target.value)}
        />

        <button type="submit">Add a Recipe</button>
      </form>
    </section>
  );
}

export default AddRecipe;