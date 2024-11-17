import React from 'react';
import useRecipeStore from '../components/recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);
  const filterRecipes = useRecipeStore(state => state.filterRecipes);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);  // Update search term
    filterRecipes();  // Apply filter based on updated search term
  };

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={handleSearchChange}
      style={{ marginBottom: '20px', padding: '10px' }}
    />
  );
};

export default SearchBar;