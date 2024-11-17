import { useParams } from 'react-router-dom'; // Import useParams from react-router-dom
import useRecipeStore from '../components/recipeStore'; // Import the Zustand store
import EditRecipeForm from './EditRecipeForm'; // Import EditRecipeForm
import DeleteRecipeButton from './DeleteRecipeButton'; // Import DeleteRecipeButton

const RecipeDetails = () => {
  const { recipeId } = useParams(); // Extract recipeId from URL params
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === parseInt(recipeId)) // Find the recipe with the matching id
  );

  if (!recipe) return <p>Recipe not found</p>; // Return if no recipe is found

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <EditRecipeForm recipe={recipe} /> {/* Pass the recipe object to the EditRecipeForm */}
      <DeleteRecipeButton recipeId={recipeId} /> {/* Pass the recipeId to the DeleteRecipeButton */}
    </div>
  );
};

export default RecipeDetails;

