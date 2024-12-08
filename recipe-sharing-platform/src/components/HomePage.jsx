import React, { useState, useEffect } from "react";
import data from "../data.json"; 

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(data);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Recipe Sharing Platform
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
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
          ))
        ) : (
          <p className="text-gray-500">Loading recipes...</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
