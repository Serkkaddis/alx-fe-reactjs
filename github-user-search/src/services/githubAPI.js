import axios from 'axios';

const BASE_URL = 'https://api.github.com';
const headers = {
    Authorization: `token ${import.meta.env.VITE_GITHUB_API_KEY}`,
  };
  

export const fetchGitHubUser = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching GitHub user:', error);
    throw error;
  }
};
