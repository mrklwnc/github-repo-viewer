import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

interface Repo {
  name: string;
  url: string;
  id: number;
  description: string;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
  repos: [];
}

// Fetch Repositories from Github API
async function fetchRepos() {
  const res = await fetch(`https://api.github.com/users/bradtraversy/repos`, {
    next: {
      revalidate: 60,
    },
  });

  // Loading... to wait 1 second
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const repos = await res.json();

  console.log(repos);
  return repos;
}

const ReposPage = async () => {
  const repos: Repo[] = await fetchRepos();
  return (
    <div className="container">
      <h2 className="text-xl">Repositories</h2>
      <ul className="repo-list">
        {repos.map((repo) => (
          <li className="repo-list" key={repo.id}>
            <Link href={`/code/repos/${repo.name}`}>
              <h3>{repo.name}</h3>
              <p>{repo.description}</p>
              <div className="repo-details">
                <span>
                  <FaStar /> {repo.stargazers_count}
                </span>

                <span>
                  <FaCodeBranch /> {repo.forks_count}
                </span>

                <span>
                  <FaEye /> {repo.watchers_count}
                </span>
              </div>
            </Link>
          </li>
        ))}

        {/* <RepoLists repoLists={repos} /> */}
      </ul>
    </div>
  );
};

export default ReposPage;
