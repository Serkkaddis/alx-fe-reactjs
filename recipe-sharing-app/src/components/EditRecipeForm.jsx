import { useState, useEffect } from 'react';
import { useRecipeStore } from '../components/recipeStore';
import { useNavigate } from 'react-router-dom';

const EditRecipeForm = ({ recipeId }) => {
  // Get the recipe to edit from the Zustand store using the recipeId
  const recipe = useRecipeStore((state) => 
    state.recipes.find((recipe) => recipe.id === recipeId)
  );

  const { updateRecipe } = useRecipeStore(state => state);
  const navigate = useNavigate();  // for navigation after editing

  // Local state for the form inputs
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // Initialize form fields with current recipe data when component mounts
  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title);
      setDescription(recipe.description);
    }
  }, [recipe]);

  // Handle form submission (prevent default and update recipe)
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form from reloading the page

    // Update the recipe in the store
    if (recipe) {
      updateRecipe({
        id: recipe.id,
        title: title,
        description: description,
      });
    }

    // Navigate back to the main recipe list or details page after edit
    navigate('/');
  };

  // If recipe is not found, return an error message or redirect
  if (!recipe) {
    return <p>Recipe not found!</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Recipe</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;
