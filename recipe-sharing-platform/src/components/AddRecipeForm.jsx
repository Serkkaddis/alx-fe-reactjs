import React, { useState } from "react";

const AddRecipeForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    preparationSteps: "",
  });

  const [errors, setErrors] = useState({
    title: "",
    ingredients: "",
    preparationSteps: "",
  });

  const handleChange = (e) => {
    console.log("Input Change Triggered", e.target.name, e.target.value);
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.title) newErrors.title = "Recipe title is required.";
    if (!formData.ingredients) newErrors.ingredients = "Ingredients are required.";
    if (!formData.preparationSteps) newErrors.preparationSteps = "Preparation steps are required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("Form data:", formData);
      // Reset form after successful submission (optional)
      setFormData({
        title: "",
        ingredients: "",
        preparationSteps: "",
      });
    }
  };

  return (
    <div className="container mx-auto p-4 shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Add a New Recipe</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title Field */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter recipe title"
          />
          {errors.title && <div className="text-red-500 text-sm mt-1">{errors.title}</div>}
        </div>

        {/* Ingredients Field */}
        <div>
          <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700">
            Ingredients
          </label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="List the ingredients"
          />
          {errors.ingredients && <div className="text-red-500 text-sm mt-1">{errors.ingredients}</div>}
        </div>

        {/* Preparation Steps Field */}
        <div>
          <label htmlFor="preparationSteps" className="block text-sm font-medium text-gray-700">
            Preparation Steps
          </label>
          <textarea
            id="preparationSteps"
            name="preparationSteps"
            value={formData.preparationSteps}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Describe the preparation steps"
          />
          {errors.preparationSteps && <div className="text-red-500 text-sm mt-1">{errors.preparationSteps}</div>}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Submit Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;
