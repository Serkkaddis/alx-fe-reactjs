import axios from 'axios';

export const fetchUserData = async (username, location, minRepos, page = 1) => {
  let query = `q=${username}`;
  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>=${minRepos}`;
  
  const url = `https://api.github.com/search/users?${query}&page=${page}`;
  const response = await axios.get(url);
  return response.data.items;
}