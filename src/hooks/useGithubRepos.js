import { useEffect, useState } from "react";
import customProjects from "../data/projects";

const USERNAME = "Eyongtarh";

export default function useGithubRepos() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadRepos() {
      try {
        const response = await fetch(
          `https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=100`,
        );

        if (!response.ok) {
          throw new Error("Unable to fetch repositories.");
        }

        const repos = await response.json();

        const merged = repos
          .filter((repo) => !repo.fork)
          .map((repo) => {
            const custom = customProjects.find((p) => p.github === repo.name);

            return {
              ...repo,
              ...custom,
            };
          })
          .filter((repo) => repo.featured)
          .sort((a, b) => a.order - b.order);

        setProjects(merged);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadRepos();
  }, []);

  return { projects, loading, error };
}
