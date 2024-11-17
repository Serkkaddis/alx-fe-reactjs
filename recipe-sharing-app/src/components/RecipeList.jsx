import useRecipeStore from '../components/recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      <h2>Recipes</h2>
      {recipes.length === 0 ? (
        <p>No recipes added yet!</p>
      ) : (
        recipes.map((recipe) => (
          <div key={recipe.id} className="recipe">
            <Link to={`/recipes/${recipe.id}`}>
            <h3>{recipe.title}</h3>
            </Link>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
