import useRecipeStore from '../components/recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
  const { deleteRecipe } = useRecipeStore((state) => state);
  const navigate = useNavigate();  // To navigate after deletion

  // Handle recipe deletion
  const handleDelete = () => {
    deleteRecipe(recipeId);  // Call the delete function from the store
    navigate('/');  // Navigate to the home or main page after deletion
  };

  return (
    <button onClick={handleDelete}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
