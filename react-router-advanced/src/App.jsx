import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';
import BlogPost from './components/BlogPost';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  const isAuthenticated = true; // Set this to true or false based on your actual auth status

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/:postId" element={<BlogPost />} />
      
      {/* Protected Route */}
      <Route
        path="/profile/*"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Profile />
          </ProtectedRoute>
        }
      />
      
      {/* Sub-routes for Profile */}
      <Route path="/profile/details" element={<ProfileDetails />} />
      <Route path="/profile/settings" element={<ProfileSettings />} />
    </Routes>
  );
};

export default App;
