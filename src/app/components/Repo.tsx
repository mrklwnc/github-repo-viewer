import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

async function fetchRepo(name: string) {
  const res = await fetch(`https://api.github.com/repos/bradtraversy/${name}`);

  const repo = await res.json();

  return repo;
}

const Repo: any = async ({ name }: any) => {
  const repo = await fetchRepo(name);

  return (
    <>
      <h1 className="text-3xl hover:underline">
        <Link href={`https://github.com/bradtraversy/${repo.name}`}>
          {repo.name}
        </Link>
      </h1>
      <p>{repo.description}</p>
      <div className="card-stats">
        <div className="card-stat">
          <FaStar />
          <span className="mr-3">{repo.stargazers_count}</span>

          <FaCodeBranch />
          <span className="mr-3">{repo.forks_count}</span>

          <FaEye />
          <span className="mr-3">{repo.watchers_count}</span>
        </div>
      </div>
    </>
  );
};

export default Repo;
