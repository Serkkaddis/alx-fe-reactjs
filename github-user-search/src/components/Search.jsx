import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';
import axios from "axios";

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [results, setResults] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResults([]);
    try {
        const userResults = await fetchUserData(username, location, minRepos); 
      setResults(userResults);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4">GitHub User Search</h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub Username"
          className="border p-2 rounded"
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location (Optional)"
          className="border p-2 rounded"
        />
        <input
          type="number"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          placeholder="Min Repos (Optional)"
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-blue-500 text-white py-2 rounded">Search</button>
      </form>

      {loading && <p className="text-center mt-4">Loading...</p>}
      {error && <p className="text-center mt-4 text-red-500">{error}</p>}

      <div className="mt-6">
        {results.length > 0 && results.map((user) => (
          <div key={user.id} className="border p-4 mb-4 rounded">
            <a href={user.html_url} className="font-bold text-blue-500">
              {user.login}
            </a>
            <p>Location: {user.location || 'N/A'}</p>
            <p>Repositories: {user.public_repos}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
