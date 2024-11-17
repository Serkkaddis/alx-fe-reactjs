import React from 'react';
import useRecipeStore from '../components/recipeStore';
import { Link } from 'react-router-dom';
import FavoriteButton from './FavoriteButton';  // Import the FavoriteButton component

const RecipeList = () => {
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);

  return (
    <div>
      {filteredRecipes.length > 0 ? (
        filteredRecipes.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <Link to={`/recipe/${recipe.id}`}>View Details</Link>
            {/* Add the FavoriteButton here and pass the recipe id */}
            <FavoriteButton recipeId={recipe.id} />
          </div>
        ))
      ) : (
        <p>No recipes found</p>
      )}
    </div>
  );
};

export default RecipeList;
