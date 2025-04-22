import { fetchGitHubRepos } from "../lib/github";

export default async function Home() {
  const username = "danhenriquex";
  const token = "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";

  const repos = await fetchGitHubRepos(username, token);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">GitHub Repositories</h1>
      <ul className="space-y-2">
        {repos.map((repo: any) => (
          <li key={repo.id} className="p-4 bg-gray-100 rounded-xl">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {repo.name}
            </a>
            <p className="text-gray-700">{repo.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
