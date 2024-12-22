import axios from 'axios';

export const fetchUserData = async (username, location, minRepos) => {
  const queryParams = new URLSearchParams();

  if (username) queryParams.append('q', `user:${username}`);
  if (location) queryParams.append('location', location);
  if (minRepos) queryParams.append('min_repos', minRepos);

  try {
    const response = await axios.get(`https://api.github.com/search/users?${queryParams.toString()}`);
    return response.data.items; // Return the users' data from the search
  } catch (error) {
    throw new Error('Failed to fetch user data');
  }
};
