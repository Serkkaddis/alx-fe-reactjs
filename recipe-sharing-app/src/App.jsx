import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import AddRecipeForm from './components/AddRecipeForm';
import EditRecipeForm from './components/EditRecipeForm';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <h1>Recipe Sharing App</h1>
      <SearchBar />
      <RecipeList />
      <FavoritesList />
      <RecommendationsList />

      {/* Define Routes for different pages */}
      <Routes>
        <Route path="/" element={<RecipeList />} />  {/* Home page - Recipe list */}
        <Route path="/recipe/:id" element={<RecipeDetails />} />  {/* Recipe details page */}
        <Route path="/edit/:id" element={<EditRecipeForm />} />  {/* Edit recipe page */}
        <Route path="/add" element={<AddRecipeForm />} />  {/* Add new recipe form */}
      
      </Routes>
    </div>
  );
}

export default App;
