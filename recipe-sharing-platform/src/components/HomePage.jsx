import React, { useState, useEffect } from "react";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  // Load mock data when the component mounts
  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Recipe Sharing Platform
      </h1>

      {/* Grid Layout for Recipes */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="rounded-t-lg object-cover w-full h-40"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {recipe.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2">{recipe.summary}</p>
              <button className="mt-4 text-blue-500 hover:text-blue-700">
                View Recipe
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
