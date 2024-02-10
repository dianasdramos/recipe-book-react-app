import {useState} from 'react';

function AddRecipe(props) {
  const [name, setName] = useState("");
  const [calories, setCalories] = useState(0);
  const [image, setImage] = useState(null);
  const [servings, setServings] = useState(0);
  const [imageFile, setImageFile] = useState(null); 
  const [imagePreview, setImagePreview] = useState(""); 

  function handleSubmit(e) {
    e.preventDefault();

    const newRecipe = { name, calories: Number(calories), image, servings };

    props.addNewRecipe(newRecipe);

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
        <label>Recipe Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Calories</label>
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
          value={servings}
          onChange={(e) => setServings(e.target.value)}
        />

        <button type="submit">Add</button>
      </form>
    </section>
  );
}

export default AddRecipe;