import axios from "axios";

const GITHUB_API = "https://api.github.com";

export const fetchGitHubRepos = async (username: string, token: string) => {
  console.log("Fetching GitHub repos for user:", username, token);
  try {
    const response = await axios.get(`${GITHUB_API}/users/${username}/repos`, {
      headers: {
        Authorization: `token ${token}`,
        Accept: "application/vnd.github.v3+json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    throw error;
  }
};

export const fetchGitHubRepoDetails = async (username: string, repo: string, token: string) => {
  try {
    const response = await axios.get(`${GITHUB_API}/repos/${username}/${repo}`, {
      headers: {
        Authorization: `token ${token}`,
        Accept: "application/vnd.github.v3+json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching GitHub repo details:", error);
    throw error;
  }
};

