import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json'; // Adjust the path based on where data.json is located in src

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const selectedRecipe = data.find(item => item.id === parseInt(id));
    setRecipe(selectedRecipe);
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
  <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
  <img
    src={recipe.image}
    alt={recipe.title}
    className="w-full h-64 object-cover mb-6 rounded"
  />
  <h2 className="text-xl font-semibold mb-2">Ingredients:</h2>
  <ul className="list-disc pl-6 mb-6">
    {recipe.ingredients.map((ingredient, index) => (
      <li key={index}>{ingredient}</li>
    ))}
  </ul>
  <h2 className="text-xl font-semibold mb-2">Instructions:</h2>
  <ol className="list-decimal pl-6">
    {recipe.instructions.map((step, index) => (
      <li key={index} className="mb-2">{step}</li>
    ))}
  </ol>
</div>

  );
};

export default RecipeDetail;
