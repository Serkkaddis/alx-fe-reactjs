import React, { useState } from "react";

const AddRecipeForm = () => {
  // Define state variables for each field
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparationSteps, setPreparationSteps] = useState("");
  const [error, setError] = useState("");

  // Handle form field changes
  const handleInputChange = (e) => {
    console.log("Input Change Triggered", e.target.name, e.target.value);
    const { name, value } = e.target;

    if (name === "title") {
      setTitle(value);
    } else if (name === "ingredients") {
      setIngredients(value);
    } else if (name === "preparationSteps") {
      setPreparationSteps(value);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation check
    if (!title || !ingredients || !preparationSteps) {
      setError("All fields are required.");
      return;
    }

    // If everything is valid, handle the form submission
    console.log("Recipe Submitted:", { title, ingredients, preparationSteps });

    // Reset form
    setTitle("");
    setIngredients("");
    setPreparationSteps("");
    setError("");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Add a New Recipe</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Recipe Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter recipe title"
          />
        </div>

        <div>
          <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700">Ingredients</label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={ingredients}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="List the ingredients"
          />
        </div>

        <div>
          <label htmlFor="preparationSteps" className="block text-sm font-medium text-gray-700">Preparation Steps</label>
          <textarea
            id="preparationSteps"
            name="preparationSteps"
            value={preparationSteps}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Describe the preparation steps"
          />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
