import { useRecipeStore } from '../components/recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const handleDelete = () => {
    deleteRecipe(recipeId);
  };

  return (
    <button onClick={handleDelete} className="bg-red-500 text-white rounded-md py-1 px-2">
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
